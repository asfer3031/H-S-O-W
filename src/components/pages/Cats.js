import React, {useState}from 'react'
import "../all.css"
import { motion } from "framer-motion"
import Uploadfilecats from '../Uploadfilecats'
import ImageGridCats from '../ImageGridCats'
import Modal from 'react-modal'
Modal.setAppElement('#root');

function Cats() {
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
                  <Uploadfilecats/>
              </Modal>
  
         <div className="picscont">
        <ImageGridCats/>
        </div>
        <button className="btn" onClick={()=>setmodalIsOpen(true)}><i class="fas fa-plus"></i></button>
        </motion.div>
    )
}

export default Cats
