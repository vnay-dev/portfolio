import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`container mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </div>
  );
}
