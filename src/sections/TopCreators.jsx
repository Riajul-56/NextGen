import React from "react";
import Container from "../components/Container";
import Title from "../components/Title";
import Button from "../components/Button";
import Flex from "../components/Flex";
import TopCreatorContainer from "../components/top_creator/TopCreatorContainer";
import top_shade from "../assets/top_shade.png"

const TopCreators = () => {
  return (
    <section className="relative sm:mt-[200px] mt-[100px] px-2 MyXl:px-0">
      <img src={top_shade} alt="" className="absolute -top-[668px] right-0" />

      <Container>
        <Flex className="flex-col items-center">
          <Title title={"Top Creators"} className="text-center z-50" />
          <p className="mx-auto text-xl max-w-[678px] text-center my-6 font-normal leading-[183%] z-50">
            In commodo auctor eget congue sit. Ultrices eget pretium sit euismod
            mi id. Risus, aliquam odio posuere ac in in nisl sed augue.
          </p>
          <Button text={"View all creators"} className="self-center " />
        </Flex>
        <TopCreatorContainer />
      </Container>
    </section>
  );
};

export default TopCreators;
