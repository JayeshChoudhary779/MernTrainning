
import {Link} from 'react-router-dom';

function List(){
    return(
<div className="topnav2">
<ul>
    
<Link to={`/`}><li><a href="#">Home</a></li></Link>
<Link to={`/Add_Films`}><li><a href="#">Add Film</a></li></Link>
<Link to={`/Filmsgrid`}><li><a href="#">Films</a></li></Link>
<Link to={`/Add_Directors`}><li><a href="#">Add Director</a></li></Link>
<Link to={`/Directorsgrid`}><li><a href="#">Directors</a></li></Link>
<Link to={`/DirectorDetails`}><li><a href="#">Director Details by Movie</a></li></Link>
<Link to={`/Exit`}><li><a className="exit" href="#Exit">Exit</a></li></Link>
</ul>
</div>
    )}

export default List;