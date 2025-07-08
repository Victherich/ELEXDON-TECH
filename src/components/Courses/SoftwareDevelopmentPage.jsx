
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLaptopCode, FaPhp, FaJs, FaAndroid, FaPython, FaCheckCircle } from 'react-icons/fa';
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

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  max-width: 1000px; /* Consistent max width for content sections */
  margin-left: auto;
  margin-right: auto;
`;

const CourseCard = styled.div`
  background: rgba(255,255,255,0.8); /* Semi-transparent white background */
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  animation: ${scaleUp} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Pushes button to bottom if content varies */
  text-align: center; /* Center content in cards */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  .icon {
    font-size: 4rem;
    color: #007AFF; /* Primary color for icons */
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.8rem;
    color: #2C3E50; /* Darker heading for readability */
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #555; /* Slightly lighter text for body */
    margin-bottom: 20px;
    flex-grow: 1; /* Allows text to expand and align buttons */
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

const SoftwareDevelopmentPage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    navigate('/courseregistration'); // Or the appropriate registration path
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>Software Development Training</h1>
        <p>
          Dive into the world of coding and application building with our comprehensive software development courses. From web apps to mobile solutions, we equip you with practical skills in leading technologies.
        </p>
      </HeroSection>

      <SectionTitle>OUR TRAINING PROGRAMS</SectionTitle>
      <CourseGrid>
        <CourseCard delay="0.6s">
          <FaPhp className="icon" />
          <h3>Software Development Training With PHP</h3>
          {/* Keeping the Spanish text as per your original input, but strongly advise review/removal */}
       
          <p>
            This is our foremost training in software development. The training is practice-oriented, with a tutor-led section, class programming sessions, and a project development session. Every student will be expected to complete a project using the techniques learned during the training.
          </p>
        </CourseCard>

        <CourseCard delay="0.8s">
          <FaJs className="icon" />
          <h3>Software Development Training With Javascript</h3>
          <p>
            During the course of this training, we will take an in-depth look at JavaScript and its ecosystem: React, Redux, Node.js, and MongoDB. Students will learn to build a full-stack JavaScript application that will be hosted live on Heroku. They will start with a blank editor and end with a web app.
          </p>
        </CourseCard>

        <CourseCard delay="1.0s">
          <FaAndroid className="icon" />
          <h3>Android Mobile App Development Training</h3>
          <p>
            This training is focused on teaching how to build an Android application from scratch. The skillset you will acquire in this training will help you in other aspects of Software Development. In this training, participants will learn Java, XML, SQLite, and the Android Framework.
          </p>
        </CourseCard>

        <CourseCard delay="1.2s">
          <FaPython className="icon" />
          <h3>Software Development Training With Python</h3>
          <p>
            Participants will learn how to build software using Python, Django Framework, and many more front-end technologies. Training will focus on using the latest version of Python. They will also learn Front-End technologies such as HTML 5, CSS 3, Bootstrap 4, JavaScript, and jQuery.
          </p>
        </CourseCard>
      </CourseGrid>

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO TAKE THE COURSE
      </CallToActionButton>
    </PageContainer>
  );
};

export default SoftwareDevelopmentPage;