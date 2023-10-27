import React from 'react'

const Certificate = () => {
  return (
    <div className='mt-[90px] md:p-16'>

        <div className='mb-12'>

            <h1 className='md:text-3xl text-xl text-center uppercase font-serif'>Certificates</h1>


        </div>
        


        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">


          <div className='w-full mx-auto'>
            <img src="/Certificates/ISO9001_2015.PNG" alt="Trendy Pants and Shoes"
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg md:h-[400px]" />
                <div className='text-[12px] md:text-lg  text-center mt-2 font-semibold'>ISO 9001:2015 Quality Management System</div>

          </div>


          <div className='w-full mx-auto'>
            <img src="/Certificates/ISO14001_2015.PNG" alt="Trendy Pants and Shoes"
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg md:h-[400px]" />
              <div className='text-[12px] md:text-lg  text-center mt-2 font-semibold'>ISO 14001:2015 Environment Management System</div>
          </div>

          <div>
            <img src="/Certificates/ISO45001_2018.PNG" alt="Trendy Pants and Shoes"
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg md:h-[400px]" />
               <div className='text-[12px] md:text-lg  text-center mt-2 font-semibold'>OHSAS 45001:2018 Health & Safety Management System</div>
          </div>


          <div>
            <img src="/Certificates/udyam.PNG" alt="Trendy Pants and Shoes"
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg md:h-[400px]" />
               <div className='text-[12px] md:text-lg text-center mt-2 font-semibold'>Certificate of MSME</div>
          </div>




        </div>




    </div>
  )
}

export default Certificate