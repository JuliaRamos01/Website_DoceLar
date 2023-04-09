import React from "react";
import * as S from "./style";
import ImagemCarrossel from "../images/ovoheader.png";
import SetaEsquerda from "../images/setaesquerda.png";
import SetaDireita from "../images/setadireita.png";

export default function Carrossel() {
    return (
        <S.Carrossel>
            <S.SectionCarrossel>
                <img src={ImagemCarrossel} alt="Ovo de Páscoa" />
                <S.Text>
                    <h1>Cada produto feito artesanalmente</h1>
                    <button>Compre agora</button>
                </S.Text>
                <S.Buttons>
                <S.ButtonEsq><img src={SetaEsquerda} alt="Seta esquerda"/></S.ButtonEsq>
                <S.ButtonDir><img src={SetaDireita} alt="Seta direita"/></S.ButtonDir>
                </S.Buttons>
            </S.SectionCarrossel>
        </S.Carrossel>
    );
};