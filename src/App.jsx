import React from "react";
import * as S from "./assets/components/style";
import Header from "./assets/components/Header";
import Carrossel from "./assets/components/Carrossel";

export default function App(){
    return(
        <>
        <S.GlobalStyle />
        <Header/>
        <Carrossel/>
        </>
    );
};