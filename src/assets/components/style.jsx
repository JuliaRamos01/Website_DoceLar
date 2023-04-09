import styled, { createGlobalStyle } from "styled-components";
/* import { Inter } from "./Fonts"; */

export const GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap'); */
}
/* @font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
} */
`;

export const Header = styled.header`
display: flex;
height: 13vh;
position: fixed;

div {
    display: flex;
    width: 15vw;
    align-items: center;
    justify-content: space-around;
    background-color: white;
}

h2 {
    font-size: 2em;
    color: #f2b705;
    font-family: 'Inter', 800; 
}

img {
    width: 3.5vw;
}
`;

export const NavBox = styled.nav`
display: flex;
justify-content: flex-end;
width: 84vw;
background-color: rgba(0, 0, 0, 0.3);

ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    width: 36vw;
    font-family: 'Inter', 800; 
    color: #F28705;
    font-weight: 500;
}

li{
    cursor: pointer;
}
`;

export const Carrossel = styled.section`
/* border: blue 5px solid; */
`;

export const SectionCarrossel = styled.div`
display: flex;
/* border: red 3px solid;  */
align-items: center;
width: 100vw;

img{
width: 100%;
height: 60vw;
object-fit: cover;
}
`;

export const Text = styled.div`
/* border: purple 3px solid; */
position: absolute;
display: flex;
flex-direction: column;
width: 65vw;
height: 30vh;
align-items: center;
h1{
    color: white;
    font-size: 40px;
}
button{
    background-color: #F28705;
    border: none;
    color: white;
    font-size: 18px;
    width: 13vw;
    height: 6vh;
    border-radius: 20px;
    margin-top: 30px;
}
`;

export const Buttons = styled.div`
/* border: blue 4px solid; */
position: absolute;
width: 100vw;
height: 30vh;
display: flex;
justify-content: space-between;
align-items: center;
`;


export const ButtonEsq = styled.button`
width: 4vw;
height: 8vh;
/* position: absolute; */
background-color: #F2B705;
border: none;
/* border: purple 3px solid; */

img{
    width: 2vw;
    height: 4vh;
}
`;

export const ButtonDir = styled.button`
width: 4vw;
height: 8vh;
/* position: absolute; */
background-color: #F2B705;
border: none;
/* border: magenta 3px solid; */
img{
    width: 2vw;
    height: 4vh;
}
`;


