import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BookButton } from "../components/site/BookButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Cavendish Aesthetics
        </p>
        <h1 className="mt-4 font-serif text-6xl leading-none tracking-tight text-foreground sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <BookButton href="/" size="hero">
            Return home
          </BookButton>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Cavendish Aesthetics
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
          This page didn&apos;t load
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Something went wrong on our end. You can try again or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-foreground ring-1 ring-border transition-colors hover:bg-muted"
          >
            Return home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cavendish Aesthetics — Physician-led Aesthetics, Harley Street" },
      {
        name: "description",
        content:
          "Refined, natural aesthetic results from Dr. Amara Whitfield, GMC-registered physician. Harley Street, London. Book a consultation.",
      },
      { name: "author", content: "Cavendish Aesthetics" },
      { property: "og:title", content: "Cavendish Aesthetics — Harley Street" },
      {
        property: "og:description",
        content:
          "Physician-led aesthetic medicine on Harley Street. Anti-wrinkle injections, dermal fillers, and skin rejuvenation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@0,500&family=Inter+Tight:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
