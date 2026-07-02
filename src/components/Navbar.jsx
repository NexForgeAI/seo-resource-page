import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#"
            className="text-3xl font-extrabold tracking-tight text-slate-900"
          >
            SEO Resource
          </a>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-12">

            <a
              href="#guide"
              className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300"
            >
              Guide
            </a>

            <a
              href="#faq"
              className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300"
            >
              FAQ
            </a>

            <a
              href="#about"
              className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300"
            >
              About
            </a>

          </div>

          {/* Desktop CTA */}

          <a
            href="https://mangools.com#a6a4118cc6aee085e5245f92c"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-7 py-4 rounded-2xl bg-slate-900 text-white text-lg font-semibold shadow-lg hover:bg-slate-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Try Mangools →
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? (
              <X size={32} />
            ) : (
              <Menu size={32} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden border-t border-slate-200 bg-white">

          <div className="flex flex-col px-6 py-6 space-y-6">

            <a
              href="#guide"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-slate-700"
            >
              Guide
            </a>

            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-slate-700"
            >
              FAQ
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-slate-700"
            >
              About
            </a>

            <a
              href="https://mangools.com#a6a4118cc6aee085e5245f92c"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-block text-center bg-slate-900 text-white py-4 rounded-2xl font-semibold"
            >
              Try Mangools →
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;