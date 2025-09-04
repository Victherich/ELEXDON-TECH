
// import React from 'react';
// import styled from 'styled-components';
// import p30 from '../../Images2/p30.jpg';

// const MainContainer = styled.div`

//   padding: 100px 60px;
//   font-family: Arial, sans-serif;
//   display: flex;
//   align-items: center;

//   position: relative;
//   overflow: hidden;

//   &:before {
//     content: '';
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 50%;
//     background-image: url('https://raw.githubusercontent.com/yemi-adeoye/images/main/geometric-pattern.png');
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
//   width: 450px;
//   height: 100%;
//   max-height: 500px;
//   border-radius: 10px;
//   overflow: hidden;
//   margin-right: 40px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

//   @media (max-width: 1024px) {
//     width: 100%;
//     height: auto;
//     max-height: 400px;
//     margin-right: 0;
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
//   z-index: 1;
// `;

// const CoreValueSubtitle = styled.p`
//   font-size: 16px;
// //   color: #c0c0c0;
//   margin-bottom: 8px;
// `;

// const IntegrityTitle = styled.h2`
//   font-size: 48px;
//   margin-top: 0;
//   margin-bottom: 16px;
//   line-height: 1.1;
//   color:#5A718C;

//   @media (max-width: 768px) {
//     font-size: 36px;
//   }
// `;

// const IntegrityDescription = styled.p`
// //   font-size: 18px;
//   line-height: 1.6;
//   max-width: 600px;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const CoreValuesIntegrity = () => {
//   return (
//     <MainContainer>
//       <ImageWrapper>
//         <StyledImage src={p30} alt="A smiling professional woman holding a folder." />
//       </ImageWrapper>
//       <TextContent>
//         <CoreValueSubtitle>Core value</CoreValueSubtitle>
//         <IntegrityTitle>Integrity</IntegrityTitle>
//         <IntegrityDescription>
//          Integrity fosters trust. As a collective entity, our organization recognizes it as our most precious asset. On an individual level, integrity is the ongoing commitment to embed honesty, fairness, and respect into every action, interaction, and decision, both with clients and colleagues. </IntegrityDescription>
//       </TextContent>
//     </MainContainer>
//   );
// };

// export default CoreValuesIntegrity;






import React from 'react';
import styled from 'styled-components';
import p30 from '../../Images2/p30.jpg';
import { Fade, Slide } from 'react-awesome-reveal';

const MainContainer = styled.div`
  padding: 100px 60px;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    background-image: url('https://raw.githubusercontent.com/yemi-adeoye/images/main/geometric-pattern.png');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 450px;
  height: 100%;
  max-height: 500px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    max-height: 400px;
    margin-right: 0;
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
  z-index: 1;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const CoreValueSubtitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 8px;
`;

const IntegrityTitle = styled.h2`
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 16px;
  line-height: 1.1;
  // color: #5A718C;
  color:#2f5f9bff;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const IntegrityDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CoreValuesIntegrity = () => {
  return (
    <MainContainer>
      <Fade direction="left" triggerOnce={false}>
        <ImageWrapper>
          <StyledImage src={p30} alt="A smiling professional woman holding a folder." />
        </ImageWrapper>
      </Fade>
      <TextContent>
        <Slide direction="right" triggerOnce={false}>
          <CoreValueSubtitle>Core value</CoreValueSubtitle>
        </Slide>
        <Slide direction="right" triggerOnce={false} delay={200}>
          <IntegrityTitle>Integrity</IntegrityTitle>
        </Slide>
        <Slide direction="right" triggerOnce={false} delay={400}>
          <IntegrityDescription>
            Integrity fosters trust. As a collective entity, our organization recognizes it as our most precious asset. On an individual level, integrity is the ongoing commitment to embed honesty, fairness, and respect into every action, interaction, and decision, both with clients and colleagues.
          </IntegrityDescription>
        </Slide>
      </TextContent>
    </MainContainer>
  );
};

export default CoreValuesIntegrity;