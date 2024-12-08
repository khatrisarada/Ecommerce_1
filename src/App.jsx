import { userEffect, useState} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";



function App() {
  const [orderPopup, setOrderPopup] = useState
  (false)

  const handleOrderPopup = () => {
    setOrderPopup (!orderPopup)
  }


  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  }, [])
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-text duration-200">
        <Navbar handleOrderPopup= {handleOrderPopup}/>
        <Banner />
      </div>
    </>
  )
}

export default App
