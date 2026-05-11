import { useState } from "react";
import { ArrowRight, Twitter, Instagram, Linkedin, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-black pt-24 pb-12 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 flex-wrap">
            <div className="lg:col-span-1">
              <a href="#" className="text-xl font-display font-bold tracking-tighter inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white flex items-center justify-center font-black text-black text-lg">K</div>
                MATLHOKO<span className="font-light">GRAPHICS</span>
              </a>
              <p className="text-white/60 mb-8 max-w-sm">
                Premium, protected artworks. We build visual identities and digital experiences that are impossible to ignore.
              </p>
            </div>

            <div>
              <h4 className="font-display text-lg font-medium mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Services</a></li>
                <li><a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing & Combos</a></li>
                <li><a href="#payments" className="text-white/60 hover:text-white transition-colors">Payments & Booking</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-display text-lg font-medium mb-6">Start your order</h4>
              <p className="text-white/60 mb-6">Ready to elevate your brand? Let's discuss your vision directly on WhatsApp.</p>
              <a href="https://wa.me/27693585662" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-between group md:w-auto px-8">
                  Order via WhatsApp
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform ml-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-white/40 font-bold">
            <p>© {new Date().getFullYear()} K Matlhoko Graphics. All rights reserved.</p>
            <div className="flex space-x-6">
              <button onClick={() => setIsModalOpen(true)} className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111] border border-white/10 p-8 rounded-2xl max-w-lg w-full relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4 font-display">Terms of Service</h3>
            <div className="space-y-4 text-white/70 text-sm leading-relaxed">
              <p>
                <strong>K Matlhoko Graphics Disclaimer</strong>
              </p>
              <p>
                All designs provided by K Matlhoko Graphics remain the intellectual property of the creator until full payment is received and terms have been met.
              </p>
              <p>
                <strong>Unauthorized reproduction, publication, or distribution without full payment is strictly prohibited and will result in legal action under copyright law.</strong>
              </p>
              <p>
                Watermarked proofs are strictly for review purposes and are not permitted for public or commercial use under any circumstances.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <Button onClick={() => setIsModalOpen(false)}>I Understand</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
