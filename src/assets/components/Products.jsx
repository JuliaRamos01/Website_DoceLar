import React from "react";
import * as S from "./style";
import { ProductCard } from "./ProductCard";
import Imagem1 from "../images/Ovos1.png";
import Imagem2 from "../images/Ovos2.png";
import Imagem3 from "../images/Ovos3.png";
import Imagem4 from "../images/Ovos4.png";
import Imagem5 from "../images/Ovos5.png";
import Imagem6 from "../images/Ovo6.png";


export default function ProductsSection () {
    const products = [
    {
        id: 1,
        image: `${Imagem1}`,
        description: 'Ovos de colher Tradicional a partir de 250g',
        buttonText: 'Comprar',
    },
    {
        id: 2,
        image: `${Imagem2}`,
        description: 'Ovos de colher Especiais a partir de 350g',
        buttonText: 'Comprar',
    },
    {
        id: 3,
        image: `${Imagem3}`,
        description: 'Cesta de Chocolate monte você mesmo',
        buttonText: 'Comprar',
    },
    {
        id: 4,
        image: `${Imagem4}`,
        description: 'Ovos coloridos para brincar com a criançada',
        buttonText: 'Comprar',
    },
    {
        id: 5,
        image: `${Imagem5}`,
        description: 'Kit de Trufas a partir de 12 unidades',
        buttonText: 'Comprar',
    },
    {
        id: 6,
        image: `${Imagem6}`,
        description: 'Barra de Chocolate crocontes',
        buttonText: 'Comprar',
    },
    ];

    return (
    <S.Section>
        {products.map((product) => (
        <ProductCard
            key={product.id}
            image={product.image}
            description={product.description}
            buttonText={product.buttonText}
        />
        ))}
    </S.Section>
    );
};


