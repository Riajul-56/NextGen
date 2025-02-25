import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Title from "../components/Title";
import Button from "../components/Button";
import BlogCard from "../components/BlogCard";
import blog_1 from "../assets/blog_1.png";
import blog_2 from "../assets/blog_2.png";
import blog_3 from "../assets/blog_3.png";
import blog_4 from "../assets/blog_4.png";

const Blog = () => {
  return (
    <section className="mb-[200px] px-2 MyXl:px-0 ">
      <Container>
        <Flex className="justify-between items-center mb-15 md:flex-row flex-col md:gap-0 gap-3">
          <Title title={"Our Latest Blog"} />
          <Button text={"Read our blogs"} />
        </Flex>

        <Flex className="gap-5 md:flex-row xl:flex-nowrap flex-wrap justify-center items-center  ">
          <BlogCard img={blog_1} h6={"Arts"} />

          <BlogCard img={blog_2} h6={"Design"} />

          <BlogCard img={blog_3} h6={"NFTs"} />

          <BlogCard img={blog_4} h6={"Arts"} />
        </Flex>
      </Container>
    </section>
  );
};

export default Blog;
