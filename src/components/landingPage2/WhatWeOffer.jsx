
// import React from 'react';
// import styled from 'styled-components';
// import { FaHeartbeat, FaBolt, FaGlobe, FaGem, FaCloud, FaCreditCard, FaTasks, FaMobileAlt, FaLaptop, FaUsers, FaPaintBrush,FaServer, FaChalkboardTeacher,FaTools,FaPalette,FaShareAlt,FaLaptopCode,FaBullhorn,FaGlobeAmericas } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const MainContainer = styled.div`
//   background-color:rgba(0,0,0,0.1);
//   // color: #fff;
//   padding: 80px 50px;
//   font-family: Arial, sans-serif;
//   display:flex;
//   justify-content:center;
//   // align-items:center;
//   // gap:20px;

//   @media (max-width: 1024px) {
//     padding: 60px 40px;
//   }

//   @media (max-width: 768px) {
//     padding: 40px 20px;
//   }
// `;

// const HeaderSection = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 60px;
//   width:40%;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     margin-bottom: 40px;
//   }
// `;

// const HeaderText = styled.div`
//   max-width: 400px;
// `;

// const WhatWeOffer = styled.p`
//   // color: #b8de6f;
//   font-size: 16px;
//   margin-bottom: 8px;
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   line-height: 1.2;
//   margin-bottom: 12px;
//   color:#5A718C;

//   @media (max-width: 1024px) {
//     font-size: 36px;
//   }

//   @media (max-width: 768px) {
//     font-size: 28px;
//   }
// `;

// const Underline = styled.div`
//   height: 4px;
//   width: 120px;
//   background-color: #6B84A2;
//   margin-bottom: 40px;
// `;

// const SeeProductsButton = styled.a`
//   background-color: #6B84A2;
//   color: white;
//   padding: 12px 24px;
//   border-radius: 50px;
//   text-decoration: none;
//   font-weight: bold;
//   transition: background-color 0.3s ease;
//   cursor:pointer;

//   &:hover {
//     background-color: #12c2e9;
//   }
// `;

// const SolutionsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 40px;
//   width:60%;

//   @media (max-width: 1024px) {
//     grid-template-columns: 1fr;
//     gap: 30px;
//   }
// `;

// const SolutionCard = styled.div`
//   display: flex;
//   align-items: flex-start;
  
// `;

// const IconContainer = styled.div`
//   color: #5A718C;
//   font-size: 36px;
//   margin-right: 20px;
//   line-height: 1;
// `;

// const CardContent = styled.div`
//   flex: 1;
// `;

// const CardTitle = styled.h3`
//   font-size: 1rem;
//   margin-top: 0;
//   margin-bottom: 8px;
//   // color:#5A718C;
//   color:#444;

//   @media (max-width: 768px) {
//     font-size: 20px;
//   }
// `;

// const CardDescription = styled.p`
//   font-size: 16px;
//   line-height: 1.6;
//   // color: #c0c0c0;
// `;

// // const solutions = [
// //   {
// //     icon: <FaHeartbeat />,
// //     title: 'Health Solutions',
// //     description: 'We create and offer human centered designs to create scalable and innovative health technology solutions based on research and best practices.',
// //   },
// //   {
// //     icon: <FaBolt />,
// //     title: 'Energy Solutions',
// //     description: 'We are changing the narrative on how power, energy and supply chain solutions are implemented by providing solutions that meet global quality.',
// //   },
// //   {
// //     icon: <FaGlobe />,
// //     title: 'Portal Solutions',
// //     description: 'Whether a project involves the creation of a city portal, a niche portal for an industry or special interest portal. We create portals that allows you to meet your business needs.',
// //   },
// //   {
// //     icon: <FaGem />,
// //     title: 'Customized Solutions',
// //     description: 'With our customized software services we analyze, design, develop, implement and maintain custom made solution for your business including related activities.',
// //   },
// //   {
// //     icon: <FaCloud />,
// //     title: 'OEM & Cloud Solutions',
// //     description: 'We offer data integration, reporting, and predictive analytics solutions to help you gain a competitive edge in your industry.',
// //   },
// //   {
// //     icon: <FaCreditCard />,
// //     title: 'Payment Solutions',
// //     description: 'Vatebra offers a full range of efficient in-house and outsourced payment solutions, including electronic payment systems and integration-based solutions.',
// //   },
// // ];


