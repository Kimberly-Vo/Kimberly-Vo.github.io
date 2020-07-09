import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// react router import
import { Switch, Route } from 'react-router-dom';
// import pages

import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import Journey from './components/pages/Journey';
import NotFoundPage from './components/pages/NotFoundPage';
import Projects from './components/pages/Projects';
import Divvy from './components/case_studies/Divvy';



class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path = "/" component ={Home}/>
          <Route path = "/blog" component ={Blog}/>
          <Route path = "/journey" component ={Journey}/>
          <Route path = "/projects" component ={Projects}/>
          <Route path = "/divvy" component ={Divvy}/>
          <Route component ={NotFoundPage}/>
        </Switch>
        <Footer />
      
        
        
      </div>
    );
  }
}


export default App;
