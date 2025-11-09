import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import hypernixLogo from "figma:asset/ca597c61aed46f6d75c3642379607f427f6105b4.png";

export function Hero() {
  // Smooth scroll helper (ease-in-out quad)
  function smoothScrollTo(selector: string, duration = 20000) {
    const target = document.querySelector(selector);
    if (!target) return;
    const start = window.scrollY || window.pageYOffset;
    const targetRect = target.getBoundingClientRect();
    const targetY = start + targetRect.top;
    const distance = targetY - start;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    function step(now: number) {
      const time = Math.min(1, (now - startTime) / duration);
      const eased = easeInOutQuad(time);
      window.scrollTo(0, Math.round(start + distance * eased));
      if (time < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 -mt-12">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: "-100%",
              right: "100%",
            }}
            animate={{
              x: ["0%", "200%"],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* social bar removed per request */}

        {/* background tagline removed per request */}
        {/* Large Hypernix Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16 mt-8"
        >
          <img 
            src={hypernixLogo} 
            alt="Hypernix" 
            className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="riope-font text-xl md:text-2xl text-foreground/70 -mt-4 mb-8 max-w-4xl"
        >
          ADNOC Yas in Schools National Champions 2025 | Aspiring Aramco STEM Racing World Finalists 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative group">
            {/* Background glow that spills */}
            <div className="absolute inset-0 bg-primary/0 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500 scale-110" />
            
            {/* Button */}
            <a
              href="#contact"
              className="relative px-8 py-4 bg-transparent border border-gray-600/40 text-foreground rounded-full group-hover:border-primary group-hover:shadow-glow transition-all duration-500 flex items-center space-x-2 cursor-pointer"
              onClick={(e) => {
                // allow modifier clicks to open in new tab
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
                e.preventDefault();
                smoothScrollTo("#contact", 20000);
              }}
            >
              <span>Start Your Journey</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}