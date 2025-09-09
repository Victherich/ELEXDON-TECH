
// import React from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import bg2 from '../Images2/bg2.jpg'

// // Import React Icons for each technology
// import {
//   FaLaptopCode,      // Web Design & Development
//   FaChartLine,       // Digital Marketing
//   FaMapMarkedAlt,    // Enterprise GIS Application Development
//   FaGlobe,           // Domain Name Hosting & Registration
//   FaGraduationCap,   // Programming Language & Coding Training
//   FaUsers,           // One-on-One & Corporate Training
//   FaLightbulb,       // Branding and Creative
//   FaTasks,           // Project Management
//   FaMobileAlt,       // Mobile App Development
//   FaTools,           // Web Maintenance Services
//   FaShareAlt,        // Social Media Management
//   FaPaintBrush       // Graphics Design
// } from 'react-icons/fa';

// // --- Services Data ---
// const servicesData = [
//   {
//     id: 1,
//     title: "WEB DESIGN & DEVELOPMENT",
//     description: "We help individuals and businesses unleash their full potentials through our modern, responsive, and functional designs that can stand in parity with the best websites in their respective businesses.",
//     icon: <FaLaptopCode />
//   },
//   {
//     id: 2,
//     title: "DIGITAL MARKETING",
//     description: "With our team of Google Adword Certified Professionals, we help businesses find, attract, and convert their target audience through an effective and time-tested digital marketing methodology.",
//     icon: <FaChartLine />
//   },
//   {
//     id: 3,
//     title: "ENTERPRISE GIS APPLICATION DEVELOPMENT (E-GIS)",
//     description: "We integrate Geospatial Data with business data to provide additional insight needed to make better business decisions on customer strategy, new market opportunities, and investment areas.",
//     icon: <FaMapMarkedAlt />
//   },
//   {
//     id: 4,
//     title: "DOMAIN NAME HOSTING & REGISTRATION",
//     description: "Do you want to give your idea or business an online presence? You need to get a domain name that will be accessible by everyone to see. But that's not all; you need to host your domain name. Don't wait, contact us for your domain name registration and hosting at a cheaper rate.",
//     icon: <FaGlobe />
//   },
//   {
//     id: 5,
//     title: "PROGRAMMING LANGUAGE & CODING TRAINING",
//     description: "If you’re just getting started or looking to master a specific language for a current project, we have a programming training course to help you achieve your professional goals and meet business needs. We teach Java, Javascript, PHP, Python, C#, C++, SQL.",
//     icon: <FaGraduationCap />
//   },
//   {
//     id: 6,
//     title: "ONE-ON-ONE & CORPORATE TRAINING",
//     description: "ELEXDON Technologies provides classroom-based and corporate training courses in Web Design/Development, Blogging, and Digital Marketing.",
//     icon: <FaUsers />
//   },
//   {
//     id: 7,
//     title: "BRANDING AND CREATIVE",
//     description: "We help both new and existing businesses stand out creatively and communicate effectively through inspiring branding, publishing, and creative services.",
//     icon: <FaLightbulb />
//   },
//   {
//     id: 8,
//     title: "PROJECT MANAGEMENT",
//     description: "We believe in the in-depth practices of advanced project management as a basic principle of business success. We practice methodologies under PMI Knowledge areas, PRINCE2, Six Sigma, and use project management software in achieving our project deliverables.",
//     icon: <FaTasks />
//   },
//   {
//     id: 9,
//     title: "MOBILE APP DEVELOPMENT",
//     description: "We offer full-scale software solutions for mobile devices that have already contributed to the success of many businesses. We have vast expertise in app development for iOS, Android, Windows, mobile backend, integration of various services, and post-launch support.",
//     icon: <FaMobileAlt />
//   },
//   {
//     id: 10,
//     title: "WEB MAINTENANCE SERVICES",
//     description: "We help businesses free up their resources and focus on what is truly vital to them by managing and growing their entire presence online.",
//     icon: <FaTools />
//   },
//   {
//     id: 11,
//     title: "SOCIAL MEDIA MANAGEMENT",
//     description: "At ELEXDON, we take care of our clients' social media activities just for a token. Whatever your business may be—real estate, consumer electronics, financial services, hospitality, or nonprofits—our social media management services position your business for success.",
//     icon: <FaShareAlt />
//   },
//   {
//     id: 12,
//     title: "GRAPHICS DESIGN",
//     description: "At ELEXDON, our creativity is market-driven and totally consumer insight, producing quality designs that work. We work closely with our clients to make their dream a reality by producing quality works that makes them happy.",
//     icon: <FaPaintBrush />
//   }
// ];

