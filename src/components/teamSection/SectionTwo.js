import React from 'react'
import img from '../../assets/Group 329.png'
import Cards from './cards/Cards'
import img1 from '../../assets/Rectangle 237.png'
import img2 from '../../assets/Ellipse 89.png'
// 
export default function SectionTwo() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex justify-content-between">
            <img src={img} alt="" />
            <a href="#">Show All</a>
          </div>
        </div>

        {/* Cards */}

        <div className="container">
          <div className="row justify-content-center ">
            <div className="  col-lg-3 col-sm-12 col-md-6 p-1 ">
              <Cards img1={img1} img2={img2} name="Muhammad Aslam" position="Painter" adress="Post code. 1145 ,Street 401, New York, USA" member="10" />
            </div>
            <div className="  col-lg-3 col-sm-12 col-md-6 p-1">
              <Cards img1={img1} img2={img2} name="Muhammad Aslam" position="Painter" adress="Post code. 1145 ,Street 401, New York, USA" member="10" />
            </div>
            <div className="  col-lg-3 col-sm-12 col-md-6 p-1">
              <Cards img1={img1} img2={img2} name="Muhammad Aslam" position="Painter" adress="Post code. 1145 ,Street 401, New York, USA" member="10" />
            </div>
            <div className="  col-lg-3 col-sm-12 col-md-6 p-1">
              <Cards img1={img1} img2={img2} name="Muhammad Aslam" position="Painter" adress="Post code. 1145 ,Street 401, New York, USA" member="10" />
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
