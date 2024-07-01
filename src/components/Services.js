import { Link } from 'react-router-dom'
import '../App.css'
import React from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'

const Services = () => {
    return (
        <>
            <div className="container services mb-3">
                <h2 className='heading'>Services</h2>
                <div className="row">
                    <div className="card services-width zoom-effect col-6 m-2" style={{ backgroundColor: '#087a70e6' }}>
                        <div className="card-body">
                            <img className='margin' src="/img/GreviencePortalIcon.svg" style={{ height: 50 }} alt="" />
                            <div className='col-md-9' style={{ color: 'white' }}>
                                <p><b>Register Complaint / Share Suggestion</b></p>
                            </div><br />
                            <Link to={'https://voters.eci.gov.in/guidelines/Form-6_en.pdf'} target='_blank'><button className="btn btn" style={{ color: '#dbfeff', marginLeft: '-20px' }}>Chatbot Manual<BiUpArrowAlt /></button></Link>
                            <img src="/img/human.png" style={{ height: '50px', marginLeft: '20px' }} alt="" />
                        </div>
                    </div>
                    <div className="card services-width zoom-effect col-6 m-2" style={{ backgroundColor: '#a52a2ab8' }}>
                        <div className="card-body">
                            <img className='margin' src="/img/TrackApplicationIcon.svg" style={{ height: 50 }} alt="" />
                            <div className='col-md-9' style={{ color: 'white' }}>
                                <p><b>Track Application Status</b></p>
                                <p>Track all your form status here.</p>
                            </div><br />
                        </div>
                    </div>
                    <div className="card services-width zoom-effect col-6 m-2" style={{ backgroundColor: '#8a2be2ad' }}>
                        <div className="card-body">
                            <img className='margin' src="/img/SearchInElRoleIcon.svg" style={{ height: 50 }} alt="" />
                            <div className='col-md-9' style={{ color: 'white' }}>
                                <p><b>Search in Electrol Roll</b></p>
                                <p>Get Elector details here.</p>
                            </div><br />
                        </div>
                    </div>
                    <div className="card services-width zoom-effect col-6 m-2" style={{ backgroundColor: '#808000de' }}>
                        <div className="card-body">
                            <img className='margin' src="/img/DownloadEEpicIconNew.svg" style={{ height: 50 }} alt="" />
                            <div className='col-md-9' style={{ color: 'white' }}>
                                <p><b>E-EPIC Download</b></p>
                                <p>Get digital version of your Electrol Photo Identy Card.</p>
                            </div><br /><br /><br />
                        </div>
                    </div>
                    <div className="card services-width-poll-station zoom-effect col-6 m-2" style={{ backgroundColor: '#992b81cc' }}>
                        <div className="card-body">
                            <img className='margin' src="/img/KnowBoothIcon.svg" style={{ height: 50 }} alt="" />
                            <div className='col-md-9' style={{ color: 'white' }}>
                                <p><b>Know your Polling Station & Officer</b></p>
                                <p>Assembly/Parliamentary Constituency Details.</p>
                                <p>BLO/Electoral Officers Details.</p>
                            </div><br /><br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="underline darkModeHr mb-3"></div>
            <div className="container helpline" style={{ width: 'auto' }}>
                <div className="card m-1" style={{ border: 'none' }}>
                    <Link to={'https://voters.eci.gov.in/HomePageFaq'} target='_blank'>
                        <div className="card-body">
                            <img className='m-2' src="/img/faqIconQuestionMark.svg" style={{ height: 50 }} alt="" />
                            <div className='m-3 helpline-title'>
                                <p>Frequently asked questions <BiUpArrowAlt /></p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div><br />
            <div className="container helpline" style={{ width: 'auto' }}>
                <div className="card m-1" style={{ border: 'none' }}>
                    <div className="card-body">
                        <img className='m-2' src="/img/election-logo.jpeg" style={{ height: 50 }} alt="" />
                        <div className='m-3 helpline-title'>
                            <p>Visit ECI Website : <Link to={'https://eci.gov.in'} target='_blank'><button className='btn btn' style={{color: '#007bff'}}>https://eci.gov.in</button></Link></p>
                        </div>
                    </div>
                </div>
            </div><br />
            <div className="container helpline" style={{ width: 'auto' }}>
                <div className="card m-1" style={{ border: 'none' }}>
                    <div className="card-body">
                        <img className='m-2' src="/img/generalelections.png" style={{ height: 50 }} alt="" />
                        <div className='m-3 helpline-title'>
                            <p>General Elections 2024 : <Link to={'https://elections24.eci.gov.in'} target='_blank'><button className='btn btn' style={{color: '#007bff'}}>https://elections24.eci.gov.in</button></Link></p>
                        </div>
                    </div>
                </div>
            </div><br />
        </>
    )
}

export default Services