// // --- Keyframe Animations ---

// // General fade-in for section elements
// const fadeInUp = keyframes`
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // Hero text specific fade-in
// const heroTextIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // Icon pop-in animation
// const iconPop = keyframes`
//   0% { transform: scale(0.5); opacity: 0; }
//   70% { transform: scale(1.1); opacity: 1; }
//   100% { transform: scale(1); }
// `;

// // Card glow on hover
// const cardGlow = keyframes`
//   0%, 100% { box-shadow: 0 10px 30px rgba(0, 122, 255, 0.1), 0 0 0px rgba(0, 122, 255, 0); }
//   50% { box-shadow: 0 15px 40px rgba(0, 122, 255, 0.2), 0 0 15px rgba(0, 122, 255, 0.4); }
// `;

// // --- Styled Components ---

// // --- Hero Section Styles ---
// const HeroSection = styled.section`
// //   background: linear-gradient(135deg, #007AFF 0%, #00C9FF 100%); /* Vibrant blue gradient */
//   background-image:url(${bg2});
//   background-size:cover;
//   color: white;
//   padding: 100px 20px;
//   text-align: center;
//   position: relative;
//   overflow: hidden;
//   min-height: 50vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-bottom-left-radius: 50px; /* Subtle curve at bottom */
//   border-bottom-right-radius: 50px;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

//   &::before { /* Subtle background pattern/texture */
//     content: '';
//     position: absolute;
//     inset: 0;
//     background:rgba(0,0,0,0.5);
//     // background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNzUiIG51bU9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJub1N0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAgMCAwIC0wLjkgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Z3M+') repeat;
//     // opacity: 0.1;
//     z-index: 0;
//   }
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 1;
//   max-width: 900px;
//   margin: 0 auto;
// `;

// const HeroTitle = styled.h1`
//   font-size: clamp(3rem, 6vw, 4rem);
//   font-weight: 900;
//   margin-bottom: 20px;
//   text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
//   opacity: 0;
//   animation: ${heroTextIn} 1s ease-out forwards;
//   animation-delay: 0.3s;
// `;

// const HeroSubtitle = styled.p`
//   font-size: clamp(1rem, 2.1vw, 1rem);
//   line-height: 1.6;
//   max-width: 700px;
//   margin: 0 auto 30px auto;
//   text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
//   opacity: 0;
//   animation: ${heroTextIn} 1s ease-out forwards;
//   animation-delay: 0.6s;
// `;

// const HeroButton = styled.a`
//   display: inline-block;
//   background: white;
//   color: #007AFF;
//   padding: 15px 30px;
//   border-radius: 50px;
//   text-decoration: none;
//   font-weight: bold;
//   font-size: 1.1rem;
//   transition: all 0.3s ease;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//   opacity: 0;
//   animation: ${heroTextIn} 1s ease-out forwards;
//   animation-delay: 0.9s;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
//     background: #e0f0ff;
//   }
// `;

// // --- Services Grid Section Styles ---
// const ServicesSectionWrapper = styled.section`
// //   background: linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%); /* Light, soft gradient */
// background:rgba(255,255,255,0.9);
//   color: #2C3E50; /* Dark charcoal text */
//   padding: 20px 20px;
//   text-align: center;
//   overflow: hidden;
//   position: relative;
// `;

// // const SectionTitle = styled.h2`
// //   font-size: clamp(2rem, 3.5vw, 4rem);
// //   font-weight: 900;
// //   color: #007AFF; /* Vibrant accent blue */
  
// //   color:purple;
// //   margin-bottom: 20px;
// //   text-shadow: 0 0 10px rgba(0, 122, 255, 0.2);
// //   position: relative;
// //   z-index: 1;
// //   opacity: 0;
// //   animation: ${fadeInUp} 1s ease-out forwards;
// //   animation-delay: 0.2s;
// // `;


