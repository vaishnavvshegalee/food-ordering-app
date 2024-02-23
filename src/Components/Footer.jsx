import twitter from "../assets/icons/twitter.svg";
import insta from "../assets/icons/insta.svg";
import fb from "../assets/icons/fb.svg";
import yt from "../assets/icons/yt.svg";
import toparrow from "../assets/icons/toparrow.svg";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center px-10 lg:px-20 py-10 lg:py-10 flex-col gap-6 bg-slate-800 w-full">
        <div
          id="social-icons"
          className="flex flex-row justify-start items-start gap-6 mt-3"
        >
          <div
            id="icon-box"
            className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer"
          >
            <img src={fb} alt="fb-icon" width={28} height={28} />
          </div>
          <div
            id="icon-box"
            className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer"
          >
            <img src={twitter} alt="fb-icon" width={28} height={28} />
          </div>
          <div
            id="icon-box"
            className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer"
          >
            <img src={insta} alt="fb-icon" width={28} height={28} />
          </div>
          <div
            id="icon-box"
            className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer"
          >
            <img src={yt} alt="fb-icon" width={28} height={28} />
          </div>
        </div>
        <ul className="flex justify-center items-start lg:items-center text-white text-md lg:text-lg mt-3 lg:gap-10 gap-4">
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Menu</li>
          <li className="hover:text-orange-500 cursor-pointer">Gallery</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>
      </footer>

      {/* top arrow btn  */}

      <div className="w-full bg-black p-4 flex flex-col justify-center items-center text-white font-semibold">
        <h1 className="text-center">
          &copy; Copyright 2024, Designed and Developed by <br />{" "}
          <span className="text-green-400">Vaishnav Shegale,</span> All Rights
          Reserved
        </h1>
        <div
          id="icon-box"
          className="bg-green-500 p-2 rounded-full hover:bg-orange-500 cursor-pointer fixed bottom-4 right-2 lg:bottom-10 lg:right-10"
        >
          <Link to="home" spy={true} offset={-100} smooth={true}>
            <img src={toparrow} alt="fb-icon" width={28} height={28} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
