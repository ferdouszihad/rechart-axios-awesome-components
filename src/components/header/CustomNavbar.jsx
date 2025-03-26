import { useState } from "react";
import Logo from "./Logo";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="px-4 flex justify-between items-center py-3 border-b-2 border-base-300 bg-yellow-50 relative  z-50">
      <Logo></Logo>
      <div className="large-opt">
        <ul className="lg:flex hidden gap-4">
          {routes.map((route) => (
            <li key={route.path}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mobile-opt block lg:hidden">
        <BiMenu
          onClick={() => setIsOpen(true)}
          size={32}
          className={`cursor-pointer  ${isOpen && "hidden"}`}
        ></BiMenu>

        <RxCross1
          onClick={() => setIsOpen(false)}
          size={32}
          className={`cursor-pointer  ${!isOpen && "hidden"}`}
        />

        <ul
          className={`absolute z-40 duration-500 gap-4 left-0 bg-yellow-50 w-full  *:border-b *:py-2 px-2 ${
            isOpen ? "top-16" : "-top-[600px]"
          }`}
        >
          {routes.map((route) => (
            <li key={route.path}>
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
