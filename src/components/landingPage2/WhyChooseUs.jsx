
// import React from 'react';
// import styled from 'styled-components';
// import { FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';

// const MainContainer = styled.div`

//   padding: 80px 120px;
//   font-family: Arial, sans-serif;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   position: relative;
//   overflow: hidden;

//   @media (max-width: 1200px) {
//     flex-direction: column;
//     padding: 60px 40px;
//   }

//   @media (max-width: 768px) {
//     padding: 40px 20px;
//   }
// `;

// const ContentSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   z-index: 1;

//   @media (max-width: 1200px) {
//     margin-bottom: 40px;
//   }
// `;

// const HeaderText = styled.div`
//   margin-bottom: 40px;
// `;

// const WhyChooseUs = styled.p`
// //   color: #5A718C;
//   font-size: 16px;
//   margin-bottom: 8px;
// `;

// const Title = styled.h1`
//   font-size: 2.1rem;
//   line-height: 1.2;
//   max-width: 500px;
//   margin: 0;
//   color:#5A718C;

//   @media (max-width: 1024px) {
//     font-size: 36px;
//   }

//   @media (max-width: 768px) {
//     font-size: 28px;
//   }
// `;

// const FeaturesContainer = styled.div`
//   display: flex;
//   gap: 40px;

//   @media (max-width: 1024px) {
//     flex-direction: column;
//     gap: 30px;
//   }
// `;

// const FeatureCard = styled.div`
//   display: flex;
//   align-items: flex-start;
//   max-width: 350px;
// `;

// const IconContainer = styled.div`
//   color: #5A718C;
//   font-size: 28px;
//   margin-right: 15px;
//   line-height: 1;
// `;

// const CardContent = styled.div`
//   flex: 1;
// `;

// const CardTitle = styled.h3`
//   font-size: 20px;
//   margin-top: 0;
//   margin-bottom: 8px;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   color:#5A718C;

//   @media (max-width: 768px) {
//     font-size: 18px;
//   }
// `;

// const CardDescription = styled.p`
//   font-size: 16px;
//   line-height: 1.6;
// //   color: #c0c0c0;
// `;

// const GlobeImage = styled.div`
//   position: absolute;
//   top: 50%;
//   right: 120px;
//   transform: translateY(-50%);
//   width: 400px;
//   height: 400px;
//   background-image: url('https://raw.githubusercontent.com/yemi-adeoye/images/main/globe.png');
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;
//   opacity: 0.6;
//   z-index: 0;

//   @media (max-width: 1200px) {
//     position: relative;
//     right: auto;
//     top: auto;
//     transform: none;
//     margin-top: 40px;
//     width: 100%;
//     max-width: 400px;
//     height: 400px;
//     align-self: center;
//   }

//   @media (max-width: 768px) {
//     width: 300px;
//     height: 300px;
//   }
// `;

// const WhyChooseUsComponent = () => {
//   return (
//     <MainContainer>
//       <ContentSection>
//         <HeaderText>
//           <WhyChooseUs>Why choose us?</WhyChooseUs>
//           <Title>Transforming through innovative tech solutions.</Title>
//         </HeaderText>
//       <FeaturesContainer>
//   <FeatureCard>
//     <IconContainer><FaCheckCircle /></IconContainer>
//     <CardContent>
//       <CardTitle>Proven Expertise</CardTitle>
//       <CardDescription>
//         We have a strong track record of successfully completing a wide range of projects for both government and private sector clients, consistently earning their trust and satisfaction.
//       </CardDescription>
//     </CardContent>
//   </FeatureCard>
//   <FeatureCard>
//     <IconContainer><FaShieldAlt /></IconContainer>
//     <CardContent>
//       <CardTitle>Guaranteed Quality</CardTitle>
//       <CardDescription>
//         Our thorough quality assurance process includes extensive testing, detailed security assessments, and comprehensive code reviews to ensure every project delivers peak performance and is completely reliable.
//       </CardDescription>
//     </CardContent>
//   </FeatureCard>
//   <FeatureCard>
//     <IconContainer><FaClock /></IconContainer>
//     <CardContent>
//       <CardTitle>Dependable and On-Time</CardTitle>
//       <CardDescription>
//         We use effective project management techniques to guarantee that all projects are delivered promptly and efficiently, without ever compromising on our high standards of quality.
//       </CardDescription>
//     </CardContent>
//   </FeatureCard>
// </FeaturesContainer>
//       </ContentSection>
//       <GlobeImage />
//     </MainContainer>
//   );
// };

// export default WhyChooseUsComponent;





import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';
import { Fade, Slide } from 'react-awesome-reveal';

const MainContainer = styled.div`
  padding: 50px 120px;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 1;

  @media (max-width: 1200px) {
    margin-bottom: 40px;
  }
`;

const HeaderText = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const WhyChooseUs = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  font-size: 2.1rem;
  line-height: 1.2;
  max-width: 500px;
  margin: 0;
  // color: #5A718C;
  color:#2f5f9bff;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 350px;
`;

const IconContainer = styled.div`
  // color: #5A718C;
  color:#2f5f9bff;
  font-size: 28px;
  margin-right: 15px;
  line-height: 1;
`;

const CardContent = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  // color: #5A718C;
  color:#2f5f9bff;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
`;

const GlobeImage = styled.div`
  position: absolute;
  top: 50%;
  right: 120px;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
  background-image: url('https://raw.githubusercontent.com/yemi-adeoye/images/main/globe.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  z-index: 0;

  @media (max-width: 1200px) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 40px;
    width: 100%;
    max-width: 400px;
    height: 400px;
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const WhyChooseUsComponent = () => {
  return (
    <MainContainer>
      <ContentSection>
        <HeaderText>
          <Slide direction="left" triggerOnce={false}>
            <WhyChooseUs>Why choose us?</WhyChooseUs>
            <Title>Transforming through innovative tech solutions.</Title>
          </Slide>
        </HeaderText>
        <FeaturesContainer>
          <Fade direction="up" triggerOnce={false} delay={100}>
            <FeatureCard>
              <IconContainer><FaCheckCircle /></IconContainer>
              <CardContent>
                <CardTitle>Proven Expertise</CardTitle>
                <CardDescription>
                  We have a strong track record of successfully completing a wide range of projects for both government and private sector clients, consistently earning their trust and satisfaction.
                </CardDescription>
              </CardContent>
            </FeatureCard>
          </Fade>
          <Fade direction="up" triggerOnce={false} delay={300}>
            <FeatureCard>
              <IconContainer><FaShieldAlt /></IconContainer>
              <CardContent>
                <CardTitle>Guaranteed Quality</CardTitle>
                <CardDescription>
                  Our thorough quality assurance process includes extensive testing, detailed security assessments, and comprehensive code reviews to ensure every project delivers peak performance and is completely reliable.
                </CardDescription>
              </CardContent>
            </FeatureCard>
          </Fade>
          <Fade direction="up" triggerOnce={false} delay={500}>
            <FeatureCard>
              <IconContainer><FaClock /></IconContainer>
              <CardContent>
                <CardTitle>Dependable and On-Time</CardTitle>
                <CardDescription>
                  We use effective project management techniques to guarantee that all projects are delivered promptly and efficiently, without ever compromising on our high standards of quality.
                </CardDescription>
              </CardContent>
            </FeatureCard>
          </Fade>
        </FeaturesContainer>
      </ContentSection>
      {/* <GlobeImage /> */}
    </MainContainer>
  );
};

export default WhyChooseUsComponent;