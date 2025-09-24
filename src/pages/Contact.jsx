import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("message", form.message);

        const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxHmi7LslzLEpyBat_-o-kTM5MsMVAD2JxTRgC5hpUebtkYNXYRYHU2HPg-PNZy5S5N6A/exec",
        {
            method: "POST",
            body: formData,
            mode: "no-cors",
        }
        );

        const result = await response.json();
        if (result.result === "success") {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        } else {
        setStatus("Something went wrong.");
        }
    } catch (err) {
        setStatus("Error connecting to server.");
    }
    };


  return (
    <div>
      <Navbar />

      <section className="bg-[#fbf5ed] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Heading + Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Talk</h2>
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

          {/* Right: Contact Form */}
          <div className="bg-base-100 shadow-md rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary bg-[#064c86] border-[#064c86] w-full"
              >
                Send
              </button>
              {status && <p className="text-sm mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
