import Axios from 'axios';
import React, { useEffect ,useState} from 'react';
import MovieList from '../components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MovieDetails(props) {

    const idSearch = props.match.params.id
    console.log("id search :",idSearch);

  const [loading,setLoading]=useState(true);
  const[movie,setMovie]=useState([])
  const[message,setMessage]=useState("")

  const getMovieDetail = async () => {
    
    const searchValue  = await Axios.get(`/api/movies/id/${idSearch}`);
    console.log("searched data in db first :",searchValue.data[0])
    console.log("searched length in db first :",searchValue.data.length)

    if(searchValue.data.length===0){

    const url = `http://www.omdbapi.com/?i=${idSearch}&apikey=283ed57f`;
    const { data } = await Axios.get(url)
    console.log("movies data :", data)

    if(data.Response!=="False"){
    const result  = await Axios.post(`/api/movies/add`, data );
    console.log("result :",result)
    console.log("result data :",result.data)
    setMovie(result.data)
    }else{
        setMessage("Not found")
    }

    }
    else{
        setMovie(searchValue.data[0])
    }

	};

  useEffect(() => {
    if(movie.length==0){
    getMovieDetail();
    setLoading(false);
    }
  });

  

  return (
    (loading==true)?
    <h4>Please wait, Loading....</h4>
  :
    (message==="Not found")?
    <h2 className="container mt-4">No result found...</h2>
    :
    		<div className='container-fluid'>
        <div className='row'>
        <div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
				</div>
                <div className="coloum m-3">
                 <h4><b>IMDB ID</b> : {movie.imdbID} <br/></h4>
                 <h4><b>TITLE</b> : {movie.Title} <br/></h4>
                 <h4><b>YEAR</b> : {movie.Year} <br/></h4>
                 <h4><b>TYPE</b> : {movie.Type} <br/></h4>
                </div>
			</div>
		</div>
  );
}