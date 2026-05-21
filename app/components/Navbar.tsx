"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent"
        >
          Dolla Grace ✨
        </Link>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-teal-400 font-medium transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden bg-gray-950 px-6 pb-4 flex flex-col gap-4 border-t border-gray-800">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-teal-400 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
