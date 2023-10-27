import Image from "next/image";



import React from 'react'

export default function Hse() {
    

	return (
		<div className="w-full  mb-[100px]  text-[#184029]">
			<div className="w-full flex flex-col items-center text-center justify-center ">
				<div className="flex w-full  justify-center items-center">

					<div className='flex flex-col text-center justify-center items-center'>
						<h2 className="text-3xl w-full  font-serif  tracking-wider md:text-4xl ">
                        HSE Policy 
						</h2>
					

					</div>

				</div>
			</div>
			<div className="capitalize mt-8 flex flex-col max-w-3xl gap-2  items-center font-body  px-5 mx-auto text-center">
				<p className="leading-7  text-lg">
                The HSE (Health, Safety & Environment) Policy of Shreeji Enterprises
is designed to comply with the standards of OSHA and to endeavor to
maintain a safe and injury free workplace.
				</p>
			
			</div>
			<div className="flex max-w-6xl px-5 pt-14 md:pt-16 mx-auto w-full  flex-col items-center justify-between sm:flex-row">
				<div className="w-full sm:w-1/2 ">
					<div className=" w-full h-[300px] md:h-96 relative">
						<Image
							src="/Bakground/safety.PNG"
							layout="fill"
							className="rounded"
							objectFit="cover"
							quality={100}
						/>
					</div>
				</div>
				<div className="w-full p-10 md:p-0 flex-col gap-7 md:ml-[50px] flex justify-center md:w-1/2">

                <ul class=" list-disc text-lg">
  <li
    class="w-full  border-b-2 border-neutral-100 border-opacity-100 py-4 ">
    It is a company policy that accident prevention be a prime concern of
all employees. This includes the safety and well-being of employees,
workmen, sub-contractors and customers, as well as prevention and
damage to property and equipment.
  </li>
  <li
    class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 ">
    To provide adequate control of the health, safety risk arising from our
work activities.
  </li>
  <li
    class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 ">
     To provide and maintain safe plant and equipment
  </li>
  <li
    class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 ">
     To provide training, instruction and supervision
  </li>
  <li class="w-full py-4"> Ensuring all the employees are competent to do their tasks and to give
them adequate training.</li>

<li class="w-full py-4">
 To ensure materials and substances are safely stored, handled and
transported</li>
</ul>



					
						</div>
				
				</div>
			</div>
	
	);
}

function Text({ name }) {
	return (
		<>
			<div className="flex gap-x-2 items-center">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
				</svg>				<p className="md:text-lg">{name}</p>
			</div>
		</>
	);
}

  