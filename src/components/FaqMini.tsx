import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/components/ui/accordion"

export const FaqMini = () => {
  return (
    <section className="bg-gray-100 pb-40 pt-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto ">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl text-black mb-6">
            FAQ - <span className="text-[#ff9900]">Česta pitanja</span>
          </h2>
          <h3 className="text-sm md:text-lg text-gray-1800 mb-12 max-w-4xl mx-auto">
            Odgovori na najčešća pitanja o izradi web stranica.
          </h3>
        </div>

        <div className="flex flex-col items-center max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                Može li se moja stranica nadograđivati?
              </AccordionTrigger>
              <AccordionContent>
                Naravno, može rasti i nadograđivati se bez ograničenja.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Zašto plaćam održavanje?
              </AccordionTrigger>
              <AccordionContent>
                Cilj održavanja je da svu brigu oko stranice preuzmemo mi, a vi
                brinete o svom poslovanju. Osnovno održavanje iznosi 80
                <span className="euro-symbol"> € </span>
                godišnje i uključuje: hosting, registraciju i produžetak domene
                (u vrijednosti do 15<span className="euro-symbol"> €</span>),
                tehničko održavanje (ažuriranje, nadogradnje na novije verzije,
                osnovnu sigurnost, tehnički detalji), backup stranice,
                savjetovanje i podrška. Osnovno održavanje se može proširiti i
                sa implementacijom i održavanjem usluga trećih strana(cms, email
                servis, skalabilne baze podataka, analitika...).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                Koristite li gotove predloške za dizajn?
              </AccordionTrigger>
              <AccordionContent>
                U pravilu radimo vlastiti dizajn za svaku stranicu - vi dobijete
                live link preko kojeg možete pratiti napredak stranice i
                predlagati izmjene, ali možemo ponuditi i gotove predloške.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                Kako izrađujete stranice, koristite li WordPress?
              </AccordionTrigger>
              <AccordionContent>
                Ne koristimo WordPress niti druge gotove sustave za izradu
                stranica. Uglavnom koristimo programski jezik javascript.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">
                Utječe li broj stranica(podstranica) na cijenu?
              </AccordionTrigger>
              <AccordionContent>
                Cijena ovisi o kompleksnosti projekta, obujmu sadržaja i
                korištenju servisa trećih strana (npr. sustavi za naplatu ili
                integracije). Dodavanje jednostavnih stranica ima minimalan
                utjecaj na ukupnu cijenu.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