// const solutions = [
//   {
//     icon: <FaLaptopCode />,
//     title: 'WEB DESIGN & DEVELOPMENT',
//     description: 'We help individuals and businesses unleash their full potentials through our modern, responsive, and functional designs that can stand in parity with the best websites in their respective businesses.',
//   },
//   {
//     icon: <FaBullhorn />,
//     title: 'DIGITAL MARKETING',
//     description: 'With our team of Google Adword Certified Professionals, we help businesses find, attract, and convert their target audience through an effective and time-tested digital marketing methodology.',
//   },
//   {
//     icon: <FaGlobeAmericas />,
//     title: 'ENTERPRISE GIS APPLICATION DEVELOPMENT (E-GIS)',
//     description: 'We integrate Geospatial Data with business data to provide additional insight needed to make better business decisions on customer strategy, new market opportunities, and investment areas.',
//   },
//   {
//     icon: <FaServer />,
//     title: 'DOMAIN NAME HOSTING & REGISTRATION',
//     description: 'Do you want to give your idea or business an online presence? You need to get a domain name that will be accessible by everyone to see. But that\'s not all; you need to host your domain name. Don\'t wait, contact us for your domain name registration and hosting at a cheaper rate.',
//   },
//   {
//     icon: <FaChalkboardTeacher />,
//     title: 'PROGRAMMING LANGUAGE & CODING TRAINING',
//     description: 'If you’re just getting started or looking to master a specific language for a current project, we have a programming training course to help you achieve your professional goals and meet business needs. We teach Java, Javascript, PHP, Python, C#, C++, SQL.',
//   },
//   {
//     icon: <FaUsers />,
//     title: 'ONE-ON-ONE & CORPORATE TRAINING',
//     description: 'ELEXDON Technologies provides classroom-based and corporate training courses in Web Design/Development, Blogging, and Digital Marketing.',
//   },
//   {
//     icon: <FaPaintBrush />,
//     title: 'BRANDING AND CREATIVE',
//     description: 'We help both new and existing businesses stand out creatively and communicate effectively through inspiring branding, publishing, and creative services.',
//   },
//   {
//     icon: <FaTasks />,
//     title: 'PROJECT MANAGEMENT',
//     description: 'We believe in the in-depth practices of advanced project management as a basic principle of business success. We practice methodologies under PMI Knowledge areas, PRINCE2, Six Sigma, and use project management software in achieving our project deliverables.',
//   },
//   {
//     icon: <FaMobileAlt />,
//     title: 'MOBILE APP DEVELOPMENT',
//     description: 'We offer full-scale software solutions for mobile devices that have already contributed to the success of many businesses. We have vast expertise in app development for iOS, Android, Windows, mobile backend, integration of various services, and post-launch support.',
//   },
//   {
//     icon: <FaTools />,
//     title: 'WEB MAINTENANCE SERVICES',
//     description: 'We help businesses free up their resources and focus on what is truly vital to them by managing and growing their entire presence online.',
//   },
//   {
//     icon: <FaShareAlt />,
//     title: 'SOCIAL MEDIA MANAGEMENT',
//     description: 'At ELEXDON, we take care of our clients\' social media activities just for a token. Whatever your business may be—real estate, consumer electronics, financial services, hospitality, or nonprofits—our social media management services position your business for success.',
//   },
//   {
//     icon: <FaPalette />,
//     title: 'GRAPHICS DESIGN',
//     description: 'At ELEXDON, our creativity is market-driven and totally consumer insight, producing quality designs that work. We work closely with our clients to make their dream a reality by producing quality works that makes them happy.',
//   },
// ];




// const WhatWeOffer2 = () => {
// const navigate = useNavigate();


//   return (
//     <MainContainer>
//       <HeaderSection>
//         <HeaderText>
//           <WhatWeOffer>What we offer</WhatWeOffer>
//           <Title>Committed to providing unique and exceptional values.</Title>
//           <Underline />
//           <SeeProductsButton onClick={()=>navigate('/services')}>See our products</SeeProductsButton>
//         </HeaderText>
//       </HeaderSection>
//       <SolutionsGrid>
//         {solutions.map((solution, index) => (
//           <SolutionCard key={index}>
//             <IconContainer>
//               {solution.icon}
//             </IconContainer>
//             <CardContent>
//               <CardTitle>{solution.title}</CardTitle>
          
//             </CardContent>
//           </SolutionCard>
//         ))}
//       </SolutionsGrid>
//     </MainContainer>
//   );
// };

// export default WhatWeOffer2;





import React from 'react';
import styled from 'styled-components';
import { FaHeartbeat, FaBolt, FaGlobe, FaGem, FaCloud, FaCreditCard, FaTasks, FaMobileAlt, FaLaptop, FaUsers, FaPaintBrush, FaServer, FaChalkboardTeacher, FaTools, FaPalette, FaShareAlt, FaLaptopCode, FaBullhorn, FaGlobeAmericas } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';

const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 50px 50px;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 60px 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
    text-align: center;
  }
`;

const HeaderText = styled.div`
  max-width: 400px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const WhatWeOffer = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  line-height: 1.2;
  margin-bottom: 12px;
  // color: #5A718C;
  color:#2f5f9bff;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Underline = styled.div`
  height: 4px;
  width: 120px;
  background-color:#2f5f9bff;;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin: 0 auto 30px auto;
  }
