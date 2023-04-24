import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = "http://localhost:5001"
const PATH = "dogs"

const DogDetails = () => {
  const [ dog, setDog ] = useState({});
  const { name } = useParams();

  async function getDog(name) {
    const response = await axios.get(`${BASE_URL}/${PATH}`)
    const dogData = response.data.filter(dog => {
      return dog.name === name;
    });

    // setDog(dogData);
  }

  //Note: ask about this, is this correct way to handle calling async??
  getDog(name);
  console.log(dog)


  return (
    <div>DogDetails</div>
  )
}

export default DogDetails