import React, {useState, useEffect}from 'react'
import Getbreeds from '../Helpers/Getbreeds';
import Error from './Error'


const InitialBreeds =[
    {
        id : 1,
        name : 'boxer'
    },
    {
        id : 2,
        name : 'labarador'
    }
];
const Select = ({ updateDog }) => {
   const [breed, setBreed] = useState(InitialBreeds);
   const [error, setError] = useState(null);


    useEffect(() => {
        
        updateBreeds();
    }, [])

    const updateBreeds = ()=>{
     Getbreeds().then((newdata)=>{
      setBreed(newdata);
      }).catch((error) => {
        console.log(error);
        setError("Error loading the breeds");
      })

    }

    return (
        <>
      <select onChange={(e) => updateDog(e.target.value)}> {breed.map(breed=>(
          <option value={breed.id} key={breed.id}>{breed.name}</option>
      ))}
      </select>

      { error && <Error error={error} /> }
      </>
    )
}

export default Select
