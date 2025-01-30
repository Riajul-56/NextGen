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
    <section className="relative z-40">
      <Container>
        <Flex className="flex-col items-center">
          <Title title={"Collect some NFTs"} className="text-center" />
        </Flex>
        <SliderComponent className="mt-15" settings={settings}>
          <div>
            <img src={nft_1} className="object-cover" />

            <div className="max-w-[90%] mx-auto bg-text_title p-6 rounded-4xl -translate-y-22">
              <Flex className="flex-col">
                <Flex className="justify-between font-extrabold text-[22px] text-primary_bg items-center">
                  <h4>Lighting Axe</h4>
                  <h5>0.36 eth</h5>
                </Flex>

                <Flex className="mb-6 mt-3 items-center gap-[10px]">
                  <img src={collect_1} />
                  <h6 className="text-xl font-medium text-primary_bg">
                    Loura chin
                  </h6>
                </Flex>
              </Flex>
              <Button
                text={"Buy it now"}
                className="w-full block text-center rounded-xl"
              />
            </div>
          </div>

          <div>
            <img src={nft_2} className="object-cover" />

            <div className="max-w-[90%] mx-auto bg-text_title p-6 rounded-4xl -translate-y-22">
              <Flex className="flex-col">
                <Flex className="justify-between font-extrabold text-[22px] text-primary_bg items-center">
                  <h4>Skeleton head</h4>
                  <h5>0.29 eth</h5>
                </Flex>

                <Flex className="mb-6 mt-3 items-center gap-[10px]">
                  <img src={collect_2} />
                  <h6 className="text-xl font-medium text-primary_bg">
                    Kelvin glan
                  </h6>
                </Flex>
              </Flex>
              <Button
                text={"Buy it now"}
                className="w-full block text-center rounded-xl"
              />
            </div>
          </div>

          <div>
            <img src={nft_3} className="object-cover" />
            <div className="max-w-[90%] mx-auto bg-text_title p-6 rounded-4xl -translate-y-22">
              <Flex className="flex-col">
                <Flex className="justify-between font-extrabold text-[22px] text-primary_bg items-center">
                  <h4>Hard breath</h4>
                  <h5>0.22 eth</h5>
                </Flex>

                <Flex className="mb-6 mt-3 items-center gap-[10px]">
                  <img src={collect_3} />
                  <h6 className="text-xl font-medium text-primary_bg">
                    Glam lee
                  </h6>
                </Flex>
              </Flex>
              <Button
                text={"Buy it now"}
                className="w-full block text-center rounded-xl"
              />
            </div>
          </div>
        </SliderComponent>
      </Container>
    </section>
  );
};

export default NFT;
