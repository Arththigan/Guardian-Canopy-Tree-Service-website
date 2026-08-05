import { Link } from "@tanstack/react-router";
import logo from "@/assets/guardian-canopy-logo.webp";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      <div className="canopy-gradient px-6 pt-16 pb-10">
        <Reveal className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="inline-flex rounded-[1.75rem] border border-white/60 bg-white/90 px-5 py-3 shadow-xl shadow-black/15 backdrop-blur-sm">
                <img
                  src={logo}
                  alt="Guardian Canopy Tree Service logo"
                  loading="lazy"
                  width={850}
                  height={836}
                  className="h-auto w-44 object-contain drop-shadow-md sm:w-52"
                />
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
                Certified arborists protecting the canopy above your home since 2004. Pruning,
                removals, emergency storm response and year-round tree health care.
              </p>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold tracking-[0.18em] text-accent uppercase">
                Explore
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <Link to="/" className="hover:text-accent">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-accent">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-accent">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-accent">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-accent">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-accent">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-accent">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold tracking-[0.18em] text-accent uppercase">
                Reach us
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                <li>+1 (716) 333-8723</li>
                <li>crew@guardiancanopy.com</li>
                <li>
                  1192 Main St
                  <br />
                  Buffalo, New York
                </li>
                <li>Mon–Sat · 7am – 6pm</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Guardian Canopy Tree Service. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="hover:text-accent underline underline-offset-2">
                Terms &amp; Conditions
              </Link>
              <Link to="/privacy" className="hover:text-accent underline underline-offset-2">
                Privacy Policy
              </Link>
              <p>ISA Certified Arborists · Licensed &amp; Fully Insured · CCB #221904</p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
