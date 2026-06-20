import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import banner from "@/assets/cat-equipment.jpg";

export const Route = createFileRoute("/products/equipment")({
  head: () => ({
    meta: [
      { title: "Equipment — Circle L Feed & Hardware" },
      { name: "description", content: "Livestock feeders, gates, stock tanks and ranch equipment in Quitman, AR." },
      { property: "og:title", content: "Equipment" },
      { property: "og:description", content: "Livestock feeders, gates, stock tanks, and more." },
    ],
  }),
  component: () => (
    <ProductPage
      title="Equipment"
      banner={banner}
      description="Livestock supplies and ranch equipment including feeders, gates, stock tanks, and more — everything you need to keep your operation running."
      products={[]}
    />
  ),
});
