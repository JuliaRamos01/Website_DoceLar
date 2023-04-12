import React from "react";
import * as S from "./style";
import ProductCard from "./ProductCard";

const ProductSection = ({products}) =>{
    return (
        <S.Section>
        {products.map((product) => (
            <Product
            key={product.id}
            image={product.image}
            description={product.description}
            link={product.link}
            />
        ))}
        </S.Section>
    );
};
export default ProductSection;