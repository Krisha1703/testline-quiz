import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavbarMenus = ({ Menu, scrollToSection }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
        <li
          className='relative mx-4 text-white hover:text-transparent hover:font-bold bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-pointer lg:my-0 my-2'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={scrollToSection}
        >
          {Menu}
          <motion.span
            className="absolute left-0 -top-1 w-full h-[2px] bg-gradient-to-r from-primary to-secondary rounded-lg"
            style={{ transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          />
          <motion.span
            className="absolute right-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-primary to-secondary rounded-lg"
            style={{ transformOrigin: "right" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          />
        </li>
      
  );
};

export default NavbarMenus;