import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsFacebook,BsWhatsapp} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'

const Footer = () => {
  return (
    <>
        

        
<footer
  class="flex flex-col items-center bg-black/90  md:text-center  lg:text-left">
  <div class="container p-6 text-neutral-800 ">
    <div class="grid gap-4 lg:grid-cols-3 ">


         {/* section 1 */}
      <div class="mb-6 md:mb-0  items-cente justify-center  text-white">
      <a href="/" class="flex items-center ">
                 
                 <Image src="/selogo/logo.png" width={50} height={60} />
                       <div className=' px-2  md:text-2xl text-2xl font-light    uppercase'>
                           Shreeji Enterprises
                       </div>
                 </a>

        <p class="mb-4 mt-6 md:max-w-[400px] w-full md:mt-6 font-light">
        About 35 years ago our family commenced “Vaishali Constructions Company”,
In 2011, the expansion of the company took place and “SHREEJI ENTERPRISES”
was incorporated
        </p>
      </div>

      {/* section 2 */}

      <div className='text-center text-white'>
                  <h2 class="mb-6  md:text-2xl text-3xl font-light   uppercase">Useful Link</h2>
                  <div className='flex flex-col'>
                  <Link href="/" className='hover:hover:text-red-800 px-4 text-lg'>Home</Link>
                    <Link href="/About" className='hover:text-red-800 px-4 text-lg'>About Us</Link>
                    <Link href="/Whatwedo" className='hover:text-red-800 px-4 text-lg'>Service</Link>
                    <Link href="/Policy" className='hover:text-red-800 px-4 text-lg'>Policy & safety</Link>
                    <Link href="/gallery" className='hover:text-red-800 px-4 text-lg'>Gallery</Link>
                    <Link href="/Contact" className='hover:text-red-800 px-4 text-lg'>Contact Us</Link>
                    </div>
              </div>

 {/* section 3 */}

 <div class="mb-10 md:mt-0 mt-6 md:text-left  text-center md:mb-0 text-white">              
              <h2 className=' md:text-2xl font-light text-3xl'>VISIT US</h2>
              <div className='md:max-w-[300px] w-full mt-5 font-light'>
                <span>B-71, Govind Gordhan Co-Op, Hsg., Soc.,
Popat Niwas, Kandivali (West), Mumbai – 67</span><br />


              </div>
          </div>




    </div>
  </div>

  
  <div
    class="w-full bg-black p-4 text-center flex justify-between text-white ">
      <h2> © 2023 All Rights Reserved</h2>
    <h2>Made by Darshan Rathod</h2>
    
  </div>

  
</footer>

    </>

  )
}

export default Footer