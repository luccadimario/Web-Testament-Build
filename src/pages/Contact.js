import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
export default function Contact() {
    const [isSent, setIsSent] = useState(false);
    return (
        <>
    {!isSent ? (
  <div className="container my-24 mx-auto md:px-6 bg-slate-300 rounded-3xl">
    <section className="mb-32 text-center">
      <div className="mx-auto max-w-[700px] md:px-3">
        <h2 className="mb-12 text-3xl font-bold text-gray-700">Contact us</h2>
        <form>
          <div className="relative mb-6" data-te-input-wrapper-init = "">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-gray-100 border-0 rounded shadow outline-none"
            />
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init = "">
            <input
              type="email"
              placeholder="example@example.com"
              name="email"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-gray-100 border-0 rounded shadow outline-none"
            />
          </div>
          <div className="relative mb-6" data-te-input-wrapper-init="">
            <textarea
              placeholder="Your message"
              name="message"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-gray-100 border-0 rounded shadow outline-none"
            />
          </div>
          <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
            <input
              className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-gray-100 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-gray-100 checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-gray-100 checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox"
              defaultValue=""
              id="exampleCheck96"
              defaultChecked=""
            />
            <label
              className="text-gray-700 inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="exampleCheck96"
            >
              Send me a copy of this message
            </label>
          </div>
          <button
            type="button"
            onClick={() => {setIsSent(true)}}
            data-te-ripple-init=""
            data-te-ripple-color="light"
            className="mb-6 inline-block w-full rounded bg-blue-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-gray-100 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  </div> )
  : 
  (<div className="container my-24 mx-auto md:px-6 bg-slate-300 rounded-3xl">
    <section className="mb-32 text-center">
      <div className="p-8 mx-auto max-w-[700px] md:px-3">
        <h2 className="mb-12 text-3xl text-gray-700 font-bold">
            Thanks for the information!
        </h2>
        <h3 className="text-gray-700">
            We'll get back to you as soon as possible.
        </h3>
        </div>
    </section>
  </div>)
  }
</>
    )
}