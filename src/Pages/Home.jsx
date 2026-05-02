import React from "react";
import Hero from "../Components/Hero";
import FeaturedSection from "../Components/featuredSection";
import Banner from "../Components/Banner";
import Testimonial from "../Components/Testimonial";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default Home;
