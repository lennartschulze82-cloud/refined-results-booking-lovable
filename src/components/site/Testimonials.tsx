import result from "@/assets/result-1.jpg";

const quotes = [
  {
    quote: "Considered, unhurried, and the result looks like me on a good day.",
    name: "Elena",
    meta: "38 · Barrister",
  },
  {
    quote: "The first practitioner who told me what I didn't need.",
    name: "Priya",
    meta: "44 · Managing Director",
  },
  {
    quote: "Six months on, colleagues noticed I looked well — not different.",
    name: "James",
    meta: "51 · Consultant",
  },
];

export function Testimonials() {
  return (
    <section id="patients" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
          <figure className="overflow-hidden rounded-sm">
            <img
              src={result}
              alt="Refined natural detail — Cavendish Aesthetics patient care"
              width={900}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Patients
            </p>
            <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              In their words
            </h2>

            <ul className="mt-10 space-y-8">
              {quotes.map((q) => (
                <li key={q.name} className="border-t border-border pt-5">
                  <blockquote className="font-serif text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {q.name} · <span className="text-foreground/70">{q.meta}</span>
                  </figcaption>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
