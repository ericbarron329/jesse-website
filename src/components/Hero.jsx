import { motion } from "framer-motion";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: "easeOut" } 
    },
  };

  return (
    <section
      className="relative h-[95vh] overflowhidd flex items-center"
      style={{
        backgroundImage: "url('/iStock-hero.jpg')",
        backgroundSize: "cover",          
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Text */}
      <motion.div
  className="relative z-10 w-full flex justify-center md:justify-end px-6 md:pr-16"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.4 } },
  }}
>
  <div className="max-w-3xl text-white text-center md:text-right">
    <motion.h1
      className="text-[clamp(2rem,4vw,3.5rem)] font-serif mb-4 leading-tight"
      variants={fadeUp}
    >
      Jesse Barron <br /> Financial Planning
    </motion.h1>

    <motion.p
      className="text-[clamp(1rem,1.5vw,1.25rem)] mb-2"
      variants={fadeUp}
    >
      Helping Young Professionals Build Wealth
    </motion.p>

    <motion.p
      className="text-[clamp(1rem,1.5vw,1.25rem)] mb-6"
      variants={fadeUp}
    >
      Flat-Fee Financial Planning
    </motion.p>

    <motion.a
      href="#"
      className="bg-blue-900 text-white px-6 py-3 rounded-md shadow hover:bg-blue-800 text-[clamp(0.9rem,1vw,1.1rem)] inline-block"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1, ease: "easeOut" },
        },
      }}
    >
      Start Here
    </motion.a>
  </div>
</motion.div>

    </section>
  );
}
