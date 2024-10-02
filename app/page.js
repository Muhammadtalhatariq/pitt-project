'use client'
import React from 'react'
import Image from "next/image";
import Header from './components/Header/page'
import Hero from "./components/Home/page";
import About from "./components/About/page"
import Gallery from './components/Gallery/page'
import ChooseUs from "./components/ChooseUs/page"
import Video from './components/Video/page'
import ContactUs from './components/contactUs/page'
import Sponser from './components/Sponser/page'
import Footer from './components/Footer/page'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  React.useEffect(() => {
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
      <div>
        <Header />
        <div className="sm:mx-10 lg:mx-40">
          <Hero />
          <About />
          <Gallery />
          <ChooseUs />
        </div>
        <Video />
        <div className="sm:mx-10 lg:mx-40">
          <ContactUs />
          <Sponser />
        </div>
        <Footer />

      </div>

    </>

  );
}
