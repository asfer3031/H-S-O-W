import React, {useState} from 'react'
import "../all.css"
import { motion } from "framer-motion"
import UploadFile from "../UploadFile"
import ImageGrid from "../ImageGrid"
import Modal from 'react-modal'
Modal.setAppElement('#root');

const Dogs = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
    
  return (
    <motion.div className="catscont"
      transition={{ duration: 0.7 }}
      initial={{opacity:0}}
      animate={{opacity:1}}
      >
          <header className="header3">
              <h1>Dogs</h1>
               <button className="btn1" onClick={()=>setmodalIsOpen(true)}><i class="fas fa-plus"></i>Add</button>
          
          </header>
           <Modal isOpen={modalIsOpen} style={
               {overlay:{backgroundColor:'grey'},
                content:{color:'grey',
                marginTop:20,
              },
              }}>
                  <button onClick={()=>setmodalIsOpen(false)} className="btn"><i class="fas fa-times-circle"></i></button>
                  <UploadFile/>
                   </Modal>
  
       
        <ImageGrid/>
        
        
        </motion.div>
  )
}

export default Dogs





