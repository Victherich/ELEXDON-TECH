
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGlobeAmericas, FaMapMarkedAlt, FaLaptopCode, FaCogs, FaSearchLocation, FaChartLine, FaUsers, FaGraduationCap, FaNetworkWired, FaCheckCircle, FaBookOpen } from 'react-icons/fa';
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

  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;
  }

  li {
    background: rgba(0, 122, 255, 0.05); /* Light blue background for list items */
    border-left: 4px solid #007AFF;
    padding: 12px 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
    color: #333;
  }

  li .icon {
    color: #007AFF;
  }
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  max-width: 1000px; /* Consistent max width for content sections */
  margin-left: auto;
  margin-right: auto;
`;

const CourseCategoryCard = styled.div`
  background: rgba(255,255,255,0.8); /* Semi-transparent white background */
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: left;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  display: flex;
  flex-direction: column;

  h3 {
    color: #007AFF; /* Blue heading for categories */
    font-size: 1.6rem;
    margin-bottom: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1; /* Allows list to take available space */
  }

  li {
    font-size: 1.05rem;
    color: #333;
    margin-bottom: 10px;
    padding-left: 25px; /* Space for custom bullet */
    position: relative;
    line-height: 1.5;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: '•'; /* Custom bullet point */
      color: #28a745; /* Green bullet */
      font-size: 1.5em;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .foreign-text {
    font-style: italic;
    color: #e74c3c; /* Red color to highlight it as an error/placeholder */
    font-weight: bold;
    margin-top: 10px;
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

const GeographicInformationSystemPage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    navigate('/courseregistration'); // Or the appropriate registration path
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>Geographic Information System (GIS) & GPS Technology Training</h1>
        <p>
          Unlock the power of location intelligence. Elexdon Digital Technologies Limited provides comprehensive training from basic to advanced levels in GIS and GPS applications for engineering, construction, and planning.
        </p>
      </HeroSection>

      <SectionTitle>ABOUT THE TRAINING</SectionTitle>
      <OverviewContent>
        <p>
          Elexdon Digital Technologies Limited provides a wide range of training on the use and application of GPS technology to your engineering, construction and planning projects. From basic to advanced training, we offer you the best in terms of practical, accessibility to equipment and software, and unlimited technical support if we train you or purchase your GPS units from our Company.
        </p>
        <p>
          Most users of GPS have not explored and used 25% of the functionalities of a GPS unit. EDT Ltd. will make you an advanced user of GPS both for mapping, surveying, navigation or recreation.
        </p>
        <ul>
          <li><FaCheckCircle className="icon" /> DGPS Survey</li>
          <li><FaCheckCircle className="icon" /> Fixing Ground Control Points</li>
          <li><FaCheckCircle className="icon" /> Using DGPS anywhere/anytime</li>
          <li><FaCheckCircle className="icon" /> GIS Consulting</li>
          <li><FaCheckCircle className="icon" /> GIS Application Development</li>
          <li><FaCheckCircle className="icon" /> Geographical Information System</li>
        </ul>
      </OverviewContent>

      <SectionTitle>GEOSPATIAL TRAINING CATEGORIES</SectionTitle>
      <CourseGrid>
        <CourseCategoryCard delay="0.6s">
          <h3><FaGraduationCap /> General GIS Courses</h3>
          <ul>
            <li>Introduction to GIS and ArcGIS</li>
            <li>Intermediate Course in GIS and ArcGIS (Analysis Tools and Geo-Processing)</li>
            <li>Advanced Course in GIS and ArcGIS: (Spatial Decision Support System)</li>
            <li>Introduction to QGIS (Quantum GIS)</li>
            <li>Fundamentals of Google Earth Pro</li>
            <li>Learning ArcGIS Pro 1: Maps And Projects</li>
            <li>Learning ArcGIS Pro 2: Editing, Analysis, And Automation</li>
            <li>Learning ArcGIS Pro 3: Converting, Linking And Analyzing Data</li>
            <li>Learning ArcGIS Pro 4: Sharing Your Maps And Data</li>
          </ul>
        </CourseCategoryCard>

        <CourseCategoryCard delay="0.8s">
          <h3><FaLaptopCode /> Custom Courses (Specialized Topics)</h3>
          {/* Keeping the Spanish text as per your original input, but strongly advise review/removal */}
        
          <ul>
            <li>GIS for Epidemiology and Public Health</li>
            <li>GIS for Monitoring and Evaluation Using QGIS</li>
            <li>GIS for Urban and Regional Planning Solutions</li>
            <li>GIS for Crime Mapping and Public Safety</li>
            <li>Intermediate Crime Mapping and Analysis Using ArcGIS 10x</li>
            <li>Advanced Crime Mapping and Analysis Using ArcGIS 10x</li>
          </ul>
        </CourseCategoryCard>

        <CourseCategoryCard delay="1s">
          <h3><FaNetworkWired /> Other Relevant Courses</h3>
          <ul>
            <li>Mobile Data Collection for Research & Survey</li>
            <li>Custom Courses (as per client needs)</li>
            <li>AUTOCAD Courses</li>
          </ul>
        </CourseCategoryCard>
      </CourseGrid>

      <SectionTitle>TRAINING DELIVERY METHODS</SectionTitle>
      <CourseGrid>
        <CourseCategoryCard delay="0.6s">
          <h3><FaUsers /> Scheduled Training</h3>
          <ul>
            <li>Our regularly scheduled classes at our company GIS Training facility are designed to provide adequate GIS training to interested persons who have the time to attend classes at our GIS Lab.</li>
          </ul>
        </CourseCategoryCard>
        <CourseCategoryCard delay="0.8s">
          <h3><FaBookOpen /> Custom Classes (Tailored Programs)</h3>
          <ul>
            <li>GIS for Epidemiology and Public Health</li>
            <li>GIS for Monitoring and Evaluation Using QGIS</li>
            <li>GIS for Urban and Regional Planning Solutions</li>
            <li>GIS for Crime Mapping and Public Safety</li>
            <li>Intermediate Crime Mapping and Analysis Using ArcGIS 10x</li>
            <li>Advanced Crime Mapping and Analysis Using ArcGIS 10x</li>
          </ul>
        </CourseCategoryCard>
      </CourseGrid>

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO TAKE THE COURSE
      </CallToActionButton>
    </PageContainer>
  );
};

export default GeographicInformationSystemPage;