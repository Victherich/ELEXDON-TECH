
// import React from 'react';
// import styled from 'styled-components';
// import { Fade, Slide } from 'react-awesome-reveal';

// const PageContainer = styled.div`
//   background-color: #1a361c;
//   color: #f0f0f0;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   padding: 80px 120px;
//   min-height: 100vh;

//   @media (max-width: 1024px) {
//     padding: 60px 40px;
//   }

//   @media (max-width: 768px) {
//     padding: 40px 20px;
//   }
// `;

// const Section = styled.section`
//   margin-bottom: 100px;
//   padding: 40px;
//   background-color: #274c2a;
//   border-radius: 12px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

//   &:last-of-type {
//     margin-bottom: 0;
//   }

//   @media (max-width: 768px) {
//     padding: 30px;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 52px;
//   color: #b8de6f;
//   margin-bottom: 24px;
//   font-weight: 700;
//   line-height: 1.2;

//   @media (max-width: 1024px) {
//     font-size: 44px;
//   }

//   @media (max-width: 768px) {
//     font-size: 36px;
//     text-align: center;
//   }
// `;

// const SectionParagraph = styled.p`
//   font-size: 18px;
//   line-height: 1.8;
//   color: #e0e0e0;
//   max-width: 800px;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const SectionList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;
//   margin-top: 30px;
// `;

// const ListItem = styled.li`
//   background-color: #b8de6f;
//   color: #1a361c;
//   padding: 10px 20px;
//   border-radius: 50px;
//   font-weight: bold;
//   font-size: 14px;
//   text-transform: uppercase;
//   letter-spacing: 1px;
// `;

// const MissionComponent = () => {
//   return (
//     <PageContainer>
//       <Section>
//         <Slide direction="left" triggerOnce>
//           <SectionTitle>OUR VISSION</SectionTitle>
//         </Slide>
//         <Fade delay={500} triggerOnce>
//           <SectionParagraph>
//             Our Vision is to be the foremost provider of Software/Information Technology Solutions in Nigeria and Africa at large. To achieve this vision, we believe we need the right values to propel the organization to the forefront of the Software/IT service industry in Nigeria. Our core values include:
//           </SectionParagraph>
//         </Fade>
//         <Fade delay={800} triggerOnce>
//           <SectionList>
//             <ListItem>Integrity</ListItem>
//             <ListItem>Innovation</ListItem>
//             <ListItem>Partnership</ListItem>
//             <ListItem>Quality</ListItem>
//             <ListItem>Professionalism</ListItem>
//             <ListItem>Culture of Responsibility</ListItem>
//           </SectionList>
//         </Fade>
//       </Section>

//       <Section>
//         <Slide direction="left" triggerOnce>
//           <SectionTitle>Our Plan</SectionTitle>
//         </Slide>
//         <Fade delay={500} triggerOnce>
//           <SectionParagraph>
//             Elexdon Digital Technologies is your partner for digital success. We offer software/IT solution services to individuals, businesses, institutions, and religious organizations with our expert and experienced professional team.
//           </SectionParagraph>
//         </Fade>
//       </Section>

//       <Section>
//         <Slide direction="left" triggerOnce>
//           <SectionTitle>Our Mission</SectionTitle>
//         </Slide>
//         <Fade delay={500} triggerOnce>
//           <SectionParagraph>
//             To contribute immensely to the socio-economic development of Nigeria by empowering individuals, businesses, or corporate bodies with the right software/IT solutions and skills needed to boost their career opportunities. We provide citizens and businesses with software/IT training and solutions in contemporary information and communication technologies at 'Value for Money' prices so that Nigeria progresses rapidly to emerge on par with the developed economies of the world.
//           </SectionParagraph>
//         </Fade>
//       </Section>
//     </PageContainer>
//   );
// };

// export default MissionComponent;









// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { Fade, Slide } from 'react-awesome-reveal';

// // Keyframes for the star animation
// const twinkle = keyframes`
//   0%, 100% { transform: scale(0.5); opacity: 0.8; }
//   50% { transform: scale(1); opacity: 1; }
// `;

// // Updated PageContainer for the "outer space" look
// const PageContainer = styled.div`
//   background-color: #00001a;
//   color: #f0f0f0;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   padding: 80px 120px;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   position: relative;
//   overflow: hidden;

//   // Starfield background
//   background-image: 
//     radial-gradient(circle at 15% 50%, #4a814d 0%, #00001a 50%),
//     radial-gradient(circle at 85% 50%, #b8de6f 0%, #00001a 50%);

