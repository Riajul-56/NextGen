import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/logo.png";
import SocialMedia from "../components/SocialMedia";
import fb from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twiter from "../assets/twiter.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Flex>
          <div>
            <img src={logo} />
            <p>
              Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
              augue. Posuere ac in in nisl sed augue.
            </p>
            <Flex>
              <SocialMedia img={fb} />
              <SocialMedia img={insta} />
              <SocialMedia img={twiter} />
              <SocialMedia img={youtube} />
            </Flex>
          </div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
