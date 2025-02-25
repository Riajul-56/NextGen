import React from "react";
import Flex from "../Flex";
import CollectionCard from "./CollectionCard";
import collection_1 from "../../assets/collection_1.png";
import collection_2 from "../../assets/collection_2.png";
import collection_3 from "../../assets/collection_3.png";
import collection_4 from "../../assets/collection_4.png";

const CollectionContainer = () => {
  return (
    <Flex className="gap-5 lg:flex-row lg:flex-nowrap  flex-col">
      <CollectionCard img={collection_1} h2={"Broken collection"} />
      <CollectionCard img={collection_2} h2={"Broken collection"} />
      <CollectionCard img={collection_3} h2={"Broken collection"} />
      <CollectionCard img={collection_4} h2={"Broken collection"} />
    </Flex>
  );
};

export default CollectionContainer;
