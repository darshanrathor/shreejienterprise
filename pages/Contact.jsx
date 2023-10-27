import React from 'react'

const Contact = () => {
  return (
    <div>
      


   
<div class="container md:border-2  rounded-xl p-[40px] md:p-[80px] md:max-w-[1000px] my-24 mx-auto md:px-6">

  <section class="">
    <div class="flex flex-wrap justify-evenly items-center ">
      <div class="mb-10  text-left w-full  ml-0 justify-en sshrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
        <h2 class="mb-6  text-3xl font-bold">Contact us</h2>


     
        <p class="mb-2  ">
        B-71, Govind Gordhan Co-Op, Hsg., Soc.,
Popat Niwas, Kandivali (West), Mumbai – 67
        </p>
        <p class="mb-2 ">
        +91 9930037577 / 9223335293
        </p>
        <p class="mb-2 ">
        shreejienterprises452011@gmail.com
        </p>
      </div>



      <div class="mb-12  w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 md:max-w-[500px]">
        <form className=' '>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input type="text"
              class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none 
              transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary
               data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none
                [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput90" placeholder="Name" />
            <label
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6]
               text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] 
               peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem]
                peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none
                 "
              for="exampleInput90">Name
            </label>
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input type="email"
              class="peer block min-h-[auto] w-full rounded border-2
               bg-transparent py-[0.32rem] px-3 leading-[1.6]
                outline-none transition-all duration-200 ease-linear 
                focus:placeholder:opacity-100 peer-focus:text-primary 
                data-[te-input-state-active]:placeholder:opacity-100 
                motion-reduce:transition-none 
                
                  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInput91" placeholder="Email address" />
            <label
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
              leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              for="exampleInput91">Email address
            </label>
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <textarea
              class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
            <label for="exampleFormControlTextarea1"
              class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%]
               origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500
                transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem]
                 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none
               ">Message</label>
          </div>

          <button type="button" 
            class="mb-6 inline-block w-full  rounded bg-primary px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal
             border-2 hover:bg-red-700 bg-red-500">
            Send
          </button>
        </form>
      </div>
    </div>
  </section>
 
</div>








    </div>
  )
}

export default Contact