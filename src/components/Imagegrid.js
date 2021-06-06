
import React from 'react';
import { fstore } from '../firebase/firebase';
import useFirestore from '../hooks/Usefirestore';




const ImageGrid = () => {
  
  
  const { docs } = useFirestore('dog-adoptions');
  const db = fstore.collection('dog-adoptions');

 


  return (


    <div className="image-grid">
      
      {docs && docs.map(doc =>(
       <div className="card-cont bounce"  key={doc.id}>
         <div className="img-div">
           <img src={doc.url} className="img"/>
         </div>

         <p className="Animal-Name">{doc.Name}</p>

         <div className="info"> 
         <p className= "Description">{doc.Description}</p></div>
         {/* <footer className="functions">
           <button className="btn-3" onClick={() =>db.doc(doc.id).delete()}><i class="fas fa-times-circle">delete</i> </button>
          
         </footer> */}
       </div>
       
      ))}
    </div>
  )
}

export default ImageGrid;