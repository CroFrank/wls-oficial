import { useRef, useState } from "react"
import { toast } from "sonner"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const sendFormData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    if (!formRef.current) {
      console.log("Form ref is invalid")
      setLoading(false)
      return
    }

    const formData = new FormData(formRef.current)
    // const formDataObject = Object.fromEntries(rawFormData.entries())
    // const json = JSON.stringify(formDataObject)

    try {
      const response = await fetch("https://formcarry.com/s/3M4R-kvIRLr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        toast.error("Greška prilikom slanja poruke. Pokušajte ponovo kasnije.")
        console.log("Slanje neuspjelo:", response.statusText)
      } else {
        toast.success("Poruka je uspješno poslana!")
        console.log("Slanje uspješno:", await response.json())
        formRef.current.reset()
      }
    } catch (error) {
      console.error("Slanje neuspjelo:", error)
      toast.error("Dogodila se greška. Pokušajte ponovo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" ref={formRef} onSubmit={sendFormData}>
      <h2 className="text-xl font-semibold mb-10">Kontakt forma</h2>

      <fieldset disabled={loading} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">
            Ime i prezime
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full border border-gray-300 p-3 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            Email adresa
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-300 p-3 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="message">
            Poruka
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border border-gray-300 p-3 rounded-md"
          ></textarea>
        </div>

        {/* ✅ Checkbox */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            className="mt-1 h-5 w-5"
            required
          />
          <label htmlFor="privacy" className="text-sm">
            Prihvaćam{" "}
            <a href="/pravila-privatnosti" className="text-blue-600 underline">
              pravila privatnosti
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-amber-300 hover:bg-amber-400 text-black py-3 px-6 rounded-md transition duration-300 disabled:opacity-50"
        >
          {loading ? "Slanje..." : "Pošalji poruku"}
        </button>
      </fieldset>
    </form>
  )
}
