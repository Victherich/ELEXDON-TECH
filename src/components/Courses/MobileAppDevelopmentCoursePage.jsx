import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaMobileAlt, FaClock, FaMapMarkerAlt, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import coursebg from '../../Images2/coursebg.jpg'; // Assuming the image path is correct

// --- Keyframe Animations (Copied from WebDevelopmentCourse) ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

// --- Styled Components (Adapted from WebDevelopmentCourse) ---

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
  max-width: 1000px; /* Constraint to match overall layout, if desired */
  margin-left: auto;
  margin-right: auto;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
    color: #333; /* Dark text for readability on light background */
  }
`;

const TrainingDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  max-width: 1000px; /* Constraint to match overall layout, if desired */
  margin-left: auto;
  margin-right: auto;
`;

const DetailCard = styled.div`
  background: rgba(255,255,255,0.8); /* Semi-transparent white background */
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: left;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};

  h3 {
    color: #007AFF;
    font-size: 1.6rem;
    margin-bottom: 15px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 10px 0 0;
  }

  li {
    margin-bottom: 8px;
    color: #333; /* Dark text for readability on light background */
    font-size: 0.95rem;
    line-height: 1.6;
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

const RequirementList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  max-width: 1000px; /* Constraint to match overall layout, if desired */
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

const MobileAppDevelopmentCoursePage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    // Navigate to your course registration page
    navigate('/courseregistration'); // Or '/contact-us' if that's where your form is
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>Mobile App Development</h1>
        <p>
          Dive into the exciting world of mobile application development. Learn to build powerful and intuitive apps for Android, from basic concepts to advanced techniques, with practical, project-oriented training.
        </p>
      </HeroSection>

      <SectionTitle>ABOUT THE TRAINING</SectionTitle>
      <OverviewContent>
        <p>
          This training will teach you the basic Android programming and will also take you through some advanced concepts related to Android application development. The ANDROID APP DEVELOPMENT TRAINING is organized by the programming team at Elexdon Technologies Limited so it is a practical oriented training class.
        </p>
        <p>
          There will be a tutor-led section, a class programming session, and a project development section. Every student will be expected to complete a project using the techniques learned during the training. All graduates will benefit from free consultation service from Elexdon Technologies Limited.
        </p>
      </OverviewContent>

      <SectionTitle>TRAINING SCHEDULE & VENUE</SectionTitle>
      <TrainingDetailsGrid>
        <DetailCard delay="0.8s">
          <h3><FaClock /> Weekday Training</h3>
          <ul>
            <li><strong>Time:</strong> 9:00am - 2:00pm</li>
            <li><strong>Date:</strong> [To be announced, contact us for next start date]</li>
          </ul>
        </DetailCard>
        <DetailCard delay="1s">
          <h3><FaClock /> Weekend Training</h3>
          <ul>
            <li><strong>Time:</strong> 10:00am - 5:00pm</li>
            <li><strong>Date:</strong> [To be announced, contact us for next start date]</li>
          </ul>
        </DetailCard>
        <DetailCard delay="1.2s">
          <h3><FaMapMarkerAlt /> Training Venue</h3>
          {/* The German text here seems misplaced and irrelevant to a training venue.
              I'm keeping it as per your input but highly recommend removing it. */}
    
          <p>
            <strong>Elexdon Technologies Limited</strong><br />
            Address: Suite 13 Lakobs Plaza Enoma Bustop Ago Palace Way<br />
            Okota, Lagos.
          </p>
        </DetailCard>
      </TrainingDetailsGrid>

      <SectionTitle>SKILL & HARDWARE REQUIREMENTS</SectionTitle>
      <RequirementList>
        <RequirementItem delay="0.8s">
          <span className="icon">✅</span>
          <div>
            <h3>Basic Programming Skill Required</h3>
            <p>
              Basic programming skill is required for this course. If you have no previous programming skills, we recommend taking an introductory course first or contacting us to discuss your options.
            </p>
          </div>
        </RequirementItem>
        <RequirementItem delay="1s">
          <span className="icon">✅</span>
          <div>
            <h3>Hardware Requirement</h3>
            <p>
              All students are expected to come for the training with a laptop that has a wireless LAN. Internet connection will be provided by Elexdon Technologies Limited.
            </p>
          </div>
        </RequirementItem>
        <RequirementItem delay="1.2s">
          <span className="icon">✅</span>
          <div>
            <h3>Software Requirement</h3>
            <p>
              All software needed for the training will be provided by Elexdon Technologies Limited.
            </p>
          </div>
        </RequirementItem>
      </RequirementList>

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO TAKE THE COURSE
      </CallToActionButton>
    </PageContainer>
  );
};

export default MobileAppDevelopmentCoursePage;