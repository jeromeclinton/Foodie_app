import { useEffect } from "react";
import AppStore from "./components/AppStore/AppStore";
import Banner from "./components/banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white">
        <Navbar />
        <Hero />
        <Service />
        <Banner />
        <AppStore />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
