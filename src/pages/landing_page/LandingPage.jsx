import React from 'react'
import NavbarComponent from '../../components/ui/nav/navbar/NavbarComponent'
import HeaderComponent from '../../components/landingpage_components/header/HeaderComponent'
import SkinCareAdDescription from '../../components/landingpage_components/skin_care/SkinCareAdDescription'
import SkinCareAdDescriptionTwo from '../../components/landingpage_components/skin_care/SkinCareAdDescriptionTwo'
import SkinCareAdDescriptionThree from '../../components/landingpage_components/skin_care/SkinCareAdDescriptionThree'

const LandingPage = () => {
  return (
    <>
    
     <NavbarComponent/>
     <HeaderComponent/>
     <SkinCareAdDescription/>
     <SkinCareAdDescriptionTwo/>
     <SkinCareAdDescriptionThree/>

    </>
  )
}

export default LandingPage
