import React from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col min-h-screen bg-slate-800 flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="mb-12 grid text-center text-Neutral-100 bg-red-600 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-6 lg:text-left">
      <Link
          href="/copy"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          
            PKSP{' '}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Security and housekeeping solutins.
          </p> */}
        </Link>
     
     
     
     
      <Link
          href="/hello"
  
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            ABOUT US{' '}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            KNOW MORE ABOUT US &nbsp;
          </p> */}
        </Link>

        <Link
          href="/solution"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          
            SOLUTIONS{' '}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Security and housekeeping solutins.
          </p> */}
        </Link>

        <Link
          href="/career"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {'CAREER'}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
             we welocme you in Pk service provider &nbsp;.
          </p> */}
        </Link>

        <Link
          href="https://www.youtube.com/@comicalinfo"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
             {'SOCIAL'}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
             By clicking this you will go on our you tube chanel .
          </p> */}
        </Link>


      <Link
          href="/contact"
         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-1 text-2xl font-semibold`}>
            CONTACT US{' '}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span> */}
          </h2>
          {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
             Call us &nbsp;
          </p> */}
         </Link> 
         </div> 
      <div className="z-18 font-mono flex content">
        {/* <div> */}
          
        <h1 className = "text-xl font= semibold ">
          
                PK SERVICE PROVIDERS {' '}
          <br/>
          <br/>
          {/* <code className="font-size: large font-weight:900"></code> */}
        </h1>
        {/* </div> */}
        {/* <div className="h-92 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-18 lg:pointer-events-auto lg:p-0"
            href="/hello"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            
            PKSP{' '}
            <Image
              src="/assets/abhi.jpg"
              alt="abhi"
              className="dark:invert"
              width={5}
              height={4}
              priority
            />
          </Link>
        </div> */}
      </div>

      <div className = "flex place-items-center after:absolute z-10 md:h-[540px] h-[320px] w-full after:translate-x-1/2 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']  after:dark:from-sky-900 after:dark:via-[#0141ff]/40 ">
       {/* <header className = "flex items-center justify-center mb-12"> */}
        <video
        autoPlay={true}
        loop
        muted
        playsInline={true}
        className="absoluete z-10 w-auto min-w-full min-h-full max-w-full max-h-full h-full"
        >
          <source src="/assets/PKSP.mp4" type="video/mp4" />
           does not support
        </video> 
        {/* </header> */}
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/han.jpg"
          alt="Next.js Logo"
          width={230}
          height={270}
          priority
          /> */}
      </div>
{/* 
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/solution"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-purple-600`}>
          
            SOLUTIONS{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Security and housekeeping solutins.
          </p>
        </Link> */}

        {/* <Link
          href="/hello"
  
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            HOME{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            KNOW MORE ABOUT US &nbsp;
          </p>
        </Link> */}

        {/* <Link
          href="/career"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {'CAREER'}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
             we welocme you in Pk service provider &nbsp;.
          </p>
        </Link> */}

        {/* <Link
          href="https://www.youtube.com/@comicalinfo"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
             {'SOCIAL'}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
             By clicking this you will go on our you tube chanel .
          </p>
        </Link> */}

        {/* <Link
          href="/contact"
         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <h2 className={`mb-4 text-2xl font-semibold`}>
            CONTACT US{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
             Call us &nbsp;
          </p>
         </Link> 
      </div> */}
    </main>
  )
}
