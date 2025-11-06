import { ReactNode } from "react";

interface PatternCardProps {
  children: ReactNode;
  pattern: "sage" | "blue" | "terracotta";
  className?: string;
}

export const PatternCard = ({ children, pattern, className = "" }: PatternCardProps) => {
  const patternBg = {
    sage: "bg-sage-light",
    blue: "bg-ocean-light",
    terracotta: "bg-terracotta-light",
  }[pattern];

  return (
    <div className={`${patternBg} rounded-2xl overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
