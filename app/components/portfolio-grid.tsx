"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const portfolioImages = [
  {
    src: "/images/beach-aerial.jpg",
    title: "Tropical Paradise",
    category: "Aerial",
  },
  {
    src: "/images/positano-portrait.jpg",
    title: "Mediterranean Vibes",
    category: "Portrait",
  },
  {
    src: "/images/mosque-couple.jpg",
    title: "Golden Hour",
    category: "Travel",
  },
  {
    src: "/images/beach-portrait.jpg",
    title: "Sunset Serenity",
    category: "Portrait",
  },
  {
    src: "/images/ocean-aerial.jpg",
    title: "Ocean Dreams",
    category: "Aerial",
  },
  {
    src: "/images/rice-fields.jpg",
    title: "Rural Landscape",
    category: "Landscape",
  },
  {
    src: "/images/sunset-ocean.jpg",
    title: "Dramatic Skies",
    category: "Landscape",
  },
  {
    src: "/images/studio-work.jpg",
    title: "Behind the Scenes",
    category: "Studio",
  },
]

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Portrait", "Aerial", "Travel", "Landscape", "Studio"]

  const filteredImages =
    selectedCategory === "All" ? portfolioImages : portfolioImages.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl md:text-7xl font-extralight tracking-[0.1em] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {"PORTFOLIO".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.6 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.div
            className="w-24 h-[1px] bg-black mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 text-sm font-light tracking-[0.15em] transition-all duration-500 relative overflow-hidden ${
                selectedCategory === category ? "text-black" : "text-gray-400 hover:text-black"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              {selectedCategory === category && (
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-black"
                  layoutId="activeCategory"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${selectedCategory}-${image.src}`}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="group relative aspect-square overflow-hidden cursor-pointer bg-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <motion.div
                  className="absolute inset-0 flex items-end justify-start p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="text-white">
                    <h3 className="text-xl font-light tracking-wide mb-1">{image.title}</h3>
                    <p className="text-sm tracking-wider opacity-80 font-light">{image.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