`;

const SeeProductsButton = styled.a`
  // background-color: #6B84A2;
  background-color:#2f5f9bff;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background-color: #12c2e9;
  }
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 60%;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 30px;
    width: 100%;
  }
`;

const SolutionCard = styled.div`
  display: flex;
  align-items: flex-start;
`;

const IconContainer = styled.div`
  // color: #5A718C;
  color:#2f5f9bff;
  font-size: 25px;
  margin-right: 20px;
  line-height: 1;
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 8px;
  // color: #444;
  color:#2f5f9bff;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  // color:#2f5f9bff;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const solutions = [
  {
    icon: <FaLaptopCode />,
    title: 'WEB DESIGN & DEVELOPMENT',
    description: 'We help individuals and businesses unleash their full potentials through our modern, responsive, and functional designs that can stand in parity with the best websites in their respective businesses.',
  },
  {
    icon: <FaBullhorn />,
    title: 'DIGITAL MARKETING',
    description: 'With our team of Google Adword Certified Professionals, we help businesses find, attract, and convert their target audience through an effective and time-tested digital marketing methodology.',
  },
  {
    icon: <FaGlobeAmericas />,
    title: 'ENTERPRISE GIS APPLICATION DEVELOPMENT (E-GIS)',
    description: 'We integrate Geospatial Data with business data to provide additional insight needed to make better business decisions on customer strategy, new market opportunities, and investment areas.',
  },
  {
    icon: <FaServer />,
    title: 'DOMAIN NAME HOSTING & REGISTRATION',
    description: 'Do you want to give your idea or business an online presence? You need to get a domain name that will be accessible by everyone to see. But that\'s not all; you need to host your domain name. Don\'t wait, contact us for your domain name registration and hosting at a cheaper rate.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'PROGRAMMING LANGUAGE & CODING TRAINING',
    description: 'If you’re just getting started or looking to master a specific language for a current project, we have a programming training course to help you achieve your professional goals and meet business needs. We teach Java, Javascript, PHP, Python, C#, C++, SQL.',
  },
  {
    icon: <FaUsers />,
    title: 'ONE-ON-ONE & CORPORATE TRAINING',
    description: 'ELEXDON Technologies provides classroom-based and corporate training courses in Web Design/Development, Blogging, and Digital Marketing.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'BRANDING AND CREATIVE',
    description: 'We help both new and existing businesses stand out creatively and communicate effectively through inspiring branding, publishing, and creative services.',
  },
  {
    icon: <FaTasks />,
    title: 'PROJECT MANAGEMENT',
    description: 'We believe in the in-depth practices of advanced project management as a basic principle of business success. We practice methodologies under PMI Knowledge areas, PRINCE2, Six Sigma, and use project management software in achieving our project deliverables.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'MOBILE APP DEVELOPMENT',
    description: 'We offer full-scale software solutions for mobile devices that have already contributed to the success of many businesses. We have vast expertise in app development for iOS, Android, Windows, mobile backend, integration of various services, and post-launch support.',
  },
  {
    icon: <FaTools />,
    title: 'WEB MAINTENANCE SERVICES',
    description: 'We help businesses free up their resources and focus on what is truly vital to them by managing and growing their entire presence online.',
  },
  {
    icon: <FaShareAlt />,
    title: 'SOCIAL MEDIA MANAGEMENT',
    description: 'At ELEXDON, we take care of our clients\' social media activities just for a token. Whatever your business may be—real estate, consumer electronics, financial services, hospitality, or nonprofits—our social media management services position your business for success.',
  },
  {
    icon: <FaPalette />,
    title: 'GRAPHICS DESIGN',
    description: 'At ELEXDON, our creativity is market-driven and totally consumer insight, producing quality designs that work. We work closely with our clients to make their dream a reality by producing quality works that makes them happy.',
  },
];

const WhatWeOffer2 = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <HeaderSection>
        <HeaderText>
          <Slide direction="left" triggerOnce={false}>
            <WhatWeOffer>What we offer</WhatWeOffer>
          </Slide>
          <Slide direction="left" triggerOnce={false} delay={100}>
            <Title>Committed to providing unique and exceptional values.</Title>
          </Slide>
          <Fade triggerOnce={false} delay={200}>
            <Underline />
            <SeeProductsButton onClick={() => navigate('/services')}>See our products</SeeProductsButton>
          </Fade>
        </HeaderText>
      </HeaderSection>
      <SolutionsGrid>
        {solutions.map((solution, index) => (
          <Fade key={index} triggerOnce={false} delay={index * 100}>
            <SolutionCard>
              <IconContainer>
                {solution.icon}
              </IconContainer>
              <CardContent>
                <CardTitle>{solution.title}</CardTitle>
              </CardContent>
            </SolutionCard>
          </Fade>
        ))}
      </SolutionsGrid>
    </MainContainer>
  );
};

export default WhatWeOffer2;