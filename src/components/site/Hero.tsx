import heroImg from "@/assets/hero.jpg";
import { BookButton } from "@/components/site/BookButton";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 sm:px-8 md:grid-cols-[1.05fr_1fr] md:gap-14 md:pb-24 md:pt-20">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Physician-led · Harley Street, London
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Refined results,<br />
            <span className="text-primary">naturally you.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Consultant-led aesthetic medicine for those who prefer precision over trend.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <BookButton size="hero" />
            <a
              href="#treatments"
              className="text-sm underline decoration-border decoration-1 underline-offset-[6px] transition-colors hover:decoration-primary"
            >
              View treatments
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted md:aspect-auto">
          <img
            src={heroImg}
            alt="Physician preparing sterile instruments at the Harley Street clinic"
            width={1600}
            height={1104}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
