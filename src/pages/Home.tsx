import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background gradient effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-brand-gold-dark)]/20 rounded-full blur-[120px] mix-blend-screen mix-blend-lighten pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--color-brand-gray)]/40 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[4px] text-[var(--color-brand-gold)]">Available for new projects</span>
            </div>
            
            <h1 className="text-[50px] md:text-[82px] font-display font-[800] leading-[0.9] tracking-[-3px] mb-8">
              DESIGNS THAT MAKE BRANDS <br />
              <span className="text-[var(--color-brand-gold)] italic font-light pr-2">IMPOSSIBLE</span>
              <br /> TO IGNORE
            </h1>
            
            <p className="text-white/50 text-lg max-w-xl mb-10 leading-relaxed">
              K Matlhoko Graphics creates premium visual identities, posters, branding, and digital experiences that capture attention and drive results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg group">
                  View Portfolio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/booking" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg">
                  Start Your Project
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-white/50 font-medium">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--color-brand-black)] bg-gray-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span>500+ Happy Clients</span>
              </div>
              <div className="h-4 w-px bg-white/20 hidden sm:block"></div>
              <div className="hidden sm:flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" />)}
                <span className="ml-1">5.0 Rated</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex relative h-[600px] w-full items-center justify-center p-8"
          >
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              <div className="space-y-4">
                <div className="aspect-[3/4] w-full bg-cover bg-center transition-transform duration-300 relative overflow-hidden glass rounded-2xl flex flex-col justify-end p-4 border border-white/10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold mb-1 text-[var(--color-brand-gold)]">BRANDING</div>
                    <div className="text-sm uppercase font-black">LUMIÈRE IDENTITY</div>
                  </div>
                </div>
                <div className="w-full bg-cover bg-center transition-transform duration-300 relative overflow-hidden glass rounded-2xl flex flex-col justify-end p-4 border border-white/10" style={{ height: '240px', backgroundImage: "url('https://images.unsplash.com/photo-1627398225058-f4f408731c5f?auto=format&fit=crop&q=80&w=600')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold mb-1 text-[var(--color-brand-gold)]">POSTER</div>
                    <div className="text-sm uppercase font-black">SUMMER JAM '24</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="w-full bg-cover bg-center transition-transform duration-300 relative overflow-hidden glass rounded-2xl flex flex-col justify-end p-4 border border-white/10" style={{ height: '220px', backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold mb-1 text-[var(--color-brand-gold)]">LOGOTYPE</div>
                    <div className="text-sm uppercase font-black">TECHWAVE SA</div>
                  </div>
                </div>
                <div className="aspect-[3/4] w-full bg-cover bg-center transition-transform duration-300 relative overflow-hidden glass rounded-2xl flex flex-col justify-end p-4 border border-white/10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=600')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold mb-1 text-[var(--color-brand-gold)]">ALBUM ART</div>
                    <div className="text-sm uppercase font-black">DEEP SOUL EP</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-32 bg-[var(--color-brand-charcoal)] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-gold)] uppercase mb-4">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">Visual Solutions For <br className="hidden md:block"/>Modern Brands</h3>
            </div>
            <Link to="/services">
              <Button variant="ghost" className="group">
                View All Services 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Poster Design", desc: "Event, promotional, and school posters that demand attention.", icon: "🖼️" },
              { title: "Brand Identity", desc: "Logos, color palettes, and comprehensive brand guidelines.", icon: "✨" },
              { title: "Social Media", desc: "Engaging graphics for Instagram, Facebook, and Twitter.", icon: "📱" },
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl bg-[var(--color-brand-black)] border border-white/5 hover:border-[var(--color-brand-gold)]/40 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="text-4xl mb-6">{service.icon}</div>
                <h4 className="text-2xl font-display font-bold mb-3">{service.title}</h4>
                <p className="text-white/60 leading-relaxed mb-8">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-bold tracking-wider text-white group-hover:text-[var(--color-brand-gold)] uppercase transition-colors">
                  Explore <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 bg-[var(--color-brand-black)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-[var(--color-brand-gold)] uppercase mb-4">Why K Matlhoko</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">Designed To Stand Out. Built To Convert.</h3>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                We blend raw creativity with strategic marketing principles. Every design we craft isn't just beautiful—it's engineered to achieve your business goals.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Fast Turnaround", desc: "Professional designs delivered on schedule, every time.", icon: Clock },
                  { title: "Premium Quality", desc: "High-resolution, pixel-perfect assets ready for print or web.", icon: Star },
                  { title: "Unlimited Creativity", desc: "Fresh, innovative concepts tailored specifically to your brand.", icon: Zap },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 bg-white/5">
                      <feature.icon className="w-5 h-5 text-[var(--color-brand-gold)]" />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold font-display mb-1">{feature.title}</h5>
                      <p className="text-white/60">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10">
                <img src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=800" alt="Design Process" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-black)] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                     <p className="text-2xl font-display font-bold text-white mb-2">99%</p>
                     <p className="text-sm text-white/70 font-medium">Client Satisfaction Rate over 5 years of operation.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-brand-gold)]"></div>
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-[var(--color-brand-black)] mb-6 tracking-tight">Ready To Elevate Your Brand?</h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-charcoal)] mb-10 max-w-2xl mx-auto font-medium">
            Let's turn your vision into visuals. Our calendar is filling up quickly for this month.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="h-16 px-10 text-lg bg-[var(--color-brand-black)] text-white hover:bg-[var(--color-brand-charcoal)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] w-full sm:w-auto">
                Chat on WhatsApp
              </Button>
            </Link>
            <Link to="/booking">
              <Button size="lg" className="h-16 px-10 text-lg border-2 border-[var(--color-brand-black)] text-[var(--color-brand-black)] hover:bg-[var(--color-brand-black)] hover:text-[var(--color-brand-gold)] bg-transparent w-full sm:w-auto transition-colors font-bold">
                Book A Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
