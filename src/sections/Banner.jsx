import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Button from "../components/Button";

const Banner = () => {
  return (
    <section>
      <Container>
        <Flex>
          <div className="max-w-[806px]">
            <h1 className="font-black text-white text-8xl banner_heading tracking-wider">
              Best NFTs Marketplace.
            </h1>
            <p className="text-xl mt-8 mb-[60px] leading-[183%] max-w-[765px]">
              Ultrices eget pretium sit euismod mi id. In commodo auctor eget
              congue sit. Risus, aliquam odio posuere ac in in nisl sed augue.
              Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
            <Flex className="gap-[17px]">
              <Button text={"Get started"} />
              <Button text={"Create NFTs"} bgShow={false} />
            </Flex>
          </div>
          <div>
            {/* <img src={bannerImg} /> */}
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
