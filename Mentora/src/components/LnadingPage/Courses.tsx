import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
const MotionButton = motion(Button);
const courses = [
  {
    title: "Math Support - Foundations",
    description:
      "Targeted exercises & mentor sessions to improve your core math skills and exam performance.",
    thumbnail: "thumbnail.svg",
    img: "/profile.svg",
    mentorName: "Abdo Filali",
    duration: "6 weeks",
    lessons: "12 lessons",
    progress: "45",
  },
  {
    title: "Math Support - Foundations",
    description:
      "Targeted exercises & mentor sessions to improve your core math skills and exam performance.",
    thumbnail: "thumbnail.svg",
    img: "/profile.svg",
    mentorName: "Abdo Filali",
    duration: "6 weeks",
    lessons: "12 lessons",
    progress: "45",
  },
  {
    title: "Math Support - Foundations",
    description:
      "Targeted exercises & mentor sessions to improve your core math skills and exam performance.",
    thumbnail: "thumbnail.svg",
    img: "/profile.svg",
    mentorName: "Abdo Filali",
    duration: "6 weeks",
    lessons: "12 lessons",
    progress: "45",
  },
];

export default function Courses() {
  return (
    <div className="my-10 scroll-mt-24" id="courses">
      <h2 className="md:text-6xl text-center text-4xl font-semibold ">
        Our <span className="text-[#3D4CFF]">Popular Support</span> Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-18 max-w-md md:max-w-7xl mx-auto">
        {courses.map((course, i) => {
          return (
            <motion.div
              key={i}
              className="md:shadow-md md:rounded-md border-2"
              whileHover={{ y: -20, transition: { duration: 0.2 } }}
            >
              <div>
                <img
                  src={course.thumbnail}
                  alt="thumbnail"
                  className="hidden md:block"
                />
              </div>
              <div className="md:mt-4 md:px-4 px-8 md:py-9 py-3">
                <div className="text-center">
                  <h3 className="font-semibold text-xl">{course.title}</h3>
                  <p className="md:mt-7 mt-4 md:line-clamp-3 text-sm text-gray-600 md:max-w-60 mx-auto line-champ-2 max-w-100">
                    {course.description}
                  </p>
                </div>
                <div className="flex flex-row mt-7 gap-4">
                  <img src={course.img} alt="profile img" />
                  <div>
                    <p className="font-semibold text-lg">{course.mentorName}</p>
                    <p className="text-gray-500 text-sm">Mentor - Math</p>
                  </div>
                </div>

                <div className="flex items-center xl:flex-row md:flex-col flex-row justify-between">
                  <div className="space-y-2 md:text-center">
                    <p className="text-gray-500 text-sm mt-5 ">
                      {course.duration} - {course.lessons}
                    </p>
                    <div className="flex flex-row items-center gap-3">
                      <div className="xl:w-24 lg:w-48 md:w-32 w-24 h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#3D4CFF] rounded-full"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>

                      <span className="text-sm text-gray-600 ">
                        {course.progress}%
                      </span>
                    </div>
                  </div>

                  <MotionButton
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: 2 }}
                    transition={{
                      type: "spring",
                      stiffness: 1600,
                      damping: 70,
                    }}
                    className="md:px-8 md:py-6 xl:mr-5 px-12 xl:mb-0 md:w-full mt-4 xl:w-auto w-auto"
                  >
                    Join Course
                  </MotionButton>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
