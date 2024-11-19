
import styled from "styled-components";
import { useState,useContext, useRef, useEffect } from "react";   
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Link, Navigate } from "react-router-dom";
import About from "./components/About"; 
import Projects from "./components/Projects"; 
import ProjectDetails from "./components/ProjectDetails.js";
import Contact from "./components/Contact"; 
import CoolPopup from "./components/CoolPopup";

import githubUrl from "./assets/icon-github.png";
import emailUrl from "./assets/icon-at.png";
import itchUrl from "./assets/icon-itch.svg";

import bgUrl from "./assets/background-wave.png";

import { projects } from "./data/dataProjects.js"

let height = String(document.body)+"px";
console.log(height);

function App() {

  const [popup,setPopup] = useState([false,0,0,<></>]); 
    const [anim,setAnim] = useState(false);
    
    let startSelect = 0;
    if (window.location.pathname === "/projects") { startSelect = 0;}
    else if (window.location.pathname === "/about") { startSelect = 1;}
    else if (window.location.pathname.substring(0,8) === "/project") { startSelect = 2;}
    else {  startSelect = 0;}

    const [selection,setSelection] = useState(startSelect); 

    const imgRef = useRef();
     
    const popupHandler = (elemento,target) =>{   
        const _pos = target.getBoundingClientRect(); 
        setPopup([true,`${Math.floor(_pos.left+_pos.width/2)}px`,`${Math.floor(_pos.bottom+15)}px`,elemento]);
    }

    const popupOut = () =>{
        setPopup([false,0,0,<></>]);
    }

    const emailRightClick = (event) => { 
      event.preventDefault();
    }

    useEffect(
        ()=>{setAnim(true);
        setTimeout(()=>{
            setAnim(false);
        },2000) 
        }
        ,[])  


      const clickCheckPath = () => {
        console.log("babon");
        if (window.location.pathname === "/projects") { setSelection(0); console.log("0");}
        else if (window.location.pathname === "/about") { setSelection(1); console.log("1");}
        else if (window.location.pathname.substring(0,8) === "/project")  { setSelection(2); console.log("2");}
        else { setSelection(0);}  
      }

  
  return ( 
    
    <BrowserRouter> 
    <MainDiv onClick={clickCheckPath}> 
      <FrameDiv> 
        <CenteringDiv>
            <MobileWrapCheckDiv>
              <MainFrame>
                <div> <Link to="/projects"> Renaud Cormier </Link></div>
              </MainFrame> 

              <FlexFrameDiv>   
                  <Link to="/projects" 
                  ><SubFrame 
                  {...( selection === 0 ? {className:"selected"}:{})}
                  onClick={()=>{setSelection(0);}}
                  >WEB DEV</SubFrame></Link>  
              <Link to="/about"><SubFrame 
                  {...( selection === 1 ? {className:"selected"}:{})}
                  onClick={()=>{setSelection(1);}}
                  >About</SubFrame></Link>    
              </FlexFrameDiv> 
  
            </MobileWrapCheckDiv>

            
            <IconsFrameDiv> 

<IconsIndividualDiv> 
    <a href={"mailto:renaud.c.portfolio@gmail.com"} target=" _blank" rel="noreferrer noopener" ><PopContactsImg src={emailUrl} popElement={<span>Send E-Mail</span>} onEnterHandler={popupHandler}  onOutHandler={popupOut}/></a> 
</IconsIndividualDiv> 

</IconsFrameDiv> 

            
        </CenteringDiv> 
      </FrameDiv> 

      {/* separation between FrameDiv and ContentDiv */}
      <GhostDiv>
          <CenteringDiv className="backgrounded"> 
              <Routes>
                  <Route path="/" element={<Projects/>} /> 
                  <Route path="/projects" element={<Projects/>} /> 
                  <Route path="/about" element={<About/>} />

                  {projects.map((project,index)=>{

                    return (  
                         <Route path={"/project"+String(index)} element={<ProjectDetails project={project} />} /> 
                    )
                    })}
 
              </Routes>
          </CenteringDiv>  
        </GhostDiv>

      <CoolPopup popup={popup} />
    </MainDiv>
    </BrowserRouter>
  )
}

const PopContactsImg = ({imgRef,src,onEnterHandler,onOutHandler,popElement}) =>{
  return (
  <ContactIconsImg elemento={popElement} ref={imgRef} src={src} 
      onMouseEnter={(event)=>{
          onEnterHandler(popElement,event.target);
      }} 
      onMouseOut={(onOutHandler)}
  /> 
  )
}

/// --- Styling Start---

const GoodOrange = "rgb(255,110,0)";
const shadowColor = "#FF5522";
 
const MainDiv = styled.div`   
position:absolute;
width:100%;   
min-height: 100%; 
height:fit-content; 
z-index:1;

background:#191919;
@media (width > 1200px) { 

  background-image: repeating-linear-gradient(135deg, 
      #131313, 
      #131313 100px, 
      black 100px, 
      black 105px, 
      #131313 105px, 
      #131313 130px, 
      #1C0D0B 130px, 
      #1C0D0B 260px, 
      black 260px, 
      black 265px, 
      #1C0D0B 265px, 
      #1C0D0B 270px, 
      #444444 270px, 
      #444444 330px);  
} 
background-blend-mode: overlay;

`