// const SectionTitle = styled.h2`
//   font-size: clamp(2rem, 3.5vw, 4rem);
//   font-weight: 900;
//   margin-bottom: 20px;
//   text-shadow: 0 0 10px rgba(0, 122, 255, 0.2);
//   position: relative;
//   z-index: 1;
//   opacity: 0;
//   animation: ${fadeInUp} 1s ease-out forwards;
//   animation-delay: 0.2s;

//   /* Gradient text styles */
//   background: linear-gradient(to left, #f64f59, #c471ed, #12c2e9);
//   background-size: 400% 400%;
//   animation: goldGlow 15s ease infinite, ${fadeInUp} 1s ease-out forwards;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   color: transparent;
// `;

// // Define the goldGlow animation
// const goldGlow = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;


// const SectionDescription = styled.p`
//   font-size: clamp(1rem, 2.5vw, 1rem);
//   color: #5D6D7E; /* Medium grey-blue */
//   max-width: 800px;
//   margin: 0 auto 0px auto;
//   line-height: 1.6;
//   position: relative;
//   z-index: 1;
//   opacity: 0;
//   animation: ${fadeInUp} 1s ease-out forwards;
//   animation-delay: 0.4s;
// `;

// const ServicesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Larger min-width for cards */
//   gap: 40px; /* More space between cards */
//   max-width: 1300px; /* Wider grid */
//   margin: 0 auto;
//   padding: 10px;
//   position: relative;
//   z-index: 1;
// `;

// const ServiceCard = styled.div`
// //   background: #FFFFFF; /* White card background */
//   border-radius: 15px;
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// //   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08); /* Soft initial shadow */
//   transition: all 0.3s ease-in-out;
//   border: 1px solid rgba(0, 122, 255, 0.05); /* Subtle border */
// //   opacity: 0; /* Hidden initially for entrance animation */
//   animation: ${fadeInUp} 0.8s ease-out forwards;
//   animation-delay: ${props => props.delay || '0s'}; /* Staggered delay for cards */
//   min-height: 280px; /* Ensures consistent card height */
//   text-align: center;

//   &:hover {
//     transform: translateY(-10px) scale(1.02);
//     // box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
//     // animation: ${cardGlow} 2s infinite alternate; /* Pulsating glow on hover */
//     // border-color: rgba(0, 122, 255, 0.2);
//   }
// `;

// const ServiceIconContainer = styled.div`
//   font-size: 4.5rem; /* Large icon size */
// //   color: #007AFF; /* Vibrant blue icon color */
// //   color:purple;
//   color:#c471ed;
//   margin-bottom: 0px;
// //   opacity: 0; /* Hidden initially for pop-in */
//   transform: scale(0.5);
//   animation: ${iconPop} 0.6s ease-out forwards; /* Icon pops in */
//   animation-delay: ${props => props.delay || '0s'}; /* Staggered pop-in for icons */
//   filter: drop-shadow(0 0 10px rgba(0, 122, 255, 0.4)); /* Initial glow */
//   transition: filter 0.3s ease-in-out;

  

//   ${ServiceCard}:hover & {
//     filter: drop-shadow(0 0 20px rgba(0, 122, 255, 0.8)); 
//   }
// `;

// const ServiceTitle = styled.h3`
//   font-size: 1.6rem;
//   font-weight: 700;
//   color: #2C3E50; /* Dark text for title */
//   margin-bottom: 15px;
//   transition: color 0.3s ease-in-out;

//   ${ServiceCard}:hover & {
//     // color: #007AFF; /* Accent color on hover */
//   }
// `;

// const ServiceDescription = styled.p`
//   font-size: 1rem;
//   color: #5D6D7E; /* Medium grey-blue for description */
//   line-height: 1.6;
// `;

// // --- ServiceItem Component (for individual service cards) ---
// const ServiceItem = ({ service, index }) => {
//   // Calculate staggered delays for each part of the card
//   const cardDelay = `${0.1 * index + 0.6}s`; // Cards appear after hero section
//   const iconDelay = `${0.1 * index + 0.9}s`; // Icon pops in slightly after card
//   // Add more delays for other elements inside if needed

