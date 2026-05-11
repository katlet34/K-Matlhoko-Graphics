import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    title: "Brand Identity & Logo Design",
    desc: "We build visual identities that communicate your brand's core values. This isn't just a logo—it's a comprehensive design system.",
    features: ["Logo Variations", "Color Palette", "Typography System", "Brand Guidelines", "Social Media Kit"],
    price: "Starting at R3,500"
  },
  {
    title: "Event & Promotional Posters",
    desc: "Striking poster designs for events, church services, school functions, and commercial promotions that command attention.",
    features: ["A0 to A4 Formats", "Digital & Print Ready", "High Resolution", "Custom Illustration", "2 Concept Revisions"],
    price: "Starting at R850"
  },
  {
    title: "Social Media Graphics",
    desc: "Engaging, high-converting graphics optimized for Instagram, Twitter, Facebook, and LinkedIn.",
    features: ["Feed Posts", "Story Templates", "Carousel Designs", "Cover Banners", "Monthly Retainers Available"],
    price: "Starting at R450/post"
  },
  {
    title: "Print & Marketing Materials",
    desc: "Tangible marketing assets designed for premium printing and tactile experiences.",
    features: ["Business Cards", "Flyers & Brochures", "Banners & Billboards", "Packaging Design", "Stationery"],
    price: "Custom Quote"
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-[var(--color-brand-charcoal)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">OUR <span className="text-[var(--color-brand-gold)] italic font-light">SERVICES</span></h1>
          <p className="text-lg text-white/60">
            Comprehensive creative solutions designed to elevate your brand's presence in a crowded market.
          </p>
        </div>

        <div className="space-y-12">
          {SERVICES.map((service, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              key={i} 
              className="bg-[var(--color-brand-black)] rounded-3xl p-8 lg:p-12 border border-white/5 flex flex-col lg:flex-row gap-12"
            >
              <div className="lg:w-1/2">
                <div className="text-sm font-bold tracking-widest text-[var(--color-brand-gold)] uppercase mb-4">0{i + 1}</div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{service.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="inline-block px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm font-medium mb-8">
                  {service.price}
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-[var(--color-brand-charcoal)] rounded-2xl p-8 border border-white/5">
                <h3 className="text-xl font-display font-bold mb-6">What's Included:</h3>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-[var(--color-brand-gold)]/20 p-1 rounded-full text-[var(--color-brand-gold)]">
                        <Check size={14} />
                      </div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/booking">
                  <Button className="w-full">
                    Request This Service
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
