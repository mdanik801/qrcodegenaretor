import React, { useState } from "react";
import QRCode from "qrcode";

import QRIMG from "../assets/QRCodeimg.png";
import Arow from "../assets/arrow-down.png";
import { NavLink } from "react-router-dom";

export default function QRgen() {
   const [url, seturl] = useState("");
   const [imgUrl, setImgurl] = useState("");
   const [color, setcolor] = useState("");

   const generateQrCode = async (e) => {
      e.preventDefault();
      try {
         const response = await QRCode.toDataURL(url, {
            width: 600,
            margin: 1,
            color: { dark: color },
         });
         setImgurl(response);
      } catch (error) {
         console.error(error);
      }
      console.log(url);
   };

   return (
      <div className="    bg-cyan-950 p-3 h-screen">
         <NavLink
            className=" shadow-md shadow-black text-white font-Inter lg:font-bold font-semibold text-shadow-lg bg-cyan-600 lg:p-3 p-2  ml-[-3vh] rounded-r-full hover:bg-slate-300 hover:text-cyan-600 duration-300 "
            to="/scan">
            SCAN QR CODE
         </NavLink>
         <div className=" flex flex-col items-center  h-[70vh] m-10">
            <h1 className="  text-white text-shadow-sm text-center font-semibold lg:text-[2rem] text-[1rem] my-5 font-Inter ">
               {" "}
               GENARATE YOUR QR CODE HERE
            </h1>

            <form
               onSubmit={generateQrCode}
               className="  flex justify-center items-center shadow-inner shadow-black bg-cyan-700  w-auto rounded-xl m-1 p-1">
               <input
                  type="url"
                  placeholder="https//:your_url.com"
                  onChange={(e) => seturl(e.target.value)}
                  className="  lg:w-[120vh] w-full font-Inter placeholder:font-Inter placeholder:text-lg placeholder:text-slate-300 text-slate-300  p-2 bg-transparent active:border-2 outline-none rounded-full"
               />
               <input
                  className=" border-none rounded-full bg-transparent  outline-none appearance-none "
                  onChange={(e) => setcolor(e.target.value)}
                  type="color"
               />
               <button className=" text-xl font-semibold mx-4 text-cyan-300 text-shadow-sm font-Inter hover:text-slate-200 duration-200 ">
                  GENERATE
               </button>
            </form>
            {imgUrl ? (
               <>
                  {" "}
                  <img
                     className=" border-2  m-3 w-[40vh] rounded border-green-500 cursor-pointer"
                     src={imgUrl}
                     alt="qr code"
                     aria-required
                  />
                  <a
                     href={imgUrl}
                     download={"QRCode.png"}
                     className=" text-slate-300 font-bold text-[1.5rem] hover:text-cyan-600 text-shadow-lg duration-200 ">
                     Download
                  </a>
               </>
            ) : (
               <>
                  <img
                     className=" opacity-45 border-2  m-3 w-[40vh] rounded border-green-500 cursor-pointer"
                     src={QRIMG}
                     alt=""
                  />
                  <a className="opacity-45 text-slate-300 font-bold text-[1.5rem] text-shadow-lg  ">
                     Download
                  </a>
               </>
            )}
         </div>
      </div>
   );
}
