import { cn } from "@/lib/utils";

const sizes = {
  nav: "px-4 py-2 text-xs tracking-[0.14em] sm:px-5 sm:text-[13px]",
  hero: "px-6 py-3.5 text-xs tracking-[0.18em]",
  card: "px-4 py-3 text-[11px] tracking-[0.2em]",
  footer: "px-6 py-4 text-xs tracking-[0.2em]",
} as const;

type BookButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  size?: keyof typeof sizes;
};

export function BookButton({
  size = "hero",
  className,
  children = "Book a Consultation",
  href = "#book",
  ...props
}: BookButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-sm bg-primary font-medium uppercase text-primary-foreground transition-colors hover:bg-primary/90",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
