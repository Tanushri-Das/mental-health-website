import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  const handleScroll = () => {
    const sections = ["home", "services", "about", "pricing", "testimonial"];
    const scrollPosition = window.scrollY + 100;
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition + height) {
          setActive(section);
        }
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const navItems = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("home");
          }}
          href="#home"
          className={`text-white ${active === "home" ? "isActive" : ""}`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("services");
          }}
          href="#services"
          className={`text-white ${active === "services" ? "isActive" : ""}`}
        >
          Services
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("about");
          }}
          href="#about"
          className={`text-white ${active === "about" ? "isActive" : ""}`}
        >
          About Us
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("pricing");
          }}
          href="#pricing"
          className={`text-white ${active === "pricing" ? "isActive" : ""}`}
        >
          Pricing
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("testimonial");
          }}
          href="#testimonial"
          className={`text-white ${active === "testimonial" ? "isActive" : ""}`}
        >
          Testimonial
        </motion.a>
      </li>
    </ul>
  );
  return (
    <div className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo */}
        <div>
          <a href="/">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        {/* nav items */}
        <div className="hidden md:flex grow justify-center">
          <nav>{navItems}</nav>
        </div>
        {/* button */}
        <div>
          <button className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("contact");
              }}
              className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
            >
              Contact Us
            </a>
          </button>
        </div>
        {/* hamburger menu */}
        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : ""
            }`}
          >
            <HiOutlineMenuAlt1 className="size-6" />
          </button>
        </div>
      </div>
      {/* mobile nav items */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
          <ul className="flex flex-col p-4 space-y-3">
            {navItems}
            <li className="ps-4 pb-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu();
                  handleScrollTo("contact");
                }}
                className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded inline-block"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
