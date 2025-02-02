import { motion } from "framer-motion"

const MainButton = ({text, onClick}) => {
  return (
    <motion.button
        initial={{y:0}}
        whileHover={{y: 10}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        onClick={onClick}
        className={`p-2 md:w-[10vw] w-1/2 my-4  font-semibold text-md text-white bg-gradient-to-r from-primary to-secondary rounded-lg`}
    >
        {text}
    </motion.button>
  )
}

export default MainButton