export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-20">
      {/* Logo Column */}
      <aside>
        <img src="/Logo.png" alt="JBFP Logo" className="w-32 mb-4" />
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
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
        <button className="btn btn-primary bg-[#064c86] border-[#064c86] focus:outline-none focus:ring-2 focus:ring-[#064c86] join-item">
            Subscribe
        </button>

          </div>
        </fieldset>
      </form>
    </footer>
  );
}
