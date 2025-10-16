import React from 'react'
import {H10} from '../assets'

const Footer = () => {
  return (
    <>
      <footer style={{paddingTop:'80px', paddingBottom:'10px'}}>
        <h1 style={{textAlign:'center', marginBottom:'50px', fontWeight:'900'}}>Do you want to step in to the <br />future before others</h1>
        <div style={{textAlign:'center'}}>      
             <button className='f-btn' style={{ background:'transparent', fontSize:'10px', marginBottom:'50px'}}>Request Early Access</button>
        </div>
 
        <div className='foot-er row container'>
            <div className='footer-top col-sm-12 col-md-12 col-lg-5 mt-5'>
                <div style={{marginBottom:'20px', marginLeft:'120px'}}><img src={H10} alt="" className='w-25'/></div>
                <div style={{marginLeft:'120px', fontSize:'8px', fontWeight:'lighter'}}> <small>Crechterwoord K12 182 DK <br />Alknjkcb, All Rights Reserved</small></div>  
  
          </div>    
        <div style={{display:'flex', justifyContent:'space-between', marginTop:'50px'}} className='footer-bottom col-sm-12 col-md-12 col-lg-7'>
               <div style={{marginRight:'20px'}}>
                    <p style={{color:'white' , fontSize:'10px', fontWeight:'bolder', marginBottom:'25px'}}>Links</p>
                    <ul style={{listStyle:'none' , fontSize:'8px', fontWeight:'lighter'}}>
                        <li>Overons</li>
                        <li>Social Media</li>
                        <li>Counters</li>
                        <li>Contact</li>
                    </ul> 
                </div>
               
                <div style={{marginRight:'25px'}}>
                    <p style={{color:'white' , fontSize:'10px', fontWeight:'bolder', marginBottom:'25px'}}>Company</p>
                    <ul style={{listStyle:'none' , fontSize:'8px', fontWeight:'lighter'}}>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div style={{marginRight:'25px'}}>
                    <p style={{color:'white', fontSize:'10px', fontWeight:'bolder',marginBottom:'20px'}}>Get in touch</p>
                    <ul style={{listStyle:'none', fontSize:'8px', fontWeight:'lighter'}}>
                        <li>Crechterwoord K12 <br />182 DK Alknjkcb</li>
                        <li>085-132567</li>
                        <li>info@payme.net</li>
                    </ul>
                </div>

         </div>
       
               
           
            
        </div>

       <div style={{color:'white', textAlign:'center', marginTop:'50px', fontWeight:'lighter', fontSize:'8px'}}><p>© 2021 GPT-3. All rights reserved.</p></div> 
      </footer>
    </>
  )
}

export default Footer
