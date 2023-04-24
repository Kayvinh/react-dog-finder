import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = "http://localhost:5001"
const PATH = "dogs"

function DogsList()  {
  const [ dogs, setDogs ] = useState([]);

  async function getDogs() {
    const response = await axios.get(`${BASE_URL}/${PATH}`)
    setDogs(response.data);
  }

  // without this, we kept rendering the page
  useEffect(() => {
    getDogs();
  }, []);
  // empty array as second arg in useEffect makes it so getDog() runs only once

  console.log(dogs)

  return (
    <ul>
      {dogs.map((dog, idx) => (
        <li key={idx}>
          <Link to={`/dogs/${dog.src}`}>
            {dog.name}
            <img src={`${dog.src}.jpg`} alt={dog.name}/>
          </Link>
        </li>
        ))
      }
    </ul>
  );
}

export default DogsList