


// // components/Footer.jsx
// import React from 'react';
// import styled from 'styled-components';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import logo from '../Images/ELogo.png'
// import logo2 from '../Images/logo4.jpeg';
// import { useNavigate } from 'react-router-dom';


// const FooterWrapper = styled.footer`
// position:relative;
// //   background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
// //   color: #f5f5f5;
// //   padding-top: 80px;
//   position: relative;
//   background: #303D72;
// //   background: linear-gradient(135deg, #3F689D,  #303D72);
// background: #1488CC;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// `;

// const CurvedTop = styled.div`
//   background: #1e1e2f;
//   height: 100px;
//   border-top-left-radius: 100% 50px;
//   border-top-right-radius: 100% 50px;
//   position: absolute;
//   top: -100px;
//   left: 0;
//   width: 100%;
// `;

// const TopBorder = styled.div`
// height:50px;
// );
// background-size: 400% 400%;
// animation: goldGlow 15s ease infinite;
// background: #12c2e9;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to left, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


// @keyframes goldGlow {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
// `

// const FooterContent = styled.div`
//   width:100%;
// //   margin: auto;
//   padding: 20px 0px;
 
//   display: flex;
//   flex-wrap:wrap;
//   justify-content:center;
//   align-items:flex-start;
//   gap:100px;
  

//   border-radius:500px 0px 500px 0px;
// //   background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
// // background:#E6E6FF;
// // background:rgba(255,255,255,1);
// background:#E4E9F1;


// @media (max-width: 1279px) {
//     border-radius:0px 0px 0px 0px;
//   }

//   @media (max-width: 768px) {
//     text-align: center;
//     grid-template-columns: 1fr;
//   }
// `;

// const Section = styled.div`
// img{
// width:100px;
// }
// `;

// const SectionN = styled.div`
// position:absolute;
//  left:75%;
//   top:70%;
//    z-index:2;

//    @media(max-width:1279px){
//     display:none;
//    }
// `;


// const Title1 = styled.h4`
//   margin-bottom: 16px;
//   font-size: 2rem;
//   color: #000080; /* navy blue */
//   font-weight: 800;
//   text-shadow:
//     -1px -1px 0 #fff,
//      1px -1px 0 #fff,
//     -1px  1px 0 #fff,
//      1px  1px 0 #fff;
// `;


// const Title = styled.h4`
//   margin-bottom: 16px;
//   font-size: 18px;
//   color: #000080; /* saffron gold */
// `;

// const Title3 = styled.h4`
// margin-bottom:2px;
//   font-size: 18px;
//   color: #000080; /* saffron gold */
// `;

// const Link = styled.a`
//   display: block;
//   color: #333;
//   margin: 8px 0;
//   text-decoration: none;
//   font-size: 1rem;
//   transition: 0.3s;
//   font-weight:400;
//   cursor:pointer;

//   &:hover {
//     // color: #b983ff; /* light galaxy purple */
//     text-decoration:underline;
//   }
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-top: 15px;

//   a {
//     color: #2B32B2;
//     font-size: 20px;
//     transition: 0.3s;

//     &:hover {
//       color: #fff;
//     }
//   }
// `;

// const Newsletter = styled.div`
//   input {
//     width: 100%;
//     padding: 10px;
//     border: 1px solid #2B32B2;
//     // margin-top: 10px;
//     border-radius: 5px;
//     outline: none;
//     background: white;
   
//   }

//   button {
//     margin-top: 10px;
//     padding: 10px;
//     background: #2B32B2;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     font-weight: bold;
//     transition: 0.3s;

//     &:hover {
//       background: gray;
      
//     }
//   }
// `;

// const WaveTop = styled.div`
//   position: relative;
//   top: -1px;
//   width: 100%;
//   height: 100px;
//   overflow: hidden;
//   line-height: 0;

//   svg {
//     position: relative;
//     display: block;
//     width: calc(150% + 1.3px);
//     height: 60px;
//   }

//   path {
//     fill: #1e1e2f;
//   }
// `;

