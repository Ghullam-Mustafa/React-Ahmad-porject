import React from 'react'
import img from '../../assets/Group 342.png'
import img1 from '../../assets/Rectangle 323.png'
import img2 from '../../assets/Rectangle 285.png'

export default function GallerySection() {
    return (
        <div>
            <div className='container mt-4 mb-4'>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-between m-3">
                            <img src={img} alt="" />
                            <a href="#">Show All</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Photos section */}
            <div className="container">
                <div className="row ">
                    <div className="col-lg-9 p-1">
                        <img src={img1} className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-3 ">
                        <div className="row p-1">
                            <div className="col-lg-12">
                                <img src={img2} className='img-fluid' style={{width:'65%'}} alt="" />
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-lg-12">
                                <img src={img2} className='img-fluid' style={{width:'65%'}} alt="" />
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-lg-12">
                                <img src={img2} className='img-fluid' style={{width:'65%'}} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
