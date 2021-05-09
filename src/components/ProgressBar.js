import React, { useEffect } from 'react'
import UseStorage from '../components/UploadFile'
import "./all.css"
import { motion } from "framer-motion"


const ProgressBar = ({ file, setFile }) => {
    const { progress, url } = UseStorage(file);
  
    useEffect(() => {
      if (url) {
        setFile(null);
      }
    }, [url, setFile]);
  
    return (
      <motion.div className="Progress-Bar"
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
      ></motion.div>
    );
  } 
  
  export default ProgressBar;
