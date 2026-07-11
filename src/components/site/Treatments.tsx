type Treatment = {
  name: string;
  category: "Preventative" | "Corrective" | "Rejuvenating";
  duration: string;
  price?: string;
  availability: string;
};

const treatments: Treatment[] = [
  {
    name: "Anti-Wrinkle Injections",
    category: "Preventative",
    duration: "30 min",
    availability: "Next availability this week",
  },
  {
    name: "Dermal Fillers",
    category: "Corrective",
    duration: "45 min",
    price: "from £450",
    availability: "Next availability this week",
  },
  {
    name: "Skin Rejuvenation",
    category: "Rejuvenating",
    duration: "60 min",
    price: "from £300",
    availability: "Limited availability",
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mb-12 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Consultations
            </p>
            <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Book a treatment consultation
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground md:text-right">
            All appointments include a private medical assessment with Dr. Whitfield.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {treatments.map((t) => (
            <article
              key={t.name}
              className="group flex flex-col rounded-sm border border-border bg-background p-6 transition-colors hover:border-primary/40 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                  {t.category}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Harley St
                </span>
              </div>

              <h3 className="mt-6 font-serif text-3xl leading-tight tracking-tight">
                {t.name}
              </h3>

              <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd>{t.duration}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd>Harley Street Clinic</dd>
                </div>
                {t.price && (
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Fee</dt>
                    <dd>{t.price}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-primary"
                />
                {t.availability}
              </div>

              {/* TODO: replace #book with real booking URL */}
              <a
                href="#book"
                className="mt-7 inline-flex items-center justify-center rounded-sm bg-primary px-4 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book consultation
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
