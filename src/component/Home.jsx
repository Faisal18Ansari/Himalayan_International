import React from "react";
import img from "../assets/images/image43.png";
import logo from "../assets/images/mainlogo.png";

export default function Home() {
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
    </>
  );
}
