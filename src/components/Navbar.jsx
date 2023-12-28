import Link from "next/link";
import React from "react";
const navLinks = [
  {
    path: "/",
    title: "Home",
  },
];

const Navbar = () => {
  return (
    <nav className="md:first-letter:flex items-center justify-between container mx-auto">
      <h1 className="text-3xl font-semibold text-blue-700">Munchies</h1>
      <ul className="md:flex items-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2 text-xl  text-blue-600" key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