//   return (
//     <ServiceCard delay={cardDelay}>
//       <ServiceIconContainer>
//         {service.icon}
//       </ServiceIconContainer>
//       <ServiceTitle>{service.title}</ServiceTitle>
//       <ServiceDescription>{service.description}</ServiceDescription>
//     </ServiceCard>
//   );
// };

// // --- Main ServicesPage Component ---
// const ServicesPage = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroContent>
//           <HeroTitle>Our Services</HeroTitle>
//           <HeroSubtitle>
//             We provide world-class training and web design jobs. Our designs are unique, mobile-friendly, and affordable, offering exceptional value for your money. We employ the best technologies in our designs to give you unimaginable results.
//           </HeroSubtitle>
//           <HeroButton href="#services-grid">Explore Services</HeroButton>
//         </HeroContent>
//       </HeroSection>

//       {/* Services Grid Section */}
//       <ServicesSectionWrapper id="services-grid">
//         <SectionTitle>What We Offer</SectionTitle>
//         <SectionDescription>
//           Elexdon Digital Technologies is dedicated to empowering individuals and businesses with cutting-edge solutions and knowledge.
//         </SectionDescription>

//         <ServicesGrid>
//           {servicesData.map((service, index) => (
//             <ServiceItem key={service.id} service={service} index={index} />
//           ))}
//         </ServicesGrid>
//       </ServicesSectionWrapper>
//     </>
//   );
// };

// export default ServicesPage;










// import React from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import bg2 from '../Images2/bg2.jpg';
// import { Fade, Slide } from 'react-awesome-reveal';

// // Import React Icons for each technology
// import {
//   FaLaptopCode,
//   FaChartLine,
//   FaMapMarkedAlt,
//   FaGlobe,
//   FaGraduationCap,
//   FaUsers,
//   FaLightbulb,
//   FaTasks,
//   FaMobileAlt,
//   FaTools,
//   FaShareAlt,
//   FaPaintBrush
// } from 'react-icons/fa';

// // --- Services Data ---
// const servicesData = [
//   {
//     id: 1,
//     title: "WEB DESIGN & DEVELOPMENT",
//     description: "We help individuals and businesses unleash their full potentials through our modern, responsive, and functional designs that can stand in parity with the best websites in their respective businesses.",
//     icon: <FaLaptopCode />
//   },
//   {
//     id: 2,
//     title: "DIGITAL MARKETING",
//     description: "With our team of Google Adword Certified Professionals, we help businesses find, attract, and convert their target audience through an effective and time-tested digital marketing methodology.",
//     icon: <FaChartLine />
//   },
//   {
//     id: 3,
//     title: "ENTERPRISE GIS APPLICATION DEVELOPMENT (E-GIS)",
//     description: "We integrate Geospatial Data with business data to provide additional insight needed to make better business decisions on customer strategy, new market opportunities, and investment areas.",
//     icon: <FaMapMarkedAlt />
//   },
//   {
//     id: 4,
//     title: "DOMAIN NAME HOSTING & REGISTRATION",
//     description: "Do you want to give your idea or business an online presence? You need to get a domain name that will be accessible by everyone to see. But that's not all; you need to host your domain name. Don't wait, contact us for your domain name registration and hosting at a cheaper rate.",
//     icon: <FaGlobe />
//   },
//   {
//     id: 5,
//     title: "PROGRAMMING LANGUAGE & CODING TRAINING",
//     description: "If you’re just getting started or looking to master a specific language for a current project, we have a programming training course to help you achieve your professional goals and meet business needs. We teach Java, Javascript, PHP, Python, C#, C++, SQL.",
//     icon: <FaGraduationCap />
//   },
//   {
//     id: 6,
//     title: "ONE-ON-ONE & CORPORATE TRAINING",
//     description: "ELEXDON Technologies provides classroom-based and corporate training courses in Web Design/Development, Blogging, and Digital Marketing.",
//     icon: <FaUsers />
//   },
//   {
//     id: 7,
//     title: "BRANDING AND CREATIVE",
//     description: "We help both new and existing businesses stand out creatively and communicate effectively through inspiring branding, publishing, and creative services.",
//     icon: <FaLightbulb />
//   },
//   {
//     id: 8,
//     title: "PROJECT MANAGEMENT",
//     description: "We believe in the in-depth practices of advanced project management as a basic principle of business success. We practice methodologies under PMI Knowledge areas, PRINCE2, Six Sigma, and use project management software in achieving our project deliverables.",
//     icon: <FaTasks />
//   },
//   {
//     id: 9,
//     title: "MOBILE APP DEVELOPMENT",
//     description: "We offer full-scale software solutions for mobile devices that have already contributed to the success of many businesses. We have vast expertise in app development for iOS, Android, Windows, mobile backend, integration of various services, and post-launch support.",
//     icon: <FaMobileAlt />
//   },
//   {
//     id: 10,
//     title: "WEB MAINTENANCE SERVICES",
//     description: "We help businesses free up their resources and focus on what is truly vital to them by managing and growing their entire presence online.",
//     icon: <FaTools />
//   },
//   {
//     id: 11,
//     title: "SOCIAL MEDIA MANAGEMENT",
//     description: "At ELEXDON, we take care of our clients' social media activities just for a token. Whatever your business may be—real estate, consumer electronics, financial services, hospitality, or nonprofits—our social media management services position your business for success.",
//     icon: <FaShareAlt />
//   },
//   {
//     id: 12,
//     title: "GRAPHICS DESIGN",
//     description: "At ELEXDON, our creativity is market-driven and totally consumer insight, producing quality designs that work. We work closely with our clients to make their dream a reality by producing quality works that makes them happy.",
//     icon: <FaPaintBrush />
//   }
// ];