// const Copyright = styled.div`
// //   background: #1e1e2f;
// // background: linear-gradient(135deg, #3F689D,  #303D72);
//   text-align: center;
//   padding: 10px 0px;
//   padding-top:20px;
//   font-size: 14px;
//   color: white;
//   height:100px;
//   background: #1488CC;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
// border-radius:200px 0px 0px 0px;

// @media(max-width:428px){
//     border-radius:30px 0px 0px 0px;
// }

// `;

// const Copyright2 = styled.div`
// //   background: #1e1e2f;
// // background: linear-gradient(135deg, #3F689D,  #303D72);
//   text-align: center;
//   padding: 10px 0px;
//   padding-top:20px;
//   font-size: 14px;
//   color: white;
//   height:100px;
//   background: #1488CC;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


// `;


// // ---- Main Footer Component ----

// const Footer = () => {
//   const navigate = useNavigate();

//   return (
//     <FooterWrapper>
//       {/* <CurvedTop /> */}
//       <TopBorder></TopBorder>
//       <FooterContent>
//         <Section>
//             {/* <img src={logo}/> */}
//           {/* <Title1>ELEXDON HOST</Title1> */}<br/>
//           <img src={logo2} alt='logo' style={{width:"200px", borderRadius:"5px", marginTop:"10px"}}/>
//           {/* <p>Secure. Scalable. Simple Hosting for Everyone.</p> */}
//           <p><strong style={{
//   color: "#2B32B2",
//   textShadow: "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
// }}>Email:</strong> support@elexdonhost.com.ng</p>
//         <p>
//           <strong style={{color:" #2B32B2"}}>Phone:</strong> +234 818 560 9702
//         </p>
//         <p>
//           <strong style={{color:" #2B32B2"}}>Address:</strong> Elexdon Digital Technologies Limited.<br/>
//           Plot SP 795 First-Gate Mechanic Estate, Apo Fct-Abuja.
//         </p>
//           <SocialIcons>
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaTwitter /></a>
//             <a href="#"><FaInstagram /></a>
//             <a href="#"><FaLinkedin /></a>
//           </SocialIcons>
//         </Section>

//         <Section>
//           <Title>Company</Title>
//           <Link onClick={()=>navigate('/aboutus')}>About Us</Link>
//           <Link onClick={()=>navigate('/blogs')}>Blogs</Link>
//           <Link onClick={()=>navigate('/affiliate')}>Affiliate</Link>
//           <Link onClick={()=>navigate('/announcement')}>Announcement</Link>
//           {/* <Link href="#">Partners</Link> */}
//         </Section>

//         <Section>
//           <Title>Hosting</Title>
//           <Link onClick={()=>navigate('/sharedhosting')}>Shared Hosting</Link>
//           <Link onClick={()=>navigate('/vps')}>VPS Hosting</Link>
//           <Link onClick={()=>navigate('/dedicatedhosting')}>Dedicated Servers</Link>
//           <Link onClick={()=>navigate('/resellerhosting')}>Reseller Hosting</Link>
//         </Section>

//         <Section>
//           <Title>Domains</Title>
//           <Link onClick={()=>navigate('/domainspage')}>Register Domain</Link>
//           <Link onClick={()=>navigate('/domaintransfer')}>Transfer Domain</Link>
//           <Link onClick={()=>navigate('/freessl')}>Free SSL</Link>
//         </Section>

//         <Section>
//           <Title>Support</Title>
//           <Link  onClick={()=>navigate('/contactus')}>Contact Us</Link>
//           <Link  onClick={()=>navigate('/support')}>Tickets</Link>
//           <Link  onClick={()=>navigate('/knowledgebase')}>Knowledgebase</Link>
          
//           <Link  onClick={()=>navigate('/privacypolicy')}>Privacy Policy</Link>
//           <Link  onClick={()=>navigate('/refundpolicy')}>Refund Policy</Link>
//           <Link  onClick={()=>navigate('/termsandconditions')}>Terms of Service</Link>
//         </Section>

//         <SectionN >
//           <Title3>Newsletter</Title3>
//           <Newsletter>
       
