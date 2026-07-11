import { BookButton } from "@/components/site/BookButton";
import { SectionLabel } from "@/components/site/SectionLabel";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="book" className="hairline-top bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <SectionLabel index="04" className="mb-3">
              Book
            </SectionLabel>
            <h2 className="max-w-lg font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Reserve a private consultation.
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Weekday and Saturday appointments available at our Harley Street clinic.
            </p>
          </div>
          {/* TODO: replace with external booking URL */}
          <BookButton size="footer" />
        </div>

        <div className="mt-14 grid gap-6 hairline-top pt-8 text-xs text-muted-foreground sm:grid-cols-3">
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
