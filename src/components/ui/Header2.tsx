import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
// import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Link } from "gatsby"
import logo from 'static/logo.png'

const links = [
  { text: "MyProjects", href: "#projects" },
  { text: "ContactMe", href: "#contactme" },
  { text: "AboutMe", href: "#aboutme" },
];

function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <StaticImage
          className="cursor-pointer"
          src={logo}
          alt="logo"
          width={45}
          height={45}
        />
      </div>
      <div className="flex-none">
        <HeaderLinks />
      </div>
    </header>
  );
}

const HeaderLinks = () => (
  <>
    {links.map((link, i) => (
      <a key={i} href={link.href}>
        <li key={link.text} className="px-2 hover:text-white hover:bg-black transition-all">
          {link.text}
        </li>
      </a>
    ))}
  </>
);

// const LeftSide = () => ()

const RightSide = () => (
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
)



export default Header