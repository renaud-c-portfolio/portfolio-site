import styled from "styled-components"
import { useState } from "react";
import { projects } from "../data/dataProjects"

import ProjectThumbnail from "./ProjectThumbnail";





const Projects = () =>{

    const [currentProject,setCurrentProject] = useState(projects[0]);
    const [selectedIndex,setSelectedIndex] = useState(0);
    const [hoverIndex,setHoverIndex] = useState(-1);

    const popupDescHandler = (index) =>{    
        setHoverIndex(index);
    }

    const popupDescOut = () =>{
        setHoverIndex(-1);
    }


    return (
        <>
        <ProjectsDiv>
            <ProjectsContentDiv>
                <ProjectsMainTitle>PROJECTS</ProjectsMainTitle> 
                    
                <ProjectsMainDiv> 
                        <ProjectPictureDiv>
                        <LilTitle>{currentProject.name}</LilTitle>
                            <SelectedAnimProject style={{backgroundImage:`url(${require("../assets/"+currentProject.gif)})`}}>
                                
                            </SelectedAnimProject>
                            <ProjectDescriptionText>{currentProject.desc}</ProjectDescriptionText>
                        </ProjectPictureDiv>

                            <ProjectsDescription>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <DetailsFeaturesDiv>
                                    <ProjectDetails> 
                                        {currentProject.details.map((detail,detailIndex) => {
                                            return(
                                                <DetailParagraph>{detail}</DetailParagraph>
                                            )
                                        })}
                                    </ProjectDetails>
                                    <ProjectFeatures>
                                        <ul>
                                        {currentProject.features.map((feature,featureIndex) => {
                                            return(
                                                <FeaturesLi>{feature}</FeaturesLi>
                                            )
                                        })}
                                        </ul>
                                    </ProjectFeatures>
                                </DetailsFeaturesDiv>
                            </ProjectsDescription> 

                    <div style={{flex:"1"}}></div>
                    
                </ProjectsMainDiv>
             </ProjectsContentDiv>
             <ThumbnailGrid>
                        {
                            projects.map((project,index)=>{

                                return ( 
                                    <MiniProjectDiv
  
                                    {...( selectedIndex===index ? {className:"selected"}:{})}
                                    key={"key"+String(index)} onClick={()=>{

                                        setCurrentProject(project);
                                        setSelectedIndex(index);
                                        window.scrollTo(0,0);

                                         }
                                        
                                    }> 
                                    <MiniProjectsTitle {...( selectedIndex===index ? {className:"selected"}:{})}>
                                         {project.name}

                                    </MiniProjectsTitle>
                                    
                                    <ProjectThumbAndTechsDiv>

                                        <MiniProjectsThumbnail> 
                                            <ProjectThumbnail selected={selectedIndex===index}  project={project}></ProjectThumbnail> 
                                        </MiniProjectsThumbnail> 
                                            
                                            <MiniProjectTechs {...( selectedIndex===index ? {className:"selected"}:{})}>   
                                            <ul>
                                            {project.tech.map((tech,techIndex)=>{

                                                return(
                                                    <li>{tech}</li>
                                                )
                                            })}
                                            </ul>
                                        </MiniProjectTechs> 
                                        </ProjectThumbAndTechsDiv>
                                    </MiniProjectDiv> 
                                )
                            })
                        }
                    </ThumbnailGrid>
                {hoverIndex >= 0 && (
                    <>
                    </>
                )}
        </ProjectsDiv>
        </>
    )
}

export default Projects


const GoodOrange = "rgb(255,110,0)"

const HoverPopupDescDiv = styled.div`
    background: ${GoodOrange}; 
`

const ProjectDescriptionText = styled.p`
margin-top:0.8vh;
font-size:3vh;

`

const ProjectPictureDiv = styled.div` 
margin-top:0px;
display: flex;
flex-direction: column;
justify-content: flex-start;
max-width:40vh; 
min-height:55vh;
`

const LilTitle = styled.h3`
font-family: superstar;
font-size:4.5vh;
filter: drop-shadow(2px 0 0 ${GoodOrange})  drop-shadow(2px 2px 0 ${GoodOrange});
` 
const DetailsFeaturesDiv = styled.div`
display: flex;
flex-direction: row;
gap:2vw;
`

