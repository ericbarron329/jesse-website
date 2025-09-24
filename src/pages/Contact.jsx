import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf5ed]">
      <Navbar />

      <section className="flex-1 flex items-center">
        <div className="w-full px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Heading + Blurb */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Talk</h1>
            <p className="text-gray-700 mb-10 text-lg md:text-xl leading-relaxed">
              Whether you’re ready to start planning or just have a few questions,
              I’d love to hear from you.
            </p>

            {/* Contact Info */}
            <ul className="space-y-6 text-gray-800">
              <li>
                <h3 className="font-semibold text-lg">📍 Location</h3>
                <p>San Francisco, CA</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg">📞 Phone</h3>
                <a href="tel:9257194009" className="link link-hover">
                  (925) 719-4009
                </a>
              </li>
              <li>
                <h3 className="font-semibold text-lg">✉️ Email</h3>
                <a href="mailto:jessebarron00@gmail.com" className="link link-hover">
                  jessebarron00@gmail.com
                </a>
              </li>
              <li>
                <h3 className="font-semibold text-lg">⏰ Office Hours</h3>
                <p>Mon – Fri · 9:00 AM – 5:00 PM</p>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-5 mt-10 text-2xl">
              <a href="#" className="hover:text-blue-700" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-blue-700" aria-label="TikTok">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="#" className="hover:text-blue-700" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

            {/* Quick CTA buttons (optional) */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:jessebarron00@gmail.com?subject=Consultation%20Inquiry"
                className="inline-flex items-center justify-center rounded-md bg-[#064c86] px-6 py-3 text-white hover:bg-[#04355e] transition"
              >
                Email Me
              </a>
              <a
                href="tel:9257194009"
                className="inline-flex items-center justify-center rounded-md border border-[#064c86] px-6 py-3 text-[#064c86] hover:bg-[#064c8610] transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
