"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
        videoRef.current?.play()
      })
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dewwfgn0e/video/upload/v1752675512/hero-video_rypivv.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      <motion.div style={{ opacity }} className="relative z-10 h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }} // Più veloce
          className="text-white"
        >
          <motion.div className="mb-8">
            <motion.h1 className="text-7xl md:text-8xl font-bold tracking-[0.12em] mb-4 font-oswald">
              {"MATTEO".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 80, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 2.8 + i * 0.08, // Più veloce
                    duration: 0.6, // Più veloce
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="inline-block"
                  style={{ transformOrigin: "50% 100%" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h2 className="text-4xl md:text-6xl font-semibold tracking-[0.15em] text-white/95 font-oswald">
              {"PELLINO".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, rotateY: -90 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{
                    delay: 3.5 + i * 0.06, // Più veloce
                    duration: 0.7, // Più veloce
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="inline-block"
                  style={{ transformOrigin: "50% 100%" }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>
          </motion.div>

          <motion.div
            className="w-40 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-12 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 160, opacity: 1 }}
            transition={{ delay: 4.2, duration: 1.5, ease: "easeOut" }} // Più veloce
          />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }} className="mb-16">
            <motion.p
              className="text-2xl md:text-3xl font-medium tracking-[0.2em] opacity-95 mb-3 font-montserrat"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.7, duration: 0.8 }} // Più veloce
            >
              VISUAL STORYTELLER
            </motion.p>
            <motion.p
              className="text-base md:text-lg font-light tracking-[0.25em] opacity-80 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5, duration: 0.8 }} // Più veloce
            >
              PHOTOGRAPHER • CREATOR • ARTIST
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.5, duration: 1 }} // Più veloce
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="mb-3"
        >
          <ChevronDown size={28} className="opacity-90" />
        </motion.div>
        <motion.p
          className="text-xs tracking-[0.3em] mt-3 opacity-70 font-montserrat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 6 }}
        >
          EXPLORE
        </motion.p>
      </motion.div>
    </section>
  )
}
