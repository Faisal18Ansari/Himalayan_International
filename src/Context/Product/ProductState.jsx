import React, { useState } from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const [product, setProduct] = useState({
    category: "DENIM RAG RUGS",
    color: "as per picture",
    fullyCustomizable: "as per customer",
    id: "HI-0828",
    image: [
      "https://firebasestorage.googleapis.com/v0/b/himalayainternational-13dfa.appspot.com/o/all%20images%2Fdenim%20rag%20rugs%20white%2F0828.png?alt=media&token=fbe1e4d3-f84c-4e12-8008-344ab11d9255"
    ],
    quality: "210-GRAMS SQ. FT.",
    size: "any size",
    style: "handloom made"
  });

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
