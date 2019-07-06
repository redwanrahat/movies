import React from 'react'
import banner from '../Assets/hero_banner.png'

const Hero = () => {
    return(
        <div className="hero" style={{backgroundImage: `url(${banner})`}}>
        </div>
    )
}

export default Hero