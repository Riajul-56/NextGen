import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Button from "../components/Button";
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="xl:py-[53px] relative z-20 px-2 MyXl:px-0">
      <Container>
        <Flex className="items-center flex-col lg:flex-row">
          <div className="max-w-[785px] order-1 lg:order-0">
            <h1 className="font-black tracking-wider text-white text-4xl md:text-7xl lg:text-5xl text-center lg:text-left xl:text-8xl banner_heading">
              Best NFTs Marketplace.
            </h1>
            <p className="text-xl mt-8 mb-[60px] leading-[183%] max-w-[765px] text-center lg:text-left">
              Ultrices eget pretium sit euixlod mi id. In commodo auctor eget
              congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
              Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
            <Flex className="gap-[17px] flex-col lg:flex-row">
              <Button
                text={"Get started"}
                className="text-center w-[80%] mx-auto lg:w-auto xl:mx-0"
              />
              <Button
                text={"Create NFTs"}
                bgShow={false}
                className="text-center w-[80%] mx-auto lg:w-auto xl:mx-0"
              />
            </Flex>
          </div>
          <Flex className="rounded-full max-w-[750px] max-h-[750px] overflow-hidden justify-center bg-[rgb(134,155,223,.08)] border-4 border-[#17152c] relative mb-8 xl:mb-0">
            <img src={bannerImg} />
            <div
              className="absolute w-full
            h-full bg-[rgba(18,12,40,0.26) z-0]"
            ></div>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
