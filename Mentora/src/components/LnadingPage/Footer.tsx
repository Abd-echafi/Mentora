import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div
      className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-20 py-5 bg-white pl-10 md:pl-0 lg:justify-items-center"
      id="contact"
    >
      <div>
        <div>
          <Link to="/">
            <motion.img
              src="/Logo_white.svg"
              className="block dark:hidden -ml-3 w-30 h-30"
              alt="logo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, y: 2 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
            <motion.img
              src="/Logo_dark.svg"
              className="hidden dark:block w-20 h-20"
              alt="logo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, y: 2 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </Link>
        </div>
        <p className="text-md max-w-60">
          Personalized academic support and one-on-one mentorship to help
          students learn smarter and improve their grades.
        </p>
      </div>
      <div className="mt-10">
        <h3 className="text-3xl font-semibold">Explore</h3>
        <ul className="mt-4">
          <motion.li
            className="mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2, color: "#3D4CFF" }}
            whileTap={{ scale: 0.95, y: 2 }}
          >
            <a href="#">Features</a>
          </motion.li>
          <motion.li
            className="mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2, color: "#3D4CFF" }}
            whileTap={{ scale: 0.95, y: 2 }}
          >
            <a href="#">Support Courses</a>
          </motion.li>
          <motion.li
            className="mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2, color: "#3D4CFF" }}
            whileTap={{ scale: 0.95, y: 2 }}
          >
            <a href="#">Reviews</a>
          </motion.li>
          <motion.li
            className="mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2, color: "#3D4CFF" }}
            whileTap={{ scale: 0.95, y: 2 }}
          >
            <a href="#">How it works</a>
          </motion.li>
          <motion.li
            className="mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2, color: "#3D4CFF" }}
            whileTap={{ scale: 0.95, y: 2 }}
          >
            <a href="#">Become a Mentor</a>
          </motion.li>
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-3xl font-semibold">Support</h3>
        <ul className="mt-4">
          <motion.li
            className="mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2, color: "#3D4CFF" }}
            whileTap={{ scale: 0.95, y: 2 }}
          >
            <a href="#">FAQ</a>
          </motion.li>
          <motion.li
            className="mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2, color: "#3D4CFF" }}
            whileTap={{ scale: 0.95, y: 2 }}
          >
            <a href="#">Help Center</a>
          </motion.li>
          <motion.li
            className="mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2, color: "#3D4CFF" }}
            whileTap={{ scale: 0.95, y: 2 }}
          >
            <a href="#">Student Support</a>
          </motion.li>
          <motion.li
            className="mt-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -2, color: "#3D4CFF" }}
            whileTap={{ scale: 0.95, y: 2 }}
          >
            <a href="#">support@mentora.com</a>
          </motion.li>
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="text-3xl font-semibold">Follow Us</h3>
        <p className="text-lg mt-4">🌐 📘 📸</p>
      </div>
    </div>
  );
}
