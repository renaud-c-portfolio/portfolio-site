
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

const backUrl = require("../assets/back-button.png");


const ProjectDetails = ({project}) =>{ 

    const detailUrls = []; 
    for(let i=0;i<project.detailsSrc.length;i++)
    {
        const newUrl = require("../assets/"+project.detailsSrc[i]);
        detailUrls.push(newUrl);
        
    } 
    console.log(detailUrls);
 

    return (  

        
        <MainDetailsDiv> 
            <Link to="/projects">
                <BackButton>
                    back

                </BackButton></Link>

                <DetailsMainTitle> {project.name} </DetailsMainTitle>
                {
                            project.details.map((detail,index)=>{
                                const innerHtml = {__html: detail}
 
                                    return (

                                        <DetailFlexDiv>
                                           <DetailsParagraph dangerouslySetInnerHTML={innerHtml}></DetailsParagraph> 
                                           {detailUrls[index].indexOf(".mp4") != -1 ? 
                                            <DetailsVideo preload="metadata" autoPlay muted loop controls>
                                                <source src={detailUrls[index]} type="video/mp4" />
                                            </DetailsVideo>: 
                                            <DetailsImage
                                           src={detailUrls[index]}
                                           ></DetailsImage>} 
                                        </DetailFlexDiv>
                                   
                                   ) 
                                
                            })
                        } 
 

         </MainDetailsDiv>
            
    )
} 

const GoodOrange = "rgb(255,110,0)";

const MainDetailsDiv = styled.div`      
width: 100%;  
max-width: 1400px; 
margin-top:5rem;  
color:white;   
min-height: calc(100vh - 60px - 7.5rem);

`

const BackButton = styled.button`
font-family: zero4b;
position: absolute;
color:black;
max-width: 12rem;  
z-index: 99;
background:white;
background-image: url(${backUrl});
background-position-x: 5px;
background-repeat:no-repeat;
background-size:contain;
border-top-right-radius: 15%;
padding-left:3rem;
padding-top: 1rem;
padding-bottom: 1rem;
border:none;
z-index: 99;
pointer-events: all;
cursor: pointer;

font-size:1rem;
margin-top:-1rem;
@media (width > 640px)
    {
        font-size:2.5rem;
        margin-top:-1.2rem;
    }
@media (width > 1200px)
    {
        font-size:3rem;
        margin-top:-0.5rem;
    }

`

const DetailsMainTitle = styled.div` 
text-align: right;
width: 100%;
font-family:  zero4B, 'Courier New', Courier, monospace; 
border-bottom:0.4rem solid white ;
color:white;
filter: drop-shadow(0.1rem 0rem 0 ${GoodOrange}) drop-shadow(0.25rem 0.25rem 0 ${GoodOrange});

font-size:1.6rem; 
margin-bottom: 1rem;
@media (width > 640px)
    {
        margin-bottom: 1.5rem;
        font-size:3rem;
    }
@media (width > 1200px)
    {
        margin-bottom: 3.5rem;
        font-size:4rem;
    }
`

const DetailFlexDiv = styled.div`
display: flex;
align-items: center; 
margin-bottom:5rem;
gap:2rem;
flex-direction: column;
@media (width > 1200px)
    {
        
        flex-direction: row;
        &:nth-of-type(even) div {
            order: +1; 
            }

    }
`

const DetailsParagraph = styled.div`
flex: 2;
    & a{
        text-decoration: underline;
        color:${GoodOrange};
        &:hover{
            color:yellow;
        }
    }
    & ul{
        margin-left:2rem;
    }  
margin-bottom:2rem;
font-size:1.4rem;
@media (width > 639px)
    { 
        font-size:1.6rem;
    }
`

const DetailsVideo = styled.video` 
min-height: 20rem;  
max-height:45vh;
object-fit: contain;  
max-width:80%;
@media (width > 1200px)
    {
        max-width:55%;
        
    }
filter: drop-shadow(4px 0 0 white) 
        drop-shadow(0 4px 0 white)
        drop-shadow(-4px 0 0 white)
        drop-shadow(0 -4px 0 white);
`

const DetailsImage = styled.img` 
flex: 2;
min-height: 20rem;  
max-height:45vh;
object-fit: contain;   
max-width:80%;
@media (width > 1200px)
    {
        max-width:55%;
    }

filter: drop-shadow(4px 0 0 white) 
        drop-shadow(0 4px 0 white)
        drop-shadow(-4px 0 0 white)
        drop-shadow(0 -4px 0 white);
`

 
export default ProjectDetails;

