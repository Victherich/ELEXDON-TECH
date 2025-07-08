
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTools, FaMicrochip, FaCogs, FaWindows, FaPlug, FaLockOpen, FaExclamationCircle } from 'react-icons/fa';
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

const OverviewContent = styled.div`
  background: rgba(255,255,255,0.8); /* Semi-transparent white background */
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  margin-bottom: 60px;
  animation: ${scaleUp} 0.8s ease-out forwards;
  animation-delay: 0.6s;
  max-width: 1000px; /* Consistent max width for content sections */
  margin-left: auto;
  margin-right: auto;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
    color: #333; /* Dark text for readability on light background */
  }
`;

const RequirementList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  max-width: 1000px; /* Consistent max width for content sections */
  margin-left: auto;
  margin-right: auto;
`;

const RequirementItem = styled.div`
  background: rgba(255,255,255,0.8); /* Semi-transparent white background */
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};

  .icon {
    font-size: 2.5rem;
    color: #28a745; /* Green for checkmark */
    flex-shrink: 0;
  }

  h3 {
    color: #333; /* Dark text for readability on light background */
    font-size: 1.4rem;
    margin-bottom: 10px;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333; /* Dark text for readability on light background */
  }

  .foreign-text {
    font-style: italic;
    color: #e74c3c; /* Red color to highlight it as an error/placeholder */
    font-weight: bold;
    margin-top: 10px;
  }
`;

const CourseContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
  max-width: 1000px; /* Consistent max width for content sections */
  margin-left: auto;
  margin-right: auto;
`;

const ContentItem = styled.div`
  background: rgba(255,255,255,0.8); /* Semi-transparent white background */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: flex-start;
  gap: 15px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 1.8rem;
    color: #007AFF;
    flex-shrink: 0;
  }

  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
    margin: 0;
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

const ComputerRepairsMaintenancePage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    navigate('/courseregistration'); // Or the appropriate registration path
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>Computer Repairs and Maintenance</h1>
        <p>
          Gain the essential skills to diagnose, troubleshoot, and repair computer systems. Our CompTIA A+ Certification Training Program prepares you for an in-demand career in IT support.
        </p>
      </HeroSection>

      <SectionTitle>ABOUT THE TRAINING</SectionTitle>
      <OverviewContent>
        <p>
          The **CompTIA A+ Certification** is an internationally recognized testing program sponsored by the Computing Technology Industry Association (CompTIA) that certifies the competency of entry-level service technicians in the computer industry.
        </p>
        <p>
          It lets employers know your achievement level and that you have the ability to do the job right because you have the knowledge, technical skills, and customer relations skills necessary for a successful computer service technician career.
        </p>
      </OverviewContent>

      <SectionTitle>PRE-REQUISITES</SectionTitle>
      <RequirementList>
        <RequirementItem delay="0.8s">
          <span className="icon">✅</span>
          <div>
            <h3>No Prior Knowledge Required</h3>
            <p>
              No knowledge of computer and/or IT is required to attend this program. This course is designed to take you from zero to hero in computer maintenance.
            </p>
            {/* Keeping the Spanish text as per your original input, but strongly advise review/removal */}
        
          </div>
        </RequirementItem>
      </RequirementList>

      <SectionTitle>COURSE CONTENT</SectionTitle>
      <OverviewContent>
        <p>
          The CompTIA A+ Certification is divided into two parts: **Core Hardware** and **Operational Systems Technologies**. Our CompTIA A+ Certification Training Program matches the requisites of both modules.
        </p>
      </OverviewContent>
      <CourseContentGrid>
        <ContentItem>
          <span className="icon"><FaMicrochip /></span>
          <p>Basic Components of PC</p>
        </ContentItem>
        <ContentItem>
          <span className="icon"><FaMicrochip /></span>
          <p>Motherboard and its Associate Features</p>
        </ContentItem>
        <ContentItem>
          <span className="icon"><FaPlug /></span>
          <p>PC Ports and Connectors</p>
        </ContentItem>
        <ContentItem>
          <span className="icon"><FaWindows /></span>
          <p>Operating System Technology</p>
        </ContentItem>
        <ContentItem>
          <span className="icon"><FaCogs /></span>
          <p>PC Assembly</p>
        </ContentItem>
        <ContentItem>
          <span className="icon"><FaCogs /></span>
          <p>PC Upgrading</p>
        </ContentItem>
        <ContentItem>
          <span className="icon"><FaTools /></span>
          <p>PC Maintenance</p>
        </ContentItem>
        <ContentItem>
          <span className="icon"><FaTools /></span>
          <p>Introduction to Trouble-shooting</p>
        </ContentItem>
        <ContentItem>
          <span className="icon"><FaLockOpen /></span>
          <p>Hacking of System Passwords</p>
        </ContentItem>
        <ContentItem>
          <span className="icon"><FaExclamationCircle /></span>
          <p>PC Problems and Solution</p>
        </ContentItem>
      </CourseContentGrid>

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO TAKE THE COURSE
      </CallToActionButton>
    </PageContainer>
  );
};

export default ComputerRepairsMaintenancePage;