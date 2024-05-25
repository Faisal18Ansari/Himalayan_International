import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    FName: "",
    Email: "",
    FeedBack: "",

  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    // Additional form submission logic can be added here
    // For example, you can send the formData to a server

    // Clear form fields after submission
    setFormData({
      FName: "",
      Email: "",
      FeedBack: "",
    
    });
  };
  return (
    <>
      <div className="flex justify-center items-center rounded-[10px] ">
        <div className="flex flex-col gap-3 px-6 py-7 md:backdrop-blur-md   bg-slate-900 md:bg-slate-900 md:bg-opacity-40 bg-opacity-40 rounded-[10px]   ">
          <div className="w-[300px] bg-">
            <form onSubmit={handleSubmit} >
              <div className=" flex flex-col gap-3 mt-4 text-white">
                <div className="border-2 bg-primary border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <input
                    type="text"
                    id="FName"
                    name="FName"
                    value={formData.FName}
                    onChange={handleChange}
                    className="w-[100%] bg-transparent px-2 pt-1 h-[100%] outline-none transition-colors peer"
                    required
                  />
                  <label
                    htmlFor="FName"
                    className="absolute left-0 px-2 py-1 cursor-text peer-valid:text-xs peer-focus:text-xs peer-focus:-top-1 peer-valid:-top-1 peer-focus:text-blue-600 peer-valid:text-blue-600 transition-all"
                  >
                    Name *
                  </label>
                </div>
                
                <div className="border-2 bg-primary border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-[100%] bg-transparent px-2 pt-1 h-[100%] outline-none transition-colors peer"
                    required
                  />
                  <label
                    htmlFor="Email"
                    className="absolute left-0 px-2 py-1  cursor-text peer-valid:text-xs peer-focus:text-xs peer-focus:-top-1 peer-valid:-top-1 peer-focus:text-blue-600 peer-valid:text-blue-600 transition-all"
                  >
                    Work mail *
                  </label>
                </div>
                <div className="border-2 bg-primary border-b-gray-300 relative py-2 h-[50px] flex justify-center items-center rounded-[8px] hover:border-blue-500 hover:shadow-blue-400 hover:shadow-md">
                  <input
                    type="text"
                    id="FeedBack"
                    name="FeedBack"
                    value={formData.FeedBack}
                    onChange={handleChange}
                    className="w-[100%] bg-transparent px-2 pt-1 h-[100%] outline-none   transition-colors peer"
                    required
                  />
                  <label
                    htmlFor="FeedBack"
                    className="absolute left-0 px-2 py-1 cursor-text peer-valid:text-xs peer-focus:text-xs peer-focus:-top-1 peer-valid:-top-1 peer-focus:text-blue-600 peer-valid:text-blue-600 transition-all"
                  >
                    FeedBack *
                  </label>
                </div>
                <div className="flex flex-col gap-6 justify-center items-center pt-3">
                  <button className="bg-gray-300 font-semibold text-secondary w-[100%] py-3 rounded-[8px]  hover:bg-Theme_color-blue">
                    Submit
                  </button>
                
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}