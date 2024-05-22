import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/image43.png";
import logo from "../assets/images/mainlogo.png";
import img2 from "../assets/images/image12.png";
import Card1 from "./Card1";
import Card2 from "./Card2/Card2";
import img3 from "../assets/images/image18.png";
import img4 from "../assets/images/image19.png";
import img5 from "../assets/images/image32.png";
import img6 from "../assets/images/image16.png";
import img7 from "../assets/images/image38.png";
import img8 from "../assets/images/image39.png";
import img9 from "../assets/images/image40.png";
import img10 from "../assets/images/image41.png";
import img11 from "../assets/images/image46.png";

export default function Home() {
  const [productImage, setProduct] = useState(img);
  const data = [
    {
      title: "OUR VISION",
      img: img5,
      info: "Renowned for our commitment to quality, innovative design, exceptional customer service, and sustainable practices",
    },
    {
      title: "OUR MISSION",
      img: img3,
      info: "To offer Client trendsetting design with permium material while competitive price.",
    },
    {
      title: "OUR VALUES",
      img: img4,
      info: "To support professional & personal support of our Team and make Himalaya International most desirable place of work.",
    },
  ];

  const data2 = [
    {
      img: img6,
      info: "We are committed to pushing the frontiers of design innovation, creating new and appealing designs and patterns.",
    },
    {
      img: img7,
      info: "We take pleasure in providing our clients with a broad and extensive range of product categories, styles, and patterns to meet every need and budget. ",
    },
    {
      img: img9,
      info: "From the precise selection of quality yarns and dyes to the accuracy of our production techniques, we value excellence throughout the process. ",
    },
    {
      img: img8,
      info: "We work to limit our carbon footprint and environmental effect by employing organic textiles and eco-friendly production techniques. ",
    },
  ];

  const productData = [img, img10, img11];
  return (
    <>
      <div
        className="h-[100vh] w-[100vw] flex justify-center items-center"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-4 ">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center text-[1.6rem] text-white font-Montserrat">
            <span>Clothes for everyone</span>
            <span className="text-center">
              for the special day, for everyday
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 py-6 ">
        <div className="flex flex-col justify-center items-center font-Montserrat">
          <span className="text-secondary text-[1.4rem] font-semibold ">
            Who We are
          </span>

          <span className="flex flex-col md:text-[2rem] text-[1.7rem] font-bold justify-center items-center px-1">
            <span>Realising Your idea</span>
            <span className="text-center">With skill and Commitment</span>
          </span>
        </div>
        <div className="flex justify-center items-center flex-col gap-8">
          <img src={img2} alt="" className="px-4" />
          <div className="bg-primary md:w-[100%] w-[90%]  h-[80px] rounded-[10px]"></div>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 font-Montserrat">
          <div className="text-[1.4rem] text-gray-400 font-semibold">
            Creating Mastery
          </div>
          <div className="text-[1.7rem] font-bold text-center">
            The Tale Of The Vision Crafter's Journey
          </div>
          <div className="flex justify-center items-center">
            <p className="text-center text-[1.2rem] md:w-[1000px] px-2 font-medium">
              Himalaya International, We are a proud manufacturer and supplier
              of the market, famed for having exceptional designing
              capabilities. Our talent and superior craftsmanship wins over a
              huge clientele every day. To remain the favorite of such a large
              customer base, we design, manufacture and deliver a beguiling
              collection of Clothing.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-primary mt-10 ">
        <div className="relative bg-white inset-x-0 ">
          <div className="absolute  w-full top-0  mt-[-5px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fff"
                fillOpacity="1"
                d="M0,288L80,245.3C160,203,320,117,480,122.7C640,128,800,224,960,256C1120,288,1280,256,1360,240L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex pb-14 items-center justify-center">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {data.map((ele, index) => (
              <Card1 key={index} cardData={ele} />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-2">
          <span className="font-Montserrat font-semibold text-[1.4rem] text-white">
            QUALITY
          </span>
          <span className="font-Montserrat font-bold text-[1.6rem] text-white text-center">
            The Tale of the Vision Crafters' Journey
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 gap-[80px] pb-20 pt-20 items-center justify-center   bg-primary">
          {data2.map((ele, index) => (
            <Card2 key={index} cardData={ele} />
          ))}
        </div>
      </div>
      {/* Product section start from here*/ }
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-16 overflow-x-hidden ">
        <div className="h-[410px] w-[250px] rounded-[15px]">
          <img
            src={productImage}
            alt=""
            className="h-[400px] w-[250px] object-cover rounded-[15px]"
          />
        </div> 
        <div className="flex flex-col md:justify-between h-[410px] md:px-0 px-3 gap-8 md:gap-0">
          <div>
            <div className="text-secondary text-[2.5rem] font-Montserrat font-bold md:px-0 px-2">
              Product Name
            </div>
            <div className="flex  items-center">
              <p className="md:w-[350px] md:px-0 px-2 text-[0.9rem] font-Montserrat text-gray-500">
                Himalaya International, We are a proud manufacturer and supplier
                of the market, famed for having exceptional designing
                capabilities. Our talent and superior craftsmanship wins over a
                huge clientele every day..
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="pl-2">
              <button className="bg-secondary text-white font-medium rounded-[25px] px-4 py-1">
                <Link>Learn more</Link>
              </button>
            </div>
            <div className="flex gap-4">
              {productData.map((ele, index) => (
                <div
                  className="h-[110px] w-[110px] rounded-[15px] cursor-pointer flex justify-center items-center "
                  key={index}
                  onClick={() => setProduct(ele)}
                >
                  <img
                    src={ele}
                    alt={`Product ${index + 1}`}
                    className="h-[90px] w-[90px] rounded-[10px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        {/* Product section end here*/ }
    </>
  );
}
