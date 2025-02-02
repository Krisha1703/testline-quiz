import { motion } from "framer-motion";
import Image from "next/image";

const PowerupButton = ({onClick, coinsRequired, text, coins}) => {
  return (
    <motion.button  
        initial={{y:0}}
        whileHover={{y: -5}}
        transition={{duration: 0.3, ease: "easeInOut"}} 
        onClick={onClick} 
        className={` ${coins >= {coinsRequired} ? "opacity-50 cursor-not-allowed" : "opacity-100"} w-full p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg flex items-center justify-center`}
    >
        <span>{text}</span>
        <span className="flex items-center space-x-1 ml-1">
            <span>{coinsRequired}</span>
            <Image src="/coin.png" width={20} height={20} alt="coin" />
        </span>
    </motion.button>
  )
}

export default PowerupButton