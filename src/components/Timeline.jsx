"use client";
import { motion } from "framer-motion";
import stockimage from '/JesseAboutImage.JPG';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Timeline() {
  return (
    <section className="py-20 px-6 md:px-12 rounded-3xl my-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
        
        {/* Left side: Image / Portrait / Graphic */}
        <div className="flex justify-center items-center">
        <img
            src={stockimage}
            alt="Jesse Barron"
            className="rounded-2xl shadow-lg max-w-md md:max-w-lg w-full h-auto object-cover"
        />
        </div>


        {/* Right side: Timeline */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Jesse’s Journey</h2>
          <p className="text-gray-600 mb-8">
            A quick look at my career milestones and how I’ve grown to help young
            professionals build wealth with clarity.
          </p>

          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            
            {/* 2019 */}
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="timeline-middle">
                <div className="w-4 h-4 bg-[#064c86] rounded-full"></div>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2019</time>
                <div className="text-lg font-black">Marketing Manager</div>
                Grew financial social media audience to 1M+
              </div>
              <hr />
            </motion.li>

            {/* 2020 */}
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <hr />
              <div className="timeline-middle">
                <div className="w-4 h-4 bg-[#064c86] rounded-full"></div>
              </div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic">2020</time>
                <div className="text-lg font-black">Paraplanner</div>
                Katy Song Financial Planning
              </div>
              <hr />
            </motion.li>

            {/* 2022 */}
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <hr />
              <div className="timeline-middle">
                <div className="w-4 h-4 bg-[#064c86] rounded-full"></div>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2022</time>
                <div className="text-lg font-black">Earned CFP® Certification</div>
              </div>
              <hr />
            </motion.li>

            {/* Today */}
            <motion.li
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <hr />
              <div className="timeline-middle">
                <div className="w-4 h-4 bg-[#064c86] rounded-full"></div>
              </div>
              <div className="timeline-end md:mb-10">
                <time className="font-mono italic">Today</time>
                <div className="text-lg font-black">Founder</div>
                Helping young professionals build wealth with clarity
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}
