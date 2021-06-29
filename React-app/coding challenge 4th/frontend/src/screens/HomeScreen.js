import { useHistory } from "react-router"
import Axios from 'axios';
import React, { useEffect ,useState} from 'react';
import MovieList from '../components/MovieList';
import Pagination from "../components/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeScreen() {

  const[movies,setMovies]=useState([])
  const [loading,setLoading]=useState(true);

  const getMovieRequest = async () => {

		const url = `/api/movies`;
    const { data } = await Axios.get(url)
    console.log("movies data :",data)
    setMovies(data)

	};

  useEffect(() => {
    if(movies.length==0){
    getMovieRequest();
    setLoading(false)
    }
  });

  const [showPerPage, setShowPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <>
      { (loading==true)?
         <h4>Please wait, Loading....</h4>
       :
    		<div className='container-fluid'>
        <div className='row'>
				<MovieList
					movies={movies.slice(pagination.start, pagination.end)}
				/>
			</div>
      <Pagination
     showPerPage={showPerPage}
     onPaginationChange={onPaginationChange}
     total={movies.length}
   />
		</div>
   
      }
   </>
  );
}