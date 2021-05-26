import React, {useEffect, useState} from 'react'

const Trying = () => {
const [dog, Setdog] = useState([]);


useEffect( async () => {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json();

      console.log(data);

    
}, []);



    return (
        <div>
            
        </div>
    )
}

export default Trying
