import React from "react";
import logo from "../assets/images/mainlogo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary pb-16">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,192L34.3,176C68.6,160,137,128,206,122.7C274.3,117,343,139,411,160C480,181,549,203,617,192C685.7,181,754,139,823,138.7C891.4,139,960,181,1029,176C1097.1,171,1166,117,1234,117.3C1302.9,117,1371,171,1406,197.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="flex justify-center items-center gap-[10vw] pt-6">
          <div className="flex justify-center items-center">
            <img src={logo} alt="" className="h-[150px] w-[150px]" />
          </div>
          <div className="flex justify-around gap-14 text-[18px] font-Montserrat text-white ">
            <div className="flex flex-col gap-2">
              <div className="font-medium">Product</div>
              <div className="flex flex-col ">
                <span>
                  <NavLink>Sari</NavLink>
                </span>
                <span>
                  <NavLink>Suit & Salwa</NavLink>r
                </span>
                <span>
                  <NavLink>Curtain</NavLink>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium">Info</div>
              <div className="flex flex-col">
                <span>
                  <NavLink>Home</NavLink>
                </span>
                <span>
                  <NavLink>About</NavLink>
                </span>
                <span>
                  <NavLink>Product</NavLink>
                </span>
                <span>
                  <NavLink>Contact</NavLink>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-medium">Contact us</div>
              <div className="flex flex-col gap-1">
                <span className="flex flex-col ">
                  <span>General Enquires</span>
                  <span>General123@gmail.com</span>
                </span>
                <span className="flex flex-col ">
                  <span>Business Enquires</span>
                  <span>+91 9582175717</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
