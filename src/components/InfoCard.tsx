import { motion } from "motion/react"

type InfoCardProps = {
  title: string
  description: string
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <motion.div
      className="p-6 bg-white shadow-lg mx-auto"
      whileHover={{
        rotate: [0, -2, 2, -2, 2, 0], // shake effect
        transition: { duration: 0.4 },
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      >
        <h4 className="text-xl 2xl:text-2xl font-semibold mb-4 2xl:mb-8 text-gray-800">
          {title}
        </h4>
        <p className="text-gray-600 2xl:text-lg">{description}</p>
      </motion.div>
    </motion.div>
  )
}