//   &:before, &:after {
//     content: '';
//     position: absolute;
//     width: 3px;
//     height: 3px;
//     background-color: #e0e0e0;
//     border-radius: 50%;
//     box-shadow: 0 0 5px 2px #fff;
//     animation: ${twinkle} 1.5s infinite alternate;
//   }
  
//   &:before { top: 10%; left: 20%; animation-delay: 0.5s; }
//   &:after { bottom: 20%; right: 15%; animation-delay: 1s; }

//   @media (max-width: 1024px) {
//     padding: 60px 40px;
//   }

//   @media (max-width: 768px) {
//     padding: 40px 20px;
//     justify-content: center;
//   }
// `;

// // Updated Section for the "sphere" look
// const Section = styled.section`
//   width: 500px;
//   height: 500px;
//   border-radius: 50%;
//   margin-bottom: 80px;
//   background: radial-gradient(circle at 70% 30%, #4a814d, #274c2a);
//   box-shadow: 
//     0 0 50px rgba(184, 222, 111, 0.4),
//     inset 0 0 20px rgba(0, 0, 0, 0.5);
  
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   transition: transform 0.3s ease-in-out;
//   overflow: hidden;

//   &:hover {
//     transform: scale(1.05);
//   }

//   &:last-of-type {
//     margin-bottom: 0;
//   }

//   @media (max-width: 768px) {
//     width: 320px;
//     height: 320px;
//     margin-bottom: 60px;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: 52px;
//   color: #b8de6f;
//   margin-bottom: 16px;
//   font-weight: 700;
//   line-height: 1.2;

//   @media (max-width: 1024px) {
//     font-size: 44px;
//   }

//   @media (max-width: 768px) {
//     font-size: 32px;
//   }
// `;

// const SectionParagraph = styled.p`
//   font-size: 18px;
//   line-height: 1.6;
//   color: #e0e0e0;
//   max-width: 400px;
//   margin: 0 auto;
//   padding: 0 20px;

//   @media (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

// const SectionList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   justify-content: center;
//   margin-top: 20px;
// `;

// const ListItem = styled.li`
//   background-color: #b8de6f;
//   color: #1a361c;
//   padding: 8px 16px;
//   border-radius: 50px;
//   font-weight: bold;
//   font-size: 12px;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   white-space: nowrap;
// `;

// const MissionComponent = () => {
//   return (
//     <PageContainer>
//       <Section>
//         <Slide direction="left" triggerOnce>
//           <SectionTitle>OUR VISSION</SectionTitle>
//         </Slide>
//         <Fade delay={500} triggerOnce>
//           <SectionParagraph>
//             Our Vision is to be the foremost provider of Software/Information Technology Solutions in Nigeria and Africa at large. To achieve this vision, we believe we need the right values to propel the organization to the forefront of the Software/IT service industry in Nigeria. Our core values include:
//           </SectionParagraph>
//         </Fade>
//         <Fade delay={800} triggerOnce>
//           <SectionList>
//             <ListItem>Integrity</ListItem>
//             <ListItem>Innovation</ListItem>
//             <ListItem>Partnership</ListItem>
//             <ListItem>Quality</ListItem>
//             <ListItem>Professionalism</ListItem>
//             <ListItem>Culture of Responsibility</ListItem>
//           </SectionList>
//         </Fade>
//       </Section>

//       <Section>
//         <Slide direction="left" triggerOnce>
//           <SectionTitle>Our Plan</SectionTitle>
//         </Slide>
//         <Fade delay={500} triggerOnce>
//           <SectionParagraph>
//             Elexdon Digital Technologies is your partner for digital success. We offer software/IT solution services to individuals, businesses, institutions, and religious organizations with our expert and experienced professional team.
//           </SectionParagraph>
//         </Fade>
//       </Section>

//       <Section>
//         <Slide direction="left" triggerOnce>
//           <SectionTitle>Our Mission</SectionTitle>
//         </Slide>
//         <Fade delay={500} triggerOnce>
//           <SectionParagraph>
//             To contribute immensely to the socio-economic development of Nigeria by empowering individuals, businesses, or corporate bodies with the right software/IT solutions and skills needed to boost their career opportunities. We provide citizens and businesses with software/IT training and solutions in contemporary information and communication technologies at 'Value for Money' prices so that Nigeria progresses rapidly to emerge on par with the developed economies of the world.
//           </SectionParagraph>
//         </Fade>
//       </Section>
//     </PageContainer>
//   );
// };

