import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/logo.png";
import Button from "../components/Button";

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
    <nav className="py-[42px]">
      <Container>
        <Flex className="items-center justify-between">
          <div>
            <img src={logo} />
          </div>
          <menu>
            <ul className="flex  gap-14 ">
              {menu.map((item, index) => (
                <li key={item.name}>
                  <a href={item.link} className="navItem">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </menu>
          <Flex className="gap-[17px]">
            <Button text={"log in"} />
            <Button text={"Sign up"} bgShow={false} />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
