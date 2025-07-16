"use client"

import { motion } from "framer-motion"
import { Mail, Instagram, Camera, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "matteo@pellino.com",
    href: "mailto:matteo@pellino.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+39 123 456 7890",
    href: "tel:+39123456789",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Milano, Italy",
    href: "#",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon - Fri, 9AM - 6PM",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    handle: "@matteopellino",
    href: "https://instagram.com/matteopellino",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Camera,
    name: "Portfolio",
    handle: "View Work",
    href: "#",
    color: "from-gray-600 to-gray-800",
  },
]

export default function ContactSection() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {[...Array(96)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold tracking-[0.1em] mb-12 font-oswald"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {"LET'S CREATE".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.6 }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>

          <motion.div
            className="w-20 h-[1px] bg-white mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          />

          <motion.p
            className="text-xl leading-relaxed mb-8 opacity-80 font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Hai un progetto in mente? Collaboriamo per dare vita alla tua visione attraverso immagini che raccontano
            storie uniche e memorabili.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-3xl font-semibold mb-8 font-montserrat">Get In Touch</h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <motion.div
                    className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <info.icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/60 font-light">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-medium mb-4 font-montserrat">Follow My Work</h4>
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`flex items-center gap-4 p-4 bg-gradient-to-r ${social.color} rounded-2xl hover:shadow-lg transition-all duration-300 group`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                    <social.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="font-medium">{social.name}</p>
                    <p className="text-sm opacity-80">{social.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
          >
            <h3 className="text-3xl font-semibold mb-8 font-montserrat">Send a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium mb-2 text-white/80">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:border-white/40 transition-colors text-white placeholder-white/50"
                    placeholder="Your first name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <label className="block text-sm font-medium mb-2 text-white/80">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:border-white/40 transition-colors text-white placeholder-white/50"
                    placeholder="Your last name"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2 text-white/80">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:border-white/40 transition-colors text-white placeholder-white/50"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2 text-white/80">Project Type</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:border-white/40 transition-colors text-white">
                  <option value="">Select project type</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="commercial">Commercial Project</option>
                  <option value="travel">Travel Photography</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <label className="block text-sm font-medium mb-2 text-white/80">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:border-white/40 transition-colors text-white placeholder-white/50 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all duration-300 tracking-[0.15em] font-medium text-sm font-montserrat rounded-2xl shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.p className="text-lg text-white/60 mb-6 font-light">Ready to start your next project?</motion.p>
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-500 tracking-[0.15em] font-medium text-sm font-montserrat rounded-full shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK A CONSULTATION
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
