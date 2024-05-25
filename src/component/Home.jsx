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
import img12 from "../assets/images/Group63.png";
import img13 from "../assets/images/image62.png";
import img14 from "../assets/images/image64.png";
import img15 from "../assets/images/image68.png";
import img16 from "../assets/images/image66.png";
import img17 from "../assets/images/mainlogonav.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  const Testimonial = [
    {
      number: 1,
      text: "Products are high-quality and developed to satisfy international standards. The product development process is exceptional, from design to implementation. Himalaya International manufactures its items using modern technologies. All goods are made with the best available materials.",
    },
    {
      number: 2,
      text: "Himalaya international's skill in making diverse items allows them to satisfy high levels of competency. The design team created things that fulfill one's creative desires. Their crew is well-versed in the market and does thorough research with keen attention to detail.",
    },
  ];
  const [testimonial, setTestimonial] = useState(Testimonial[0]);
  const productData = [img, img10, img11];
  const TestimonialFunction = (direction) => {
    if (direction == "left") {
      const index = testimonial.number - 1;
      setTestimonial(Testimonial[index - 1]);
    } else {
      const index = testimonial.number - 1;
      setTestimonial(Testimonial[index + 1]);
    }
  };
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

      <div className="flex  justify-center items-center  py-6 ">
        <div className="flex flex-col justify-center gap-6 md:w-[80vw]">
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
            <img src={img2} alt="" className="px-4 md:px-0" />
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
              <p className="text-center text-[1.2rem] md:w-[80vw] px-2 font-medium">
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
        <div className="flex pb-14 items-center justify-center ">
          <div className="flex flex-wrap justify-between items-center w-[80vw] flex-col md:flex-row gap-8">
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
            Where quality is not just a promise, it's a way of life.
          </span>
        </div>
        <div className="flex  pb-20 pt-20 items-center justify-center  bg-primary">
          <div className="flex flex-wrap   flex-col md:flex-row md:gap-20 gap-[80px] w-[80vw] justify-between items-center ">
            {data2.map((ele, index) => (
              <Card2 key={index} cardData={ele} />
            ))}
          </div>
        </div>
      </div>
      {/* Product section start from here*/}
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

      <div className="hidden md:flex justify-center items-center flex-col gap-4 font-Montserrat pb-10 pt-16">
        <div className="flex flex-col gap-1 justify-center items-center">
          <span className="text-gray-500 text-[1.5rem] font-medium">
            Quality that we provide
          </span>
          <span className="text-[2rem] font-semibold">
            Creativity Knows No Bounds
          </span>
        </div>
        <div
          className="w-[80vw] grid grid-cols-12 grid-rows-2 gap-3"
          style={{ gridTemplateRows: "1fr 0.5fr" }}
        >
          <div className="col-span-3 w-[100%]">
            <img src={img13} alt="" className="object-cover w-[100%]" />
          </div>
          <div className="col-span-3 col-start-4 border-2 border-gray-300 rounded-[20px] flex justify-center items-center">
            <p className="text-center text-[1.3rem] text-gray-400 px-3">
              With a tradition of unrivaled workmanship and high standards, we
              welcome you to experience the ultimate of elegance and
              sophistication.
            </p>
          </div>
          <div className="col-span-6 col-start-7 flex justify-between flex-col border-2 border-gray-300 rounded-[20px]">
            <div className="flex flex-col justify-center px-4 py-2  ">
              <div className="flex justify-between items-center ">
                <div className="text-[1.5rem] font-bold flex flex-col ">
                  <span>Create your own</span>
                  <span>Story!!</span>
                </div>
                <div>
                  <img src={img17} alt="" className="h-[40px]" />
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-[0.9rem]">
                  We take pleasure in presenting a diverse range of distinctive
                  goods to meet all of your fashion needs. We have you covered,
                  whether you're looking for the perfect outfit for a big event
                  or simply want to upgrade your regular wardrobe. Our broad
                  collection of stylish clothes, ranging from modern elegance to
                  traditional ethnic dress, is designed to capture attention and
                  inspire confidence. With a sharp eye for style and a
                  commitment to being ahead of the trend curve, we are always
                  introducing new and innovative designs to suit a wide range of
                  tastes and preferences.
                </p>
              </div>
            </div>
            <div>
              <img src={img16} alt="" />
            </div>
          </div>
          <div className="col-span-4">
            <img
              src={img14}
              alt=""
              className="object-cover w-[100%] h-[100%]"
            />
          </div>
          <div className="col-span-4 col-start-5 border-2 border-gray-300 rounded-[20px] flex justify-center items-center">
            <p className="text-center text-[1.3rem] text-gray-400 px-3">
              Drawing inspiration from India's magnificent past, we provide a
              regal delight to suit every distinct taste and budget.
            </p>
          </div>
          <div className="col-span-4 col-start-9">
            <img
              src={img15}
              alt=""
              className="object-cover w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
      <div className=" hidden md:flex flex-col gap-5 justify-center items-center font-Montserrat pt-10 pb-4">
        <div className="flex flex-col w-[80vw] justify-center items-center">
          <span className="text-[1.4rem] text-gray-500 font-semibold">
            Testimonial
          </span>
          <span className="text-[1.6rem] font-semibold text-center ">
            Experience our excellence through the words of our customers.
          </span>
        </div>
        <div className="flex w-[80vw] relative rounded-[25px] my-3 mx-4  ">
          <div className="flex h-[300px] bg-gradient-to-r from-[#CBCBCB] to-[#DEDEDE] rounded-[10px] box-border py-[4rem]">
            <div className="w-[50%] flex justify-center items-center ">
              <p className="text-[4rem] font-bold">{testimonial.number}</p>
            </div>
            <div>
              <p className="w-[70%]  text-[1.3rem] font-semibold border-l-4 border-l-black pl-4">
                {testimonial.text}.
              </p>
            </div>
          </div>
          <div className="absolute z-10 right-[-30px] h-[350px] top-[20px] ">
            <img src={img12} alt="" className="h-[350px]" />
          </div>
        </div>
        <div className="flex w-[40vw] justify-between">
          <span
            className={`flex justify-center items-center rounded-[50%] bg-primary h-[40px] w-[40px] hover:shadow-[0_0_10px_3px_rgba(152,192,219,0.8)] cursor-pointer ${
              testimonial.number == 1 ? "opacity-50 pointer-events-none" : ""
            }`}
            onClick={() => TestimonialFunction("left")}
          >
            <ChevronLeft />
          </span>
          <span
            className={`flex justify-center items-center rounded-[50%] bg-primary h-[40px] w-[40px] hover:shadow-[0_0_10px_3px_rgba(152,192,219,0.8)] cursor-pointer ${
              testimonial.number == Testimonial.length
                ? "opacity-50 pointer-events-none"
                : ""
            }`}
            onClick={() => TestimonialFunction("right")}
          >
            <ChevronRight />
          </span>
        </div>
      </div>

      {/* Product section end here*/}
    </>
  );
}
