
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLaptop, FaWindows, FaFileAlt, FaPenNib, FaChartBar, FaGlobe, FaImage, FaCheckCircle, FaChartLine, FaPencilRuler, FaPalette, FaBezierCurve } from 'react-icons/fa';
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

const DesktopPublishingPage = () => {
  const navigate = useNavigate();

  const handleTakeCourseClick = () => {
    navigate('/courseregistration'); // Or the appropriate registration path
  };

  return (
    <PageContainer>
      <HeroSection>
        <h1>DIPLOMA IN DESKTOP PUBLISHING & COMPUTER OPERATING SYSTEMS</h1>
        <p>
          Gain foundational and advanced skills in computer operations, office productivity suites, graphic design, and internet technologies.
        </p>
      </HeroSection>

      <SectionTitle>COMPUTER OPERATING SYSTEMS</SectionTitle>
      <ContentCard>
        <h3><FaWindows /> Module 1: Computer Operating System Fundamentals</h3>
        <ul>
          <li><FaCheckCircle className="icon" /> Definition of Computer</li>
          <li><FaCheckCircle className="icon" /> Computer System components</li>
          <li><FaCheckCircle className="icon" /> Difference between System Software & Application Software</li>
          <li><FaCheckCircle className="icon" /> Booting and Types of Booting</li>
          <li><FaCheckCircle className="icon" /> Desktop Background, Icons, Time and Date, Calculator</li>
          <li><FaCheckCircle className="icon" /> Changing Desktop Background, Screensaver, Customizing Mouse Icon & Button</li>
          <li><FaCheckCircle className="icon" /> Folder & Subfolder: Creation, Deleting, Restoring, File Management (Copying, Moving, Customizing)</li>
          <li><FaCheckCircle className="icon" /> Formatting Removable Drives</li>
          <li><FaCheckCircle className="icon" /> Creating, Working with Backup & Restoring, Deleting User Accounts</li>
          <li><FaCheckCircle className="icon" /> Playing & Copying Audio/Video CDs</li>
          <li><FaCheckCircle className="icon" /> On-screen Keyboard & Address Book</li>
          <li><FaCheckCircle className="icon" /> Notepad & WordPad</li>
        </ul>
      </ContentCard>

      <SectionTitle>MICROSOFT OFFICE (MS WORD)</SectionTitle>
      <ContentCard delay="0.8s">
        <h3><FaFileAlt /> Module 2: Microsoft Word Proficiency</h3>
        {/* Keeping the Spanish text as per your original input, but strongly advise review/removal */}
     
        <ul>
          <li><FaCheckCircle className="icon" /> Definition, Loading, Environment, Changing Views</li>
          <li><FaCheckCircle className="icon" /> Opening/Creating New Document, Exiting Word, Saving (Save & Save As difference)</li>
          <li><FaCheckCircle className="icon" /> Undo & Redo, Page Setup, Find, Replace & Go To, Paste Special, Copy & Paste, Cut, Office Clipboard</li>
          <li><FaCheckCircle className="icon" /> Task Pane, Header & Footer, Fullscreen, Zoom, Toolbars, Thumbnails, Page Number, Date & Time, Symbol, Textbox</li>
          <li><FaCheckCircle className="icon" /> Autocorrect, AutoText, AutoCorrect Options, File Menu Functions</li>
          <li><FaCheckCircle className="icon" /> Font Formatting, Paragraph Settings, Bullet & Numbering, Border & Shading</li>
          <li><FaCheckCircle className="icon" /> Columns, Drop Cap, Changing Case, Background, Theme, Autoformat, Clip Art</li>
          <li><FaCheckCircle className="icon" /> Inserting Images (From File, Scanner/Camera), AutoShapes, WordArt</li>
          <li><FaCheckCircle className="icon" /> Spelling & Grammar, Word Count, Text Wrapping, Letters & Mailings, Protect Document, Security Options</li>
          <li><FaCheckCircle className="icon" /> Thesaurus, Hyphenation, Letter Wizard (Resume Wizard), Drawing Tables, Table Autoformat</li>
          <li><FaCheckCircle className="icon" /> Order (Arrange), Drawing Bar, Format Painter, Alignment, Subscript, Raised, Lowered Text, Shortcut Keys</li>
        </ul>
      </ContentCard>

      <SectionTitle>POWERPOINT</SectionTitle>
      <ContentCard delay="1s">
        <h3><FaChartBar /> Module 3: PowerPoint Presentation Skills</h3>
        <ul>
          <li><FaCheckCircle className="icon" /> Definition, Loading</li>
          <li><FaCheckCircle className="icon" /> Ways of Creating a Presentation</li>
          <li><FaCheckCircle className="icon" /> Applying Slides, Slide Master, Design Template</li>
          <li><FaCheckCircle className="icon" /> Slide Layout, Color Scheme or Background</li>
          <li><FaCheckCircle className="icon" /> Custom Animation, Slide Transition</li>
          <li><FaCheckCircle className="icon" /> Color / Grayscale, Animation Scheme</li>
          <li><FaCheckCircle className="icon" /> View Show, Set Up Show, Copy to CD</li>
          <li><FaCheckCircle className="icon" /> Bringing in Sound & Hiding Sound Icon</li>
        </ul>
      </ContentCard>

      <SectionTitle>COREL DRAW</SectionTitle>
      <ContentCard delay="1.2s">
        <h3><FaPencilRuler /> Module 4: Corel Draw Graphics Design</h3>
        <ul>
          <li><FaCheckCircle className="icon" /> Definition, Loading, Environment, Version, Page Setup</li>
          <li><FaCheckCircle className="icon" /> Pick Tool, Knife Tool, Eraser Tool, Smudge Brush, Roughen Brush</li>
          <li><FaCheckCircle className="icon" /> Drawing Family, Rectangle & Ellipse, Interactive Family</li>
          <li><FaCheckCircle className="icon" /> Text Tool, Weld, Trim, Intersect, Simplify, Add Perspective</li>
          <li><FaCheckCircle className="icon" /> Copy Properties From, Import, Export, Power Clip</li>
          <li><FaCheckCircle className="icon" /> Fit Text to Path, Paragraph Text, Bitmap, Editing Bitmaps</li>
          <li><FaCheckCircle className="icon" /> Rotate, Fountain Fill, Shortcut Keys</li>
          <li><FaCheckCircle className="icon" /> Scanning, Visual Basic Editor, Eyedropper & Paint Bucket</li>
          <li><FaCheckCircle className="icon" /> Breaking Text Apart, Converting Text to Curves</li>
        </ul>
      </ContentCard>

      <SectionTitle>APPLICATION IN BUSINESS (EXCEL)</SectionTitle>
      <ContentCard delay="1.4s">
        <h3><FaChartLine /> Module 5: Microsoft Excel for Business</h3>
        <ul>
          <li><FaCheckCircle className="icon" /> Definition, Loading, Environment, Roles, Columns (Identifying them)</li>
          <li><FaCheckCircle className="icon" /> Inserting Worksheet, Active Cell, Cells, Entering Data</li>
          <li><FaCheckCircle className="icon" /> Renaming, Moving & Copying Worksheets, Inserting Columns & Rows</li>
          <li><FaCheckCircle className="icon" /> Autocomplete, BEDMAS Formula (Basic Operations: Adding, Multiplying, Division, Subtracting)</li>
          <li><FaCheckCircle className="icon" /> Dragging Answer, Calculation, Alignment, Wrap Text, Shrink Fit</li>
          <li><FaCheckCircle className="icon" /> Merge Cells, Orientation, Number Formatting (e.g., Telephone Numbers)</li>
          <li><FaCheckCircle className="icon" /> Background, Tab Color</li>
        </ul>
      </ContentCard>

      <SectionTitle>INTERNET, NETWORKING & RESOURCE SHARING</SectionTitle>
      <ContentCard delay="1.6s">
        <h3><FaGlobe /> Module 6: Internet & Networking Essentials</h3>
        <ul>
          <li><FaCheckCircle className="icon" /> Internet Browse & Research Training</li>
          <li><FaCheckCircle className="icon" /> LAN Networking & Resource Sharing</li>
        </ul>
      </ContentCard>

      <SectionTitle>ADVANCED GRAPHICS, DESIGN & ART</SectionTitle>
      <ContentCard delay="1.8s">
        <h3><FaImage /> Module 7: Advanced Graphics Software</h3>
        <ul>
          <li><FaCheckCircle className="icon" /> Photoshop CS</li>
          <li><FaCheckCircle className="icon" /> Fireworks</li>
        </ul>
      </ContentCard>

      <CallToActionButton onClick={handleTakeCourseClick}>
        CLICK HERE TO TAKE THE COURSE
      </CallToActionButton>
    </PageContainer>
  );
};

export default DesktopPublishingPage;