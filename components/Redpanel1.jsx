import React from 'react';

const Redpanel1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center bg-red-700 text-white md:h-[170px]">
      <div className="relative px-6 lg:mb-0 justify-center py-7 items-center md:mt-4 md:mb-4">
        <h5 className="mb-2 uppercase text-[20px] text-primary">Values</h5>
        <h6 className="mb-0 font-normal">
          Our core values define the service that we want to provide you with.
        </h6>
        <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-100 lg:block"></div>
      </div>

      <div className="relative px-6 lg:mb-0 justify-center py-7 items-center md:mt-4 md:mb-4">
        <h5 className="mb-2 uppercase text-[20px] text-primary">Quality</h5>
        <h6 className="mb-0 font-normal">
          There is no compromise when it comes to maintaining training standards
        </h6>
        <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-100 lg:block"></div>
      </div>

      <div className="relative px-6 lg:mb-0 justify-center py-7 items-center md:mt-4 md:mb-4">
        <h5 className="mb-2 uppercase text-[20px] text-primary">Innovation</h5>
        <h6 className="mb-0 font-normal">
          We readily understand the importance of keeping one step ahead of our client’s
        </h6>
        <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-100 lg:block"></div>
      </div>

      <div className="relative px-6 lg:mb-0 justify-center py-7 items-center md:mt-4 md:mb-4">
        <h5 className="mb-2 text-[20px] uppercase text-primary">Flexibility</h5>
        <h6 className="mb-0 font-normal">We don’t make the mistake of assuming that one size fits all.</h6>
      </div>
    </div>
  );
};

export default Redpanel1;
