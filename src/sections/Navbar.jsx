import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { NavLink } from "react-router";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

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
  const [navShow, setNavShow] = useState(false);
  const handleNav = () => {
    setNavShow(!navShow);
  };
  return (
    <nav className="py-[42px] relative z-50 px-2 MyXl:px-0">
      <Container>
        <Flex className="items-center justify-between">
          <div>
            <img src={logo} />
          </div>
          <div
            className="lg:hidden block text-3xl btnlinear"
            onClick={handleNav}
          >
            {navShow ? <ImCross /> : <FaBars />}
          </div>
          {navShow && (
            <menu className="flex gap-5 flex-col lg:hidden bg-[#16192A] border border-white absolute top-25 right-5 w-[80vw] py-4 px-4 rounded-2xl z-50">
              <ul>
                {menu.map((item, index) => (
                  <li key={item.name} className="mt-4 mb-4">
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive ? "navItem activeNavItem" : "navItem"
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                <Flex className="gap-[17px] lg:hidden flex-col">
                  <Button text={"log in"} className="text-center" />
                  <Button
                    text={"Sign up"}
                    className="text-center"
                    bgShow={false}
                  />
                </Flex>
              </ul>
            </menu>
          )}

          <menu className="hidden lg:block">
            <ul className="flex gap-14 ">
              {menu.map((item, index) => (
                <li key={item.name}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive ? "navItem activeNavItem" : "navItem"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </menu>
          <Flex className="gap-[17px] hidden lg:flex">
            <Button text={"log in"} />
            <Button text={"Sign up"} bgShow={false} />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
