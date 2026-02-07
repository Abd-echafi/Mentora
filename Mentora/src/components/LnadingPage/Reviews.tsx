import type { Review } from "@/types/review";

const reviewsData: Review[] = [
  {
    id: 1,
    module: "React",
    comment:
      "Amazing course! The instructor explains concepts very clearly and the projects are practical.",
    rating: 5,
    img: "/profile.svg",
    name: "Sarah Johnson",
    color: "#FF0000",
  },
  {
    id: 2,
    module: "TypeScript",
    comment:
      "Great introduction to TypeScript. Helped me understand types and interfaces much better.",
    rating: 4,
    img: "/profile.svg",
    name: "Mike Chen",
    color: "#000000",
  },
  {
    id: 3,
    module: "Web Design",
    comment:
      "Comprehensive course with excellent real-world examples. Highly recommended!",
    rating: 5,
    img: "/profile.svg",
    name: "Emily Rodriguez",
    color: "#3D4CFF",
  },
  {
    id: 4,
    module: "JavaScript",
    comment:
      "Perfect for beginners. Clear explanations and hands-on practice problems.",
    rating: 4,
    img: "/profile.svg",
    name: "Alex Kumar",
    color: "#F6FF00",
  },
  {
    id: 5,
    module: "Node.js",
    comment:
      "Learned so much about backend development. Structured course with good projects.",
    rating: 5,
    img: "/profile.svg",
    name: "Jessica Martinez",
    color: "#3D4CFF",
  },
];

import ReviewCard from "./ReviewCard";
import useMeasure from "react-use-measure";
import { useMotionValue } from "motion/react";
import { useEffect } from "react";
import { animate } from "motion";
import { motion } from "framer-motion";

export default function Reviews() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (!width) return;

    const controls = animate(xTranslation, [0, -width], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
    });

    return controls.stop;
  }, [width]);

  return (
    <div className="mb-20 relative overflow-hidden w-full" id="reviews">
      <h2 className="text-5xl font-semibold text-center">
        How Our Students <span className="text-primary">Succeed</span>
      </h2>

      <motion.div
        className=" gap-4 mt-20 hidden lg:flex"
        style={{ x: xTranslation }}
      >
        <div ref={ref} className="flex gap-4 shrink-0">
          {reviewsData.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>

        <div className="flex gap-4 shrink-0">
          {reviewsData.map((r) => (
            <ReviewCard key={`dup-${r.id}`} review={r} />
          ))}
        </div>
      </motion.div>
      <div className="lg:hidden">
        {reviewsData.map((r) => (
          <ReviewCard key={`dup-${r.id}`} review={r} />
        ))}
      </div>
    </div>
  );
}
