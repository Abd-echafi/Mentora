import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 1.2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [to]);

  return (
    <motion.span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}
