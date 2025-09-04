
// import React, { useRef, useEffect, useState } from 'react';
// import styled, { css, keyframes } from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// // Assuming the image is available locally or imported:
// import HeroImage from '../../Images2/think pic.png'; // Adjust path if necessary, assuming it's in an 'Images' folder

// // Keyframe for subtle hover effect on button
// const bounceEffect = keyframes`
//   0%, 100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-5px);
//   }
// `;

// // Keyframe for fading in elements
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;


// const ThinkingSectionWrapper = styled.section`

//   color: #FFFFFF;
//   padding: 80px 80px;
//   min-height: 70vh; /* Ensure it takes up a good portion of the viewport */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden; /* Hide any overflow from background patterns if added */

//   /* Optional: Add a subtle background pattern if desired, otherwise comment out */
//   /* background-image: url('path/to/your/pattern.svg'); */
//   /* background-size: cover; */
//   /* background-position: center; */
// `;

// const ContentContainer = styled.div`
//   max-width: 1400px;
//   width: 100%;
//   display: flex;
//   flex-direction: column; /* Default to column for mobile */
//   align-items: center;
//   gap: 40px; /* Space between sections */

//   @media (min-width: 768px) {
//     flex-direction: row; /* Row layout for larger screens */
//     justify-content: space-between;
//     align-items: flex-start; /* Align content to the top */
//     gap: 60px;
//   }

//   @media (min-width: 1024px) {
//     gap: 80px;
//   }
// `;

// const LeftContent = styled.div`
//   flex: 1.2; /* Give more space to left content */
//   text-align: center;
//   max-width: 600px; /* Limit width even on large screens */

//   @media (min-width: 768px) {
//     text-align: left;
//   }
// `;

// const Subtitle = styled.p`
//   font-size: 1.1em;
//   color: #6B84A2;
//   color:#555;
//   font-weight: 500;
//   margin-bottom: 10px;
//   opacity: 0;
//   ${({ animate }) => animate && css`animation: ${fadeIn} 0.8s ease-out forwards;`}
// `;

// const MainTitle = styled.h1`
//   font-size: 2rem;
//   font-weight: 700;
//   line-height: 1.2;
//   margin-bottom: 20px;
//   color: #5A718C;

//   ${({ animate }) => animate && css`animation: ${fadeIn} 0.8s ease-out forwards 0.2s;`} /* Stagger animation */


//   @media (min-width: 768px) {
//     font-size: 2rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 2rem;
//   }
// `;

// const Underline = styled.div`
//   width: 100px;
//   height: 4px;
//   background-color: #6B84A2; /* Orange color for underline */
//   margin: 0 auto 30px auto; /* Center on mobile, adjust margin */
//   border-radius: 2px;
//   opacity: 0;
//   ${({ animate }) => animate && css`animation: ${fadeIn} 0.8s ease-out forwards 0.4s;`}

//   @media (min-width: 768px) {
//     margin: 0 0 30px 0; /* Align left on larger screens */
//   }
// `;

// const ImageContainer = styled.div`
//   flex: 0.8; /* Adjust flex basis for image */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-width: 280px; /* Prevent image from becoming too small */
//   max-width: 450px; /* Max width for image container */
//   height:250px;
//   opacity: 0;
//   ${({ animate }) => animate && css`animation: ${fadeIn} 0.8s ease-out forwards 0.6s;`}

//   img {
//     width: 100%;
//     height: 100%;
//     border-radius: 12px; /* Rounded corners for the image */
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); /* Soft shadow */
//     display: block; /* Remove extra space below image */
//     object-fit:cover;
//   }
// `;

// const RightContent = styled.div`
//   flex: 1; /* Equal flex with left content for text */
//   text-align: center;
//   max-width: 600px; /* Limit width */

//   @media (min-width: 768px) {
//     text-align: left;
//   }
// `;

// const Description = styled.p`
//   font-size: 1em;
//   line-height: 1.6;
//   margin-bottom: 30px;
//   color: #333; /* Slightly off-white for description */
//   opacity: 0;
//   ${({ animate }) => animate && css`animation: ${fadeIn} 0.8s ease-out forwards 0.8s;`}


//   @media (min-width: 768px) {
//     font-size: 1.1em;
//   }
// `;

// const DiscoverButton = styled.button`
//   padding: 15px 30px;
//   font-size: 1.05em;
//   font-weight: 600;
//   color: white; /* Dark green text to match background */
//   background-color: #6B84A2; /* Bright green button as in image */
//   border: none;
//   border-radius: 50px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.2s ease;

//   opacity: 0;
//   ${({ animate }) => animate && css`animation: ${fadeIn} 0.8s ease-out forwards 1s;`}


//   &:hover {
//     background-color: #12c2e9; /* Slightly darker green on hover */

//     transform: translateY(-3px);
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

