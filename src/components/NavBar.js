import React from 'react'
import '../App.css'
import { BiHome } from 'react-icons/bi'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid mx-5">
                    <img src="/img/election-logo.jpeg" alt="" style={{ height: '60px' }} />
                    <a className="navbar-brand" href="/"><span style={{ color: 'white', fontSize: '16px' }}><strong>मतदाता सेवा पोर्टल<br />VOTERS' SERVICE PORTAL</strong></span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="flex1">
                            <BiHome />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
