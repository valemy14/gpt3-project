import React from 'react'
import {L1} from '../assets'


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light w-100 ">
    <div className='the-navbar d-flex'>
       <div className="nav-bar">
       <a  className="navbar-brand" href="#"><img src={L1} alt="" /></a>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button> 
    </div>
    
  <div  className="nav-list collapse navbar-collapse " id="navbarSupportedContent">
    <ul   className="navbar-nav ">
      <li className="nav-item active mr-2">
        <a style={{color:'white'}} className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active mr-2">
        <a  style={{color:'white'}} className="nav-link " href="#">What is GPT? <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active mr-2">
        <a  style={{color:'white'}} className="nav-link " href="#">Open AI <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active mr-2 ">
        <a  style={{color:'white'}} className="nav-link " href="#">Case Studies <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active mr-2">
        <a  style={{color:'white'}} className="nav-link " href="#">Library <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0 ">
      <div className='nav-btn'>
         <button style={{color:'white'}} className="i-btn btn my-2 my-sm-0 " type="submit">Sign in</button>
         <button style={{backgroundColor:'#FF4820', color:'white'}} className="btn my-2 my-sm-0 px-4" type="submit">Sign up</button>
      </div>
     
    </form>
  </div>

    </div>
   
</nav>
    </>
  )
}

export default Header
