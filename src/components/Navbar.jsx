import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NAV_DATA = [
  {
    id: 1,
    name: "Home",
    path: "#home",
  },
  {
    id: 2,
    name: "Service",
    path: "#service",
  },
  {
    id: 3,
    name: "About",
    path: "#about",
  },
  {
    id: 5,
    name: "Testinomial",
    path: "#testinomial",
  },
  {
    id: 6,
    name: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(isSticky);
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`px-4 lg:px-14 py-4 ${
          isSticky
            ? "sticky top-0 right-0 left-0 borde-b bg-white trasnform-duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="#" className="text-3xl font-medium text-brandPrimary">
            pharma
          </a>
          <ul className="md:flex items-center hidden space-x-12">
            {NAV_DATA.map(({ name, path, id }) => (
              <a
                key={id}
                href={path}
                className="block text-base text-gray-900 text-xl font-medium hover:text-brandPrimary cursor-pointer"
              >
                {name}
              </a>
            ))}
            <Link
              className="block text-base text-white rounded hover:opacity-90 text-xl font-medium px-4 py-2 bg-brandPrimary cursor-pointer"
              to="/products"
            >
              Products
            </Link>
          </ul>
          <div className="md:hidden text-neutralDGray focus:outline-none focus:text-gray-500">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {NAV_DATA.map(({ name, path, id }) => (
            <a
              key={id}
              href={path}
              className="block text-base text-gray-900 font-medium text-white hover:text-black  transform-900 cursor-pointer"
            >
              {name}
            </a>
          ))}
          <Link
            className="block text-base text-gray-900 font-medium text-white hover:text-black  transform-900 cursor-pointer"
            to="/products"
          >
            Products
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
