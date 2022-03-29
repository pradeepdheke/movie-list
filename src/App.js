import {useState} from 'react'
import { Alert, Container } from 'react-bootstrap';
import './App.css';
import { CustomCard } from './components/card/CustomCard';
import { SearchForm } from './components/form/SearchForm';
import { MovieList } from './components/movie-list/MovieList';
import { Title } from './components/title/Title';
import { fetchMovie } from './helper/axiosHelper';


const App = () => {
  const [movieMainList, setMovieMainList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});


const getMovie = async search => {
  const movie = await fetchMovie(search);

  setMovie(movie.data);
};


  const handleOnAddToList = (cat, movie) => {
    const obj = {...movie, cat};

    !movieList.length && setMovieList([obj]) && setMovieMainList([obj]);


    const isExist = movieList.find(item => item.imdbID === movie.imdbID);

    if (!isExist) {
      setMovieList([...movieList, obj]);
      setMovieMainList([...movieList, obj]);
      setMovie({})
    } else {
      alert("Movie already exists in the list!!");

    }

    };

    const handleOnDelete = imdbID => {
      const filterdList = movieList.filter(itm=> itm.imdbID !== imdbID);
      setMovieList(filterdList);
      setMovieMainList(filterdList);
    };

    const handleOnSelect = (cat) => {
      let filterArgs = [];

      if (cat) {
        filterArgs = movieMainList.filter(itm => itm.cat === cat);

      } else {
        filterArgs = movieMainList;
      }
      setMovieList(filterArgs);
      // happy selected
      // lazy selected
      // all selected
    } 


  return (
    <div className='wrapper'>
     <Container>
       <Title/>
       <SearchForm handleOnAddToList = {handleOnAddToList} getMovie = {getMovie}/>

       
    <div className='d-flex justify-content-center'>
    {movie.Response === "True" &&  <CustomCard movie = {movie} fun = {handleOnAddToList}/>}
        
    {movie.Response === "False" && (

    <Alert variant="danger">{movie.Error}</Alert>
    )}
    

        
    </div>
    



       <hr/>
       <MovieList movieList={movieList} handleOnDelete = {handleOnDelete} handleOnSelect={handleOnSelect}/>
     </Container>
       
   </div>

  );
   


};

export default App;
