import React from 'react'
import {Link} from "react-router-dom"
import ctaImg1 from "../../public/assets/images/cta-logo-one.svg"
import ctaImg2 from "../../public/assets/images/cta-logo-two.png"

const LandingPage = () => {
    return (
        <div className="landingPage" >
            <div className="landingPage-container">
                <img className="landingPage-cta1" src={ctaImg1} />
                <Link to="/browse" className="landingPage-cta-btn">Get All There</Link>
                <p className="landingPage-cta-msg">Get Premier Access to Raya  and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/25/21, the price of Disney+ and The Disney Bundle will increase by $1</p>
                <img className="landingPage-cta2" src={ctaImg2} />
            </div>
        </div>
    )
}

export default LandingPage