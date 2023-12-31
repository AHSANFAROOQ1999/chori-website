import React from 'react'
import { Link } from 'react-router-dom'

import hero1 from  '../images/hero1.jpg'
import Clientdet from './Clientdet'
const Home = () => {
  return (
    <section className="bg-gray-900 text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
      Chaudary Law  

        <span className="sm:block py-3"> Associates </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-2xl sm:leading-relaxed" style={{  color:"orange"}}>
      Legal Consultancy Services
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="contact"
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
       
        >
          Contact us
        </Link>

        <Link to="services"
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
         
        >
          Services
        </Link>
      </div>
    </div>
  </div>
</section>

  )
}

export default Home
