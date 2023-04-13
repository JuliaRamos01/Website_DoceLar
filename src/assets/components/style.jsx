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

/* Navbar starts */

export const Header = styled.header`
display: flex;
height: 13vh;
position: fixed;
z-index: 1;

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

/* Navbar ends */

/* Carrossel starts */

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

/* Carrossel ends */

/* Products starts */

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 300px;
height: 400px;
margin: 0 20px 20px 0;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
width: 100%;
height: 60%;
object-fit: cover;
border-radius: 10px 10px 0 0;
`;

export const Description = styled.p`
margin: 10px;
text-align: center;
`;

export const Button = styled.button`
padding: 10px;
background-color: #0077b6;
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;
`;

export const Section = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 20px;
`;

/* Products ends */

/* Space test starts */

export const DivSpace = styled.div`
height: 70vh;
border: green 4px solid;
`;
/* Space text ends */

/* Places starts */
export const PlaceSection = styled.div`
height: 70vh;
display: flex;
align-items: center;
/* border: blue 5px solid; */
background-color: #8A493D;
`;

export const Placecards = styled.div`
display: flex;
height: 65vh;
width: 100vw;
justify-content: space-evenly;
/* border: pink 4px solid; */
`;

export const Placecardone = styled.div`
height: 65vh;
width: 27vw;
/* border: yellow 3px solid; */
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
text-align: center;
img{
    width: 40vh;
}
p{
    color: white;
}
h3{
    color: white;
}
`;

export const Placecardtwo = styled.div`
height: 65vh;
width: 27vw;
/* border: purple 3px solid; */
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
text-align: center;
img{
    width: 40vh;
}
p{
    color: white;
}
h3{
    color: white;
}
`;

export const Placecardthree = styled.div`
height: 65vh;
width: 27vw;
/* border: aqua 3px solid; */
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
text-align: center;
img{
    width: 40vh;
}
p{
    color: white;
}
h3{
    color: white;
}
`;

/* Places ends */

/* Contact starts */
export const ContactSection = styled.div`
height: 80vh;
border: yellow 3px solid;
display: flex;
align-items: center;
justify-content: center;
`;

export const ContactBox = styled.div`
height: 50vh;
width: 70vw;
border: blue 3px solid;
display: flex;
flex-direction: column;
align-items: center;
h1{
    color: #F2B705;
    text-align: center;
}
button{
    background-color: #F2B705;
    color: white;
    border: none;
    height: 5vh;
    width: 15vw;
    border-radius: 20px;
}
`;

export const Contactinputs = styled.div`
border: purple 2px solid;
`;

/* Contact ends */