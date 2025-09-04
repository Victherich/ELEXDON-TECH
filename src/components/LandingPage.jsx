
import React from 'react'
import Hero from './Hero'
import AboutComponent from './AboutComponent'
import styled from 'styled-components'
import DomainSearch from './DomainSearch'
import ServicesShowcase from './ServicesShowcase'
import Features from './Features'
import TemplateShowcase from './TemplateShowcase'
import Border from './Border'

import Partners from './Partners'
import Partners2 from './Partners2'
import OurTeam from './OurTeam'
import FactsSection from './FactsSection'
import SkillsSection from './SkillSection'
import Carousel from './Carousel'
import ServicesPage from './ServicesPage'
import Hero2 from './landingPage2/Hero2'
import ProductsSection from './landingPage2/ProductsSection'
import ThinkingSection from './landingPage2/ThinkingSection'
import WhatWeOffer from './landingPage2/WhatWeOffer'
import WhatWeOffer2 from './landingPage2/WhatWeOffer'
import WhyChooseUsComponent from './landingPage2/WhyChooseUs'
import CoreValuesComponent from './landingPage2/CoreValues'
import CoreValuesIntegrity from './landingPage2/CoreValuesIntegrity'
import CoreValuesPartnership from './landingPage2/CoreValuesPartnership'
import CoreValuesQuality from './landingPage2/CoreValuesQuality'
import CoreValuesProfessionalism from './landingPage2/CoreValuesProfessionalism'
import MissionComponent from './landingPage2/MissionComponent'
import InfoCards from './landingPage2/InfoCards'
import BlogComponent from './landingPage2/BlogComponent'
import TestimonialComponent from './landingPage2/TestimonialComponent'


const LandingPage = () => {


const Div = styled.div`
//      background: white;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, white, white);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right,white, white); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background:rgba(107, 132, 162, 0.1);



background-size: 400% 400%;
animation: goldGlow 15s ease infinite;
// background: #12c2e9;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to left, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


@keyframes goldGlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}



`

  return (
    <Div>
      {/* <Hero/> */}
      {/* <DomainSearch/> */}
      {/* <AboutComponent/> */}
      
      {/* <Border/> */}
     <Carousel/>
<Hero2/>
<ProductsSection/>
   <Partners2/>
   <ThinkingSection/>
   <WhatWeOffer2/>
   <WhyChooseUsComponent/>
   <CoreValuesComponent/>
   <CoreValuesIntegrity/>
   <CoreValuesPartnership/>
   <CoreValuesProfessionalism/>
   <CoreValuesQuality/>
   {/* <MissionComponent/> */}
   <InfoCards/>
   <BlogComponent/>
   <TestimonialComponent/>
     {/* <ServicesPage/> */}
      
      {/* <ServicesShowcase/> */}
      {/* <Features/> */}
 
        {/* <TemplateShowcase/> */}
        {/* <Partners2/> */}
        {/* <FactsSection/> */}
        {/* <SkillsSection/> */}
        
        {/* <OurTeam/> */}
    </Div>
  )
}

export default LandingPage
