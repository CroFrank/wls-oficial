import { useEffect, useRef, type JSXElementConstructor } from "react"
import { animate, inView } from "motion"

type ServiceCardProps = {
  title: string
  description: string
  price: React.ReactNode
  link?: string
}

export default function ServiceCard({
  title,
  description,
  price,
  link,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cardRef.current) {
      inView(cardRef.current, () => {
        animate(
          cardRef.current!,
          { rotateY: [0, 90, 90, 0] },
          {
            duration: 1.2,
            delay: 0.3,
          }
        )
      })
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="bg-gray-200 text-black p-6 rounded-lg shadow-lg transform transition-transform flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{description}</p>
        <p className="text-lg">
          {price}
          <span className="euro-symbol"> €</span>/jednokratno
        </p>
      </div>
      {link && (
        <a
          href={link}
          className="inline-block mt-4 text-sm text-amber-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pogledaj primjer →
        </a>
      )}
    </div>
  )
}
