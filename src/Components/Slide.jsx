import React from "react"

const Slide = ({url, currentIndex}) => {
    
    
    return (
        <div className="slide">
            
            <img className="slideAnimation" src={url[currentIndex]} />
        </div>
    )
}

export default Slide