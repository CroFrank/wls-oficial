import { useEffect, useState } from "react"
import { Dialog, DialogContent } from "../components/components/ui/dialog"

export default function TimedPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const alreadyShown = localStorage.getItem("popupShown")
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setOpen(true)
        localStorage.setItem("popupShown", "true")
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[url('/blog/tik-tak-toe.webp')] bg-cover bg-center w-full h-96 p-8 rounded-none z-50">
        <div className="flex flex-col justify-between items-center text-center">
          <p className="text-2xl font-bold text-red-900"></p>
          <a
            href="/krizic-kruzic"
            className="inline-block px-6 py-3 bg-white text-bllack font-semibold rounded-md shadow hover:bg-gray-100 transition uppercase"
          >
            Zaigraj
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
