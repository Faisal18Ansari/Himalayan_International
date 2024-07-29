import img from "../assets/images/contactImg.png";
import ContactFrom from "../component/ContactFrom"
import { Phone , Mail, MapPin } from "lucide-react";
export default function Contact() {

  function handleLoad(){
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="flex justify-center items-center px-5 md:px-0 overflow-x-hidden " onLoad={handleLoad}>
        
        <div className="flex flex-col gap-6 py-10 ">
          <div className="flex md:justify-between justify-center md:items-center flex-col md:flex-row gap-5 md:gap-0">
            <div className="flex flex-col justify-center items-center md:items-start md:justify-start md:text-[2rem] text-[1.5rem] font-Montserrat font-bold text-secondary">
              <span>Ensure that your</span>
              <span>living space</span>
              <span>meet your Expectations</span>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.73983971715452!2d77.27913089105586!3d28.69450912828504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc73bbd668c7%3A0x8156c2aa28d42084!2sStreet%20Number%2023%2C%20Vijay%20Park%2C%20Shahdara%2C%20Delhi%2C%20110053!5e0!3m2!1sen!2sin!4v1716361981472!5m2!1sen!2sin"
                className="md:w-[500px] w-[100%] rounded-[10px] shadow-md shadow-secondary"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="relative">
            <div className=" md:block hidden">
              <img src={img} alt="" />
            </div>
            <div className="md:absolute z-10 top-[80px] right-[-120px]">
              < ContactFrom />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center font-Montserrat">
            <div className=" hover:shadow-md hover:shadow-secondary  md:w-[300px] w-[100%] flex justify-center px-3 items-center bg-primary rounded-[10px] h-[80px] text-white gap-4">
              <span className="text-black font-semibold">
              <Phone />
              </span>
              <span className="text-[20px] font-medium">
              +91 9582175717
              </span>
            </div>
            <div className=" hover:shadow-md hover:shadow-secondary   md:w-[300px] w-[100%] flex justify-center items-center bg-primary rounded-[10px] h-[80px] text-white gap-4">
              <span className="text-black font-semibold">
              <Mail />
              </span>
              <span className="text-[15px] font-medium">
                General123@gamil.com
              </span>
            </div>
            <div className=" hover:shadow-md hover:shadow-secondary   md:w-[300px] w-[100%] flex justify-center px-3 items-center bg-primary rounded-[10px] h-[80px] text-white gap-4">
              <span className="text-black font-semibold">
              <MapPin  />
              </span>
              <span className="text-center w-[100%] text-[15px]" >
              S-72/1A, Street No. 23 Brahampuri, New Seelampur, Delhi-110053 India
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
