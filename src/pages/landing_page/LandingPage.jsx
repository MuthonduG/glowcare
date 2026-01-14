import React from 'react'
import NavbarComponent from '../../components/ui/nav/navbar/NavbarComponent'
import HeaderComponent from '../../components/landingpage_components/header/HeaderComponent'
import SkinCareAdDescription from '../../components/landingpage_components/skin_care/SkinCareAdDescription'
import SkinCareAdDescriptionTwo from '../../components/landingpage_components/skin_care/SkinCareAdDescriptionTwo'

const LandingPage = () => {
  return (
    <>
     <NavbarComponent/>
     <HeaderComponent/>
     <SkinCareAdDescription/>
     <SkinCareAdDescriptionTwo/>
    </>
  )
}

export default LandingPage
