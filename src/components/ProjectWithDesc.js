
import { useEffect, useState } from "react"
import styled from "styled-components"
 
const ProjectWithDesc = ({project}) =>{
    const [anim,setAnim] = useState(false);
     
  
    const _pngUrl = require("../assets/"+project.src);
    const _gifUrl = require("../assets/"+project.gif); 

    return (  

        
        <BigProjectDiv id="bigId" onMouseOver={()=>{
           setAnim(true); }}
           onMouseOut={()=>{
            setAnim(false); }}
         > 

                <ProjectTitle> {project.name} </ProjectTitle>

                <ProjectDiv >
                    <ProjectDesc >
                        {project.desc} 

                        <ProjectTechs>
                        {project.tech.map((tech,techIndex)=>{

                                let dash = "";
                                if (techIndex > 0) {dash = " - ";}
                                return(
                                     <>{dash}{tech}</>
                                )
                                })}
                            
                        </ProjectTechs>

                        <ProjectFeatures>
                            <ul>
                             {project.features.map((feature,featureIndex) => {
                                            return(
                                                <li>{feature}</li>
                                            )
                                        })}
                            </ul>
                        </ProjectFeatures>
                    
                    </ProjectDesc> 
                        <LoaderImg 
                        src={anim? _gifUrl:_pngUrl}
                        /> 
                </ProjectDiv> 

         </BigProjectDiv>
            
    )
}
// {...(anim ?{src:{_pngUrl}}:{src:{_gifUrl}} )}
//<LoaderImg {...anim ?{src:{_pngUrl}}:{src:{_gifUrl}}} />
//<Loader  {...(anim ?{src:{...{"backgroundImage":`url(${_gifUrl})`}}}:{src:{...{"backgroundImage":`url(${_pngUrl})`}}  }  ) }   />

const GoodOrange = "rgb(255,110,0)";

const BigProjectDiv = styled.div`    
    cursor: pointer;
 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    pointer-events: all;
    background-color: #333333;
    border-radius: 1.2rem;
    position: relative;    
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 1rem;
    transition: 200ms ease-out; 
    border: 2px white solid;
    z-index: 1; 
    margin-bottom:3rem; 
    width: 100%; 
    max-width: 88vw;
    margin-left:auto;
    margin-right:auto;
    &:hover{ 
        scale: 1.1;
        z-index: 99;
         background-color: #444444; 
        filter: drop-shadow(-0.25rem 0 0 ${GoodOrange}) drop-shadow(0 0.25rem 0 ${GoodOrange}) drop-shadow(0.25rem -0.25rem 0 ${GoodOrange});
    } 
`

const ProjectTitle = styled.div`
position: absolute;
text-align: center;
width: 100%; 
top:0px;
font-family: superstar;
font-size: 3rem;
text-align: center;   
margin-top:-2rem; 
user-select: none;
filter: drop-shadow(-0.15rem 0 0 black) drop-shadow(0 0.15rem 0 black) drop-shadow(0.15rem -0.25rem 0 black);
`

const ProjectDesc = styled.div` 
font-family: tinos;
display: inline-block; 
font-size: 1.2rem;
vertical-align: top;    
height:100%;
min-width: calc((55%) - (0.5rem) - (2px)); 
padding:0.25rem; 
padding-top:1.5rem;
max-width: calc((55%) - (0.5rem)); 
`
const ProjectTechs = styled.div`
font-size: 1rem;
color:${GoodOrange};
font-family: sans-serif;
margin-top:0.3rem;
margin-bottom:0.3rem;
font-weight: bold;
`
const ProjectFeatures = styled.div`
    margin-left:1.5rem;
    font-size:1.2rem;
    text-align: left;
&li{ 
}

&::marker {
        color:${GoodOrange};
    }
 
`
 
const ProjectDiv = styled.div` 
display: inline-block;
text-align: center;
vertical-align: top;
font-size: 2.5rem; 
border-radius: 10px;   
display: flex;
`
const Loader = styled.div` 
background-repeat: no-repeat;
background-size: cover; 
min-width: 20rem;  
min-height: 20rem; 
`

const ProjectImgDiv = styled.div`
min-width: 50%;
min-height: 50%;
`

const LoaderImg = styled.img` 
min-width: 45%;
max-width: 45%; 
border-top-right-radius: 6%;
border-end-end-radius: 6%;
border-left: 2px white solid; 

`

export default ProjectWithDesc

