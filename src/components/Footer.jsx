import { useState } from "react";
import logo from '/Logo.png'

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", email);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxvGLWMQCDTWPFu7nDUj8i_Nv0Fm0LExemqrovqIl0lGRlOmxvhT4766f5L_16tXT_UQg/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.result === "success") {
        setStatus("✅ Thanks for subscribing!");
        setEmail("");
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (err) {
      setStatus("⚠️ Error connecting to server.");
    }
  };

  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-20">
      {/* Logo Column */}
      <aside>
        <img src={logo} alt="JBFP Logo" className="w-32 mb-4" />
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} JBFP. <br />
          All rights reserved.
        </p>
      </aside>

      {/* Links Section */}
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Basic Plan</a>
        <a className="link link-hover">Premier Plan</a>
      </nav>

      <nav>
        <h6 className="footer-title">Contact</h6>
        <a href="mailto:info@jbfp.com" className="link link-hover">info@jbfp.com</a>
        <a className="link link-hover">123-456-7890</a>
        <a className="link link-hover">San Francisco, CA</a>
      </nav>

      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className="flex space-x-4 text-xl mt-2">
          <a href="#" className="hover:text-blue-700"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" className="hover:text-blue-700"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="hover:text-blue-700"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </nav>

      {/* Newsletter Section */}
      <form onSubmit={handleSubmit}>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="input input-bordered join-item"
              required
            />
            <button
              type="submit"
              className="bg-[#064c86] text-white px-5 py-2  hover:bg-[#04355e] transition text-sm font-medium"
            >
              Subscribe
            </button>
          </div>
          {status && (
            <p className="text-sm mt-2 text-gray-700">{status}</p>
          )}
        </fieldset>
      </form>
    </footer>
  );
}
