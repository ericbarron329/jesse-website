import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fbf5ed] shadow-sm">
      {/* Bar */}
      <div className="w-full flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img src="/Logo.png" alt="Logo" className="h-12" />
          </a>
        </div>

        {/* Right: Nav + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-gray-700 font-medium">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/pricing" className="hover:text-blue-600">Plans & Pricing</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#064c86] text-white px-5 py-2 rounded-md shadow hover:bg-[#053763]"
          >
            Book Your Free Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-gray-700"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile slide-over */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-50 transition ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />

        {/* Panel */}
        <nav
          className={`absolute top-0 right-0 h-full w-80 max-w-[85%] bg-[#fbf5ed] shadow-xl p-6 flex flex-col gap-2
                      transform transition-transform duration-300 ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                      }`}
        >
          <a
            href="/"
            onClick={close}
            className="block w-full px-3 py-3 rounded-md text-lg text-gray-900 hover:bg-black/5"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={close}
            className="block w-full px-3 py-3 rounded-md text-lg text-gray-900 hover:bg.black/5"
          >
            About
          </a>
          <a
            href="/pricing"
            onClick={close}
            className="block w-full px-3 py-3 rounded-md text-lg text-gray-900 hover:bg-black/5"
          >
            Plans & Pricing
          </a>
          <a
            href="/contact"
            onClick={close}
            className="block w-full px-3 py-3 rounded-md text-lg text-gray-900 hover:bg-black/5"
          >
            Contact
          </a>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="mt-4 bg-[#064c86] text-white text-center px-4 py-3 rounded-md font-medium hover:bg-[#053763]"
          >
            Book Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
