import React from "react";
import * as S from "./style";

const ProductCard =({ image, description, buttonText}) =>{
    return(
        <S.Card>
            <S.Image src={image} alt="Produtos"/>
            <S.Description>{description}</S.Description>
            <S.Button>{buttonText}</S.Button>
        </S.Card>
    );
};

export default ProductCard;