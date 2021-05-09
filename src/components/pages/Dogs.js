import React, {useState} from 'react'
import "../all.css"
import { motion } from "framer-motion"
import Modal from "react-modal"
import Upload from "../UploadFile"
import Imagegrid from '../Imagegrid'
Modal.setAppElement('#root');

function Dogs() {
    const [modalIsopen, setmodalIsopen] = useState(false)
    return (
        <motion.div className="dogscont"
        transition={{ duration: 0.7 }}
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
           
            <Modal isOpen={modalIsopen} style={
             {overlay:{backgroundColor:'grey'},
              content:{color:'grey',
              marginTop:20,
            },
            } 
            }>
                <button onClick={()=>setmodalIsopen(false)} className="btn"><i class="fas fa-times-circle"></i></button>
                
              <Upload/>
            </Modal>
            
         <div className="picscont">
             <Imagegrid/>
         </div>
         <button className="btn" onClick={()=>setmodalIsopen(true)}><i class="fas fa-plus"></i></button>

            
        </motion.div>
    )
}


export default Dogs

