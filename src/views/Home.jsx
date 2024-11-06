import React from 'react'

import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Featuers from '../components/Featuers'
import Slider from '../components/Slider'
import Featuer from '../components/Featuer'
import Testimonials from '../components/Testimonials'
import Faqs from '../components/Faqs'
import Subscribe from '../components/Subscribe'
import ClientProvider  from '../context/ClientsContext'

const Home = () => {
 
  return (
    <>
      <Hero />
      <Brands />
      <Featuers />
      <Slider />
      <Featuer />
      <ClientProvider>
        <Testimonials />
        <Faqs />
      </ClientProvider>
      
      <Subscribe />
    </>
  )
}

export default Home