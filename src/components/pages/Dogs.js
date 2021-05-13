import React, {useState} from 'react'
import "../all.css"
import { motion } from "framer-motion"
import Upload from "../UploadFile"
import ImageGrid from "../ImageGrid"
import Modal from 'react-modal'
Modal.setAppElement('#root');

const Dogs = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
    
  return (
    <motion.div className="dogscont"
    transition={{ duration: 0.7 }}
    initial={{opacity:0}}
    animate={{opacity:1}}
    >
         <Modal isOpen={modalIsOpen} style={
             {overlay:{backgroundColor:'grey'},
              content:{color:'grey',
              marginTop:20,
            },
            }}>

              
                <button onClick={()=>setmodalIsOpen(false)} className="btn"><i class="fas fa-times-circle"></i></button>
                <Upload/>
            </Modal>

       <div className="picscont">
      {/* <ImageGrid/> */}
      </div>
      <button className="btn" onClick={()=>setmodalIsOpen(true)}><i class="fas fa-plus"></i></button>
      </motion.div>
  )
}

export default Dogs





