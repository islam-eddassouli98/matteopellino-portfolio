"use client"

import { motion } from "framer-motion"
import { Camera, Palette, Sun, Waves, Mountain, Heart } from "lucide-react"

const shootingIdeas = [
  {
    category: "Mediterranean Romance",
    icon: Heart,
    color: "from-pink-50 to-orange-50",
    ideas: [
      "Lemon grove sessions with flowing white dresses",
      "Terracotta rooftop golden hour portraits",
      "Coastal cliff engagement shoots",
      "Vintage Vespa adventures through cobblestone streets",
      "Sunset dinner on panoramic terraces",
    ],
  },
  {
    category: "Coastal Elegance",
    icon: Waves,
    color: "from-blue-50 to-cyan-50",
    ideas: [
      "Floating silk fabrics in azure waters",
      "White architecture minimalist portraits",
      "Boat deck lifestyle sessions",
      "Seaside villa morning light shoots",
      "Underwater ethereal photography",
    ],
  },
  {
    category: "Golden Hour Magic",
    icon: Sun,
    color: "from-yellow-50 to-orange-50",
    ideas: [
      "Vineyard sunset couple sessions",
      "Olive grove family portraits",
      "Beach bonfire intimate moments",
      "Cliffside yoga and wellness shoots",
      "Market street lifestyle photography",
    ],
  },
  {
    category: "Artistic Concepts",
    icon: Palette,
    color: "from-purple-50 to-pink-50",
    ideas: [
      "Paint splash with Mediterranean colors",
      "Mirror reflections in ancient fountains",
      "Flower crown workshops in gardens",
      "Textile and fabric artistic arrangements",
      "Shadow play with traditional architecture",
    ],
  },
  {
    category: "Adventure & Nature",
    icon: Mountain,
    color: "from-green-50 to-blue-50",
    ideas: [
      "Hiking trail sunrise sessions",
      "Cave exploration with natural lighting",
      "Waterfall mist portrait sessions",
      "Rock climbing action shots",
      "Forest path dreamy portraits",
    ],
  },
  {
    category: "Cultural Heritage",
    icon: Camera,
    color: "from-amber-50 to-yellow-50",
    ideas: [
      "Traditional ceramic workshop sessions",
      "Local fisherman lifestyle portraits",
      "Ancient ruins artistic photography",
      "Festival and celebration documentation",
      "Artisan craft behind-the-scenes",
    ],
  },
]

export default function ShootingIdeas() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
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
            SHOOTING IDEAS
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
            Concept creativi ispirati alla bellezza mediterranea, con palette delicate e atmosfere sognanti
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shootingIdeas.map((category, index) => (
            <motion.div
              key={category.category}
              className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 group border border-white/50`}
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
                <category.icon className="w-10 h-10 text-gray-700 group-hover:text-gray-900 transition-colors" />
              </motion.div>

              <h3 className="text-2xl font-semibold mb-6 font-montserrat text-gray-800">{category.category}</h3>

              <ul className="space-y-3">
                {category.ideas.map((idea, i) => (
                  <motion.li
                    key={i}
                    className="text-gray-600 font-light text-sm leading-relaxed flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-blue-300 to-orange-300 rounded-full mr-3 mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    {idea}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className="mt-6 text-sm font-medium tracking-wider text-gray-700 hover:text-gray-900 transition-colors"
                whileHover={{ x: 5 }}
              >
                EXPLORE CONCEPT →
              </motion.button>
            </motion.div>
          ))}
        </div>

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
            DISCUSS YOUR VISION
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
