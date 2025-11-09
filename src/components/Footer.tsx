import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "figma:asset/3c51203d3507988acd4e4356eeb86385050e889f.png";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/hypernix_ae/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Hypernix_ae", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/team-hypernix", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hypernix.ae@gmail.com", label: "Email" },
  ];


  return (
    <footer id="contact" className="relative py-20 border-t border-primary/20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-20 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img src={logo} alt="Hypernix Logo" className="w-20 h-20" />
            </motion.div>
            <p className="text-foreground/60 mb-6 max-w-sm">Engineering the Future</p>
          </div>
          {/* Socials (moved from below logo into footer columns) */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 border border-primary/30 sharp-edge flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* right column intentionally left empty (STEM logo removed) */}
          <div className="md:col-span-2 lg:col-span-2" />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-sm"
          >
            © 2025 Hypernix. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex text-sm"
          >
            <a href="mailto:hypernix.ae@gmail.com" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              Contact us at hypernix.ae@gmail.com
            </a>
          </motion.div>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent pointer-events-none" />
    </footer>
  );
}