//             <input type="email" placeholder="Enter your email" />
//             <button>Subscribe</button>
//           </Newsletter>
//         </SectionN>
//       </FooterContent>

//       {/* <WaveTop>
//         <svg viewBox="0 0 500 60" preserveAspectRatio="none">
//           <path d="M0,30 C150,60 350,0 500,30 L500,0 L0,0 Z" />
//         </svg>
//       </WaveTop> */}

//       <Copyright style={{width:"100%", zIndex:"1", position:"absolute", bottom:"0px", left:"0px",}}>
//         &copy; {new Date().getFullYear()} ELEXDON HOST. All rights reserved.
//         {/* <img src={logo2} alt=''/> */}
//       </Copyright>
//         <Copyright2 style={{  background:"#E4E9F1"}}>
//         &copy; {new Date().getFullYear()} ELEXDON HOST. All rights reserved.
        
//       </Copyright2>
//        <div style={{
//           margin:"0 auto",
//           width:"100%",
//           display:"flex",
//           justifyContent:"center",
//           alignItems:"center",
//           position:"absolute",
//           transfrom:"translate(-50%, -50%)",
//           bottom:"20px",
//           left:"0px",
//           zIndex:"1000000"
//         }}>
//           <img src={logo2} alt='logo' style={{width:"200px", borderRadius:"5px"}}/>
//         </div>
//     </FooterWrapper>
//   );
// };

// export default Footer;








// 2nd code
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Added more icons
import logo2 from '../Images/ELogo.png'; // Main logo
// import logoWhite from '../Images/ELogo.png'; // Assuming a white version of ELogo might be useful for dark backgrounds, uncomment if you use it
import { useNavigate } from 'react-router-dom';

// --- Keyframe Animations ---
// ALL KEYFRAMES SHOULD BE DEFINED HERE AT THE TOP
// BEFORE THEY ARE USED IN ANY STYLED COMPONENTS

// Gradient shimmer for the top border
const gradientShimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Subtle glow for icons/links on hover
const neonHover = keyframes`
  from { text-shadow: 0 0 5px #00FFFF, 0 0 10px #00FFFF; }
  to { text-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF; }
`;

// Input focus glow
const inputGlow = keyframes`
  from { box-shadow: 0 0 0px rgba(0, 201, 255, 0.5); }
  to { box-shadow: 0 0 15px rgba(0, 201, 255, 0.8); }
`;

// Floating particles/elements (MOVED TO TOP)
const float = keyframes`
  0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.8; }
  25% { transform: translateY(-10px) translateX(5px) rotate(5deg); opacity: 1; }
  50% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.8; }
  75% { transform: translateY(10px) translateX(-5px) rotate(-5deg); opacity: 1; }
  100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.8; }
`;


// --- Styled Components ---

const FooterWrapper = styled.footer`
  position: relative;
  // background: #0D1B2A; /* Deep dark blue for a premium, tech feel */
   background: #34404eff;
  // color: #E0E0E0; /* Soft white for general text */
  color:white;
  // padding-top: 10px; /* Space for the top wave/curve */
  overflow: hidden; /* Ensure nothing spills out */
`;

// This wave will be the main divider between the page content and the footer
const WaveTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px; /* Taller wave */
  overflow: hidden;
  line-height: 0;
  transform: translate(0% 50%);
  // transform: rotate(180deg); /* Flip the wave to appear at the top */
  z-index: 10; /* Ensure it's above the footer content slightly if needed */

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px); /* Match container width */
    height: 150px; /* Match container height */
    transform: rotateY(180deg); /* Flip horizontally for a different wave shape */
  }

  path {
    fill: purple; /* Match footer background color */
  }
`;

const TopGradientBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px; /* Thin, glowing line */
  background: linear-gradient(90deg, #f64f59, #c471ed, #12c2e9);
  background-size: 400% 100%;
  animation: ${gradientShimmer} 15s ease infinite;
  z-index: 11; /* Ensure it's on top of the wave */
`;

