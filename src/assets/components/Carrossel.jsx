import React from "react";
import * as S from "./style";
import ImagemCarrossel from "../images/ovoheader.png";

export default function Carrossel(){
return(
    <S.Carrossel>
        <S.SectionCarrossel>
            <img src={ImagemCarrossel} alt="Ovo de Páscoa"/>
        </S.SectionCarrossel>
        <S.Text>
        <h1>Cada produto feito artesanalmente</h1>
        <button>Compre agora</button>
        </S.Text>
    </S.Carrossel>
);
};