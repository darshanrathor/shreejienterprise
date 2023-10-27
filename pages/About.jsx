import React from 'react'
import Image from 'next/image'
import Section2 from '@/components/Section2'
import Certificate from '../components/Certificate'
import Team from '../components/Team'
import Try1 from '../pages/try1'


const About = () => {
  return (

    <>


<div className='p-4 md:p-1 items-center justify-center'>




    {/*

    <div className='  md:border-2 md:max-w-[800px] p-4 mx-auto  text-center items-center justify-center'>

        <div className='  flex flex-col items-center '>
            <div>
                <Image src="/selogo/logo.png" width={150} height={150} />
            </div>
    
            <div className=' md:text-lg font-serif underline uppercase'>
                        Shreeji Enterprises
            </div>

            <h1 className='md:text-2xl text-xl font-semibold w-full mt-12 uppercase font-serif'>About Shreeji Enterprises</h1>


                <div className='mt-10 font-serif text-lg md:text-xl'>
                    <p>About 35 years ago our family commenced “Vaishali Constructions Company”,
In 2011, the expansion of the company took place and “SHREEJI ENTERPRISES”
was incorporated.</p>
                </div>

                <div className='mt-6 font-serif text-lg md:text-xl'>
                    <p>We provide services to Tata Power Co Ltd, Torrent Power, KEI Industries,
Oberoi Reality, Rustomjee, Shapoorji Pallonji and other infrastructure and Real
estate companies.</p>
                </div>

                <div className='mt-6 font-serif text-lg md:text-xl'>
                    <p>The company is dedicated to organizations seeking above management
facilities. We are assisted by a team of qualified and experienced engineers
who are well‐ versed in execution of all kinds of projects, with a stubborn
commitment to quality and project schedule to the entire satisfaction of all our
esteemed clients.</p>
                </div>

    </div>            

    </div>
    */}


<div class="container my-24 mx-auto md:px-6">

  <section class="mb-32 ">
    <div
      class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
      <div class="flex md:flex-row items-center justify-between">
      <div>
                <Image src="/service/Electrical.PNG" width={450} height={300} />
            </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div class="px-6 py-12 md:px-12">
            <h2 class="mb-4 text-3xl font-serif ">
            About SE
            </h2>
           
            <p class="mb-6 font-serif  ">
            About 35 years ago our family commenced “Vaishali Constructions Company”,
In 2011, the expansion of the company took place and “SHREEJI ENTERPRISES”
was incorporated.
            </p>
            <p class="mb-6 font-serif ">
            We provide services to Tata Power Co Ltd, Torrent Power, KEI Industries,
Oberoi Reality, Rustomjee, Shapoorji Pallonji and other infrastructure and Real
estate companies.
            </p>
            <p class="font-serif">
            The company is dedicated to organizations seeking above management
facilities. We are assisted by a team of qualified and experienced engineers
who are well‐ versed in execution of all kinds of projects, with a stubborn
commitment to quality and project schedule to the entire satisfaction of all our
esteemed clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>






    <Team />

   

    <Section2 />

    <Try1 />

    <Certificate />

    

  
    </div>



    </>
  )
}

export default About