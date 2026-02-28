import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-1.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const featuredWork = [
  { src: portfolio1, title: "Golden Hour", category: "Landscape" },
  { src: portfolio2, title: "Neon Nights", category: "Street" },
  { src: portfolio3, title: "Editorial", category: "Portrait" },
  { src: portfolio4, title: "Coastline", category: "Aerial" },
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="HIGH17 cinematic photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Photography & Videography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
          >
            HIGH<span className="text-gradient-gold">17</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-muted-foreground text-lg max-w-md mx-auto mb-10"
          >
            We capture moments that transcend time. Cinematic visuals for brands, events, and stories worth telling.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium tracking-widest uppercase px-8 py-3 transition-all duration-300 hover:shadow-[var(--gold-glow)] hover:scale-105"
            >
              View Work
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 border border-border text-foreground font-body text-sm font-medium tracking-widest uppercase px-8 py-3 transition-all duration-300 hover:border-primary hover:text-primary"
            >
              <Play size={16} />
              Showreel
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Selected Work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Our Latest Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredWork.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link to="/portfolio" className="group relative block overflow-hidden aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-end p-8">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-1">{item.category}</p>
                      <h3 className="font-display text-2xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-body text-sm tracking-widest uppercase hover:gap-4 transition-all duration-300"
            >
              View All Work
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Create Together
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto mb-10">
              Have a project in mind? We'd love to hear about it and bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:shadow-[var(--gold-glow)] hover:scale-105"
            >
              Get In Touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
