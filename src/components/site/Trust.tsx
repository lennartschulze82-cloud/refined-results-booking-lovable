import portrait from "@/assets/dr-whitfield.jpg";
import clinic from "@/assets/clinic-interior.jpg";
import room from "@/assets/treatment-room.jpg";
import { SectionLabel } from "@/components/site/SectionLabel";

const bullets = [
  {
    title: "Fifteen years in aesthetic medicine",
    body: "Consultant-level experience across preventative and corrective work.",
  },
  {
    title: "A restrained clinical approach",
    body: "Conservative dosing and anatomical precision — never a set formula.",
  },
  {
    title: "Consistency of results",
    body: "Patients seen at 6 and 12 months, with treatment plans adjusted, not repeated.",
  },
];

export function Trust() {
  return (
    <section id="physician" className="hairline-top">
      <div className="section-padding mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
            <img
              src={portrait}
              alt="Portrait of Dr. Amara Whitfield"
              width={1008}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <SectionLabel index="02">The Physician</SectionLabel>
            <h2 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Dr. Amara Whitfield
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              MBBS · GMC-registered
            </p>

            <ul className="mt-10 space-y-6">
              {bullets.map((b) => (
                <li key={b.title} className="hairline-top pt-5">
                  <h3 className="font-serif text-xl tracking-tight">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 md:gap-6">
          <figure className="overflow-hidden rounded-sm">
            <img
              src={clinic}
              alt="Consultation room at the Harley Street clinic"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-sm">
            <img
              src={room}
              alt="Treatment room at Cavendish Aesthetics"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
