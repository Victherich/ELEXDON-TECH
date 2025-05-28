// components/Hero.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import herobg from '../Images/herobg2.jpg'

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.2); }
  50% { box-shadow: 0 0 40px rgba(212, 175, 55, 0.6); }
`;

const backgroundScroll = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -1000px 0; }
`;

// Styled Components
const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: url(${herobg}) center/cover no-repeat fixed;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

const StarsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: url('/stars.gif') repeat;
  opacity: 0.1;
  animation: ${backgroundScroll} 60s linear infinite;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #ffffff;
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  background: linear-gradient(to right, #d4af37, #fff8dc);
  -webkit-background-clip: text;
  color: transparent;
  animation: ${float} 5s ease-in-out infinite;
`;

const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 1.3rem;
  color: #E6E6FF;
`;

const ButtonGroup = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButton = styled.a`
  padding: 15px 30px;
  font-size: 1rem;
  background: linear-gradient(to right, #f4c430, #fff8dc);
  border: none;
  border-radius: 50px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${pulse} 2.5s ease-in-out infinite;

  &:hover {
    background: #b983ff;
    color: #ffffff;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <StarsOverlay />
      <Content>
        <Title>ELEXDON HOST</Title>
        <Subtitle>Hosting That Glows. Power That Moves. Insanity in Performance.</Subtitle>
        <ButtonGroup>
          <CTAButton href="#">Get Started</CTAButton>
          <CTAButton href="#">Learn More</CTAButton>
        </ButtonGroup>
      </Content>
    </HeroSection>
  );
};

export default Hero;
