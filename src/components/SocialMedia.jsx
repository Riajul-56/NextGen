import React from "react";
import Flex from "./Flex";

const SocialMedia = ({ img }) => {
  return (
    <div>
      <img src={img} className="w-[46px] h-[46px]" />;
    </div>
  );
};

export default SocialMedia;
