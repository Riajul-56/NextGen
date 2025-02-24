import React from "react";
import Flex from "./Flex";

const BlogCard = ({ img, h6 }) => {
  return (
    <Flex className="flex-col :p-[35px]  p-[30px]  bg-[#16192A]  border border-[#2E3150] z-50">
      <img
        src={img}
        className="md:w-[297px] sm:w-[200px] w-[297px] object-cover"
      />

      <h6 className="text-primary_text font-medium text-[19px] md:w-[297px] sm:w-[200px]  w-[297px]">
        {h6}
      </h6>
      <p className="text-second_text font-extrabold text-[22px] md:w-[297px] sm:w-[200px]  w-[297px]">
        Best NFTs arts collections from best artists
      </p>
    </Flex>
  );
};

export default BlogCard;
