
// import React from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import logo from '../../Images/ELogo.png'; // Assuming the logo path is correct

// // Keyframe animation for zoom in/out
// const zoomAnimation = keyframes`
//   0% {
//     transform: scale(1);
//   }
//     25% {
//     transform: scale(1.2);
//   }
//   50% {
//     transform: scale(1.3);
//   }
//     75% {
//     transform: scale(1.4);
//   }
//   100% {
//     transform: scale(1.5);
//   }
// `;

// const HeroSectionWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   padding: 20px 20px; /* Add padding for spacing */

//   color: white; /* Dark text for readability */

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-around;
//     padding: 50px 50px;
//   }
// `;

// const LeftSide = styled.div`
//   flex: 1;
//   max-width: 600px;
//   text-align: center;
//   margin-bottom: 40px; /* Space between sections on mobile */

//   @media (min-width: 768px) {
//     text-align: left;
//     margin-bottom: 0;
//     margin-right: 50px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   font-weight: 700;
//   margin-bottom: 20px;
//   line-height: 1.2;
//   color:#5A718C;


//   @media (min-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const Description = styled.p`
//   font-size: 1.1em;
//   line-height: 1.6;
//   margin-bottom: 30px;
//   color: #444; /* Slightly lighter text for description */
// `;

// const LearnMoreButton = styled.button`
//   padding: 12px 30px;
//   font-size: 1em;
//   font-weight: 600;
//   color: #FFFFFF;

//    background-color: #5A718C; /* Slightly darker on hover */
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.2s ease;


//   &:hover {
//      background-color: #12c2e9; /* Matching the header background color */
//     transform: translateY(-3px);
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

// const RightSide = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   max-width: 500px; /* Limit logo container width */
// `;

// const AnimatedLogo = styled.img`
//   max-width: 100%;
//   height: auto;
//   border-radius: 50%; /* Slightly rounded corners for the logo */
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* More prominent shadow */
//   animation: ${zoomAnimation} 4s ease-in-out infinite; /* Apply animation */
// `;

// const Hero2 = () => {
//   const navigate = useNavigate();

//   const handleLearnMoreClick = () => {
//     navigate('/contactus');
//   };

//   return (
//     <HeroSectionWrapper>
//       <LeftSide>
//         <Title>
//           Welcome to the Future of Technology-Innovations Beyond Today. Reimagining Africa Through Technology
//         </Title>
//         <Description>
//           Welcome to our world of cutting-edge software solutions. We are a leading technology company
//           committed to delivering exceptional digital services to both the private and public sectors.
//           Our mission is to drive innovation and enable transformative change through smart, scalable,
//           and reliable tech solutions.
//         </Description>
//         <LearnMoreButton onClick={handleLearnMoreClick}>
//           Learn More
//         </LearnMoreButton>
//       </LeftSide>
//       <RightSide>
//         <AnimatedLogo src={logo} alt="Company Logo" />
//       </RightSide>
//     </HeroSectionWrapper>
//   );
// };

// export default Hero2;






// import React from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import { Fade, Slide } from 'react-awesome-reveal'; // Import animation components
// import { useNavigate } from 'react-router-dom';
// import logo from '../../Images/ELogo.png';

// const HeroSectionWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 50px 80px;
//   background-color: #fff;
//   color: white;

//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-around;
//     padding: 100px 120px;
//   }

//   @media (max-width: 768px) {
//     padding: 40px 20px;
//   }
// `;

// const LeftSide = styled.div`
//   flex: 1;
//   max-width: 600px;
//   text-align: center;
//   margin-bottom: 40px;

//   @media (min-width: 768px) {
//     text-align: left;
//     margin-bottom: 0;
//     margin-right: 50px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   font-weight: 700;
//   margin-bottom: 20px;
//   line-height: 1.2;
//   color: #5A718C;

//   @media (max-width: 1024px) {
//     font-size: 2rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.8rem;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.5rem;
//   }
// `;

// const Description = styled.p`
//   font-size: 1.1em;
//   line-height: 1.6;
//   margin-bottom: 30px;
//   color: #444;

