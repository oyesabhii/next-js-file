
import React from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link';


export default function hello() {



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
    <div>
        <h1>
        PKSERVICE PROVIDER commenced operations from 2007 and has since transformed into one of the market leaders in the Asia Pacific region, <br/> in Security, Facility Management and Cash Logistics segments, all of which are essential to the functioning of a healthy economy.<br/>

        <br/>This would only be possible by leveraging the power of technology. The group has adopted a tech-led approach which has steadily brought greater efficiency <br/>to the operation and offered a unique customer experience through its digital platform like iOPS, ARK, SalesMaxx, NQC, RQC, iPorter, SSDP, TFM,<br/> iQMS, iFMOps.<br/>


<br/>PK service provider has the largest command center in India to manage 50 sites while establishing a leadership position in the e-surveillance industry. <br/> Over the years, the enterprise has steadily and strategically expanded its operations. Currently PKSP is present across 28 Indian states and 8 Union Territories and has penetrated international markets like Australia, New Zealand and Singapore.<br/>

        <br/>The relentless focus on innovation to provide evolved solutions to its customers, has resulted in emerging as one of the fastest growing Security, <br/>Facility Management and Cash Logistics Solutions provider in India and the Asia-Pacific region.

.


        </h1>
        </div>

 </main>
  )
}