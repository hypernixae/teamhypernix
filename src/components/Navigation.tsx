import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/3c51203d3507988acd4e4356eeb86385050e889f.png";
import f1Logo from "figma:asset/d24adc4965f13d145674e8edca221d2570d619ca.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#features" },
    { name: "Achievements", href: "#performance" },
    { name: "Gallery", href: "#gallery" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scroll with ease-in-out using requestAnimationFrame
  function smoothScrollTo(selector: string, duration = 800) {
    const target = document.querySelector(selector);
    if (!target) return;
    const start = window.scrollY || window.pageYOffset;
    const targetRect = target.getBoundingClientRect();
    const navbarHeight = 64; // h-16 = 4rem = 64px
    // Different offsets for different sections
    let offset = 10; // Default offset
    if (selector === "#performance") {
      offset = 20; // Achievements needs more space
    } else if (selector === "#features" || selector === "#gallery" || selector === "#sponsors") {
      offset = 0; // About Us, Gallery, Sponsors - blue badge heading sits right below navbar
    }
    const targetY = start + targetRect.top - navbarHeight - offset;
    const distance = targetY - start;
    const startTime = performance.now();

    // easeInOutQuad
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    function step(now: number) {
      const time = Math.min(1, (now - startTime) / duration);
      const eased = ease(time);
      window.scrollTo(0, Math.round(start + distance * eased));
      if (time < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020204]/80 backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-0"
          >
            <img src={logo} alt="Hypernix Logo" className="w-12 h-12" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
                <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
                onClick={(e) => {
                  // Allow modifier clicks to open in new tab
                  if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
                  // If this is an internal anchor, intercept and smooth scroll
                  if (item.href && item.href.startsWith("#")) {
                    e.preventDefault();
                    smoothScrollTo(item.href, 800);
                  }
                }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* F1 Logo - Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-0 hidden md:block"
          >
            <img src={f1Logo} alt="F1 Logo" className="w-12 h-12" />
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary absolute right-0"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#020204]/95 backdrop-blur-xl border-b border-primary/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                  onClick={(e) => {
                    setIsOpen(false);
                    // If this is an internal anchor, smooth scroll instead of jump
                    if (item.href && item.href.startsWith("#")) {
                      e.preventDefault();
                      // allow some time for menu close animation then scroll
                      setTimeout(() => smoothScrollTo(item.href, 800), 50);
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}