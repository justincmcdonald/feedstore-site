import apolloLogo from "@/assets/hardware-brands/apollo-valves.png.asset.json";
import dewaltLogo from "@/assets/hardware-brands/dewalt.svg.asset.json";
import gilmourLogo from "@/assets/hardware-brands/gilmour.svg.asset.json";
import irwinLogo from "@/assets/hardware-brands/irwin.svg.asset.json";
import masterLockLogo from "@/assets/hardware-brands/master-lock.svg.asset.json";
import milwaukeeLogo from "@/assets/hardware-brands/milwaukee.svg.asset.json";
import mrHeaterLogo from "@/assets/hardware-brands/mr-heater.png.asset.json";
import romexLogo from "@/assets/hardware-brands/romex.svg.asset.json";
import sharkBiteLogo from "@/assets/hardware-brands/sharkbite.png.asset.json";
import shopVacLogo from "@/assets/hardware-brands/shop-vac.png.asset.json";
import stanleyLogo from "@/assets/hardware-brands/stanley.svg.asset.json";
import vulcanLogo from "@/assets/hardware-brands/vulcan.png.asset.json";

const brands = [
  { name: "DeWalt", logo: dewaltLogo.url },
  { name: "Milwaukee", logo: milwaukeeLogo.url },
  { name: "Stanley", logo: stanleyLogo.url },
  { name: "Master Lock", logo: masterLockLogo.url },
  { name: "Irwin", logo: irwinLogo.url },
  { name: "Mr. Heater", logo: mrHeaterLogo.url },
  { name: "Shop-Vac", logo: shopVacLogo.url },
  { name: "Vulcan", logo: vulcanLogo.url },
  { name: "Romex", logo: romexLogo.url },
  { name: "SharkBite", logo: sharkBiteLogo.url },
  { name: "Apollo PEX", logo: apolloLogo.url },
  { name: "Gilmour", logo: gilmourLogo.url },
];

export function HardwareBrands() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-foreground sm:text-4xl">
            Trusted Hardware Brands
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
            We carry a wide variety of hardware, tools, fittings, plumbing supplies, electrical
            supplies, and repair products from trusted brands. Visit our store for our full inventory.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {brands.map((b) => (
            <div
              key={b.name}
              className="group flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              aria-label={b.name}
            >
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                loading="lazy"
                className="max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
