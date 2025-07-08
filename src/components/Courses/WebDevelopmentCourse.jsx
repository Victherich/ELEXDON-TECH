
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLaptopCode, FaTools, FaCode, FaBookOpen, FaGlobe } from 'react-icons/fa'; // Example icons
import { useNavigate } from 'react-router-dom';
import coursebg from '../../Images2/coursebg.jpg'

// --- Keyframe Animations ---
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

// --- Styled Components ---

const PageContainer = styled.div`

box-sizing:border-box;
  padding: 50px 10px; /* Adjust padding for fixed header */


width:100%;
background-image:url(${coursebg});
  margin: 0 auto;
  font-family: 'Poppins', sans-serif; /* Example font */
  color: #333;

`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.2s;

  h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    color: #007AFF;
    color:white;
    margin-bottom: 20px;
    font-weight: 800;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.9);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.3rem);
    color: white;
    line-height: 1.7;
    max-width: 800px;
    margin: 0 auto;
   
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: #007AFF;
  color:white;
  text-align: center;
  margin: 60px 0 40px;
  font-weight: 700;
  position: relative;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.4s;
   text-shadow: 2px 2px 8px rgba(0,0,0,0.9);

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
  background: #f9f9f9;
  background:rgba(255,255,255,0.7);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  margin-bottom: 60px;
  animation: ${scaleUp} 0.8s ease-out forwards;
  animation-delay: 0.6s;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 15px;
    color: #333;
  }
`;

const TrainingDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const DetailCard = styled.div`
  background: rgba(255,255,255,0.8);
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
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 10px 0 0;
  }

  li {
    margin-bottom: 8px;
    color: #333;
    font-size: 0.95rem;
  }
`;

const RequirementList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const RequirementItem = styled.div`
 background: rgba(255,255,255,0.8);
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
    color: #333;
    font-size: 1.4rem;
    margin-bottom: 10px;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }
`;

const ModuleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
`;

