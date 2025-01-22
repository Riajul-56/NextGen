import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/logo.png";

let menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Marketplace",
    link: "/Marketplace",
  },
  {
    name: "Artist",
    link: "/Artist",
  },
  {
    name: "Community",
    link: "/Community",
  },
];

const Navbar = () => {
  return (
    <nav>
      <Container>
        <Flex className="items-center justify-between">
          <div>
            <img src={logo} />
          </div>
          <menu>
            <ul className="flex  gap-14 ">
              {menu.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="font-mon text-xl font-medium text-[#F0F0F0] hover:text-primaryText transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </menu>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
