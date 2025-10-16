import React from 'react'
import {H4} from '../assets'


const Request = () => {
  return (
    <>
      <div style={{paddingLeft:'120px'}} className='rr row container'>
        <div  className='col-sm-12 col-md-12 col-lg-6'>
            <img  style={{width:'500px', marginLeft:'10px'}} className='r-img' src={H4} alt="" />
        </div>

        <div style={{marginTop:'100px'}} className='col-sm-12 col-md-12 col-lg-6'>
          <div className='r-right' style={{width:'500px',marginLeft:'85px', marginTop:'120px'}}>
             <p>Request Early Access to Get Started</p>
            <h3 style={{fontWeight:'bolder', fontSize:'25px'}}>The possibilities are <br />beyond your imagination</h3>
            <p style={{fontSize:'13px'}}>Yet bed any for travelling assistance indulgence unpleasing. Not <br />thoughts all exercise blessing. Indulgence way everything joy <br />alteration boisterous the attachment. Party we years to order <br />allow asked of.</p>
            <p style={{marginTop:'50px', color:'#FF8A71'}}>Request Early Access to Get Started</p>
          </div>
           
        </div>
      </div>

<div style={{width:'100%'}} className='card-r pl-2'>
      <div style={{ borderRadius:'7px', marginTop:'60px'}} className='request-card container  py-4 px-5'>
                
                    <p style={{fontSize:'12px', fontWeight:'600', color:'black'}}>Request Early Access to Get Started</p>
                   <div className='card-bottom d-flex justify-content-between '>
                     <h5 style={{fontWeight:'bolder', color:'black'}}>Register today & start exploring the endless possiblities.</h5>
                     <button style={{ backgroundColor:'black', color:'white', borderRadius:'20px'}} type="button" className="btn px-4 py-2 mb-2" >Get Started</button>
                   </div>
                
                
      </div>
</div>
     
    </>
  )
}

export default Request
