import { GiBigGear } from "react-icons/gi";
import { SlScreenDesktop } from "react-icons/sl";
import { IoBarChartSharp } from "react-icons/io5";

const products = [
    {
      id: 1,
      name: 'Website Development',
      href: '#',
      icon: <SlScreenDesktop size={50}/>,
      
      color: 'Custom websites, responsive design, SEO, e-commerce, secure, ongoing support.',
    },
    {
      id: 2,
      name: 'Softwere Development',
      href: '#',
      icon: <SlScreenDesktop  size={50}/>,
      
      color: 'Crafting innovative, secure applications tailored to your unique business needs.',
    },
    {
      id: 3,
      name: 'Security Auditing',
      href: '#',
      icon: <GiBigGear size={50} />,
      
      color: 'Comprehensive security audits identifying vulnerabilities to ensure robust data protection.',
    },
    {
      id: 4,
      name: 'Endpoint Security',
      href: '#',
      icon: <IoBarChartSharp size={50}/>,
      
      color: 'Comprehensive protection for endpoints, defending against threats and vulnerabilities.',
    },
  ]
  
  export default function CTA() {
    return (
      <div className="bg-slate-950">
      
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <h2 className="flex justify-center  text-l  font-bold text-indigo-700">what we offering</h2>
         <h2 className="flex justify-center  text-5xl  font-bold text-white">We offer premium services</h2>
         <h2 className="flex justify-center  text-5xl  font-bold text-white">Exclusively for you.</h2>
         
          <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-items-center ">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col bg-slate-950 justify-items-center content-center items-center group relative border-1 border-gray-500 w-60 h-70  ">
               
                <div className="mt-4 text-white">{product.icon}</div>
                
                
                  <div className="mt-4 ">
                    <h3 className="justify-self-center text-l font-bold text-white">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>                  
                   
                  </div>
                  <p className=" mt-1 justify-self-stretch pl-6 p-2 text-sm text-white">{product.color}</p>
                  <a  href='#'>
                   <span className="text-white" aria-hidden="true">Read more &rarr;</span>
                  </a>
                </div>
              
            ))}
          </div>
          <div>
              
        
              
              </div>
        </div>
      </div>
    )
  }
  