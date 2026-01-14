import React from 'react'
import NavbarComponent from '../../components/ui/nav/navbar/NavbarComponent'
import HeaderComponent from '../../components/landingpage_components/header/HeaderComponent'
import SkinCareAdDescription from '../../components/landingpage_components/skin_care/SkinCareAdDescription'
import SkinCareAdDescriptionTwo from '../../components/landingpage_components/skin_care/SkinCareAdDescriptionTwo'
import SkinCareAdDescriptionThree from '../../components/landingpage_components/skin_care/SkinCareAdDescriptionThree'
import SkinCareProducts from '../../components/landingpage_components/skin_care/SkinCareProducts'
import FooterComponent from '../../components/ui/footer/FooterComponent'

const LandingPage = () => {
  return (
    <>

     <HeaderComponent/>
     <SkinCareAdDescription/>
     <SkinCareAdDescriptionTwo/>
     <SkinCareAdDescriptionThree/>
     <SkinCareProducts/>
     <FooterComponent/>

    </>
  )
}

export default LandingPage
