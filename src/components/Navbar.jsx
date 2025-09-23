import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fbf5ed] shadow-sm">
      {/* Full-width flex container */}
      <div className="w-full flex items-center justify-between px-6 py-4">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src="/Logo.png"
              alt="Logo"
              className="h-12 cursor-pointer"
            />
          </a>
        </div>

        {/* Right: Nav + CTA */}
        <div className="flex items-center space-x-8">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/pricing" className="hover:text-blue-600">Plans & Pricing</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </nav>
            {/* CTA */}
            <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-[#064c86] text-white px-5 py-2 rounded-md shadow hover:bg-[#053763]"
            >
            Book Your Free Consultation
            </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 shadow-sm">
          <nav className="flex flex-col space-y-2 bg-[#064c86] text-gray-700 font-medium items-end">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/pricing" className="hover:text-blue-600">Plans & Pricing</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
            <a
              href="#"
              className="bg-[#2596be] text-white w-full text-center px-5 py-2  mt-2 hover:bg-blue-800"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
