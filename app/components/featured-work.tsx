"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const featuredWorks = [
  {
    src: "/images/beach-aerial.jpg",
    title: "Tropical Paradise",
    category: "Aerial Photography",
    description: "Captured during golden hour in the Maldives",
    size: "large",
  },
  {
    src: "/images/positano-portrait.jpg",
    title: "Mediterranean Portrait",
    category: "Portrait",
    description: "Lifestyle portrait in Positano, Italy",
    size: "medium",
  },
  {
    src: "/images/mosque-couple.jpg",
    title: "Golden Reflection",
    category: "Travel",
    description: "Couple watching sunset at Sheikh Zayed Mosque",
    size: "medium",
  },
  {
    src: "/images/sunset-ocean.jpg",
    title: "Dramatic Skies",
    category: "Landscape",
    description: "Sunset over the Mediterranean Sea",
    size: "large",
  },
]

export default function FeaturedWork() {
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
            className="text-6xl md:text-7xl font-bold tracking-[0.1em] mb-8 font-oswald"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            FEATURED WORK
          </motion.h2>
          <motion.div
            className="w-24 h-[1px] bg-black mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorks.map((work, index) => (
            <motion.div
              key={work.title}
              className={`group relative overflow-hidden cursor-pointer ${
                work.size === "large" ? "md:col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={work.src || "/placeholder.svg"}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <div className="text-white">
                  <p className="text-sm tracking-wider opacity-80 mb-2 font-light">{work.category}</p>
                  <h3 className="text-2xl font-semibold mb-2 font-montserrat">{work.title}</h3>
                  <p className="text-sm opacity-90 font-light">{work.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            className="px-12 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-500 tracking-[0.15em] font-medium text-sm font-montserrat"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW FULL PORTFOLIO
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
