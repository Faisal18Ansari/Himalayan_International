import React, { useContext } from "react";
import ImageSlider from "../component/ImageSilder";
import CategoryMenu from "../component/CategoryMenu";
import productContext from "../Context/Product/productContext";
import { useProduct } from "../Hooks/useProduct";
import ProductCard from "../component/ProductCard";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/images/loading1.png"
import banner1 from "../assets/images/banner1.png"

export default function ProductDetail() {
  const banners=[
    banner1
  ]
  const { product } = useContext(productContext);
  const { products: catProduct, loading, error } = useProduct(product.category);
  const navigate=useNavigate()
  if (loading){
    return  (
      <>
      <div> <div className="flex justify-center items-center"><img src={img1} alt="" /></div></div>
      </>
    );
  } 
  if (error) return <div>Error: {error}</div>;

  // Shuffle and limit to 3 products
  const randomProducts = catProduct.sort(() => 0.5 - Math.random()).slice(0, 3);

  const handleViewMore=(e)=>{
    e.preventDefault()
    navigate('/product')
  }
  function handleLoad(){
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div>
        <div className="overflow-hidden h-[40vh]">
          <ImageSlider isButton={false} images={banners}/>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-10 overflow-hidden lg:pt-10" onLoad={handleLoad}>
        <div className="flex  justify-start">
          <CategoryMenu />
        </div>
        <div className="flex font-Montserrat flex-col pt-10">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-start lg:items-stretch gap-8 min-h-[600px]">
            <div className="h-[500px] md:w-[400px] w-[300px] rounded-[10px] ">
              <img
                src={product.image[0]}
                alt=""
                className="h-[480px] md:w-[400px] w-[300px] object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-bold text-[2rem] min-w-[250px]">
                STYLE # {product.id}
              </div>
              <div className="flex flex-col justify-between">
                <div className="text-[1.3rem] font-semibold">
                  {product.style}
                </div>
                <div className="text-[0.9rem]">style</div>
              </div>
              <div className="flex justify-between">
                <div>
                {product.quality ? (
        <div className="flex gap-2">
        {/* Split the product.quality into number and unit */}
        <span className="text-[1.3rem] font-semibold">
          {product.quality.split('-')[0]}
        </span>
        <span className="text-[0.7rem] w-[60px] pl-1">
          {product.quality.split('-')[1]}
        </span>
      </div>
    ) : (
      <span className="text-[0.9rem]">No info</span>
    )}
                  <div className="text-[0.9rem]">weight</div>
                </div>
                <div>
                  <div className="text-[1.3rem] font-semibold">
                    {product.size}
                  </div>
                  <div className="text-[0.9rem]">size</div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="text-[1.3rem] font-semibold">
                  Fully Customizable
                </div>
                <div className="text-[0.9rem]">As per Customer</div>
              </div>
              <div>
                <button className="bg-secondary py-2 px-3 rounded-[50px] text-white font-semibold" onClick={(e)=>handleViewMore(e)}>
                  View More
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[2rem] font-bold md:py-2 pt-8 pb-3 px-4 md:px-0 text-center lg:text-left">Similar Products</p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 py-3 items-center mx-auto">
            {randomProducts.map((ele, index) => (
              <ProductCard product={ele} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
