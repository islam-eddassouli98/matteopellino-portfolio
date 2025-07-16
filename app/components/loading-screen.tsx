"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentWord, setCurrentWord] = useState(0)

  const words = ["CAPTURING", "MOMENTS", "CREATING", "STORIES"]

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 800)

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          clearInterval(wordTimer)
          setTimeout(() => setIsLoading(false), 1000)
          return 100
        }
        return prev + 1.5
      })
    }, 40)

    return () => {
      clearInterval(progressTimer)
      clearInterval(wordTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-black to-slate-800 flex items-center justify-center overflow-hidden"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="text-center relative z-10">
            {/* Main title with stagger animation */}
            <motion.div className="mb-12">
              <motion.h1
                className="text-6xl md:text-8xl font-extralight text-white tracking-[0.2em] mb-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              >
                {"MATTEO".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-4xl font-thin text-white/80 tracking-[0.3em]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {"PELLINO".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h2>
            </motion.div>

            {/* Animated words */}
            <motion.div
              className="h-8 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentWord}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="text-white/60 text-lg tracking-[0.2em] font-light"
                >
                  {words[currentWord]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Enhanced progress bar */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <div className="w-80 h-[2px] bg-white/10 mx-auto relative overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-white via-blue-200 to-white relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                >
                  <motion.div
                    className="absolute right-0 top-0 w-20 h-full bg-gradient-to-r from-transparent to-white/50"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              </div>

              <motion.div
                className="flex justify-between items-center mt-4 text-white/40 text-sm tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <span>LOADING</span>
                <motion.span key={progress} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="font-mono">
                  {Math.round(progress)}%
                </motion.span>
              </motion.div>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
