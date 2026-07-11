import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ index, children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground",
        className,
      )}
    >
      {index} — {children}
    </p>
  );
}
