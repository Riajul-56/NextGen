import React from "react";
import Flex from "./Flex";
import Button from "./Button";

const NFTCard = ({ img_1, h4, h5, img_2, customar_name }) => {
  return (
    <div>
      <img src={img_1} className="object-cover" />

      <div className="max-w-[90%] mx-auto bg-text_title p-6 rounded-4xl -translate-y-22">
        <Flex className="flex-col">
          <Flex className="justify-between font-extrabold text-[22px] text-primary_bg items-center">
            <h4>{h4}</h4>
            <h5>{h5}</h5>
          </Flex>

          <Flex className="mb-6 mt-3 items-center gap-[10px]">
            <img src={img_2} />
            <h6 className="text-xl font-medium text-primary_bg">
              {customar_name}
            </h6>
          </Flex>
        </Flex>
        <Button
          text={"Buy it now"}
          className="w-full block text-center rounded-xl"
        />
      </div>
    </div>
  );
};

export default NFTCard;
