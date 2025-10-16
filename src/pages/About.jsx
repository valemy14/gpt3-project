import React from 'react'

const About = () => {
  return (
    <>
    <div style={{paddingLeft:'60px', paddingRight:'60px'}} className='about pt-5 container'>
         <div style={{backgroundColor: '#0F4279'}} className='about-card  p-5 w-80'>
        <div  className='aa row mb-5'>
            <div className='col-sm-12 col-md-12 col-lg-4'>
                <hr className='first-hr' />
                <h5 style={{fontWeight:'bold'}}>What is GPT-3</h5>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-8 mt-4'>
                <p style={{fontWeight:'400', fontSize:'13px'}}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His <br /> defective nor convinced residence own. Connection has put impossible own apartments <br /> boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
        </div>

        <div>
            <div style={{display:'flex', justifyContent:'space-between'}} className='about-two mb-5'>
                <h3 style={{fontWeight:'bolder'}}>The possibilities are beyond <br />your imagination</h3>
                <p>Explore The Library</p>
            </div>

            <div className='row'>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <hr className='second-hr' />
                    <h5>chatbots</h5>
                    <p>We so opinion friends me message as <br />delight. Whole front do of plate heard oh <br />ought. </p>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <hr className='third-hr' />
                    <h5>Knowledgebase</h5>
                    <p> At jointure ladyship an insisted so humanity <br />he. Friendly bachelor entrance to on by. As <br />put impossible own apartments b </p>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4'>
                    <hr className='forth-hr' />
                    <h5>Education</h5>
                    <p>At jointure ladyship an insisted so humanity <br />he. Friendly bachelor entrance to on by. As <br />put impossible own apartments b</p>
                </div>
            </div>
        </div>

       

       
      </div>

    </div>
     
    </>
  )
}

export default About
