
import Header from './components/Header';
import Mainscreen from './screen/Mainscreen';
import Filmlistgrid from './components/filmlistgrid';
import Exit from './components/Exit';
import DirectorDetails from './components/DirectorDetails';
import Directorlistgrid from './components/directorlistgrid';
import Adddirector from './components/Adddirector';
import {BrowserRouter as Router, Switch, Route, BrowserRouter,Link} from 'react-router-dom';
import Addfilm from './components/Addfilm';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Router>
    <Header/>
    <Switch>
     <Route exact path="/" component = {Mainscreen}/>
     <Route path="/Filmsgrid" component ={Filmlistgrid}/>
     <Route path="/Directorsgrid" component ={Directorlistgrid}/>
     <Route path="/DirectorDetails" component ={DirectorDetails}/>
     <Route path="/Add_Films" component ={Addfilm}/>
     <Route path="/Add_Directors" component ={Adddirector}/>
     <Route exact path="/Exit" component = {Exit}/>
    </Switch>
    </Router>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
