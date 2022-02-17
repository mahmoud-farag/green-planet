import React from 'react';
import { Link } from 'react-router-dom';
import './LocationDetails.css';


function LocationDetails(){


    return(

        <div>

            <div className="container">
                <div className="row ">

                    <div className='mainAdd col-md-12 col-sm-12 col-lg-6 col-xl-6'>
                        <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/2.jpeg'} alt="" />
                    </div>

                    <div className='mainAdd col-md-12 col-sm-12 col-lg-6 col-xl-6'>
                        <h4>Lorem, ipsum dolor.</h4>
                        <p>Lorem, ipsum dolor.</p>
                        
                        <div className='fw-bold'>
                            <div>
                                <span className='fw-5 '>Trees Planted</span>
                                <span className='text-success mx-1'>240 / 5000</span>
                            </div>
                            <progress className='prog w-50' value="240" max="5000"></progress>
                        </div>

                        <div className="icons mt-3">
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/meter.svg'} alt="" />
                            <span className='m-4 fw-bold'>7296097.82 m²</span>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/tree.svg'} alt="" />
                            <span className='m-4 fw-bold'>240 Trees planted</span>
                        </div>

                        <button className='mt-4 w-75 text-light btn btn-info'>MAP</button>
                    </div>

                </div>
            </div>

            <div className="add mt-3 w-50 m-auto col-md-12 col-sm-12 col-lg-12 col-xl-12">

                <h3 className='text-center'>Select the number of trees to plant</h3>
                <div className="line mt-1"></div>
                <div className='mt-1 d-flex justify-content-center'>
                    <div className="select m-2 text-center">1</div>
                    <div className="select m-2 text-center">5</div>
                    <div className="select m-2 text-center">10</div>
                    <div className="select m-2 text-center">50</div>
                    <div className="select m-2 text-center">100</div>
                    <div className="select m-2 text-center">Other</div>
                </div>
                <div className="form-group">
                    <input className='form-control w-100 m-auto' placeholder='Tree Name' type="text" name="" id="" />
                </div>

                <div className='m-auto mt-2 w-100'>
                    <button className='btn btn-info w-100 text-light mt-1'>Plant a tree</button>
                </div>
            </div>
            <div className="container text-center w-75 mt-4">
                <div className="row">

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

                        <div className='item overflow-hidden position-relative'>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/bonsiana.jpeg'} alt="" />
                            <div className='img-overlay d-flex justify-content-center align-items-center '>

                                <div className="overlay-innero">
                                
                                    <p className='text-dark'>البونسيانا</p>
                                    <p className='text-dark'>55﷼</p>
                                    
                                    <button className='btn btn-info'><Link style={{ textDecoration: 'none', color:'#fff'}}  to='/tree/1'>تفاصيل</Link></button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

                        <div className='item overflow-hidden position-relative'>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/Neem.jpeg'} alt="" />
                            <div className='img-overlay d-flex justify-content-center align-items-center '>

                                <div className="overlay-innero">
                                
                                    <p className='text-dark'>شجرة النيم</p>
                                    <p className='text-dark'>45﷼</p>
                                    
                                    <button className='btn btn-info'><Link style={{ textDecoration: 'none', color:'#fff'}} to='/tree/2'>تفاصيل</Link> </button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

                        <div className='item overflow-hidden position-relative'>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/fekass.jpeg'} alt="" />
                            <div className='img-overlay d-flex justify-content-center align-items-center '>

                                <div className="overlay-innero">
                                
                                    <p className='text-dark'>فيكس لسان العصفور</p>
                                    <p className='text-dark'>50﷼</p>
                                    
                                    <button className='btn btn-info'><Link style={{ textDecoration: 'none', color:'#fff'}}  to='/tree/3'>تفاصيل</Link></button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

                        <div className='item overflow-hidden position-relative'>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/elab5.jpg'} alt="" />
                            <div className='img-overlay d-flex justify-content-center align-items-center '>

                                <div className="overlay-innero">
                                
                                    <p className='text-dark'>شجرة اللبخ</p>
                                    <p className='text-dark'>45﷼</p>
                                    
                                    <button className='btn btn-info'><Link style={{ textDecoration: 'none', color:'#fff'}} to='/tree/4'>تفاصيل</Link></button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>

                        <div className='item overflow-hidden position-relative'>
                            <img className='img-fluid' src={process.env.PUBLIC_URL+'/imgs/akasia.jpeg'} alt="" />
                            <div className='img-overlay d-flex justify-content-center align-items-center '>

                                <div className="overlay-innero">
                                
                                    <p className='text-dark'>أكاسيا جلوكا</p>
                                    <p className='text-dark'>45﷼</p>
                
                                    <button className='btn btn-info'><Link style={{ textDecoration: 'none', color:'#fff'}}  to='/tree/5'>تفاصيل</Link></button>
                                </div>

                            </div>
                        </div>

                    </div>

                    </div>

               
            </div>

        </div>
    );
};
export default LocationDetails;