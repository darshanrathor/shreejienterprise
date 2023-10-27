import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <div className="mt-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif">Packaged Sub Station (PSS)</h1>
        </div>

        <motion.div
          className="grid grid-cols md:grid-cols-2 w-full mx-auto gap-4 md:items-center md:justify-center lg:center lg:px-40 p-6"
          ref={ref1}
          initial="hidden"
          animate={inView1 ? 'visible' : 'hidden'}
          variants={imageVariants}
        >
          {/*1st images of 1 */}
          <motion.div
            whileHover="hover"
            variants={hoverVariants}
          >
            <Image
              className="max-w-full rounded-lg focus:border-none active:border-none"
              src="/gallery/1.jpg"
              width={490}
              height={490}
              alt="gallery1"
            />
          </motion.div>


          {/*2ns images of 1 */}
          <motion.div
            whileHover="hover"
            variants={hoverVariants}
          >
            <Image
              className="max-w-full rounded-lg focus:border-none active:border-none"
              src="/gallery/1.jpg"
              width={490}
              height={490}
              alt="gallery1"
            />
          </motion.div>

          {/*3rd images of 1 */}
          <motion.div
            whileHover="hover"
            variants={hoverVariants}
          >
            <Image
              className="max-w-full rounded-lg focus:border-none active:border-none"
              src="/gallery/1.jpg"
              width={490}
              height={490}
              alt="gallery1"
            />
          </motion.div>

          {/*4th images of 1 */}
          <motion.div
            whileHover="hover"
            variants={hoverVariants}
          >
            <Image
              className="max-w-full rounded-lg focus:border-none active:border-none"
              src="/gallery/1.jpg"
              width={490}
              height={490}
              alt="gallery1"
            />
          </motion.div>
          {/* Add more images here */}
        </motion.div>
      </div>


      {/* 2nd part */}

      <div className="mt-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif">Distribution Sub Station (DSS)</h1>
        </div>

        <motion.div
          className="grid grid-cols md:grid-cols-2 w-full mx-auto gap-4 md:items-center md:justify-center lg:center lg:px-40 p-6"
          ref={ref2}
          initial="hidden"
          animate={inView2 ? 'visible' : 'hidden'}
          variants={imageVariants}
        >

           {/* 1st images of 2nd*/}
          <motion.div
            whileHover="hover"
            variants={hoverVariants}
          >
            <Image
              className="max-w-full rounded-lg focus:border-none active:border-none"
              src="/gallery/1.jpg"
              width={490}
              height={490}
              alt="gallery1"
            />
          </motion.div>


           {/* 2nd images of 2nd*/}
           <motion.div
            whileHover="hover"
            variants={hoverVariants}
          >
            <Image
              className="max-w-full rounded-lg focus:border-none active:border-none"
              src="/gallery/1.jpg"
              width={490}
              height={490}
              alt="gallery1"
            />
          </motion.div>


           {/* 3rd images of 2nd*/}
           <motion.div
            whileHover="hover"
            variants={hoverVariants}
          >
            <Image
              className="max-w-full rounded-lg focus:border-none active:border-none"
              src="/gallery/1.jpg"
              width={490}
              height={490}
              alt="gallery1"
            />
          </motion.div>


           {/* 4th images of 2nd*/}
           <motion.div
            whileHover="hover"
            variants={hoverVariants}
          >
            <Image
              className="max-w-full rounded-lg focus:border-none active:border-none"
              src="/gallery/1.jpg"
              width={490}
              height={490}
              alt="gallery1"
            />
          </motion.div>
          {/* Add more images here */}

          
        </motion.div>
      </div>
    </>
  );
};

export default Gallery;
