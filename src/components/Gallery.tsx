import { motion } from "motion/react";

export function Gallery() {
  return (
    <section id="gallery" className="relative pt-16 pb-32 overflow-hidden">
      {/* Diagonal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-transparent transform rotate-12" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/10 to-transparent transform -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-primary text-sm tracking-wider f1-font">GALLERY</span>
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
      </div>
    </section>
  );
}

