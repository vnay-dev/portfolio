"use client";

import {
  Fragment,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { MdNorthEast } from "react-icons/md";
import { GitHubContributionGraph } from "@/components/shared/atoms";

type SocialLink = {
  id: string;
  label: string;
  href: string;
  bubble?: ReactNode;
  /** Wider bubble for the contribution chart */
  wide?: boolean;
  /** Bubble contains clickable links — keep open while hovering it */
  interactive?: boolean;
};

const GITHUB_USERNAME = "vnay-dev";
const EDGE_PADDING = 12;

const SUBSTACK_ARTICLES = [
  {
    title: "The side project that changed how I think about building products",
    href: "https://vnaykrshn.substack.com/p/what-a-failed-side-project-taught",
  },
  {
    title: "Should AI adoption in the workplace be top-down or bottom-up?",
    href: "https://vnaykrshn.substack.com/p/should-ai-adoption-in-the-workplace",
  },
  {
    title: "When the title card reveals more than the movie name",
    href: "https://vnaykrshn.substack.com/p/when-movie-titles-start-talking",
  },
] as const;

const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vinay-krishnan-9a179a183/",
    bubble: (
      <p>
        Haven&apos;t posted on LinkedIn in ages, but I&apos;m still active if something interesting
        comes up.
      </p>
    ),
  },
  {
    id: "substack",
    label: "Substack",
    href: "https://substack.com/@vnaykrshn116",
    interactive: true,
    bubble: (
      <ul className="flex flex-col gap-2">
        {SUBSTACK_ARTICLES.map((article, index) => (
          <li key={article.href} className="flex gap-2">
            <span className="shrink-0 tabular-nums text-[#8b949e]" aria-hidden>
              {index + 1}.
            </span>
            <a
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0 text-[#c9d1d9] transition-colors hover:text-white hover:underline"
            >
              {article.title}
              <MdNorthEast
                aria-hidden
                className="ml-0.5 inline-block size-3.5 shrink-0 translate-y-px align-text-bottom opacity-70"
              />
            </a>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "github",
    label: "Github",
    href: `https://github.com/${GITHUB_USERNAME}/`,
    wide: true,
    bubble: null,
  },
];

const email = "vinaykrishnan.design@gmail.com";

type SocialLinkWithBubbleProps = SocialLink & {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function SocialLinkWithBubble({
  id,
  label,
  href,
  bubble,
  wide,
  interactive,
  open,
  onOpen,
  onClose,
}: SocialLinkWithBubbleProps) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const bubbleRef = useRef<HTMLSpanElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    if (!interactive) {
      onClose();
      return;
    }
    // Give the pointer time to move from the link into the bubble
    closeTimerRef.current = setTimeout(() => onClose(), 160);
  }, [clearCloseTimer, interactive, onClose]);

  const handleOpen = useCallback(() => {
    clearCloseTimer();
    onOpen();
  }, [clearCloseTimer, onOpen]);

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer]);

  const updatePosition = useCallback(() => {
    const link = linkRef.current;
    const tip = bubbleRef.current;
    if (!link || !tip) return;

    const linkRect = link.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();
    const tipWidth = tipRect.width || (wide ? 520 : interactive ? 300 : 264);
    const tipHeight = tipRect.height || (wide ? 100 : interactive ? 140 : 80);

    const preferredLeft = linkRect.left + linkRect.width / 2 - tipWidth / 2;
    const maxLeft = window.innerWidth - tipWidth - EDGE_PADDING;
    const left = Math.min(Math.max(EDGE_PADDING, preferredLeft), Math.max(EDGE_PADDING, maxLeft));
    const top = linkRect.top - tipHeight - 12;

    setCoords({
      top: Math.max(EDGE_PADDING, top),
      left,
    });
  }, [interactive, wide]);

  useEffect(() => {
    if (!open) return;

    updatePosition();
    const frame = requestAnimationFrame(updatePosition);
    const t1 = window.setTimeout(updatePosition, 60);
    const t2 = window.setTimeout(updatePosition, 220);

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, updatePosition]);

  return (
    <span className="relative inline-flex">
      <a
        ref={linkRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby={open ? tooltipId : undefined}
        data-social={id}
        onMouseEnter={handleOpen}
        onMouseLeave={scheduleClose}
        onFocus={handleOpen}
        onBlur={scheduleClose}
        className="body-medium text-gray-600 transition-colors duration-200 hover:text-gray-900 focus-visible:text-gray-900 focus-visible:outline-none"
      >
        {label}
      </a>

      <span
        ref={bubbleRef}
        id={tooltipId}
        role="tooltip"
        aria-hidden={!open}
        onMouseEnter={interactive ? handleOpen : undefined}
        onMouseLeave={interactive ? scheduleClose : undefined}
        style={{
          top: coords.top,
          left: coords.left,
        }}
        className={[
          "fixed z-50",
          interactive && open ? "pointer-events-auto" : "pointer-events-none",
          "transition-opacity duration-400 ease-in-out",
          open ? "opacity-100" : "opacity-0",
          wide
            ? "w-max max-w-[calc(100vw-1.5rem)]"
            : interactive
              ? "w-[min(20rem,calc(100vw-1.5rem))]"
              : "w-[min(16.5rem,calc(100vw-1.5rem))]",
        ].join(" ")}
      >
        <span
          className={[
            "relative block max-w-full rounded-lg border border-white/10 bg-[#0d1117] p-2.5 text-left shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
            wide ? "" : "text-[0.8125rem] leading-relaxed text-[#c9d1d9]",
          ].join(" ")}
        >
          {id === "github" ? (
            <GitHubContributionGraph username={GITHUB_USERNAME} onLayout={updatePosition} />
          ) : (
            bubble
          )}
        </span>
      </span>
    </span>
  );
}

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <footer
      className={`w-full overflow-visible border-t border-gray-200 ${isHomePage ? "bg-[#fcfcfc]" : "bg-white"}`}
    >
      <div className="container mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 md:px-12 md:py-16 lg:px-24">
        <div className="flex w-full min-w-0 flex-col items-center gap-4 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3 lg:flex-nowrap lg:justify-between lg:text-left">
          <nav
            aria-label="Social links"
            className="flex min-w-0 flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6"
          >
            {socialLinks.map((social, index) => (
              <Fragment key={social.href}>
                {index > 0 && (
                  <span className="select-none text-gray-400 lg:hidden" aria-hidden>
                    ·
                  </span>
                )}
                <SocialLinkWithBubble
                  {...social}
                  open={activeId === social.id}
                  onOpen={() => setActiveId(social.id)}
                  onClose={() =>
                    setActiveId((current) => (current === social.id ? null : current))
                  }
                />
              </Fragment>
            ))}
          </nav>

          <p className="body-medium whitespace-nowrap text-gray-500">{email}</p>
        </div>
      </div>
    </footer>
  );
}
