import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-black)] pt-24 pb-12 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 flex-wrap">
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-display font-bold tracking-tighter inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-[var(--color-brand-gold)] flex items-center justify-center font-black text-black text-lg">K</div>
              MATLHOKO<span className="font-light">GRAPHICS</span>
            </Link>
            <p className="text-white/60 mb-8 max-w-sm">
              South Africa's premier design agency. We build visual identities and digital experiences that are impossible to ignore.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors">Brand Identity</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors">Poster Design</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors">Social Media Art</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors">Album Covers</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors">Motion Graphics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About K.Matlhoko</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/pricing" className="text-white/60 hover:text-white transition-colors">Pricing & Packages</Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-white transition-colors">The Blog</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-display text-lg font-medium mb-6">Start a Project</h4>
            <p className="text-white/60 mb-6">Ready to elevate your brand? Let's discuss your vision.</p>
            <Link to="/booking">
              <Button variant="outline" className="w-full justify-between group">
                Book a Consultation
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
          <p>© {new Date().getFullYear()} K Matlhoko Graphics — Pretoria / Johannesburg</p>
          <div className="flex space-x-6 text-[var(--color-brand-gold)]">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
