import React from "react";
import Flex from "./Flex";

const SocialMedia = ({ img }) => {
  return (
    <div className="w-[46px] h-[46px] bg-[#535488] border border-[#535488] rounded-full">
      <img src={img} />
    </div>
  );
};

export default SocialMedia;