// // --- Styled Components ---

// // --- Hero Section Styles ---
// const HeroSection = styled.section`
//   background-image: url(${bg2});
//   background-size: cover;
//   color: white;
//   padding: 100px 20px;
//   text-align: center;
//   position: relative;
//   overflow: hidden;
//   min-height: 50vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-bottom-left-radius: 50px;
//   border-bottom-right-radius: 50px;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.5);
//     z-index: 0;
//   }
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 1;
//   max-width: 900px;
//   margin: 0 auto;
// `;

// const HeroTitle = styled.h1`
//   font-size: clamp(3rem, 6vw, 4rem);
//   font-weight: 900;
//   margin-bottom: 20px;
//   text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
// `;

// const HeroSubtitle = styled.p`
//   font-size: clamp(1rem, 2.1vw, 1rem);
//   line-height: 1.6;
//   max-width: 700px;
//   margin: 0 auto 30px auto;
//   text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
// `;

// const HeroButton = styled.a`
//   display: inline-block;
//   background: orange;
//   color: #fff;
//   padding: 15px 30px;
//   border-radius: 50px;
//   text-decoration: none;
//   font-weight: bold;
//   font-size: 1.1rem;
//   transition: all 0.3s ease;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
//     background: #ffc837;
//   }
// `;

// // --- Services Grid Section Styles ---
// const ServicesSectionWrapper = styled.section`
//   // background: rgba(255, 255, 255, 0.9);
//   background:rgba(107, 132, 162, 0.2);
//   color: #2C3E50;
//   padding: 20px 20px;
//   text-align: center;
//   overflow: hidden;
//   position: relative;
// `;

// const SectionTitle = styled.h2`
//   font-size: clamp(2rem, 3.5vw, 4rem);
//   font-weight: 900;
//   color: #6B84A2;
//   margin-bottom: 20px;
//   text-shadow: 0 0 10px rgba(107, 132, 162, 0.2);
//   position: relative;
//   z-index: 1;
// `;

// const SectionDescription = styled.p`
//   font-size: clamp(1rem, 2.5vw, 1rem);
//   color: #5D6D7E;
//   max-width: 800px;
//   margin: 0 auto 40px auto;
//   line-height: 1.6;
//   position: relative;
//   z-index: 1;

//   @media (max-width: 768px) {
//     margin-bottom: 20px;
//   }
// `;

// const ServicesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 40px;
//   max-width: 1300px;
//   margin: 0 auto;
//   padding: 10px;
//   position: relative;
//   z-index: 1;
// `;

