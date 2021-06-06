import React, {useState, useEffect} from "react";

import "../all.css"
import Select from '../Select'
import Card from "../Card";
import GetDogs from "../../Helpers/GetDogs";
import Error from "../Error";
import Catcard from "../Catcard";
import Selectcat from "../Selectcat";
import GetCats from "../../Helpers/GetCats";
import Header2 from "../Header2";
import Footer from "../Footer";

const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: ""
  }
}

const initialCat = {
  image: "",
  breed: {
    id: 1,
    name: "japanese"
  }
}


const Home = () => {

   const [dog, setdog] = useState(initialDog);
   const [cat, setcat] = useState(initialCat);
   const [loading, setloading] = useState(false);
   const [loading2, setloading2] = useState(false)
   const [error, setError] = useState(null);

    useEffect(() => {
      updateDog();
      
      
    }, []);
   
       const updateDog = (breedId) =>{
       setloading(true);
       GetDogs(breedId).then((newDogs)=>{
        setdog(newDogs);
        setloading(false);
      }) 
    
       .catch((error) => {
      console.log(error);
      setError("Error laoding a dog")
      setloading(false);
       })

       };

// ************
useEffect(() => {
  updateCat();
}, []);


     const updateCat = (breedId) =>{
      setloading2(true);
      GetCats(breedId).then((newcats)=>{
       setcat(newcats);
       setloading2(false);
      
   }) 
   
   .catch((error) => {
     console.log(error);
     setError("Error laoding a dog")
     setloading2(false);
   })

    }
    

    return ( 
      <div className="Mainhome1">

         <Header2/>

         <div className="dog_cat">
         <div className="dog-container">
           <h2>Select a dog breed</h2><br/>
        <Select updateDog={updateDog}/>
       { error && <Error error={error} /> }
       <Card dog={dog} updateDog={updateDog} loading={loading}/>
        </div>

        <div className="cat-container">
        <h2>Select a cat breed</h2><br/>
             <Selectcat updateCat={updateCat}/>
             { error && <Error error={error} /> }
              <Catcard cat={cat} updateCat={updateCat} loading2={loading2}/>
        </div>

             </div>

             <Footer/>
            
            </div>
              
      
    );
  
  
  };

  export default Home