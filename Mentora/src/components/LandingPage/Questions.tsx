import QuestionCard from "./QuestionCard";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
const MotionButton = motion(Button);
export default function Questions() {
  return (
    <div className="mb-20" id="about">
      <h2 className="text-5xl font-semibold text-center  mb-20">
        Frequently Asked <span className="text-primary">Questions</span>
      </h2>
      <div className="bg-gray-100/20">
        <QuestionCard></QuestionCard>
        <QuestionCard></QuestionCard>
        <QuestionCard></QuestionCard>
        <QuestionCard></QuestionCard>
        <motion.div
          className="mb-10 rounded-sm shadow-[0_0_8px_rgba(0,0,0,0.10)] px-7 py-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-semibold mb-2">Still have questions?</h2>
          <p className="text-sm text-gray-400 mb-4">
            Contact our student support team — fast replies, guided demos, and
            free trial booking.
          </p>
          <div className="bg-primary w-fit flex items-center gap-3 px-3 py-2 rounded-lg mb-4">
            <img src="/phone.svg" alt="" className="w-5" />
            <p className="text-background font-semibold">0541 99 52 34</p>
          </div>
          <p className="text-sm text-gray-400 mb-2">
            Or email us:{" "}
            <a
              href="mailto:support@mentora.example"
              className="text-primary underline"
            >
              support@mentora.example
            </a>
          </p>
          <p className="text-sm text-gray-400 mb-2">
            Office hours: Mon-Fri • 09:00 — 18:00
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center mt-40">
        <div className="bg-[#3D4CFF] rounded-md  flex justify-between max-w-250">
          <div className="pl-10 py-10">
            <h2 className="text-background text-5xl font-semibold mb-8 tracking-wide">
              Start Your Learning Journey <br />
              Today
            </h2>
            <p className="text-lg tracking-wide text-gray-400 mb-10">
              Join thousands of students improving their grades with personal
              mentors <br /> and structured support.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:space-x-3 pr-8 sm:pr-0">
              <MotionButton
                className="py-6 px-10 bg-white text-foreground border border-[#3D4CFF] hover:bg-gray-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 2 }}
                transition={{ type: "spring", stiffness: 1600, damping: 70 }}
              >
                <p className="text-sm md:text-lg">Start Learning</p>
              </MotionButton>
              <MotionButton
                className="py-6 px-10 bg-[#3D4CFF] text-background hover:bg-[#3D4CFF]/90 border border-black"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 2 }}
                transition={{ type: "spring", stiffness: 1600, damping: 70 }}
              >
                <p className="text-sm md:text-lg">Become a Mentor</p>
              </MotionButton>
            </div>
          </div>
          <img
            src="/Group 21.svg"
            alt=""
            className="hidden sm:block lg:w-80 lg:rotate-0 lg:mr-0 lg:mt-0
            -rotate-90 -mr-30 -mt-110 w-50 sm:-mt-50 sm:w-60"
          />
        </div>
      </div>
    </div>
  );
}
