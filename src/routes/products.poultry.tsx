import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import banner from "@/assets/cat-poultry.jpg";
import c0 from "@/assets/chicken0.png.asset.json";
import c1 from "@/assets/chicken1.png.asset.json";
import c2 from "@/assets/chicken2.png.asset.json";
import c3 from "@/assets/chicken3.png.asset.json";
import c4 from "@/assets/chicken4.png.asset.json";
import c5 from "@/assets/chicken5.png.asset.json";
import c6 from "@/assets/chicken6.png.asset.json";
import c7 from "@/assets/chicken7.png.asset.json";
import c8 from "@/assets/chicken8.png.asset.json";
import c9 from "@/assets/chicken9.png.asset.json";

export const Route = createFileRoute("/products/poultry")({
  head: () => ({
    meta: [
      { title: "Poultry Feed & Supplies — Circle L Feed & Hardware" },
      { name: "description", content: "Chicken feed, layer pellets, starter crumbles and poultry supplies in Quitman, AR." },
      { property: "og:title", content: "Poultry Feed & Supplies" },
      { property: "og:description", content: "Chicken & poultry feed and supplies." },
    ],
  }),
  component: () => (
    <ProductPage
      title="Poultry Feed & Supplies"
      banner={banner}
      description="Everything you need for a happy, healthy flock — layer feed, chick starter, scratch grains, waterers, feeders, and coop supplies for backyard chickens, turkeys, ducks and game birds."
      products={[
        { name: "Happy Hen Nest Pads — Compostable Nest Bedding", image: c0.url },
        { name: "Happy Hen Party Mix — Corn & Worm Blend", image: c1.url },
        { name: "Little Giant Poultry Drinking Cups", image: c2.url },
        { name: "Kalmbach Henhouse Reserve Healthy Treats", image: c3.url },
        { name: "Happy Hen Treat Tumblers — Oat & Worm Balls", image: c4.url },
        { name: "Happy Hen Spiral Leg Bands", image: c5.url },
        { name: "Happy Hen Duck Pond Flakes — Wheat, Pea & Grub", image: c6.url },
        { name: "Happy Hen Mealworm Frenzy — Dried Mealworms", image: c7.url },
        { name: "Little Giant Poultry Nipples", image: c8.url },
        { name: "Happy Hen Grass Hoppers — Dried Grasshoppers", image: c9.url },
      ]}
    />
  ),
});
