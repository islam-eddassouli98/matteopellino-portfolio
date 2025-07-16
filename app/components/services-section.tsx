"use client"

import { motion } from "framer-motion"
import { Camera, Users, Plane, Mountain, Heart, Building } from "lucide-react"

const services = [
  {
    icon: Camera,
    title: "Portrait Photography",
    description: "Cattura la tua essenza con ritratti professionali che raccontano la tua storia unica.",
    features: ["Studio Sessions", "Outdoor Portraits", "Professional Headshots", "Creative Concepts"],
  },
  {
    icon: Heart,
    title: "Wedding Photography",
    description: "Immortalo il giorno più importante della tua vita con uno stile elegante e discreto.",
    features: ["Full Day Coverage", "Engagement Sessions", "Destination Weddings", "Photo Albums"],
  },
  {
    icon: Plane,
    title: "Travel Photography",
    description: "Documenta i tuoi viaggi e avventure con immagini che catturano l'anima dei luoghi.",
    features: ["Destination Shoots", "Cultural Documentation", "Adventure Photography", "Travel Stories"],
  },
  {
    icon: Mountain,
    title: "Landscape Photography",
    description: "Paesaggi mozzafiato che celebrano la bellezza naturale del nostro mondo.",
    features: ["Golden Hour Shoots", "Aerial Photography", "Seascapes", "Mountain Photography"],
  },
  {
    icon: Building,
    title: "Commercial Photography",
    description: "Soluzioni fotografiche professionali per il tuo business e brand.",
    features: ["Product Photography", "Corporate Events", "Brand Photography", "Marketing Content"],
  },
  {
    icon: Users,
    title: "Event Photography",
    description: "Cattura ogni momento speciale dei tuoi eventi con professionalità e creatività.",
    features: ["Corporate Events", "Private Parties", "Conferences", "Social Gatherings"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-4 bg-gray-50">
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
            {"SERVICES".split("").map((letter, i) => (
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
            className="w-24 h-[1px] bg-black mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          />
          <motion.p
            className="text-l md:text-xl text-gray-600 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Offro una gamma completa di servizi fotografici professionali per catturare i tuoi momenti più preziosi
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              whileHover={{ y: -5 }}
            >
              <motion.div className="mb-6" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.3 }}>
                <service.icon className="w-12 h-12 text-gray-700 group-hover:text-black transition-colors" />
              </motion.div>

              <h3 className="text-2xl font-semibold mb-4 font-montserrat">{service.title}</h3>
              <p className="text-gray-600 mb-6 font-light leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    className="text-sm text-gray-500 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                  >
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className="mt-6 text-sm font-medium tracking-wider text-gray-700 hover:text-black transition-colors"
                whileHover={{ x: 5 }}
              >
                LEARN MORE →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
