import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const POSTS = [
    { title: "The Psychology of Color in Branding", category: "Branding", date: "Oct 12, 2024" },
    { title: "Why Minimalism Converts Better in 2024", category: "Design", date: "Sep 28, 2024" },
    { title: "Poster Design: Making Text Impossible to Ignore", category: "Typography", date: "Sep 15, 2024" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[var(--color-brand-black)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">THE <span className="text-[var(--color-brand-gold)] italic font-light">JOURNAL</span></h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on graphic design, branding strategy, and the creative industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-gray-900 border border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-black)] to-transparent opacity-60 z-10"></div>
                <img src={`https://images.unsplash.com/photo-${1600000000000 + i * 100000}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog cover fallback" onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" }} />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-xs font-bold tracking-widest text-[var(--color-brand-gold)] uppercase">{post.category}</span>
                <span className="text-xs text-white/40">{post.date}</span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-[var(--color-brand-gold)] transition-colors">{post.title}</h3>
              <div className="flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                Read Article <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
