import Link from 'next/link'
import React, { useState  } from 'react'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'
import {BsFacebook,BsWhatsapp} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
  
    const toggleMenu = () => {
      setToggle(!toggle);
    };

    const passclose = () => {
       
        setToggle(false);
      };




  return (
    <>


         
        <div className= 'sticky  py-4   top-0 z-20 w-[100%] bg-white shadow-sm' href='#'>
            <div className='conatiner mx-auto flex justify-between  px-2 items-center md:px-4 '>
            
                <div className='flex md:mr-10  justify-between items-center align-center left-0 '>
                <Link href="/" >
                    <div className='flex  items-center align-center justify-between gap-1 '>
                <Image src="/selogo/logo.png" width={70} height={70} className='md:w-[]' />
                    <div className=' text-red-800  font-serif uppercase underline text-lg gap-3 '>
                        Shreeji Enterprises
                    </div> 
                    </div>
                    </Link>
                    


                </div>

               

                <div className=' hidden md:flex md:mr-20 justify-center   ' >
  
                    <Link href="/" className='hover:hover:text-red-800 px-4 text-lg'>Home</Link>
                    <Link href="/About" className='hover:text-red-800 px-4 text-lg'>About Us</Link>
                    <Link href="/Whatwedo" className='hover:text-red-800 px-4 text-lg'>Service</Link>
                    <Link href="/Policy" className='hover:text-red-800 px-4 text-lg'>Policy & safety</Link>
                    <Link href="/gallery" className='hover:text-red-800 px-4 text-lg'>Gallery</Link>
                    <Link href="/Contact" className='hover:text-red-800 px-4 text-lg'>Contact Us</Link>
                    

                </div>

            
                <div className=' mr-6  '>
                <Link href="/Contact" >

                    <button  className=' hidden md:block border border-gray-400 px-4 py-1 rounded-md hover:bg-red-700 hover:text-white'> Request Quote</button> 
                    </Link>
                     </div>

                    


               {toggle ?(
                 <AiOutlineClose onClick={()=>setToggle(!toggle)}  size={30} className='md:hidden block'/>

               ):(<FiMenu onClick={()=>setToggle(!toggle)}  size={30} className='md:hidden block'/>
               )
               
               }
              
                
               

            </div>  

            {/*Responsive Menu  */} 
            
            
          

<div className={`duration-300 md:hidden bg-black/90 text-white w-[70%] h-screen flex flex-col fixed top-[90px]
 ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
      <Link href="/" onClick={passclose} className='hover:text-gray-400 p-5'>Home</Link>
      <Link href="/About" onClick={passclose} className='hover:text-gray-400 p-5'>About Us</Link>
      <Link href="/Whatwedo" onClick={passclose} className='hover:text-gray-400 p-5'>Service</Link>
      <Link href="/Policy" onClick={passclose} className='hover:text-gray-400 p-5'>Policy & safety</Link>
      <Link href="/gallery" onClick={passclose} className='hover:text-gray-400 p-5'>Gallery</Link>
      <Link href="/Contact" onClick={passclose} className='hover:text-gray-400 p-5'>Contact Us</Link>
      
     

    </div>









           

          

           

            




        </div>
    </>
  )
}

export default Navbar