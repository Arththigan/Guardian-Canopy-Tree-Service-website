import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/guardian-canopy-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

function DockLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getScale = (i: number) => {
    return hoveredIndex === i ? 1.25 : 1;
  };

  const getY = (i: number) => {
    return hoveredIndex === i ? -6 : 0;
  };

  return (
    <div className="hidden items-end gap-1 md:flex">
      {links.map((link, i) => (
        <Link
          key={link.to}
          to={link.to}
          activeOptions={{ exact: link.to === "/" }}
          className="rounded-full px-4 py-2 font-display text-sm font-semibold text-secondary-foreground hover:bg-primary-soft"
          activeProps={{ className: "bg-primary-soft text-primary-deep" }}
          style={{
            transform: `translateY(${getY(i)}px) scale(${getScale(i)})`,
            transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transformOrigin: "bottom center",
            display: "inline-block",
          }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition-all duration-500 ${
          scrolled
            ? "surface-3d translate-y-0 backdrop-blur-xl"
            : "-translate-y-0 border border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Guardian Canopy Tree Service logo"
            width={850}
            height={836}
            className="h-14 w-auto object-contain drop-shadow-md sm:h-16"
          />
        </Link>

        <DockLinks />

        <div className="flex items-center gap-2">
          <a href="tel:+17163338723" className="btn-3d hidden !px-5 !py-2.5 text-sm lg:inline-flex">
            +1 (716) 333-8723
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="btn-3d-ghost !px-4 !py-2.5 md:hidden"
          >
            <span className="text-sm">{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="surface-3d mx-auto mt-2 max-w-6xl rounded-3xl p-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-display font-semibold text-secondary-foreground"
              activeProps={{ className: "bg-primary-soft text-primary-deep" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:+17163338723" className="btn-3d mt-2 w-full">
            Call +1 (716) 333-8723
          </a>
        </div>
      )}
    </header>
  );
}