const ProjectDetails = styled.div`
background: rgba(23,23,23);
flex: 5;
font-size: 2.6vh;     
overflow-y: scroll; 
scrollbar-color: rgb(255,110,0) black;
scrollbar-width: thin;    
padding:1vh;  
max-height:50vh;
min-height:50vh;
`
const DetailParagraph = styled.p`
margin-bottom: 1.5vh;
`

const ProjectFeatures = styled.div` 
flex: 3; 
`
const FeaturesLi = styled.li` 
    font-size: 2.7vh; 
    font-family: '04b03';
    &::marker {
        color:${GoodOrange};
    }
`

const SelectedAnimProject = styled.div`
    flex:16;
    border-radius: 5px;
    width:40vh;
    max-width:40vh;
    min-height:40vh; 
    max-height:40vh;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px, rgb(255, 110, 0) 0px 0px 0px 5px;
`

const ProjectsDiv = styled.div`    
margin-top:2rem; 
color:white;  
max-width: 1400px; 
background: red;

`



const ProjectsContentDiv = styled.div` 
color:white; 
flex:40; 
z-index: 3;   
`
const ProjectsMainDiv = styled.div` 
position: relative; 
margin-top:0.8rem;
display:flex;
flex-direction:row;
gap:3vh;
min-height: 59vh; 
justify-content: space-between; 
`
const ProjectsDescription = styled.div`
flex:10;  
font-size:3vh;
`
const ThumbnailGrid = styled.div`
background: rgba(0,0,0,0.3);
border-radius:1vh;
padding-top:3vh;
padding-left:1vh;
padding-right:1vh;
padding-bottom:2vh;
margin-top:2vh;
flex:10;
min-height:71vh;
max-height:71vh;
min-width: 32vh; 
display:grid; 
overflow-x: hidden;
overflow-y: scroll; 
scrollbar-color: rgb(255,110,0) black;
scrollbar-width: thin;      
vertical-align: middle; 
display: flex;
flex-direction: column; 
justify-content: space-between;
align-items: center;
gap:3vh; 
`
const MiniProjectDiv = styled.div`
background: rgba(23,23,23,0.2);
position: relative;
display: flex;
flex-direction: column;
justify-content: space-around;
cursor:pointer;
transition: 200ms ease-in;
width: fit-content;
height: fit-content;
min-width: 27vh;
min-height: 18vh;  
border-radius: 0.8vh;
padding:0.1vh;
&:hover{ 
    background: rgba(0,0,0,0.55);
    box-shadow: rgba(255, 111, 0, 0.5) 1px 2px 1px 5px, rgba(255, 111, 0, 0.5) 0px 2px 26px 5px; 
}
&.selected{ 
    min-width:31vh;
    max-width:31vh;
    min-height:22vh; 
    max-height:28vh; 
    background: yellow;
    box-shadow: yellow 0px 0px 0px 1vh;
    padding-bottom:0.4vh;
}
`

const ProjectThumbAndTechsDiv = styled.div`
display: flex;
flex-direction:row;
align-items: center;
justify-content: stretch;
gap:2vh;

`

const MiniProjectsTitle = styled.div`
    text-align: center;
    font-size: 3vh;
    font-family: superstar;
    transition: all ease-in 250ms;
&.selected{
    font-size: 3.6vh;
    color: rgb(23,23,23);
}

`
const MiniProjectsThumbnail = styled.div` 

`
const MiniProjectTechs = styled.div`   
    opacity: 1;
    font-size:2vh;
    padding:1vh;
    max-width:5vh;
    transition: all ease-in 150ms;
    &.selected{ 
        transition: all ease-out 150ms;
        max-width:0.1vh;
        opacity: 0;
    }
`


const ProjectsMainTitle = styled.div`  
font-family:  zero4B, 'Courier New', Courier, monospace;
width: 90%;
border-bottom:0.4rem solid white ;
color:white;
font-size:4rem; 
filter: drop-shadow(0.1rem 0rem 0 ${GoodOrange}) drop-shadow(0.25rem 0.25rem 0 ${GoodOrange});
`