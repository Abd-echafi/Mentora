import Courses from "@/components/LnadingPage/Courses";
import Hero from "@/components/LnadingPage/Hero";
import Navbar from "@/components/LnadingPage/Navbar";
import Reviews from "@/components/LnadingPage/Reviews";
import Why from "@/components/LnadingPage/Why";
import Questions from "./../components/LnadingPage/Questions";
import Footer from "@/components/LnadingPage/Footer";
export default function LandingPageLayout() {
  return (
    <div className="bg-gray-50">
      <nav className="fixed top-0 left-0 w-full z-50 bg-background  border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </nav>

      <div className="pt-20">
        <Hero></Hero>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Courses></Courses>
        </div>
      </div>
      <Why></Why>
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reviews></Reviews>
          <Questions></Questions>
        </div>
      </div>
      <nav className=" w-full z-50 bg-background  border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </nav>
    </div>
  );
}
