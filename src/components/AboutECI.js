import { BiUpArrowAlt } from 'react-icons/bi'
import '../App.css'
import React from 'react'

const AboutECI = () => {
    return (
        <>
            <div className="container about-eci mb-3">
                <h4 className='padding'>About ECI</h4>
                <p style={{ paddingLeft: '15px' }}>The Election Commission of India is an autonomous constitutional authority responsible for administering Union and State election processes in India. The body administers elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies in India, and the offices of the President and Vice President in the country.</p>
                <button className='btn btn' style={{ color: '#007bff', border: 'none', marginBottom: '15px' }}>Read more <BiUpArrowAlt /></button>
            </div>
        </>
    )
}

export default AboutECI