const GhostDiv = styled.div`  
width: 100%; 
display:flex;  
justify-content: space-between; 
align-items: center; 
margin-top:0.5rem;
min-height: 100%;
`

const FrameDiv = styled.div`   
position: relative;
z-index:5;
padding-top: 0.75rem;
padding-bottom: 0.75rem;
color:white; 
background-color: rgb(255,110,0);
width: 100%;
display:flex;  
justify-content: center; 
align-items: center;
box-shadow: rgba(255, 60, 33,0.5) 0px 5px, rgba(255, 60, 33,0.4) 0px 10px, rgba(255, 60, 33,0.3) 0px 15px, rgba(255, 60, 33,0.2) 0px 20px, rgba(255, 60, 33,0.1) 0px 25px;
height: 100px;
 

`
 
const MobileWrapCheckDiv = styled.div`   
display: flex;
flex-direction:row;  
justify-content:flex-start; 

align-items:center; 
flex-wrap:wrap;
min-width:18rem;
@media (width > 639px)
{
min-width:30rem;
max-width:30rem; 
}
 @media (width > 1200px)
 {
    flex-wrap: nowrap;
    justify-content: space-between; 
    align-items:center; 
    min-width:calc(100% - 150px)
 }
`

const MainFrame = styled.div`       
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: left;
font-family: superstar, Arial, Helvetica, sans-serif;
text-shadow: 0.25rem 0rem black, -0.25rem 0vh black, 0rem 0.25rem black, 0rem -0.25rem black, 0.25rem -0.25rem black, -0.25rem 0.25rem black;
height:100%;  
::-moz-selection { /* Code for Firefox */
  color: red;
  background: yellow; 
} 

::selection {
  color: red;
  background: yellow; 
}
 
  
font-size: 2.9rem;

@media (width > 640px)
{
  font-size:4rem;
}

@media (width > 1200px) 
{
   font-size:5rem;
    min-width:28rem;
}
`
const FlexFrameDiv = styled.div`    
display: flex; 
justify-content: space-between;  
gap:2rem;
height:2.6rem; 
 
`

const SubFrame = styled.div`     
cursor: pointer; 
font-family: zero4B, Arial, Helvetica, sans-serif;
text-decoration: underline;
text-decoration-thickness: 0.20rem; 
text-shadow: 0.2rem 0.2rem black;
height:95%;
position: relative;
top:0.7vh;
display: inline; 
display:flex;
justify-content: center; 
align-items: flex-end;
transition: all 200ms ease-out;
  -webkit-text-stroke: 0px rgb(255,110,0);
  font-size:1.3rem;
&:hover{
  -webkit-text-stroke: 0.15rem yellow;
  text-decoration-color: yellow;
  font-size: 1.5rem; 
}
&.selected{
  color:yellow;
  text-decoration-color: aqua;
  font-size: 1.7rem;
} 
&.selected:before{
  color:aqua;
  content:"[";
}
&.selected:after{
  color:aqua;
  content:"]";
}

@media (min-width:640px)
{
  font-size: 2rem;
  &:hover{
    font-size:2.2rem;
  }
  &.selected{ 
    font-size: 2.6rem;
  } 
}
`

const IconsFrameDiv = styled.div`    
display:flex; 
flex-direction: column;     
justify-content: space-around;  
align-items:center;    
max-width:0px;
visibility:hidden;
@media (width > 400px)
{
  max-width:initial;
  visibility:visible;
}
@media (width > 640px)
{
  margin-top:0px;
  right:initial;
  position:initial;
}
`

const IconsIndividualDiv = styled.div`  
display: flex;
flex-direction: row; 
justify-content: space-around; 
height:120px; 
  align-items: center; 
`
 

const ContactIconsImg = styled.img`
cursor: pointer;
filter: brightness(0) invert(1) drop-shadow(0px 0 0 yellow)  drop-shadow(0px 0 0 yellow);
transition: all 200ms ease-out;
&:hover{ 
    filter: brightness(0) invert(0.5)  drop-shadow(2px 0 0 yellow) drop-shadow(-2px 0 0 yellow) drop-shadow(0 2px 0 yellow) drop-shadow(0 -2px 0 yellow);
}
height:0px;
 @media (width > 400px)
{
  height:50px;
}
@media (width > 640px)
{
  height: 70px; 
}
`
 
const CenteringDiv = styled.div`   
margin-left: auto;
margin-right: auto; 
width: 100%; 
max-width: 1200px; 
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;   
position:relative;

margin-top:-0.5rem;  
  padding-left: 10px;
  padding-right:10px;
@media (width > 640px)
{
    padding-left:20px;
    padding-right:20px;
}
@media (width > 1200px) {
    min-width:1200px;
    
}

&.backgrounded {
  background: #131313;  
  @media (width > 1200px) {
     filter: drop-shadow(16px 0 0 rgba(0,0,0,0.5)) 
        drop-shadow(-16px 0 0 rgba(0,0,0,0.5))
        drop-shadow(32px 0 0 rgba(0,0,0,0.5)) 
        drop-shadow(-32px 0 0 rgba(0,0,0,0.5));
  }

}
 
`

export default App;