const FooterContent = styled.div`
  max-width: 1400px; /* Wider content area */
  margin: 0 auto;
  padding: 30px 40px; /* More generous padding */
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1.2fr; /* Adjusted columns for new layout */
  gap: 60px; /* Increased gap */
  position: relative;
  z-index: 1; /* Above background elements */

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr; /* 3 columns for medium screens */
    padding: 40px 30px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; /* 2 columns for smaller screens */
    text-align: left; /* Keep left aligned for better readability */
    padding: 30px 20px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Single column for mobile */
    text-align: center; /* Center align for mobile */
    padding: 20px 15px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align text to left by default */
  
  @media (max-width: 480px) {
    align-items: center; /* Center align for mobile */
  }
`;

const LogoSection = styled(Section)`
  .footer-logo {
    width: 60px; /* Larger, more prominent logo */
    border-radius: 8px;
    // margin-bottom: 5px;
    box-shadow: 0 0 20px rgba(0, 201, 255, 0.3); /* Subtle glow */
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.03);
    }
  }

  p {
    color: whitesmoke; /* Lighter grey for descriptive text */
    line-height: 1.6;
    margin-bottom: 10px;
    font-size: 0.8rem;
  }

  strong {
    color: #00C9FF; /* Accent color for bold text */
    font-weight: 600;
  }
`;

const SectionTitle = styled.h4`
  margin-bottom: 25px;
  font-size: 1.1rem; /* Slightly larger titles */
  color: #00C9FF; /* Vibrant blue for section titles */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px; /* Underline position */
    width: 50px; /* Length of underline */
    height: 3px;
    background: linear-gradient(90deg, #00C9FF, #834cff); /* Gradient underline */
    border-radius: 2px;
    @media (max-width: 480px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  ${({ noUnderline }) => noUnderline && css`
    &::after {
      display: none;
    }
  `}
`;

const FooterLink = styled.a`
  display: block;
  color: whitesmoke; /* Lighter grey for links */
  margin: 2px 0; /* More vertical spacing */
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    color: #00C9FF; /* Vibrant hover color */
    transform: translateX(5px); /* Subtle slide effect */
    animation: ${neonHover} 1s infinite alternate; /* Subtle text glow */
    &::before {
      content: '►'; /* Arrow indicator */
      position: absolute;
      left: -20px; /* Start off-screen */
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }
    /* The transform below was causing the arrow not to show fully.
       The arrow's left property and opacity change are enough for the effect. */
    &::before {
      left: -15px; /* Move arrow into view */
      opacity: 1;
    }
  }

  /* For mobile, center align links within their sections if section is centered */
  @media (max-width: 480px) {
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: whitesmoke;
  font-size: 0.8rem; /* Make contact info text slightly smaller */

  svg {
    margin-right: 10px;
    color: #00C9FF; /* Icon color */
    font-size: 1.1rem;
    min-width: 20px; /* Ensure icon doesn't shrink on smaller text */
  }

  a { /* For the email link within ContactInfo */
    color: #B0B0B0;
    text-decoration: none;
    &:hover {
        color: #00C9FF;
        text-decoration: underline;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 18px; /* Slightly more gap */
  margin-top: 25px; /* More space above icons */

  a {
    color: #00C9FF; /* Vibrant color for icons */
    font-size: 22px; /* Larger icons */
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 5px rgba(0, 201, 255, 0.3)); /* Subtle initial glow */

    &:hover {
      color: #fff; /* White on hover */
      transform: scale(1.2) rotate(5deg); /* Pop and rotate effect */
      filter: drop-shadow(0 0 15px rgba(0, 201, 255, 0.8)); /* Stronger glow */
    }
  }
`;

