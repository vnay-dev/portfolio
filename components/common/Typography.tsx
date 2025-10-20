import React from "react";
import { cn } from "@/utils";
import { TYPE_SCALE, TypeScale } from "@/constants/typography";

interface TypographyProps {
  variant?: TypeScale;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Typography component for consistent text styling
 * Based on Material Design Type Scale
 *
 * @example
 * <Typography variant="display-large">Hero Title</Typography>
 * <Typography variant="body-medium" as="p">Body text</Typography>
 */
export function Typography({
  variant = TYPE_SCALE.BODY_MEDIUM,
  children,
  className,
  as: Component = "div",
}: TypographyProps) {
  return <Component className={cn(variant, className)}>{children}</Component>;
}

// Convenience components for common use cases
export function Display({
  children,
  className,
  size = "large",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "large" | "medium" | "small";
}) {
  return (
    <Typography
      variant={TYPE_SCALE[`DISPLAY_${size.toUpperCase()}` as keyof typeof TYPE_SCALE] as TypeScale}
      as="h1"
      className={className}
    >
      {children}
    </Typography>
  );
}

export function Headline({
  children,
  className,
  size = "large",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "large" | "medium" | "small";
}) {
  return (
    <Typography
      variant={TYPE_SCALE[`HEADLINE_${size.toUpperCase()}` as keyof typeof TYPE_SCALE] as TypeScale}
      as="h2"
      className={className}
    >
      {children}
    </Typography>
  );
}

export function Title({
  children,
  className,
  size = "large",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "large" | "medium" | "small";
}) {
  return (
    <Typography
      variant={TYPE_SCALE[`TITLE_${size.toUpperCase()}` as keyof typeof TYPE_SCALE] as TypeScale}
      as="h3"
      className={className}
    >
      {children}
    </Typography>
  );
}

export function Body({
  children,
  className,
  size = "medium",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "large" | "medium" | "small";
}) {
  return (
    <Typography
      variant={TYPE_SCALE[`BODY_${size.toUpperCase()}` as keyof typeof TYPE_SCALE] as TypeScale}
      as="p"
      className={className}
    >
      {children}
    </Typography>
  );
}

export function Label({
  children,
  className,
  size = "medium",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "large" | "medium" | "small";
}) {
  return (
    <Typography
      variant={TYPE_SCALE[`LABEL_${size.toUpperCase()}` as keyof typeof TYPE_SCALE] as TypeScale}
      as="span"
      className={className}
    >
      {children}
    </Typography>
  );
}

export function Overline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Typography variant={TYPE_SCALE.OVERLINE} as="span" className={className}>
      {children}
    </Typography>
  );
}

export function Caption({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Typography variant={TYPE_SCALE.CAPTION} as="span" className={className}>
      {children}
    </Typography>
  );
}