// const ServiceCard = styled.div`
//   background: #FFFFFF;
//   border-radius: 15px;
//   padding: 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
//   transition: all 0.3s ease-in-out;
//   border: 1px solid rgba(107, 132, 162, 0.1);
//   min-height: 280px;
//   text-align: center;

//   &:hover {
//     transform: translateY(-10px) scale(1.02);
//     box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
//     border-color: rgba(107, 132, 162, 0.2);
//   }
// `;

// const ServiceIconContainer = styled.div`
//   font-size: 4.5rem;
//   color: #6B84A2;
//   margin-bottom: 20px;
//   filter: drop-shadow(0 0 10px rgba(107, 132, 162, 0.4));
//   transition: all 0.3s ease-in-out;

//   ${ServiceCard}:hover & {
//     color: orange;
//     filter: drop-shadow(0 0 20px rgba(255, 165, 0, 0.8));
//   }
// `;

// const ServiceTitle = styled.h3`
//   font-size: 1.6rem;
//   font-weight: 700;
//   color: #2C3E50;
//   margin-bottom: 15px;
//   transition: color 0.3s ease-in-out;

//   ${ServiceCard}:hover & {
//     color: #6B84A2;
//   }
// `;

// const ServiceDescription = styled.p`
//   font-size: 1rem;
//   color: #5D6D7E;
//   line-height: 1.6;
// `;

// // --- ServiceItem Component (for individual service cards) ---
// const ServiceItem = ({ service, index }) => (
//   <Fade direction="up" triggerOnce={false} delay={index * 50}>
//     <ServiceCard>
//       <ServiceIconContainer>
//         {service.icon}
//       </ServiceIconContainer>
//       <ServiceTitle>{service.title}</ServiceTitle>
//       <ServiceDescription>{service.description}</ServiceDescription>
//     </ServiceCard>
//   </Fade>
// );

// // --- Main ServicesPage Component ---
// const ServicesPage = () => {
//   return (
//     <>
//       <HeroSection>
//         <HeroContent>
//           <Slide direction="down" triggerOnce={false}>
//             <HeroTitle>Our Services</HeroTitle>
//           </Slide>
//           <Slide direction="down" triggerOnce={false} delay={200}>
//             <HeroSubtitle>
//               We provide world-class training and web design jobs. Our designs are unique, mobile-friendly, and affordable, offering exceptional value for your money. We employ the best technologies in our designs to give you unimaginable results.
//             </HeroSubtitle>
//           </Slide>
//           <Fade direction="up" triggerOnce={false} delay={400}>
//             <HeroButton href="#services-grid">Explore Services</HeroButton>
//           </Fade>
//         </HeroContent>
//       </HeroSection>

//       <ServicesSectionWrapper id="services-grid">
//         <Slide direction="down" triggerOnce={false}>
//           <SectionTitle>What We Offer</SectionTitle>
//         </Slide>
//         <Slide direction="down" triggerOnce={false} delay={200}>
//           <SectionDescription>
//             Elexdon Digital Technologies is dedicated to empowering individuals and businesses with cutting-edge solutions and knowledge.
//           </SectionDescription>
//         </Slide>

//         <ServicesGrid>
//           {servicesData.map((service, index) => (
//             <ServiceItem key={service.id} service={service} index={index} />
//           ))}
//         </ServicesGrid>
//       </ServicesSectionWrapper>
//     </>
//   );
// };

// export default ServicesPage;











import React from 'react';
import styled from 'styled-components';
import bg2 from '../Images2/bg2.jpg';
import { Fade, Slide } from 'react-awesome-reveal';

// Import React Icons for each technology
import {
  FaLaptopCode,
  FaChartLine,
  FaMapMarkedAlt,
  FaGlobe,
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaTasks,
  FaMobileAlt,
  FaTools,
  FaShareAlt,
  FaPaintBrush, FaUsersCog,FaCogs, FaShoppingCart, FaDraftingCompass
} from 'react-icons/fa';
import ContactUsPromo from './ContactUsPromo';
import ServicePageHero from './ServicePageHero';

