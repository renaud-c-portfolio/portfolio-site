import { createGlobalStyle } from 'styled-components';
import zero4Burl from './assets/zero4B_03_.ttf';
import superstarUrl from './assets/superstar.ttf';
import tinosUrl from './assets/Tinos-Regular.ttf';
const GoodOrange = "rgb(255,110,0)";


export default createGlobalStyle` 


html, body {
    max-width: 100vw;
    font-family: 'tinos', Arial, serif;
  }

html {
  font-size:16px;
}


  

@media only screen and (min-device-width: 280px) {
  html {
    font-size:8px; 
  }
  .mobile-wrap{
    flex-wrap: wrap;
    justify-content:flex-start; 
    align-items: flex-start;
    max-width: 70%;
    gap:5px;
  }
  .tech-icons{
    width: 4rem;  
    transition: all 200ms ease-out;
    &:hover{  
        width: 4.5rem; 
        filter: brightness(0) invert(1)   drop-shadow(2px 0 0 ${GoodOrange}) drop-shadow(-2px 0 0 ${GoodOrange}) drop-shadow(0 2px 0 ${GoodOrange}) drop-shadow(0 -2px 0 ${GoodOrange});
    }

  }
  .tech-orbs{ 
    width: 5rem;  
    height:5rem; 
    padding:1rem;
  }
  .portrait{ 
    min-width: 12rem;
    min-height:18rem;
  }
}
@media only screen and (min-device-width: 1000px) {
  html { 
    font-size:16px; 
  }
  .mobile-wrap{ 
    flex-wrap: nowrap;
    justify-content:center;
    align-items:center;
    max-width: 100%;
  }
  .mobile-content{
    min-width:1200px;
  }
  .tech-icons{
    width: 3rem; 
    min-height: 3rem;  
    transition: all 200ms ease-out;
    &:hover{  
        width: 3.25rem; 
        filter: brightness(0) invert(1)   drop-shadow(2px 0 0 ${GoodOrange}) drop-shadow(-2px 0 0 ${GoodOrange}) drop-shadow(0 2px 0 ${GoodOrange}) drop-shadow(0 -2px 0 ${GoodOrange});
    }
  }
  .tech-orbs{ 
    width: 4rem;  
    height:4rem; 
    padding:1rem;
  }
  .portrait{ 
    min-width: 14rem;
    min-height:21rem;
  }
}
 

  @font-face {
  font-family: 'zero4B';
  src: url(${zero4Burl}) format('truetype');
  /* other formats include: 'woff2', 'truetype, 'opentype',
                            'embedded-opentype', and 'svg' */
}

@font-face {
  font-family: 'superstar';
  src: url(${superstarUrl}) format('truetype');
  /* other formats include: 'woff2', 'truetype, 'opentype',
                            'embedded-opentype', and 'svg' */
}

@font-face {
  font-family: 'tinos';
  src: url(${tinosUrl}) format('truetype');
  /* other formats include: 'woff2', 'truetype, 'opentype',
                            'embedded-opentype', and 'svg' */
}
 

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    text-decoration: none;
    color:inherit;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul { 
  }
  blockquote, q { 
  }
  blockquote:before, blockquote:after,
  q:before, q:after { 
  }

  body {   
    background-repeat: repeat-x;
    background-image: linear-gradient(to right, RGB(31, 30, 30), RGB(31, 30, 30)), linear-gradient(to right, RGB(23, 21, 21), RGB(23, 21, 21));
    background-position: 0 0, 0 100vh;
    background-size: 100% 100vh, 100% 999vh;
  }

  h1 {
    font-size:3rem; 
  }

`;
