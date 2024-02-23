import { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Menu", path: "menu" },
    { link: "Gallery", path: "gallery" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center gap-4 bg-slate-800 lg:px-10 py-4 px-4 sticky top-0 z-30">
        <div id="logo" className="">
          <h1 className="lg:text-[35px] text-[26px] text-orange-500 font-bold uppercase">
            <Link
              to="home"
              spy={true}
              offset={-100}
              smooth={true}
              className="cursor-pointer"
            >
              Delicious bites
            </Link>
          </h1>
        </div>
        <ul className="lg:flex justify-center items-center gap-10 hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black"
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* mobile menu  */}

        <div
          className="flex justify-center items-center lg:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaXmark className="text-white text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-white text-2xl cursor-pointer" />
          )}
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full h-fit bg-slate-800 p-4 absolute top-[70px] left-0 `}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full ">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black w-full text-center"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
        <button className=" bg-green-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-black font-bold hidden lg:flex uppercase">
          Order Now
        </button>
      </nav>
    </>
  );
};

export default Header;