// --- Services Data ---
const servicesData = [
  {
    id: 1,
    title: "WEB DESIGN & DEVELOPMENT",
    description: "We help individuals and businesses unleash their full potentials through our modern, responsive, and functional designs that can stand in parity with the best websites in their respective businesses.",
    icon: <FaLaptopCode />
  },

    {
    id: 2,
    title: "DIGITAL MARKETING",
    description: "With our team of Google Adword Certified Professionals, we help businesses find, attract, and convert their target audience through an effective and time-tested digital marketing methodology.",
    icon: <FaChartLine />
  },

   {
    id: 13,
    title: "SOFTWARE APPLICATION DEVELOPMENT",
    description:
      "We build scalable, secure, and efficient software applications tailored to meet the unique needs of businesses across industries.",
    icon: <FaCogs />,
  }, 
  {
    id: 14,
    title: "IT OUTSOURCING AND CONSULTING",
    description:
      "Our IT outsourcing solutions help organizations reduce costs, improve efficiency, and gain access to specialized expertise while focusing on their core business.",
    icon: <FaUsersCog />,
  },
  {
    id: 15,
    title: "E-COMMERCE DEVELOPMENT",
    description:
      "From online stores to custom e-commerce platforms, we deliver powerful, secure, and user-friendly solutions that drive sales and customer satisfaction.",
    icon: <FaShoppingCart />,
  },
  {
    id: 16,
    title: "PRODUCT DESIGN",
    description:
      "We create innovative, user-focused product designs that combine functionality with aesthetics to enhance user experiences and business growth.",
    icon: <FaDraftingCompass />,
  },

  {
    id: 3,
    title: "ENTERPRISE GIS APPLICATION DEVELOPMENT (E-GIS)",
    description: "We integrate Geospatial Data with business data to provide additional insight needed to make better business decisions on customer strategy, new market opportunities, and investment areas.",
    icon: <FaMapMarkedAlt />
  },
  {
    id: 4,
    title: "DOMAIN NAME HOSTING & REGISTRATION",
    description: "Do you want to give your idea or business an online presence? You need to get a domain name that will be accessible by everyone to see. But that's not all; you need to host your domain name. Don't wait, contact us for your domain name registration and hosting at a cheaper rate.",
    icon: <FaGlobe />
  },
  {
    id: 5,
    title: "PROGRAMMING LANGUAGE & CODING TRAINING",
    description: "If you’re just getting started or looking to master a specific language for a current project, we have a programming training course to help you achieve your professional goals and meet business needs. We teach Java, Javascript, PHP, Python, C#, C++, SQL.",
    icon: <FaGraduationCap />
  },
  {
    id: 6,
    title: "ONE-ON-ONE & CORPORATE TRAINING",
    description: "ELEXDON Technologies provides classroom-based and corporate training courses in Web Design/Development, Blogging, and Digital Marketing.",
    icon: <FaUsers />
  },
  {
    id: 7,
    title: "BRANDING AND CREATIVE",
    description: "We help both new and existing businesses stand out creatively and communicate effectively through inspiring branding, publishing, and creative services.",
    icon: <FaLightbulb />
  },
  {
    id: 8,
    title: "PROJECT MANAGEMENT",
    description: "We believe in the in-depth practices of advanced project management as a basic principle of business success. We practice methodologies under PMI Knowledge areas, PRINCE2, Six Sigma, and use project management software in achieving our project deliverables.",
    icon: <FaTasks />
  },
  {
    id: 9,
    title: "MOBILE APP DEVELOPMENT",
    description: "We offer full-scale software solutions for mobile devices that have already contributed to the success of many businesses. We have vast expertise in app development for iOS, Android, Windows, mobile backend, integration of various services, and post-launch support.",
    icon: <FaMobileAlt />
  },
  {
    id: 10,
    title: "WEB MAINTENANCE SERVICES",
    description: "We help businesses free up their resources and focus on what is truly vital to them by managing and growing their entire presence online.",
    icon: <FaTools />
  },
  {
    id: 11,
    title: "SOCIAL MEDIA MANAGEMENT",
    description: "At ELEXDON, we take care of our clients' social media activities just for a token. Whatever your business may be—real estate, consumer electronics, financial services, hospitality, or nonprofits—our social media management services position your business for success.",
    icon: <FaShareAlt />
  },
  {
    id: 12,
    title: "GRAPHICS DESIGN",
    description: "At ELEXDON, our creativity is market-driven and totally consumer insight, producing quality designs that work. We work closely with our clients to make their dream a reality by producing quality works that makes them happy.",
    icon: <FaPaintBrush />
  }
];

