import { FaPhoneVolume } from 'react-icons/fa'
import '../App.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { BiHome, BiMailSend } from 'react-icons/bi'

const Contact = () => {
    return (
        <>
            <div className="container contact-container mb-3">
                <h4 className='contact'>Contact Us</h4>
                <div className="row">
                    <div className="card my-3 contact-us-desp col-md-3 col-sm-6">
                        <h5><FaPhoneVolume /> Contact Number</h5>
                        <Link to={'tel:1950'}><button className='btn btn'>1950 ( Toll-free Number)</button></Link>
                    </div>
                    <div className="card my-3 contact-us-desp col-md-3 col-sm-6">
                        <h5><BiHome /> Postal Address</h5>
                        <p>
                            Election Commission Of India,<br />
                            Nirvachan Sadan, Ashoka Road,<br />
                            New Delhi 110001
                        </p>
                    </div>
                    <div className="card my-3 contact-us-desp col-md-3 col-sm-6">
                        <h5><BiMailSend /> Email</h5>
                        <Link to={'mailto:complaints@eci.gov.in'}><button className='btn btn'>complaints@eci.gov.in</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
