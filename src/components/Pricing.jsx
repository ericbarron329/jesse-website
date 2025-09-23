import PricingCard from "./PricingCard";

export default function Pricing() {
  const allFeatures = [
    "Account setup & cleanup",
    "Retirement & brokerage review",
    "Tax projections",
    "Debt management",
    "Cash flow review",
    "Retirement savings tracking",
    "Tax strategies",
    "Business & rental planning",
    "Education funding",
    "Insurance review",
    "Estate planning",
  ];

  return (
    <section className="bg-[#fbf5ed] py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Plans & Pricing</h2>
        <p className="text-gray-700">
          At the end of the consultation, I’ll recommend the right plan and send you an email with next steps.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Basic Plan */}
        <PricingCard
          title="Basic Plan"
          price="$400"
          features={allFeatures.map((f, i) => ({
            label: f,
            included: i < 5, // first 5 included
          }))}
        />

        {/* Premier Plan */}
        <PricingCard
          highlight="Most Popular"
          title="Premier Plan"
          price="$900"
          features={allFeatures.map((f) => ({
            label: f,
            included: true, // everything included
          }))}
        />

        {/* Financial Update */}
        <PricingCard
          title="Financial Update"
          price="$250"
          features={[
            { label: "Plan refresh for returning clients", included: true },
            { label: "Progress review", included: true },
            { label: "Model updates", included: true },
            { label: "Adjustments for life changes", included: true },
          ]}
        />
      </div>
    </section>
  );
}
