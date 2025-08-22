import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Progress", path: "/progress" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#3c3f01] via-[#0f172a] to-[#1e3a8a] shadow-lg">
      <div className="max-w-8xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-[170px] h-[60px] object-cover"
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div
          className="md:hidden flex flex-col cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`block h-[3px] w-[25px] bg-white my-[4px] rounded transition-all ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-[25px] bg-white my-[4px] rounded transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-[25px] bg-white my-[4px] rounded transition-all ${
              isOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></span>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen
              ? "flex flex-col absolute top-[70px] left-0 w-full bg-[#1e293b] md:hidden items-center gap-6 py-6 shadow-md"
              : "hidden md:flex md:items-center md:gap-10"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={closeMenu}
                className="text-white text-lg font-semibold tracking-wide hover:text-orange-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Mobile CTA Button */}
          <li className="block md:hidden">
            <a
              href="https://wa.me/923270099635?text=Hello!%20I%20would%20like%20to%20discuss%20something."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-xl font-bold uppercase shadow-md hover:from-orange-400 hover:to-red-400 transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        {/* Desktop CTA Button */}
        <a
          href="https://wa.me/923270099635?text=Hello!%20I%20would%20like%20to%20discuss%20something."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl font-bold uppercase shadow-md hover:from-orange-400 hover:to-red-400 transition-all duration-300"
        >
          Let&apos;s Talk
        </a>
      </div>
    </nav>
  );
}
