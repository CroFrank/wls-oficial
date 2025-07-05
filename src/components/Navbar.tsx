import { useState } from "react"
import { Menu, X } from "lucide-react"
import { navLinks } from "../data/reusable"
import { HoverLink } from "./HoverLink"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 text-gray-100">
      <div className="max-w-[1560px] mx-auto px-4 md:px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img src="/logo.svg" width="100" height="100" />
        </a>
        {/* Hamburger */}
        <button
          className="lg:hidden "
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Links (desktop) */}
        <div className="hidden lg:flex items-center gap-6 font-medium">
          {navLinks.map((link) => (
            <HoverLink key={link.href} href={link.href}>
              {link.label}
            </HoverLink>
          ))}
          <a
            className="bg-amber-300 text-black px-4 py-2 rounded hover:bg-amber-400 transition uppercase"
            href="/upitnik"
          >
            Upitnik
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden px-4 pb-4 pt-2 space-y-3 text-center">
          {navLinks.map((link) => (
            <div>
              {" "}
              <HoverLink key={link.href} href={link.href}>
                {link.label}
              </HoverLink>
            </div>
          ))}
          <a
            className="bg-amber-300 text-black px-4 py-2 rounded hover:bg-amber-400 transition uppercase"
            href="/upitnik"
          >
            Upitnik
          </a>
        </div>
      )}
    </nav>
  )
}
