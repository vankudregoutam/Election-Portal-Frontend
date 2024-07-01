import '../App.css'
import React from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'
// import { Link } from 'react-router-dom'

const Update = () => {
    return (
        <>
            <div className="container update mb-3">
                <h4 className='padding'>Updates</h4>
                <div className="row flex1">
                    <div className="card col-md-3 col-sm-6" style={{ width: '45%', height: '60%', border: 'none' }}>
                        <div className="card-body">
                            <img src="/img/electionsIconNew.svg" style={{ marginLeft: '-20px' }} alt="" />
                            <div className="col-md-10">
                                <h6>Elections</h6>
                                <p style={{ width: 'auto' }}>Current, future & past <br />election and candidate information</p>
                            </div><br /><br /><br />
                            <button className='btn btn' style={{ color: '#007bff', border: '2px solid whitesmoke' }}>View Information <BiUpArrowAlt /></button>
                        </div>
                    </div>
                    <div className="card col-md-3 col-sm-6" style={{ width: '55%', height: '60%', border: 'none' }}>
                        <div className="card-body">
                            <img src="/img/electionsResultIcon.svg" style={{ marginLeft: '-20px' }} alt="" />
                            <div className="col-md-10 mx-3">
                                <h6>Election results</h6>
                                <p>View current election results <br />or view past election results <br />and statistical report.</p>
                            </div><br /><br /><br />
                            <button className='btn btn' style={{ color: '#007bff', border: '2px solid whitesmoke' }}>View Results <BiUpArrowAlt /></button>
                            <button className='btn btn' style={{ color: '#007bff', border: '2px solid whitesmoke' }}>View Report <BiUpArrowAlt /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update
