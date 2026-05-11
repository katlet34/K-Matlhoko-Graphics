import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, ShieldCheck, CreditCard, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<"package1" | "package2">("package2");
  const [extraHeadliners, setExtraHeadliners] = useState(0);

  const comboPackages = {
    package1: { name: "Event Combo Package 1", price: 320 },
    package2: { name: "Event Combo Package 2", price: 380, popular: true },
  };

  const currentPackage = comboPackages[selectedPackage];
  const totalCost = currentPackage.price + extraHeadliners * 20;

  const whatsappMessage = encodeURIComponent(
    `Hello K Matlhoko Graphics,\n\nI would like to order: *${currentPackage.name}* (Base: R${currentPackage.price})\nExtras: *${extraHeadliners} Extra Headliners*\n\n*Total Estimated:* R${totalCost}\n\nPlease let me know the next steps for payment and design details.`
  );
  const whatsappUrl = `https://wa.me/27693585662?text=${whatsappMessage}`;

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">Premium Design Agency</span>
            </div>
            
            <h1 className="text-[50px] md:text-[76px] font-[900] leading-[0.95] tracking-tight mb-8">
              Precision Design.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">3D Innovation.</span>
            </h1>
            
            <p className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed font-medium">
              We specialize in high-end 3D modeling and premium graphic design. From event posters to brand identities, we deliver protected artworks that command attention.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#pricing" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg group bg-white text-black hover:bg-white/90">
                  View Packages
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="https://wa.me/27693585662" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-white/20 hover:bg-white/5">
                  Order on WhatsApp
                </Button>
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-white/50 font-medium">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
                <span className="ml-2 text-white">Trust & Quality Guaranteed</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex relative h-[600px] w-full items-center justify-center p-8"
          >
            <div className="relative w-full aspect-square max-w-lg rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
               {/* Placeholder abstract 3D visual feeling */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-[#050505] to-black"></div>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <div className="w-48 h-48 border border-white/10 rounded-full animate-spin [animation-duration:15s] flex items-center justify-center">
                    <div className="w-32 h-32 border border-white/20 rounded-full animate-spin [animation-duration:10s] [animation-direction:reverse]"></div>
                 </div>
                 <div className="absolute text-5xl font-black tracking-tighter mix-blend-overlay opacity-30">3D</div>
               </div>
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="glass p-4 rounded-xl text-xs uppercase tracking-widest font-bold flex justify-between items-center bg-black/40 backdrop-blur-md border border-white/10">
                   <span>Protected Artwork</span>
                   <ShieldCheck className="w-4 h-4 text-white" />
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE MESSAGE SECTION */}
      <section id="services" className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-white/80" />
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Premium, Protected Artworks.</h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            Every piece crafted at K Matlhoko Graphics is a commitment to precision. We don't just design; we engineer visual experiences that elevate your brand. All original files remain securely protected as intellectual property, ensuring your investment is exclusive and professional.
          </p>
        </div>
      </section>

      {/* PRICING GRID */}
      <section id="pricing" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Standard Services</h2>
            <p className="text-white/60 text-lg max-w-2xl">High-quality design solutions customized for your needs. Simple pricing, exceptional results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Single Poster", price: "150", desc: "High-resolution promotional or event poster." },
              { title: "Booking Sleeve", price: "150", desc: "Professional DJ or artist booking profile design." },
              { title: "Gig Guide", price: "150", desc: "Organized layout for tour dates or weekly events." },
              { title: "Logo Design/Mock-up", price: "120", desc: "Brand identity creation with 3D realistic mock-ups." },
              { title: "Business Cards", price: "150", desc: "Premium, print-ready business card layouts." },
              { title: "Ticket Design", price: "70", desc: "Secure and visually striking event tickets." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-colors flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm mb-6">{item.desc}</p>
                </div>
                <div>
                  <div className="text-3xl font-black mb-6">R{item.price}</div>
                  <a href={`https://wa.me/27693585662?text=Hello, I would like to order: ${item.title}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full flex justify-between group border-white/20">
                      Order Now
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMBO PACKAGES & CALCULATOR */}
      <section className="py-32 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Event Combos & Customization</h2>
              <p className="text-white/60 text-lg mb-10 max-w-xl">
                Maximize your event's reach with our bundled packages. Need more artists on the poster? Customizing is easy and affordable.
              </p>
              
              <div className="space-y-4 mb-8 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <p><strong>Package 1 (R320):</strong> Covers essential event visuals for standard promo.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <p><strong>Package 2 (R380):</strong> Comprehensive suite for major events.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white shrink-0" />
                  <p><strong>Customization:</strong> Add extra headliners to any event poster for just R20 each.</p>
                </div>
              </div>
            </div>

            {/* EVENT CALCULATOR */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none -mr-20 -mt-20"></div>
              
              <h3 className="text-2xl font-bold mb-8">Event Cost Calculator</h3>
              
              <div className="space-y-8 relative z-10">
                {/* Package Selection */}
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-white/50 mb-4">Select Base Package</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(Object.keys(comboPackages) as Array<keyof typeof comboPackages>).map((key) => {
                      const pkg = comboPackages[key];
                      const isSelected = selectedPackage === key;
                      return (
                        <div 
                          key={key}
                          onClick={() => setSelectedPackage(key)}
                          className={`relative p-4 rounded-xl border cursor-pointer transition-all ${
                            isSelected ? 'bg-white text-black border-white' : 'bg-transparent border-white/20 text-white hover:border-white/40'
                          }`}
                        >
                          {pkg.popular && (
                            <div className="absolute -top-3 -right-2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-[4px] border border-white/20">
                              MOST POPULAR
                            </div>
                          )}
                          <div className="font-bold mb-1">{pkg.name}</div>
                          <div className={`text-xl font-black ${isSelected ? 'text-black' : 'text-white/80'}`}>R{pkg.price}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Extras Counter */}
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-white/50 mb-4">Extras</label>
                  <div className="flex items-center justify-between p-4 bg-[#111] border border-white/10 rounded-xl">
                    <div>
                      <div className="font-bold">Extra Headliners</div>
                      <div className="text-xs text-white/50">+R20 per extra artist on poster</div>
                    </div>
                    <div className="flex items-center gap-4 bg-black rounded-lg p-1 border border-white/10">
                      <button 
                        onClick={() => setExtraHeadliners(Math.max(0, extraHeadliners - 1))}
                        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                      >
                        -
                      </button>
                      <span className="font-bold w-6 text-center">{extraHeadliners}</span>
                      <button 
                        onClick={() => setExtraHeadliners(extraHeadliners + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Total & CTA */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex justify-between items-end mb-6">
                    <span className="text-sm font-bold uppercase tracking-wider text-white/50">Estimated Total</span>
                    <span className="text-4xl font-black">R{totalCost}</span>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button size="lg" className="w-full h-14 text-base font-bold bg-white text-black hover:bg-white/90">
                      Confirm via WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENTS & BOOKING BANNER */}
      <section id="payments" className="py-24 bg-[#111] border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <CreditCard className="w-12 h-12 mx-auto mb-6 text-white/80" />
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Payments & Booking</h2>
          <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            All design bookings are processed securely to ensure prompt scheduling and fast delivery. Once your order is confirmed, payments are made exclusively through:
          </p>
          <div className="bg-[#050505] p-6 rounded-2xl border border-white/10 inline-block text-left mb-10 min-w-fit shadow-2xl">
             <div className="text-sm text-white/50 uppercase tracking-widest font-bold mb-2">Banking Details</div>
             <div className="text-2xl font-bold mb-1">Capitec Bank</div>
             <div className="text-xl font-mono text-white/80">Acc: 2459018696</div>
          </div>
          <div>
            <a href="https://wa.me/27693585662" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white/20 text-white px-10 h-14">
                Chat With Us
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
