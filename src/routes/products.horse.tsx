import { createFileRoute, Link } from "@tanstack/react-router";
import banner from "@/assets/cat-horse.jpg";
import tackCard from "@/assets/horse-tack-card.jpg";
import careCard from "@/assets/horse-care-card.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products/horse")({
  head: () => ({
    meta: [
      { title: "Horse Products — Circle L Feed & Hardware" },
      { name: "description", content: "Horse tack and horse care supplies in Quitman, AR. From saddles and bridles to grooming, supplements, and wound care." },
      { property: "og:title", content: "Horse Products" },
      { property: "og:description", content: "Horse tack and horse care supplies in Quitman, AR." },
    ],
  }),
  component: HorseHub,
});

function HorseHub() {
  return (
    <>
      <section className="relative h-[320px] w-full overflow-hidden sm:h-[400px]">
        <img src={banner} alt="Horse Products" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4">
            <h1 className="font-display text-4xl font-bold uppercase text-cream sm:text-5xl md:text-6xl">Horse Products</h1>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
            Everything for your horse, all in one stop. Choose a category below to browse our tack supplies or our grooming and animal health products.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2">
          {[
            { to: "/products/horse-tack", label: "Horse Tack", img: tackCard, blurb: "Saddles, bridles, halters, leads & more" },
            { to: "/products/horse-care", label: "Horse Care", img: careCard, blurb: "Grooming, supplements, wound care & health" },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative block overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">{c.label}</h2>
                <p className="mt-1 text-sm text-cream/85">{c.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-cream">
                  Browse <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
