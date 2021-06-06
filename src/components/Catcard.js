import React, {useState} from 'react'
import Spinner2 from './Spinner2'


const Catcard = ({cat,updateCat,loading2}) => {


    if(loading2){
        return <Spinner2/>
    }
//    const [catbreeds, setCatbreeds] = useState(initialcat);


    return (
        <div className="card bounce"onClick={() => updateCat(cat.breed.id)}>
           <img className="img1"
           src={cat.image}
           alt="cat"/>
           <p>{cat.breed.name}</p>
        </div>
    )
}

export default Catcard
