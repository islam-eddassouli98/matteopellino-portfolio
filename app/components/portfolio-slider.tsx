"use client"

import { motion } from "framer-motion"
import Image from "next/image"

// Genero automaticamente l'array delle tue foto da 1 a 71
const portfolioImages = Array.from({ length: 71 }, (_, i) => ({
  src: `/images/foto_${String(i + 1).padStart(3, '0')}.jpg`,
}))

export default function PortfolioSlider() {
  return (
    <section className="py-32 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold tracking-[0.1em] mb-8 font-oswald"
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
            className="w-24 h-[1px] bg-black mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          />
          <motion.p
            className="text-l md:text-l md:text-xl text-gray-600 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Una selezione dei miei lavori più significativi, che raccontano storie attraverso l'obiettivo
          </motion.p>
        </motion.div>

        {/* CSS-based Infinite Slider */}
        <div className="relative">
          <div
            className="flex space-x-[2px] animate-scroll hover:pause-animation"
            style={{
              width: `calc(320px * ${portfolioImages.length * 3} + 2px * ${(portfolioImages.length * 3) - 1})`,
            }}
          >
            {/* Render images 3 times for seamless loop */}
            {[...Array(3)].map((_, setIndex) =>
              portfolioImages.map((image, index) => (
                <motion.div
                  key={`${setIndex}-${index}`}
                  className="flex-shrink-0 w-80 group"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.01, // Ridotto il delay per 71 immagini
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  <motion.div
                    className="aspect-[9/16] relative overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -8 }}
                  >
                    <Image
                      src={image.src}
                      alt={`Foto ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </motion.div>
                </motion.div>
              )),
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-320px * ${portfolioImages.length} - 2px * ${portfolioImages.length - 1}));
            }
          }
          
          .animate-scroll {
            animation: scroll 120s linear infinite; /* Aumentato il tempo per 71 foto */
          }
          
          .pause-animation:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  )
}