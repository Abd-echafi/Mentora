import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function QuestionCard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className="mb-10 rounded-sm shadow-[0_0_8px_rgba(0,0,0,0.10)]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-between   px-7 py-3  ">
        <div className="flex gap-4 items-center">
          <img src="/network-right.svg" alt="" className="w-10" />
          <div>
            <h2 className="text-2xl font-semibold">
              how Mentora sessions work?
            </h2>

            <p className="text-sm text-gray-400">
              One-on-one or small group sessions, tailored to your needs
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex"
        >
          <img
            src="/VectorDown.svg"
            alt=""
            className="w-3"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`overflow-hidden  px-8 pb-8 origin-top pt-5`}
            initial={{ opacity: 0, scaleY: 0.95 }}
            animate={{ opacity: 1, scaleY: "auto" }}
            exit={{ opacity: 0, scaleY: 0.95 }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <p>
              Sessions are scheduled by students and led by vetted mentors. Each
              session focuses on problem areas with explanation, guided
              practice, and next steps. You can book single sessions or
              recurring weekly meetings for sustained progress.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
