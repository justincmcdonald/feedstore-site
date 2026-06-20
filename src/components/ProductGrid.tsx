export type ProductItem = { name: string; image?: string };

export function ProductGrid({ items, image }: { items: (string | ProductItem)[]; image: string }) {
  const normalized: ProductItem[] = items.map((it) =>
    typeof it === "string" ? { name: it, image } : { name: it.name, image: it.image ?? image }
  );
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {normalized.map((p) => (
        <div
          key={p.name}
          className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
          <div className="aspect-[4/3] overflow-hidden bg-secondary">
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-display text-base font-semibold uppercase tracking-wide text-foreground">{p.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">Available in-store</p>
          </div>
        </div>
      ))}
    </div>
  );
}
