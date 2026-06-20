import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import banner from "@/assets/cat-wound-care.jpg";
import wc1 from "@/assets/wound-care/WoundCare.png.asset.json";
import wc2 from "@/assets/wound-care/WoundCare2.png.asset.json";
import wc3 from "@/assets/wound-care/WoundCare3.png.asset.json";
import wc4 from "@/assets/wound-care/WoundCare4.png.asset.json";
import wc5 from "@/assets/wound-care/WoundCare5.png.asset.json";
import wc6 from "@/assets/wound-care/WoundCare6.png.asset.json";
import wc7 from "@/assets/wound-care/WoundCare7.png.asset.json";
import wc8 from "@/assets/wound-care/WoundCare8.png.asset.json";

export const Route = createFileRoute("/products/wound-care")({
  head: () => ({
    meta: [
      { title: "Wound Care — Circle L Feed & Hardware" },
      { name: "description", content: "Animal wound care supplies in Quitman, AR." },
      { property: "og:title", content: "Wound Care" },
      { property: "og:description", content: "Animal wound care products and supplies." },
    ],
  }),
  component: () => (
    <ProductPage
      title="Wound Care"
      banner={banner}
      description="Quality wound care products for horses, livestock, and pets. Stop in and our family will help you find what your animal needs."
      products={[
        { name: "Dr. Naylor Blu-Kote Germicidal Spray", image: wc1.url },
        { name: "AniMed Blue Lotion Topical", image: wc2.url },
        { name: "Durvet Screw Worm Aerosol", image: wc3.url },
        { name: "Durvet AluShield Aerosol Bandage", image: wc4.url },
        { name: "Manna Pro Cut-Heal Wound Care Spray", image: wc5.url },
        { name: "Durvet Topical Fungicide", image: wc6.url },
        { name: "Absorbine Silver Honey Rapid Wound Repair", image: wc7.url },
        { name: "Farnam Wonder Dust Wound Powder", image: wc8.url },
      ]}
    />
  ),
});
