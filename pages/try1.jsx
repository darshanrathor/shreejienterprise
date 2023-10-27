import React from 'react'
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const try1 = () => {
  return (
    <div>
      



      <div className="bg-zinc-50 px-5 md:py-20  py-14">

			<div className=" max-w-6xl flex mx-auto w-full flex-col md:flex-row text-center items-center justify-center gap-6 ">

				<div className="text-center w-full items-center ">
					<div className='flex flex-col gap-2 text-center justify-start items-center mr-10'>
						<h2 className="md:text-4xl text-center text-3xl font-playfair uppercase  text-zinc-800 ">
							
							Recognition
						</h2>
						<div className='flex flex-row-1 text-center justify-center items-center mt-3'>
							<div className="w-[100px] h-px  bg-[#f33d3d] center  mr-[20px]" />
							

							<div className="w-[100px] h-px  bg-[#f33d3d] ml-[20px] " />
						</div>

					</div>




					<p className="max-w-[500px] text-center md:text-lg font-sans mt-7">"
          
          We feel that our services are delivered to the highest standards at all times and
we continually monitor the progress of our projects. Our aim is to provide the
best possible service within the utility & construction industry whilst
maintaining the highest standard of customer satisfaction we can achieve."</p>
				</div>

				<div className="w-full ">
					<div className=" mx-auto max-w-[400px] w-full ">
						<div className="relative flex flex-col w-full ">
							<Carousel
								autoPlay
								infiniteLoop
								showStatus={false}
								showIndicators={true}
								showThumbs={true}
								interval={2000}
							>
								<div className="h-[300px] w-full">
									<Image src="/gallery/download.png" alt="family" objectFit="fill" layout="fill" />
								</div>
									<div className="h-[300px] w-full">
									<Image src="/gallery/download.png" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[250px] w-full">
									<Image src="/gallery/download.png" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/gallery/download.png" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/gallery/download.png" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/gallery/download.png" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/gallery/download.png" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/gallery/download.png" alt="family" objectFit="fill" layout="fill" />
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default try1