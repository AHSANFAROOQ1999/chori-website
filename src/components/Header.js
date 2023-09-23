import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpeg'
const Header = () => {
    return (
        <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50">
  <div className="container mx-auto flex flex-wrap px-5 py-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" > */}
        < img className="w-10 h-10 text-white p-2 bg-cyan-50 rounded-full" viewBox="0 0 24 24" src={logo} alt='img' style={{marginRight:"10px"}}></img>
      {/* </svg> */}Chaudary Law Associates 
      <span className="ml-3 text-xl"></span>
    </Link>
    <nav className=" md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <Link to='/' className="mr-5 hover:text-white">Home</Link>
      <Link to='/services' className="mr-5 hover:text-white">Services</Link>
      <Link to ='/contact'className="mr-5 hover:text-white">Contact</Link>
      <Link to='/about' className="mr-5 hover:text-white">About</Link>
    </nav>
    
  </div>

  <hr style={{opacity:0.2}}></hr>
</header>
    )
}

export default Header
