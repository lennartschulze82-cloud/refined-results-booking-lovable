export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="min-w-0 truncate font-serif text-lg tracking-tight sm:text-xl">
          Cavendish <span className="text-muted-foreground">Aesthetics</span>
        </a>
        {/* TODO: replace #book with external booking URL (e.g. Calendly) */}
        <a
          href="#book"
          className="shrink-0 rounded-sm bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-primary/90 sm:px-5 sm:text-[13px]"
        >
          Book a Consultation
        </a>
      </div>
    </header>
  );
}
