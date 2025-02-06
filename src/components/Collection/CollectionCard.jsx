import React from "react";
import { Link } from "react-router";
import Flex from "../Flex";

const CollectionCard = ({ img, h2 }) => {
  return (
    <div className="bg-[#2E3150]">
      <img
        src={img}
        className="w-[330px] h-[330px] object-cover border border-[#2E3150]"
      />
      <Flex className="flex-col items-center">
        <h2 className="font-extrabold text-[22px] text-text_title">{h2}</h2>
        <Link className="text-[#BC61F3]">View Collection</Link>
      </Flex>
    </div>
  );
};

export default CollectionCard;
