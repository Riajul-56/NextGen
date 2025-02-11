import React from "react";
import Flex from "./Flex";

const BlogCard = ({ img, h6 }) => {
  return (
    <Flex className="flex-col bg-[#16192A]  border border-[#2E3150] items-center z-50">
      <img src={img} className="w-[330px] h-[330px]"/>
      <div>
        <h6 className="text-primary_text font-medium text-[19px] ">{h6}</h6>
        <p className="text-second_text font-extrabold text-[22px] w-[330px]">
          Best NFTs arts collections from best artists
        </p>
      </div>
    </Flex>
  );
};

export default BlogCard;
