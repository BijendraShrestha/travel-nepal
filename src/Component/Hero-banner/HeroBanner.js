import React from 'react'
import '../Hero-banner/herobanner.scss'
function HeroBanner() {
  return (
    <div className="herobanner-container">
        <div className="hero-banner test d-flex justify-content-center align-items-center flex-column">
            <h1 className='hero-banner-h1'>
                Discover
            </h1>
            <h1 className="hero-banner-h1">Nepal</h1>
            <button type='button' className='hero-banner-button'>Explore More...</button>
         
        </div>

        
    
    </div>
  )
}

export default HeroBanner
