
// import React from 'react';
// import styled from 'styled-components';
// import p31 from '../../Images2/p31.jpg';
// import p32 from '../../Images2/p32.jpg';

// const MainContainer = styled.div`
//   background: linear-gradient(to right, #ff8c00, #ffc837);
//   color: #fff;
//   padding: 100px 60px;
//   font-family: Arial, sans-serif;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// //   border-radius: 15px;
// //   max-width: 1200px;
//   margin: 0 auto;
//   position: relative;
//   overflow: hidden;

//   &:after {
//     content: '';
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 70%;
//     background-image: url('https://raw.githubusercontent.com/yemi-adeoye/images/main/geometric-pattern-light.png');
//     background-size: cover;
//     background-position: center;
//     opacity: 0.1;
//     pointer-events: none;
//     z-index: 0;
//   }

//   @media (max-width: 1024px) {
//     flex-direction: column;
//     padding: 40px;
//   }

//   @media (max-width: 768px) {
//     padding: 20px;
//   }
// `;

// const ImageWrapper = styled.div`
//   flex-shrink: 0;
//   width: 400px;
//   max-height: 400px;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

//   @media (max-width: 1024px) {
//     width: 100%;
//     height: auto;
//     max-height: 300px;
//     margin-bottom: 30px;
//   }
// `;

// const StyledImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   display: block;
// `;

// const TextContent = styled.div`
//   flex: 1;
//   text-align: center;
//   padding: 0 40px;
//   z-index: 1;

//   @media (max-width: 1024px) {
//     padding: 0;
//     margin-bottom: 30px;
//   }
// `;

// const CoreValueSubtitle = styled.p`
//   font-size: 16px;
//   color: rgba(255, 255, 255, 0.8);
//   margin-bottom: 8px;
// `;

// const PartnershipTitle = styled.h2`
//   font-size: 48px;
//   margin-top: 0;
//   margin-bottom: 16px;
//   line-height: 1.1;

//   @media (max-width: 768px) {
//     font-size: 36px;
//   }
// `;

// const PartnershipDescription = styled.p`
//   font-size: 18px;
//   line-height: 1.6;
//   max-width: 500px;
//   margin: 0 auto;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const CoreValuesPartnership = () => {
//   return (
//     <MainContainer>
//       <ImageWrapper>
//         <StyledImage src={p31} alt="Two business people shaking hands." />
//       </ImageWrapper>
//       <TextContent>
//         <CoreValueSubtitle>Core value</CoreValueSubtitle>
//         <PartnershipTitle>Partnership</PartnershipTitle>
//         <PartnershipDescription>
//          Partnerships amplify our impact, leveraging our collective strengths and shared values to create profound, positive change and achieve excellence for the benefit of our customers, colleagues, and communities. </PartnershipDescription>
//       </TextContent>
//       <ImageWrapper>
//         <StyledImage src={p32} alt="A smiling professional man holding a tablet." />
//       </ImageWrapper>
//     </MainContainer>
//   );
// };

// export default CoreValuesPartnership;




import React from 'react';
import styled from 'styled-components';
import p31 from '../../Images2/p31.jpg';
import p32 from '../../Images2/p32.jpg';
import { Fade, Slide } from 'react-awesome-reveal';

const MainContainer = styled.div`
  background: linear-gradient(to right, #ff8c00, #ffc837);
  color: #fff;
  padding: 100px 60px;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 70%;
    background-image: url('https://raw.githubusercontent.com/yemi-adeoye/images/main/geometric-pattern-light.png');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 400px;
  max-height: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    max-height: 300px;
    margin-bottom: 30px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const TextContent = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 40px;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 0;
    margin-bottom: 30px;
  }
`;

const CoreValueSubtitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
`;

const PartnershipTitle = styled.h2`
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 16px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const PartnershipDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CoreValuesPartnership = () => {
  return (
    <MainContainer>
      <Slide direction="left" triggerOnce={false}>
        <ImageWrapper>
          <StyledImage src={p31} alt="Two business people shaking hands." />
        </ImageWrapper>
      </Slide>
      <TextContent>
        <Fade direction="down" triggerOnce={false}>
          <CoreValueSubtitle>Core value</CoreValueSubtitle>
        </Fade>
        <Slide direction="up" triggerOnce={false} delay={100}>
          <PartnershipTitle>Partnership</PartnershipTitle>
        </Slide>
        <Fade direction="up" triggerOnce={false} delay={200}>
          <PartnershipDescription>
            Partnerships amplify our impact, leveraging our collective strengths and shared values to create profound, positive change and achieve excellence for the benefit of our customers, colleagues, and communities.
          </PartnershipDescription>
        </Fade>
      </TextContent>
      <Slide direction="right" triggerOnce={false}>
        <ImageWrapper>
          <StyledImage src={p32} alt="A smiling professional man holding a tablet." />
        </ImageWrapper>
      </Slide>
    </MainContainer>
  );
};

export default CoreValuesPartnership;