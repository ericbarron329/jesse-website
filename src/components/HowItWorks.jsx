import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 md:px-12 rounded-3xl my-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <motion.div
          className="space-y-8 text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">How It Works</h2>

          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-medium mb-2">Step 1: Book a Free Consultation</h3>
            <p className="text-base leading-relaxed">
              Schedule a complimentary 30-minute meeting where we’ll discuss your financial
              situation, goals, and expectations. After a quick assessment, I’ll recommend the best fit
              for you, either the Basic Plan or the Premier Plan.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-medium mb-2">Step 2: Intake Session</h3>
            <p className="text-base leading-relaxed">
              If you decide to move forward, I’ll send you a Calendly link to book your intake session
              along with a secure link to upload your financial documents. Before this meeting, I’ll
              review everything you’ve shared. During the 1-hour intake session, we’ll go through your
              documents together, confirm the details, and make sure nothing is missing before moving
              on to your final plan meeting.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-medium mb-2">Step 3: Plan Delivery</h3>
            <p className="text-base leading-relaxed">
              After the intake session, you’ll schedule your final meeting with me. I’ll spend 2-3 weeks
              preparing a customized document with my recommendations and clear, step-by-step action
              items. In this meeting, I’ll walk you through everything, ensuring it’s not just advice but an
              actionable roadmap you can start implementing right away.
            </p>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/iStock-1.jpg" // ✅ place your image in /public
            alt="How it works"
            className="w-full rounded-3xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
