import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Route,BrowserRouter,Switch} from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import Header from './components/Header';
import MovieDetails from './screens/MovieDetails';


function App() {

  return (
    <BrowserRouter>
    <Router>
     <Header/>
    <Switch>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/search" component={SearchScreen}></Route>
          <Route path="/detail/:id" component={MovieDetails}></Route>
          <Route path="/" component={HomeScreen} exact></Route>

    </Switch>
    </Router>
    <div className="footer bg-dark ">
    <p>Created By Jayeshchoudhary | <i className="fa fa-copyright"></i> 2021 All rights reserved.</p>
  </div>
    </BrowserRouter>
  );
}

export default App;