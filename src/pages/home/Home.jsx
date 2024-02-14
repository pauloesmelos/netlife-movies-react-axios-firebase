import React from "react";
import { routesMovie } from "../../api/api.js";
import CategorySlider from "../../components/category-slider/CategorySlider";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const categorys = Object.entries(routesMovie);
  return (
    <main>
      <Hero />
      <div className="px-3">
        { categorys?.map((category, index) => (
          <CategorySlider
            key={index * Math.random()}
            title={category[0]}
            url={category[1]}
          />
        )) }
      </div>
      <Footer />
    </main>
  )
}

export default Home;