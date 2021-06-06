import React from 'react'
import Spinner from './spinner'

const Card = ({dog, updateDog, loading}) => {
    if(loading){
        return <Spinner/>
    }
    return (
        <div className="card bounce" onClick={() => updateDog(dog.breed.id)}>
            <img className="img1"
                src={dog.image}
                alt="dog"
            />
            <p>
                {dog.breed.name}
            </p>
        </div>
    )
}

export default Card
