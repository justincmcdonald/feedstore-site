import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Printer, Mail, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Find Us — Circle L Feed & Hardware, Quitman AR" },
      { name: "description", content: "Visit Circle L Feed & Hardware at 5989 Heber Springs Rd W, Quitman AR 72131." },
      { property: "og:title", content: "Find Circle L Feed & Hardware" },
      { property: "og:description", content: "5989 Heber Springs Rd W, Quitman AR 72131" },
    ],
  }),
  component: LocationPage,
});

function LocationPage() {
  const address = "5989 Heber Springs Rd W, Quitman AR 72131";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <>
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">Visit</p>
          <h1 className="mt-2 font-display text-4xl font-bold uppercase text-foreground sm:text-5xl">Find Us</h1>
          <p className="mt-3 text-foreground/70">{address}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl border border-border shadow-lg">
              <iframe
                title="Circle L Feed & Hardware location"
                src={mapEmbed}
                className="h-[450px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-accent/90"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-lg font-bold uppercase">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> 5989 Heber Springs Rd W, Quitman AR 72131</li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> <a href="tel:5015894073" className="hover:underline">501-589-4073</a></li>
                <li className="flex items-center gap-3"><Printer className="h-4 w-4 text-accent" /> Fax: 501-589-2170</li>
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> <a href="mailto:circlelfeed@yahoo.com" className="hover:underline">circlelfeed@yahoo.com</a></li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold uppercase"><Clock className="h-4 w-4 text-accent" /> Hours</h3>
              <ul className="mt-4 space-y-1 text-sm text-foreground/85">
                <li>Monday – Friday: 8:00am – 5:30pm</li>
                <li>Saturday: 8:00am – 3:00pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
