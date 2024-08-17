import React from 'react'
import img1 from "../assets/images/filler3.png"

export default function ProductCard() {
  return (
    <div className="flex flex-col gap-1 w-[150px] h-[250px] md:h-[305px] md:w-[235px]   rounded-[10px]  shadow-md shadow-slate-400 cursor-pointer">
    <div className="flex justify-center items-center h-[204px] w-[150px] md:w-[235px] overflow-hidden rounded-t-[10px]">
        <img src={img1} alt="" className= "object-cover h-[204px] w-[150px] md:w-[235px] " />
    </div>
    <div className="flex flex-col w-full px-2 gap-2">
        <div className="md:text-2xl text-lg md:placeholder:backdrop::w-[200px] font-bold">
            Bamboo Silk Carpet
        </div>
        <div className="flex justify-between font-medium text-slate-600">
            <span>
            Tribetan Weave                   
            </span>
            <span>
            QLT 10/32
            </span>
        </div>
    </div>
</div>
  )
}
