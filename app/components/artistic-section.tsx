"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Palette, Sun, Waves, Camera } from "lucide-react"

const artisticConcepts = [
  {
    title: "Mediterranean Dreams",
    description: "Soft pastels and golden light inspired by the Amalfi Coast",
    color: "from-blue-100 to-yellow-50",
    icon: Sun,
    mood: "Dreamy & Ethereal",
  },
  {
    title: "Coastal Elegance",
    description: "Flowing fabrics against azure waters and white architecture",
    color: "from-cyan-50 to-blue-100",
    icon: Waves,
    mood: "Sophisticated & Serene",
  },
  {
    title: "Golden Hour Romance",
    description: "Warm terracotta tones with soft Mediterranean lighting",
    color: "from-orange-50 to-pink-100",
    icon: Palette,
    mood: "Romantic & Warm",
  },
  {
    title: "Lemon Grove Sessions",
    description: "Fresh citrus colors with natural textures and soft shadows",
    color: "from-yellow-50 to-green-100",
    icon: Camera,
    mood: "Fresh & Natural",
  },
]

const artisticGallery = [
  {
    src: "/images/positano-portrait.jpg",
    title: "Positano Portrait",
    style: "Mediterranean Elegance",
    colors: ["#E8F4FD", "#FFF8E1", "#FFE0B2", "#B39DDB"],
  },
  {
    src: "/images/beach-portrait.jpg",
    title: "Golden Serenity",
    style: "Sunset Romance",
    colors: ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FF8A65"],
  },
  {
    src: "/images/mosque-couple.jpg",
    title: "Architectural Poetry",
    style: "Cultural Elegance",
    colors: ["#F3E5F5", "#E1F5FE", "#FFF8E1", "#FFECB3"],
  },
  {
    src: "/images/beach-aerial.jpg",
    title: "Coastal Paradise",
    style: "Aerial Dreams",
    colors: ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC"],
  },
]

export default function ArtisticSection() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-blue-50 via-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl md:text-7xl font-bold tracking-[0.1em] mb-8 font-oswald text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {"ARTISTIC VISION".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.03, duration: 0.6 }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            className="w-24 h-[1px] bg-gradient-to-r from-blue-300 to-orange-300 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          />

          <motion.p
            className="text-l md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Ispirato dai colori delicati e dalla luce dorata della costiera amalfitana, creo immagini che catturano
            l'essenza mediterranea con palette soft e atmosfere sognanti
          </motion.p>
        </motion.div>

        {/* Artistic Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {artisticConcepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              className={`bg-gradient-to-br ${concept.color} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 group border border-white/50`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div className="mb-6" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                <concept.icon className="w-10 h-10 text-gray-700 group-hover:text-gray-900 transition-colors" />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3 font-montserrat text-gray-800">{concept.title}</h3>
              <p className="text-gray-600 mb-4 font-light text-sm leading-relaxed">{concept.description}</p>

              <div className="text-xs text-gray-500 font-medium tracking-wider">{concept.mood}</div>
            </motion.div>
          ))}
        </div>

        {/* Color Palette Showcase */}
        <motion.div
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 mb-20 border border-white/50"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h3
            className="text-4xl font-bold text-center mb-12 font-oswald text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            POSITANO PALETTE
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Azure Dream", color: "#E8F4FD", desc: "Soft sky blue" },
              { name: "Lemon Whisper", color: "#FFF8E1", desc: "Gentle citrus" },
              { name: "Terracotta Glow", color: "#FFE0B2", desc: "Warm earth" },
              { name: "Lavender Mist", color: "#F3E5F5", desc: "Delicate purple" },
              { name: "Coral Blush", color: "#FFCDD2", desc: "Soft coral" },
              { name: "Sage Breeze", color: "#E8F5E8", desc: "Fresh mint" },
              { name: "Peach Sunset", color: "#FFECB3", desc: "Golden hour" },
              { name: "Ocean Foam", color: "#E0F2F1", desc: "Sea mist" },
            ].map((palette, i) => (
              <motion.div
                key={palette.name}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{ backgroundColor: palette.color }}
                  whileHover={{ scale: 1.1, y: -5 }}
                />
                <h4 className="font-medium text-gray-800 text-sm mb-1">{palette.name}</h4>
                <p className="text-xs text-gray-500">{palette.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Artistic Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h3
            className="text-4xl font-bold text-center mb-16 font-oswald text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            ARTISTIC GALLERY
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artisticGallery.map((work, index) => (
              <motion.div
                key={work.title}
                className="group relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.76, 0, 0.24, 1],
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={work.src || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1 font-montserrat">{work.title}</h4>
                      <p className="text-sm text-gray-600 font-light">{work.style}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {work.colors.map((color, i) => (
                      <motion.div
                        key={i}
                        className="w-6 h-6 rounded-full shadow-sm"
                        style={{ backgroundColor: color }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.2, y: -2 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-blue-100 to-orange-100 text-gray-800 hover:from-blue-200 hover:to-orange-200 transition-all duration-500 tracking-[0.15em] font-medium text-sm font-montserrat rounded-full shadow-lg hover:shadow-xl border border-white/50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK ARTISTIC SESSION
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
