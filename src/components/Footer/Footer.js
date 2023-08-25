import React from 'react'
import LogoLight from '../Logo/LogoLight';

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] bottom-0 left-0 z-20 w-full p-4 bg-stone-800 border-t border-white-200 shadow ">
        <div className='max-w-screen-xl justify-between mx-auto p-4'>
          
        <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="..."><LogoLight/></div>

            <div className="flex space-x-4 sm:mt-0 items-center">
              <span className='text-damac'>Follow us on</span>
              <button href="#" className="text-white hover:text-damac">
                  <span className="lab la-facebook mr-1 "></span>
                  <span className="sr-only">Facebook page</span>
              </button>
              
              <button href="#" className="text-white hover:text-damac ">
                <span className="lab la-twitter mr-1 "></span>
                  <span className="sr-only">Twitter</span>
              </button>
              <button href="#" className="text-white hover:text-damac ">
              <span className="lab la-instagram mr-1 "></span>
                  <span className="sr-only">Instagram</span>
              </button>
              <button href="#" className="text-white hover:text-damac ">
              <span className="lab la-linkedin mr-1 "></span>
                  <span className="sr-only">LinkedIn</span>
              </button>
              <button href="#" className="text-white hover:text-damac ">
                <span className="lab la-youtube mr-1 "></span>
                  <span className="sr-only">Youtube</span>
              </button>
            </div>
            <div className="col-span-2">
              <div className="flex flex-col lg:flex-row space-x-5 sm:justify-center sm:mt-0 items-center">
                <span className='text-damac'>Subscribe to offers</span>
                <div className="relative w-full lg:w-1/2 border-white">
                    <input type="search" className="block p-2.5 w-full z-20 text-sm text-white bg-stone-800 rounded-r-lg border-l-gray-50 border-2 border-gray-300" placeholder="Enter your email address" required />
                    <button type="submit" className="absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-white bg-damac rounded-r-lg border ">
                        <span>Subscribe</span>
                    </button>
                </div>
              </div>
            </div>
            
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 mt-3">
            
          
        </div>        

        </div>
    </footer>
  )
}
