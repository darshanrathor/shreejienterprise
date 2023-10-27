import React from 'react'

import Banner from '../components/Banner'

import Redpanel1 from '../components/Redpanel1'
// import { motion, AnimatePresence } from "framer-motion"
import Joinus from '../components/Joinus'
import Client from '@/components/Client'

import Categories from '@/components/Categories'


const index = () => {
  return (
    <div>

      {/* <AnimatePresence> */}
        {/* <motion.div
        
        initial={{opacity: 0, y: 15}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 15}}
        transition={{delasy:0.25}}
        
        
        > */}

 <Banner />


<Redpanel1 />
<Categories />

<Joinus />

<Client />



{/* 
</motion.div>
</AnimatePresence> */}


  </div>
  )
}

export default index