import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Poster from './Components/Poster'
import './CSS/App.css'
import './CSS/NavBar.css'
import './CSS/Hero.css'
import './CSS/Poster.css'
import poster1 from './Assets/The Greatest Showman.jpg'
import poster2 from './Assets/Thor.jpg'
import poster3 from './Assets/The_Wolverine_2013_Movie_Poster_5_llhzo_movieposters101(com).jpg'
import poster4 from './Assets/Jurassic-World-Official-Poster.jpg'
import poster5 from './Assets/Captive-State-Movie-Poster-V2.jpg'
import poster6 from './Assets/Hollywood-Movie-enders-game-2013-Movie-poster.jpg'
import poster7 from './Assets/captainmarvel_lob_crd_06.jpg'
import poster8 from './Assets/__5cd379166fe36.jpg'

const App = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <div className="movies">
                <Poster image={poster1} />
                <Poster image={poster2} />
                <Poster image={poster3} />
                <Poster image={poster4} />
                <Poster image={poster5} />
                <Poster image={poster6} />
                <Poster image={poster7} />
                <Poster image={poster8} />
                <Poster image={poster8} />
                <Poster image={poster8} />
            </div>
        </div>
    )
}

export default App