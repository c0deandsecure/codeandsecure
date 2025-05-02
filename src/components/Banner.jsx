import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Banner() {
  return (
    <div className="hidden lg:flex isolate flex items-center gap-x-6 overflow-hidden bg-slate-950  py-2.5 ">
    <div className="flex flex-1 justify-start text-white">
         <button type="button" className="-my-3  p-3 focus-visible:outline-offset-[-4px]"> 
          <MdEmail aria-hidden="true" className="size-4.5 text-blue-800" />
          </button>
          
          <span className="text-sm">info@codeandsecure.com</span>
          <button type="button" className="-my-3  p-3 focus-visible:outline-offset-[-4px]"> 
          <FaLocationDot aria-hidden="true" className="size-4 text-blue-800" />          
          </button>
          <span className="text-sm">Smriti Nagar, Bhilai(C.G.)</span>
          <button type="button" className="-my-3 p-3 focus-visible:outline-offset-[-4px] "> 
          <FaPhoneVolume aria-hidden="true" className="size-4 text-blue-800 cursor-pointer" />
          </button>
          <span className="text-sm">+91 7587495155</span>
          </div>
          
      <div className="flex flex-1 justify-end">
        <button type="button" className="-my-3 p-3 focus-visible:outline-offset-[-4px] "> 
          <FaLinkedin aria-hidden="true" className="size-4 text-white cursor-pointer" />
          </button>
          <button type="button" className="-my-3  p-3 focus-visible:outline-offset-[-4px]"> 
          <FaSquareFacebook aria-hidden="true" className="size-4 text-white" />
          </button>
         
          <button type="button" className="-my-3 p-3 focus-visible:outline-offset-[-4px]"> 
          <FaSquareInstagram aria-hidden="true" className="size-4 text-white" />
          </button>
          <button type="button" className="-my-3 p-3 focus-visible:outline-offset-[-4px]"> 
          <FaSquareWhatsapp aria-hidden="true" className="size-4 text-white" />
          </button>        
        
      </div>    
    </div>
  )
}