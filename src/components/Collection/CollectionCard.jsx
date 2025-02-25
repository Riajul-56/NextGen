import React from "react";
import { Link } from "react-router";
import Flex from "../Flex";

const CollectionCard = ({ img, h2 }) => {
  return (
    <Flex className="bg-[#16192A] rounded-[300px] border border-[#2E3150] pb-[87px] flex-col">
      <img src={img} className="object-cover " />
      <Flex className="flex-col items-center">
        <h2 className="font-extrabold text-[22px] text-text_title">{h2}</h2>
        <Link className="text-[#BC61F3]">View Collection</Link>
      </Flex>
    </Flex>
  );
};

export default CollectionCard;
