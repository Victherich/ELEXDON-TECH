
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaDraftingCompass, FaBuilding, FaTools, FaUsers, FaCogs, FaMapMarkedAlt, FaIndustry, FaBolt, FaLaptopCode, FaPhone, FaRegBuilding, FaCheckCircle } from 'react-icons/fa';
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

  h3 {
    font-size: 1.8rem;
    color: #007AFF;
    margin-bottom: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 15px;
    text-align: left; /* Ensure heading is left-aligned within card */
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
    color: #333; /* Dark text for readability on light background */
    text-align: left;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;
  }

  li {
    font-size: 1.05rem;
    color: #333;
    margin-bottom: 10px;
    padding-left: 30px; /* Space for icon */
    position: relative;
    line-height: 1.6;
    text-align: left;

    &:last-child {
      margin-bottom: 0;
    }

    .icon {
      position: absolute;
      left: 0;
      top: 5px;
      font-size: 1.2rem;
      color: #28a745; /* Green checkmark for lists */
    }
  }

  .foreign-text {
    font-style: italic;
    color: #e74c3c; /* Red color to highlight it as an error/placeholder */
    font-weight: bold;
    margin-top: 10px;
  }
`;

const CourseModuleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ModuleItem = styled.div`
  background: rgba(0, 122, 255, 0.05); /* Light blue background */
  border-left: 4px solid #007AFF;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }

  .icon {
    color: #007AFF;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
`;

const ToolSetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ToolsetItem = styled.div`
  background: rgba(255,255,255,0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  .icon {
    font-size: 2.5rem;
    color: #28a745; /* Green for toolset icons */
  }

  strong {
    color: #333;
    font-size: 1.1rem;
  }

  p {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 0;
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

const ContactInfo = styled.div`
  background: rgba(255,255,255,0.8);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  margin-top: 40px;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  p {
    font-size: 1.1rem;
    color: #333;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .icon {
    color: #007AFF;
    font-size: 1.5rem;
  }
`;

const AutoCADArchiCADPage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    navigate('/courseregistration'); // Or the appropriate registration path
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>AUTOCAD 2D/3D & ARCHICAD Training</h1>
        <p>
          Master the industry-leading CAD and BIM software for architectural, engineering, and design projects. Our practical training takes you from beginner to advanced.
        </p>
      </HeroSection>

      <SectionTitle>AUTOCAD 2D/3D TRAINING</SectionTitle>
      <ContentCard>
        <h3><FaDraftingCompass /> About AutoCAD 2D/3D</h3>
        <p>
          AutoCAD is the leading app in CAD drafting, Architectural Design, and Engineering design/drafting around the world.
        </p>
        <p>
          Our **AUTOCAD 2D/3D training** is a practical training that takes you from scratch to an advanced level, equipping you with essential skills for various design disciplines.
        </p>

        <h3><FaCogs /> AutoCAD Course Modules</h3>
        <CourseModuleGrid>
          <ModuleItem><FaCheckCircle className="icon" /> Introduction to AutoCAD 2D Toolbar/Understanding Interface</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Application of Tools (Draw, Modify, Object Snap, Properties, Status, Command)</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Setting AutoCAD Drawing Limits</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Using AutoCAD tools to draw Circles, Polygons, Ellipses, Rectangles, etc.</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Modifying AutoCAD outlines (Trim, Extend, Copy, Move, Break, etc.)</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Introduction to Isometric Drawing</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Drawing, Dimensioning and Editing Isometric Drawing</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Introduction to AUTOCAD 3D</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> AutoCAD 3D Tools (Solid Editing, View, Modeling, View Style)</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Creating Solid Objects with AutoCAD 3D tools</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Using Extrude, Sweep, Revolve, Loft, 3D Rotate tools</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Rendering of Solid Objects</ModuleItem>
        </CourseModuleGrid>
      </ContentCard>

      <SectionTitle>ARCHICAD TRAINING</SectionTitle>
      <ContentCard delay="0.8s">
        <h3><FaBuilding /> About ArchiCAD</h3>
        <p>
          ARCHICAD is an architecture program using **BIM technology (Building Information Modeling)**. The BIM concept is based on the use of 3D modeling with construction information, which generates automatic drawings of floor plans, sections, facades, and details from the two-dimensional reading of the model.
        </p>
        <p>
          It offers specialized solutions for handling all common aspects of aesthetics and engineering during the whole design process of the built environment — buildings, interiors, urban areas, etc.
        </p>
      </ContentCard>

      <SectionTitle>AUTOCAD CIVIL 3D TRAINING</SectionTitle>
      <ContentCard delay="1s">
        <h3><FaMapMarkedAlt /> What is AutoCAD Civil 3D?</h3>
        <p>
          AutoCAD Civil 3D is a software that creates civil engineering design and documentation that supports **Building Information Modeling (BIM) workflows**.
        </p>
        <p>
          When you implement AutoCAD Civil 3D, it helps to understand project performance, maintain consistency in processes and data, and give a faster response to changes.
        </p>

        <h3><FaTools /> The Power of AutoCAD Civil 3D</h3>
        <p>
          In the past, engineers used to perform earthwork calculations manually; this usually takes a lot of time and effort in addition to the human’s errors expected. Using Civil 3D, such calculations can be performed easily in a very short period of time. In addition, Civil 3D produces printable and neat reports that can be presented to key people in your company.
        </p>
        <p>
          This AutoCAD Civil 3D training in Nigeria is geared toward providing learners with a solid grounding in AutoCAD Civil 3D software so that they can immediately be productive when using the software by providing an overview of the key concepts and the interface of AutoCAD Civil 3D.
        </p>

        <h3><FaLaptopCode /> AutoCAD Tool-sets Now Included with AutoCAD</h3>
        <ToolSetGrid>
          <ToolsetItem>
            <FaRegBuilding className="icon" />
            <strong>AUTOCAD ARCHITECTURE TOOLSET</strong>
            <p>Speed architectural design and drafting with an industry-specific toolset that includes 8,000+ intelligent objects and styles.</p>
          </ToolsetItem>
          <ToolsetItem>
            <FaBolt className="icon" />
            <strong>AUTOCAD ELECTRICAL TOOLSET</strong>
            <p>Efficiently create, modify, and document electrical controls systems with an industry-specific toolset for electrical design.</p>
          </ToolsetItem>
          <ToolsetItem>
            <FaIndustry className="icon" />
            <strong>AUTOCAD MECHANICAL TOOLSET</strong>
            <p>Design faster with an industry-specific toolset for mechanical engineering including 700,000+ intelligent parts and features.</p>
          </ToolsetItem>
          <ToolsetItem>
            <FaMapMarkedAlt className="icon" />
            <strong>AUTOCAD MAP 3D TOOLSET</strong>
            <p>Incorporate geographic information system and CAD data with an industry-specific toolset for GIS and 3D mapping.</p>
          </ToolsetItem>
        </ToolSetGrid>
      </ContentCard>

      <SectionTitle>REVIT ARCHITECTURE TRAINING</SectionTitle>
      <ContentCard delay="1.2s">
        <h3><FaRegBuilding /> About Revit Architecture</h3>
        {/* Keeping the Spanish text as per your original input, but strongly advise review/removal */}
      
        <p>
          Autodesk Revit Architecture is a robust architectural design and documentation software application created by Autodesk for architects and building professionals. The tools and features that make up Revit Architecture are specifically designed to support **Building Information Modeling (BIM) workflows**.
        </p>
        <p>
          We also provide training for Revit Architecture in any city in Nigeria.
        </p>
      </ContentCard>

      <SectionTitle>WHO IS THIS TRAINING FOR?</SectionTitle>
      <ContentCard delay="1.4s">
        <h3><FaUsers /> Target Audience</h3>
        <CourseModuleGrid> {/* Reusing grid for consistent layout of audience types */}
          <ModuleItem><FaCheckCircle className="icon" /> Surveyors</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Mechanical Engineers</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Planners</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Architect Engineers</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Civil Engineers</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Interior Designers</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> NYSC Corps Members</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Graduates/Trainees</ModuleItem>
          <ModuleItem><FaCheckCircle className="icon" /> Chemical Engineers</ModuleItem>
        </CourseModuleGrid>
        <p style={{marginTop: '20px', textAlign: 'center'}}>
          This training is ideal for anyone interested in **CAD drafting, Architectural Design, and Engineering design/drafting**.
        </p>
      </ContentCard>

      <ContactInfo>
        <p><FaPhone className="icon" /> Call us to register: 09015605175, 08185609702</p>
      </ContactInfo>

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO TAKE THE COURSE
      </CallToActionButton>
    </PageContainer>
  );
};

export default AutoCADArchiCADPage;