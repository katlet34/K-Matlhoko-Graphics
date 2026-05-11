import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

const PACKAGES = [
  {
    name: "Starter Form",
    price: "R2,500",
    desc: "Perfect for new businesses needing a professional launch.",
    features: ["Primary Logo Design", "Secondary Logo", "Brand Color Palette", "Basic Typography", "2 Revisions"],
    recommended: false
  },
  {
    name: "Professional",
    price: "R5,500",
    desc: "Comprehensive identity for established brands scaling up.",
    features: ["Everything in Starter", "Full Brand Guidelines", "Business Cards", "Letterhead Design", "Social Media Kit (3 posts)", "5 Revisions"],
    recommended: true
  },
  {
    name: "Ultimate",
    price: "R12,000",
    desc: "The complete visual overhaul for premium market positioning.",
    features: ["Everything in Pro", "Detailed Strategy Setup", "Packaging/Merch Mockups", "Motion Graphics Intro", "Priority Support", "Unlimited Revisions"],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-black)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">INVEST IN YOUR <br/><span className="text-[var(--color-brand-gold)] italic font-light">BRAND</span></h1>
          <p className="text-lg text-white/60">Transparent pricing for premium creative work. No hidden fees, just undeniable value.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className={`relative rounded-3xl p-8 border ${pkg.recommended ? 'border-[var(--color-brand-gold)] bg-[var(--color-brand-charcoal)]' : 'border-white/10 bg-[var(--color-brand-black)]'} flex flex-col`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-brand-gold)] text-black text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
              <p className="text-white/50 text-sm h-10 mb-6">{pkg.desc}</p>
              <div className="text-4xl font-display font-bold mb-8">{pkg.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-[var(--color-brand-gold)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/booking">
                <Button variant={pkg.recommended ? "primary" : "outline"} className="w-full">
                  Select Package
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
