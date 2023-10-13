import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link';

export default function hello() {
    return (

        <main
        className={`flex flex-col min-h-screen bg-slate-800 flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="mb-12 grid text-center text-Neutral-100 bg-red-600 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-5 lg:text-left">
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
            <h2 className={`mb-3 text-2xl font-semibold text-purple-600`}>
            
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
        
    <div className=" ">

      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/card.jpg"
          
          alt=" card Logo"
          width={530}
          height={370}
          
          priority

          
        />
<br/><br/><br/>  
        <h1>
        {/* <br/>
        <br/>   */}

            PK service providers Corporate Centre – Delhi <br/>

              A-28 & 29, Phase 1, Okhla Industrial Area, New Delhi -110 020.<br/>

            Tel:+91-11-4646 4444/ 4646 5555 | Fax: 011 4646 440 


        
        </h1>
    </div>
    </main>
  )
}