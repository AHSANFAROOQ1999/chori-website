import React from 'react'
import a1 from '../images/mehroz.jpeg'
import a2 from '../images/pic1.png'

import a3 from '../images/pic2.png'
const Team = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Our team at Chaudary Law Associates is a powerhouse of legal expertise and unwavering dedication. Together, we are committed to delivering exceptional results, providing insightful counsel, and navigating the complexities of law with precision and passion. We are your trusted partners in justice."
      
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={a1}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Chaudary Mehroz Advocate</h2>
            <h3 className="text-gray-500 mb-3">Owner</h3>
            <p className="mb-4">Criminal lawyer Advocate High Court Lahore</p>
            <p className="mb-4">+92 333 4003110</p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={a2}></img>
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-white">Tassudaq Bhatti</h2>
          <h3 className="text-gray-500 mb-3">Co Owner</h3>
          <p className="mb-4">Civil And Corporative Lawyer Advocate High Court</p>
          <p className="mb-4">+92 301 4029030</p>
        </div>
      </div>
    </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={a3}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Pervaiz Altaf Advocate High Court </h2>
            <h3 className="text-gray-500 mb-3">Senior Advocate</h3>
            <p className="mb-4">Family And Civil Lawyer</p>
            <p className="mb-4">03006364567</p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>
  )
}

export default Team
