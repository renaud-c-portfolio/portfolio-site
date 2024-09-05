
import styled from "styled-components";
import { useState,useContext, useRef, useEffect } from "react";   
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import About from "./components/About"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact"; 
import CoolPopup from "./components/CoolPopup";

import githubUrl from "./assets/icon-github.png";
import emailUrl from "./assets/icon-at.png";
import itchUrl from "./assets/icon-itch.svg";

import bgUrl from "./assets/background-wave.png";




function App() {

  const [popup,setPopup] = useState([false,0,0,<></>]); 
    const [anim,setAnim] = useState(false);
    let startSelect = 0;
    if (window.location.pathname === "/projects") { startSelect = 1;}

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

  

  
  return ( 
    
    <BrowserRouter>
    <BackgroundDiv> 
    </BackgroundDiv>
    <MainDiv>
      <FrameDiv> 
        <CenteringDiv className="mobile-content">
            <MobileWrapCheckDiv className="mobile-wrap">
              <MainFrame>
                <div> Renaud Cormier</div>
              </MainFrame>
              <Flex1Div></Flex1Div>
              <FlexFrameDiv>  
                  <Link to="/"><SubFrame 
                  {...( selection === 0 ? {className:"selected"}:{})}
                  onClick={()=>{setSelection(0);}}
                  >Main-About</SubFrame></Link>  
                  
              <Flex1Div></Flex1Div>
              <Flex1Div></Flex1Div>
                  <Link to="/projects" 
                  ><SubFrame 
                  {...( selection === 1 ? {className:"selected"}:{})}
                  onClick={()=>{setSelection(1);}}
                  >Projects</SubFrame></Link> 
              <Flex1Div></Flex1Div>
              </FlexFrameDiv>
              <Flex1Div></Flex1Div>
              

            </MobileWrapCheckDiv>

            <IconsFrameDiv> 

                        <IconsIndividualDiv>
                            <a href={"https://github.com/renaud-c-portfolio/"} target=" _blank" rel="noreferrer noopener"><PopContactsImg src={githubUrl} popElement={<span>Go to Github</span>} onEnterHandler={popupHandler}  onOutHandler={popupOut} /></a>
                         
                            <a href={"mailto:renaud.c.portfolio@gmail.com"} target=" _blank" rel="noreferrer noopener" ><PopContactsImg src={emailUrl} popElement={<span>Send E-Mail</span>} onEnterHandler={popupHandler}  onOutHandler={popupOut}/></a> 
                        </IconsIndividualDiv> 
              
            </IconsFrameDiv> 
        </CenteringDiv> 
      </FrameDiv> 

      {/* separation between FrameDiv and ContentDiv */}
      <GhostDiv>
          <CenteringDiv className="mobile-content"> 
              <Routes>
                  <Route path="/" element={<About/>} />
                  <Route path="/projects" element={<Projects/>} />
                  <Route path="/contact" element={<Contact/>} /> 
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

const BackgroundDiv = styled.div`
position: absolute;
min-width: 100vw;
height:100%; 
z-index:0; 
background: url(${bgUrl});
background-position-y: 20vh;
background-repeat: repeat-x;  
background-size:cover;
opacity:0;

`
const MainDiv = styled.div`   
position:absolute;
width:100%;   
min-height: 100vh; 
background:transparent;
z-index:1;
`

const GhostDiv = styled.div` 
margin-top:25px;
width: 100%;
display:flex;  
justify-content: space-between; 
align-items: center; 

`

const FrameDiv = styled.div` 
padding-top: 0.75rem;
padding-bottom: 0.75rem;
color:white; 
background-color: rgb(255,110,0);
width: 100%;
min-height: 60px; 
display:flex;  
justify-content: flex-start; 
align-items: flex-start;
box-shadow: rgba(255, 60, 33,0.5) 0px 5px, rgba(255, 60, 33,0.4) 0px 10px, rgba(255, 60, 33,0.3) 0px 15px, rgba(255, 60, 33,0.2) 0px 20px, rgba(255, 60, 33,0.1) 0px 25px;
`

const Deco = styled.div` 
pointer-events: none;
position: fixed;
height: calc(13vh + 5px); 
width:35vw;
top:0px; 
box-shadow: rgba(255, 60, 33,0.5) 5px 0, rgba(255, 60, 33,0.4) 10px 0, rgba(255, 60, 33,0.3) 15px 0, rgba(255, 60, 33,0.2) 20px 0, rgba(255, 60, 33,0.1) 25px 0;
` 

const MobileWrapCheckDiv = styled.div`  
flex:5;
display: flex;
flex-direction:row;
justify-content: space-between;  
min-height: 50px;    
`

const MainFrame = styled.div`       
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: left;
font-family: superstar, Arial, Helvetica, sans-serif;
text-shadow: 0.25rem 0rem black, -0.25rem 0vh black, 0rem 0.25rem black, 0rem -0.25rem black, 0.25rem -0.25rem black, -0.25rem 0.25rem black;
font-size: 4rem;
height:100%; 
::-moz-selection { /* Code for Firefox */
  color: red;
  background: yellow; 
} 
::selection {
  color: red;
  background: yellow; 
}

`
const FlexFrameDiv = styled.div`   
min-width: 28rem;
width:50%;
display: flex; 
justify-content: space-between;  
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

  font-size: 2rem;
&:hover{
  -webkit-text-stroke: 0.15rem yellow;
  text-decoration-color: yellow;
  font-size: 2.2rem; 
}
&.selected{
  color:yellow;
  text-decoration-color: aqua;
  font-size: 2.6rem;
} 
&.selected:before{
  color:aqua;
  content:"[";
}
&.selected:after{
  color:aqua;
  content:"]";
}
`

const IconsFrameDiv = styled.div`   
min-height:60px; 
display:flex; 
flex-direction: column;     
justify-content: space-around; 
`

const IconsIndividualDiv = styled.div` 
height: 100%;
display: flex;
flex-direction: row; 
justify-content: flex-end; 
align-items: flex-end;
`
 

const ContactIconsImg = styled.img`
height: calc(15px + 3rem);
margin:5px;
cursor: pointer;
filter: brightness(0) invert(1) drop-shadow(0px 0 0 yellow)  drop-shadow(0px 0 0 yellow);
transition: all 200ms ease-out;
&:hover{

    filter: brightness(0) invert(0.5)  drop-shadow(2px 0 0 yellow) drop-shadow(-2px 0 0 yellow) drop-shadow(0 2px 0 yellow) drop-shadow(0 -2px 0 yellow);
}
`

const Flex1Div = styled.div`
flex:1;
`

const ContentDiv = styled.div`  
display: flex;
flex-direction: row;
`
const CenteringDiv = styled.div`   
margin-left: auto;
margin-right: auto; 
width: 90%; 
max-width: 1200px; 
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export default App;
