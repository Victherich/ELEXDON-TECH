
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLaptopCode, FaChartLine, FaBookOpen, FaMoneyBillWave, FaBalanceScale } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import coursebg from '../../Images2/coursebg.jpg'; // Assuming the image path is correct

// --- Keyframe Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

// --- Styled Components ---

const PageContainer = styled.div`
  box-sizing: border-box;
  padding: 50px 10px; /* Adjust padding for fixed header */
  width: 100%;
  background-image: url(${coursebg});
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center; /* Centers the background image */
  background-attachment: fixed; /* Makes the background fixed while scrolling */
  min-height: 100vh; /* Ensures it takes at least the full viewport height */
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  color: #333; /* Default text color for elements not in cards */
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.2s;

  h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    color: white; /* Changed for contrast against background image */
    margin-bottom: 20px;
    font-weight: 800;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.9); /* Stronger shadow for readability */
  }

  p {
    font-size: clamp(1rem, 2vw, 1.3rem);
    color: white; /* Changed for contrast against background image */
    line-height: 1.7;
    max-width: 800px;
    margin: 0 auto;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.7); /* Shadow for readability */
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: white; /* Changed for contrast */
  text-align: center;
  margin: 60px 0 40px;
  font-weight: 700;
  position: relative;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.4s;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.9); /* Stronger shadow */

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #007AFF;
    margin: 15px auto 0;
    border-radius: 2px;
  }
`;

const ContentCard = styled.div`
  background: rgba(255,255,255,0.8); /* Semi-transparent white background */
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  margin-bottom: 60px;
  animation: ${scaleUp} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0.6s'};
  max-width: 1000px; /* Consistent max width for content sections */
  margin-left: auto;
  margin-right: auto;
  text-align: left; /* Ensure text is left-aligned within card */

  h3 {
    font-size: 1.8rem;
    color: #007AFF;
    margin-bottom: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
    color: #333; /* Dark text for readability on light background */
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px 20px; /* Row and column gap */
  }

  li {
    font-size: 1rem;
    color: #333;
    margin-bottom: 5px;
    padding-left: 30px; /* Space for icon */
    position: relative;
    line-height: 1.6;

    .icon {
      position: absolute;
      left: 0;
      top: 5px;
      font-size: 1.2rem;
      color: #28a745; /* Green checkmark for lists */
    }
  }
`;

const CallToActionButton = styled.button`
  display: block;
  margin: 60px auto 40px;
  padding: 18px 40px;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(45deg, #007AFF, #00D1FF); /* Gradient background */
  border: none;
  border-radius: 50px; /* Pill shape */
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 122, 255, 0.4);
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.8s;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 122, 255, 0.6);
    background: linear-gradient(45deg, #00D1FF, #007AFF); /* Reverse gradient on hover */
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 20px rgba(0, 122, 255, 0.3);
  }
`;

const AccountingSoftwarePage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    navigate('/courseregistration'); // Or the appropriate registration path
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>Accounting Software Training: Sage 50 / Peachtree</h1>
        <p>
          Master Sage 50 / Peachtree Accounting software. Our courses are designed to help you leverage advanced functionalities and manage your accounts efficiently, whether you're a beginner or an experienced user.
        </p>
      </HeroSection>

      <SectionTitle>ABOUT SAGE 50 / PEACHTREE TRAINING</SectionTitle>
      <ContentCard>
        <h3><FaMoneyBillWave /> Course Description</h3>
        <p>
          Searching for Sage 50 or Peachtree Accounting software training? Then don’t look any further! Our Sage 50 Accounts software training classes are designed for individuals who are seeking to get the most out of their Sage 50 Accounts Software package.
        </p>
        <p>
          These courses will teach you how to master Sage 50/Peachtree software and leverage the advanced functionality that will help you do more in less time.
        </p>
        <p>
          Whether you are a complete novice or experienced user, there is a Sage 50 Accounts training course that is specifically suited to enhance your abilities with the software!
        </p>
      </ContentCard>

      <SectionTitle>OUR TRAINING COURSES</SectionTitle>
      <ContentCard delay="0.8s">
        <h3><FaBookOpen /> Sage 50 / Peachtree Accounting Software Modules</h3>
        <ul>
          <li><FaBalanceScale className="icon" style={{color: '#007AFF'}} /> Sage 50/Peachtree Introduction Training Class</li>
          <li><FaBalanceScale className="icon" style={{color: '#007AFF'}} /> Sage 50/Peachtree Intermediate Training Class</li>
          <li><FaBalanceScale className="icon" style={{color: '#007AFF'}} /> Sage 50/Peachtree Advanced Training Class</li>
        </ul>
      </ContentCard>

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO TAKE THE COURSE
      </CallToActionButton>
    </PageContainer>
  );
};

export default AccountingSoftwarePage;