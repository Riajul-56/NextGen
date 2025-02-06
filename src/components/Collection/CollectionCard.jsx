import React from "react";
import collection_1 from "../../assets/collection_1.png"
import { Link } from "react-router";

const CollectionCard = () => {
  return (
    <div>
      <img src={collection_1} />
      <h2 className="font-extrabold text-[22px] text-text_title">
        Broken collection
      </h2>
      <Link>View Collection</Link>
    </div>
  );
};

export default CollectionCard;
