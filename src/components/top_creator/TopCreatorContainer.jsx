import React from "react";
import Flex from "../Flex";
import TopCreatorCard from "./TopCreatorCard";
import top_1 from "../../assets/top_1.png";
import top_2 from "../../assets/top_2.png";
import top_3 from "../../assets/top_3.png";
import top_4 from "../../assets/top_4.png";

const TopCreatorContainer = () => {
  return (
    <Flex className="mt-16 lg:gap-5 gap-10 flex-wrap lg:flex-nowrap sm:flex-row justify-center items-center">
      <TopCreatorCard img={top_1} text={"Loura chin"} />
      <TopCreatorCard img={top_2} text={"Kelvin Glan"} />
      <TopCreatorCard img={top_3} text={"Glam Lee"} />
      <TopCreatorCard img={top_4} text={"Alameda"} />
    </Flex>
  );
};

export default TopCreatorContainer;
