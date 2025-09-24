export default function PricingComparison() {
  return (
    <section className="bg-[#fbf5ed] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Compare Plans</h2>
        <p className="text-gray-700">
          See what’s included in each plan and find the best fit for you.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200 rounded-lg shadow-md">
          {/* Head */}
          <thead className="bg-base-200">
            <tr>
              <th className="text-left text-lg font-semibold">Features</th>
              <th className="text-center text-lg font-semibold">Basic Plan</th>
              <th className="text-center text-lg font-semibold">Premier Plan</th>
            </tr>
          </thead>
          <tbody>
            {/* Example rows */}
            <tr>
              <td className="font-medium">Account Setup</td>
              <td className="text-center text-success">✔</td>
              <td className="text-center text-success">✔</td>
            </tr>
            <tr>
              <td className="font-medium">Cash Flow & Debt Review</td>
              <td className="text-center text-success">✔</td>
              <td className="text-center text-success">✔</td>
            </tr>
            <tr>
              <td className="font-medium">Retirement Tracking</td>
              <td className="text-center opacity-40">✖</td>
              <td className="text-center text-success">✔</td>
            </tr>
            <tr>
              <td className="font-medium">Real Estate Strategies</td>
              <td className="text-center opacity-40">✖</td>
              <td className="text-center text-success">✔</td>
            </tr>
            <tr>
              <td className="font-medium">Education Funding</td>
              <td className="text-center opacity-40">✖</td>
              <td className="text-center text-success">✔</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
        <a href="#" className="btn btn-neutral px-8">
          Choose Basic - $400
        </a>
        <a href="#" className="btn btn-primary px-8 bg-[#064c86] border-[#064c86]">
          Choose Premier - $900
        </a>
      </div>
    </section>
  );
}
