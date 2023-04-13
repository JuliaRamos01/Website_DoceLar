import React from "react";
import * as S from "./style";
import BoloLogo from "../images/bolo.png";
import FacebookIcon from "../images/iconfacebook.png";
import TwitterIcon from "../images/icontwitter.png";
import InstagramIcon from "../images/iconinstagram.png";

export default function Footer() {
    return (
        <>
        <S.Footer>
            <S.DivLogo>
                <img src={BoloLogo} alt="BoloLogo" />
                <h2>Doce Lar</h2>
            </S.DivLogo>
            <S.FooterBox>
                <S.FooterItens>
                <ul>
                    <li><img src={FacebookIcon} alt="Facebook Icon"/></li>
                    <li><img src={TwitterIcon} alt="Twitter Icon"/></li>
                    <li><img src={InstagramIcon} alt="Instagram Icon"/></li>
                </ul>
                </S.FooterItens>
            </S.FooterBox>
        </S.Footer>
        </>
    );
};