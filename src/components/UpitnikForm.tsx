import { useState } from "react"
import { toast } from "sonner"

type FormState = {
  svrhaStranice: string
  hasWebsite: string
  websiteDomain: string
  primjerStranice: string
  isMultilingual: string
  jezici: string
  imamDizajn: string
  zelimVasDizajn: string
  wantsCMS: string
  editableContent: string
  webShop: string
  payment: string
  needsInventory: string
  akcijePopustiKuponi: string
  ostalo: string
  budget: string
  deadline: string
}

const initialFormState: FormState = {
  svrhaStranice: "",
  hasWebsite: "-",
  websiteDomain: "",
  primjerStranice: "",
  isMultilingual: "-",
  jezici: "",
  imamDizajn: "",
  zelimVasDizajn: "-",
  wantsCMS: "-",
  editableContent: "",
  webShop: "-",
  payment: "",
  needsInventory: "-",
  akcijePopustiKuponi: "",
  ostalo: "",
  budget: "",
  deadline: "",
}

export default function UpitnikForm() {
  const [form, setForm] = useState<FormState>(initialFormState)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const sendFormData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://formcarry.com/s/3M4R-kvIRLr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      })
      if (!response.ok) {
        toast.error("Greška prilikom slanja poruke. Pokušajte ponovo kasnije.")
      } else {
        toast.success("Poruka je uspješno poslana!")
        setForm(initialFormState)
      }
    } catch (error) {
      toast.error("Greška prilikom slanja poruke. Pokušajte ponovo kasnije.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={sendFormData} className="space-y-8">
      {/* OSNOVNE INFORMACIJE */}
      <div>
        <h2 className="mb-2 text-xl font-semibold">Osnovne informacije</h2>

        <label className="mb-2 block">
          Koja je osnovna svrha web stranice?
        </label>
        <input
          name="svrhaStranice"
          value={form.svrhaStranice}
          onChange={handleChange}
          type="text"
          className="w-full rounded border p-2"
          placeholder="npr. Informativna, portfolio, blog, webshop..."
          required
        />

        <label className="mb-2 mt-4 block">
          Imate li postojeću web stranicu?
        </label>
        <select
          name="hasWebsite"
          value={form.hasWebsite}
          onChange={handleChange}
          className="w-full rounded border p-2"
        >
          <option>Da</option>
          <option>Ne</option>
          <option>-</option>
        </select>
        {form.hasWebsite === "Da" && (
          <div className="mt-4">
            <label className="mb-2 block">
              Upišite URL postojeće web stranice
            </label>
            <input
              name="websiteDomain"
              value={form.websiteDomain}
              onChange={handleChange}
              type="text"
              className="w-full rounded border p-2"
              placeholder="npr. www.mojsajt.hr"
            />
          </div>
        )}

        <label className="mb-2 mt-4 block">
          Imate li primjer web stranice koja vam se sviđa?
        </label>
        <input
          name="primjerStranice"
          value={form.primjerStranice}
          onChange={handleChange}
          type="text"
          className="w-full rounded border p-2"
          placeholder="npr. www.primjerstranice.hr"
        />

        <label className="mb-2 mt-4 block">
          Treba li stranica biti višejezična?
        </label>
        <select
          name="isMultilingual"
          value={form.isMultilingual}
          onChange={handleChange}
          className="w-full rounded border p-2"
        >
          <option>Da</option>
          <option>Ne</option>
          <option>-</option>
        </select>

        {form.isMultilingual === "Da" && (
          <div className="mt-4">
            <label className="mb-2 block">Koje sve jezike</label>
            <input
              name="jezici"
              value={form.jezici}
              onChange={handleChange}
              type="text"
              className="w-full rounded border p-2"
              placeholder="npr. Engleski, njemački..."
            />
          </div>
        )}
      </div>

      {/* DIZAJN */}

      <div>
        <h2 className="mb-2 text-xl font-semibold">Dizajn</h2>

        <label className="mb-2 mt-4 block">Imate li gotov dizajn?</label>
        <textarea
          name="imamDizajn"
          value={form.imamDizajn}
          onChange={handleChange}
          className="w-full rounded border p-2"
          rows={3}
          placeholder="npr. Imam izrađen dizajn u Figma datoteci, ili imam PDF s dizajnom..."
        />
        <label className="mb-2 mt-4 block">
          Želite da vam mi izradimo dizajn?
        </label>
        <p className="text-sm">
          Možemo vam izraditi dizajn po uzoru na stranicu koja vam se sviđa, a
          tokom izrade možete predlagati izmjene.
        </p>
        <select
          name="zelimVasDizajn"
          value={form.zelimVasDizajn}
          onChange={handleChange}
          className="w-full rounded border p-2"
        >
          <option>Da</option>
          <option>Ne</option>
          <option>-</option>
        </select>
      </div>

      {/* CMS I SADRŽAJ */}
      <div>
        <h2 className="mb-2 text-xl font-semibold">
          Upravljanje sadržajem (CMS)
        </h2>

        <label className="mb-2 block">
          Želite li samostalno uređivati sadržaj web stranice (CMS)?
        </label>
        <select
          name="wantsCMS"
          value={form.wantsCMS}
          onChange={handleChange}
          className="w-full rounded border p-2"
        >
          <option>Da</option>
          <option>Ne</option>
          <option>-</option>
        </select>

        {form.wantsCMS === "Da" && (
          <div className="mt-4">
            <label className="mb-2 mt-4 block">
              Koje sadržaje želite sami uređivati?
            </label>
            <textarea
              name="editableContent"
              value={form.editableContent}
              onChange={handleChange}
              className="w-full rounded border p-2"
              rows={4}
              placeholder="npr. pisati blogove, dodavati proizvode..."
            />
          </div>
        )}
      </div>

      {/* WEBSHOP */}
      <div>
        <h2 className="mb-2 text-xl font-semibold">Webshop funkcionalnosti</h2>

        <label className="mb-2 block">Želite li webshop?</label>
        <select
          name="webShop"
          value={form.webShop}
          onChange={handleChange}
          className="w-full rounded border p-2"
        >
          <option>Da</option>
          <option>Ne</option>
          <option>-</option>
        </select>

        {form.webShop === "Da" && (
          <>
            <div className="mt-4">
              <label className="mb-2 mt-4 block">
                Želite li da se plaćanje vrši na web stranici ili da vam stigne
                upit na mail na koji vi šaljete ponudu?
              </label>
              <textarea
                name="payment"
                value={form.payment}
                onChange={handleChange}
                className="w-full rounded border p-2"
                rows={4}
                placeholder="npr. Želim da korisnici, nakon što dodaju proizvode u košaricu, zatraže ponudu kako bismo im mogli poslati personaliziranu cijenu i uvjete."
              />
            </div>
            <p>
              Ako je plaćanje direktno na web stranici, najčešće je potrebno
              imati upravljanje zalihama
            </p>
            <label className="mb-2 mt-4 block">
              Treba li upravljanje zalihama?{" "}
            </label>
            <select
              name="needsInventory"
              value={form.needsInventory}
              onChange={handleChange}
              className="w-full rounded border p-2"
            >
              <option>Da</option>
              <option>Ne</option>
              <option>-</option>
            </select>

            <label className="mb-2 mt-4 block">
              Želite li imati akcije, popuste, kupone?
            </label>
            <textarea
              name="akcijePopustiKuponi"
              value={form.akcijePopustiKuponi}
              onChange={handleChange}
              className="w-full rounded border p-2"
              rows={4}
              placeholder="npr. mogućnost stavljanja akcija na proizvode, kupone za popuste..."
            />
          </>
        )}
      </div>

      {/* OSTALO */}
      <div>
        <h2 className="mb-2 text-xl font-semibold">Ostalo</h2>

        <label className="mb-2 mt-4 block">Imate li što za nadodati?</label>
        <textarea
          name="ostalo"
          value={form.ostalo}
          onChange={handleChange}
          className="w-full rounded border p-2"
          rows={3}
          placeholder="npr. Trebam newsletter sustav..."
        />
      </div>

      {/* ZAVRŠNA PITANJA */}
      <div>
        <h2 className="mb-2 text-xl font-semibold">Završna pitanja</h2>

        <label className="mb-2 block">
          Koji buđet ste predvidjeli za izradu stranice?
        </label>
        <p className="text-sm">
          Ova informacija nam je važna kako bismo mogli predložiti rješenje koje
          realno odgovara vašim potrebama i mogućnostima.{" "}
        </p>
        <div className="relative">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 euro-symbol">
            €
          </span>
          <input
            name="budget"
            value={form.budget}
            onChange={handleChange}
            type="text"
            className="w-full rounded border p-2 pl-8" // pl-8 gives space for the €
            placeholder="npr. 300 - 600"
            required
          />
        </div>

        <label className="mb-2 mt-4 block">
          U kojem periodu očekujete da stranica bude gotova?
        </label>
        <input
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          type="text"
          className="w-full rounded border p-2"
          placeholder="npr. u roku 2 tjedna, 2 mjeseca..."
        />
      </div>

      {/* SUBMIT */}
      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-amber-300 text-black px-4 py-2 rounded hover:bg-amber-400 transition uppercase"
        >
          {loading ? "Slanje..." : "Pošalji upit"}
        </button>
      </div>
    </form>
  )
}
