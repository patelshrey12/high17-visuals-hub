import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";

type Category = "All" | "Photo" | "Video";

const works = [
  { src: portfolio1, title: "Golden Hour", category: "Photo" as const, aspect: "landscape" },
  { src: portfolio2, title: "Neon Nights", category: "Photo" as const, aspect: "square" },
  { src: portfolio3, title: "Editorial Look", category: "Photo" as const, aspect: "portrait" },
  { src: portfolio4, title: "Coastline", category: "Photo" as const, aspect: "landscape" },
  { src: portfolio5, title: "Forever Yours", category: "Video" as const, aspect: "landscape" },
  { src: portfolio6, title: "Product Showcase", category: "Video" as const, aspect: "square" },
  { src: portfolio7, title: "Maternity Walk", category: "Photo" as const, aspect: "landscape" },
  { src: portfolio8, title: "Expecting", category: "Photo" as const, aspect: "portrait" },
];

const categories: Category[] = ["All", "Photo", "Video"];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <main className="pt-24 pb-16 px-6 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">Portfolio</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Our Work</h1>
        </motion.div>

        {/* Filter */}
        <div className="flex items-center justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-sm tracking-widest uppercase transition-all duration-300 pb-1 border-b-2 ${
                active === cat
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => setSelectedImage(item.src)}
                  className="group relative block w-full overflow-hidden cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-1">{item.category}</p>
                      <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-6 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[85vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;
