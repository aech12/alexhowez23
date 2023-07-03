import * as React from 'react';
import { motion } from 'framer-motion';

const headerVariants = {
  initial: { y: '-100vh' },
  animate: {
    y: 0,
    transition: { delay: 0.5, duration: 0.5, type: 'spring' },
  },
};

const linkVariants = {
  initial: { x: '100vw' },
  animate: {
    x: 0,
    transition: { delay: 0.2, duration: 0.5, type: 'spring' },
  },
};

const Header = () => {
  return (
    <motion.header
    className="header"
    variants={headerVariants}
    initial="initial"
    animate="animate"
  >
    <img src={'/hero_bg.jpg'} alt="Logo" className="logo" />
    <nav>
      <motion.a href="#link1" variants={linkVariants}>Link 1</motion.a>
      <motion.a href="#link2" variants={linkVariants}>Link 2</motion.a>
      <motion.a href="#link3" variants={linkVariants}>Link 3</motion.a>
    </nav>
  </motion.header>
  )
}

export default Header;