import React from 'react';
import useFirestore from '../hooks/Usefirestore';
import { motion } from 'framer-motion';

const ImageGrid = () => {
  const { docs } = useFirestore('dog-adoptions');
 

  return (
    <div className="image-grid">
      {docs && docs.map(doc =>(
       <div className="card-cont"  key={doc.id}>
         <div className="img-div">
           <img src={doc.url} className="img"/>
           
         </div>
         <div className="card-footer"></div>

       </div>
      ))}
    </div>
  )
}

export default ImageGrid;