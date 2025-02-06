import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";
import CollectionContainer from "../components/Collection/CollectionContainer";

const Collection = () => {
  return (
    <section className="mb-[200px]">
      <Container>
        <Flex className="flex-col items-center">
          <Title title={"NFTs collections"} className="text-text_title" />
          <p className="mt-6 text-center leading-[183%] mb-15">
            Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
            augue.
          </p>
        </Flex>
        <CollectionContainer />
      </Container>
    </section>
  );
};

export default Collection;
