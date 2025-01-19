import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/logo.png";

let menu = [
  {
    name: Home,
    link: "/",
  },
  {
    name: Marketplace,
    link: "/Marketplace",
  },
  {
    name: Artist,
    link: "/Artist",
  },
  {
    name: Community,
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
            <ul className="flex text-white gap-14">
              {menu.map((item, index) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </menu>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
