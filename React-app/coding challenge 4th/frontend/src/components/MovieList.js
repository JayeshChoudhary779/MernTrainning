
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
  

const MovieList = (props) => {

	const [loading,setLoading]=useState(true);
    const {movies}=props;
    console.log("prop movie:", movies)

	useEffect(() => {
	if(movies.length===0){
		setLoading(false);
	  }
	},[])

	return (
		
		  (loading==true)?
    <h4>Please wait, Loading....</h4>
  :
			movies.map((movie) => (
				
				<Link to={`/detail/${movie.imdbID}`}>
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'/>
					</div>
					</Link>
			 ))
			
	);
};

export default MovieList;