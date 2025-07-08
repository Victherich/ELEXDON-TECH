
import React from 'react'
import Hero from './Hero'
import AboutComponent from './AboutComponent'
import styled from 'styled-components'
import DomainSearch from './DomainSearch'
import ServicesShowcase from './ServicesShowcase'
import Features from './Features'
import TemplateShowcase from './TemplateShowcase'
import Border from './Border'
import Hero2 from './Hero2'
import Partners from './Partners'
import Partners2 from './Partners2'
import OurTeam from './OurTeam'
import FactsSection from './FactsSection'
import SkillsSection from './SkillSection'
import Carousel from './Carousel'
import ServicesPage from './ServicesPage'


const LandingPage = () => {


const Div = styled.div`
//      background: #1488CC;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */




background-size: 400% 400%;
animation: goldGlow 15s ease infinite;
background: #12c2e9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


@keyframes goldGlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}



`

  return (
    <Div>
      <Hero/>
      {/* <DomainSearch/> */}
      <AboutComponent/>
      
      <Border/>
     <Carousel/>
     <ServicesPage/>
      
      {/* <ServicesShowcase/> */}
      {/* <Features/> */}
 
        {/* <TemplateShowcase/> */}
        {/* <Partners2/> */}
        <FactsSection/>
        <SkillsSection/>
        
        <OurTeam/>
    </Div>
  )
}

export default LandingPage
