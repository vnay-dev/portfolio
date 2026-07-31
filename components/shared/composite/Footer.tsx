"use client";

import {
  Fragment,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { MdNorthEast } from "react-icons/md";
import { LuHeart } from "react-icons/lu";
import { GitHubContributionGraph } from "@/components/shared/atoms";
import styles from "./Footer.module.css";

type HeartParticle = {
  id: string;
  dx: string;
  dy: string;
  rot: string;
  size: string;
  delay: string;
};

type HeartBurst = {
  id: number;
  particles: HeartParticle[];
};

const HEART_POP_COUNT = 22;
const HEART_POP_MS = 1900;

function createHeartBurst(burstId: number): HeartBurst {
  const particles: HeartParticle[] = Array.from({ length: HEART_POP_COUNT }, (_, index) => {
    // Wide upper fan — party-popper style, with random scatter for realism.
    const base = -Math.PI / 2 + ((index / (HEART_POP_COUNT - 1)) - 0.5) * Math.PI * 1.55;
    const angle = base + (Math.random() - 0.5) * 0.55;
    const speed = 88 + Math.random() * 120;
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed;
    return {
      id: `${burstId}-${index}`,
      dx: `${dx.toFixed(1)}px`,
      dy: `${dy.toFixed(1)}px`,
      rot: `${(Math.random() * 120 - 60).toFixed(0)}deg`,
      size: `${0.4 + Math.random() * 0.55}em`,
      delay: `${(Math.random() * 0.06).toFixed(2)}s`,
    };
  });
  return { id: burstId, particles };
}

function ThanksTitle() {
  const [bursts, setBursts] = useState<HeartBurst[]>([]);
  const burstIdRef = useRef(0);

  const popHearts = useCallback(() => {
    const id = ++burstIdRef.current;
    setBursts((current) => [...current, createHeartBurst(id)]);
    window.setTimeout(() => {
      setBursts((current) => current.filter((burst) => burst.id !== id));
    }, HEART_POP_MS);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLHeadingElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      popHearts();
    }
  };

  return (
    <h2
      role="button"
      tabIndex={0}
      aria-label="Thanks for stopping by! Click for a heart celebration"
      onClick={popHearts}
      onKeyDown={handleKeyDown}
      className={`headline-medium ${styles.title} mb-24 text-center font-semibold text-gray-900 sm:mb-28 md:mb-32 lg:text-left`}
    >
      Thanks for stopping by!{" "}
      <span className={styles.heartWrap}>
        <LuHeart aria-hidden className={styles.heart} fill="currentColor" />
        {bursts.map((burst) => (
          <span key={burst.id} className={styles.popper} aria-hidden>
            {burst.particles.map((particle) => (
              <LuHeart
                key={particle.id}
                className={styles.popHeart}
                fill="currentColor"
                style={
                  {
                    "--dx": particle.dx,
                    "--dy": particle.dy,
                    "--rot": particle.rot,
                    "--delay": particle.delay,
                    fontSize: particle.size,
                  } as CSSProperties
                }
              />
            ))}
          </span>
        ))}
      </span>
    </h2>
  );
}

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
        I don&apos;t post much on LinkedIn, but I&apos;m always happy to chat. Feel free to drop me a
        message anytime.
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

/** True on devices where hover tooltips make sense (mouse / trackpad). */
function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return canHover;
}

type SocialLinkWithBubbleProps = SocialLink & {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  canHover: boolean;
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
  canHover,
}: SocialLinkWithBubbleProps) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const bubbleRef = useRef<HTMLSpanElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const showTooltip = canHover && open;

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
    if (!canHover) return;
    clearCloseTimer();
    onOpen();
  }, [canHover, clearCloseTimer, onOpen]);

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
    if (!showTooltip) return;

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
  }, [showTooltip, updatePosition]);

  return (
    <span className="relative inline-flex">
      <a
        ref={linkRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-describedby={showTooltip ? tooltipId : undefined}
        data-social={id}
        onMouseEnter={canHover ? handleOpen : undefined}
        onMouseLeave={canHover ? scheduleClose : undefined}
        onFocus={canHover ? handleOpen : undefined}
        onBlur={canHover ? scheduleClose : undefined}
        className="body-medium text-gray-600 transition-colors duration-200 hover:text-gray-900 focus-visible:text-gray-900 focus-visible:outline-none"
      >
        {label}
      </a>

      {canHover ? (
        <span
          ref={bubbleRef}
          id={tooltipId}
          role="tooltip"
          aria-hidden={!showTooltip}
          onMouseEnter={interactive ? handleOpen : undefined}
          onMouseLeave={interactive ? scheduleClose : undefined}
          style={{
            top: coords.top,
            left: coords.left,
          }}
          className={[
            "fixed z-50",
            interactive && showTooltip ? "pointer-events-auto" : "pointer-events-none",
            "transition-opacity duration-400 ease-in-out",
            showTooltip ? "opacity-100" : "opacity-0",
            wide
              ? "w-max max-w-[calc(100vw-1.5rem)]"
              : interactive
                ? "w-[min(20rem,calc(100vw-1.5rem))]"
                : "w-[min(16.5rem,calc(100vw-1.5rem))]",
          ].join(" ")}
        >
          <span
            className={[
              "relative block max-w-full rounded-lg border border-white/10 bg-[#0d1117] p-2.5 text-left",
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
      ) : null}
    </span>
  );
}

function FooterEmail({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      // Fallback for older browsers / denied clipboard permission
      const input = document.createElement("input");
      input.value = address;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }

    setCopied(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy email address ${address}`}
        className="body-medium cursor-pointer whitespace-nowrap text-gray-500 transition-colors duration-200 hover:cursor-pointer hover:text-gray-900 focus-visible:text-gray-900 focus-visible:outline-none"
      >
        {address}
      </button>

      <span
        role="status"
        aria-live="polite"
        className={[
          "pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-50 -translate-x-1/2",
          "rounded-lg border border-white/10 bg-[#0d1117] px-2.5 py-1.5",
          "text-[0.75rem] leading-none text-[#c9d1d9]",
          "transition-opacity duration-300 ease-in-out",
          copied ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        Copied!
      </span>
    </span>
  );
}

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const canHover = useCanHover();
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <footer
      className={`w-full overflow-visible border-t border-gray-200 ${isHomePage ? "bg-[#fcfcfc]" : "bg-white"}`}
    >
      <div className="container mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 md:px-12 md:py-16 lg:px-24">
        <ThanksTitle />

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
                  canHover={canHover}
                  open={activeId === social.id}
                  onOpen={() => setActiveId(social.id)}
                  onClose={() =>
                    setActiveId((current) => (current === social.id ? null : current))
                  }
                />
              </Fragment>
            ))}
          </nav>

          <FooterEmail address={email} />
        </div>
      </div>
    </footer>
  );
}
