
import React, { useEffect, useState } from "react";
import "../CSS/Partners.css"; // Import the CSS file

// Import partner logos
import partner1 from "../Images/sp1.jpeg"; // Replace with actual paths
import partner2 from "../Images/sp2.jpeg";
import partner3 from "../Images/sp3.jpeg";
import partner4 from '../Images/sp4.jpeg'
import partner5 from '../Images/sp5.jpeg'
import partner6 from "../Images/sp6.jpeg";

import partner8 from '../Images/sp8.jpeg'

import { useLocation, useNavigate } from "react-router-dom";
// import partner4 from "../Images/partner4.png";
// import partner5 from "../Images/partner5.png";
// import partner6 from "../Images/partner6.png";

const Partners2 = () => {
  const partners = [
    { name: "Elexdon Tech", logo: partner1 },
    { name: "Elexdon Host", logo: partner2 },
    { name: "Waste Innovations", logo: partner3 },
    {name:"Royal Iwere Foundation", logo: partner4},
    { name: "Sustainable Energy Inc.", logo: partner4 },
    { name: "Eco-Friendly Materials", logo: partner5 },
    { name: "Recycling Experts", logo: partner6 },
      
    { name: "Eco-Friendly Materials", logo: partner8 },
  
  ];

  const [showApply, setShowApply]=useState(false)
  const location = useLocation()
  const navigate = useNavigate()

//   useEffect(()=>{
//     if(location.pathname==='/'||
//       location.pathname==='/aboutus'||
//       location.pathname==='/admission'||
//     location.pathname==='/academics'||
//   location.pathname==='/gallery'||
// location.pathname==='/contactus'){
//   setShowApply(true)
// }
//   },[])

  return (
    <>
    {/* {(
  location.pathname === '/' ||
  location.pathname === '/aboutus' ||
  location.pathname === '/admissions' ||
  location.pathname === '/academics' ||
  location.pathname === '/gallery' ||
  location.pathname === '/contactus'
) && (
  <section className="apply-section" id="apply">
    <h2>🚀 Ready to Apply?</h2>
    <p>Take the next step toward a career in environmental sustainability.</p>
    <a onClick={()=>navigate('/application')} className="apply-btn">Apply Now</a>
  </section>
)} */}

      <div className="partners-section2">
      
      <h2 className="partners-title">OUR SPONSORS/PARTNERS</h2>
      {/* <h2 className="partners-title2" style={{fontSize:"1.5rem", color:"rgba(0,0,255,0.7)"}}>Our Business & Technology Partners</h2> */}
      <div className="partners-slider">
        <div className="partners-track2">
          {partners.concat(partners).map((partner, index) => (
            <div key={index} className="partner-card" style={{background:"white"}}>
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
              {/* <p className="partner-name">{partner.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
 
  );
};

export default Partners2;
