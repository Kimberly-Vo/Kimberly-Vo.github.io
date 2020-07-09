import React, {Component} from "react"
import styled from 'styled-components'
import Group from './Group.png';
import {Link} from 'react-router-dom';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';



class Home extends Component {
  render(){
  return (  

   <div>
     <br/>
     <div style = {{height:"100vh"}}> 
    <PictureContainer>
      <img className ="group" src={Group} class="kimberly-pic"/>
    </PictureContainer>


    <Text>
    <div className ="wrapper">
    <div className ="intro">
    <Typical
        steps={['Hello!', 1000, 'Hello! My name is Kimberly :)', 500]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
    <div className ="sub-intro">
    UX designer dedicated to using compelling stories and understanding to bridge the gap between technology and humanity.
    </div>
    </div>
    </Text>
    
    </div>


    <AboutMe>
    <Fade left>
    <div className ="about-background">
    <div className = "text-wrapper"> 
    
    <div className = "title">
      About me
    </div>
    
    <div className = "kimberly-description">
      I am a rising 3rd year at the University of Virginia majoring in Computer Science and Psychology.
      I am realtively new to this community with an eagerness to learn and an open mind to absorb as much as I can.
      I am am a mom to many plant children and enjoy cooking mediocore meals in my free time. In myers-briggs terms, I am an ENFP. 
      For my Harry Potter fans, I am a Gryfindoor/Ravenclaw. 
      For my zodiac believers, I am an Aquarious. 
      And finally for the group that I hold closest to my heart, my ATLA watchers, I consider myself an air bender.
      Hopefully that gives you a good glimpse of who I am.
    </div>

    </div>
    </div>
    </Fade>
    </AboutMe>
    
    <br/>

    <UXJourney>
    <Fade right>
    <div className = "wrapper">
    <div className = "text-wrapper">
    <div className = "journey-background">
    <div className = "title">
      Journey
    </div>
    <div className = "journey-description">
      One thing I value most about the field of UX is its emphasis on human connection and understanding.
       You've probably already read my about me speil that I give to everyone, but I invite you to dig deeper.
       Learn why I am like that, how I did the things I did, what led me on this path. Learn about my journey.
    

    </div>
    <br/>
    <div className = "button">
    
    <Link type="button" class="btn btn-outline-primary" to="/journey">Read Journey</Link>
    </div>
    </div>
    </div>
    </div>
    </Fade>
    </UXJourney>

    <br/>

    <CaseStudies>
   
    <Fade left>
    <div className = "case-background">
    <div className = "text-wrapper"> 
    <div className = "title">
      Case Studies
    </div>
    <div className = "case-description">
      Take a look at what I've been working on. From profressional projects to exploring ideas with my friends, you can find it all here.
    </div>
    <br/>
    <div className = "button">
    
    <Link type="button" class="btn btn-outline-primary" to="/projects">View Case Studies</Link>
    </div>
    </div>
    </div>
    </Fade>
    </CaseStudies>

    <br/>

    
    </div>
  );
  }
}

export default Home;


const PictureContainer = styled.picture`
.kimberly-pic{
  float: left;
  padding-top: 4rem;
  margin-left: 0%;
  margin-right: auto;
  width: 55%;
  display: inline-block;
}
`
const Text = styled.text`
.wrapper{
  overflow:auto;
  padding-top:15vw;
}
.intro{
  color: #4F4F4F;
  width: 85%;
  font-size: 3vw;
}
 
.sub-intro{
  color: #4F4F4F;
  font-size:1.5vw;
  width: 80%;


}
`

const AboutMe = styled.text`
.about-background{
  width: 55%;
}
.text-wrapper{
  padding-bottom:3rem;
}
.title{
  padding-left:6vw;
  font-size: 2vw;
  color: #4F4F4F;
}
.kimberly-description{
  padding-left:6vw;
  font-size: 1.5vw;
  color: #4F4F4F;
}


`
const UXJourney = styled.text`
.wrapper{
  overflow:auto;
}
.text-wrapper{
  padding-bottom:3rem;
  width:97%;
}
.journey-background{
  float:right;
  width: 55%;
}
.title{
  font-size: 2vw;
  color: #4F4F4F;
 
}
.journey-description{
  font-size: 1.5vw;
  color: #4F4F4F;
}
.button{

}
`

const CaseStudies = styled.text`

.case-background{
  width: 55%;
}
.text-wrapper{
  padding-top: 3rem;
  padding-bottom:3rem;
}
.title{
  padding-left:6vw;
  font-size: 2vw;
  color: #4F4F4F;
  
}
.case-description{
  padding-left:6vw;
  font-size: 1.5vw;
  color: #4F4F4F;
}

.button{
  padding-left:6vw;
}
`