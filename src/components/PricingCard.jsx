import { useNavigate } from "react-router-dom";

export default function PricingCard({ highlight, title, price, features, link }) {

    const navigate = useNavigate();

  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        {/* Highlight Badge */}
        {highlight ? (
        <span className="badge badge-xs badge-warning">{highlight}</span>
        ) : (
        <span className="invisible">placeholder</span>
        )}

        {/* Title + Price */}
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <span className="text-xl">{price}</span>
        </div>

        {/* Features */}
        <ul className="mt-6 flex flex-col gap-2 text-sm">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={feature.included ? "text-gray-800" : "opacity-50 line-through"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 me-2 inline-block ${
                  feature.included ? "text-success" : "text-base-content/50"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature.label}
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="mt-auto">
          <button
            onClick={() => navigate(`/${link}`)}
            className="bg-[#064c86] text-white px-5 py-2 rounded-md hover:bg-[#04355e] transition text-sm font-medium btn-block"
            >
          More Info
        </button>
        </div>
      </div>
    </div>
  );
}