"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Camera, Globe, Users } from "lucide-react"

const stats = [
  { icon: Camera, number: "500+", label: "Projects Completed" },
  { icon: Users, number: "200+", label: "Happy Clients" },
  { icon: Globe, number: "15+", label: "Countries Visited" },
  { icon: Award, number: "25+", label: "Awards Won" },
]

export default function AboutSection() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-bold tracking-[0.1em] mb-12 font-oswald"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {"ABOUT".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              className="w-20 h-[1px] bg-black mb-12 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            />

            <motion.p
              className="text-l md:text-xl leading-relaxed text-gray-700 mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Ciao, sono <strong className="font-semibold">Matteo Pellino</strong>, un fotografo appassionato che
              cattura momenti autentici e storie attraverso l'obiettivo. La mia visione si concentra sulla bellezza
              naturale e sull'emozione umana.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-gray-600 mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Specializzato in fotografia di ritratto, paesaggi e travel photography, cerco sempre di creare immagini
              che raccontino una storia e trasmettano emozioni profonde. Ogni scatto è un'opportunità per immortalare
              l'irripetibile.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-gray-600 mb-12 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Ho avuto il privilegio di collaborare con brand internazionali e di documentare storie in tutto il mondo,
              sempre con l'obiettivo di creare contenuti visivi che lascino il segno.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {["PORTRAIT", "LANDSCAPE", "TRAVEL", "COMMERCIAL"].map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 bg-gray-100 text-sm tracking-[0.15em] font-medium shadow-sm rounded-full hover:bg-gray-200 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="aspect-[4/5] relative overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <Image src="/images/foto_002.jpg" alt="About Matteo Pellino" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 border-2 border-gray-200 rounded-3xl -z-10"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
            >
              <motion.div
                className="mb-4 flex justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-8 h-8 text-gray-600 group-hover:text-black transition-colors" />
              </motion.div>
              <motion.h3
                className="text-4xl font-bold text-gray-800 mb-2 font-oswald"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5, type: "spring" }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 font-light text-sm tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
