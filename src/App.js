import './App.css';
import { useEffect, useState } from 'react';
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { getDocs, collection } from '@firebase/firestore';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);



  const moviesCollectionRef = collection(db, "movies")

  useEffect(()=>{
    const getMovieList = async () => {
      try{
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc)=>({
        ...doc.data(), 
        id: doc.id,
      }))
      setMovieList(filteredData)
    } catch(err) {
        console.error(err);
      }

    }
    getMovieList()
  }, [])


  return (
    <div className="App">
      <Auth />
      <div>
        <input placeholder="movie title..."/>
        <input placeholder="release date..." type="number"/>
        <input type="checkbox"/>
        <label>Received an Oscar</label>
        <button>Submit Movie</button>
      </div>

      <div>
      {movieList.map((movie)=> (
          <div>
            <h1  style={{color: movie.receivedAnOscar ? "green" : "red"}}>{movie.title}</h1>
            <p>Date: {movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
