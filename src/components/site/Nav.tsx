import { BookButton } from "@/components/site/BookButton";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur hairline">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a href="#top" className="min-w-0 truncate font-serif text-lg tracking-tight sm:text-xl">
          Cavendish <span className="text-muted-foreground">Aesthetics</span>
        </a>
        {/* TODO: replace #book with external booking URL (e.g. Calendly) */}
        <BookButton size="nav" />
      </div>
    </header>
  );
}
