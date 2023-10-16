import React, { useState } from 'react';
import { links } from '../data';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-purple-200">
      <div className="align-element py-4 flex sm:py-8">
        <h2 className="text-3xl font-bold">
          Port<span className="text-purple-600">Folio</span>
        </h2>
        <div className="hidden px-40 sm:flex gap-x-7 justify-end items-center">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize font-normal text-xl hover:border-violet-900 hover:border-b-4 tracking-wide hover:text-purple-900 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
        <div className="sm:hidden cursor-pointer ml-auto" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
      {showMenu && (
        <div className="flex flex-col items-start sm:hidden ml-4">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize font-normal text-xl hover:border-violet-900 hover:border-b-4 tracking-wide hover:text-purple-900 duration-300">
                {text}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
