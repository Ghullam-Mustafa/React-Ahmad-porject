import React from 'react'
import SectionOne from '../components/sectionOne/SectionOne'
import SectionTwo from '../components/teamSection/SectionTwo'
import Services from '../components/services/Services'

export default function MainPage() {
  return (
    <div className="">
    {/* // title */}
    <SectionOne/>
    {/* // Team and  Show All */}
    <SectionTwo/>
    {/* services block */}
    <Services/>
  </div>
  )
}
