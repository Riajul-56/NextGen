import React from "react";
import nft_2 from "../assets/nft_2.png";
import Flex from "./Flex";
import Button from "./Button";
import collect_1 from "../assets/collect_1.png";

const NFTCard = () => {
  return (
    <div>
      <img src={nft_2} className="object-cover" />

      <div className="max-w-[90%] mx-auto bg-text_title p-6 rounded-4xl -translate-y-22">
        <Flex className="flex-col">
          <Flex className="justify-between font-extrabold text-[22px] text-primary_bg items-center">
            <h4>Lighting Axe</h4>
            <h5>0.36 eth</h5>
          </Flex>

          <Flex className="mb-6 mt-3 items-center gap-[10px]">
            <img src={collect_1} />
            <h6 className="text-xl font-medium text-primary_bg">Loura chin</h6>
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
