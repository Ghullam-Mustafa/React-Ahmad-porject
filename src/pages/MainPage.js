import React from 'react'
import SectionOne from '../components/sectionOne/SectionOne'
import SectionTwo from '../components/teamSection/SectionTwo'
import Services from '../components/services/Services'
import GallerySection from '../components/gallerySection/GallerySection'


export default function MainPage() {
  return (
    <div className="">
    {/* // title */}
    <SectionOne/>
    {/* // Team and  Show All */}
    <SectionTwo/>
    {/* services block */}
    <Services/>
    {/* Photo Gallery */}
    <GallerySection/>
  </div>
  )
}
