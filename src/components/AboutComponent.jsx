import { motion } from "framer-motion";
import JesseAboutImage from '/JesseAboutImage.jpg'

export default function AboutComponent() {
  return (
    <section className="py-16 px-6 md:px-12 rounded-3xl my-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={JesseAboutImage}
            alt="Jesse Barron"
            className="w-full rounded-3xl object-cover shadow-md"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Jesse Barron</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am a CERTIFIED FINANCIAL PLANNER® professional with 4 years of experience specializing in
            financial modeling and analysis to help individuals and families make confident, informed decisions.
            I deliver precise, actionable insights and provide comprehensive planning services that integrate tax
            planning, investment strategy, retirement and education planning, cash flow management, and debt management.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            I began my career as a Marketing Manager for one of the largest financial social media personalities,
            creating content that helped millions learn more about personal finance while growing their audience
            to over a million followers across all platforms. I later pivoted into finance, working as a Paraplanner
            at Katy Song Financial Planning, before eventually pursuing and obtaining the CFP® Certification.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over the course of my career, I’ve guided over 100 high-net-worth individuals and families towards financial
            clarity by providing personalized strategies and practical advice designed to help them reach their goals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I earned my B.S. in Business Administration from the University of San Francisco, where I developed a strong
            analytical mindset and a disciplined approach as a Division 1 Student-Athlete. I also hold a FINRA Series 63
            license and enjoy continuously expanding my expertise to stay at the forefront of financial planning strategies
            and maintaining industry best practices. Outside of finance, I enjoy rooting for the San Francisco Giants and
            49ers, running, going to the gym, and traveling.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
