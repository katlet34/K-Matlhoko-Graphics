import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-black)]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">LET'S <span className="text-[var(--color-brand-gold)] italic font-light">TALK</span></h1>
          <p className="text-lg text-white/60 mb-12">
            Whether you have a clear vision or just a rough idea, we're here to bring it to life. Reach out and let's create something impossible to ignore.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-[var(--color-brand-charcoal)]">
                <Mail className="text-[var(--color-brand-gold)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-1">Email Us</h4>
                <a href="mailto:hello@kmatlhoko.co.za" className="text-lg font-medium hover:text-[var(--color-brand-gold)] transition-colors">hello@kmatlhoko.co.za</a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-[var(--color-brand-charcoal)]">
                <Phone className="text-[var(--color-brand-gold)]" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-1">WhatsApp / Call</h4>
                <a href="tel:+27123456789" className="text-lg font-medium hover:text-[var(--color-brand-gold)] transition-colors">+27 (0) 12 345 6789</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-[var(--color-brand-charcoal)] rounded-3xl p-8 lg:p-12 border border-white/5">
          <h3 className="text-2xl font-display font-bold mb-8">Send a Message</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-white/50">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest uppercase text-white/50">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <label className="text-xs font-bold tracking-widest uppercase text-white/50">Service Needed</label>
              <select className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors appearance-none cursor-pointer">
                <option className="bg-[var(--color-brand-charcoal)]">Brand Identity</option>
                <option className="bg-[var(--color-brand-charcoal)]">Poster Design</option>
                <option className="bg-[var(--color-brand-charcoal)]">Social Media</option>
                <option className="bg-[var(--color-brand-charcoal)]">Other</option>
              </select>
            </div>
            <div className="space-y-2 pt-4">
              <label className="text-xs font-bold tracking-widest uppercase text-white/50">Message</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <div className="pt-6">
              <Button className="w-full h-14 text-lg">Send Message <ArrowRight className="ml-2 w-5 h-5" /></Button>
            </div>
          </form>
        </motion.div>
        
      </div>
    </div>
  );
}
