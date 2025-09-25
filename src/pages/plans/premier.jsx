import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import stockimage from '/iStock-3.jpg';

export default function Premier() {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
    <section
        className="hero min-h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${stockimage})` }}
    >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="hero-content text-center text-white relative z-10">
        <div className="max-w-2xl">
        <h1 className="text-5xl font-bold">Premier Plan</h1>
        <p className="py-6 text-lg">
            Build your financial foundation with confidence and clarity.
        </p>
        <button className="bg-[#064c86] hover:bg-[#04355e] text-white px-6 py-3 rounded-md shadow">
            Book Consultation
        </button>
        </div>
    </div>
    </section>


      {/* Stats bar */}
      <section className="bg-white py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around text-center">
          <div>
            <p className="text-3xl font-bold text-[#064c86]">4+</p>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#064c86]">100+</p>
            <p className="text-sm text-gray-600">Clients Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#064c86]">CFP®</p>
            <p className="text-sm text-gray-600">Certified Planner</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Steps */}
          <div>
            <h2 className="text-3xl font-semibold mb-8 text-[#064c86]">
              How It Works
            </h2>
            <ul className="steps steps-vertical w-full">
              <li className="step step-primary text-[#064c86]">Free Consultation</li>
              <li className="step step-primary text-[#064c86]">Intake & Documents</li>
              <li className="step step-primary text-[#064c86]">Custom Plan Delivery</li>
              <li className="step">Ongoing Support</li>
            </ul>
          </div>

          {/* Right: Paragraph */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#064c86]">
              The Premier Plan in Detail
            </h3>
            <p className="text-gray-700 leading-relaxed space-y-4">
              <span>
                The Premier Plan is designed for young professionals who want to
                build a solid financial foundation. After your free consultation,
                we’ll begin with a structured intake session where we gather your
                accounts, cash flow, and financial goals.
              </span>
              <br />
              <span>
                From there, I create a clear plan covering account setup, debt
                management, cash flow organization, and retirement/brokerage
                reviews. You’ll also receive tax projections so you can understand
                what’s ahead.
              </span>
              <br />
              <span>
                This isn’t generic advice — it’s a roadmap customized for you,
                giving you confidence and clarity in your money decisions.
              </span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
