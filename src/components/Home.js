import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="my-3 mx-3" style={{ backgroundColor: '#80e5ff', borderRadius: 5 }}>
                <Link to='https://elections24.eci.gov.in/' target='_blank'><button className='btn btn p-2' style={{ color: '#007bff' }}><b>General Election 2024</b></button></Link>
            </div>
            
        </>
    )
}

export default Home
