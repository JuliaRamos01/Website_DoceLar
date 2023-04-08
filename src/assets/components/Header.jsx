import React from "react";
import * as S from "./style";
import BoloLogo from "../images/bolo.png";

export default function Header() {
return (
    <>
    <S.Header>
        <div>
        <img src={BoloLogo} alt="BoloLogo"/>
        <h2>Doce Lar</h2>
        </div>
        <S.NavBox>
        <ul>
            <li>PRODUTOS</li>
            <li>ONDE ENCONTRAR</li>
            <li>CONTATO</li>
        </ul>
        </S.NavBox>
    </S.Header>
    </>
);
}