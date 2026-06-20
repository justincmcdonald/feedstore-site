import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Clock, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo.avif.asset.json";

type ProductLink = {
  to: string;
  label: string;
  children?: { to: string; label: string }[];
};

const productLinks: ProductLink[] = [
  {
    to: "/products/horse",
    label: "Horse",
    children: [
      { to: "/products/horse-tack", label: "Horse Tack" },
      { to: "/products/horse-care", label: "Horse Care" },
    ],
  },
  { to: "/products/cattle", label: "Cattle" },
  { to: "/products/sheep-goats", label: "Sheep & Goats" },
  { to: "/products/poultry", label: "Poultry" },
  { to: "/products/rabbits", label: "Rabbits" },
  { to: "/products/dogs-cats", label: "Dogs & Cats" },
  { to: "/products/wound-care", label: "Wound Care" },
  { to: "/products/hardware", label: "Hardware" },
  { to: "/products/equipment", label: "Equipment" },
];

export function SiteLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Announcement bar */}
      <div className="bg-barn text-barn-foreground text-[11px] sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-3 gap-y-1 px-3 py-2 sm:flex-nowrap sm:px-4">
          <a href="tel:5015894073" className="inline-flex shrink-0 items-center gap-1.5 hover:text-accent-foreground/90 sm:gap-2">
            <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> 501-589-4073
          </a>
          <div className="inline-flex min-w-0 items-center gap-1.5 opacity-90 sm:gap-2">
            <Clock className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
            <span className="truncate">
              <span className="sm:hidden">Mon–Sat · See hours</span>
              <span className="hidden sm:inline">Mon–Fri 8:00am–5:30pm · Sat 8:00am–3:00pm · Sun Closed</span>
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="http://www.facebook.com/CircleLFeedAndHardware"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center opacity-90 transition-opacity hover:opacity-100"
            >
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@circlelfeedandhardware"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex items-center opacity-90 transition-opacity hover:opacity-100"
            >
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.07-1.31 1.79-.04.38-.1.76-.02 1.14.22 1.38 1.37 2.55 2.77 2.72.88.11 1.78-.06 2.53-.49.89-.51 1.5-1.4 1.68-2.4.05-.27.06-.54.06-.81 0-3.24-.01-6.48.01-9.72-.01-.12.01-.24-.01-.36z" />
              </svg>
            </a>
          </div>
        </div>
      </div>


      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 sm:py-4">
          <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <img src={logoAsset.url} alt="Circle L Feed & Hardware logo" className="h-10 w-10 shrink-0 object-contain sm:h-14 sm:w-14" />
            <div className="min-w-0 leading-tight">
              <div className="truncate font-display text-base font-bold uppercase tracking-wide text-foreground sm:text-2xl">
                Circle L Feed &amp; Hardware
              </div>
              <div className="truncate text-[10px] text-muted-foreground sm:text-xs">Your Local Feed, Farm &amp; Ranch Supply Store</div>
            </div>
          </Link>


          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            <NavLink to="/">Home</NavLink>
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="inline-flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                Products <ChevronDown className="h-4 w-4" />
              </button>
              {productsOpen && (
                <div className="absolute left-0 top-full w-56 rounded-md border border-border bg-popover p-1 shadow-lg">
                  {productLinks.map((p) =>
                    p.children ? (
                      <SubMenu key={p.to} label={p.label} to={p.to} items={p.children} />
                    ) : (
                      <Link
                        key={p.to}
                        to={p.to}
                        className="block rounded px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary"
                      >
                        {p.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/location">Location</NavLink>
          </nav>

          <button
            className="rounded-md p-2 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border bg-cream px-4 py-3 lg:hidden">
            <MobileLink to="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              className="mt-1 flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
              aria-expanded={productsOpen}
            >
              <span>Products</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="ml-3 border-l border-border pl-2">
                {productLinks.map((p) =>
                  p.children ? (
                    <MobileSubMenu
                      key={p.to}
                      label={p.label}
                      to={p.to}
                      items={p.children}
                      onNavigate={() => { setMobileOpen(false); setProductsOpen(false); }}
                    />
                  ) : (
                    <MobileLink key={p.to} to={p.to} onClick={() => { setMobileOpen(false); setProductsOpen(false); }}>
                      {p.label}
                    </MobileLink>
                  )
                )}
              </div>
            )}
            <MobileLink to="/about" onClick={() => setMobileOpen(false)}>About Us</MobileLink>
            <MobileLink to="/location" onClick={() => setMobileOpen(false)}>Location</MobileLink>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Social strip */}
      <section className="bg-cream border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">Follow Along With Us</h2>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a
              href="http://www.facebook.com/CircleLFeedAndHardware"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@circlelfeedandhardware"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-secondary"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.07-1.31 1.79-.04.38-.1.76-.02 1.14.22 1.38 1.37 2.55 2.77 2.72.88.11 1.78-.06 2.53-.49.89-.51 1.5-1.4 1.68-2.4.05-.27.06-.54.06-.81 0-3.24-.01-6.48.01-9.72-.01-.12.01-.24-.01-.36z" />
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-accent bg-earth text-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold uppercase">Circle L Feed &amp; Hardware</h3>
            <p className="mt-2 text-sm opacity-80">Family Owned and Operated Since 1999</p>
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider opacity-70">Visit Us</h4>
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> 5989 Heber Springs Rd W, Quitman AR 72131</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> 501-589-4073</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> circlelfeed@yahoo.com</p>
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider opacity-70">Store Hours</h4>
            <p>Monday–Friday: 8:00am – 5:30pm</p>
            <p>Saturday: 8:00am – 3:00pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="border-t border-cream/15">
          <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs opacity-70">
            © Circle L Feed &amp; Hardware — All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      activeProps={{ className: "rounded-md px-4 py-2 text-sm font-semibold text-barn bg-secondary" }}
      activeOptions={{ exact: true }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
    >
      {children}
    </Link>
  );
}

function SubMenu({ label, to, items }: { label: string; to: string; items: { to: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={to}
        className="flex items-center justify-between rounded px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary"
      >
        <span>{label}</span>
        <ChevronDown className="h-3.5 w-3.5 -rotate-90" />
      </Link>
      {open && (
        <div className="absolute left-full top-0 ml-1 w-48 rounded-md border border-border bg-popover p-1 shadow-lg">
          {items.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="block rounded px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary"
            >
              {c.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileSubMenu({ label, to, items, onNavigate }: { label: string; to: string; items: { to: string; label: string }[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-1 flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
        aria-expanded={open}
      >
        <span>{label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-3 border-l border-border pl-2">
          {items.map((c) => (
            <MobileLink key={c.to} to={c.to} onClick={onNavigate}>{c.label}</MobileLink>
          ))}
        </div>
      )}
    </div>
  );
}
