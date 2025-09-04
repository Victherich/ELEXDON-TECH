
// src/pages/HomePage.jsx or src/components/HeroSection.jsx
import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa'; // Make sure to install react-icons: npm install react-icons
import sp from '../Images2/sp2.png'
import {useNavigate} from 'react-router-dom'


const CoWorkHero2 = () => {
const n = useNavigate()

  return (
    <HeroContainer>
      <LeftSection>
        {/* <Subtitle>Subsidiary</Subtitle> */}
        <Title>Elexdon Tech-Hub</Title>
        <Description>
         ✨ "A co-working space isn’t just about desks and Wi-Fi. It’s a place where ideas collide, collaborations spark, and people grow together. Surrounded by driven minds and creative energy, you’re not just working—you’re building, connecting, and shaping the future."
        </Description>
        <ViewProductButton onClick={()=>n('/contactus')}>
          Get in Touch
          <FaArrowRight style={{ marginLeft: '8px' }} />
        </ViewProductButton>
      </LeftSection>
      <RightSection>
        <ImageCarousel>
          <ImageOverlay>
            <CarouselTitle>Co-working Spaces</CarouselTitle>
            <CarouselSubtitle>
              We provide affordable co-working spaces for your productivity.
            </CarouselSubtitle>
          </ImageOverlay>
          {/* <ArrowButton direction="left">&#8249;</ArrowButton> */}
          {/* <ArrowButton direction="right">&#8250;</ArrowButton> */}
        </ImageCarousel>
      </RightSection>
    </HeroContainer>
  );
};

export default CoWorkHero2;

// --- Styled Components ---

const HeroContainer = styled.div`
  display: flex;
  min-height: 80vh;
  background-color: #002d2c;
  color: white;
  font-family: Arial, sans-serif;

  @media(max-width:768px){
//   flex-direction:column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 4rem;
//   background-color: #0d461a;
 background-color:#2f5f9bff;

`;

const Subtitle = styled.h4`
  color: #c9e0c3;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  max-width: 450px;
  margin-bottom: 2rem;
  border-bottom: 2px solid white;
  padding-bottom: 2rem;
`;

const ViewProductButton = styled.button`
  background-color: white;
  color: #2f5f9bff;;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightgray;
    color:white;
  }
`;

const RightSection = styled.div`
  flex: 2;
  position: relative;
  background-color: #f0f0f0;
  overflow: hidden;

  @media(max-width:768px){
  display:none;
  }
`;

const ImageCarousel = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${sp}); /* Replace with your actual image URL */
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CarouselTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const CarouselSubtitle = styled.p`
  color: white;
  font-size: 1.1rem;
  max-width: 600px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === 'left' ? 'left: 20px;' : 'right: 20px;')}
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;