import React from "react"
import logo from "../../public/assets/images/logo.svg"


export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Disney Plus" className="logo" />
            <a className="login-btn" href="#">Login</a>
        </div>
    )
}