const Newsletter = styled.div`
  input {
    width: 100%;
    padding: 12px 15px; /* More padding */
    border: 1px solid #00C9FF; /* Accent border */
    border-radius: 8px; /* More rounded */
    box-sizing:border-box;
    outline: none;
    background: #0F2027; /* Darker input background */
    color: whitesmoke;
    margin-bottom: 15px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;

    &:focus {
      box-shadow: 0 0 15px rgba(0, 201, 255, 0.8); /* Stronger glow on focus */
      animation: ${inputGlow} 1.5s infinite alternate; /* Pulsating glow on focus */
    }

    &::placeholder {
      color: #707070;
    }
  }

  button {
    width: 100%;
    padding: 12px 20px;
    background: linear-gradient(90deg, #00C9FF 0%, #0072FF 100%); /* Gradient button */
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.05rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 150, 255, 0.4);

    &:hover {
      background: linear-gradient(90deg, #b983ff 0%, #834cff 100%); /* Hover gradient */
      transform: translateY(-2px); /* Slight lift */
      box-shadow: 0 8px 20px rgba(185, 131, 255, 0.6);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 3px 10px rgba(0, 150, 255, 0.3);
    }
  }
`;

const CopyrightSection = styled.div`
  background: #0A1520; /* Even darker background for copyright */
  color: #808080; /* Subtler white for copyright text */
  text-align: center;
  padding: 30px 20px;
  font-size: 0.9rem;
  border-top: 1px solid rgba(0, 201, 255, 0.1); /* Subtle glowing border */
  position: relative; /* For the "Designed By" text */
  overflow: hidden; /* Ensure nothing spills out */

  p {
    margin: 5px 0;
  }

  a {
    color: #00C9FF; /* Accent color for the link */
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

const FloatingLogo = styled.img`
  width: 150px; /* Size of the floating logo */
  position: absolute;
  bottom: 0px; /* Adjust as needed to position relative to copyright */
  left: 50%;
  transform: translateX(-50%) translateY(100%); /* Start off-screen */
  animation: floatIn 1.5s forwards ease-out 1s, ${float} 20s infinite ease-in-out 3s; /* Float in, then continuous float */
  z-index: 100;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 201, 255, 0.5); /* Glow */

  @keyframes floatIn {
    to { transform: translateX(-50%) translateY(0); } /* Float up to position */
  }

  @media (max-width: 768px) {
    display: none; /* Hide on smaller screens if it becomes too cluttered */
  }
