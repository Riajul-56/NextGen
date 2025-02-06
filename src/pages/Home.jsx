import React from "react";
import Banner from "../sections/Banner";
import Brand from "../sections/Brand";
import TopCreators from "../sections/TopCreators";
import NFT from "../sections/NFT";
import About from "../sections/About";
import Collection from "../sections/Collection";
import Blog from "../sections/Blog";

const Home = () => {
  return (
    <>
      <Banner />
      <Brand />
      <NFT/>
      <TopCreators />
      <About/>
      <Collection/>
      <Blog/>
    </>
  );
};

export default Home;
