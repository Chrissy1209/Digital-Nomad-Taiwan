"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Image from "next/image";

const navLinks = [
  {
    label: "首頁",
    href: "/",
    submenu: [
      { label: "關於我們", href: "#about" },
      { label: "活動", href: "#events" },
      { label: "發展路線圖", href: "#roadmap" },
      { label: "聯絡我們", href: "#contact" },
    ],
  },
  {
    label: "問答",
    href: "https://hahaharrywang.github.io/DNT_Website-V1.2/faq-section.html",
    external: true,
  },
  { label: "加入我們", href: "/join-us" },
  {
    label: "遊牧職缺版",
    href: "https://www.notion.so/DigitalNomadsTaiwan-Career-213dacf3cf4d80dc8ad5d58edff49af4?source=copy_link",
    external: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeSubMenuOpen, setIsHomeSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsHomeSubMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white/95 p-5 text-black fixed w-full z-50 top-0 shadow-lg backdrop-blur-md shadow-brand transition-all duration-300">
      <div className="container max-w-6xl sm:px-6 lg:px-8 mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Digital Nomads Taiwan Logo"
            width={150}
            height={32}
          />
        </Link>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={link.submenu ? "relative group" : ""}
            >
              {link.submenu ? (
                <>
                  <Link
                    href={link.href}
                    className="hover:text-[#FF7373] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                  <ul className="absolute left-[-18] hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48">
                    {link.submenu.map((subLink) => (
                      <li key={subLink.label}>
                        <Link
                          href={subLink.href}
                          className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#FF7373]"
                        >
                          {subLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="hover:text-[#FF7373] transition-colors duration-200"
                  {...(link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 p-4 transition-all duration-300 ease-in-out transform origin-top scale-y-100">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() => setIsHomeSubMenuOpen(!isHomeSubMenuOpen)}
                    className="block w-full text-left hover:text-[#FF7373] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                  {isHomeSubMenuOpen && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {link.submenu.map((subLink) => (
                        <li key={subLink.label}>
                          <Link
                            href={subLink.href}
                            className="block border-b border-gray-200 py-1 hover:text-[#FF7373] transition-colors duration-200"
                            onClick={toggleMenu}
                          >
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block hover:text-[#FF7373] transition-colors duration-200"
                  onClick={toggleMenu}
                  {...(link.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