`;


// ---- Main Footer Component ----

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      <TopGradientBorder />
      {/* <WaveTop>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 500,100 L500,0 L0,0 Z"></path>
        </svg>
      </WaveTop> */}

      <FooterContent>
        {/* Company Info Section */}
        <LogoSection>
          <img src={logo2} alt="Elexdon Logo" className="footer-logo" />
          <p>Elexdon is a world-class integrated web solution provision company with a track record of success in tech services. We develop and offer a flexible range of solutions development and services.</p>
          
          <ContactInfo>
            <FaEnvelope /> Email: <a href="mailto:info@elexdontech.com"> info@elexdontech.com</a>
          </ContactInfo>
          <ContactInfo>
            <FaPhoneAlt /> Phone (UK): +44(0)7479305003
          </ContactInfo>
          <ContactInfo>
            <FaMapMarkerAlt /> Address (UK): The Old Vicarage building, Trinity Road Old Market Avon, Bristol – United Kingdom.
          </ContactInfo>
          <ContactInfo>
            <FaPhoneAlt /> Phone (NG): +2349015605175
          </ContactInfo>
          <ContactInfo>
            <FaMapMarkerAlt /> Address (NG): Elexdon Digital Technologies Limited.
Plot SP 795 First-Gate Mechanic Estate, Apo Fct-Abuja.
          </ContactInfo>
          
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </SocialIcons>
        </LogoSection>

        {/* Quick Links Section */}
        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <FooterLink onClick={() => navigate('/')}>Home</FooterLink>
          <FooterLink onClick={() => navigate('/aboutus')}>About Us</FooterLink>
          <FooterLink onClick={() => navigate('/services')}>Services</FooterLink> {/* Assuming a services page */}
      
          <FooterLink onClick={() => navigate('/contactus')}>Contact us</FooterLink>
        </Section>

        {/* Our Courses Section */}
        <Section>
          <SectionTitle>Our Subsidiaries</SectionTitle>
          {/* <p style={{color: "#B0B0B0", lineHeight: "1.6", fontSize: "0.95rem", marginBottom: "15px"}}>
            All course content is accredited by International bodies and has been independently assessed to ensure a consistent and high-quality training service. Just check out our academy page for more information.
          </p> */}
            {/* <FooterLink onClick={() => navigate('/courseregistration')}>Register Course</FooterLink> Assuming an academy page */}
        <FooterLink onClick={() => window.open('https://elexdonhost.com', '_blank')}>Elexdon Host</FooterLink>
         
          <FooterLink onClick={() => window.open('https://www.elexdondigitalacademy.com', '_blank')}>Elexdon Digital Academy</FooterLink> {/* Assuming an academy page */}
         <FooterLink onClick={() => window.open('https://mikeconnect.com', '_blank')}>Mike Connect</FooterLink>
          <FooterLink href='/coworkingspace'>Co-Working Space</FooterLink>
         
        </Section>
        
        {/* Hosting Services (from old content, adjusted) */}
        <Section>
          <SectionTitle>Legal</SectionTitle>
             <FooterLink onClick={() => navigate('/termsandconditions')}>Terms of Service</FooterLink>
          <FooterLink onClick={() => navigate('/privacypolicy')}>Privacy Policy</FooterLink></Section>


        {/* Newsletter / Contact (adjusted for new content structure) */}
        <Section>
          <SectionTitle noUnderline>Stay Connected</SectionTitle> {/* No underline for this title */}
          <p style={{color: "#B0B0B0", lineHeight: "1.6", fontSize: "0.95rem", marginBottom: "15px"}}>
            Subscribe to our newsletter for the latest updates and special offers.
          </p>
          <Newsletter>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </Newsletter>
        </Section>

      </FooterContent>

      <CopyrightSection>
        <p>&copy; Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        <p>DESIGNED BY <a href="https://elexdontech.com" target="_blank" rel="noopener noreferrer">ELEXDON DIGITAL TECHNOLOGIES LIMITED</a></p>
      </CopyrightSection>

      {/* Floating Logo (appears from bottom) */}
      {/* <FloatingLogo src={logo2} alt="Elexdon Logo" /> */}

    </FooterWrapper>
  );
};

export default Footer;











// // 3rd code
// import React from 'react';
// import styled from 'styled-components';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import logo from '../Images/ELogo.png'; // Using the logo from the provided code, assuming it's an Elexdon logo.
// import certBadge from '../Images/ELogo.png'; // Placeholder for the certification badges. Please replace with your actual images.

// const FooterWrapper = styled.footer`
//   background-color: #1a361c;
//   color: #d1d1d1;
//   font-family: Arial, sans-serif;
//   padding: 50px 120px;

//   @media (max-width: 1024px) {
//     padding: 50px 40px;
//   }

//   @media (max-width: 768px) {
//     padding: 30px 20px;
//   }
// `;

// const FooterGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
//   gap: 40px;
//   max-width: 1200px;
//   margin: 0 auto;

//   @media (max-width: 1024px) {
//     grid-template-columns: 1fr 1fr;
//     gap: 30px;
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     text-align: center;
//   }
// `;

// const Section = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
  
//   @media (max-width: 768px) {
//     align-items: center;
//   }
// `;

// const Logo = styled.img`
//   width: 150px;
//   margin-bottom: 20px;
// `;

// const LocationList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   margin: 0 0 20px 0;
//   display: flex;
//   gap: 20px;

//   @media (max-width: 768px) {
//     justify-content: center;
//   }
// `;

// const Location = styled.li`
//   color: #b8de6f;
//   font-weight: bold;
//   position: relative;
  
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -5px;
//     left: 0;
//     width: 100%;
//     height: 2px;
//     background-color: #b8de6f;
//   }
// `;

// const ContactInfo = styled.div`
//   margin-bottom: 20px;
  
//   p {
//     margin: 5px 0;
//     line-height: 1.6;
//   }

//   span {
//     display: block;
//     border-bottom: 1px solid #b8de6f;
//     padding-bottom: 5px;
//     margin-bottom: 10px;
//     color: #b8de6f;
//     font-weight: bold;
//     font-size: 14px;
    
