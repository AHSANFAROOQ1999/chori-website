import React from 'react'
import a1 from '../images/a1.jpg'
import a2 from '../images/a2.jpg'
const Team = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={a1}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Navnath Khedkar</h2>
            <h3 className="text-gray-500 mb-3">Owner</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
          
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={a2}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Sarthak Khedkar</h2>
            <h3 className="text-gray-500 mb-3">Graphics Designer</h3>
            <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
  )
}

export default Team
