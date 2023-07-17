
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function CardOne(props) {
  return (
    <div>
      <div className=' container '>
        <div className="row">
            <div className="col-lg-12  col-md-12 col-sm-12 d-flex">
            <div className=''>
            
            <img src={props.src} alt="" />
            </div>
            <div className='p-2'>
            {/* <p>Title: Printers & Constrictors</p> */}
            <p className='text-secondary'>{props.title}: <span className='text-primary'>{props.heading}</span>  </p>
            </div>
            </div>
        </div>
            
      </div>
    </div>
  );
}
