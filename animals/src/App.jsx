import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'dog', 'horse', 'cow', 'gator'];
  return animals[Math.floor(Math.random() * animals.length)];
}

const App = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, i) => (
    <AnimalShow type={animal} key={i} />
  ));

  return (
    <div className='app'>
      <button onClick={handleClick}>Click</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
};

export default App;
