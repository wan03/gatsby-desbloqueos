import React from "react";

import "./ProductInfoPage.css"

// Component imports
import ProductInfoHeader from './ProductInfoHeader';
import WrapperA from './WrapperA';
import WrapperB from './WrapperB';

import './../main.css';

function ProductInfoPage(props) {
    return (
        <div >
            <ProductInfoHeader />
            <WrapperA />
            <WrapperB />
        </div >
    );
}

export default ProductInfoPage;
