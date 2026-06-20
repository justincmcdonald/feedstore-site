import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import banner from "@/assets/cat-sheep-goats.jpg";

export const Route = createFileRoute("/products/sheep-goats")({
  head: () => ({
    meta: [
      { title: "Sheep & Goat Feed & Supplies — Circle L Feed & Hardware" },
      { name: "description", content: "Sheep and goat feed, mineral, and supplies in Quitman, AR." },
      { property: "og:title", content: "Sheep & Goat Feed & Supplies" },
      { property: "og:description", content: "Quality sheep and goat feed and supplies." },
    ],
  }),
  component: () => (
    <ProductPage
      title="Sheep & Goat Feed & Supplies"
      banner={banner}
      description="Show feeds, mineral, milk replacer, and everyday rations for your sheep and goat herd — plus the supplies you need from kidding through show day."
      products={[]}
    />
  ),
});
