import { RiPresentationFill } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import { IoBarChartSharp } from "react-icons/io5";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { FaUserGear } from "react-icons/fa6";

const products = [
    {
      id: 1,
      name: 'Discover',
      href: '#',
      icon: <RiPresentationFill size={50}/>,
      
      color: 'Information Gathering, Project Planning, Project Readiness',
    },
    {
      id: 2,
      name: 'Define',
      href: '#',
      icon: <PiProjectorScreenChartLight size={50}/>,
      
      color: 'Scope Definition, Gap Assessment',
    },
    {
      id: 3,
      name: 'Design',
      href: '#',
      icon: <SlScreenDesktop size={50}/>,
      
      color: 'Development of Framework, Remediation Support',
    },
    {
      id: 4,
      name: 'Deliver',
      href: '#',
      icon: <FaUserGear size={50}/>,
      
      color: 'Development of Framework, Remediation Support',
    },
    {
      id: 5,
      name: 'Drive',
      href: '#',
      icon: <IoBarChartSharp size={50}/>,
      
      color: 'On-going sustenance',
    },
  ]
  
  export default function FiveD() {
    return (
      <div className="bg-gray-50">
      
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
          
         <h2 className="flex justify-center  text-5xl  font-bold text-gray-900">5D Working Process</h2>
          <p className="flex justify-center text-xl  mt-9 text-gray-500">At Code and Secure, we take a risk-based approach to address the complexities encountered during strategy rollout.</p>
          <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5   justify-items-center ">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col bg-white justify-items-center content-center items-center group relative border-t-4 w-40 h-80  ">
               
                <div className="mt-4 ">{product.icon}</div>
                
                
                  <div className="mt-4 ">
                    <h3 className="justify-self-center text-l font-bold text-gray-900">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>                  
                   
                  </div>
                  <p className="justify-self-stretch mt-1 p-3 text-sm text-gray-500">{product.color}</p>
                  
                </div>
              
            ))}
          </div>
          <div>
              
          <div className="mt-6 flex justify-center items-baseline gap-x-4">
          <span className=" text-xl  mt-9 text-gray-500">IT Technology services built specifically for your business.</span>
             
              <button
                type="submit"
                className="  bg-indigo-500 px-7 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Find Your Solution
              </button>
              </div>
              
              </div>
        </div>
      </div>
    )
  }
  