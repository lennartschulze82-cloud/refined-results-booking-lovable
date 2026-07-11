export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="book" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Book
            </p>
            <h2 className="mt-3 max-w-lg font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Reserve a private consultation.
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Weekday and Saturday appointments available at our Harley Street clinic.
            </p>
          </div>
          {/* TODO: replace with external booking URL */}
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Consultation
          </a>
        </div>

        <div className="mt-14 grid gap-6 border-t border-border pt-8 text-xs text-muted-foreground sm:grid-cols-3">
          <p>
            Cavendish Aesthetics<br />
            <span className="text-foreground/80">Harley Street, London W1</span>
          </p>
          <p>
            GMC-registered physician<br />
            <span className="text-foreground/80">Dr. Amara Whitfield, MBBS</span>
          </p>
          <p className="sm:text-right">© {year} Cavendish Aesthetics</p>
        </div>
      </div>
    </footer>
  );
}
