import NavBar from './NavBar';
import MovieList from './MovieList';

import { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('')
  // const [newMovie, setNewMovie] = useState({})


  return (
    <div>
        <NavBar sendSearchValue={setInputValue}/>
        <MovieList searchValue={inputValue} />
    </div>
    
  )
}


