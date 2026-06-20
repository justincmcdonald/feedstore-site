import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string; caption: string; fit?: "cover" | "contain" };

export function Carousel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-[280px] sm:h-[400px] md:h-[500px]">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
          >
            {s.fit === "contain" && (
              <div className="absolute inset-0 bg-barn" />
            )}
            <img
              src={s.src}
              alt={s.alt}
              className={`h-full w-full ${s.fit === "contain" ? "object-contain relative" : "object-cover"}`}
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="font-display text-lg font-semibold uppercase tracking-wide text-white sm:text-2xl">
                {s.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-foreground transition hover:bg-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => setI((p) => (p + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-foreground transition hover:bg-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-2 bg-white/60"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
