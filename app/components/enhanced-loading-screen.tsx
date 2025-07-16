"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EnhancedLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showName, setShowName] = useState(false)
  const [flashEffect, setFlashEffect] = useState(false)

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          setTimeout(() => {
            setFlashEffect(true)
            setTimeout(() => setShowName(true), 200)
          }, 300)
          setTimeout(() => setIsLoading(false), 1500)
          return 100
        }
        return prev + 1.5 // Più veloce
      })
    }, 20) // Più veloce

    return () => {
      clearInterval(progressTimer)
    }
  }, [])

  const nameVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.02, // Più veloce
        duration: 0.3, // Più veloce
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        >
          {/* Flash Effect */}
          <AnimatePresence>
            {flashEffect && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white z-20"
              />
            )}
          </AnimatePresence>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="grid grid-cols-20 grid-rows-12 h-full w-full">
              {[...Array(240)].map((_, i) => (
                <div key={i} className="border border-white/20" />
              ))}
            </div>
          </div>

          <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
            <AnimatePresence mode="wait">
              {!showName ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* MP Logo */}
                  <motion.div
                    className="mb-16 md:mb-20"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Più veloce
                  >
                    <motion.h1
                      className="text-7xl md:text-9xl font-bold text-white font-oswald tracking-[0.3em] relative"
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2, // Più veloce
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      MP
                      {/* Subtle underline */}
                      <motion.div
                        className="absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 h-[1px] bg-white/40"
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }} // Più veloce
                      />
                    </motion.h1>
                  </motion.div>

                  {/* Counter Display */}
                  <motion.div
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }} // Più veloce
                  >
                    <motion.div className="text-4xl md:text-6xl font-mono font-bold text-white mb-4 md:mb-6 tracking-wider">
                      {Math.round(progress).toString().padStart(3, "0")}
                    </motion.div>

                    {/* Simple progress line */}
                    <div className="w-48 md:w-64 h-[2px] bg-white/20 mx-auto relative">
                      <motion.div
                        className="h-full bg-white absolute left-0 top-0"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </motion.div>

                  {/* Status */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }} // Più veloce
                    className="text-white/60 text-xs md:text-sm tracking-[0.3em] font-light"
                  >
                    {progress < 100 ? "LOADING" : "COMPLETE"}
                  </motion.div>

                  {/* Subtle corner decorations */}
                  <motion.div
                    className="absolute top-4 md:top-8 left-4 md:left-8 w-6 md:w-8 h-6 md:h-8 border-l border-t border-white/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }} // Più veloce
                  />
                  <motion.div
                    className="absolute top-4 md:top-8 right-4 md:right-8 w-6 md:w-8 h-6 md:h-8 border-r border-t border-white/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.8 }} // Più veloce
                  />
                  <motion.div
                    className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-6 md:w-8 h-6 md:h-8 border-l border-b border-white/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.8 }} // Più veloce
                  />
                  <motion.div
                    className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-6 md:w-8 h-6 md:h-8 border-r border-b border-white/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }} // Più veloce
                  />
                </motion.div>
              ) : (
                <motion.div key="name" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                  <motion.div className="mb-6 md:mb-8">
                    <motion.h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em] mb-3 md:mb-4 font-oswald text-white">
                      {"MATTEO".split("").map((letter, i) => (
                        <motion.span
                          key={i}
                          custom={i}
                          variants={nameVariants}
                          initial="hidden"
                          animate="visible"
                          className="inline-block"
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.h1>

                    <motion.h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-[0.2em] text-white/90 font-oswald">
                      {"PELLINO".split("").map((letter, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.4 + i * 0.03, // Più veloce
                            duration: 0.3, // Più veloce
                            ease: [0.76, 0, 0.24, 1],
                          }}
                          className="inline-block"
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }} // Più veloce
                  >
                    <motion.p
                      className="text-lg md:text-xl font-medium tracking-[0.25em] text-white/70 font-montserrat"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }} // Più veloce
                    >
                      VISUAL STORYTELLER
                    </motion.p>
                  </motion.div>

                  <motion.div
                    className="mt-8 md:mt-12"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }} // Più veloce
                  >
                    <motion.div
                      className="w-24 md:w-32 h-[1px] bg-white/50 mx-auto"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.3, duration: 1, ease: "easeOut" }} // Più veloce
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
