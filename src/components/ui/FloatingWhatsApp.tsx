import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/27123456789"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-4 bg-white text-black p-3 rounded-full shadow-2xl hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)] transition-shadow cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gold)] flex items-center justify-center font-bold">
        <MessageCircle size={20} className="text-black" />
      </div>
      <div className="pr-4 hidden sm:block">
        <div className="text-[10px] font-bold opacity-50 uppercase tracking-widest">Active Now</div>
        <div className="text-xs font-black uppercase tracking-wider">Chat on WhatsApp</div>
      </div>
    </motion.a>
  );
}
