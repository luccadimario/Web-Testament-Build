import BTCPrice from '../components/CryptoPrice';
import InputField from '../components/inputField';
import Profile from '../components/Profile';
import PurchaseButton from '../components/PurchaseButton';
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css';


import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



  export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    return (
      <body>
        
        {/*main text div*/}
        <div className = "fixed w-screen">
          <div className="flex flex-1 pb-32 relative h-screen isolate px-6 pt-14 lg:px-8 justify-center items-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                The Web Testament
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                The complete, community made, history of the internet.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/input"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-gray-300 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Get started
                </a>
                <a href="/about" className="text-sm font-semibold leading-6 text-gray-300">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
      
    
    )
  }