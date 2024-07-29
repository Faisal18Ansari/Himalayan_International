import React, { useState,useEffect } from "react";
import { ArrowBigLeftDash,ArrowBigRightDash } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion'
import img1 from '../assets/images/image70.png'
import img2 from '../assets/images/image61.png'
import img3 from '../assets/images/image60.png'
import img4 from '../assets/images/image18.png'


const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 900 : -900,
      opacity: 0,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 200, damping: 30 },
      opacity: { duration: 0.1 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -900 : 900,
      opacity: 0,
      transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 200, damping: 30 },
        opacity: { duration: 0.1 },
      },
    }
  },
}

export default function ImageSlider() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0)

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="flex py-3  items-center justify-center">
      <div className="relative overflow-hidden rounded-lg w-[80vw] xl:w-[1100px] aspect-[16/9]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            src={images[currentIndex]}
            alt='slides'
            key={images[currentIndex]}
            custom={direction}
            className="w-full h-full object-cover object-center aspect-[16/9]"
        />
         </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
        >
         <ArrowBigLeftDash />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
        >
          <ArrowBigRightDash />
        </button>
      </div>
    </div>
  );
}
