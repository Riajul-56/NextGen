import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/logo.png";
import SocialMedia from "../components/SocialMedia";
import fb from "../assets/facebook.png";
import insta from "../assets/insta.png";
import twiter from "../assets/twiter.png";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png"
import shadow from "../assets/footer_shadow.png";

let footerData = [
  {
    heading: "Marketplace",
    links: [
      {
        name: "NFTs",
        link: "#",
      },
      {
        name: "Art",
        link: "#",
      },
      {
        name: "Collectibles",
        link: "#",
      },
      {
        name: "Virtual world",
        link: "#",
      },
    ],
  },

  {
    heading: "Info",
    links: [
      {
        name: "Activity",
        link: "#",
      },
      {
        name: "Stats",
        link: "#",
      },
      {
        name: "Rankings",
        link: "#",
      },
    ],
  },

  {
    heading: "Company",
    links: [
      {
        name: "About",
        link: "#",
      },
      {
        name: "Support",
        link: "#",
      },
      {
        name: "Features",
        link: "#",
      },
      {
        name: "Top Creators",
        link: "#",
      },
    ],
  },

  {
    heading: "Resources",
    links: [
      {
        name: "Info",
        link: "#",
      },
      {
        name: "Affiliates",
        link: "#",
      },
      {
        name: "Associated",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative ">
      <img src={shadow} className="absolute -top-[700px] right-0" />
      <div className="border-b border-[#535488] pb-[100px] mb-9 ">
        <Container>
          <Flex className="gap-[196px]">
            <div className="w-[400px]">
              <img src={logo} />
              <p className="mt-[25px] mb-[25px] font-normal text-[19px]">
                Ultrices eget pretium sit euismod mi id posuere ac in in nisl
                sed augue. Posuere ac in in nisl sed augue.
              </p>
              <Flex className="gap-[13px]">
                <SocialMedia img={fb} />
                <SocialMedia img={insta} />
                <SocialMedia img={twiter} />
                <SocialMedia img={linkedin} />
                <SocialMedia img={youtube} />
              </Flex>
            </div>

            <Flex className="gap-[150px] z-50">
              {footerData.map((item) => (
                <div>
                  <h2 className="text-text_title font-black text-[22px] mb-6">
                    {item.heading}
                  </h2>
                  <ul>
                    {item.links.map((item2) => (
                      <li className="font-normal text-[19px] mb-4">
                        {item2.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Flex>
          </Flex>
        </Container>
      </div>
      <div className="text-center p-8">
        <p className="font-normal text-[19px]">
          © 2022 Copyright
          <span className="text-second.text font-bold text-[19px]">
            TemplatesJungle
          </span>
          . All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
