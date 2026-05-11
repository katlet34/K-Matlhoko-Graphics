import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", path: "#services" },
  { name: "Pricing & Combos", path: "#pricing" },
  { name: "Payments", path: "#payments" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-[var(--color-brand-black)]/80 backdrop-blur-md py-4 border-b border-white/5"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-display font-bold tracking-tighter z-50 relative group flex items-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center font-black text-black text-lg">K</div>
            MATLHOKO<span className="font-light">GRAPHICS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={cn(
                  "text-xs font-semibold tracking-widest uppercase transition-colors hover:text-white",
                  location.hash === link.path
                    ? "text-white"
                    : "text-white/60"
                )}
              >
                {link.name}
              </a>
            ))}
            <a href="https://wa.me/27693585662" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Order Now</Button>
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden z-50 relative text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--color-brand-charcoal)] flex flex-col items-center justify-center pt-24 pb-12 px-6"
          >
            <nav className="flex flex-col items-center gap-8 w-full max-w-md">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.path}
                  className="w-full text-center"
                >
                  <a
                    href={link.path}
                    className="text-4xl font-display font-light uppercase tracking-wider block text-white hover:text-white/80"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                className="mt-8 w-full flex justify-center"
              >
                <a href="https://wa.me/27693585662" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full xs:w-auto">Order via WhatsApp</Button>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
