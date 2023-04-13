import React from "react";
import * as S from "./style";
import Ellipse1 from "../images/Ellipse1.png";
import Ellipse2 from "../images/Ellipse2.png";
import Ellipse3 from "../images/Ellipse3.png";

export default function Places() {
    return (
        <S.PlaceSection>
            <S.Placecards>
                <S.Placecardone>
                    <img src={Ellipse1} alt="Loja Laranjeiras" />
                    <h3>LARANJEIRAS</h3>
                    <p>Seg 11h às 19h</p>
                    <p>Ter a Sexta 9h às 20h</p>
                    <p>Sáb e Dom 10h às 19h</p>
                    <h3>Rua Ipiranga, 132 - Laranjeiras,</h3>
                    <h3>Rio de Janeiro</h3>
                </S.Placecardone>
                <S.Placecardtwo>
                    <img src={Ellipse2} alt="Loja Copacabana" />
                    <h3>COPACABANA</h3>
                    <p>Seg 11h às 19h</p>
                    <p>Ter a Sexta 10h às 21h</p>
                    <p>Sáb e Dom 11h às 20h</p>
                    <h3>Av. Nossa Sra. de Copacabana, 978 -</h3>
                    <h3>Rio de Janeiro</h3>
                </S.Placecardtwo>
                <S.Placecardthree>
                    <img src={Ellipse3} alt="Loja Copacabana" />
                    <h3>VILA MADALENA</h3>
                    <p>Segunda a Sábado</p>
                    <p>10 às 18h</p>
                    <h3>Av. Brg. Faria Lima, 2232 -</h3>
                    <h3>Jardim Paulistano, São Paulo</h3>
                </S.Placecardthree>
            </S.Placecards>
        </S.PlaceSection>
    );
};