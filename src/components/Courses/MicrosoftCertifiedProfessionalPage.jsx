
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMicrosoft, FaCertificate, FaLaptopCode, FaCogs, FaCheckCircle, FaUserTie, FaNetworkWired, FaBookOpen } from 'react-icons/fa';
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

const MicrosoftCertifiedProfessionalPage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    navigate('/courseregistration'); // Or the appropriate registration path
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>Become a Microsoft Certified Professional</h1>
        <p>
          Elevate your IT career with Microsoft Certifications. Validate your expertise and join a global community of skilled professionals.
        </p>
      </HeroSection>

      <SectionTitle>WHAT IS MICROSOFT CERTIFIED PROFESSIONAL (MCP)?</SectionTitle>
      <ContentCard>
        <h3><FaCertificate /> Understanding MCP Certification</h3>
        <p>
          The **Microsoft Certified Professional (MCP)** certification validates IT professional and developer technical expertise through rigorous, industry-proven, and industry-recognized exams. MCP exams cover a wide range of Microsoft products, technologies, and solutions.
        </p>
        <p>
          **Note:** As of the current date (July 2025), the standalone Microsoft Certified Professional (MCP) certification is no longer an active program. Passing an MCP exam will be added to your transcript, but full program benefits may be tied to earning a complete certification path.
        </p>
        <p>
          You can review all current certifications associated with the Microsoft Certification Program on the <a href="https://learn.microsoft.com/en-us/credentials/" target="_blank" rel="noopener noreferrer" style={{color: '#007AFF', fontWeight: 'bold'}}>Microsoft Technical Certifications page</a>.
        </p>
      </ContentCard>

      <SectionTitle>BENEFITS & CERTIFICATION PATHS</SectionTitle>
      <ContentCard delay="0.8s">
        <h3><FaUserTie /> Benefits of Certification</h3>
        <p>
          When you pass your first qualifying MCP exam, you automatically become a Microsoft Certified Professional and gain access to MCP benefits. You also join a community of millions of MCPs, with thousands more joining every month.
        </p>
        <p>
          After you become an MCP, you’re on your way to distinguishing yourself through expert certifications including:
        </p>
        <ul>
          <li><FaCheckCircle className="icon" /> **Microsoft Certified Solutions Expert (MCSE)**</li>
          <li><FaCheckCircle className="icon" /> **Microsoft Certified Solutions Developer (MCSD)**</li>
        </ul>

        <h3 style={{marginTop: '40px'}}><FaBookOpen /> Qualifying Exams</h3>
        <p>
          **MCP-qualifying exams** include all of the exams required in the **Microsoft Certified Solutions Associate (MCSA)**, **MCSE**, and **MCSD certifications**.
        </p>
        <p>
          **Important:** Microsoft Technology Associate (MTA) exams and Microsoft Office Specialist (MOS) exams do not qualify for standalone MCP certification.
        </p>
      </ContentCard>

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO EXPLORE CERTIFICATION TRAINING
      </CallToActionButton>
    </PageContainer>
  );
};

export default MicrosoftCertifiedProfessionalPage;