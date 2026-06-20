import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import banner from "@/assets/cat-rabbits.jpg";

export const Route = createFileRoute("/products/rabbits")({
  head: () => ({
    meta: [
      { title: "Rabbit Feed & Supplies — Circle L Feed & Hardware" },
      { name: "description", content: "Rabbit pellets, hay, and supplies in Quitman, AR." },
      { property: "og:title", content: "Rabbit Feed & Supplies" },
      { property: "og:description", content: "Quality rabbit feed and supplies." },
    ],
  }),
  component: () => (
    <ProductPage
      title="Rabbit Feed & Supplies"
      banner={banner}
      description="Premium rabbit pellets, timothy and alfalfa hay, waterers, feeders, and bedding for backyard pets and show rabbits alike."
      products={[]}
    />
  ),
});
