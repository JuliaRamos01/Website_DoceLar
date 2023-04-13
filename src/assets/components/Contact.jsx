import React from "react";
import * as S from "./style";

export default function Contact() {
    return (
        <S.ContactSection>
            <S.ContactBox>
                <h1>Contato</h1>
                <input type="text" placeholder="Nome completo" />
                <S.Contactinputs>
                    <input type="email" placeholder="E-mail" />
                    <input type="number" placeholder="Telefone" />
                </S.Contactinputs>
                    <input type="text" placeholder="Assunto" />
                    <input type="message" placeholder="Digite sua mensagem" />
                <button>ENVIAR</button>
            </S.ContactBox>
        </S.ContactSection>
    );
};