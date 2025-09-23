import { useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react"; // icons for checklist

// ----- PlanCard -----
function PlanCard({ number, title, price, features, highlight, link }) {
  const navigate = useNavigate();

  return (
    <div
      className={`relative rounded-2xl shadow-lg w-full max-w-sm transition transform hover:scale-105 hover:shadow-xl 
      ${highlight ? "border-4 border-[#064c86] bg-white" : "bg-[#fdf9f4]/95"}`}
    >
      {/* Circle Number */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow font-semibold">
        {number}
      </div>

      {/* Highlight Badge */}
      {highlight && (
        <span className="absolute top-4 right-4 bg-[#064c86] text-white text-xs px-3 py-1 rounded-full">
          {highlight}
        </span>
      )}

      <div className="p-8 flex flex-col h-full">
        {/* Title + Price */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {price && (
          <p className="text-2xl font-bold text-[#064c86] mb-4">{price}</p>
        )}

        {/* Features Checklist */}
        <ul className="flex-1 space-y-2 mb-6">
          {features.map((f, idx) => (
            <li key={idx} className="flex items-center text-gray-700 text-sm">
              {f.included ? (
                <Check className="w-4 h-4 text-green-600 mr-2" />
              ) : (
                <X className="w-4 h-4 text-red-500 mr-2" />
              )}
              {f.label}
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={() => navigate(`/${link}`)}
          className="bg-[#064c86] text-white px-5 py-2 rounded-md hover:bg-[#04355e] transition text-sm font-medium"
        >
          More Info
        </button>
      </div>
    </div>
  );
}

// ----- Plans Section -----
export default function Plans() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden my-12"
      style={{
        backgroundImage: "url('/iStock-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Left half only */}
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-12">
        {/* Row of cards */}
        <div className="flex flex-col md:flex-row gap-6">
          <PlanCard
            number="1"
            title="Basic Plan"
            price="$400"
            link="basic"
            features={[
              { label: "Account setup & cleanup", included: true },
              { label: "Retirement & Brokerage Review", included: true },
              { label: "Tax projections", included: true },
              { label: "Debt Management", included: true },
              { label: "Cash Flow Review", included: true },
              { label: "Retirement Savings Tracking", included: false },
              { label: "Tax Strategies", included: false },
              { label: "Business & Rental Planning", included: false },
              { label: "Education Funding", included: false },
              { label: "Insurance Review", included: false },
              { label: "Estate Planning", included: false },
            ]}
          />

          <PlanCard
            number="2"
            title="Premier Plan"
            price="$900"
            link="premier"
            highlight="Most Popular"
            features={[
              { label: "Account setup & cleanup", included: true },
              { label: "Retirement & Brokerage Review", included: true },
              { label: "Tax projections", included: true },
              { label: "Debt Management", included: true },
              { label: "Cash Flow Review", included: true },
              { label: "Retirement Savings Tracking", included: true },
              { label: "Tax Strategies", included: true },
              { label: "Business & Rental Planning", included: true },
              { label: "Education Funding", included: true },
              { label: "Insurance Review", included: true },
              { label: "Estate Planning", included: true },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