//     @media (max-width: 768px) {
//       display: inline-block;
//     }
//   }

//   a {
//     color: #b8de6f;
//     text-decoration: none;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const SectionTitle = styled.h4`
//   font-size: 16px;
//   font-weight: bold;
//   margin: 0 0 15px 0;
//   text-transform: uppercase;
//   color: #fff;

//   @media (max-width: 768px) {
//     margin-top: 20px;
//   }
// `;

// const LinksList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
  
//   li {
//     margin-bottom: 10px;
//   }
  
//   a {
//     color: #d1d1d1;
//     text-decoration: none;
//     transition: color 0.3s ease;
    
//     &:hover {
//       color: #b8de6f;
//     }
//   }
// `;

// const CertificationsSection = styled(Section)`
//   @media (max-width: 768px) {
//     align-items: center;
//   }
// `;

// const CertTitle = styled.h4`
//   color: #b8de6f;
//   font-size: 14px;
//   text-transform: uppercase;
//   margin: 0 0 15px 0;
//   line-height: 1.4;
//   text-align: left;
  
//   @media (max-width: 768px) {
//     text-align: center;
//   }
// `;

// const CertificationBadges = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-bottom: 30px;
  
//   @media (max-width: 768px) {
//     justify-content: center;
//   }
// `;

// const CertBadge = styled.img`
//   width: 50px;
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 15px;
  
//   a {
//     color: #fff;
//     font-size: 20px;
//     transition: color 0.3s ease;
    
//     &:hover {
//       color: #b8de6f;
//     }
//   }
// `;

// const FooterComponent = () => {
//   return (
//     <FooterWrapper>
//       <FooterGrid>
//         {/* First Column: Logo and Contact Info */}
//         <Section>
//           <Logo src={logo} alt="Elexdon Tech Logo" />
//           <LocationList>
//             <Location>Nigeria</Location>
//             <Location>Ghana</Location>
//             <Location>Kenya</Location>
//             <Location>Sierra Leone</Location>
//           </LocationList>
//           <ContactInfo>
//             <span>Lagos Address:</span>
//             <p>Unit 8, Plot 2, Block 47, Babatunde Anjous Avenue, Lekki Phase One, Lagos.</p>
//           </ContactInfo>
//           <ContactInfo>
//             <p>070 ELEXDON (070 428 3272)</p>
//             <p>info@elexdon.com</p>
//           </ContactInfo>
//         </Section>
        
//         {/* Second Column: Vatebra Links (Elexdon in this case) */}
//         <Section>
//           <SectionTitle>Elexdon</SectionTitle>
//           <LinksList>
//             <li><a href="#">About us</a></li>
//             <li><a href="#">Leadership</a></li>
//             <li><a href="#">Subsidiaries</a></li>
//             <li><a href="#">Contact us</a></li>
//           </LinksList>
//         </Section>

//         {/* Third Column: Info Links */}
//         <Section>
//           <SectionTitle>Info</SectionTitle>
//           <LinksList>
//             <li><a href="#">Privacy policy</a></li>
//             <li><a href="#">ISO policy</a></li>
//             <li><a href="#">Blog</a></li>
//             <li><a href="#">Our hubs</a></li>
//             <li><a href="#">HODs</a></li>
//           </LinksList>
//         </Section>

//         {/* Fourth Column: Certifications and Socials */}
//         <CertificationsSection>
//           <CertTitle>
//             ELEXDON IS ISO 20000, 27001 & 22301 CERTIFIED
//           </CertTitle>
//           <CertificationBadges>
//             {/* The image shows three identical certification badges. Using a placeholder here. */}
//             <CertBadge src={certBadge} alt="ISO Certified Badge" />
//             <CertBadge src={certBadge} alt="ISO Certified Badge" />
//             <CertBadge src={certBadge} alt="ISO Certified Badge" />
//           </CertificationBadges>
//           <SocialIcons>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//           </SocialIcons>
//         </CertificationsSection>
//       </FooterGrid>
//     </FooterWrapper>
//   );
// };

// export default FooterComponent;