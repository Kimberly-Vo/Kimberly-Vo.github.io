import React, {Component} from "react"
import styled from 'styled-components' 
import {Link} from 'react-router-dom';
import Divvy_pic from './Divvy.png';

import { Switch, Route } from 'react-router-dom';


class Projects extends Component {
  render(){
  return (
    <div>
      <h1>Projects/case study</h1>

      <br/>


        <div class="row justify-content-center">
        <div class="col-sm-6">
        <div class="card">
        <img src={Divvy_pic} class="card-img-top" alt="project_1"/>
    
        <div class="card-body">
        <h5 class="card-title">Divvy Project</h5>
        <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
        <p class="card-text"></p>
        <Link href="#" class="btn btn-primary" className="nav-link" to="/divvy">View full case study</Link>
        
        </div>
        </div>
        </div>
        </div>
        

    



      

        <br/>
        






    </div>
   
    );
  
  }
}
 
export default Projects;



