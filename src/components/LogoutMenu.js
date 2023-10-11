import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { PhoneIcon } from '@heroicons/react/20/solid'
import {
  FingerPrintIcon,
  BellAlertIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';

const solutions = [
  { name: 'Current Exchange Rates', description: 'See the top 10 currently traded cryptocurrencies', href: '/crypto', icon: CurrencyDollarIcon },
  { name: 'Terms of Service', description: 'Read our terms of service and content policy', href: '/terms', icon: FingerPrintIcon },
  { name: 'Notifications', description: 'Set up notifications to get live updates about our development', href: '/notifications', icon: BellAlertIcon}

]
const callsToAction = [
  { name: 'Contact us', href: '/contact', icon: PhoneIcon },
]


export default function Example() {
    const {isAuthenticated, user } = useAuth0();
    let names;
    isAuthenticated &&  (names = user.name.split(' '));
  return (
    isAuthenticated &&(
    <Popover className="relative">
      <Popover.Button className="pl-[18px] relative inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-300">
        {user.picture ? 
          <img className="overflow-hidden w-10 h-10 rounded-full p-1 ring-2 ring-gray-500 dark:ring-gray-500" 
            src={user.picture} 
            alt="Bordered avatar"
          /> : 
          <div className="relative inline-flex items-center ring-2 ring-gray-500 dark:ring-gray-500 justify-center w-10 h-10 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-300">
            <span className="absolute font-medium text-gray-600 dark:text-gray-600">{names[1] ? names[0].substring(0,1) + names[1].substring(0,1) : names[0].substring(0,1)}</span>
          </div>
        }
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-10 -translate-x-[300px]"
        enterTo="opacity-100 translate-y-0 -translate-x-[300px]"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0 -translate-x-[300px]"
        leaveTo="opacity-0 -translate-y-10 -translate-x-[300px]"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="absolute w-screen max-w-xs flex-auto overflow-hidden rounded-3xl bg-slate-300 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <LogoutButton/>
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    )
  )
}
