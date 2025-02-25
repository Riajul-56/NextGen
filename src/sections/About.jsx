import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import aboutImg from "../assets/about.png";
import Button from "../components/Button";
import aboutshade from "../assets/about_shade.png";

const About = () => {
  return (
    <section className="lg:mt-[200px] mt-[100px] mb-[200px] relative px-2 MyXl:px-0">
      <img src={aboutshade} className="absolute top-[500px] left-0" />
      <Container>
        <Flex className="gap-[49px] items-center flex-col lg:flex-row">
          <div className="z-50">
            <img src={aboutImg} />
          </div>

          <div className="xl:max-w-[680px] lg:max-w-[50%]">
            <h2 className="font-black xl:text-[56px] text-4xl text-center lg:text-left leading-[121%] text-text_title">
              Subscribe And get Latest news update about NFTs.
            </h2>
            <p className="text-lg font-normal leading-[183%] mt-[35px] mb-15 text-center lg:text-left">
              In commodo auctor eget congue sit. Ultrices eget pretium sit
              euilgod mi id. Risus, aliquam odio posuere ac in in nisl sed
              augue. Porta aenean egestas malesuada in pulvinar enim viverra.
            </p>
            <form className="relative ">
              <input
                type="email"
                placeholder="Write your email here "
                className="w-full bg-[#16192A] py-[35px] pl-10 outline-none border-[#2E3150] border rounded-lg"
              />
              <Button
                text={"Subscribe"}
                className="absolute sm:right-2 right-[90px] sm:top-[50%] top-40 -translate-y-1/2 "
              />
            </form>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
