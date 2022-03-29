import {useState} from 'react'
import { Alert, Container } from 'react-bootstrap';
import './App.css';
import { CustomCard } from './components/card/CustomCard';
import { SearchForm } from './components/form/SearchForm';
import { MovieList } from './components/movie-list/MovieList';
import { Title } from './components/title/Title';
import { fetchMovie } from './helper/axiosHelper';


const App = () => {
  
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});
  const [category, setCategory] = useState("");


const getMovie = async search => {
  const movie = await fetchMovie(search);

  setMovie(movie.data);
};


  const handleOnAddToList = (cat, movie) => {
    const obj = {...movie, cat};

    !movieList.length && setMovieList([obj]);


    const isExist = movieList.find(item => item.imdbID === movie.imdbID);

    if (!isExist) {
      setMovieList([...movieList, obj]);
      setMovie({})
    } else {
      alert("Movie already exists in the list!!");

    }

    };

    const handleOnDelete = imdbID => {
      const filterdList = movieList.filter(itm=> itm.imdbID !== imdbID);
      setMovieList(filterdList);
      
    };

    const moviesToDisplay = category
    ?movieList.filter(item => item.cat === category)
    :movieList;


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

       {category || "ALL"} selected


       <MovieList movieList={moviesToDisplay} handleOnDelete = {handleOnDelete} setCategory={setCategory}/>
     </Container>
       
   </div>

  );
   


};

export default App;
