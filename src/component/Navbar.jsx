import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";
import logo from "../assets/images/mainlogonav.png";

export default function Navbar() {
  const [isAlignJustifyVisible, setIsAlignJustifyVisible] = useState(true);
  const [mobileNav, setMobileNav] = useState("translate-x-[100%]");

  const toggleIcons = () => {
//function to handle the visibility of mobile menu and mobile icon
    if (isAlignJustifyVisible) {
      setMobileNav("translate-x-[0%]");

      setIsAlignJustifyVisible((prevState) => !prevState);
    } else {
      setIsAlignJustifyVisible((prevState) => !prevState);
      setMobileNav("translate-x-[100%]");
    }
  };
  return (
    <>
      <header className="fixed z-50 flex justify-around h-[80px] top-0 bg-white shadow-md bottom-0  font-Montserrat font-medium w-[100vw] ">
       <div className="flex justify-between items-center w-[80vw] xl:w-[1100px]"> <div className="h-[80px] w-[100px] flex justify-center items-center">
          <img src={logo} alt="" className="h-[50px] w-[90px]" />
        </div>

        <nav className="hidden md:flex justify-center items-center text-[20px] ">
          <ul className="flex justify-center items-center gap-16">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Product</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center items-center gap-4">
          <button className="px-[30px] py-[8px] bg-black rounded-[50px] text-white text-[20px]">
            <Link>Login</Link>
          </button>
          <div className="flex md:hidden">
            {isAlignJustifyVisible ? (
              <AlignJustify onClick={toggleIcons} />
            ) : (
              <X onClick={toggleIcons} />
            )}
          </div>
        </div></div>
{/* mobile menu code*/}
        <div
          className={`absolute border-2 right-0 top-[80px] w-[50vw] h-[100vh] bg-white ${mobileNav} transition-all duration-[1s]`}
        >
          <ul className="text-[20px] font-medium font-Montserrat flex flex-col gap-4 px-8 py-8 ">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Product</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
{/* mobile menu code End Here*/}
      </header>
    </>
  );
}
