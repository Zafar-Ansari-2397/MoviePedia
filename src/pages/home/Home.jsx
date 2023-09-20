import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import "./style.scss";
import Popular from "./popular/Popular";
import TopRating from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRating />
    </div>
  );
};

export default Home;
