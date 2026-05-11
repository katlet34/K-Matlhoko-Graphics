import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Filter } from "lucide-react";

const CATEGORIES = ["All", "Posters", "Branding", "Logos", "Social Media"];

const PORTFOLIO_ITEMS = [
  { id: 1, title: "Neon Nights", category: "Posters", img: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Lumière", category: "Branding", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "TechNova", category: "Logos", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Summer Splash", category: "Social Media", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Jazz Festival", category: "Posters", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800" },
  { id: 6, title: "Aura Skincare", category: "Branding", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-black)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">SELECTED <br/> <span className="text-[var(--color-brand-gold)] italic font-light">WORKS</span></h1>
          <p className="text-lg text-white/60 max-w-2xl">
            A curated collection of our best graphic design, branding, and motion projects. Explore how we've elevated brands across South Africa and globally.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="hidden md:flex items-center text-white/40 mr-4">
            <Filter size={20} className="mr-2" /> Filter:
          </div>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat 
                ? "bg-[var(--color-brand-gold)] border-[var(--color-brand-gold)] text-black" 
                : "bg-transparent border-white/10 text-white/70 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-900 cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[var(--color-brand-gold)] text-xs font-bold tracking-widest uppercase mb-2 block">{item.category}</span>
                  <h3 className="text-3xl font-display font-bold text-white mb-4">{item.title}</h3>
                  <div className="flex items-center text-sm font-medium text-white hover:text-[var(--color-brand-gold)] transition-colors">
                    View Case Study <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
