import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import brand_1 from "../assets/brand_1.png";
import brand_2 from "../assets/brand_2.png";
import brand_3 from "../assets/brand_3.png";
import brand_4 from "../assets/brand_4.png";
import brand_5 from "../assets/brand_5.png";
import banner_shade from "../assets/banner_shade.png";

const brandImages = [
  {
    src: brand_1,
    alt: "brand_1",
  },
  {
    src: brand_2,
    alt: "brand_2",
  },
  {
    src: brand_3,
    alt: "brand_3",
  },
  {
    src: brand_4,
    alt: "brand_4",
  },
  {
    src: brand_5,
    alt: "brand_5",
  },
];

const Brand = () => {
  return (
    <section className="pt-[178px] pb-[200px]">
      <img src={banner_shade} alt="" className="absolute -top-[200px] left-0" />
      <Container>
        <Flex
          className={`${brandImages.length > 5 && "flex-wrap"} gap-[113px]`}
        >
          {brandImages.map(({ src, alt }) => (
            <div key={alt}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Brand;
