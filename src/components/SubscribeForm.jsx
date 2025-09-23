export default function SubscribeForm() {
  return (
    <div className="w-full md:w-72">
      <h3 className="text-lg font-semibold mb-3">
        Subscribe to get exclusive updates
      </h3>

      <form className="space-y-3">
        {/* First Name */}
        <input
          type="text"
          placeholder="First name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        />

        {/* Last Name */}
        <input
          type="text"
          placeholder="Last name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="e.g., email@example.com"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white px-4 py-2 rounded-md shadow hover:bg-blue-800 transition text-sm"
        >
          Join Our Mailing List
        </button>
      </form>
    </div>
  )
}