// --- Styled Components ---
const HeroSection = styled.section`
  background-image: url(${bg2});
  background-size: cover;
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 6vw, 4rem);
  font-weight: 900;
  margin-bottom: 20px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.1vw, 1rem);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 30px auto;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
`;

const HeroButton = styled.a`
  display: inline-block;
  background: orange;
  color: #fff;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    background: #ffc837;
  }
`;

// --- Services Grid Section Styles ---
const ServicesSectionWrapper = styled.section`
  background: rgba(107, 132, 162, 0.2);
  color: #2C3E50;
  padding: 20px 20px;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3.5vw, 4rem);
  font-weight: 900;
  // color: #6B84A2;
  color:#2f5f9bff;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(107, 132, 162, 0.2);
  position: relative;
  z-index: 1;
`;

const SectionDescription = styled.p`
  font-size: clamp(1rem, 2.5vw, 1rem);
  color: #5D6D7E;
  max-width: 800px;
  margin: 0 auto 40px auto;
  line-height: 1.6;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px;
  position: relative;
  z-index: 1;

  @media(max-width:428px){
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const ServiceCard = styled.div`
  background: #FFFFFF;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(107, 132, 162, 0.1);
  min-height: 280px;
  text-align: center;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(107, 132, 162, 0.2);
  }
`;

const ServiceIconContainer = styled.div`
  font-size: 3rem;
  // color: #6B84A2;
  color:#2f5f9bff;
  // margin-bottom: 20px;
  filter: drop-shadow(0 0 10px rgba(107, 132, 162, 0.4));
  transition: all 0.3s ease-in-out;

  ${ServiceCard}:hover & {
    color: orange;
    filter: drop-shadow(0 0 20px rgba(255, 165, 0, 0.8));
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  // color: #2C3E50;
  color:#2f5f9bff;
  margin-bottom: 1px;
  transition: color 0.3s ease-in-out;

  ${ServiceCard}:hover & {
    color: #6B84A2;
  }
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #5D6D7E;
  line-height: 1.6;
`;

// --- ServiceItem Component (for individual service cards) ---
const ServiceItem = ({ service, index }) => (
  <Fade direction="left" triggerOnce={false} delay={index * 50} threshold={0.1}>
    <ServiceCard>
      <ServiceIconContainer>
        {service.icon}
      </ServiceIconContainer>
      <ServiceTitle>{service.title}</ServiceTitle>
      <ServiceDescription>{service.description}</ServiceDescription>
    </ServiceCard>
  </Fade>
);

// --- Main ServicesPage Component ---
const ServicesPage = () => {
  return (
    <>
      {/* <HeroSection>
        <HeroContent>
          <Slide direction="down" triggerOnce={false} threshold={0.1}>
            <HeroTitle>Our Services</HeroTitle>
          </Slide>
          <Slide direction="down" triggerOnce={false} delay={200} threshold={0.1}>
            <HeroSubtitle>
              We provide world-class training and web design jobs. Our designs are unique, mobile-friendly, and affordable, offering exceptional value for your money. We employ the best technologies in our designs to give you unimaginable results.
            </HeroSubtitle>
          </Slide>
          <Fade direction="up" triggerOnce={false} delay={400} threshold={0.1}>
            <HeroButton href="#services-grid">Explore Services</HeroButton>
          </Fade>
        </HeroContent>
      </HeroSection> */}

      <ServicePageHero/>



      <ServicesSectionWrapper id="services-grid">
        <Slide direction="down" triggerOnce={false} threshold={0.1}>
          <SectionTitle>What We Offer</SectionTitle>
        </Slide>
        <Slide direction="down" triggerOnce={false} delay={200} threshold={0.1}>
          <SectionDescription>
            Elexdon Digital Technologies is dedicated to empowering individuals and businesses with cutting-edge solutions and knowledge.
          </SectionDescription>
        </Slide>

        <ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </ServicesGrid>
        <ContactUsPromo/>
      </ServicesSectionWrapper>
    </>
  );
};

export default ServicesPage;