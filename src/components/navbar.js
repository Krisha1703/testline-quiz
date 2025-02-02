import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  
  return (
    <header className="relative flex items-center justify-between w-full p-2 z-20">
      
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <Link href="/" legacyBehavior>
            <a>
                <Image src={"/logo.png"} width={150} height={150} quality={100} alt="testline-logo" />
            </a>
            </Link>
        </motion.div>

        <motion.button
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="p-2 px-8 font-bold text-md text-white bg-gradient-to-r from-primary to-secondary rounded-lg"
        >
            Sign Up
        </motion.button>
    </header>
  );
};

export default React.memo(Navbar);