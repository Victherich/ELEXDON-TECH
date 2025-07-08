import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import bg from '../Images2/aboutbg.jpg'

// Import React Icons
import {
  FaBullseye,        // For Mission
  FaLightbulb,       // For Plan & Innovation
  FaEye,             // For Vision
  FaHeart,           // For Caring
  FaAward,           // For Excellence
  FaCheckCircle      // General purpose icon if needed
} from 'react-icons/fa';

// --- Keyframe Animations (Only those used for non-icon elements) ---

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const heroTextIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

// --- Styled Components ---

const HeroSection = styled.section`
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  background-image:url(${bg});
  background-size: cover;
  background-position: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:rgba(0,0,0,0.5);
    opacity: 1;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3.5rem, 7vw, 5.5rem);
  font-weight: 900;
  margin-bottom: 20px;
  text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
  opacity: 0;
  animation: ${heroTextIn} 1s ease-out forwards;
  animation-delay: 0.3s;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 30px auto;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  opacity: 0;
  animation: ${heroTextIn} 1s ease-out forwards;
  animation-delay: 0.6s;
`;

const SectionWrapper = styled.section`
  background: linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%);
  color: #2C3E50;
  padding: 80px 20px;
  text-align: center;
  overflow: hidden;
  position: relative;

  h2 {
    font-size: clamp(2.2rem, 4.5vw, 4rem);
    font-weight: 800;
    color: #007AFF;
    margin-bottom: 40px;
    opacity: 0;
    animation: ${fadeInUp} 1s ease-out forwards;
    animation-delay: 0.2s;
  }
`;

const CoreValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ValueCard = styled.div`
  background: #FFFFFF;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(0, 122, 255, 0.05);
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  text-align: center;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
    border-color: rgba(0, 122, 255, 0.2);
  }
`;

const ValueIconContainer = styled.div`
  font-size: 5rem;
  color: #007AFF;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 15px rgba(0, 122, 255, 0.5));
`;

const ValueTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 15px;
`;

const ValueDescription = styled.p`
  font-size: 1.1rem;
  color: #5D6D7E;
  line-height: 1.7;
`;

const CoreSection = styled.div`
  display: flex;
  flex-direction: ${props => props.$reverse ? 'row-reverse' : 'row'};
  align-items: center;
  max-width: 1100px;
  margin: 60px auto;
  padding: 40px;
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  opacity: 0;
  animation: ${scaleIn} 1s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CoreIconWrapper = styled.div`
  flex-shrink: 0;
  font-size: 8rem;
  color: #007AFF;
  margin: 0 40px;
 

  @media (max-width: 900px) {
    margin-bottom: 30px;
    font-size: 6rem;
  }
`;

const CoreContent = styled.div`
  flex-grow: 1;
  padding: 0 20px;

  h3 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: #2C3E50;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.15rem;
    color: #5D6D7E;
    line-height: 1.8;
  }
`;


const AboutUs = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>About Us</HeroTitle>
          <HeroSubtitle>
            Elexdon: A world-class integrated web solution provision company with a track record of success in tech services. We develop and offer a flexible range of solutions development and services.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <SectionWrapper>
        <h2 style={{ animationDelay: '0.8s' }}>Our Story & Purpose</h2>

        <CoreSection delay="1s">
          <CoreIconWrapper> {/* Removed delay prop as it's not needed without animation */}
            <FaBullseye />
          </CoreIconWrapper>
          <CoreContent>
            <h3>Our Mission</h3>
            <p>
              To contribute immensely to the socio-economic development of Nigeria by empowering individuals or Corporate bodies with the right ICT skills needed to boost their career opportunity. Provide the Citizens with ICT training Solutions in the contemporary information and Communication Technologies at 'Value for Money' prices so that Nigeria progresses rapidly to emerge at par with the developed economies of the world.
            </p>
          </CoreContent>
        </CoreSection>

        <CoreSection $reverse delay="1.4s">
          <CoreIconWrapper> {/* Removed delay prop */}
            <FaLightbulb />
          </CoreIconWrapper>
          <CoreContent>
            <h3>Our Plan</h3>
            <p>
              Elexdon Digital Technologies is Your Partner for Digital Success. We offer Computer training to individuals, businesses, institutions and religious Organizations with our expert and experienced professional team.
            </p>
          </CoreContent>
        </CoreSection>

        <CoreSection delay="1.8s">
          <CoreIconWrapper> {/* Removed delay prop */}
            <FaEye />
          </CoreIconWrapper>
          <CoreContent>
            <h3>Our Vision</h3>
            <p>
              Our Vision is to be the foremost provider of ICT training in Nigeria; in order to achieve this vision, we believe we need the right values to propel the students/organizations to the forefront of ICT training industry in Nigeria; our values therein are integrity, innovation & Culture of Responsibility.
            </p>
          </CoreContent>
        </CoreSection>

        <h2 style={{ marginTop: '80px', animationDelay: '2.2s' }}>Our Core Values</h2>
        <CoreValuesGrid>
          <ValueCard delay="2.4s">
            <ValueIconContainer> {/* Removed delay prop */}
              <FaHeart />
            </ValueIconContainer>
            <ValueTitle>We Are Caring</ValueTitle>
            <ValueDescription>
              Everyone and everything matters in the society and in the world. We care for everyone irrespective of their association with us.
            </ValueDescription>
          </ValueCard>

          <ValueCard delay="2.7s">
            <ValueIconContainer> {/* Removed delay prop */}
              <FaLightbulb />
            </ValueIconContainer>
            <ValueTitle>Innovation</ValueTitle>
            <ValueDescription>
              Change is the only constant, therefore ELEXDON DIGITAL TECHNOLOGIES always strives for innovation to discover new and better opportunities that promote an inclusive and sustainable growth environment.
            </ValueDescription>
          </ValueCard>

          <ValueCard delay="3s">
            <ValueIconContainer> {/* Removed delay prop */}
              <FaAward />
            </ValueIconContainer>
            <ValueTitle>Excellence</ValueTitle>
            <ValueDescription>
              Something which lies ahead of Best is Excellence, and achieving that has always been a primary driving force for everyone at ELEXDON DIGITAL TECHNOLOGIES LIMITED.
            </ValueDescription>
          </ValueCard>
        </CoreValuesGrid>
      </SectionWrapper>
    </>
  );
};

export default AboutUs;