const ModuleCard = styled.div`
  background: rgba(255,255,255,0.8);
  border-left: 5px solid #007AFF;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  animation: ${scaleUp} 0.7s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #007AFF;
    font-size: 1.8rem;
    margin-bottom: 15px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #333;
  }

  /* Specific styling for the 'L’impiego...' sentence in CSS module */
  p.foreign-text {
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

const WebDevelopmentCourse = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    // Navigate to a contact or registration page, or an external form
    navigate('/courseregistration'); // Example path
    // Or window.location.href = 'https://your-registration-form.com';
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>Web Design & Development</h1>
        <p>
          Master the art and science of building captivating and functional websites from scratch. This comprehensive course covers everything from visual design to dynamic programming, preparing you for a thriving career in web development.
        </p>
      </HeroSection>

      <SectionTitle>COURSE OVERVIEW</SectionTitle>
      <OverviewContent>
        <p>
          This course is intended for individuals who desire to become a leading web designer, developer and web programmer so as to be able to determine the most effective way to present Web pages. To be successful in a career in Web application development and design, you must be creative and artistic, understand this technology, and be knowledgeable about the business.
        </p>
        <p>
          Web developers do their own coding by using scripting and programming languages such as XHTML, HTML, CSS, jQuery, JavaScript, ASP, JSP, PHP, COLD FUSION etc. and databases such as MySQL, ORACLE, SQL Server, etc.
        </p>
        <p>
          This course greatly prepares you as a programmer to do your own dynamic coding & web business.
        </p>
      </OverviewContent>


      <SectionTitle>TRAINING REQUIREMENTS</SectionTitle>
      <RequirementList>
        <RequirementItem delay="0.8s">
          <span className="icon">✅</span>
          <div>
            <h3>No Programming Experience</h3>
            <p>
              No previous coding (programming) experience is required for this training, as the training can be taken by somebody with zero skill in programming. The training will be so intense participants will end the training with skills they can use to develop world-class software.
            </p>
          </div>
        </RequirementItem>
        <RequirementItem delay="1s">
          <span className="icon">✅</span>
          <div>
            <h3>Good Computer Usage Skill</h3>
            <p>
              All students are expected to know how to navigate their way on a computer system, they should know how to create files, save files in a folder and be very familiar with their computer keyboard.
            </p>
          </div>
        </RequirementItem>
        <RequirementItem delay="1.2s">
          <span className="icon">✅</span>
          <div>
            <h3>Hardware Requirement</h3>
            <p>
              Students are expected to come for the training with a laptop that has Wireless LAN, minimum 2GB RAM, minimum free space on the hard disk should be 50GB, minimum Dual Core CPU and USB port.
            </p>
          </div>
        </RequirementItem>
        <RequirementItem delay="1.4s">
          <span className="icon">✅</span>
          <div>
            <h3>Software Requirement</h3>
            <p>
              All students are expected to have a PDF reader and Microsoft Office installed in their system. Any other software needed will be provided by our organization.
            </p>
          </div>
        </RequirementItem>
      </RequirementList>

      <SectionTitle>COURSE MODULES</SectionTitle>
      <ModuleGrid>
        <ModuleCard delay="0.2s">
          <h3>GIT</h3>
          <p>
            Git is a distributed version control system used for tracking changes made to files and also for coordinating work done on those files among multiple people. It is primarily used for source-code management in software development. Participants will learn how to use these tools for working in a team.
          </p>
        </ModuleCard>
        <ModuleCard delay="0.4s">
          <h3>HTML 5</h3>
          <p>
            Participants will learn the basics of HTML5, the training will start with instruction on how to set up their IDE (Integrated Development Environment) and upload files to a live web server with an FTP client. They will go over HTML5 basics like valid document structure and the usefulness of writing good HTML5 semantic tags. Each participant is expected to produce a webpage using the tags learned in this module.
          </p>
        </ModuleCard>
        <ModuleCard delay="0.6s">
          <h3>CSS 3</h3>
          <p>
            We will teach participants from the very basics of CSS3 to some fairly advanced concepts like floating, CSS rule conflict resolution, flexbox, etc. We will also be taught the ‘box model’, background property, CSS3 font, and even browser developers’ tool.
            This module will be culminated by converting the webpages created in HTML5 modules into a beautiful website.
          </p>
        </ModuleCard>
        <ModuleCard delay="0.8s">
          <h3>PHOTOSHOP CC</h3>
          <p>
            Photoshop is an image editing program. It can be used to create and edit imagery for the web. Apart from image manipulation a web developer’s ability to use Photoshop for web mockup production is an additional skill. Participants will be taught how to use Photoshop to manipulate images by optimizing, resize, crop, create simple shapes and add texts. For a comprehensive training on Computer Graphics sign up for a class on it.
          </p>
        </ModuleCard>
        <ModuleCard delay="1s">
          <h3>BOOTSTRAP 4</h3>
          <p>
            In this training, we are going to show participant how to build a mobile friendly Web Application with minimal effort using the latest version of Bootstrap. It will amaze you to see how we can simplify the task of Front-end development using Bootstrap.
          </p>
        </ModuleCard>
        <ModuleCard delay="1.2s">
          <h3>JAVASCRIPT</h3>
          <p>
            For some of the participants, JavaScript will be the first programming language they will be learning. Our instructors will simplify the act of programming. JavaScript will add interactivity to web pages. The module will cover just about everything – from common language constructs and data types to objects, functions, arrays, closures, Document Object Model (DOM) and Browser Object Model (BOM) API. Apart from just adding interactivity to a webpage, we teach the participant how to use JavaScript to create Web Applications and prepare them for other JavaScript Library they will learn in the training.
          </p>
        </ModuleCard>
        <ModuleCard delay="1.4s">
          <h3>JQUERY</h3>
          <p>
            jQuery is a very popular JavaScript library used to simplify the task of DOM manipulation and creation of UI. A common task that can be achieved with multiple lines of code of JavaScript, can be reduced to a few lines of codes with jQuery. The participant will be shown what can be done and how to include jQuery into their project.
          </p>
        </ModuleCard>
        <ModuleCard delay="1.6s">
          <h3>PHP</h3>
          <p>
            PHP is one of the most widely-used, open-source scripting languages used to build web apps and making the website dynamic. The scripts are executed on the server, it is free to download and easy to use. It is powerful enough to be at the core of WordPress and also deep enough to power a major part of Facebook. The coolest thing about it is that it is easy to learn for a beginner.
          </p>
        </ModuleCard>
        <ModuleCard delay="1.8s">
          <h3>MYSQL</h3>
          <p>
            MySQL is the most popular relational database management system used on the web and it connects seamlessly with PHP. Web Apps running PHP and MySQL are a popular norm on the web. It is an open-source project presently maintained by Oracle Corporation. Can be used for both small and large apps and it is also very fast, reliable, and easy to use.
          </p>
        </ModuleCard>
        <ModuleCard delay="2s">
          <h3>WORDPRESS</h3>
          <p>
            WordPress is a free and open-source content management web-based app built on PHP and MySQL initially developed for easy management of the blog. WordPress has evolved to become a powerful tool that can be used for building websites and web apps and it can be used by even people without coding skills.
          </p>
        </ModuleCard>
      </ModuleGrid>

      {/* The paragraph about writing service below WordPress seems unrelated and looks like a copy-paste error. I've left it out as it doesn't fit the context of a course page. */}

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO TAKE THE COURSE
      </CallToActionButton>
    </PageContainer>
  );
};

export default WebDevelopmentCourse;