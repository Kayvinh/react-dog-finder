import React from 'react'
import { Link } from 'react-router-dom';

/**
 * Show list of all dog names and pictures
 *
 * Props:
 * - dogs: [{name, age src, facts}, ...]
 */

function DogsList({ dogs })  {

  console.log("DogsList", dogs);

  return (
    <ul>
      {dogs.map((dog, idx) => (
        <li key={idx}>
          <Link to={`/dogs/${dog.src}`}>
            {dog.name}
            <img src={`/${dog.src}.jpg`} alt={dog.name}/>
          </Link>
        </li>
        ))
      }
    </ul>
  );
}

export default DogsList;