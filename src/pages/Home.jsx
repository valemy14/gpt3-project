import React from 'react'
import {H1} from '../assets'
import {H2} from '../assets'
import {P1} from '../assets'
import {P2} from '../assets'
import {P3} from '../assets'
import {P4} from '../assets'
import {P5} from '../assets'







const Home = () => {
  return (
    <>
    <div className='home container'>
      <div style={{alignItems:'center',paddingLeft:'50px'}} className='hh row'>
        <div  className='col-sm-12 col-md-12 col-lg-6 '>
             <h1 style={{fontWeight:'bold'}}>Let’s Build Something <br /> amazing with GPT-3 <br /> OpenAI</h1>
             <p>Yet bed any for travelling assistance indulgence unpleasing. <br /> Not thoughts all exercise blessing. Indulgence way <br /> everything joy alteration boisterous the attachment. Party <br /> we years to order allow asked of.</p>
            <div  className="input input-group mb-3 w-85">
               <input style={{backgroundColor:'#052D56', border:'none'}} type="text" className="form-control py-4" placeholder="Your Email Address " aria-label="Email" aria-describedby="button-addon2"/>
               <div className="input-group-append">
               <button style={{backgroundColor:'#FF4820', color:'white'}} className="btn" type="button" id="button-addon2">Get Started</button>
               </div>
            </div>
            <div className='img-small' style={{display:'flex', marginTop:'10px'}}>
             <div className='h-img'><img style={{ width:'140px',marginTop:'9px'}} src={H1} alt=""/></div> 
             <div style={{marginTop:'10px', marginLeft:'5px'}}> <small>1,600 people requested access a visit in last 24 hours</small></div>
            </div>
             
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6'>
          <img style={{}} src={H2} alt="" className='image w-100' />

        </div>
      </div>

      <div style={{display:'flex', justifyContent:'center', gap:'30px', marginTop:'50px'}} className="logo-p mb-5">
        <div className='p-logo'><img src={P1} alt="" /></div>
        <div><img src={P2} alt="" /></div>
        <div><img src={P3} alt="" /></div>
        <div><img src={P4} alt="" /></div>
        <div><img src={P5} alt="" /></div>

      </div>

    
    </div>

    
      
    </>
  )
}

export default Home
