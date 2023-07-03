import './App.css';
import { useEffect, useState } from 'react';
import { Auth } from './components/auth';
import { db } from './config/firebase';

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const getMovieList = () => {

    }

  }, [])


  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
