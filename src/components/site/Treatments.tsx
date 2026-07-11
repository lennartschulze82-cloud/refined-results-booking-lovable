import { BookButton } from "@/components/site/BookButton";
import { SectionLabel } from "@/components/site/SectionLabel";

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
    <section id="treatments" className="hairline-top bg-card">
      <div className="section-padding mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-12 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <SectionLabel index="01">Consultations</SectionLabel>
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
              className="group flex flex-col rounded-sm border border-border bg-background p-6 transition-colors hover:border-foreground/20 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {t.category}
                </span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Harley St
                </span>
              </div>

              <h3 className="mt-6 font-serif text-3xl leading-tight tracking-tight">
                {t.name}
              </h3>

              <dl className="mt-6 space-y-2 hairline-top pt-5 text-sm">
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
                  className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/60"
                />
                {t.availability}
              </div>

              {/* TODO: replace #book with real booking URL */}
              <BookButton size="card" className="mt-7">
                Book consultation
              </BookButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
