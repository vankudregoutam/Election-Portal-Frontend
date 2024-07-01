import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import Services from './Services'
import MobileApps from './MobileApps'
import Contact from './Contact'
import Update from './Update'
import AboutECI from './AboutECI'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <div className="my-3 mx-3" style={{ backgroundColor: '#80e5ff', borderRadius: 5 }}>
                <Link to='https://elections24.eci.gov.in/' target='_blank'><button className='btn btn p-2' style={{ color: '#007bff' }}><b>General Election 2024</b></button></Link>
            </div>
            <Form />
            <Services /><br /><br /><br /><br /><hr className='hr' />
            <MobileApps />
            <Contact />
            <Update />
            <AboutECI />
            <Footer />
        </>
    )
}

export default Home
