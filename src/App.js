import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogsList from './DogsList';
import Nav from './Nav';
const BASE_URL = "http://localhost:5001";
const PATH = "dogs";


function App() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogs() {
    const response = await axios.get(`${BASE_URL}/${PATH}`);
    setDogs(response.data);
  }

  console.log("before isLoading:", dogs);
  if (isLoading) {
    getDogs();
    setIsLoading(false);
  }
  console.log("after isLoading:", dogs);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<DogsList dogs={dogs}/>} path="/dogs" />
          <Route element={<DogDetails dogs={dogs}/>} path="/dogs/:name" />
          <Route element={<DogsList dogs={dogs}/>} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
