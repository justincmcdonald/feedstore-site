import { createFileRoute } from "@tanstack/react-router";
import aboutAsset from "@/assets/about-us.png.asset.json";
const aboutInterior = aboutAsset.url;
import { Clock, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Circle L Feed & Hardware" },
      { name: "description", content: "Family owned and operated since 1999, serving Cleburne, White, Van Buren and Faulkner counties." },
      { property: "og:title", content: "About Circle L Feed & Hardware" },
      { property: "og:description", content: "Family owned and operated since 1999." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">About</p>
          <h1 className="mt-2 font-display text-4xl font-bold uppercase text-foreground sm:text-5xl">
            About Circle L Feed &amp; Hardware
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img src={aboutInterior} alt="Inside Circle L Feed & Hardware store" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Award className="h-3.5 w-3.5" /> Family Owned Since 1999
            </div>
            <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
              Circle L Feed and Hardware proudly serves the Cleburne, White, Van Buren and Faulkner county areas as your local farm &amp; ranch supply, your feed store and your hardware store too! Our store has high quality feed for your cattle, horses, goats, sheep, pigs, chickens, and livestock along with pet foods &amp; supplies, lawn &amp; garden supplies, and animal health products for your home or farm. We offer everything from a full line of home hardware to high quality tack. We also carry a wide variety of hardware supplies, including tools, electrical supplies, nuts &amp; bolts, plumbing supplies, fencing supplies, and welding supplies.
            </p>
            <p className="mt-6 rounded-lg border-l-4 border-accent bg-cream p-4 text-base font-medium text-foreground">
              We also proudly carry Lily and Laura Bracelets and Yeti Coolers!
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-cream py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Clock className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-3 font-display text-2xl font-bold uppercase">Store Hours</h2>
          <ul className="mt-4 space-y-1 text-base text-foreground/85">
            <li><strong>Monday – Friday:</strong> 8:00am – 5:30pm</li>
            <li><strong>Saturday:</strong> 8:00am – 3:00pm</li>
            <li><strong>Sunday:</strong> Closed</li>
          </ul>
        </div>
      </section>
    </>
  );
}
