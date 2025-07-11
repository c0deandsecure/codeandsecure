import { NavLink } from "react-router";
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'IT services', description: 'Get a better understanding of your traffic', href: '#', icon: ArrowPathIcon },
  
  { name: 'Cyber Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Other Services', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white ">
      <nav aria-label="Global" className=" mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5" end>
            <img
              alt=""
              src="src\assets\logo.png?color=black&shade=600"
              className="h-13 w-60"
            />
          </NavLink>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

           <NavLink to="/"  className="text-sm/6 font-semibold text-gray-900" end>
          Home
          </NavLink>
          <NavLink to="/about"  className="text-sm/6 font-semibold text-gray-900"end>
          About
          </NavLink>
         <NavLink to="/services" end>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Services
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:text-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </NavLink>
          <NavLink to="/career"  className="text-sm/6 font-semibold text-gray-900" end>
          Career
          </NavLink>
          <NavLink to="/testimonial"  className="text-sm/6 font-semibold text-gray-900" end>
          Testimonial
          </NavLink>
          <NavLink to="/contactus" className="text-sm/6 font-semibold text-gray-900" end>
          Contact
          </NavLink>
          <NavLink to="/products"  className="text-sm/6 font-semibold text-gray-900" end>
          Product
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          
        <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>

        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="flex">
        <div className="fixed inset-0 z-10 "  />
        <DialogPanel className=" fixed inset-y-0 right-0 z-10 w-70 overflow-y-auto bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className=" flex items-center justify-between ">
            <NavLink to="/" className="-m-1.5 p-1.5"end>
              <img
                alt=""
                src="src\assets\logo.png?color=indigo&shade=600?color=indigo&shade=600"
                className="h-9 w-auto"
              />
            </NavLink> 
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-3 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 py-6 ">
              <NavLink to="/"
                  
                  className="-mx-3 border-t border-b border-gray-700 block  px-3 py-2 text-base/7 font-semibold text-white hover:text-indigo-600"
                end>
                  Home
                </NavLink>
                <NavLink to="/about"
                  href="#"
                  className="-mx-3 border-b border-gray-700 block  px-3 py-2  text-base/7 font-semibold text-white hover:text-indigo-600"
                end>
                  About
                </NavLink>
                <NavLink to="/services" end>
                <Disclosure as="div" className="-mx-3 border-b border-gray-700 ">
                  <DisclosureButton className=" group flex w-full items-center justify-between  py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:text-indigo-600">
                    Services
                    <ChevronDownIcon aria-hidden="true" className=" size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 ">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block border-b border-gray-700  py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:text-indigo-600"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                </NavLink>
                <NavLink to="/career"
                  className="-mx-3 border-b  border-gray-700 block  px-3 py-2 text-base/7 font-semibold text-white hover:text-indigo-600"
                end>
                  Career
               </NavLink>
                <NavLink to="/testimonial"
                  className="-mx-3 border-b  border-gray-700 block  px-3 py-2 text-base/7 font-semibold text-white hover:text-indigo-600"
                end>
                  Testimonial
                </NavLink>
                <NavLink to="/contactus"
                  className="-mx-3 border-b  border-gray-700 block  px-3 py-2 text-base/7 font-semibold text-white hover:text-indigo-600"
                end>
                  Contact
                </NavLink>
                <NavLink to="/products" 
                  className="-mx-3 border-b  border-gray-700 block  px-3 py-2 text-base/7 font-semibold text-white hover:text-indigo-600"
                end>
                  Product
                </NavLink>
              </div>
              <div className="py-3 ">
                <div                  
                  className="-mx-3  px-3 pb-5 text-base/7 font-semibold text-white"
                >
                  <div>Call Now</div>
                  <div>+91 7587495155</div>
                  <div>Send Email</div>
                  <div>info@codeandsecure.com</div>
                  <div>Mon-Sat 8:00 - 6:30,</div>
                  <div> Sunday-CLOSED</div>              
                  </div>
                </div>
              
               
              
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}