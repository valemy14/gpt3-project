import React from 'react'
import {H5, H6, H7, H8, H9} from '../assets'

const Features = () => {
  return (
    <>
    <div style={{marginTop:'100px', marginBottom:'50px', paddingLeft:'60px', width:'100%'}} className='features'>
        <div style={{paddingLeft:'75px'}} className='features-top'>
          <h1 style={{fontWeight:'900'}}>A lot is happening, <br />We are blogging about it.</h1>
        </div>
      

    <div style={{marginTop:'80px'}} className='ff row container'>
        <div className='col-sm-12 col-md-12 col-lg-5'>
          <div style={{marginLeft:'60px'}} className="main-box">
             <img style={{maxWidth:'373px'}} src={H5} alt=""/>
            <div style={{Width:'100%'}} className='feature-card'>
                <div className='card-content p-4'>
                      <small style={{fontWeight:'bold', fontSize:'10px'}}>Sep 26, 2021</small>
                      <h5 style={{marginTop:'8px', marginBottom:'120px'}}>GPT-3 and Open AI is the <br />future. Let us exlore how it <br />is?</h5>
                      <small style={{fontSize:'10px'}} >Read Full Article</small>
                </div>
                
            </div>
          </div>
           
        </div>

        <div className='f-card col-sm-12 col-md-12 col-lg-7'>
          <div style={{display:'flex', marginLeft:'50px'}} className="card-one">
                <div className="box-one">
                      <img style={{maxWidth:'240px'}} src={H6} alt=""/>
                      <div style={{Width:'100%'}} className='features-card '>
                          <div className='card-content p-4'>
                              <small style={{ fontSize:'8px'}}>Sep 26, 2021</small>
                              <h6 style={{marginTop:'5px', fontSize:'13px'}}>GPT-3 and Open AI is the <br />future. Let us exlore how it is?</h6>
                              <small style={{fontSize:'8px'}} >Read Full Article</small>
                          </div>
                        
                      </div>
                </div>

                <div  style={{marginLeft:'55px', marginBottom:'20px'}} className="box-two">
                       <img style={{maxWidth:'240px'}} src={H8} alt=""/>
                       <div style={{Width:'100%'}} className='features-card'>
                            <div className='card-content p-4'>
                                  <small style={{ fontSize:'8px'}}>Sep 26, 2021</small>
                                  <h6 style={{marginTop:'5px', fontSize:'13px'}}>GPT-3 and Open AI is the <br />future. Let us exlore how it is?</h6>
                                  <small style={{fontSize:'8px'}}>Read Full Article</small>
                            </div>
                            
                       </div>
                </div>
          </div>


          <div style={{display:'flex',marginLeft:'50px'}} className="card-two">
                <div style={{marginTop:'60px'}} className="box-three"> 
                     <img style={{maxWidth:'240px'}} src={H7} alt="" />
                      <div style={{Width:'100%'}} className='features-card'>
                          <div className='card-content p-4'>
                                <small style={{ fontSize:'8px'}}>Sep 26, 2021</small>
                                <h6 style={{marginTop:'5px', fontSize:'13px'}}>GPT-3 and Open AI is the <br />future. Let us exlore how it is?</h6>
                                <small style={{fontSize:'8px'}}>Read Full Article</small>
                          </div>
                          
                     
                      </div>
                </div>
            
                <div  style={{marginLeft:'55px', marginTop:'60px'}} className="box-four">
                     <img style={{maxWidth:'240px'}} src={H9} alt=""/>
                     <div style={{Width:'100%'}} className='features-card '>
                        <div className='card-content p-4'>
                                <small style={{ fontSize:'8px'}}>Sep 26, 2021</small>
                                <h6 style={{marginTop:'5px', fontSize:'13px'}}>GPT-3 and Open AI is the <br />future. Let us exlore how it is?</h6>
                                <small style={{fontSize:'8px'}}>Read Full Article</small>
                        </div>

                     </div>
                </div>
          </div>

       
        

        </div>

        

            

        
      </div>
    </div>
   
    </>
  )
}

export default Features
