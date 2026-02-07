import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const MotionButton = motion(Button);
export default function Navbar() {
  const [active, setActive] = useState("Features");
  return (
    <div className="flex justify-between bg-white py-0.5 px-13 items-center">
      <div>
        <Link to="/">
          <motion.img
            src="/Logo_white.svg"
            className="block dark:hidden w-20 h-20"
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
      <motion.div className="space-x-4 hidden md:block">
        <motion.a
          href="#features"
          whileHover={{ scale: 1.05, y: -2 }}
          onClick={() => setActive("Features")}
          className={`inline-block relative py-1 px-3 rounded-2xl ${
            active === "Features" && "font-semibold text-primary"
          }`}
        >
          {active === "Features" && (
            <motion.span
              layoutId="activeBorder"
              className="absolute inset-0 rounded-2xl border-2 border-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            />
          )}
          Features
        </motion.a>
        <motion.a
          href="#courses"
          whileHover={{ scale: 1.05, y: -2 }}
          onClick={() => setActive("Courses")}
          className={`inline-block relative py-1 px-3 rounded-2xl ${
            active === "Courses" && "font-semibold text-primary"
          }`}
        >
          {active === "Courses" && (
            <motion.span
              layoutId="activeBorder"
              className="absolute inset-0 rounded-2xl border-2 border-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            />
          )}
          Courses
        </motion.a>
        <motion.a
          href="#reviews"
          whileHover={{ scale: 1.05, y: -2 }}
          onClick={() => setActive("Reviews")}
          className={`inline-block relative py-1 px-3 rounded-2xl ${
            active === "Reviews" && "font-semibold text-primary"
          }`}
        >
          Reviews
          {active === "Reviews" && (
            <motion.span
              layoutId="activeBorder"
              className="absolute inset-0 rounded-2xl border-2 border-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            />
          )}
        </motion.a>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05, y: -2 }}
          onClick={() => setActive("About")}
          className={`inline-block relative py-1 px-3 rounded-2xl ${
            active === "About" && "font-semibold text-primary"
          }`}
        >
          {active === "About" && (
            <motion.span
              layoutId="activeBorder"
              className="absolute inset-0 rounded-2xl border-2 border-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            />
          )}
          About
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -2 }}
          onClick={() => setActive("Contact")}
          className={`inline-block relative py-1 px-3 rounded-2xl ${
            active === "Contact" && "font-semibold text-primary"
          }`}
        >
          {active === "Contact" && (
            <motion.span
              layoutId="activeBorder"
              className="absolute inset-0 rounded-2xl border-2 border-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            />
          )}
          Contact
        </motion.a>
      </motion.div>
      <div className="hidden space-x-3 lg:block">
        <MotionButton
          className="py-4 px-8 bg-[#3D4CFF] text-background hover:bg-[#3D4CFF]/90"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95, y: 2 }}
          transition={{ type: "spring", stiffness: 1600, damping: 70 }}
        >
          Login
        </MotionButton>
        <MotionButton
          className="py-4 px-8 bg-white text-foreground border border-[#3D4CFF] hover:bg-gray-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95, y: 2 }}
          transition={{ type: "spring", stiffness: 1600, damping: 70 }}
        >
          Sign up
        </MotionButton>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-2">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Navigation Menu</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => setActive("Features")}
              className={`relative pl-6 ${
                active === "Features"
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {active === "Features" && (
                <span className="absolute left-2 w-2 h-2 rounded-full bg-primary" />
              )}
              Features
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setActive("Courses")}
              className={`relative pl-6 ${
                active === "Courses"
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {active === "Courses" && (
                <span className="absolute left-2 w-2 h-2 rounded-full bg-primary" />
              )}
              Courses
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setActive("Reviews")}
              className={`relative pl-6 ${
                active === "Reviews"
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {active === "Reviews" && (
                <span className="absolute left-2 w-2 h-2 rounded-full bg-primary" />
              )}
              Reviews
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setActive("About")}
              className={`relative pl-6 ${
                active === "About"
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {active === "About" && (
                <span className="absolute left-2 w-2 h-2 rounded-full bg-primary" />
              )}
              About
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setActive("Contact")}
              className={`relative pl-6 ${
                active === "Contact"
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {active === "Contact" && (
                <span className="absolute left-2 w-2 h-2 rounded-full bg-primary" />
              )}
              Contact
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
