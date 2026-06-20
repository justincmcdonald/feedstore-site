import { createFileRoute, Link } from "@tanstack/react-router";
import { Carousel } from "@/components/Carousel";
import { ArrowRight, Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import heroAsset from "@/assets/hero-image.jpg.asset.json";
import ss1 from "@/assets/ss1.jpg.asset.json";
import ss2 from "@/assets/ss2.png.asset.json";
import ss3 from "@/assets/ss3.jpg.asset.json";
import ss4 from "@/assets/ss4.jpg.asset.json";
import ss5 from "@/assets/ss5.jpg.asset.json";
import ss6 from "@/assets/ss6.jpg.asset.json";
import ss7 from "@/assets/ss7.jpg.asset.json";
import familyOwned from "@/assets/family-owned-2.jpg.asset.json";
import catHorse from "@/assets/cat-horse.jpg";
import catPoultry from "@/assets/cat-poultry.jpg";
import catWoundCare from "@/assets/cat-wound-care.jpg";
import catCattle from "@/assets/cat-cattle.jpg";
import catSheepGoats from "@/assets/cat-sheep-goats.jpg";
import catRabbits from "@/assets/cat-rabbits.jpg";
import catDogsCats from "@/assets/cat-dogs-cats.jpg";
import catHardware from "@/assets/cat-hardware.jpg";
import catEquipment from "@/assets/cat-equipment.jpg";
import paintVideo from "@/assets/paint-tiktok.mov.asset.json";
import nutrenaLogo from "@/assets/nutrena-wordmark-complete.png.asset.json";
import showAnimalHQ from "@/assets/show-animal-hq.png.asset.json";

const heroFarm = heroAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Circle L Feed & Hardware — Quitman, AR | Feed, Farm & Ranch Supply" },
      { name: "description", content: "Family owned feed, farm and ranch supply store in Quitman, AR since 1999. Serving Cleburne, White, Van Buren and Faulkner counties. Horse, poultry, lawn and garden, paint supplies. Proud Nutrena Dealer." },
      { property: "og:title", content: "Circle L Feed & Hardware" },
      { property: "og:description", content: "Your Local Feed, Farm & Ranch Supply — Serving Arkansas Since 1999." },
    ],
  }),
  component: HomePage,
});

const featured = [
  { to: "/products/horse", label: "Horse", img: catHorse },
  { to: "/products/cattle", label: "Cattle", img: catCattle },
  { to: "/products/sheep-goats", label: "Sheep & Goats", img: catSheepGoats },
  { to: "/products/poultry", label: "Poultry", img: catPoultry },
  { to: "/products/rabbits", label: "Rabbits", img: catRabbits },
  { to: "/products/dogs-cats", label: "Dogs & Cats", img: catDogsCats },
  { to: "/products/wound-care", label: "Wound Care", img: catWoundCare },
  { to: "/products/hardware", label: "Hardware", img: catHardware },
  { to: "/products/equipment", label: "Equipment", img: catEquipment },
] as const;


