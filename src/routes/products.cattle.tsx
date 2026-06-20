import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import banner from "@/assets/cat-cattle.jpg";

export const Route = createFileRoute("/products/cattle")({
  head: () => ({
    meta: [
      { title: "Cattle Feed & Supplies — Circle L Feed & Hardware" },
      { name: "description", content: "Cattle feed, mineral, and ranch supplies in Quitman, AR." },
      { property: "og:title", content: "Cattle Feed & Supplies" },
      { property: "og:description", content: "Quality cattle feed and ranch supplies." },
    ],
  }),
  component: () => (
    <ProductPage
      title="Cattle Feed & Supplies"
      banner={banner}
      description="From pasture to show ring, we carry quality cattle feed, protein tubs, mineral, and the ranch supplies you need to keep your herd healthy and growing."
      products={[]}
    />
  ),
});
