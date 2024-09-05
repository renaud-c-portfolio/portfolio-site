
import { useEffect,useState } from "react"
import styled from "styled-components"
 
const ProjectThumbnail = ({project,selected}) =>{
  
    const [anim,setAnim] = useState(false);
    const _pngUrl = require("../assets/"+project.src);
    const _gifUrl = require("../assets/"+project.gif); 

     

    return (   
            <ProjectDiv onMouseOver={()=>{
           setAnim(true); }}
           onMouseOut={()=>{
            setAnim(false); }}
         
            {...( selected === true ? {className:"selected"}:{})}
            {...(anim && !selected ?{style:{...{"backgroundImage":`url(${_gifUrl})`}}}:{style:{...{"backgroundImage":`url(${_pngUrl})`}}  }  ) } > 
                <Loader style={{backgroundImage:`url(${_gifUrl}`}} />
            </ProjectDiv>  
    )
}
 
const ProjectDiv = styled.div`  
background-color: rgb(255,111,0);
background-repeat:no-repeat;
background-size: cover;
background-position: center;
font-family: superstar;
display: inline-block;
text-align: center;
vertical-align: top;
font-size: 2.4vh; 
border-radius: 10px;
width:14vh;
max-width:14vh;
height:14vh; 
max-height:14vh;
-webkit-text-stroke: 1.5px black;
box-shadow: rgb(255, 255, 255) 0px 0px 0px 0.2vh, rgb(255, 255, 255) 0px 0px 2px 0px;
transition: all ease-out 400ms;
z-index: 50;
&:hover{
    box-shadow: rgb(255, 111, 0) 0px 0px 0px 0.2vh, rgb(255, 255, 255) 0px 0px 2px 0px; 
}
&.selected{ 
    transition: all ease-in 200ms;
    width:31vh;
    max-width:31vh;
    height:18vh; 
    max-height:18vh; 
    box-shadow: rgb(255, 111, 0) 0px 0px 0px 0.5vh;
    z-index: 99;
}
`
const Loader = styled.div`
    visibility: hidden;
    height:0px;
    width: 0px;
`

export default ProjectThumbnail

