import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import ICONS from "../assets/constants/icons";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className={`flex justify-between bg-white text-black py-4 fixed top-0 left-0 w-full z-50`}>
        <h3 className="hidden md:block ml-4 text-3xl font-serif">Fitness Tracker</h3>
        <div className="flex md:hidden">
          <ICONS.HAMBURGER
            className={`text-xl cursor-pointer mr-4 mt-1 ml-2 ${isOpen ? "hidden" : "block"}`}
            onClick={toggleDrawer}
          />
          <h3 className="text-1xl mt-1 ml-2">Fitness Tracker</h3>
        </div>
        <ul className="hidden md:flex">
        <ScrollLink to="home" smooth={true} duration={500}>
        <li className="mr-6 mt-1 text-md cursor-pointer font-serif relative">
  <Link
    to="/"
    smooth={true}
    duration={500}
    className="hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-lime-300 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out after:w-0"
  >
    Home
  </Link>
</li>
</ScrollLink>
          <li className="mr-6 mt-1 font-serif text-md cursor-pointer hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-lime-300 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out after:w-0"
>
            <ScrollLink to="contact-info" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
          <li className="mr-6 mt-1 text-md font-serif cursor-pointer hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-lime-300 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out after:w-0"
>
            <ScrollLink to="services" smooth={true} duration={500}>
              Services
            </ScrollLink>
          </li>
          <li className="mr-6 mt-1 text-md font-serif cursor-pointer  hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-lime-300 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out after:w-0"
>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="mr-6 mt-1 text-lg cursor-pointer font-serif   hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-lime-300 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out after:w-0"
>
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
        <div className="mr-6 ml-6 text-lg mt-1 font-serif">
          <Link to="/explore">
            Explore
          </Link>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleDrawer}
      >
        <div
          className={`fixed top-0 p-5 left-0 h-full w-64 bg-zinc-900 text-white text-black transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-between md:hidden">
            <h3 className="text-1xl font-serif">Fitness Tracker</h3>
            <ICONS.CLOSE
              className={`text-1xl mt-1 cursor-pointer ${isOpen ? "block" : "hidden"}`}
              onClick={toggleDrawer}
            />
          </div>
          <ul className="mt-10">
            <li className="mr-6 mt-1 text-lg cursor-pointer">
              <ScrollLink onClick={toggleDrawer} to="home" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li className="mr-6 mt-1 text-lg cursor-pointer">
              <ScrollLink onClick={toggleDrawer} to="contact-info" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </li>
            <li className="mr-6 mt-1 text-lg cursor-pointer">
              <ScrollLink onClick={toggleDrawer} to="services" smooth={true} duration={500}>
                Services
              </ScrollLink>
            </li>
            <li className="mr-6 mt-1 text-lg cursor-pointer">
              <ScrollLink onClick={toggleDrawer} to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
            </li>
            <li className="mr-6 mt-1 text-lg cursor-pointer">
              <Link onClick={toggleDrawer} to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        {location.pathname === '/explore' && <Outlet />}
        <div className={`${location.pathname==='/explore'?'hidden':'block'}`}>
        <Element name="home" id="home">
          <Home />
        </Element>
        <Element name="about" id="about">
          <About />
        </Element>

        <Element name="services" id="services">
          <Services />
        </Element>

        <Element name="contact-info" id="contact-info">
          <Contact />
        </Element>
        </div>
      </div>

    

      <div className="lg:px-40 px-4 py-20 bg-gray-100">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  ">
    {/* Fitness Tracker Info */}
    <div >
      <h3 className="text-xl md:text-3xl font-bold">Fitness Tracker</h3>
      <p className="text-zinc-600 mt-4  text-[15px]">
        Powered by
      </p>
      <p className="text-sm font-serif font-semibold">ReactApp</p>
    </div>

    {/* Contacts Section */}
    <div>
      <ul className="mt-4">
        <li className="text-md mb-4 font-semibold">Contacts</li>
        <li className=" text-[10px]">0312 232 2343</li>
        <li className="text-zinc-600 text-[10px] ">fitnessTracker.com</li>
        <li className="text-zinc-600 text-[10px]">fitness-tracker.pk</li>
      </ul>
    </div>

    {/* Privacy Policy */}
    <div>
      <ul className="mt-4"  >
        <li className="text-md mb-4 font-semibold">About</li>
        <li className="text-zinc-600 text-[10px]">Contact Us</li>
        <li className="text-zinc-600 text-[10px]">join Our Team</li>
        <li className="text-zinc-600 text-[10px]">Privacy</li>
      </ul>
    </div>

    {/* FAQ Section */}
    <div>
      <ul className="mt-4">
        <li className="text-md mb-4 font-semibold">FAQ</li>
        <li className="text-zinc-600 text-[10px]">Home</li>
        <li className="text-zinc-600 text-[10px]">Contact</li>
        <li className="text-zinc-600 text-[10px]">About</li>
      </ul>
    </div>

    {/* Explore Button and Social Icons */}
    <div>
      <button className="bg-[#262135] rounded-full text-white w-full py-3 hover:bg-gray-800 transition sm-mt-8">
        Explore
      </button>
      <div className="flex justify-evenly mt-4">
              <i className="text-2xl bg-lime-300 rounded-full p-4 cursor-pointer"><ICONS.MEAL /></i>
              <i className="text-2xl bg-lime-300 rounded-full p-4 cursor-pointer"><ICONS.CHART2 /></i>
              <i className="text-2xl bg-lime-300 rounded-full p-4 cursor-pointer"><ICONS.LOCATION /></i>
            </div>
      {/* <div className="flex justify-evenly mt-10">
        <div className="text-2xl bg-lime-300 rounded-full p-4 cursor-pointer">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 19.072A10 10 0 1119.07 5.1m-4.485 9.901a3 3 0 11-4.243-4.243" />
          </svg>
        </div>
        <div className="text-2xl bg-lime-300 rounded-full p-4 cursor-pointer">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17a4 4 0 100-8 4 4 0 000 8zm-2-7H6a2 2 0 00-2 2v3h5m8-6h-4a2 2 0 00-2 2v3h8m-3 4H8" />
          </svg>
        </div>
        <div className="text-2xl bg-lime-300 rounded-full p-4 cursor-pointer">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.414 17.414a2 2 0 01-2.828 0L5 7m6 2L7 7m0 0L3 5m4 0l-2 4m12-1a2 2 0 110-4m4 0h-4a2 2 0 100 4m0 0v6" />
          </svg>
        </div>
      </div> */}
    </div>
  </div>
</div>



    </div>
  );
};

export default MainLayout;