// export default MissionComponent;










import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';

// Keyframes for the star animation
const twinkle = keyframes`
  0%, 100% { transform: scale(0.5); opacity: 0.8; }
  50% { transform: scale(1); opacity: 1; }
`;

// Keyframes for floating planet effect
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Updated PageContainer for the "outer space" look and triangular layout
const PageContainer = styled.div`
  background-color: #00001a;
  color: #f0f0f0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  background-image: 
    radial-gradient(circle at 15% 50%, #4a814d 0%, #00001a 50%),
    radial-gradient(circle at 85% 50%, #b8de6f 0%, #00001a 50%);

  &:before, &:after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: #e0e0e0;
    border-radius: 50%;
    box-shadow: 0 0 5px 2px #fff;
    animation: ${twinkle} 1.5s infinite alternate;
  }
  
  &:before { top: 10%; left: 20%; animation-delay: 0.5s; }
  &:after { bottom: 20%; right: 15%; animation-delay: 1s; }
`;

const SpheresWrapper = styled.div`
  width: 1000px;
  height: 800px;
  position: relative;
  
  @media (max-width: 1200px) {
    width: 800px;
    height: 700px;
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// Updated Section for the "sphere" look
const Section = styled.section`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle at 70% 30%, #4a814d, #274c2a);
  box-shadow: 
    0 0 50px rgba(184, 222, 111, 0.4),
    inset 0 0 20px rgba(0, 0, 0, 0.5);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  position: absolute;
  animation: ${float} 4s ease-in-out infinite;

  &:hover {
    transform: scale(1.05) translateY(-10px);
  }

  &.top {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &.left {
    bottom: 0;
    left: 0;
    animation-delay: 0.5s;
  }

  &.right {
    bottom: 0;
    right: 0;
    animation-delay: 1s;
  }

  @media (max-width: 1024px) {
    position: static;
    width: 320px;
    height: 320px;
    margin-bottom: 60px;
    transform: none;
    animation: none;

    &:hover {
      transform: none;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 52px;
  color: #b8de6f;
  margin-bottom: 16px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 44px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionParagraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #e0e0e0;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SectionList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const ListItem = styled.li`
  background-color: #b8de6f;
  color: #1a361c;
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;
`;

const MissionComponent = () => {
  return (
    <PageContainer>
      <SpheresWrapper>
        <Section className="top">
          <Slide direction="center" triggerOnce>
            <SectionTitle>OUR VISSION</SectionTitle>
          </Slide>
          <Fade delay={500} triggerOnce>
            <SectionParagraph>
              Our Vision is to be the foremost provider of Software/Information Technology Solutions in Nigeria and Africa at large. To achieve this vision, we believe we need the right values to propel the organization to the forefront of the Software/IT service industry in Nigeria. Our core values include:
            </SectionParagraph>
          </Fade>
          <Fade delay={800} triggerOnce>
            <SectionList>
              <ListItem>Integrity</ListItem>
              <ListItem>Innovation</ListItem>
              <ListItem>Partnership</ListItem>
              <ListItem>Quality</ListItem>
              <ListItem>Professionalism</ListItem>
              <ListItem>Culture of Responsibility</ListItem>
            </SectionList>
          </Fade>
        </Section>

        <Section className="left">
          <Slide direction="left" triggerOnce>
            <SectionTitle>Our Plan</SectionTitle>
          </Slide>
          <Fade delay={500} triggerOnce>
            <SectionParagraph>
              Elexdon Digital Technologies is your partner for digital success. We offer software/IT solution services to individuals, businesses, institutions, and religious organizations with our expert and experienced professional team.
            </SectionParagraph>
          </Fade>
        </Section>

        <Section className="right">
          <Slide direction="left" triggerOnce>
            <SectionTitle>Our Mission</SectionTitle>
          </Slide>
          <Fade delay={500} triggerOnce>
            <SectionParagraph>
              To contribute immensely to the socio-economic development of Nigeria by empowering individuals, businesses, or corporate bodies with the right software/IT solutions and skills needed to boost their career opportunities. We provide citizens and businesses with software/IT training and solutions in contemporary information and communication technologies at 'Value for Money' prices so that Nigeria progresses rapidly to emerge on par with the developed economies of the world.
            </SectionParagraph>
          </Fade>
        </Section>
      </SpheresWrapper>
    </PageContainer>
  );
};

export default MissionComponent;