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



import { useEffect, useState, useRef } from "react"
import { projects } from "../data/dataProjects"

import ProjectWithDesc from "./ProjectWithDesc"

const About = () => {

    const [popup,setPopup] = useState([false,0,0,<></>]); 
    const [anim,setAnim] = useState(false);

    const imgRef = useRef();
     
    const popupHandler = (elemento,target) =>{   
        const _pos = target.getBoundingClientRect(); 
        setPopup([true,`${Math.floor(_pos.left+_pos.width/2)}px`,`${Math.floor(_pos.bottom+15+ window.scrollY)}px`,elemento]);
    }

    const popupOut = () =>{
        setPopup([false,0,0,<></>]);
    }

    useEffect(
        ()=>{setAnim(true);
        setTimeout(()=>{
            setAnim(false);
        },2000)
        }
        ,[])

    return (
 
        <AboutDiv> 
         
                <OneBigDivDeco {...(anim ?{className:"anim"}:{})}>
                     <AbsoluteRelative> 
                         <ArrowDecoSide/> 
                         <ArrowDecoSecond/>
                        <ArrowDecoSideTwo/>
                        <ArrowDeco> 
                            <ArrowImg/>
                         </ArrowDeco>
                    </AbsoluteRelative> 
                 </OneBigDivDeco>
                  


            <AboutContentDiv>
                
                <AboutFirstFlexLayer> 
                
                    <AboutInfoNextToPortrait>
                        <AboutMainTitle>ABOUT</AboutMainTitle>
                        <AboutSubTitle>Full stack web developper specialized in user interactions</AboutSubTitle>
                        <AboutTechnologiesDiv className="mobile-wrap" >  
                            <PopIconsImg onEnterHandler={popupHandler} popElement={<span>Javascript</span>} onOutHandler={popupOut} src={javaScrUrl}  /> 
                            <PopIconsImg onEnterHandler={popupHandler} popElement={<span>Typescript</span>} onOutHandler={popupOut} src={typeScrUrl}   /> 
                            <PopIconsImg onEnterHandler={popupHandler} popElement={<span>HTML5</span>} onOutHandler={popupOut} src={htmlUrl}  /> 
                            <PopIconsImg onEnterHandler={popupHandler} popElement={<span>Canvas</span>} onOutHandler={popupOut} src={canvasUrl}   /> 
                            <PopIconsImg onEnterHandler={popupHandler} popElement={<span>Node</span>} onOutHandler={popupOut} src={nodeUrl}   /> 
                            <PopIconsImg onEnterHandler={popupHandler} popElement={<span>React</span>} onOutHandler={popupOut} src={reactUrl}   /> 
                            <PopIconsImg onEnterHandler={popupHandler} popElement={<span>MongoDB</span>} onOutHandler={popupOut} src={mongoUrl}  /> 
                            <PopIconsImg onEnterHandler={popupHandler} popElement={<span>Git</span>} onOutHandler={popupOut} src={gitUrl}  />  
                            
                            
                        </AboutTechnologiesDiv> 
                            
                     
                        <AboutSubTitle >Most recent projects:</AboutSubTitle>

                        </AboutInfoNextToPortrait>
                        
                        <AboutPortrait className="portrait">  
                        </AboutPortrait>  

                        
                     </AboutFirstFlexLayer>


                     <AboutProjectsDiv className="mobile-wrap"> 
                            <ProjectsPreviewDiv>
                                <ProjectWithDesc project={projects[0]}/>  
                            </ProjectsPreviewDiv>
                            <ProjectsPreviewDiv>
                                <ProjectWithDesc project={projects[1]}/>  
                            </ProjectsPreviewDiv>  
                     </AboutProjectsDiv>
            </AboutContentDiv>
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

const TechNamesButton = styled.button`
    margin-left:3vw;
    color:white;
    background: black; 
    border:none;
    cursor:help;
    &:hover{
        color:${GoodOrange};
    } 
    &:active{
        outline: inherit;
        border:inherit;
    }
`


  
const AboutDiv = styled.div`  
width: 100%;  
max-width: 1400px; 
margin-top:2rem;  
color:white; 
`
const AbsoluteRelative = styled.div`
position: sticky;
max-width:1px;
max-height: 1px;
`

const OneBigDivDeco = styled.div`
pointer-events: none;
position: absolute; 
height:0px; 
opacity: 0; 
transition: 2000ms opacity ease-in-out;
filter: drop-shadow(4px 0 0 black) 
        drop-shadow(0 4px 0 black)
        drop-shadow(-4px 0 0 black)
        drop-shadow(0 -4px 0 black);
        z-index: 1;
&.anim{
    opacity: 1;
}
`

 
const ArrowDecoSide = styled.div`

position: relative;
left:11.6rem;
top:-4.6rem;
width: 1.5em;
height: 3rem;
background-color: white;
`

const ArrowDecoSecond = styled.div`
    position: relative;
    left:11.6rem;
    top:-4.6rem;
    width:42rem;
    height:1.5rem;
    background-color: white;  

`
const ArrowDecoSideTwo = styled.div`

position: relative;
left:53.6rem;
top:-6.1rem;
width: 1.5rem;
height: 9rem;
background-color: white;
`


const ArrowDeco = styled.div`
    position: relative;
    left: 53.6rem;
    top: -6.1rem;
    width:7.5rem;
    height:1.5rem;
    background-color: white; 

`
const ArrowImg = styled.div` 
background-image: url(${arrowUrl});
background-size:contain;
background-repeat: no-repeat;
image-rendering: pixelated; 
min-width: 4rem;
max-width: 4rem;
min-height: 4rem;
max-width: 4rem;
position: relative;
 top: -1.1rem;
 left:92%; 
`

const AboutFirstFlexLayer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row; 
align-items: flex-start;
justify-content: space-between;
`

const AboutInfoNextToPortrait = styled.div`     
display: flex;
flex-direction: column;
justify-content: space-between; 
min-height: 100%;
`

const AboutContentDiv = styled.div` 
width: 100%;
min-height:100%;
color:white; 
z-index: 3; 
display:flex;
flex-direction: column;     
` 

const AboutPortrait = styled.div`  
    position: sticky;
    margin-top: 0.5rem;
    background-image: url(${portraitUrl});
    background-size:contain;
    background-repeat: no-repeat;  
    border-radius: 10px; 
    box-shadow: rgba(255, 60, 33,0.5) 0.5rem 0.5rem, rgba(255, 60, 33,0.4) 1rem 1rem, rgba(255, 60, 33,0.3) 1.5rem 1.5rem, rgba(255, 60, 33,0.2) 2rem 2rem, rgba(255, 60, 33,0.1) 2.5rem 2.5rem,
    rgba(255, 60, 33,0.5) -0.2rem -0.2rem, rgba(255, 60, 33,0.4) -0.4rem -0.4rem, rgba(255, 60, 33,0.3) -0.6rem -0.6rem, rgba(255, 60, 33,0.2) -0.8rem -0.8rem, rgba(255, 60, 33,0.1) -1.0rem -1.0rem;
`

const AboutMainTitle = styled.div` 
max-width: 90%;
font-family:  zero4B, 'Courier New', Courier, monospace; 
border-bottom:0.4rem solid white ;
color:white;
font-size:4rem; 
filter: drop-shadow(0.1rem 0rem 0 ${GoodOrange}) drop-shadow(0.25rem 0.25rem 0 ${GoodOrange});
`
const AboutSubTitle = styled.div`
margin-top:0.5rem;
font-size:2rem;
margin-right:2rem;
`

const AboutProjectsDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center; 
pointer-events: none;  
margin-top:2.6rem; 
gap:2rem; 
min-width: 100%;
 
`
const ProjectsPreviewDiv = styled.div` 
width: 100%;
pointer-events: none; 
`
const AboutTechnologiesDiv = styled.div`   
min-width: 96%;  
margin:2rem 0rem 1rem 0;    
display: flex;
flex-direction: row;   
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;    
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


export default About