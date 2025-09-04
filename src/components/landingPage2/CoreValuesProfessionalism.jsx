
// import React from 'react';
// import styled from 'styled-components';
// import p34 from '../../Images2/p34.jpg';
// import p35 from '../../Images2/p35.jpg'

// const MainContainer = styled.div`
// //   background-color: #1a361c;
// //   color: #fff;
//   padding: 80px 120px;
//   font-family: Arial, sans-serif;
//   display: flex;
//   align-items: center;
//   gap: 40px;
//   position: relative;
//   overflow: hidden;

//   &:after {
//     content: '';
//     position: absolute;
//     top: -20px;
//     right: -20px;
//     width: 250px;
//     height: 250px;
//     background-image: url('https://raw.githubusercontent.com/yemi-adeoye/images/main/geometric-pattern-white.png');
//     background-size: contain;
//     background-repeat: no-repeat;
//     opacity: 0.1;
//     pointer-events: none;
//     z-index: 0;
//   }

//   @media (max-width: 1200px) {
//     flex-direction: column;
//     padding: 60px 40px;
//     text-align: center;
//   }

//   @media (max-width: 768px) {
//     padding: 40px 20px;
//   }
// `;

// const TextContent = styled.div`
//   flex: 1;
//   max-width: 600px;
//   z-index: 1;

//   @media (max-width: 1200px) {
//     max-width: 100%;
//     margin-bottom: 40px;
//   }
// `;

// const CoreValueSubtitle = styled.p`
//   font-size: 16px;
// //   color: #b8de6f;
//   margin-bottom: 8px;
// `;

// const ProfessionalismTitle = styled.h2`
//   font-size: 48px;
//   margin-top: 0;
//   margin-bottom: 16px;
//   line-height: 1.1;
//   color: #5A718C;

//   @media (max-width: 768px) {
//     font-size: 36px;
//   }
// `;

// const ProfessionalismDescription = styled.p`
// //   font-size: 18px;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const ImageContainer = styled.div`
//   display: flex;
//   gap: 20px;
//   flex-wrap: wrap;
//   justify-content: center;
//   z-index: 1;
// `;

// const ImageWrapper = styled.div`
//   width: 300px;
//   height: 450px;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

//   @media (max-width: 1024px) {
//     width: 100%;
//     height: auto;
//     max-height: 400px;
//     margin: 0 auto;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     max-width: none;
//     height: auto;
//   }
// `;

// const StyledImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   display: block;
// `;

// const ImageWrapperRight = styled(ImageWrapper)`
//   width: 350px;
//   height: 450px;
  
//   @media (max-width: 1024px) {
//     width: 100%;
//     height: auto;
//     max-height: 400px;
//     margin: 0 auto;
//   }
// `;


// const CoreValuesProfessionalism = () => {
//   return (
//     <MainContainer>
//       <TextContent>
//         <CoreValueSubtitle>Core value</CoreValueSubtitle>
//         <ProfessionalismTitle>Professionalism</ProfessionalismTitle>
//         <ProfessionalismDescription>
//          Professionalism ignites enthusiasm for our work and our approach. With passion driving every aspect of what we do, we cultivate innovative ideas, inspire high standards, and develop creative solutions to overcome obstacles, ultimately fostering growth and excellence </ProfessionalismDescription>
//       </TextContent>
//       <ImageContainer>
//         <ImageWrapper>
//           <StyledImage src={p34} alt="Aerial view of a business meeting." />
//         </ImageWrapper>
//         <ImageWrapperRight>
//           <StyledImage src={p35} alt="A smiling professional man working on a laptop." />
//         </ImageWrapperRight>
//       </ImageContainer>
//     </MainContainer>
//   );
// };

// export default CoreValuesProfessionalism;





import React from 'react';
import styled from 'styled-components';
import p34 from '../../Images2/p34.jpg';
import p35 from '../../Images2/p35.jpg';
import { Fade, Slide } from 'react-awesome-reveal';

const MainContainer = styled.div`
  padding: 80px 120px;
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 250px;
    height: 250px;
    background-image: url('https://raw.githubusercontent.com/yemi-adeoye/images/main/geometric-pattern-white.png');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 60px 40px;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 1;

  @media (max-width: 1200px) {
    max-width: 100%;
    margin-bottom: 40px;
  }
`;

const CoreValueSubtitle = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 8px;
`;

const ProfessionalismTitle = styled.h2`
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

const ProfessionalismDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 1;
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    max-height: 400px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    height: auto;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ImageWrapperRight = styled(ImageWrapper)`
  width: 300px;
  height: 300px;
  
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    max-height: 400px;
    margin: 0 auto;
  }
`;


const CoreValuesProfessionalism = () => {
  return (
    <MainContainer>
      <TextContent>
        <Slide direction="left" triggerOnce={false}>
          <CoreValueSubtitle>Core value</CoreValueSubtitle>
        </Slide>
        <Slide direction="left" triggerOnce={false} delay={100}>
          <ProfessionalismTitle>Professionalism</ProfessionalismTitle>
        </Slide>
        <Slide direction="left" triggerOnce={false} delay={200}>
          <ProfessionalismDescription>
            Professionalism ignites enthusiasm for our work and our approach. With passion driving every aspect of what we do, we cultivate innovative ideas, inspire high standards, and develop creative solutions to overcome obstacles, ultimately fostering growth and excellence.
          </ProfessionalismDescription>
        </Slide>
      </TextContent>
      <ImageContainer>
        <Fade direction="right" triggerOnce={false} delay={300}>
          <ImageWrapper>
            <StyledImage src={p34} alt="Aerial view of a business meeting." />
          </ImageWrapper>
        </Fade>
        <Fade direction="right" triggerOnce={false} delay={500}>
          <ImageWrapperRight>
            <StyledImage src={p35} alt="A smiling professional man working on a laptop." />
          </ImageWrapperRight>
        </Fade>
      </ImageContainer>
    </MainContainer>
  );
};

export default CoreValuesProfessionalism;