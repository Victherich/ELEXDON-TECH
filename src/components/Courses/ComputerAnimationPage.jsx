
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLaptopCode, FaCube, FaPaintBrush, FaVideo, FaGraduationCap, FaCheckCircle, FaIndustry, FaLightbulb, FaCameraRetro } from 'react-icons/fa';
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

const IconListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const IconListItem = styled.div`
  background: rgba(255,255,255,0.8);
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
    font-size: 2rem;
    color: #007AFF;
    flex-shrink: 0;
    margin-top: 5px;
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

const ComputerAnimationPage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    navigate('/courseregistration'); // Or the appropriate registration path
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>Computer Animation Training</h1>
        <p>
          Unleash your creativity in 3D modeling and animation. Our comprehensive course covers everything from foundational skills to advanced professional techniques in Autodesk Maya and ZBrush.
        </p>
      </HeroSection>

      <SectionTitle>ABOUT THE TRAINING</SectionTitle>
      <ContentCard>
        <h3><FaVideo /> Course Structure</h3>
        <p>
          The course is divided into three sections: **3D Modelling & Animations Fundamental**, **Digital Sculpting Fundamental**, and **Professional courses with areas of specialization**.
        </p>
        <p>
          The **Fundamental courses** are the starting point for any beginner and are designed to cover all the foundational skills required to create and animate engaging 3D objects.
        </p>
        <p>
          The **Advanced courses** are designed for professionals who have previously understood the basics of modeling, sculpting, and animations with Autodesk Maya and ZBrush.
        </p>

        <h3><FaLaptopCode /> Core Maya Skills Covered</h3>
        <p>
          The course covers core Maya skills such as modeling, texturing, rendering, and animation. It starts with the basics of selecting and manipulating objects and organizing scenes, as you learn the interface and explore Maya’s features. The course takes you through polygonal modeling, creating and refining meshes, sculpting, and NURBS modeling. The course will also teach you how to create and apply materials to surfaces, adding color, texture, and reflectivity. The course also delves into virtual cameras setup, lighting, and depth-of-field effects into the rendering process, using the built-in software renderer, Mental Ray, and the new Arnold for Maya renderer. The course will also teach you how to add movement and life to your work with Maya’s animation tools such as graph editor, HumanIK, Dope Sheet, etc.
        </p>
      </ContentCard>

      <SectionTitle>PREREQUISITE</SectionTitle>
      <ContentCard delay="0.8s">
        <h3><FaGraduationCap /> Basic Computer Literacy</h3>
        <p>
          Intending students for this course must have the fundamental skill of the working of Microsoft or Mac operating systems and must be able to navigate around the computer. No prior animation experience is required for fundamental courses.
        </p>
      </ContentCard>

      <SectionTitle>CAREER INDUSTRIES</SectionTitle>
      <ContentCard delay="1s">
        <h3><FaIndustry /> Where Animators & Modelers Work</h3>
        <p>Animators, Modelers, and Riggers work primarily in the following industries:</p>
        <ul>
          <li><FaCheckCircle className="icon" /> Motion Picture and Broadcasting Industries</li>
          <li><FaCheckCircle className="icon" /> Advertising, Public Relations, and Related Services</li>
          <li><FaCheckCircle className="icon" /> Computer Systems Design and Related Services</li>
          <li><FaCheckCircle className="icon" /> Specialized Design Services</li>
          <li><FaCheckCircle className="icon" /> Aerospace Product and Parts Manufacturing</li>
          <li><FaCheckCircle className="icon" /> Animation Production Studios</li>
          <li><FaCheckCircle className="icon" /> Film and Video Production Facilities</li>
          <li><FaCheckCircle className="icon" /> Automobile Conceptualization and Design</li>
          <li><FaCheckCircle className="icon" /> Gaming Companies</li>
          <li><FaCheckCircle className="icon" /> Cartoon Networks</li>
          <li><FaCheckCircle className="icon" /> Advertising Agencies</li>
          <li><FaCheckCircle className="icon" /> Web Design Firms</li>
          <li><FaCheckCircle className="icon" /> Graphic Design Firms</li>
          <li><FaCheckCircle className="icon" /> Mobile Technology Companies</li>
          <li><FaCheckCircle className="icon" /> Training Modules Development</li>
          <li><FaCheckCircle className="icon" /> Interior & Landscaping Design</li>
        </ul>
      </ContentCard>

      <SectionTitle>COURSE GOALS</SectionTitle>
      <ContentCard delay="1.2s">
        <h3><FaLightbulb /> What You Will Achieve</h3>
        <p>
          At the end of the course, students should be able to:
        </p>
        <ul>
          <li><FaCheckCircle className="icon" /> Model and apply texture to 3D objects.</li>
          <li><FaCheckCircle className="icon" /> Set up a rig on a character.</li>
          <li><FaCheckCircle className="icon" /> Perform motion path animation and character walk cycles.</li>
          <li><FaCheckCircle className="icon" /> Set up virtual cameras and apply lighting.</li>
          <li><FaCheckCircle className="icon" /> Render final work and composite for editing in Adobe Premiere Pro.</li>
        </ul>
        <p style={{marginTop: '20px'}}>
          This course prepares students for more advanced courses in character modeling and animation that treat complex animations such as facial rigging, lip-synching, motion capture, and advanced digital sculpting.
        </p>
      </ContentCard>

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO TAKE THE COURSE
      </CallToActionButton>
    </PageContainer>
  );
};

export default ComputerAnimationPage;