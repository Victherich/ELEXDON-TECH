
// import React, { useEffect, useState } from "react";
// import "../CSS/Partners.css"; 
// import partner1 from "../Images2/l1.jpeg"; 
// import partner2 from "../Images2/l2.jpeg";
// import partner3 from "../Images2/l3.jpeg";


// const Partners2 = () => {
//   const partners = [
//     { name: "Elexdon Tech", logo: partner1 },
//     { name: "Elexdon Host", logo: partner2 },
//     { name: "Waste Innovations", logo: partner3 },
  
//   ];




//   return (
//     <>


//       <div className="partners-section2">
      
//       <h2 className="partners-title">They Trust Us</h2>
//       <div className="partners-slider">
//         <div className="partners-track2">
//           {partners.concat(partners).map((partner, index) => (
//             <div key={index} className="partner-card" style={{background:"white"}}>
//               <img src={partner.logo} alt={partner.name} className="partner-logo" />
          
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
 
//   );
// };

// export default Partners2;



import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// You must import the slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partner1 from "../Images2/l4.png";
import partner2 from "../Images2/l5.png";
import partner3 from "../Images2/l6.png";
import partner4 from "../Images2/fac.png";
import partner5 from "../Images2/hm.png";

// Styled Components
const PartnersSection = styled.div`
  overflow: hidden;
  // padding: 2rem 0;
  width:50%;
  margin: 0 auto;

  @media(max-width:768px){
  width:100%;
  }
`;

const PartnersTitle = styled.h2`
  text-align: center;
  // margin-bottom: 2rem;
  font-size: 2rem;
  font-weight:900;
  // font-family: Arial, sans-serif;
  color: #2f5f9bff;
`;

const PartnerImage = styled.img`
  width: 80px; /* Adjust size as needed */
  height: auto;
  margin: 0 auto; /* Center the logos */
  display: block;
`;

const P =styled.p`

`

// Main Component
const Partners2 = () => {
  const partners = [
    { name: "NISEB", logo: partner1 },
    { name: "Elexdon Host", logo: partner2 },
    { name: "Waste Innovations", logo: partner3 },
     { name: "Elexdon Host", logo: partner4 },
    { name: "Waste Innovations", logo: partner5 },
  ];

  const settings = {
    // Standard carousel options
    dots: false,
    arrows: true,
    
    // Core settings for the infinite loop
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    // Autoplay settings
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous motion
    speed: 2000, // A higher value means slower movement
    
    // Animation style
    cssEase: "linear", // Ensures smooth, non-stop animation
  };

  return (
    <PartnersSection>
      <PartnersTitle>They Trust Us</PartnersTitle>
      <div style={{ padding: "0 2rem" }}>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index}>
              <PartnerImage src={partner.logo} alt={partner.name} />
              {/* <P>{partner.name}</P> */}
            </div>
          ))}
        </Slider>
      </div>
    </PartnersSection>
  );
};

export default Partners2;