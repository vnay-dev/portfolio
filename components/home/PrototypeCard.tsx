"use client";

import { useEffect, useId, useRef, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import { VisibilityVideo } from "@/components/projects/tdbridge/VisibilityVideo";
import { BlobImage } from "@/components/shared/atoms";
import { Dialog } from "@/components/shared/composite/Dialog";

export type PrototypeStory = {
  paragraphs: string[];
  quote?: {
    text: string;
    name: string;
    role: string;
    portraitSrc?: string;
    portraitAlt?: string;
  };
};

type PrototypeCardProps = {
  src: string;
  title: string;
  date?: string;
  dateTime?: string;
  subtitle?: string;
  storyCta?: string;
  aspectRatio: string;
  story?: PrototypeStory;
};

type QuoteBlockProps = {
  quote: NonNullable<PrototypeStory["quote"]>;
};

function QuoteBlock({ quote }: QuoteBlockProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [portraitSize, setPortraitSize] = useState(56);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    const syncSize = () => {
      const quoteRow = text.parentElement;
      const rowWidth = quoteRow?.clientWidth ?? 0;
      // On narrow dialogs, a height-matched circle starves the quote of width
      // and grows without bound. Keep a compact avatar instead.
      if (rowWidth > 0 && rowWidth < 420) {
        setPortraitSize(56);
        return;
      }

      const nextSize = Math.min(112, Math.round(text.getBoundingClientRect().height));
      if (nextSize > 0) setPortraitSize(nextSize);
    };

    syncSize();
    const observer = new ResizeObserver(syncSize);
    observer.observe(text);
    if (text.parentElement) observer.observe(text.parentElement);
    return () => observer.disconnect();
  }, [quote.text, quote.name, quote.role]);

  return (
    <blockquote className="flex items-start gap-3 sm:gap-4">
      {quote.portraitSrc ? (
        <span
          className="relative max-h-28 max-w-28 shrink-0 overflow-hidden rounded-full"
          style={{ width: portraitSize, height: portraitSize }}
        >
          <BlobImage
            src={quote.portraitSrc}
            alt={quote.portraitAlt ?? quote.name}
            fill
            sizes={`${portraitSize}px`}
            className="rounded-full object-cover"
            frameClassName="relative h-full w-full overflow-hidden rounded-full"
          />
        </span>
      ) : null}
      <div ref={textRef} className="flex min-w-0 flex-1 flex-col gap-2">
        <p className="body-large text-neutral-800">&ldquo;{quote.text}&rdquo;</p>
        <footer className="body-medium flex flex-wrap items-center gap-x-2 text-neutral-500">
          <span>{quote.name}</span>
          <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-neutral-400" aria-hidden="true" />
          <span>{quote.role}</span>
        </footer>
      </div>
    </blockquote>
  );
}

/**
 * Home Ideas card: prototype video, title, optional subtitle, and a read-more dialog.
 */
export function PrototypeCard({
  src,
  title,
  date,
  dateTime,
  subtitle,
  storyCta,
  aspectRatio,
  story,
}: PrototypeCardProps) {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isStoryOpen) return;
    const videos = document.querySelectorAll<HTMLVideoElement>("#ideas video");
    videos.forEach((video) => video.pause());
  }, [isStoryOpen]);

  return (
    <article className="flex w-full flex-col" aria-labelledby={titleId}>
      <div className="w-full overflow-hidden rounded-media">
        <VisibilityVideo src={src} aspectRatio={aspectRatio} />
      </div>
      <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:gap-3">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <h3 id={titleId} className="project-thumb-title headline-medium leading-none text-neutral-100">
            {title}
          </h3>
          {date ? (
            <time
              dateTime={dateTime}
              className="body-medium mt-1 inline-flex items-center rounded-full border border-neutral-600 px-2.5 py-1 leading-none text-neutral-400"
            >
              {date}
            </time>
          ) : null}
        </div>
        {subtitle ? (
          <p className="project-thumb-subtitle body-xlarge text-neutral-400">
            {subtitle}
            {story && storyCta ? (
              <>
                {" "}
                <button
                  type="button"
                  onClick={() => setIsStoryOpen(true)}
                  aria-haspopup="dialog"
                  aria-expanded={isStoryOpen}
                  className="group inline cursor-pointer py-2 leading-none text-neutral-200 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c1c1c] sm:py-0"
                >
                  <span className="border-b border-neutral-500 pb-0.5 group-hover:border-white">
                    {storyCta}
                    <LuArrowRight aria-hidden className="ml-1 inline size-[0.9em] align-text-bottom" />
                  </span>
                </button>
              </>
            ) : null}
          </p>
        ) : null}
      </div>

      {story ? (
        <Dialog
          open={isStoryOpen}
          onClose={() => setIsStoryOpen(false)}
          titleLabel="Ente Journey"
          title={
            <>
              <img
                src="/ente/ente-logo.svg"
                alt=""
                className="h-[1.35rem] w-auto shrink-0 sm:h-7"
              />
              <span style={{ fontFamily: "var(--font-gabarito), var(--font-hanken), sans-serif" }}>
                journey
              </span>
            </>
          }
        >
          <div className="flex flex-col gap-5">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-large text-neutral-600">
                {paragraph}
              </p>
            ))}
          </div>
          {story.quote ? (
            <>
              <hr className="h-px w-full border-0 bg-[#eeeeee]" />
              <QuoteBlock quote={story.quote} />
            </>
          ) : null}
        </Dialog>
      ) : null}
    </article>
  );
}