function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[520px] w-full overflow-hidden sm:h-[620px]">
          <img src={heroFarm} alt="Arkansas farm at sunset with cattle" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
          <div className="absolute inset-0 flex flex-col justify-between py-10 sm:py-14">
            <div className="mx-auto w-full max-w-7xl px-4">
              <div className="max-w-2xl">
                <div className="inline-block rounded-full border border-cream/30 bg-black/30 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cream backdrop-blur">
                  Quitman, Arkansas · Since 1999
                </div>
                <h1 className="mt-5 font-display text-[1.75rem] font-bold uppercase leading-tight text-cream sm:text-5xl md:text-6xl">
                  Your Local Feed, Farm &amp; Ranch Supply
                </h1>
                <p className="mt-3 text-base text-cream/90 sm:mt-4 sm:text-xl">
                  Serving Arkansas Since 1999
                </p>

              </div>
            </div>
            <div className="mx-auto w-full max-w-7xl px-4">
              <a
                href="#featured-products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("featured-products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-display text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:bg-accent/90"
              >
                Shop Products <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="px-4">
          <Carousel
            slides={[
              { src: ss1.url, alt: "Circle L Feed & Hardware team", caption: "Our Family — Here to Serve You" },
              { src: ss6.url, alt: "Circle L Feed & Hardware aisle", caption: "Stocked With Quality Brands" },
              { src: ss3.url, alt: "Valspar paint color gallery", caption: "Now Featuring Valspar Paint" },
              { src: ss4.url, alt: "Bonnie Plants live garden plants", caption: "Live Plants & Garden Supplies" },
              { src: ss5.url, alt: "Inside Circle L Feed & Hardware", caption: "Everything You Need In One Stop" },
              { src: showAnimalHQ.url, alt: "Your Show Animal Headquarters — Circle L Feed & Hardware", caption: "Your Show Animal Headquarters", fit: "contain" },
              { src: ss7.url, alt: "Circle L Feed & Hardware store", caption: "Come See Us In Quitman" },
            ]}
          />
        </div>
      </section>

      {/* Paint section feature video */}
      <section className="bg-barn py-16 sm:py-20 text-barn-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-cream/80">New In Store</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase sm:text-4xl">Now Featuring Our Paint Department</h2>
            <p className="mt-4 text-cream/90 sm:text-lg">
              We've expanded our store with a brand-new paint section. Stop in and see what's mixing — from porch &amp; floor paint to interior, exterior, and primers. Take a look:
            </p>
          </div>
          <div className="mx-auto flex items-center justify-center">
            <div className="w-full max-w-[400px] overflow-hidden rounded-xl bg-black shadow-2xl ring-1 ring-cream/20">
              <video
                src={paintVideo.url}
                controls
                autoPlay
                muted
                loop
                preload="metadata"
                playsInline
                className="h-auto max-h-[550px] w-full"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Featured products */}
      <section id="featured-products" className="py-16 sm:py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">Shop By Category</p>
            <h2 className="mt-2 font-display text-3xl font-bold uppercase text-foreground sm:text-4xl">Featured Products</h2>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {featured.map((f) => (
              <Link
                key={f.to}
                to={f.to}
                className="group relative block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={f.img} alt={f.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 sm:p-4">
                  <h3 className="font-display text-base sm:text-lg font-bold uppercase tracking-wide text-white">{f.label}</h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-cream/80">
                    Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-y border-border bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">About Circle L</p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase text-foreground sm:text-4xl">
            Family Owned and Operated Since 1999
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl shadow-lg">
            <img src={familyOwned.url} alt="The Circle L Feed & Hardware family in front of the store" className="h-auto w-full object-cover" loading="lazy" />
          </div>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            Circle L Feed and Hardware proudly serves the Cleburne, White, Van Buren and Faulkner county areas as your local farm &amp; ranch supply, your feed store and your hardware store too! Our store has high quality feed for your cattle, horses, goats, sheep, pigs, chickens, and livestock along with pet foods &amp; supplies, lawn &amp; garden supplies, and animal health products for your home or farm. We offer everything from a full line of home hardware to high quality tack. We also carry a wide variety of hardware supplies, including tools, electrical supplies, nuts &amp; bolts, plumbing supplies, fencing supplies, and welding supplies.
          </p>
        </div>
      </section>


      {/* Nutrena dealer */}
      <section className="bg-barn py-8 text-barn-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center">
          <div className="py-8" style={{ overflow: 'visible' }}>
            <img src={nutrenaLogo.url} alt="Nutrena official logo" className="h-auto w-full max-w-[180px]" style={{ overflow: 'visible', display: 'block' }} />
          </div>
          <h2 className="font-display text-3xl font-bold uppercase">Proud Dealer of Nutrena</h2>
          <p className="mt-2 max-w-2xl text-cream/90">
            Premium animal nutrition for horses, cattle, poultry, and livestock. Stop in and let us help you pick the right feed for your animals.
          </p>
        </div>
      </section>

      {/* Hours & Contact */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <Clock className="h-8 w-8 text-accent" />
            <h3 className="mt-4 font-display text-xl font-bold uppercase">Store Hours</h3>
            <ul className="mt-3 space-y-1 text-sm text-foreground/85">
              <li>Monday – Friday: 8:00am – 5:30pm</li>
              <li>Saturday: 8:00am – 3:00pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <MapPin className="h-8 w-8 text-accent" />
            <h3 className="mt-4 font-display text-xl font-bold uppercase">Visit Us</h3>
            <p className="mt-3 text-sm text-foreground/85">5989 Heber Springs Rd W<br />Quitman AR 72131</p>
            <Link to="/location" className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">Get directions →</Link>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <Phone className="h-8 w-8 text-accent" />
            <h3 className="mt-4 font-display text-xl font-bold uppercase">Get in Touch</h3>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 501-589-4073</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> circlelfeed@yahoo.com</li>
              <li>
                <a href="http://www.facebook.com/CircleLFeedAndHardware" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
