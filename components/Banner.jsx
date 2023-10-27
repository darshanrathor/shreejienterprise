import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (



<>
			<div className="w-full mb-0 antialiased ">
				<div className="relative">
					<Carousel
						showThumbs={false}
						autoPlay
						infiniteLoop
						showStatus={false}
						interval={3000}
					>

<div
      class="relative  float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style= {{ backfaceVisibility: 'hidden' }} >
      <img
        src="/service/banner-img-2-4.jpg"
        class="block w-full md:h-[500px] h-[200px] "
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
        <h5 class="md:text-4xl text-2xl font-serif bg-slate-900/50">Fabrication Work</h5>
        
      </div>
    </div>






						 <div
      class="relative mb-0  float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style= {{ backfaceVisibility: 'hidden' }} >
      <img
        src="/service/sunset-singapore-silhouettes-skyline-color-buildings-crane-heavy-equipment-building-site.jpg"
        class="block w-full md:h-[500px] h-[200px] "
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
        <h5 class="md:text-4xl text-2xl font-serif  bg-slate-900/50 ">Civil Work</h5>
        
      </div>
    </div>

						 {/*  <div>
							<Image layout="responsive" src="/imgs/cate_banner.jpg" alt="banner1" width={2030} height={700} />

						</div>
*/}
							 <div
      class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style= {{ backfaceVisibility: 'hidden' }} >
      <img
        src="https://powersolutionme.com/blog/wp-content/uploads/2023/05/Designing-the-Perfect-Wire-Mesh-Cable-Tray-System-for-Your-Network-Needs.jpg"
        class="block w-full md:h-[500px] h-[200px]"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
        <h5 class="md:text-4xl text-2xl font-serif bg-slate-900/50 ">Vertical Cable Laying & Tray Fixing</h5>
       
      </div>
    </div>

						{/* 
						<div>
							<Image layout="responsive" src="/imgs/redsoil_banner.jpg" alt="banner2" width={2030} height={700} />
						</div>
						*/}
							 <div
      class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style= {{ backfaceVisibility: 'hidden' }} >
      <img
        src="/service/6191b348d9a4deee18e3abbe_banner01.jpg"
        class="block w-full md:h-[500px] h-[200px]"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
        <h5 class="md:text-4xl text-2xl font-serif bg-slate-900/50 ">Packaged Sub Station (PSS)</h5>
      
      </div>
    </div>

    <div
      class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style= {{ backfaceVisibility: 'hidden' }} >
      <img
        src="/service/waterproofing-membranes.jpg"
        class="block w-full md:h-[500px] h-[200px]"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
        <h5 class="md:text-4xl text-2xl font-serif bg-slate-900/50 ">PVC Membrane Water Proofing</h5>
      
      </div>
    </div>

    <div
      class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style= {{ backfaceVisibility: 'hidden' }} >
      <img
        src="/service/image.jpg"
        class="block w-full md:h-[500px] h-[200px]"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
        <h5 class="md:text-4xl text-2xl font-serif bg-slate-900/50 ">Aluminum and False Ceiling</h5>
        
      </div>
    </div>

    <div
      class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style= {{ backfaceVisibility: 'hidden' }} >
      <img
        src="/service/360_F_112023008_dbu6TDCstEmafgD6MNVQyonxLI33Fwsj.jpg"
        class="block w-full md:h-[500px] h-[200px]"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
        <h5 class="md:text-4xl text-2xl font-serif bg-slate-900/50 ">Block Masnory</h5>
     
      </div>
    </div>


    <div
      class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-active
      data-te-carousel-item
      style= {{ backfaceVisibility: 'hidden' }} >
      <img
        src="/service/build-roads.jpeg"
        class="block w-full md:h-[500px] h-[200px]"
        alt="..." />
      <div
        class="absolute inset-x-[15%] bottom-5  py-5 text-center text-white md:block">
        <h5 class="md:text-4xl text-2xl font-serif bg-slate-900/50">RI Work </h5>
       
      </div>
    </div>


  
					</Carousel>
				</div>
			</div>
		</>




  
  )
}

export default Banner