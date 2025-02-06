import React from "react";

const BlogCard = ({ img, h6 }) => {
  return (
    <div className="bg-[#16192A]  border border-[#2E3150]">
      <img src={img} className="w-[330px] h-[330px]" />
      <div className="pl-[35px]">
        <h6 className="text-primary_text font-medium text-[19px] ">{h6}</h6>
        <p className="text-second_text font-extrabold text-[22px] w-[330px]">
          Best NFTs arts collections from best artists
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
