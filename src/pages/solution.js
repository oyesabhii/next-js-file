import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Link from 'next/link';

export default function hello() {
    return (
        
    <div className=" ">

      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/india.jpg"
          
          alt=" card Logo"
          width={530}
          height={370}
          
          priority

          
        />
<br/><br/><br/>  
        <h1>
        <br/>
        <br/>  

        PK SERVICE PROVIDER 
                                  No one covers the Nation like us


        
        </h1>

  <br/>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/GAURD.jpg"
          
          alt=" card Logo"
          width={530}
          height={370}
          
          priority
     />
    </div>

    )
}