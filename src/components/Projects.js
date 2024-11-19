import styled from "styled-components"

import arrowUrl from "../assets/arrow.png"
import portraitUrl from "../assets/portrait.png"
import reactUrl from "../assets/logo-react.png"
import typeScrUrl from "../assets/logo-typescript.png"
import javaScrUrl from "../assets/logo-javascript.png"
import nodeUrl from "../assets/logo-node.png"
import htmlUrl from "../assets/logo-html5.png"
import mongoUrl from "../assets/logo-mongo.png"
import gitUrl from "../assets/logo-git.png"
import canvasUrl from "../assets/logo-canvas.png"
import CoolPopup from "./CoolPopup"

import { Link } from "react-router-dom"



import { useEffect, useState, useRef } from "react"
import { projects } from "../data/dataProjects"

import ProjectWithDesc from "./ProjectWithDesc"
  

 
const Projects = () =>{

    const [popup,setPopup] = useState([false,0,0,<></>]); 
    const [anim,setAnim] = useState(false);
    const [doubleProject,setDoubleProject] = useState(0)

    let rem = 6;
    
    if (window.matchMedia('(max-device-width: 1200px)').matches)
    {
        rem = 16;
    }
    
    else if (window.matchMedia('(max-device-width: 300px)').matches)
    {
        rem = 7;
    }
    else if (window.matchMedia('(max-device-width: 400px)').matches)
    {
        rem = 8;
    }

    const mobile = window.matchMedia('(max-device-width: 1200px)').matches; 

    

    const [selectProject,setSelectProject] = useState(1);
 
  
        useEffect(() => { 


            const onScroll = (e) => {   
                let windowHeight = window.screen.height; 
                let windowScroll = (windowHeight)/(projects.length);
                if(window.matchMedia('(max-device-width: 1000px)').matches) { 

                    if (window.matchMedia('(width > 639px)').matches)
                    {
                        windowScroll = 330;  
                        setSelectProject(Math.max(0,Math.min(projects.length-1,Math.floor((window.scrollY-100)/windowScroll))))
                        setDoubleProject(0);
                    }
                    else if (window.matchMedia('(width > 491px)').matches)
                    {                 
                        setDoubleProject(1); 
                        windowScroll = 220; 
                        setSelectProject(Math.max(0,Math.min(projects.length-1,Math.floor((window.scrollY-150)/windowScroll)*2))+1)
                    }
                    else 
                    {   setDoubleProject(0);
                        windowScroll = 250;
                        setSelectProject(Math.max(0,Math.min(projects.length-1,Math.floor((window.scrollY-100)/windowScroll))))
                        
                    } 
                }
            };
            window.scrollTo(0,1)

            setSelectProject(0);  
            window.addEventListener("scroll", onScroll); return () => {window.removeEventListener("scroll", onScroll); }
            
            
          }, []); 



    return (
 
        <AboutDiv>  
                    

                    <AboutMainTitle>PROJECTS</AboutMainTitle> 

                     <AboutProjectsDiv > 

                         {
                            projects.map((project,index)=>{
                                
                            const select = (selectProject === index || selectProject === index+doubleProject); 
                                return (
                                    <ProjectsPreviewDiv key={"project"+String(index)} className="mobile-preview"
                                        onMouseEnter={()=>{
                                            setSelectProject(index);
                                        }}
                                    >
                                    <Link to={"/project"+String(index)}>
                                        <ProjectWithDesc project={projects[index]} selected={select}/>  
                                        </Link>
                                    </ProjectsPreviewDiv>
                                
                                )
                            })
                        } 
                             
                     </AboutProjectsDiv> 

            <CoolPopup popup={popup} />
        </AboutDiv> 
    )
} 
/*<TechNamesButton
onClick={(event)=>{event.preventDefault();}}
>display all tech names</TechNamesButton>*/ 

const PopIconsImg = ({imgRef,src,onEnterHandler,onOutHandler,popElement}) =>{
    return (
        <TechIconsOrbDiv className="tech-orbs" >
            <TechIconsImg elemento={popElement} src={src} 
                onMouseEnter={(event)=>{
                    onEnterHandler(popElement,event.target);
                }} 
                onMouseOut={(onOutHandler)}
                className="tech-icons"
            /> 
    </TechIconsOrbDiv>
    )
}

//styling starts----------------------------------------
const GoodOrange = "rgb(255,110,0)" 

  
const AboutDiv = styled.div`  
width: 100%;  
max-width: 1400px; 
margin-top:2rem;  
color:white;  
` 

const AboutMainTitle = styled.div` 
width: 99%;
font-family:  zero4B, 'Courier New', Courier, monospace; 
border-bottom:0.4rem solid white ;
color:white;
margin-bottom: 0.75rem;


filter: drop-shadow(0.1rem 0rem 0 ${GoodOrange}) drop-shadow(0.25rem 0.25rem 0 ${GoodOrange});

font-size:2.4rem; 

@media (width > 640px)
{
    font-size:3rem; 
}
@media (width > 1200px)
{
    font-size:4rem; 
}
` 

const AboutProjectsDiv = styled.div` 
display: flex;
flex-direction: row; 
align-items: center;     
cursor: pointer; 
margin-top:1.5rem; 
margin-bottom:1.6rem;
padding-bottom:6rem;
min-width: 100%; 

flex-wrap: wrap;
max-width: 70%;
gap:2rem; 

justify-content: center;

@media (width > 639px)
{ 
    padding-bottom:3rem;
    margin-top:3.6rem; 
    max-width: 100%;
    gap:2rem;  
}
    
`

const ProjectsPreviewDiv = styled.div`
pointer-events: none;
 width:220px; 
 max-width: 220px;
 @media (width > 640px)
 {
    min-width:580px; 
    max-width:580px; 
 }
`

const TechIconsOrbDiv = styled.div` 
pointer-events: none; 
transition: all 200ms ease-out;  
background-color: rgba(12,12,12,0.3); 
border-radius: 50%;
display: flex;
flex-direction: row;
align-items: center;
vertical-align: middle;
justify-content: space-around; 
margin-bottom: 0.5rem;



&:hover{ 
    background-color: rgba(12,12,12);
    filter: drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(2px 0 0 ${GoodOrange}) drop-shadow(-2px 0 0 ${GoodOrange}) drop-shadow(0 2px 0 ${GoodOrange}) drop-shadow(0 -2px 0 ${GoodOrange});; 
} 
`
const TechIconsImg = styled.img`  
pointer-events: all; 
cursor: help; 
filter: brightness(0) invert(1) drop-shadow(0px 0 0 ${GoodOrange})  drop-shadow(0px 0 0 ${GoodOrange});

width: 3rem; 
min-height: 3rem;  
transition: all 200ms ease-out;
&:hover{  
    width: 3.25rem; 
    filter: brightness(0) invert(1)   drop-shadow(2px 0 0 ${GoodOrange}) drop-shadow(-2px 0 0 ${GoodOrange}) drop-shadow(0 2px 0 ${GoodOrange}) drop-shadow(0 -2px 0 ${GoodOrange});
}
`


export default Projects