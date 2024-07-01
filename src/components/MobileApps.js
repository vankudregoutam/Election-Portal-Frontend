import React from 'react'
import { Link } from 'react-router-dom'

const MobileApps = () => {
    return (
        <>
            <div className="container mobileapp">
                <h4 className='padding'>Mobile Apps</h4>
                <div className="row flex1">
                    <div className="card col-md-3 col-sm-6" style={{ width: 'auto', border: 'none' }}>
                        <div className="card-body">
                            <img className='m-2 px-3' src="/img/VhaAppIconNew.svg" alt="" />
                            <p>Voter Helpline App</p>
                            <Link to={'https://play.google.com/store/apps/details?id=com.eci.citizen'} target='_blank'><img className='px-3 mx-1' src="/img/androidLogoNewIcon.svg" alt="" /></Link>
                            <Link to={'https://apps.apple.com/in/app/voter-helpline/id1456535004'} target='_blank'><img className='' src="/img/appleLogoNewIcon.svg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="card col-md-3 col-sm-6" style={{ width: 'auto', border: 'none' }}>
                        <div className="card-body">
                            <img className='m-2 px-2' src="/img/SakshameciLogo.svg" alt="" />
                            <p className='mx-2'>Saksham App</p>
                            <Link to={'https://play.google.com/store/apps/details?id=pwd.eci.com.pwdapp&hl=en_IN'} target='_blank'><img className='px-3' src="/img/androidLogoNewIcon.svg" alt="" /></Link>
                            <Link to={'https://apps.apple.com/in/app/saksham-eci/id1497864568'} target='_blank'><img src="/img/appleLogoNewIcon.svg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="card col-md-3 col-sm-6" style={{ width: 'auto', border: 'none' }}>
                        <div className="card-body">
                            <img className='m-2 px-1' src="/img/cVigilAppIconNew.svg" alt="" />
                            <p className='mx-2'>Saksham App</p>
                            <Link to={'https://play.google.com/store/apps/details?id=in.nic.eci.cvigil'} target='_blank'><img className='px-3' src="/img/androidLogoNewIcon.svg" alt="" /></Link>
                            <Link to={'https://apps.apple.com/in/app/cvigil/id1455719541'} target='_blank'><img src="/img/appleLogoNewIcon.svg" alt="" /></Link>
                        </div>
                    </div>
                    <div className="card col-md-3 col-sm-6" style={{ width: 'auto', border: 'none' }}>
                        <div className="card-body">
                            <img className='m-2 px-1' src="/img/voterTurnoutAppIconNew.svg" alt="" />
                            <p className='mx-2'>Saksham App</p>
                            <Link to={'https://play.google.com/store/apps/details?id=in.gov.eci.pollturnout'} target='_blank'><img className='px-3' src="/img/androidLogoNewIcon.svg" alt="" /></Link>
                            <Link to={'https://apps.apple.com/us/app/voter-turnout-app/id1536366882'} target='_blank'><img src="/img/appleLogoNewIcon.svg" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div><br />
        </>
    )
}

export default MobileApps
