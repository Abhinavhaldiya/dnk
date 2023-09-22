import React from 'react'
import MainCarousal from '../../components/HomeCarousal/MainCarousal'
import HomeSectionCarousal from '../../components/HomeSectionCarousal/HomeSectionCarousal'
import { Lahnga } from '../../../Data/Lahnga'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/Footer/Footer'
const HomePage = () => {
  return (
    <div> 
      <Navigation/>
      <MainCarousal/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousal data={Lahnga} sectionName="Lahnga"/>
        <HomeSectionCarousal data={Lahnga} sectionName="Lahnga"/>
        <HomeSectionCarousal data={Lahnga} sectionName="Lahnga"/>
        <HomeSectionCarousal data={Lahnga} sectionName="Lahnga"/>
      </div>
      <Footer/>
      </div>
  )
} 

export default HomePage
