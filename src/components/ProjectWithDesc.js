
import { useEffect, useState } from "react"
import styled from "styled-components"
 
const ProjectWithDesc = ({project,selected}) =>{
    const [anim,setAnim] = useState(false);
    //<LoaderImg  src={_pngUrl} style={anim? {opacity:0}:{}}
    ///>
  
    const pngUrl = require("../assets/"+project.src); 
    const vidUrl = require("../assets/"+project.vid); 



 
    return (  

        
        <BigProjectDiv className={selected? "mouse-over":""}
         > 

                <ProjectTitle> 
                {project.name}   
                </ProjectTitle>

                
                <ProjectDiv >
                        <LoaderDiv style={{backgroundImage:"url("+pngUrl+")"}} > 

                            {selected? 
                                <LoaderVideo preload="metadata" loop muted autoPlay={selected? "true":""} className={selected? "":"hidden"}>
                                        <source src={vidUrl} type="video/mp4" />
                                </LoaderVideo>       
                                :
                                <LoaderVideo loop muted autoPlay className={selected? "":"hidden"}>
                                    <source src={vidUrl} type="video/mp4" />
                                </LoaderVideo>
                            } 


                            {project.special != "" ?
                                                
                                                <ProjectSpecial>
                                                </ProjectSpecial> 
                                                
                                                :<></>}
                        </LoaderDiv>
                         
                    <ProjectDesc className={selected? "mouse-over":""} > 
                        <ProjectPadding>
                            <ProjectShortDesc>
                                {project.desc} 
                            </ProjectShortDesc>

                            <ProjectFeatures dangerouslySetInnerHTML={{__html:project.longDesc}}> 

                            </ProjectFeatures>
                        </ProjectPadding>
                    
                    </ProjectDesc> 
                    
                </ProjectDiv> 
         </BigProjectDiv>
            
    )
}
 
const GoodOrange = "rgb(255,110,0)";

const BigProjectDiv = styled.div`    
 
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
    margin-bottom:1rem; 
    width: 100%;  
    max-width: 88vw;   
    &.mouse-over{ 
        scale: 1.08;
        z-index: 99;
        background-color: #444444; 
        @media (width < 1200px)
        {
            filter: drop-shadow(-0.25rem 0 0 ${GoodOrange}) drop-shadow(0 0.25rem 0 ${GoodOrange}) drop-shadow(0.25rem -0.25rem 0 ${GoodOrange});
        }
    } 
    
    &:hover {
        scale: 1.10;
        filter: drop-shadow(-0.25rem 0 0 ${GoodOrange}) drop-shadow(0 0.25rem 0 ${GoodOrange}) drop-shadow(0.25rem -0.25rem 0 ${GoodOrange});
    }
    
    margin-top:1rem;
    
    @media (width > 640px)
    {
        margin-top: 0;
    }
    
`


const ProjectDiv = styled.div` 
min-width: 100%;
text-align: center;
vertical-align: top;
font-size: 2.5rem;  
display: flex;   
justify-content: space-between;
align-items: center;
 flex-direction: column ;

 @media (width > 640px)
 {
    flex-direction: row;
 }
` 

const ProjectTitle = styled.div`
position: absolute;
text-align: center;  
top:0px;
font-family: superstar;
text-align: center;   
user-select: none;
filter: drop-shadow(-0.15rem 0 0 black) drop-shadow(0 0.15rem 0 black) drop-shadow(0.15rem -0.25rem 0 black) 
drop-shadow(-0.35rem 0 0 rgba(0,0,0,0.35)) drop-shadow(0 0.35rem 0 rgba(0,0,0,0.35)) drop-shadow(0.1rem 0.15rem 0 rgba(0,0,0,0.35));

font-size:1.5rem;
margin-top:-1.2rem;  
@media (width > 639px)
{
    font-size: 3rem;
    margin-top:-2rem;  
}
@media (width > 1200px)
{ 
    padding-top:0;
}

 
`

const ProjectSpecial = styled.div`
position: absolute;
color:${GoodOrange};
text-align: left;  
left:1rem;
font-family: superstar;
text-align: center;   
user-select: none;
font-size: 2.8rem;  
    filter: drop-shadow(-0.15rem 0 0 white) drop-shadow(0 0.15rem 0 white) drop-shadow(0.15rem -0.25rem 0 white) drop-shadow(-0.15rem 0 0 black) drop-shadow(0 0.15rem 0 black) drop-shadow(0.15rem -0.25rem 0 black); 

`

const ProjectPadding = styled.div`  
 
`

const ProjectDesc = styled.div` 
font-family: 'roboto'; 
min-width: calc((50%) - (0.5rem) - (2px)); 
border-radius: 20px;

padding:0;  
height:0px;
visibility: hidden;
transition: all 200ms ease-in;
opacity: 0;
&.mouse-over {
    visibility: visible;
    height:166px;
    opacity: 1;
}
@media (width > 639px)
{ 
    opacity: 1;
    visibility: visible;
    max-width: calc((50%) - (0.5rem));  
    padding:0.25rem;  
    height: 17.5rem;
        &.mouse-over {
        visibility: visible;
        height: 17.5rem;
    }
}
`

const ProjectShortDesc = styled.div`
    width:100%;
    color:${GoodOrange};
    font-family: 'roboto-bold';  
    margin-bottom:0.5rem;
    font-weight: bold; 
    margin-top:-0.6rem;
    padding-top:1rem;

    font-size:1.2rem;
    @media (width > 640px)
    {
        font-size: 1.9rem;
        margin-top:1.5rem;
        padding-top:1rem;

    } 
`
//1.7rem;
const ProjectFeatures = styled.div`  
    text-align: left;     
    margin-right:0.75rem;
    font-size:1rem;
    width:calc(100%-1rem);
    padding-left:1rem; 
    @media (width > 640px)
    {
        font-size:1.3rem;
    }

&::marker {
        color:${GoodOrange};
    }
& p{
    margin-bottom: 0.25rem;
}
 
`
 


const LoaderDiv = styled.div`     
margin:0;
border:0;
padding:0;   
background-size: cover;
border-top-left-radius: 6%;
border-top-right-radius: 6%;
 
max-width: 220px;
height:220px;
max-height: 220px;
box-shadow: rgba(0, 0, 0,0.25) 0px 5px, rgba(0, 0, 0,0.20) 0px 10px, rgba(0, 0, 0,0.15) 0px 15px, rgba(0, 0, 0,0.10) 0px 20px, rgba(0, 0, 0,0.05) 0px 25px;

@media (width > 640px)
{  
border-end-start-radius: 6%;
border-top-right-radius: 0;
    box-shadow: rgba(0, 0, 0,0.25) 5px 0px, rgba(0, 0, 0,0.20) 10px 0px, rgba(0, 0, 0,0.15) 15px 0px, rgba(0, 0, 0,0.10) 20px 0px, rgba(0, 0, 0,0.05) 25px 0px;
    width:300px;
    max-width: 300px;
    height:300px;
    max-height: 300px;
}
` 


const LoaderVideo = styled.video`   
border-top-left-radius: 6%;
border-top-right-radius: 6%;
object-fit:cover;

&.hidden{
    opacity: 0;
} 
max-width: 100%;
height:220px;
@media (width > 639px)
{ 
    border-end-start-radius: 6%;   
    border-top-right-radius: 0;
    width:300px;
    max-width:300px;
    height:300px;
    max-height:300px;
}
` 


export default ProjectWithDesc

