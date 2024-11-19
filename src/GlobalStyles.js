import { createGlobalStyle } from 'styled-components';
import zero4Burl from './assets/zero4B_03_.ttf';
import superstarUrl from './assets/superstar.ttf';
import tinosUrl from './assets/Tinos-Regular.ttf';
import robotoUrl from './assets/Roboto-Regular.ttf';
import robotoBoldUrl from './assets/Roboto-Bold.ttf';
const GoodOrange = "rgb(255,110,0)";






export default createGlobalStyle`  

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
  font-family: 'roboto-bold';
  src: url(${robotoBoldUrl}) format('truetype');
  /* other formats include: 'woff2', 'truetype, 'opentype',
                            'embedded-opentype', and 'svg' */
}

@font-face {
  font-family: 'roboto';
  src: url(${robotoUrl}) format('truetype');
  /* other formats include: 'woff2', 'truetype, 'opentype',
                            'embedded-opentype', and 'svg' */
}

 
html { 
  font-family: 'roboto';
  position: relative; 
  min-height: 100%; 
  scrollbar-color: ${GoodOrange} black;  
  width:100vw;
  background: #131313;

  font-size:12px;
  @media (width > 320px)
  {
    font-size:16px;
  } 
  @media (width > 640px)
  {
   font-size:16px;
  }
  @media (width > 800px)
  {
   font-size:16px;
  }
  @media (width > 1200px)
  {
   font-size: 16px;
  }
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

  h1 {
    font-size:3rem; 
  }

  body {
    position: relative;
    min-width: 95vw;
    max-width: 100vw;
    font-family: 'roboto', Arial, serif;
     
    margin: 0;
    overflow-x: hidden;
  
    max-height: 100%; 
     
      
  } 

  body::-webkit-scrollbar-track {
    background: black;        /* color of the tracking area */
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${GoodOrange};    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid black;  /* creates padding around scroll thumb */
  }

`;
