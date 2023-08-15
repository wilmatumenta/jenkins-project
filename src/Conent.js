import React from 'react'
import { useState } from 'react';


const Conent = () => {

    const [name, setName] = useState('carl');
    const [count, setCount] = useState()

    const handleNameChanger = () => {
        const nameT = ["Bob", "dave", "Bree", "Jill", "Allen"];
        const int = Math.floor(Math.random()*5);
        return setName(nameT[int])
      }

    const handleClick = () => {
        console.log('you clicked it')
    }
    const handleClick2 = (name) => {
        console.log(`${name} was clickes`)
    }
    return (
        <main>
            <h1> hello  {name}</h1>
            <button onClick={handleNameChanger}>click it</button>
            <button onDoubleClick={handleClick}>click it-2</button>
            <button onClick={() => handleClick2('dave')}>click it-3</button>
        </main>
  )
}

export default Conent