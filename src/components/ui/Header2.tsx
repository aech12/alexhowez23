import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
// import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Link } from "gatsby"
import logo from './logo.png'
import { motion } from 'framer-motion';

type LinkType = {
  text: string;
  href: string;
  animDelay: number;
};

const links: LinkType[] = [
  { text: "MyProjects", href: "#projects", animDelay: 0.25 },
  { text: "ContactMe", href: "#contactme", animDelay: 0.5 },
  { text: "AboutMe", href: "#aboutme", animDelay: 0.75 },
];

function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <StaticImage
          className="cursor-pointer"
          src="logo.png"
          alt="logo"
          width={45}
          height={45}
        />
      </div>
      <ul className="flex-none flex">
        <HeaderLinks />
      </ul>
    </header>
  );
}

const HeaderLinks = () => (
  <>
    {links.map((link: LinkType) => (
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: .5, delay: link.animDelay ?? 0 }}
      >

        <Link key={link.text} to={link.href}>
          <li key={link.text} className="">
            {/* <li key={link.text} className="px-2 hover:text-white hover:bg-black transition-all"> */}
            {link.text}
          </li>
        </Link>
      </motion.div>
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