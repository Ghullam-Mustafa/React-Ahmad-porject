import React from 'react'
import CardOne from './CardOne'
import img1 from '../../assets/Group 330.png'
import img2 from '../../assets/Group 332.png'
import img3 from '../../assets/Group 335.png'
import img4 from '../../assets/Group 336.png'


export default function SectionOne() {
  return (
    <div className=" m-5">
    <CardOne src={img1}  title="Title" heading=" Printers & Constrictors"/>
    <CardOne src={img2}  title="Email" heading="davidjohn123@gmail.com"/>
    <CardOne src={img3}  title="Phone" heading="+92 348 75 30 295"/>
    <CardOne src={img4}  title="Location" heading=" 371 Torquay Rd, Paignton Devon, TQ3 2BT United Kingdom"/>

    </div>
  )
}
