import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer mb-4">
                <center>
                    <b>Find us on</b><br /><br />
                    <Link to={'https://www.eci.gov.in/'} target='_blank'><img src="/img/networkIcon.svg" alt="" style={{ paddingRight: '50px', paddingLeft: '70px' }} /></Link>
                    <Link to={'https://www.facebook.com/ECI/'} target='_blank'><img src="/img/facebookIcon.svg" alt="" style={{ paddingRight: '50px' }} /></Link>
                    <Link to={'https://www.instagram.com/ecisveep/'} target='_blank'><img src="/img/instagramIcon.svg" alt="" style={{ paddingRight: '50px' }} /></Link>
                    <Link to={'https://x.com/ECISVEEP'} target='_blank'><img src="/img/twitter_new_logo.png" style={{ height: '30px', paddingRight: '50px' }} alt="" /></Link>
                    <Link to={'https://www.youtube.com/eci/'} target='_blank'><img src="/img/youtubeIcon.svg" alt="" style={{ paddingRight: '50px' }} /><br /><br /></Link>
                    <b style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Privacy Policy</b>
                    <hr style={{ marginLeft: '1%', marginRight: '1%' }} />
                    <b style={{ color: 'rgba(0, 0, 0, 0.6)', textAlign: 'center' }}>@2023 Election Commission of India. All Rights Reserved..</b>
                </center>
            </div>
        </>
    )
}

export default Footer
