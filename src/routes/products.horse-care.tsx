import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import banner from "@/assets/horse-care-card.jpg";
import h0 from "@/assets/horse-care-products/horses.png.asset.json";
import h1 from "@/assets/horse-care-products/horses1.png.asset.json";
import h2 from "@/assets/horse-care-products/horses2.png.asset.json";
import h3 from "@/assets/horse-care-products/horses3.png.asset.json";
import h4 from "@/assets/horse-care-products/horses4.png.asset.json";
import h5 from "@/assets/horse-care-products/horses5.png.asset.json";
import h6 from "@/assets/horse-care-products/horses6.png.asset.json";
import h7 from "@/assets/horse-care-products/horses7.png.asset.json";
import h8 from "@/assets/horse-care-products/horses8.png.asset.json";
import h9 from "@/assets/horse-care-products/horses9.png.asset.json";
import h10 from "@/assets/horse-care-products/horses10.png.asset.json";
import h11 from "@/assets/horse-care-products/horses11.png.asset.json";
import h12 from "@/assets/horse-care-products/horses12.png.asset.json";
import h13 from "@/assets/horse-care-products/horses13.png.asset.json";
import h14 from "@/assets/horse-care-products/horses14.png.asset.json";
import h15 from "@/assets/horse-care-products/horses15.png.asset.json";
import h16 from "@/assets/horse-care-products/horses16.png.asset.json";
import h17 from "@/assets/horse-care-products/horses17.png.asset.json";
import h18 from "@/assets/horse-care-products/horses18.png.asset.json";
import h19 from "@/assets/horse-care-products/horses19.png.asset.json";
import h20 from "@/assets/horse-care-products/horses20.png.asset.json";
import h21 from "@/assets/horse-care-products/horses21.png.asset.json";
import h22 from "@/assets/horse-care-products/horses22.png.asset.json";
import h23 from "@/assets/horse-care-products/horses23.png.asset.json";
import h24 from "@/assets/horse-care-products/horses24.png.asset.json";
import h25 from "@/assets/horse-care-products/horses25.png.asset.json";
import h26 from "@/assets/horse-care-products/horses26.png.asset.json";
import h27 from "@/assets/horse-care-products/Horses27.png.asset.json";
import h28 from "@/assets/horse-care-products/Horses28.png.asset.json";
import h29 from "@/assets/horse-care-products/Horses29.png.asset.json";
import h30 from "@/assets/horse-care-products/Horses30.png.asset.json";
import h31 from "@/assets/horse-care-products/Horses31.png.asset.json";
import h32 from "@/assets/horse-care-products/Horses32.png.asset.json";
import h33 from "@/assets/horse-care-products/Horses33.png.asset.json";
import h34 from "@/assets/horse-care-products/Horses34.png.asset.json";
import h35 from "@/assets/horse-care-products/Horses35.png.asset.json";
import h36 from "@/assets/horse-care-products/Horses36.png.asset.json";
import h37 from "@/assets/horse-care-products/Horses37.png.asset.json";
import h38 from "@/assets/horse-care-products/Horses38.png.asset.json";
import h39 from "@/assets/horse-care-products/Horses39.png.asset.json";
import h40 from "@/assets/horse-care-products/Horses40.png.asset.json";
import h41 from "@/assets/horse-care-products/Horses41.png.asset.json";
import h42 from "@/assets/horse-care-products/Horses42.png.asset.json";
import h43 from "@/assets/horse-care-products/Horses43.png.asset.json";
import h44 from "@/assets/horse-care-products/Horses44.png.asset.json";
import h45 from "@/assets/horse-care-products/Horses45.png.asset.json";
import h46 from "@/assets/horse-care-products/Horses46.png.asset.json";
import h47 from "@/assets/horse-care-products/Horses47.png.asset.json";
import h48 from "@/assets/horse-care-products/Horses48.png.asset.json";
import h49 from "@/assets/horse-care-products/Horses49.png.asset.json";
import h50 from "@/assets/horse-care-products/Horses50.png.asset.json";
import h51 from "@/assets/horse-care-products/Horses51.png.asset.json";

