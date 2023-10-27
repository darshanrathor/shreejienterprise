import React from 'react'
import Navbar from '@/components/Navbar'
import Redpanel2 from '@/components/Redpanel2'
import Footer from '../Footer'

export default function layout({ children }) {
  return (
    <>
   <Navbar />

{children}  


<Redpanel2 />
<Footer />



</>

  )
}
