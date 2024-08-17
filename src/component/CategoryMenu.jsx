import React, { useState } from 'react'
import { ArrowDown, MoveDown } from "lucide-react";
export default function CategoryMenu() {
    const [showCategory, setShowCategory] = useState(false);
    const [Category, setCategory] = useState("Denim Rag Rugs");
    const Categories = [
      "Denim Rag Rugs",
      "Leather Rag Rugs",
      "Handloom Rag Rugs",
      "Wool Hand Knotted Carpets",
      "Jute Hand Knotted Carpets",
      "Wool Tuffed Carpet",
      "Wool Loop Rugs",
      "Bamboo Silk Carpets",
    ];
  
    const handleCategory = (ele) => {
      setCategory(ele);
      setShowCategory(!showCategory);
    };
  
    const handleShowSubmenu = () => {
      setShowCategory(!showCategory);
    };
  
  return (
    <>
    <div className="">
        <div className="w-full overflow-hidden lg:hidden ">
          <div
            className=" py-2 font-Montserrat font-semibold text-[1.6rem] flex items-center gap-2 border-2 justify-between px-4 drop-shadow-sm cursor-pointer"
            onClick={handleShowSubmenu}
          >
            {Category}
            <ArrowDown
              className={`transform transition-transform duration-300 ${
                showCategory ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`flex flex-col overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              showCategory ? "max-h-[480px]" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col text-xl font-Montserrat font-medium  ">
              {Categories.map((ele, index) => (
                <li
                  className={`w-[100vw] py-3 px-4 hover:bg-secondary hover:border-b-white hover:border-t-white hover:border-y-2 hover:text-white cursor-pointer ${
                    Category == ele ? "bg-secondary" : "bg-white"
                  }`}
                  id={`Categories${index}`}
                  onClick={() => handleCategory(ele)}
                >
                  {ele}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="min-h-screen hidden justify-center items-center lg:flex ">
          <div className="rounded-3xl  shadow-md shadow-slate-400 min-h-[630px] w-[280px] my-10 overflow-hidden ">
          <ul className="flex flex-col h-[620px] justify-between text-xl font-Montserrat font-medium rounded-md  ">
              {Categories.map((ele, index) => (
                <li
                  className={`flex flex-col py-2 px-4 text-center hover:bg-secondary hover:border-b-white hover:border-b-2 hover:text-white cursor-pointer text-wrap ${
                    Category == ele ? "bg-secondary" : "bg-white"
                  }`}
                  id={`Categories_desktop${index}`}
                  onClick={() => handleCategory(ele)}
                >
                  <span>{ele}</span>
                  <span>__</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
    </>
  )
}
