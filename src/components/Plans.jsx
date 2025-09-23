function PlanCard({ number, title, children }) {
  return (
    <div className="bg-[#fdf9f4]/95 p-6 sm:p-8 relative rounded-lg shadow-lg w-full">
      {/* Circle Number */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow">
        <span className="text-lg font-semibold">{number}</span>
      </div>

      <h3 className="text-lg sm:text-xl font-medium mt-8 mb-4">{title}</h3>
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">{children}</p>

      <button className="bg-gray-800 text-white px-4 sm:px-5 py-2 rounded-md hover:bg-gray-700 transition text-sm sm:text-base">
        More Info
      </button>
    </div>
  )
}

export default function Plans() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center rounded-3xl overflow-hidden my-12"
      style={{
        backgroundImage: "url('/iStock-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PlanCard number="1" title="Basic Plan">
            The Basic Plan is designed for those who want clear, hands-on guidance to get their finances organized and moving in the right direction. Together, we set up the right accounts (checking, savings, brokerage, retirement), establish contributions, clean up current retirement and brokerage accounts, and build a balance sheet so everything can be seen in one place. We’ll also project estimated taxes, create a plan for managing debt, and review your current cash flow so you have a clear picture of where your money is going. The goal is to set everything up correctly from the start, so you can build a strong financial foundation with confidence.
          </PlanCard>

          <PlanCard number="2" title="Premier Plan">
            The Premier Plan is designed for those with more complex financial needs and includes everything in the Basic Plan plus a deeper level of analysis. This includes calculating how much you need to save each year to stay on track for retirement; evaluating home or rent affordability; planning around business or self-employment income; creating strategies for one or more rental properties; mapping out education funding for children, whether public or private college or even private high school; reviewing insurance to protect your income and assets; and covering estate planning basics such as wills, trusts, and beneficiaries.
          </PlanCard>
        </div>
      </div>
    </section>
  )
}
