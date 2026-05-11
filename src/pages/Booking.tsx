import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Booking() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-black)] flex items-center">
      <div className="max-w-3xl mx-auto px-6 w-full">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">START YOUR <span className="text-[var(--color-brand-gold)] italic font-light">PROJECT</span></h1>
          <p className="text-white/60">Complete the form below to secure your spot in our design calendar.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-[var(--color-brand-charcoal)] rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
          
          <div className="flex justify-between items-center mb-12 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--color-brand-gold)] text-black flex items-center justify-center font-bold text-sm">1</div>
              <span className="text-sm font-bold tracking-widest uppercase text-white/80">Details</span>
            </div>
            <div className="h-px bg-white/20 flex-grow mx-4"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-white/20 text-white/50 flex items-center justify-center font-bold text-sm">2</div>
              <span className="text-sm font-bold tracking-widest uppercase text-white/40">Review</span>
            </div>
          </div>

          <form className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold tracking-widest uppercase text-white/50">Full Name</label>
                <input type="text" className="w-full bg-[var(--color-brand-black)]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors" placeholder="Enter your name" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold tracking-widest uppercase text-white/50">Company / Brand Name</label>
                <input type="text" className="w-full bg-[var(--color-brand-black)]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors" placeholder="Optional" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold tracking-widest uppercase text-white/50">Select Package</label>
              <div className="grid md:grid-cols-3 gap-4">
                {['Starter (R2,500)', 'Pro (R5,500)', 'Ultimate (R12k)'].map((pkg, i) => (
                  <div key={i} className="border border-white/10 rounded-xl p-4 cursor-pointer hover:border-[var(--color-brand-gold)] transition-colors text-center bg-[var(--color-brand-black)]/50">
                    <span className="text-sm font-medium">{pkg}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold tracking-widest uppercase text-white/50">Project Brief</label>
              <textarea rows={5} className="w-full bg-[var(--color-brand-black)]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors resize-none" placeholder="Describe your design needs, style preferences, and deadlines..."></textarea>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="button" size="lg" className="px-10">
                Continue to Review <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
        </motion.div>
        
      </div>
    </div>
  );
}
