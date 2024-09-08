import React, { useState, useContext, useEffect } from 'react';
import { ArrowDown } from "lucide-react";
import { useProduct } from '../Hooks/useProduct';
import { useCategory } from '../Hooks/useCategory';
import { CategoryProductContext } from '../Context/CategoryProduct/CategoryProductContext';
import { useNavigate } from 'react-router-dom';
import { CategoryContext } from '../Context/Category/CategoryContext';

export default function CategoryMenu() {
    const [showCategory, setShowCategory] = useState(false);
   
    const productContext = useContext(CategoryProductContext);
    const { currentCategory, setCurrentCategory } =useContext(CategoryContext)
    // Fetch products based on the selected category
    const { products, loading, error } = useProduct(currentCategory.toUpperCase());

    const Categories = useCategory();
    
    const Navigate=useNavigate()
    useEffect(() => {
      if (!loading && !error) {
        productContext.setCategoryProduct(products);
        console.log(productContext.product);
      }
    }, [products, loading, error, productContext]);

    const handleCategory = (ele) => {
      setCurrentCategory(ele);
      setShowCategory(!showCategory);
      Navigate("/product")
    };

    const handleShowSubmenu = () => {
      setShowCategory(!showCategory);
    };

    return (
      <>
        <div className="">
          {/* Mobile Menu */}
          <div className="w-full overflow-hidden lg:hidden">
            <div
              className="py-2 font-Montserrat font-semibold text-[1.6rem] flex items-center gap-2 border-2 justify-between px-4 drop-shadow-sm cursor-pointer"
              onClick={handleShowSubmenu}
            >
              {currentCategory}
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
              <ul className="flex flex-col text-xl font-Montserrat font-medium">
                {Categories.map((ele, index) => (
                  <li
                    key={index}
                    className={`w-[100vw] py-3 px-4 hover:bg-secondary hover:border-b-white hover:border-t-white hover:border-y-2 hover:text-white cursor-pointer ${
                      currentCategory === ele ? "bg-secondary" : "bg-white"
                    }`}
                    onClick={() => handleCategory(ele)}
                  >
                    {ele}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="min-h-screen hidden justify-center items-center lg:flex">
            <div className="rounded-3xl shadow-lg shadow-slate-400 min-h-[600px] w-[280px] my-10 overflow-hidden">
              <ul className="flex flex-col h-[600px] justify-between text-xl font-Montserrat font-medium rounded-md">
                {Categories.map((ele, index) => (
                  <li
                    key={index}
                    className={`flex flex-col py-2 px-4 text-center hover:bg-secondary hover:border-b-white hover:border-b-2 hover:text-white cursor-pointer ${
                      currentCategory === ele ? "bg-secondary" : "bg-white"
                    }`}
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
    );
}
