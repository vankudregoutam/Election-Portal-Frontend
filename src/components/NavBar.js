import React from 'react'
import '../App.css'
import { BiHome } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid mx-5">
                    <img className='navbar-img' src="/img/election-logo.jpeg" alt="" />
                    <a className="navbar-brand" href="/"><strong>मतदाता सेवा पोर्टल<br />VOTERS' SERVICE PORTAL</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-right navbar-collapse" id="navbarSupportedContent">
                        <Link to={'/'}><button className="btn navbar-button"><BiHome /></button></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
