import React, {Component} from "react"
import styled from 'styled-components'
import Divvy_logo from './Vector.svg';
import Tien from './tien.svg';
import Kimberly from './kimberly.png';
class Divvy extends Component {
    render(){
        return (
          <div>
          <HeaderContainer>
          <div className = "divvy-header">
          <div className = "logo">
          
          <img src={Divvy_logo} alt="divvy_logo" class= "logo"/>
          </div>
          <div className ="title">

            <h1>Divvy Case Study</h1>
          </div>
          <div className = "description">
          
            <h5>Inside the process of designing an app that encourages Gen Z students to budget!</h5>
      
            </div>
            <DesignerContainer className ="kimberly">
          <img src= {Kimberly} alt="kimberly_picture" class = "kimberly" />
          </DesignerContainer>

          <DesignerContainer1 className ="tien">
          <img src= {Tien} alt="tien_picture" class = "tien" />
          </DesignerContainer1>
          </div>
          </HeaderContainer>
          <br/>

          <DescriptionContainer>
            <div className ="description-background">
            <div className="description-text">
            <h3>Context</h3>
            <p>This project was an assignment given to my partner tien and me as a final evaluation of what we learned through our accelerated UX course. 
            We were expected to go through the design process and deliver a prototype of an app that solves the 
            problem statement as well as a web landing page that would be used to draw in users. 
            </p>
            </div>
            </div>

          </DescriptionContainer>

          <br/>

          <ProblemContainer>
            <div className = "problem-background">
            <div className = "problem-text">
            <h2>
              Problem Statement
            </h2>
            <h4>
            How might we design a web and mobile app that allows Gen Z college students to create a monthly budget and track their spending?
            </h4>
            </div>
            
            </div>
          

          </ProblemContainer>

          <br/>


          </div>
        );
        }
}
export default Divvy;


const HeaderContainer = styled.text`
.divvy-header{
  background:#4B4F98;
  padding: 3vw;
}
.title{
  color: #ffffff;
  text-align:center;
}
.description{
  color: #ffffff;
  text-align:center;
}
.logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;

}
`

const DescriptionContainer = styled.text`
.description-background{
  background:#ffffff;  
  max-width: 80%; 
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}
.description-text{
  text-align:center;
}
`

const ProblemContainer = styled.text`
.problem-background{
  background:#EB9D76;  
  max-width: 65%; 
  display: block;
  padding: 3vw;
  margin-left: auto;
  margin-right: auto;

}
.problem-text{
  color: #ffffff;
}

`
const DesignerContainer = styled.picture`
.kimberly{
  border-radius: 50%;
  width: 20%;
  margin-left: 30%;
  margin-right: auto;
  padding:2vw;
}

`

const DesignerContainer1 = styled.picture`
.tien{
  border-radius: 50%;
  width: 20%;
  padding:2vw;
}

`