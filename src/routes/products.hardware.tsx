import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HardwareBrands } from "@/components/HardwareBrands";
import banner from "@/assets/cat-hardware.jpg";

export const Route = createFileRoute("/products/hardware")({
  head: () => ({
    meta: [
      { title: "Hardware — Circle L Feed & Hardware" },
      { name: "description", content: "Welding supplies, nuts, bolts, pipes, and power tools in Quitman, AR." },
      { property: "og:title", content: "Hardware" },
      { property: "og:description", content: "Welding supplies, nuts, bolts, pipes, and power tools." },
    ],
  }),
  component: HardwarePage,
});

function HardwarePage() {
  return (
    <>
      <section className="relative h-[320px] w-full overflow-hidden sm:h-[400px]">
        <img src={banner} alt="Hardware" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4">
            <h1 className="font-display text-4xl font-bold uppercase text-cream sm:text-5xl md:text-6xl">
              Hardware
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
            Your local source for welding supplies, nuts and bolts, pipes, power tools, plumbing,
            electrical, and everything in between. We stock too many small items to list — instead,
            here are the trusted brands we carry.
          </p>
        </div>
      </section>

      <HardwareBrands />

      <section className="border-t border-border bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-foreground">Come Visit Us</h2>
          <p className="mt-3 text-foreground/75">
            Stop by our Quitman store and our family will help you find exactly what you need.
          </p>
          <Link
            to="/location"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-accent/90"
          >
            Find Our Store <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
