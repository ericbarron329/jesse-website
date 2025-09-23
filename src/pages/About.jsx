import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import AboutComponent from "../components/AboutComponent";

export default function About() {
  return (
    <div className="bg-[#fbf5ed] text-gray-900">
      <Navbar />
      <AboutComponent />
      <Footer />
    </div>
  );
}
