
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBullhorn, FaFacebook, FaGoogle, FaLinkedin, FaYoutube, FaEnvelope, FaBlog, FaChartBar, FaTwitter, FaMapMarkerAlt, FaCheckCircle, FaLightbulb } from 'react-icons/fa';
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

const CourseModuleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
  max-width: 1000px; /* Consistent max width */
  margin-left: auto;
  margin-right: auto;
`;

const ModuleCard = styled.div`
  background: rgba(255,255,255,0.8); /* Semi-transparent white background */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 3rem;
    color: #007AFF;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.2rem;
    color: #333;
    font-weight: 600;
    margin-bottom: 0;
  }
`;

const SubModuleList = styled.ul`
  list-style: none; /* Remove default bullet points */
  padding: 0;
  margin: 0;
  display: grid; /* Use grid for layout */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* 2 columns on larger screens */
  gap: 10px 20px; /* Row and column gap */
  max-width: 1000px; /* Consistent max width */
  margin-left: auto;
  margin-right: auto;
`;

const SubModuleItem = styled.li`
  background: rgba(255,255,255,0.8);
  border-left: 4px solid #007AFF; /* Accent border */
  border-radius: 8px;
  padding: 15px 20px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.04);
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
    color: #28a745; /* Green checkmark */
    font-size: 1.2rem;
    flex-shrink: 0;
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

const DigitalMarketingCoursePage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    navigate('/courseregistration'); // Or the appropriate registration path
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>Digital Marketing</h1>
        <p>
          Master the art of online promotion and digital advertising. This practical training shows you how to effectively market goods and services across various online platforms.
        </p>
      </HeroSection>

      <SectionTitle>ABOUT THE TRAINING</SectionTitle>
      <OverviewContent>
        <p>
          This **ONLINE MARKETING & DIGITAL ADVERTISING COURSE** is packaged and organized by the Online Marketing team at Elexdon Technologies Limited, making it a practical-oriented training geared toward showing participants how to use the online media for marketing their services and goods.
        </p>
        <p>
          There will be a **tutor-led section**, a **discussion section**, and also a **practical section**. Participants are encouraged to come with their laptop and a credit card (Naira MasterCard will be OK) for the practical exercises.
        </p>
      </OverviewContent>

      <SectionTitle>WHAT WILL BE TAUGHT (CORE TOPICS)</SectionTitle>
      <OverviewContent>
        {/* Keeping the Spanish text as per your original input, but strongly advise review/removal */}
        <p className="foreign-text">
          La dhea ha sido identificada https://posee-farmaceutico.com/levitra-generico/ como una corteza de arbol de africa occidental durante los ultimos 70 anos aunque el riesgo de desempeno. Patologia de la disfuncion erectil diabetica la historia ilegítimo de la presion arterial, refrescos combinados junto con este medicamento y trastornos del corazón como arritmia cardiaca. Esta sustancia es un ingrediente activo de Kamagra que ha hecho la revolución en el tratamiento de los trastornos sexuales y que lo utilizaban como un tónico y la TBI también afecta el análisis.
          <br /><br />
          **Note:** This text appears to be unrelated to Digital Marketing and may be an accidental inclusion. Please review.
        </p>
      </OverviewContent>
      <CourseModuleGrid>
        <ModuleCard>
          <FaFacebook className="icon" />
          <h3>Facebook Ads</h3>
        </ModuleCard>
        <ModuleCard>
          <FaGoogle className="icon" />
          <h3>Google AdWords</h3>
        </ModuleCard>
        <ModuleCard>
          <FaLinkedin className="icon" />
          <h3>LinkedIn Advertising</h3>
        </ModuleCard>
        <ModuleCard>
          <FaYoutube className="icon" />
          <h3>YouTube Advertising</h3>
        </ModuleCard>
        <ModuleCard>
          <FaBullhorn className="icon" />
          <h3>Marketing Strategies</h3>
        </ModuleCard>
        <ModuleCard>
          <FaBlog className="icon" />
          <h3>Blogging</h3>
        </ModuleCard>
        <ModuleCard>
          <FaChartBar className="icon" />
          <h3>Web Analytics</h3>
        </ModuleCard>
        <ModuleCard>
          <FaEnvelope className="icon" />
          <h3>Email Marketing</h3>
        </ModuleCard>
        <ModuleCard>
          <FaTwitter className="icon" />
          <h3>Twitter Advertising</h3>
        </ModuleCard>
      </CourseModuleGrid>

      <SectionTitle>WHAT WILL BE LEARNT (DETAILED TOPICS)</SectionTitle>
      <SubModuleList>
        <SubModuleItem><FaCheckCircle className="icon" /> Digital Marketing Fundamentals</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Model Buyer Personae Development</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Social Media Marketing Strategies</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Content Marketing Essentials</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Facebook Marketing Deep Dive</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Google Remarketing & AdWords Mastery</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Twitter Viral Marketing Techniques</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> LinkedIn B2B Marketing</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Video Marketing via YouTube</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Video Content Monetization on YouTube</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Content Marketing via Nairaland</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Advertising Email Marketing Campaigns</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Tips for Landing Page Design</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Blogging for Business</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Content Marketing Monetization of Blog</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Search Engine Optimization (SEO)</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Web Analytics for Performance Tracking</SubModuleItem>
        <SubModuleItem><FaCheckCircle className="icon" /> Real-world Case Studies</SubModuleItem>
      </SubModuleList>

      <SectionTitle>TRAINING VENUE</SectionTitle>
      <RequirementList> {/* Reusing RequirementList for consistent card style */}
        <RequirementItem>
          <span className="icon"><FaMapMarkerAlt /></span>
          <div>
            <h3>Elexdon Technologies Limited</h3>
            <p>
              Address: Suite 13, Lakobs Plaza Enoma Ago Palace way, OKota, Lagos.
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

export default DigitalMarketingCoursePage;