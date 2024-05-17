import React from "react";
import img1 from "../../assets/images/image39.png";
import Style from "./Card2Style.module.css";

export default function Card2(props) {
  const { img, info } = props.cardData;
  return (
    <>
      <div className={Style.card}>
        <div className={Style.icon}>
          <img src={img} alt="" />
        </div>
        <div className={Style.content}>
          <p className="font-Montserrat text-[1rem] px-2 font-medium">{info}</p>
        </div>
      </div>
    </>
  );
}
