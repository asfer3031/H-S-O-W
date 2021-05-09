import React from 'react'
import "../all.css"
import { motion } from "framer-motion"

function Cats() {
    return (
        <motion.div className="catscont"
        transition={{ duration: 0.7 }}
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
            <div className="picscont">
        


            </div>
            <button>click here</button>
        </motion.div>
    )
}

export default Cats
