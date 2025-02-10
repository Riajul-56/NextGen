import React from "react";

const SocialMedia = ({ img }) => {
  return (
    <img
      src={img}
      className="p-[20px] bg-[rgb(83,84,136,.4)] rounded-full border border-[rgb(134,155,223,.32)] hover:bg-[rgb(134,155,223,.32)] "
    />
  );
};

export default SocialMedia;
