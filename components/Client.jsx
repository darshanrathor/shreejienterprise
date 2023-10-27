import React from 'react'
import Image from 'next/image'

const Client = () => {
  return (
    <>
    <div className=''>

        <div className='text-center mb-6  '>
            <h1 className='text-2xl font-serif'> Major Client </h1>

        </div>

        <div className=' overflow-scroll md:overflow-auto'>
        
        <div class="flex p-6 md;p-0  justify-center min-w-max  w-full  gap-10 items-center">
            <div class="opacity-100 min-w-[100px] hover:opacity-80 bg-zinc-900 transition-opacity duration-300 ease-in">
                <img src="/Client/tat.png" alt="bbc" loading="lazy" class="max-w-[165px] w-[100px] h-full"/>
                    </div>
                    <div class=" min-w-[150px] opacity-100 hover:opacity-80 transition-opacity duration-300 ease-in">
                        <img src="/Client/torrent.png" alt="Gadgets 360" loading="lazy" class="max-w-[165px] w-full h-full "/>
                            </div>
                            <div class="opacity-100 min-w-[150px] hover:opacity-80 transition-opacity duration-300 ease-in">
                                <img src="/Client/kei.png" alt="Entrepreneur" loading="lazy" class="max-w-[165px] w-full h-full"/>
                                    </div>
                                    <div class="opacity-100 min-w-[150px] hover:opacity-80 transition-opacity duration-300 ease-in">
                                        <img src="/Client/Shapoorji.png" alt="Bwdisrupt" loading="lazy" class="max-w-[165px] w-full h-full"/>
                                            </div>
                                            <div class="opacity-100 min-w-[150px] hover:opacity-80 transition-opacity duration-300 ease-in">
                                                <img src="/Client/oberoi.png" alt="Newsbarons" loading="lazy" class="max-w-[165px] w-full h-full"/>
                                                    </div>
        </div>
        </div>



        </div>
    </>
  )
}

export default Client;