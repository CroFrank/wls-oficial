import { motion } from "motion/react"
import { BackgroundAnimation } from "./BackgroundAnimation"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      {/* ⬇️ Background particles (z-index lower) */}
      <div className="absolute inset-0 -z-10">
        <BackgroundAnimation />
      </div>
      <div className="w-full max-w-5xl text-center">
        <div className="flex flex-col justify-center text-white px-6 tracking-wider min-h-screen">
          <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 md:tracking-widest">
            {"WebLifeSupport".split("").map((char, index) => (
              <motion.span
                key={index}
                style={{
                  display: "inline-block",
                  transformOrigin: "bottom center",
                }}
                initial={{ rotateZ: -90 }}
                animate={{ rotateZ: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.div
            className="bg-[#ff9900] h-1 mb-5"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.4, ease: "easeOut" }}
          />

          <motion.h2
            className="text-sm md:text-xl mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Izrada web stranica za male i srednje poduzetnike.
          </motion.h2>
          <motion.h2
            className="text-sm md:text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stručna podrška u Vašim prvim digitalnim koracima.
          </motion.h2>

          {/* Animated Corner Cards - Hidden on small screens */}
          <CornerCard text="lighning-fast" />
          <CornerCard text="SEO-frienldy" />
          <CornerCard text="Unique-design" />
        </div>
      </div>
    </section>
  )
}

// Component for each card
function CornerCard({ text }: { text: string }) {
  return (
    <motion.div
      className={` bg-white/70 text-black p-4 mb-2 max-w-2xl mx-auto md:min-w-md w-full uppercase font-bold`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
      >
        <p className="text-sm">{text}</p>
      </motion.div>
    </motion.div>
  )
}
