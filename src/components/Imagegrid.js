import React from 'react'
import Usefirestore from '../hooks/Usefirestore'
import "./all.css"





const Imagegrid = () => {
  const {docs} = Usefirestore('dog-adoptions');
  


    return (
        <div className="image-grid"> 
            {docs && docs.map(doc =>(
                         <div className="card-cont">
                         <div className="img-div"> <img src={doc.url} className="img"/></div>

                         </div>

            ))}
        </div>
    )
}

export default Imagegrid
