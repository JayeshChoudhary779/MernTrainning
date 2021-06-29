
import Header from './components/Header';
import Mainscreen from './screen/Mainscreen';
import Goodlist from './components/Goodlist';

import Shoplistgrid from './components/shoplistgrid';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import {BrowserRouter as Router, Switch, Route, BrowserRouter,Link} from 'react-router-dom';
import Addshop from './components/Addshop';
import RequestAdmin from './components/RequestAdmin';
import RequestCategory from './components/RequestCategory';

import Viewcategory from './components/Viewcategory';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BmsProvider} from "./reducers/bms-context";

function App() {

  return (
    <>
   
   <BmsProvider> 
    <BrowserRouter>
    <Router>
    <Header/>
    <Switch>
     <Route exact path="/" component = {Mainscreen}/>    
     <Route path="/Goodsgrid" component ={Goodlist}/>
     <Route path="/Shopsgrid" component ={Shoplistgrid}/>
     
     <Route path="/Request_By_Customer" component ={RequestAdmin}/>
     <Route path="/Request_Category" component ={RequestCategory}/>
     <Route path="/Add_Shops" component ={Addshop}/>
     <Route path="/View_Category" component ={Viewcategory}/>
     <Route path="/logout" component ={Logout}/>
     <Route path="/login" component ={Login}/>
     <Route path="/register" component ={Register}/>
    </Switch>
    </Router>
    </BrowserRouter>
    </BmsProvider>
    
    </>
    
  );
}

export default App;
