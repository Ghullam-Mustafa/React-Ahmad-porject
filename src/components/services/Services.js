import React from 'react'
import img from '../../assets/Group 341.png'
import img1 from '../../assets/Rectangle 245.png'

export default function Services() {
    return (
        <div>
            <div className='container mt-4'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-between m-3">
                            <img src={img} alt="" />
                            <a href="#">Show All</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-3 col-md-6 col-sm-12 p-2">
                        <img className='img-fluid' src={img1} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 p-2">
                        <img className='img-fluid' src={img1} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 p-2">
                        <img className='img-fluid' src={img1} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 p-2">
                        <img className='img-fluid' src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
