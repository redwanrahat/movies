import React from 'react'
import Zoom from 'react-reveal/Zoom'

const Poster = props => {
    return(
        <Zoom>
        <div className="posterContainer">
            <div className="overlay" style={{height: '218px'}}>
                <img className="image" src={props.image} alt="posterImage" height="218px"/>
            </div>
        </div>
        </Zoom>
    )
}

export default Poster