import { motion } from "framer-motion";
export default function Why() {
  return (
    <div className="bg-[#3D4CFF] mt-20 px-5 relative pt-8 pb-5">
      <motion.img
        src="/Group 2.svg"
        alt=""
        className="absolute top-8 right-4  px-3 py-1 rounded w-55 hidden xl:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, 10, 0],
          x: [0, 0, 0],
        }}
        transition={{
          opacity: { duration: 0.6 },
          scale: { duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-5xl font-semibold text-center">
          Why <span className="text-background">Mentora</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 px-4 pt-15 pb-8 w-full">
          <motion.div
            className="w-full lg:w-auto lg:py-8 lg:px-10 rounded-xl px-10 py-4"
            whileHover={{ y: -2, backgroundColor: "#252E99" }}
          >
            <div className="flex flex-row gap-8 lg:block ">
              <img src="\icons\Icon1.svg" alt="icon" className="lg:w-12 w-10" />
              <div className="flex flex-col items-stretch">
                <p className="text-background text-xl line-clamp-2 max-w-55 mt-4 font-semibold">
                  Progress Tracking
                </p>
                <p className="text-background line-clamp-2 max-w-65 lg:mt-6 mt-2  w-40 text-sm">
                  See your gains and next steps.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-auto lg:py-8 lg:px-10 rounded-xl px-10 py-4"
            whileHover={{ y: -2, backgroundColor: "#252E99" }}
          >
            <div className="flex flex-row gap-8 lg:block ">
              <img
                src="\icons\pencil-minus.svg"
                alt="icon"
                className="lg:w-12 w-10"
              />
              <div className="flex flex-col items-stretch">
                <p className="text-background text-xl line-clamp-2 max-w-55 mt-4 font-semibold">
                  Progress Tracking
                </p>
                <p className="text-background line-clamp-2 max-w-65 lg:mt-6 mt-2  w-40 text-sm">
                  See your gains and next steps.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-auto lg:py-8 lg:px-10 rounded-xl px-10 py-4"
            whileHover={{ y: -2, backgroundColor: "#252E99" }}
          >
            <div className="flex flex-row gap-8 lg:block ">
              <img
                src="\icons\player-track-next.svg"
                alt="icon"
                className="lg:w-12 w-10"
              />
              <div className="flex flex-col items-stretch">
                <p className="text-background text-xl line-clamp-2 max-w-55 mt-4 font-semibold">
                  Progress Tracking
                </p>
                <p className="text-background line-clamp-2 max-w-65 lg:mt-6 mt-2  w-40 text-sm">
                  See your gains and next steps.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-auto lg:py-8 lg:px-10 rounded-xl px-10 py-4"
            whileHover={{ y: -2, backgroundColor: "#252E99" }}
          >
            <div className="flex flex-row gap-8 lg:block ">
              <img
                src="\icons\hexagons.svg"
                alt="icon"
                className="lg:w-12 w-10"
              />
              <div className="flex flex-col items-stretch">
                <p className="text-background text-xl line-clamp-2 max-w-55 mt-4 font-semibold">
                  Progress Tracking
                </p>
                <p className="text-background line-clamp-2 max-w-65 lg:mt-6 mt-2  w-40 text-sm">
                  See your gains and next steps.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
