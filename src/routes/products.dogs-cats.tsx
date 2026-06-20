import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import banner from "@/assets/cat-dogs-cats.jpg";

export const Route = createFileRoute("/products/dogs-cats")({
  head: () => ({
    meta: [
      { title: "Dog & Cat Food & Supplies — Circle L Feed & Hardware" },
      { name: "description", content: "Dog and cat food, treats, and supplies in Quitman, AR." },
      { property: "og:title", content: "Dog & Cat Food & Supplies" },
      { property: "og:description", content: "Quality pet food and supplies for dogs and cats." },
    ],
  }),
  component: () => (
    <ProductPage
      title="Dog & Cat Food & Supplies"
      banner={banner}
      description="Quality dog and cat food, treats, collars, leashes, and everyday pet supplies for your best friends — from farm dogs to house cats."
      products={[]}
    />
  ),
});
