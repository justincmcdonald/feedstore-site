import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import banner from "@/assets/horse-tack-card.jpg";
import t0 from "@/assets/horse-tack/tack_0.jpg.asset.json";
import t1 from "@/assets/horse-tack/tack_1.jpg.asset.json";
import t2 from "@/assets/horse-tack/tack_2.jpg.asset.json";
import t3 from "@/assets/horse-tack/tack_3.jpg.asset.json";
import t4 from "@/assets/horse-tack/tack_4.jpg.asset.json";
import t5 from "@/assets/horse-tack/tack_5.jpg.asset.json";
import t6 from "@/assets/horse-tack/tack_6.jpg.asset.json";
import t7 from "@/assets/horse-tack/tack_7.jpg.asset.json";
import t8 from "@/assets/horse-tack/tack_8.jpg.asset.json";

export const Route = createFileRoute("/products/horse-tack")({
  head: () => ({
    meta: [
      { title: "Horse Tack — Circle L Feed & Hardware" },
      { name: "description", content: "Quality horse tack in Quitman, AR — saddles, saddle pads, bridles, headstalls, halters, lead ropes, bits, breast collars and ropes." },
      { property: "og:title", content: "Horse Tack" },
      { property: "og:description", content: "Saddles, bridles, halters, leads and more from Oxbow Tack and other quality brands." },
    ],
  }),
  component: () => (
    <ProductPage
      title="Horse Tack"
      banner={banner}
      description="A full selection of high quality horse tack — including saddles, saddle pads, bridles, headstalls, halters, lead ropes, bits, breast collars and lariats from Oxbow Tack and other trusted brands."
      products={[
        { name: "Saddle Pads & Blankets", image: t0.url },
        { name: "Ropes — Greens & Blues", image: t1.url },
        { name: "Bits & Hackamores", image: t2.url },
        { name: "Halters & Lead Ropes", image: t3.url },
        { name: "Saddle Blanket Selection", image: t4.url },
        { name: "Headstalls & Bridles", image: t5.url },
        { name: "Back Cinches & Breast Collars", image: t6.url },
        { name: "Mecate Reins & Rope Halters", image: t7.url },
        { name: "Lariats — Fast Back Ropes", image: t8.url },
      ]}
    />
  ),
});
