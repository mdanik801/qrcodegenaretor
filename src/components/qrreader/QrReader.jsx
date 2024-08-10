import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

import Arow from "../../assets/arrow-down.png";
import { NavLink } from "react-router-dom";
export default function Qrreader() {
   const [result, setResult] = useState(null);

   useEffect(() => {
      const scanner = new Html5QrcodeScanner("reader", {
         qrbox: 200,
         fps: 10,
      });

      const success = (decodedText, decodedResult) => {
         console.log("QR Code detected: ", decodedText);
         setResult(decodedText);
         scanner.clear(); // Stop scanning after successful read
      };

      const error = (err) => {
         console.warn(`QR Code scan error: ${err}`);
      };

      scanner.render(success, error);

      return () => {
         scanner.clear().catch((error) => {
            console.error("Failed to clear scanner on unmount:", error);
         });
      };
   }, []);

   return (
      <div className="    bg-cyan-950 p-3 min-h-screen h-auto">
         <NavLink
            className=" shadow-md shadow-black text-white font-Inter lg:font-bold font-semibold text-shadow-lg bg-cyan-600 lg:p-3 p-2  ml-[-3vh] rounded-r-full hover:bg-slate-300 hover:text-cyan-600 duration-300 "
            to="/">
            CREATE QR CODE
         </NavLink>
         <div className=" flex flex-col justify-center items-center lg:my-[2%]  my-[20%]">
            <h1 className="  text-white text-shadow-sm text-center font-semibold lg:text-[2rem] text-[1.4rem] my-4 font-Inter ">
               {" "}
               SCAN YOUR QR CODE HERE
            </h1>
            <div className=" lg:w-[120vh] text-white   flex flex-col justify-center items-center shadow-inner  shadow-black bg-cyan-700   rounded-xl m-1  p-[-2vh] overflow-hidden">
               {result ? (
                  <div className=" flex flex-col ">
                     <p className="p-2">
                        {" "}
                        Result:
                        <a className=" text-green-500 font-Inter " href={result} target="_blank">
                           {result}
                        </a>
                     </p>
                  </div>
               ) : (
                  <div
                     id="reader"
                     className="lg:w-[120vh]  w-[40vh] text-slate-400 rounded-xl font-Inter"></div>
               )}
            </div>
         </div>
      </div>
   );
}
