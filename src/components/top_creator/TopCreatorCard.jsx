import React from "react";
import Button from "../Button";

const TopCreatorCard = ({ text, img }) => {
  return (
    <div className="min-w-92 bg-[#16192A] flex-col items-center pt-12  text-center border border-[#2E3150] z-50">
      <img src={img} className="w-35 h-35 object-cover mx-auto" />
      <h2 className="font-extrabold text-[22px] text-center pb-12">{text}</h2>
      <Button text={"View Details"} className="rounded-xl" />
    </div>
  );
};

export default TopCreatorCard;
