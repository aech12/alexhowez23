import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function Header() {
  const { scrollYProgress } = useViewportScroll();
  const headerY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3],
    ['0%', '0%', '-100%'],
  );

  return (
    <motion.header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1em',
        y: headerY,
        transition: 'y 0.3s'
      }}
    >
      <div>Logo</div>
      <nav>
        <a href="/">Link1</a>
        <a href="/">Link2</a>
        <a href="/">Link3</a>
      </nav>
    </motion.header>
  );
}

export default Header