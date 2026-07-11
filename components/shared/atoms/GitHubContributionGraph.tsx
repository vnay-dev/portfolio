"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

const GITHUB_USERNAME = "vnay-dev";
const CELL_SIZE = 7;
const CELL_GAP = 2;

/** GitHub dark-theme contribution greens */
const LEVEL_COLORS = [
  "#21262d", // 0 — empty (visible on #0d1117)
  "#0e4429", // 1
  "#006d32", // 2
  "#26a641", // 3
  "#39d353", // 4
] as const;

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionsResponse = {
  contributions: ContributionDay[];
};

type WeekDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
  empty?: boolean;
};

function toDateKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function startOfWeekSunday(date: Date) {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  next.setDate(next.getDate() - next.getDay());
  return next;
}

function buildWeeks(contributions: ContributionDay[]): WeekDay[][] {
  const byDate = new Map(contributions.map((day) => [day.date, day]));

  const end = new Date();
  end.setHours(0, 0, 0, 0);

  const oneYearAgo = new Date(end);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const start = startOfWeekSunday(oneYearAgo);

  const days: WeekDay[] = [];
  const cursor = new Date(start);

  while (cursor <= end) {
    const key = toDateKey(cursor);
    const match = byDate.get(key);
    if (match) {
      days.push({
        date: match.date,
        count: match.count,
        level: match.level,
      });
    } else if (cursor < oneYearAgo) {
      days.push({ date: key, count: 0, level: 0, empty: true });
    } else {
      days.push({ date: key, count: 0, level: 0 });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  const weeks: WeekDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}

function GraphSkeleton() {
  return (
    <div className="h-[70px] w-full animate-pulse rounded bg-[#21262d]" aria-hidden />
  );
}

/**
 * Compact GitHub-style contribution calendar (dark theme).
 * Scales down only when the tooltip is narrower than the graph (e.g. mobile).
 */
export function GitHubContributionGraph({
  username = GITHUB_USERNAME,
  onLayout,
}: {
  username?: string;
  onLayout?: () => void;
}) {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<ContributionsResponse>;
      })
      .then((data) => {
        if (!cancelled) setContributions(data.contributions ?? []);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const content = contentRef.current;
    if (!shell || !content || !contributions) return;

    const measure = () => {
      const neededWidth = content.offsetWidth;
      const neededHeight = content.offsetHeight;
      setContentHeight(neededHeight);

      // Prefer the tooltip’s max width budget so we don’t wait for a 0-width shell
      const parent = shell.parentElement;
      const available =
        shell.clientWidth ||
        parent?.clientWidth ||
        Math.min(window.innerWidth - 24, neededWidth);

      if (neededWidth > 0 && available > 0) {
        setScale(Math.min(1, available / neededWidth));
      }
    };

    measure();
    const frame = requestAnimationFrame(measure);
    const observer = new ResizeObserver(measure);
    observer.observe(shell);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [contributions]);

  useEffect(() => {
    onLayout?.();
  }, [contributions, failed, scale, contentHeight, onLayout]);

  const weeks = useMemo(
    () => (contributions ? buildWeeks(contributions) : []),
    [contributions],
  );

  if (failed) {
    return (
      <p className="text-[0.75rem] leading-relaxed text-[#8b949e]">
        Couldn&apos;t load the contribution graph right now.
      </p>
    );
  }

  if (!contributions) {
    return <GraphSkeleton />;
  }

  return (
    <div
      ref={shellRef}
      className="w-full overflow-hidden"
      style={{ height: contentHeight ? contentHeight * scale : undefined }}
    >
      <div
        ref={contentRef}
        className="w-max"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <div
          className="flex"
          style={{ gap: CELL_GAP }}
          role="img"
          aria-label={`${username} GitHub contribution graph`}
        >
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col" style={{ gap: CELL_GAP }}>
              {week.map((day, dayIndex) => (
                <span
                  key={day.date || `${weekIndex}-${dayIndex}`}
                  title={
                    day.empty
                      ? undefined
                      : `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                  }
                  style={{
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                    borderRadius: 2,
                    flexShrink: 0,
                    backgroundColor: day.empty ? "transparent" : LEVEL_COLORS[day.level],
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
