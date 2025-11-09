import { motion } from "motion/react";
import { Users, Briefcase, TrendingUp, Wrench, Palette, Video, ClipboardCheck, PenTool } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Users,
      title: "Adnan Nowfal",
      description: "Team Leader",
    },
    {
      icon: Briefcase,
      title: "Ayush Bisoyi",
      description: "Project Manager",
    },
    {
      icon: TrendingUp,
      title: "Devapriya Ajith",
      description: "Market Manager",
    },
    {
      icon: Wrench,
      title: "Hemendra Sridhar",
      description: "Head of Manufacturing",
    },
    {
      icon: Palette,
      title: "Madhav Ragesh",
      description: "Graphic Designer",
    },
    {
      icon: Video,
      title: "Saquib Manzar",
      description: "Media Engineer",
    },
  ];

  const supportMembers = [
    {
      icon: ClipboardCheck,
      title: "Mihir Sane",
      description: "Assistant Project Manager",
    },
    {
      icon: PenTool,
      title: "Raed Firoz",
      description: "Assistant Graphic Designer",
    },
  ];

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <span className="text-primary text-sm tracking-wider f1-font">ABOUT US</span>
          </div>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-6">
            Team Hypernix. Ever since July 2024
          </p>
          <h2 className="text-4xl md:text-6xl mb-6 f1-font">
            <span className="text-foreground">MEET THE</span>{" "}
            <span className="text-primary">TEAM</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="relative border border-primary/40 sharp-edge shadow-[0_0_20px_rgba(1,203,242,0.3)] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-full"
                >
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent sharp-edge" />
                  
                  {/* Border */}
                  <div className="absolute inset-0 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 sharp-edge" />
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/30 sharp-edge flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-base mb-4 text-foreground group-hover:text-primary transition-colors f1-font whitespace-nowrap">
                      {feature.title}
                    </h3>
                    
                    <p className="text-foreground/60 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* CORE Text Outside Border */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8"
          >
            <h3 className="text-4xl md:text-6xl f1-font text-primary">CORE</h3>
          </motion.div>
        </div>

        {/* Support Members Section */}
        <div className="relative mt-16">
          <div className="relative border border-primary/40 sharp-edge shadow-[0_0_20px_rgba(1,203,242,0.3)] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-full cursor-pointer"
                >
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent sharp-edge" />
                  
                  {/* Border */}
                  <div className="absolute inset-0 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 sharp-edge" />
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/30 sharp-edge flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <member.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-base mb-4 text-foreground group-hover:text-primary transition-colors f1-font whitespace-nowrap">
                      {member.title}
                    </h3>
                    
                    <p className="text-foreground/60 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* SUPPORT Text Outside Border */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-8"
          >
            <h3 className="text-4xl md:text-6xl f1-font text-primary">SUPPORT</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}