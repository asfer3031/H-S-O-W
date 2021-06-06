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
      <motion.div className="catscont"
      transition={{ duration: 0.7 }}
      initial={{opacity:0}}
      animate={{opacity:1}}
      >
          <header className="header3">
              <h1>Cats</h1>
               <button className="btn1" onClick={()=>setmodalIsOpen(true)}><i class="fas fa-plus"></i>Add</button>
          
          </header>
           <Modal isOpen={modalIsOpen} style={
               {overlay:{backgroundColor:'grey'},
                content:{color:'grey',
                marginTop:20,
              },
              }}>
                  <button onClick={()=>setmodalIsOpen(false)} className="btn"><i class="fas fa-times-circle"></i></button>
                  <Uploadfilecats/>
                   </Modal>
  
       
        <ImageGridCats/>
        
        
        </motion.div>
    )
}

export default Cats
