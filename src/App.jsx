import React from "react";
import * as S from "./assets/components/style";
import Header from "./assets/components/Header";
import Carrossel from "./assets/components/Carrossel";
import ProductCard from "./assets/components/ProductCard";
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
        <ProductCard />
        <Spacetest/>
        <Places/>
        <Contact/>
        <Footer/>
        </>
    );
};