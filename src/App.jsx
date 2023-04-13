import React from "react";
import * as S from "./assets/components/style";
import Header from "./assets/components/Header";
import Carrossel from "./assets/components/Carrossel";
/* import Products from "./assets/components/Products"; */
import Spacetest from "./assets/components/Spacetest";
import Places from "./assets/components/Places";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

export default function App(){
    return(
        <>
        <S.GlobalStyle />
        <Header/>
        <Carrossel/>
        {/* <Products /> */}
        <Spacetest/>
        <Places/>
        <Contact/>
        <Footer/>
        </>
    );
};