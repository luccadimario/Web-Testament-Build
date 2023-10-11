import '../App.css'
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react'
export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true)
  }, []);
    return (
    <body>
      <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms]"
        enterFrom="opacity-0 -translate-y-10"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-10"
        >
      <div className="container my-24 mx-auto md:px-6 bg-transparent rounded-3xl">
        <section className="mb-16 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <header className="text-gray-300 mb-12 text-6xl font-bold">About us</header>
          </div>
        </section>
      </div>
      </Transition>
      <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms] delay-1000"
        enterFrom="opacity-0 -translate-x-0"
        enterTo="opacity-100 -translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 -translate-x-0"
      >
        <section className="mb-10 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h1 className="text-gray-300 mb-12 text-3xl font-bold">The Web Testament is an attempt at forever immortalizing a piece of internet history that anyone and everyone can contribute to.</h1>
          </div>
        </section>
    </Transition>
    <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms] delay-[2000ms]"
        enterFrom="opacity-0 -translate-x-0 translate-y-20"
        enterTo="opacity-100 -translate-x-0 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0 translate-y-0"
        leaveTo="opacity-0 -translate-x-0 translate-y-20"
      >
        <section className="mb-8 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h1 className="text-gray-300 mb-12 text-3xl font-bold">Our Goals:</h1>
          </div>
        </section>
    </Transition>
    <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms] delay-[3500ms]"
        enterFrom="opacity-0 -translate-x-20 translate-y-0"
        enterTo="opacity-100 -translate-x-0 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0 translate-y-0"
        leaveTo="opacity-0 -translate-x-20 translate-y-0"
      >
        <section className="mb-4 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h1 className="text-gray-300 mb-12 text-3xl font-bold">1. Unify the internet</h1>
          </div>
        </section>
    </Transition>
    <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms] delay-[4000ms]"
        enterFrom="opacity-0 -translate-x-20 translate-y-0"
        enterTo="opacity-100 -translate-x-0 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0 translate-y-0"
        leaveTo="opacity-0 -translate-x-20 translate-y-0"
      >
        <section className="mb-4 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h1 className="text-gray-300 mb-12 text-3xl font-bold">2. Create a space where freedom of expression is upheld</h1>
          </div>
        </section>
    </Transition>
    <Transition
        show={isLoaded}
        enter="transition ease-out duration-[2000ms] delay-[4500ms]"
        enterFrom="opacity-0 -translate-x-20 translate-y-0"
        enterTo="opacity-100 -translate-x-0 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0 translate-y-0"
        leaveTo="opacity-0 -translate-x-20 translate-y-0"
      >
        <section className="mb-4 text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h1 className="text-gray-300 mb-12 text-3xl font-bold">3. Make history</h1>
          </div>
        </section>
    </Transition>
  </body>
    )
}