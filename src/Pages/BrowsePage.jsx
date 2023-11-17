import React from 'react'
import "./BrowsePage.css"
import Slideshow from "../Components/Slideshow"
import Channels from "../Components/Channels"
import Categories from "../Components/Categories"

const BrowsePage = () => {
    return (
        <div className="browsePage">
            <Slideshow />
            <Channels />
            <Categories />
        </div>
    )
}

export default BrowsePage