import React, {useState, useEffect} from 'react'
import GetcatBreeds from '../Helpers/GetcatBreeds';

const initialcat = [
    {
        id: 1,
        name: "korat"
    },
    {
     id: 2,
     name: "simese"
 }
 
 ];

const Selectcat = ({updateCat}) => {
    const [catbreed, setcatbreed] = useState(initialcat)


    useEffect(() => {
        Updatecatbreeds();
    }, [])

    const Updatecatbreeds = () =>{
    GetcatBreeds().then((newdata)=>{
           setcatbreed(newdata);
    })
    
    }
    return (
        <select onChange={(e) => updateCat(e.target.value)}>
            {catbreed.map(breed =>(

             <option value={breed.id} key={breed.id}>{breed.name}</option>

            ))}
       
      
        </select>
    )
}

export default Selectcat
