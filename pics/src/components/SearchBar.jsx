import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleChangeTerm = e => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter your search</label>
        <input type='text' value={term} onChange={handleChangeTerm} />
      </form>
    </div>
  );
};

export default SearchBar;
