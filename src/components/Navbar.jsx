import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "md:hidden absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] text-4xl"
        }
      >
        <ul>
          <li className="py-6">
            <Link to="home" smooth={true} duration={500} onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="py-6">
            <Link to="about" smooth={true} duration={500} onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="py-6">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              Skills
            </Link>
          </li>
          <li className="py-6">
            <Link to="work" smooth={true} duration={500} onClick={handleClick}>
              Work
            </Link>
          </li>
          <li className="py-6">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden fixed top-[35%] left-0 lg:flex flex-col">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/mayank-joshi-9964a51b8/"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedln <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/mayank1305j"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto:mayank1305.joshi@gmaill.com?"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="https://drive.google.com/file/d/1HZiUs2wKOWcXbRiAwgHLYMxSpJN3k9wg/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
