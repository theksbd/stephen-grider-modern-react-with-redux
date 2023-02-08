import { useState } from 'react';
import bird from './images/bird.svg';
import cat from './images/cat.svg';
import dog from './images/dog.svg';
import cow from './images/cow.svg';
import gator from './images/gator.svg';
import horse from './images/horse.svg';
import heart from './images/heart.svg';
import './AnimalShow.css';

const svgMap = {
  bird,
  cat,
  dog,
  cow,
  gator,
  horse
};

const AnimalShow = ({ type }) => {
  const [click, setClick] = useState(0);

  const handleClickAnimal = () => {
    setClick(click + 1);
  };

  return (
    <div className='animal-show' onClick={handleClickAnimal}>
      <img className='animal' src={svgMap[type]} alt='svg animal' />
      <img
        className='heart'
        src={heart}
        alt='heart'
        style={{ width: 10 + 10 * click + 'px' }}
      />
    </div>
  );
};

export default AnimalShow;
