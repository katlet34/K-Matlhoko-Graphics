import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-black)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">THE <span className="text-[var(--color-brand-gold)] italic font-light">VISION</span></h1>
            <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
              <p>
                K Matlhoko Graphics was founded on a simple principle: design should be impossible to ignore. Based in South Africa, we've spent years helping brands find their visual voice in an increasingly noisy digital landscape.
              </p>
              <p>
                We believe in the power of bold typography, deliberate negative space, and premium visual hierarchy. Whether we are crafting a logo for a startup, a poster for a major music festival, or a complete brand identity, our approach remains the same: meticulous attention to detail.
              </p>
              <p>
                Our philosophy merges classic graphic design principles with highly modern, conversion-focused strategy. We don't just make things look pretty; we design assets that perform.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-display font-bold mb-2">5+</h4>
                <p className="text-sm font-medium tracking-widest uppercase text-white/50">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold mb-2">500+</h4>
                <p className="text-sm font-medium tracking-widest uppercase text-white/50">Projects Delivered</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" alt="Studio" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[var(--color-brand-gold)] rounded-full mix-blend-multiply opacity-50 blur-2xl"></div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
