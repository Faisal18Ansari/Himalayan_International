import React, { useContext } from "react";
import productContext from "../Context/Product/productContext";
import { useNavigate } from "react-router-dom";


export default function ProductCard({ product }) {
  const {setProduct}=useContext(productContext)

  const Navigate=useNavigate()

  const handleProduct=(data)=>{
    setProduct(data)
    Navigate(`/productDetail/${data.id}`)
  }

  return (
    <div className="flex flex-col gap-1 w-[150px] h-[290px] md:h-[290px] md:w-[235px]   rounded-[10px]  shadow-md shadow-slate-400 cursor-pointer" onClick={()=>handleProduct(product)}>
      <div className="flex justify-center items-center h-[204px] w-[150px] md:w-[235px] overflow-hidden rounded-t-[10px]">
        <img
          src={product.image[0]}
          alt=""
          className="object-cover h-[204px] w-[150px] md:w-[235px] "
        />
      </div>
      <div className="flex flex-col  w-full px-2 gap-4">
        <div className="md:text-xl text-md md:placeholder:backdrop::w-[220px] font-bold min-h-[30px]">
          {product.category}
        </div>
        <div className="flex  font-medium text-slate-600">
          <span>{product.style}</span>
        </div>
      </div>
    </div>
  );
}
