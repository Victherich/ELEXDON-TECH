
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPaintBrush, FaLaptopCode, FaBezierCurve,FaPencilRuler, FaPalette,FaVideo, FaFileImage, FaMagic, FaUserGraduate, FaLightbulb, FaMapMarkerAlt } from 'react-icons/fa';
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

  .foreign-text {
    font-style: italic;
    color: #e74c3c; /* Red color to highlight it as an error/placeholder */
    font-weight: bold;
    margin-top: 10px;
  }
`;

const TrainingVenueCard = styled(ContentCard)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    justify-content: center;
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

const GraphicsDesignPage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    navigate('/courseregistration'); // Or the appropriate registration path
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>Graphics Design Training</h1>
        <p>
          Unleash your creativity and master the latest industry techniques in graphic design. Learn hands-on with CorelDraw and Photoshop, guided by creative industry experts.
        </p>
      </HeroSection>

      <SectionTitle>ABOUT THE TRAINING</SectionTitle>
      <ContentCard>
        <h3><FaPaintBrush /> Course Overview</h3>
        <p>
          This training was developed by the graphic group at **Elexdon Technologies Ltd** and **De-Cafee Ventures** (creative design studios).
        </p>
        <p>
          The course outline contains the latest technologies and principles used in the industry by creative minds. Participants will learn hands-on and work on a project from an artistic point of view using **CorelDraw & Photoshop**.
        </p>
      </ContentCard>

      {/* <TrainingVenueCard delay="0.8s">
        <h3><FaMapMarkerAlt /> Training Venue</h3>
        <p>
          <strong>Elexdon Technologies Limited</strong>
          <br />
          Address: Suite 13 Lakobs Plaza Enoma Bustop Ago Palace Way
          <br />
          Okota, Lagos.
        </p>
      </TrainingVenueCard> */}

      <SectionTitle>COURSE OUTLINE: DAY BY DAY</SectionTitle>

      <ContentCard delay="1s">
        <h3><FaLightbulb /> DAY 1: RUDIMENTARY CLASS (Fundamentals)</h3>
        <ul>
          <li>What is Graphic Design?</li>
          <li>Elements & Principles of Design</li>
          <li>The role of sketching in the design process</li>
          <li>Practical Session: Drawing and Setting up an Artwork</li>
          <li>Understanding Layout / Pictorial Composition</li>
          <li>Typography principles</li>
          <li>Visual Communication strategies</li>
          <li>Problem-solving measures in design</li>
        </ul>
      </ContentCard>

      <ContentCard delay="1.2s">
        <h3><FaPencilRuler /> DAY 2: USING CORELDRAW TO DESIGN (Basics)</h3>
        <ul>
          <li>Fast facts & CorelDraw Basics</li>
          <li>The workspace (Actual versus Virtual tools)</li>
          <li>Drawing Basics (Working with shapes – trimming, welding, etc.)</li>
          <li>Practical Session: Drawing (2 hours 30 mins)</li>
        </ul>
      </ContentCard>

      <ContentCard delay="1.4s">
        <h3><FaPalette /> DAY 3: USING CORELDRAW TO DESIGN (Advanced)</h3>
        <ul>
          <li>Practical Session: Drawing (30 mins)</li>
          <li>Working with Text (Paragraph text versus Artistic text)</li>
          <li>Adding Color techniques</li>
          <li>Working with Picture(s)</li>
          <li>Practical Session: Designing a Business Card (2 hours 30 mins)</li>
        </ul>
      </ContentCard>

      <ContentCard delay="1.6s">
        <h3><FaMagic /> DAY 4: USING CORELDRAW TO DESIGN (Special Effects)</h3>
        <ul>
          <li>Practical Session: Drawing (30 mins)</li>
          <li>Saving your Work (Different File Formats)</li>
          <li>Special Effects: (Extrusion, Drop Shadow, Transparency, Text Wrap)</li>
          <li>Practical Session: Designing a Flyer (2 hours 30 mins)</li>
          <li>Software Limitations discussed</li>
        </ul>
      </ContentCard>

      <ContentCard delay="1.8s">
        <h3><FaFileImage /> DAY 5: USING PHOTOSHOP TO DESIGN (Fundamentals)</h3>
        <ul>
          <li>Practical Session: Drawing (30 mins)</li>
          <li>Fast facts & Photoshop Basics (Staying organized: Typical Adobe Experience)</li>
          <li>The Workspace (Actual versus Virtual tools) / Setting up Preferences</li>
          <li>Understanding Pixels</li>
          <li>Practical Session: What Photoshop Can Do (Working with layers, text, pictures)</li>
        </ul>
      </ContentCard>

      <ContentCard delay="2s">
        <h3><FaLaptopCode /> DAY 6: USING PHOTOSHOP TO DESIGN (Techniques)</h3>
        {/* Keeping the Spanish text as per your original input, but strongly advise review/removal */}
  
        <ul>
          <li>Practical Session: Drawing (30 mins)</li>
          <li>Practical Session: Picture Cropping (2 hours 30 mins)</li>
          <li>Saving your Work (Different File Formats)</li>
          <li>Drawing in Photoshop</li>
          <li>Using more than one software to carry out a design</li>
        </ul>
      </ContentCard>

      <ContentCard delay="2.2s">
        <h3><FaBezierCurve /> DAY 7: USING PHOTOSHOP TO DESIGN (Optimization & Advanced)</h3>
        <ul>
          <li>Practical Session: Drawing (30 mins)</li>
          <li>Practical Session: Preparing Pictures for Use (cropping, post-production effects, etc.)</li>
          <li>Image Optimization and Color Management</li>
          <li>Practical Session: Designing a Pixel-Perfect Web Banner / Saving for Web (1 hour)</li>
          <li>Using the various Photoshop Filters</li>
          <li>Painting in Photoshop</li>
          <li>Practical Session: Designing a Flyer (2 hours)</li>
        </ul>
      </ContentCard>

      <ContentCard delay="2.4s">
        <h3><FaVideo /> DAY 8: MOTION GRAPHICS (GIF ANIMATION) & WORKSHOP</h3>
        <ul>
          <li>Practical Session: Drawing (30 mins)</li>
          <li>Studying GIF Samples</li>
          <li>Understanding persistence of vision and how the human eye perceives motion</li>
          <li>Practical Session: Simple GIF Animation</li>
          <li>Brief Talk on Interpreting Design Briefs</li>
          <li>Creative Workshop (3 hours)</li>
        </ul>
      </ContentCard>

      <SectionTitle>SKILL REQUIREMENT</SectionTitle>
      <ContentCard delay="2.6s">
        <h3><FaUserGraduate /> Prerequisite for This Course</h3>
        <p>
          No previous design skill is required for this training, but all students are expected to have good computer usage skills.
        </p>
      </ContentCard>

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO TAKE THE COURSE
      </CallToActionButton>
    </PageContainer>
  );
};

export default GraphicsDesignPage;