// const ThinkingSection = () => {
//   const navigate = useNavigate();
//   const sectionRef = useRef(null); // Ref for the entire section
//   const [animate, setAnimate] = useState(false); // State to trigger animations

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setAnimate(true);
//             observer.unobserve(entry.target); // Stop observing once animated
//           }
//         });
//       },
//       { threshold: 0.1 } // Trigger when 10% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <ThinkingSectionWrapper ref={sectionRef}>
//       <ContentContainer>
//         <LeftContent>
//           <Subtitle animate={animate}>Our Thinking</Subtitle>
//           <MainTitle animate={animate}>
//            Elexdon Digitech with innovative digital technology  help businesses navigate complexity and drive digital transformation by reimagining their processes.
//           </MainTitle>
//           <Underline animate={animate} />
//         </LeftContent>

//         <ImageContainer animate={animate}>
//           <img src={HeroImage} alt="Business Professional" />
//         </ImageContainer>

//         <RightContent>
//           <Description animate={animate}>
//         We are harnessing the power of technology, we're committed to creating Africa's premier tech company, fueled by consistent growth, user-centric solutions, and a passion for solving life's challenges.

//           </Description>
//           <DiscoverButton animate={animate} onClick={() => navigate('/contactus')}>
//             Discover more
//           </DiscoverButton>
//         </RightContent>
//       </ContentContainer>
//     </ThinkingSectionWrapper>
//   );
// };

// export default ThinkingSection;



import React, { useRef, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Assuming the image is available locally or imported:
import HeroImage from '../../Images2/think pic.png';

// Keyframe for subtle hover effect on button
const bounceEffect = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

// Keyframe for fading in elements
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const ThinkingSectionWrapper = styled.section`
  // background-color: #fff;
  color: #FFFFFF;
  padding: 40px 80px;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 60px;
  }

  @media (min-width: 1024px) {
    gap: 80px;
  }
`;

const LeftContent = styled.div`
  flex: 1.2;
  text-align: center;
  max-width: 600px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1em;
  color: #555;
  font-weight: 500;
  margin-bottom: 10px;
  opacity: 0;
  
  ${({ animate }) => animate && css`
    animation: ${fadeIn} 0.8s ease-out forwards;
  `}

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const MainTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  // color: #5A718C;
  color:#2f5f9bff;
  opacity: 0;

  ${({ animate }) => animate && css`
    animation: ${fadeIn} 0.8s ease-out forwards 0.2s;
  `}

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Underline = styled.div`
  width: 100px;
  height: 4px;
  background-color:#2f5f9bff;;
  margin: 0 auto 30px auto;
  border-radius: 2px;
  opacity: 0;

  ${({ animate }) => animate && css`
    animation: ${fadeIn} 0.8s ease-out forwards 0.4s;
  `}

  @media (min-width: 768px) {
    margin: 0 0 30px 0;
  }
`;

const ImageContainer = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 280px;
  max-width: 450px;
  height:250px;
  opacity: 0;
  
  ${({ animate }) => animate && css`
    animation: ${fadeIn} 0.8s ease-out forwards 0.6s;
  `}

  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    display: block;
    object-fit:cover;
  }
`;

const RightContent = styled.div`
  flex: 1;
  text-align: center;
  max-width: 600px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #333;
  opacity: 0;

  ${({ animate }) => animate && css`
    animation: ${fadeIn} 0.8s ease-out forwards 0.8s;
  `}

  @media (min-width: 768px) {
    font-size: 1.1em;
  }
`;

const DiscoverButton = styled.button`
  padding: 15px 30px;
  font-size: 1.05em;
  font-weight: 600;
  color: white;
  background-color: #2f5f9bff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  opacity: 0;
  
  ${({ animate }) => animate && css`
    animation: ${fadeIn} 0.8s ease-out forwards 1s;
  `}

  &:hover {
    background-color: #12c2e9;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ThinkingSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimate(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <ThinkingSectionWrapper ref={sectionRef}>
      <ContentContainer>
        <LeftContent>
          <Subtitle animate={animate}>Our Thinking</Subtitle>
          <MainTitle animate={animate}>
            Elexdon Digitech with innovative digital technology help businesses navigate complexity and drive digital transformation by reimagining their processes.
          </MainTitle>
          <Underline animate={animate} />
        </LeftContent>

        <ImageContainer animate={animate}>
          <img src={HeroImage} alt="Business Professional" />
        </ImageContainer>

        <RightContent>
          <Description animate={animate}>
            We are harnessing the power of technology, we're committed to creating Africa's premier tech company, fueled by consistent growth, user-centric solutions, and a passion for solving life's challenges.
          </Description>
          <DiscoverButton animate={animate} onClick={() => navigate('/contactus')}>
            Discover more
          </DiscoverButton>
        </RightContent>
      </ContentContainer>
    </ThinkingSectionWrapper>
  );
};

export default ThinkingSection;