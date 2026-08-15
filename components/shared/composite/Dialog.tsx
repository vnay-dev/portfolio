"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { MdClose } from "react-icons/md";
import styles from "./Dialog.module.css";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  titleLabel?: string;
  children: ReactNode;
};

/**
 * Accessible modal built on the native <dialog> element.
 * Escape, backdrop click, and the close button all dismiss it.
 */
export function Dialog({ open, onClose, title, titleLabel, children }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const isInsideDialog = (target: EventTarget | null) => {
      const dialog = dialogRef.current;
      return Boolean(dialog && target instanceof Node && dialog.contains(target));
    };

    const canDialogScroll = (deltaY: number) => {
      const dialog = dialogRef.current;
      if (!dialog) return false;
      if (dialog.scrollHeight <= dialog.clientHeight + 1) return false;
      if (deltaY < 0) return dialog.scrollTop > 0;
      return dialog.scrollTop + dialog.clientHeight < dialog.scrollHeight - 1;
    };

    const preventBackgroundScroll = (event: WheelEvent | TouchEvent) => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      if (event instanceof TouchEvent) {
        if (isInsideDialog(event.target) && dialog.scrollHeight > dialog.clientHeight + 1) return;
        event.preventDefault();
        return;
      }

      if (isInsideDialog(event.target) && canDialogScroll(event.deltaY)) return;
      event.preventDefault();
    };

    document.addEventListener("wheel", preventBackgroundScroll, { passive: false });
    document.addEventListener("touchmove", preventBackgroundScroll, { passive: false });

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      document.removeEventListener("wheel", preventBackgroundScroll);
      document.removeEventListener("touchmove", preventBackgroundScroll);
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className={`${styles.dialog} w-[min(40rem,calc(100vw-1.5rem-env(safe-area-inset-left,0px)-env(safe-area-inset-right,0px)))] rounded-2xl bg-[#fcfcfc] text-neutral-900`}
    >
      <div className="flex flex-col gap-4 p-5 sm:gap-5 sm:p-6 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <h2
            id={titleId}
            aria-label={titleLabel}
            className="headline-medium flex min-w-0 items-center gap-2 text-neutral-900"
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            <MdClose size={22} />
          </button>
        </div>
        <div className="flex flex-col gap-8">{children}</div>
      </div>
    </dialog>
  );
}
