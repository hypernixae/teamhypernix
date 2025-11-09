import { motion } from "motion/react";
import { Sparkles, ChevronRight } from "lucide-react";
import autotekLogo from "figma:asset/73c967c1e111fd9ce79ae9161915c04c384dc1bd.png";
import bocaLogo from "figma:asset/4ccc373fd446d466d5873df12b4578ea61638f0d.png";
import callprintLogo from "figma:asset/0d0884afc062aa70312f0aa2577842c594bda664.png";
import cyberSquareLogo from "../assets/cyber-square.png";
import llhLogo from "../assets/llh.png";
import tnbLogo from "../assets/tnb.png";
import trophyImage from "../assets/trophy.jpeg";

export function Performance() {
  const sponsors = [
    {
      name: "Autotek",
      logo: autotekLogo,
    },
    {
      name: "Boca",
      logo: bocaLogo,
    },
    {
      name: "Callprint",
      logo: callprintLogo,
    },
    {
      name: "Cyber Square",
      logo: cyberSquareLogo,
    },
    {
      name: "LLH",
      logo: llhLogo,
    },
    {
      name: "TNB",
      logo: tnbLogo,
    },
  ];

  return (
    <section id="performance" className="relative py-32 overflow-hidden">
      {/* Diagonal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent transform rotate-12" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent transform -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-primary text-sm tracking-wider f1-font">ACHIEVEMENTS</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 f1-font font-extrabold">
            <span className="text-foreground">NATIONAL</span>{" "}
            <span className="text-primary">CHAMPIONS</span>{" "}
            <span className="text-foreground">2025</span>
          </h2>
        </motion.div>

        {/* Award Ceremony Video Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="relative border border-primary/40 sharp-edge shadow-[0_0_20px_rgba(1,203,242,0.3)] p-6 bg-card/50 backdrop-blur-sm">
            {/* Video Container */}
            <div className="relative w-full aspect-video mb-6">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/MJOvXsjuagg?si=po7pIhSc70kYXTyT&start=5668" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="sharp-edge"
              />
            </div>
            
            {/* Title */}
            <h3 className="text-3xl md:text-4xl text-foreground f1-font text-center">
              AWARD CEREMONY
            </h3>
          </div>
        </motion.div>

        {/* Nationals Montage Video Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="relative border border-primary/40 sharp-edge shadow-[0_0_20px_rgba(1,203,242,0.3)] p-6 bg-card/50 backdrop-blur-sm">
            {/* Video Container */}
            <div className="relative w-full aspect-video mb-6">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/EgP7widOzdk?si=vE902DA9lYvcSBcT" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="sharp-edge"
              />
            </div>
            
            {/* Title */}
            <h3 className="text-3xl md:text-4xl text-foreground f1-font text-center">
              NATIONALS MONTAGE
            </h3>
          </div>
        </motion.div>

        {/* Trophy Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="relative border border-primary/40 sharp-edge shadow-[0_0_20px_rgba(1,203,242,0.3)] p-6 bg-card/50 backdrop-blur-sm">
            {/* Image Container */}
            <div className="relative w-full aspect-video mb-6">
              <img 
                src={trophyImage}
                alt="Championship Trophy"
                className="sharp-edge w-full h-full object-cover"
              />
            </div>
            
            {/* Title */}
            <h3 className="text-3xl md:text-4xl text-foreground f1-font text-center">
              TROPHY
            </h3>
          </div>
        </motion.div>

        {/* National Sponsors Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12 mt-20"
        >
          <h2 className="text-4xl md:text-6xl f1-font font-extrabold">
            <span className="text-foreground">NATIONAL</span>{" "}
            <span className="text-primary">SPONSORS</span>
          </h2>
        </motion.div>

        {/* Sponsor Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 sharp-edge blur-xl" />
              
              {/* Card */}
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 sharp-edge p-4 group-hover:border-primary/40 transition-all duration-300 h-48 flex items-center justify-center">
                {/* Logo */}
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="object-contain"
                  style={{ maxHeight: '85%', maxWidth: '90%', width: 'auto', height: 'auto' }}
                />

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Large Feature Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 sharp-edge" />
          <div className="relative border border-primary/30 sharp-edge p-12 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl mb-6 f1-font">
                  <span className="text-primary">SPONSOR</span>{" "}
                  <span className="text-foreground">US</span>
                </h3>
                <p className="text-foreground/70 text-lg mb-6">
                  Support Team Hypernix by sponsoring us. Read the Sponsorship Prospectus here.
                </p>
                <div className="mt-6">
                  <a
                            href="https://drive.google.com/file/d/11iKO9fvX-KMnwgcGvW2EAqUejNzqboMp/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                  className="relative inline-flex px-20 md:px-24 bg-transparent border border-primary/40 text-foreground rounded-full overflow-hidden items-center justify-center space-x-3 cursor-pointer group whitespace-nowrap text-lg md:text-xl"
                style={{ width: '300px', height: '60px', transition: 'color 250ms ease, border-color 250ms ease, box-shadow 250ms ease' }}
                  >
                    {/* Animated fill: expands width from 0 -> 100% on hover */}

                    <span
                      className="absolute inset-0 left-0 bg-primary w-0 group-hover:w-full"
                      style={{ zIndex: 0, transition: 'width 250ms ease' }}
                    />

                    {/* Button content sits above the fill */}
                    <span className="relative z-10 text-foreground group-hover:text-white" style={{ transition: 'color 250ms ease' }}>
                      Sponsorship Prospectus
                    </span>
                    <ChevronRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              <div className="relative h-64 md:h-80">
                {/* Abstract Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute border border-primary/30 sharp-edge"
                      style={{
                        width: `${100 + i * 40}px`,
                        height: `${100 + i * 40}px`,
                      }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}
                  <div className="w-20 h-20 bg-primary sharp-edge flex items-center justify-center z-10">
                    <Sparkles className="w-10 h-10 text-background" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
