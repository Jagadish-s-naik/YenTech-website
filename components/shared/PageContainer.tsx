import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={`container mx-auto px-4 py-12 sm:px-8 md:py-16 ${className}`}
    >
      {children}
    </div>
  );
}
