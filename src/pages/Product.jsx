
import ImageSlider from "../component/ImageSilder";
import ProductCard from "../component/ProductCard";
import CategoryMenu from "../component/CategoryMenu";

function Product() {

  return (
    <>
      <div>
        <div className="overflow-hidden h-[40vh]">
          <ImageSlider isButton={false} />
        </div>
      </div>

      <section 
      className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-10 lg:h-[720px] overflow-x-hidden"
      >
        <div>
          <CategoryMenu/>
        </div>
        <div className="flex justify-center items-center min-h-screen ">
          <div className="grid items-center my-10 lg:gap-4 md:gap-10 gap-4 grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
