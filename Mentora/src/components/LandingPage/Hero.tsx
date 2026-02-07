import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Counter } from "@/utils/Counter";
const MotionButton = motion(Button);

export default function Hero() {
  return (
    <div className="min-h-screen  bg-[#EAEFFA] scroll-mt-20" id="features">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-35 max-w-7xl mx-auto h-full items-center px-6">
        <div className="flex flex-col items-center">
          <motion.h1
            className="font-semibold md:text-6xl md:leading-[1.4] leading-[1.2] xl:text-left text-center text-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Learn{" "}
            <span className="relative inline-block">
              Smarter
              <motion.img
                src="/underline_Vector.svg"
                alt=""
                className="absolute md:-bottom-3 md:left-6 md:w-45 md:-mb-2 w-55 -bottom-6.5 -left-3"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                style={{ transformOrigin: "left" }}
              />
            </span>{" "}
            with <br /> Your Personal <br className="hidden xl:block" /> Mentor
          </motion.h1>
          <p className="text-2xl mt-5 text-black/50 text-center md:text-left">
            Join a learning experience built around mentorship, clarity, and
            results.
          </p>
          <div className=" mt-10 ">
            <div className="flex flex-col justify-around sm:justify-start md:flex-row gap-4 md:gap-6 lg:gap-8 items-center">
              <MotionButton
                className="py-7 sm:px-8 md:py-8 md:px-14 w-70 bg-[#3D4CFF] text-background hover:bg-[#3D4CFF]/90 md:text-xl text-md"
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 0,
                  ease: "easeInOut",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
              >
                Start Learning
              </MotionButton>
              <MotionButton
                className="py-7 px-8 md:py-8 md:px-14 w-70 bg-[#EAEFFA] text-foreground border border-[#3D4CFF] hover:bg-gray-300 text-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95, y: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Become a Mentor
              </MotionButton>
            </div>
            <div
              className="
                grid grid-cols-1 gap-8
                justify-center
                md:flex md:justify-start md:gap-20
                mt-8 md:mt-18
                mb-10 sm:mb-0
              "
            >
              <div className="text-center">
                <p className="font-semibold md:text-6xl text-4xl">
                  <Counter to={10} suffix="M" />
                </p>
                <p className="mt-4 md:mt-8 text-black/40">HAPPY CUSTOMER</p>
              </div>

              <div className="text-center">
                <p className="font-semibold md:text-6xl text-4xl">
                  <Counter to={20} suffix="K" />
                </p>
                <p className="mt-4 md:mt-8 text-black/40">POPULAR COURSE</p>
              </div>

              <div className="text-center">
                <p className="font-semibold md:text-6xl text-4xl">
                  <Counter to={10} suffix="+" />
                </p>
                <p className="mt-4 md:mt-8 text-black/40">
                  YEARS <br /> EXPERIENCES
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex xl:justify-end xl:items-center relative ">
          <motion.img
            src="/tree.svg"
            alt=""
            className="max-w-full h-auto top-0 left-30 absolute"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
              x: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.img
            src="/person_img.svg"
            alt=""
            className="max-w-full h-auto"
            whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}