export const Route = createFileRoute("/products/horse-care")({
  head: () => ({
    meta: [
      { title: "Horse Care — Circle L Feed & Hardware" },
      { name: "description", content: "Horse grooming supplies, health products, supplements and wound care in Quitman, AR." },
      { property: "og:title", content: "Horse Care" },
      { property: "og:description", content: "Grooming, supplements, wound care, and animal health products for your horse." },
    ],
  }),
  component: () => (
    <ProductPage
      title="Horse Care"
      banner={banner}
      description="Everything to keep your horse healthy and looking their best — grooming supplies, fly control, hoof care, joint and nutritional supplements, dewormers, and wound care products."
      products={[
        { name: "FluidFlex Joint Solution", image: h0.url },
        { name: "Quest Plus Gel Dewormer", image: h1.url },
        { name: "Red Cell Iron-Rich Supplement (32 oz)", image: h2.url },
        { name: "Elite Nutrition Ultra Flex", image: h3.url },
        { name: "Panacur PowerPac Dewormer", image: h4.url },
        { name: "Absorbine Veterinary Liniment", image: h5.url },
        { name: "Shoofly Leggins Fly Protection", image: h6.url },
        { name: "Red Cell Iron-Rich Supplement (Gallon)", image: h7.url },
        { name: "Kopertox Thrush Treatment", image: h8.url },
        { name: "Martin's Horse & Stable Insecticide Spray", image: h9.url },
        { name: "Strongid Pyrantel Pamoate Paste Dewormer", image: h10.url },
        { name: "Underwood Horse Medicine", image: h11.url },
        { name: "DMSO 99% Pure (Gel & Liquid)", image: h12.url },
        { name: "Farnam Endure Sweat-Resistant Fly Spray", image: h13.url },
        { name: "Quest Gel Moxidectin Dewormer", image: h14.url },
        { name: "Farnam Wound-Kote & Blue Lotion", image: h15.url },
        { name: "St. Croix Forge Horseshoes", image: h16.url },
        { name: "Ulcergard Omeprazole Oral Paste", image: h17.url },
        { name: "Bigeloil Liquid Gel Topical Pain Relief", image: h18.url },
        { name: "Panacur (fenbendazole) Equine Dewormer", image: h19.url },
        { name: "Farnam Vetrolin Liniment", image: h20.url },
        { name: "Absorbine Bute-Less Comfort & Recovery", image: h21.url },
        { name: "Safe-Guard (fenbendazole) Dewormer", image: h22.url },
        { name: "Durvet Ivermectin Paste 1.87% (Apple)", image: h23.url },
        { name: "Absorbine UltraShield Gold & EX Fly Spray", image: h24.url },
        { name: "Red Cell Pellets Iron-Rich Supplement", image: h25.url },
        { name: "Farnam Tri-Tec 14 Fly Repellent", image: h26.url },
        { name: "Farnam Bronco e Equine Fly Spray", image: h27.url },
        { name: "Safe-Guard (fenbendazole) Equine Dewormer Paste", image: h28.url },
        { name: "Farnam Chew Stop Aerosol", image: h29.url },
        { name: "Elite Nutrition Ultra Guard Probiotic Supplement", image: h30.url },
        { name: "Riggin's Nu-Stock All Purpose Ointment", image: h31.url },
        { name: "Elite Nutrition Equine Re-Bound CNS", image: h32.url },
        { name: "Farnam Excalibur Sheath & Udder Cleaner", image: h33.url },
        { name: "Farnam Equisect Fly Repellent", image: h34.url },
        { name: "Bigeloil Topical Pain Relief Liquid", image: h35.url },
        { name: "Pyranha Wipe N' Spray Fly Repellent", image: h36.url },
        { name: "Zimecterin Gold Dewormer", image: h37.url },
        { name: "Zimecterin Ivermectin Paste Dewormer", image: h38.url },
        { name: "Farnam IverCare Ivermectin Paste", image: h39.url },
        { name: "Farnam Repel-X Fly Spray", image: h40.url },
        { name: "Elite Nutrition Re-Link Equine Supplement", image: h41.url },
        { name: "Elite Nutrition Electro-Boost Paste Mineral Supplement", image: h42.url },
        { name: "Betadine Antiseptic Solution", image: h43.url },
        { name: "Anthelcide EQ Oxibendazole Paste Dewormer", image: h44.url },
        { name: "Acti-Flex Joint Supplement", image: h45.url },
        { name: "Elite Nutrition GastroMax Probiotic & Prebiotic Paste", image: h46.url },
        { name: "Elite Nutrition Re-Balance BB Herbal Immune Support", image: h47.url },
        { name: "Elanco Agita 10WG Fly Bait Insecticide", image: h48.url },
        { name: "QuickBayt Fly Bait & Spot Spray", image: h49.url },
        { name: "Elite Nutrition A.S.A.P. Probiotic Paste", image: h50.url },
        { name: "Farnam Wipe Original Formula Fly Protectant", image: h51.url },
      ]}
    />
  ),
});
