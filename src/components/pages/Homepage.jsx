import React from "react"
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Nav from "../Nav";
import Specials from "../Specials";

const Homepage = (props) => {
  return (
    <>
      <Nav />
      <HeroSection />
      <Specials />
      <Footer />
    </>
  )
};

export default Homepage;