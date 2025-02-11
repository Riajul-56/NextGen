import React from "react";
import Flex from "./Flex";

const SocialMedia = ({ img }) => {
  return (
    <Flex className="w-[46px] h-[46px] bg-[rgb(83,84,136,.4)] rounded-full border border-[rgb(134,155,223,.32)] hover:bg-[rgb(134,155,223,.32)] items-center justify-center ">
      <img src={img} />
    </Flex>
  );
};

export default SocialMedia;
