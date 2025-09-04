
// import React from 'react';
// import styled from 'styled-components';
// import core1 from '../../Images2/core1.jpg';
// import core2 from '../../Images2/core2.jpg';

// const MainContainer = styled.div`
//   background-color:rgba(0,0,0,0.1);

//   padding: 80px 120px;
//   font-family: Arial, sans-serif;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (max-width: 1024px) {
//     padding: 60px 40px;
//   }

//   @media (max-width: 768px) {
//     padding: 40px 20px;
//   }
// `;

// const HeaderTitle = styled.h1`
//   font-size: 2.5rem;
//   margin-bottom: 60px;
//   text-align: center;
//   color:#5A718C;
//   font-weight:bold;

//   @media (max-width: 768px) {
//     font-size: 24px;
//     margin-bottom: 40px;
//   }
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   gap: 40px;
//   align-items: center;

//   @media (max-width: 1024px) {
//     flex-direction: column;
//     gap: 30px;
//   }
// `;

// const TextSection = styled.div`
//   flex: 1;
//   max-width: 450px;

//   @media (max-width: 1024px) {
//     max-width: 100%;
//   }
// `;

// const ValueTitle = styled.h3`
//   font-size: 40px;
//   margin-bottom: 16px;
//   color:#5A718C;

//   @media (max-width: 768px) {
//     font-size: 32px;
//   }
// `;

// const ValueDescription = styled.p`
//   font-size: 16px;
//   line-height: 1.6;
// `;

// const ImageContainer = styled.div`
//   display: flex;
//   gap: 20px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 15px;
//   }
// `;

// const StyledImage = styled.img`
//   width: 100%;
//   max-width: 350px;
//   height: auto;
//   border-radius: 10px;
//   object-fit: cover;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

//   @media (max-width: 1024px) {
//     max-width: 100%;
//   }
// `;

// const CoreValuesComponent = () => {
//   return (
//     <MainContainer>
//       <HeaderTitle>Our core values</HeaderTitle>
//       <ContentWrapper>
//         <TextSection>
//           <ValueTitle>Innovation</ValueTitle>
//           <ValueDescription>
//           Innovation drives action by inspiring us to take calculated risks, foster curiosity, and welcome new ideas. It encourages us to learn from our mistakes and continually strive to surpass expectations. Through innovation, we develop solutions that meet our customers' needs and elevate standards within our workplace and across our industry.  </ValueDescription>
//         </TextSection>
//         <ImageContainer>
//           <StyledImage src={core1} alt="Woman working on a computer" />
//           <StyledImage src={core2} alt="Hand holding a glowing globe" />
//         </ImageContainer>
//       </ContentWrapper>
//     </MainContainer>
//   );
// };

// export default CoreValuesComponent;

import React from 'react';
import styled from 'styled-components';
import core1 from '../../Images2/core1.jpg';
import core2 from '../../Images2/core2.jpg';
import { Fade, Slide } from 'react-awesome-reveal';

const MainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 40px 120px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 40px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  // margin-bottom: 60px;
  text-align: center;
  // color: #5A718C;
  color:#2f5f9bff;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const TextSection = styled.div`
  flex: 1;
  max-width: 450px;

  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }
`;

const ValueTitle = styled.h3`
  font-size: 40px;
  margin-bottom: 16px;
  // color: #5A718C;
  color:#2f5f9bff;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ValueDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const CoreValuesComponent = () => {
  return (
    <MainContainer>
      <Slide direction="down" triggerOnce={false}>
        <HeaderTitle>Our core values</HeaderTitle>
      </Slide>
      <ContentWrapper>
        <TextSection>
          <Slide direction="left" triggerOnce={false}>
            <ValueTitle>Innovation</ValueTitle>
            <ValueDescription>
              Innovation drives action by inspiring us to take calculated risks, foster curiosity, and welcome new ideas. It encourages us to learn from our mistakes and continually strive to surpass expectations. Through innovation, we develop solutions that meet our customers' needs and elevate standards within our workplace and across our industry.
            </ValueDescription>
          </Slide>
        </TextSection>
        <ImageContainer>
          <Fade direction="up" triggerOnce={false} delay={200}>
            <StyledImage src={core1} alt="Woman working on a computer" />
          </Fade>
          <Fade direction="up" triggerOnce={false} delay={400}>
            <StyledImage src={core2} alt="Hand holding a glowing globe" />
          </Fade>
        </ImageContainer>
      </ContentWrapper>
    </MainContainer>
  );
};

export default CoreValuesComponent;