//   @media (max-width: 768px) {
//     font-size: 1em;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.9em;
//   }
// `;

// const LearnMoreButton = styled.button`
//   padding: 12px 30px;
//   font-size: 1em;
//   font-weight: 600;
//   color: #FFFFFF;
//   background-color: #5A718C;
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.2s ease;

//   &:hover {
//     background-color: #12c2e9;
//     transform: translateY(-3px);
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

// const RightSide = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   max-width: 500px;

//   @media (max-width: 768px) {
//     max-width: 100%;
//   }
// `;

// const AnimatedLogo = styled.img`
//   max-width: 100%;
//   height: auto;
//   border-radius: 50%;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//   transition: all 0.3s ease;
// `;

// const Hero2 = () => {
//   const navigate = useNavigate();

//   const handleLearnMoreClick = () => {
//     navigate('/contactus');
//   };

//   return (
//     <HeroSectionWrapper>
//       <LeftSide>
//         <Slide direction="left" triggerOnce>
//           <Title>
//             Welcome to the Future of Technology-Innovations Beyond Today. Reimagining Africa Through Technology
//           </Title>
//         </Slide>
//         <Slide direction="left" triggerOnce delay={200}>
//           <Description>
//             Welcome to our world of cutting-edge software solutions. We are a leading technology company
//             committed to delivering exceptional digital services to both the private and public sectors.
//             Our mission is to drive innovation and enable transformative change through smart, scalable,
//             and reliable tech solutions.
//           </Description>
//         </Slide>
//         <Fade triggerOnce delay={500}>
//           <LearnMoreButton onClick={handleLearnMoreClick}>
//             Learn More
//           </LearnMoreButton>
//         </Fade>
//       </LeftSide>
//       <RightSide>
//         <Fade triggerOnce delay={500}>
//           <AnimatedLogo src={logo} alt="Company Logo" />
//         </Fade>
//       </RightSide>
//     </HeroSectionWrapper>
//   );
// };

// export default Hero2;






import React from 'react';
import styled,{keyframes} from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images2/logo elexdon.jpg';

const zoomAnimation = keyframes`
  0% {
    transform: scale(1);
  }
    25% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1.1);
  }
    75% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1.2);
  }
`;

const HeroSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;

  color: white;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    // padding: 100px 120px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  max-width: 600px;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
    margin-right: 50px;
  }
`;

const Title = styled.h1`
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 20px;
  // line-height: 1.2;
  // color: #5A718C;
  color:#2f5f9bff;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #444;

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
  }
`;

const LearnMoreButton = styled.button`
  padding: 12px 30px;
  font-size: 1em;
  font-weight: 600;
  color: #FFFFFF;
  background-color: #2f5f9bff;;
  // background-color:#4946ffff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-bottom:20px;

  &:hover {
    background-color: #12c2e9;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;

  @media (max-width: 768px) {
    // max-width: 100%;
  }
`;

const AnimatedLogo = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  animation: ${zoomAnimation} 4s ease-in-out infinite; /* Apply animation */
`;

const Hero2 = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/contactus');
  };

  return (
    <HeroSectionWrapper>
      <LeftSide>
        <Slide direction="left" triggerOnce={false}>
          <Title>
            Welcome to the Future of Technology-Innovations Beyond Today. Reimagining Africa Through Technology
          </Title>
        </Slide>
        <Slide direction="left" triggerOnce={false} delay={200}>
          <Description>
            Welcome to our world of cutting-edge software solutions. We are a leading technology company
            committed to delivering exceptional digital services to both the private and public sectors.
            Our mission is to drive innovation and enable transformative change through smart, scalable,
            and reliable tech solutions.
          </Description>
        </Slide>
        <Fade triggerOnce={false} delay={500}>
          <LearnMoreButton onClick={handleLearnMoreClick}>
            Learn More
          </LearnMoreButton>
        </Fade>
      </LeftSide>
      <RightSide>
        <Fade triggerOnce={false} delay={500}>
          <AnimatedLogo src={logo} alt="Company Logo" />
        </Fade>
      </RightSide>
    </HeroSectionWrapper>
  );
};

export default Hero2;