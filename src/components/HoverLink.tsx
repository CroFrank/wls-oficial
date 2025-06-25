import { useState } from "react"
import { motion } from "motion/react"

export function HoverLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative inline-block uppercase"
    >
      <span>{children}</span>
      <motion.span
        className="absolute left-0 bottom-0 h-0.5 bg-amber-300"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          transformOrigin: "left center",
          width: "100%",
          display: "block",
        }}
      />
    </a>
  )
}
