import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const TopicCard = ({title, description, href}) => {
  return (
    <div className='w-3/10 relative p-[4px] rounded-lg bg-gradient-to-r from-primary to-secondary mx-auto'>
        <motion.div
            className="bg-white h-[15vw] cursor-pointer  rounded-lg shadow-md p-4 flex justify-center items-center flex-col"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{borderTopRightRadius: "4vw", borderBottomLeftRadius: "4vw" }}
        >
            <h2 className="text-xl font-bold pt-4 pb-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">{title}</h2>
            <p className="text-gray-600 text-md font-semibold pb-4">{description}</p>
            
            <Link href={href}>
                <motion.button
                    initial={{  y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 , ease: "easeInOut"}}
                    className="p-2 px-8 font-semibold text-md text-white bg-gradient-to-r from-primary to-secondary rounded-lg"
                >
                    Start Quiz
                </motion.button>
            </Link>
        </motion.div>
    </div>
  )
}

export default TopicCard