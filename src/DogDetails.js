import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * Show details on single dog
 *
 * Props:
 * - dogs: [{name, age src, facts}, ...]
 */

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = (dogs.filter(d => name === d.src))[0];

  return (
    <div>
      <p>Name: {dog.name}</p>
      <p>Age: {dog.age}</p>
      <p>Facts:
        <ul>
          {dog.facts.map(f => (<li>{f}</li>))}
        </ul>
      </p>
      <img src={`/${dog.src}.jpg`} alt={dog.name}/>
    </div>
  );
}

export default DogDetails;