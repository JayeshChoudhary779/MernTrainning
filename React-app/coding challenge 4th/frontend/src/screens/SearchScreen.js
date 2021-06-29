import Axios from 'axios';
import React, { useEffect ,useState} from 'react';
import MovieList from '../components/MovieList';
import Pagination from "../components/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchScreen(props) {

    const textSearch  = props.location.search.split('=')[1]
    console.log("plain search :",textSearch);

  const [loading,setLoading]=useState(true);
  const[movies,setMovies]=useState([])
  const[message,setMessage]=useState("")

  const getMovieRequest = async () => {
    
    const searchgenValue  = await Axios.get(`/api/movies/text/${textSearch}`);
    console.log("searched data in db first :",searchgenValue.data)
    console.log("searched length in db first :",searchgenValue.data.length)

    if(searchgenValue.data.length===0){
    const url = `http://www.omdbapi.com/?s=${textSearch}&apikey=283ed57f`;
    const { data } = await Axios.get(url)
    console.log("movies data omdb :", data.Search)

    if(data.Search!==undefined){
        if(data.Search.length>1){
    Axios.post(`/api/movies/Generic/add`, data.Search);
    const searchgeneValue  = await Axios.get(`/api/movies/text/${textSearch}`);
    console.log("result :",searchgeneValue.data)
    setMovies(searchgeneValue.data)
        }else{
            console.log("data search 1:",data.Search)
    const genericData1  = await Axios.post(`/api/movies/add`, data.Search[0]);
    console.log("result :",genericData1.data)
    setMovies([genericData1.data])
        }

    }else{
        setMessage("Not found");
    }
  }
  else{
    setMovies(searchgenValue.data)
   
  }
	};

  useEffect(() => {
    if(movies.length==0){
    getMovieRequest();
    setLoading(false);
  }
  });

  
  const [showPerPage, setShowPerPage] = useState(4);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };


  

  return (
    (loading==true)?
    <h4>Please wait, Loading....</h4>
  :
    (message==="Not found")?
    <h2 className="container mt-4">No result found...</h2>
    :
    		<div className='container-fluid'>
        <div className='row'>
				<MovieList
					movies={movies.slice(pagination.start, pagination.end)}
				/>
			</div>
      {(movies.length>4)?
      <Pagination
     showPerPage={showPerPage}
     onPaginationChange={onPaginationChange}
     total={movies.length}
   />
   :null}
		</div>
  );
}