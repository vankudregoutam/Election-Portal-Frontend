import { BiArrowToBottom, BiUpArrowAlt } from 'react-icons/bi'
import '../App.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <>
            <div className="container mb-3" style={{ marginLeft: '15px', maxWidth: '58%', borderRadius: 10, backgroundColor:'white' }}>
                <h2 className='forms'>Forms</h2>
                <div className="row flex1 mb-3">
                    <div className="card card-form-6 col-6 m-2">
                        <div className="card-body">
                            <img className='img' src="/img/form6.svg" style={{ height: 89 }} alt="" />
                            <div className='col-md-8'>
                                <p><b>New Registration for General Electors</b></p>
                                <p>Fill Form 6 if you are 18 years or above or you will turn 18 in few months</p>
                            </div><br /><br />
                            <button className='btn btn my-3' style={{ backgroundColor: '#31c278', color: 'white' }}>Fill Form 6 <BiUpArrowAlt /></button>
                            <button className='btn btn mx-1'><BiArrowToBottom /><span className='mx-1' style={{ color: '#107742' }}>Download</span></button>
                            <Link to={'https://voters.eci.gov.in/guidelines/Form-6_en.pdf'} target='_blank'><button className="btn btn" style={{ color: '#06f' }}>Guidelines<BiUpArrowAlt /></button></Link>
                        </div>
                    </div>
                    <div className="card card-form-6A col-6 m-1">
                        <div className="card-body">
                            <img className='img' src="/img/form6A.svg" style={{ height: 89 }} alt="" />
                            <div className='col-md-8'>
                                <p><b>New registration for overseas(NRI) electors</b></p>
                                <p>Fill Form 6A if you are a citizen of India and has not acquired citizenship of any other country.</p>
                            </div><br /><br /><br />
                            <button className='btn btn my-3' style={{ backgroundColor: '#6b91ef', color: 'white' }}>Fill Form 6A <BiUpArrowAlt /></button>
                            <button className='btn btn mx-1'><BiArrowToBottom /><span className='mx-1' style={{ color: '#254289' }}>Download</span></button>
                            <Link to={'https://voters.eci.gov.in/guidelines/Form-6a_en.pdf'} target='_blank'><button className="btn btn" style={{ color: '#06f' }}>Guidelines<BiUpArrowAlt /></button></Link>
                        </div>
                    </div>
                    <div className="card card-form-7 col-6 m-2">
                        <div className="card-body">
                            <img className='img' src="/img/form7.svg" style={{ height: 89 }} alt="" />
                            <div className='col-md-8'>
                                <p><b>Objection for proposed inclusion/deletion of name in existing roll</b></p>
                                <p>Fill Form 7 to get name deleted from the existing electoral roll.</p>
                            </div><br /><br /><br />
                            <button className='btn btn my-3' style={{ backgroundColor: '#cc4242', color: 'white' }}>Fill Form 7 <BiUpArrowAlt /></button>
                            <button className='btn btn mx-1'><BiArrowToBottom /><span className='mx-1' style={{ color: '#7a2626' }}>Download</span></button>
                            <Link to={'https://voters.eci.gov.in/guidelines/Form-7_en.pdf'} target='_blank'><button className="btn btn" style={{ color: '#06f' }}>Guidelines<BiUpArrowAlt /></button></Link>
                        </div>
                    </div>
                    <div className="card card-form-8 col-6 m-2">
                        <div className="card-body">
                            <img className='img' src="/img/form8.svg" style={{ height: 89 }} alt="" />
                            <div className='col-md-8'>
                                <p><b>Shifting of residence/correction of entries in existing electoral roll/replacement of EPIC/marking of PwD</b></p>
                                <p>Fill Form 8 to get EPIC with updated or replacement or marking of PwD.</p>
                            </div><br /><br /><br /><br />
                            <button className='btn btn my-3' style={{ backgroundColor: '#e39044', color: 'white' }}>Fill Form 8 <BiUpArrowAlt /></button>
                            <button className='btn btn mx-1'><BiArrowToBottom /><span className='mx-1' style={{ color: '#875528' }}>Download</span></button>
                            <Link to={'https://voters.eci.gov.in/guidelines/Form-8_en.pdf'} target='_blank'><button className="btn btn" style={{ color: '#06f' }}>Guidelines<BiUpArrowAlt /></button></Link>
                        </div>
                    </div>
                    <div className="card card-form-6B col-6 m-2" style={{width: '96.5%'}}>
                        <div className="card-body">
                            <img className='img' src="/img/form6B.svg" style={{ height: 89 }} alt="" />
                            <div className='col-md-8'>
                                <p><b>Aadhaar collection</b></p>
                                <p>Fill Form 6B to get Aadhaar and EPIC.</p>
                            </div><br />
                            <button className='btn btn my-3' style={{ backgroundColor: '#ebd548', color: 'white' }}>Fill Form 6B <BiUpArrowAlt /></button>
                            <button className='btn btn mx-1'><BiArrowToBottom /><span className='mx-1' style={{ color: '#726721' }}>Download</span></button>
                        </div>
                    </div>
                    <div className="card card-form-M col-6 m-2" style={{width: 420}}>
                        <div className="card-body">
                            <img className='img' src="/img/form8.svg" style={{ height: 89 }} alt="" />
                            <div className='col-md-8'>
                                <p><b>Form M</b></p>
                                <p>This form is for the Migrant Electors of Kashmir who want to cast vote from any one special polling station of Delhi, Jammu and Udhampur.</p>
                            </div><br /><br /><br />
                            <button className='btn btn mx-1'><BiArrowToBottom /><span className='mx-1'>Download</span></button>
                        </div>
                    </div>
                    <div className="card card-form-12C col-6 m-2" style={{width: 420}}>
                        <div className="card-body">
                            <img className='img' src="/img/form12C.svg" style={{ height: 89 }} alt="" />
                            <div className='col-md-8'>
                                <p><b>Form 12C</b></p>
                                <p>This form is for Migrant Electors of Kashmir who want to cast vote through postal ballot.</p>
                            </div><br /><br /><br />
                            <button className='btn btn mx-1'><BiArrowToBottom /><span className='mx-1' style={{color: '#444444'}}>Download</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
