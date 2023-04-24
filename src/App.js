import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogsList from './DogsList';
import Nav from './Nav';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element= { <DogsList />} path="/dogs" />
          <Route element= { <DogDetails />} path="/dogs/:name" />
          <Route element= { <DogsList />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
