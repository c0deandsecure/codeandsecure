import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
       <div className="-mt-12 -mr-12 p-12  lg:top-1 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-[48rem] max-w-none  bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto  lg:w-full lg:max-w-7xl  lg:gap-x-8 lg:px-8">
          <div className="lg:pl-4">
            <div>
              <p className="text-base/7 font-semibold text-indigo-600">WHO WE ARE</p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 ">
              We provide best design Solution in town
              </h1>
              <p className="mt-6 text-xl/7 text-gray-700">
              Code and Secure is a leading provider of IT consulting, software development and cybersecurity services. We specialize in delivering personalized solutions that address your technical aspirations and business challenges. Our expertise extends to assisting businesses and organizations of all sizes in safeguarding their networks and data against the ever-evolving landscape of cyber threats. From tailored software development to comprehensive cybersecurity training and solutions, we are committed to securing your digital assets and driving your success forward.
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4 lg:pl-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              
              <ul role="list" className="mt-4 space-y-7 text-gray-600">
                <li className="flex gap-x-3">
                  
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Cyber Security</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Web Technology
                    </strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">IT Support</strong> 
                  </span>
                </li>
              </ul>
              
            </div>
            <button
                type="submit"
                className="flex mt-9  bg-indigo-500 px-8 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
              >
                Explore Now
              </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}