import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner"
import Hero from "./Components/Hero/Hero";
import { Products } from "./Components/Products/Products";
import TopProduct from "./Components/TopProducts/TopProduct";
import { Subscribe } from "./Components/Subscribe/Subscribe";
import { Testimonials } from "./Components/Testimonials/Testimonials";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-text duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Products />
        <TopProduct handleOrderPopup={handleOrderPopup}/>
        <Banner />
        <Subscribe />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
