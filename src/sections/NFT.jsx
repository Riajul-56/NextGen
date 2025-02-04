import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";
import SliderComponent from "../components/Slider";
import nft_1 from "../assets/nft_1.png";
import nft_2 from "../assets/nft_2.png";
import nft_3 from "../assets/nft_3.png";
import Button from "../components/Button";
import collect_1 from "../assets/collect_1.png";
import collect_2 from "../assets/collect_2.png";
import collect_3 from "../assets/collect_3.png";
import NFTCard from "../components/NFTCard";

const NFT = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <Flex className="justify-center gap-x-1"> {dots} </Flex>
      </div>
    ),
    customPaging: () => (
      <div className="w-6 h-6 bg-[#595572] rounded-full"></div>
    ),
  };

  return (
    <section className="relative z-50">
      <Container>
        <Flex className="flex-col items-center">
          <Title title={"Collect some NFTs"} className="text-center" />
        </Flex>
        <SliderComponent className="mt-15" settings={settings}>
          <NFTCard
            img_1={nft_1}
            h4={"Lighting Axe"}
            h5={"0.36 eth"}
            customar_name={"Loura chin"}
            img_2={collect_1}
          />
          <NFTCard
            img_1={nft_2}
            h4={"Skeleton head"}
            h5={"0.29 eth"}
            customar_name={"Kelvin glan"}
            img_2={collect_2}
          />
          <NFTCard
            img_1={nft_3}
            h4={"Hard breath"}
            h5={"0.22 eth"}
            customar_name={"Glam lee"}
            img_2={collect_3}
          />
        </SliderComponent>
      </Container>
    </section>
  );
};

export default NFT;
