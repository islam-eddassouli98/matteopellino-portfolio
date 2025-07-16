"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const brands = [
  { name: "Abu Dhabi Experience", logo: "/logo/abu-dhabi-experience-logo.svg" },
  { name: "Accor", logo: "/logo/accor-3.svg" },
  { name: "Asus", logo: "/logo/asus-4.svg" },
  { name: "Daniel Wellington", logo: "/logo/daniel-wellington.svg" },
  { name: "Eastpak", logo: "/logo/eastpak-logo.svg" },
  { name: "Foot Locker", logo: "/logo/foot-locker-logo.svg" },
  { name: "Havaianas", logo: "/logo/havaianas-3.svg" },
  { name: "Herschel Supply Co.", logo: "/logo/herschel-supply-co.-logo-brandlogos.net_pswcj5pua.svg" },
  { name: "Levi's", logo: "/logo/levis-1.svg" },
  { name: "Reebok", logo: "/logo/reebok-5.svg" },
  { name: "Wrangler", logo: "/logo/wrangler-logo.svg" },
]

export default function BrandsSlider() {
  return (
    <section className="py-20 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-[0.1em] mb-4 font-oswald text-gray-800">TRUSTED BY</h2>
          <div className="w-16 h-[1px] bg-gray-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light">
            Collaborazioni con brand internazionali e aziende di prestigio
          </p>
        </motion.div>

        {/* Infinite Slider */}
        <div className="relative">
          <motion.div
            className="flex space-x-16"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* First set */}
            {brands.map((brand, index) => (
              <motion.div
                key={`first-${brand.name}`}
                className="flex-shrink-0 flex items-center justify-center w-55 h-30 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                />
              </motion.div>
            ))}
            {/* Second set for seamless loop */}
            {brands.map((brand, index) => (
              <motion.div
                key={`second-${brand.name}`}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays */}
          {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" /> */}
        </div>
      </div>
    </section>
  )
}
