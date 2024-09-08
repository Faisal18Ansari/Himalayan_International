import ImageSlider from "../component/ImageSilder";
import ProductCard from "../component/ProductCard";
import CategoryMenu from "../component/CategoryMenu";
import { useContext, useState } from "react";
import banner1 from "../assets/images/banner1.png"
import { CategoryProductContext } from "../Context/CategoryProduct/CategoryProductContext";

function Product() {
  const { categoryProduct } = useContext(CategoryProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const banners=[
    banner1
  ]
  // Calculate the number of pages
  const totalPages = Math.ceil(categoryProduct.length / itemsPerPage);

  // Determine the products to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = categoryProduct.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleLoad(){
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div>
        <div className="overflow-hidden h-[40vh]">
          <ImageSlider isButton={false} images={banners} />
        </div>
      </div>

      <section
        className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-10 lg:h-[820px] overflow-x-hidden lg:pt-10"
        onLoad={handleLoad}
      >
        <div>
          <CategoryMenu />
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden">
          <div className="grid items-center my-10 lg:gap-4 md:gap-10 gap-4 grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 py-10 px-5 overflow-hidden">
            {currentProducts.map((ele, index) => (
              <ProductCard product={ele} key={index} />
            ))}
          </div>
         
         
        </div>
         
      </section>
          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-4 mb-2">
           {totalPages!=1 && Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-2 px-4 py-2 rounded-[50%] ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
    </>
  );
}

export default Product;
