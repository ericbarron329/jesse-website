import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <section className="bg-[#fbf5ed] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left: Heading + Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Lets Talk</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Whether you’re ready to start planning or just have a few
              questions, I’d love to hear from you.
            </p>

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
                <a
                  href="mailto:jessebarron00@gmail.com"
                  className="link link-hover"
                >
                  jessebarron00@gmail.com
                </a>
              </li>
              <li>
                <h3 className="font-semibold text-lg">⏰ Office Hours</h3>
                <p>Mon – Fri · 9:00 AM – 5:00 PM</p>
              </li>
            </ul>

            <div className="flex gap-4 mt-8 text-2xl">
              <a href="#" className="hover:text-blue-700">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-blue-700">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="#" className="hover:text-blue-700">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Right: Simple Contact Form */}
          <div className="bg-base-100 shadow-md rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
              <button className="btn btn-primary w-full">Send</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
