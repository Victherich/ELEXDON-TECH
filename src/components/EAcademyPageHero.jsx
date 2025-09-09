

import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaChevronLeft, FaChevronRight, FaProductHunt } from 'react-icons/fa'; // Import React Icons
import ab1 from '../Images2/ab1.jpg'
import ab2 from '../Images2/ab2.jpg'
import ab3 from '../Images2/ab3.jpg'
import ab4 from '../Images2/ab4.jpg'
import ab5 from '../Images2/ab5.jpg'

// --- Placeholder Background Images (REPLACE WITH YOUR ACTUAL IMAGES) ---
// Example: import carouselBg1 from '../Images/carouselBg1.jpg';
const backgroundImages = [
ab1, ab2, ab3, ab4, ab5
];

// --- Carousel Content Data ---
const carouselContent = [
//   {
//     title: "Your Partner For ELEXDON Digital Technologies",
//     description: "Elexdon Digital Technologies is made up of passionate and experienced people; we love where we work and what we do. We are focused on the following core services: Web Design/Development, Ecommerce, Digital Marketing, Hosting and Domain Name Selling, Web Management, Maintenance Branding, And Managed Services. We share our expertise whenever possible through events, our Academy, And Our Blog.",
//   },
  {
    title: "We are Professional",
    description: "Elexdon Digital Technologies Academy is Nigeria’s Leading Training Academy for Information Communication Technology Certification Courses.",
  },
  {
    title: "About Our Trainings",
    description: "All our training sections are organised by our team of professionals at Elexdon Technologies Limited so it is a practical oriented training class. There will be a tutor lead section, class programming session and a project development section in all our web designing and development classes. Every student will be expected to complete a web project (an online library system or a shopping cart or both) using the technology learnt during the training. All graduands will benefit from free Mentorship and consultation service from Elexdon Technologies Ltd.",
  },
//   {
//     title: "Get Transformed With Elexdon Technologies",
//     description: "Think ICT; Think Forward. Learn New Skills That Will Get You Prepared For The Future. Our practical hands-on training which gives you all you need to start as a beginner to advanced level in ICT profession.",
//   },
  {
    title: "Courses We Offer",
    description: "At Elexdon Digital Academy we train students, organizations, individuals and school staff on different courses e.g. Web Design & Development, Data Analysis, Graphic Design, School Management Software, Computer Networking, Desktop & Mobile App development, Software Engineering Programming, Digital Marketing, e.t.c.",
  }
];

// --- Keyframe Animations ---

// Slide content entrance animation
const slideContentIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Slide background fade/scale animation
const slideBackgroundTransition = keyframes`
  0% { opacity: 0; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
`;

// Dot pulse animation
const dotPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
`;

// --- Styled Components ---

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh; /* Adjust height as needed */
  overflow: hidden;
  border-radius: 0px; /* Soft rounded corners for the carousel itself */
  max-width: 1400px; /* Max width for larger screens */
  

  @media (max-width: 768px) {
    // height: 60vh;
    // margin: 30px auto;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    // height: 50vh;
    // margin: 20px auto;
    border-radius: 5px;
    padding-top:100px;
  }


    @media(max-width:320px){
   height: 130vh;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: top;
  opacity: ${props => (props.$active ? 1 : 0)};
  transition: opacity 1s ease-in-out; /* Smooth fade transition for background */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${props => props.$active ? css`${slideBackgroundTransition} 1.5s ease-out forwards` : 'none'};
  
  &::before { /* Dark overlay for text readability */
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6); /* Darker overlay */
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2; /* Above the overlay */
  max-width: 800px;
  padding: 20px;
  color: #fff;
  opacity: ${props => (props.$active ? 1 : 0)};
  transform: ${props => (props.$active ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: 0.5s; /* Delay content animation slightly after slide appears */

  ${props => props.$active && css`
    h2 {
      animation: ${slideContentIn} 0.8s ease-out forwards;
      animation-delay: 0.7s; /* Stagger title */
    }
    p {
      animation: ${slideContentIn} 0.8s ease-out forwards;
      animation-delay: 1s; /* Stagger description */
    }
  `}
`;

const SlideTitle = styled.h2`
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 15px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  color: #00C9FF; /* Vibrant blue for titles */
  color:white;
`;

const SlideDescription = styled.p`
  font-size: 1rem;
  // line-height: 1.6;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  color: #E0E0E0;
`;

const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px 10px;
  cursor: pointer;
  font-size: 2rem;
  z-index: 10;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props => props.$direction === 'left' && css`
    left: 15px;
  `}

  ${props => props.$direction === 'right' && css`
    right: 15px;
  `}

  @media (max-width: 768px) {
    padding: 10px 8px;
    font-size: 1.5rem;
    border-radius: 5px;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 10px;
    gap: 8px;
  }
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => (props.$active ? '#00C9FF' : 'rgba(255, 255, 255, 0.5)')};
  border: 1px solid ${props => (props.$active ? '#00C9FF' : 'rgba(255, 255, 255, 0.3)')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => (props.$active ? '#00C9FF' : 'rgba(255, 255, 255, 0.7)')};
    transform: scale(1.1);
  }

  ${props => props.$active && css`
    animation: ${dotPulse} 1.5s infinite alternate;
  `}

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;



const LearnMoreButton = styled.button`
  padding: 12px 30px;
  font-size: 1em;
  font-weight: 600;
  color: #FFFFFF;
  background-color: #2f5f9bff;;
  // background-color:#4946ffff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-bottom:20px;
  z-index:99999999999999999999999999999999999999999999999999;

  &:hover {
    background-color: #12c2e9;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// --- Main Carousel Component ---

const EAcademyPageHero = ({ interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // To prevent rapid clicks
  const autoPlayRef = useRef();

  // Function to go to the next slide
  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  // Function to go to a specific slide (for dots)
  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  // Reset animation state after slide transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1200); // Match or slightly exceed slide transition duration

    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Auto-play logic
  useEffect(() => {
    autoPlayRef.current = goToNextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const timer = setInterval(play, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <CarouselContainer>
      {carouselContent.map((slide, index) => (
        <Slide
          key={index}
          $active={index === currentSlide}
          $bgImage={backgroundImages[index]}
        >
          <SlideContent $active={index === currentSlide}>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideDescription>{slide.description}</SlideDescription>
             <LearnMoreButton onClick={()=>window.open('https://www.elexdondigitalacademy.com', "_blank")}>Explore More...</LearnMoreButton>
          </SlideContent>
        </Slide>
      ))}

      

      <ControlButton $direction="left" onClick={goToPrevSlide} disabled={isAnimating}>
        <FaChevronLeft />
      </ControlButton>
      <ControlButton $direction="right" onClick={goToNextSlide} disabled={isAnimating}>
        <FaChevronRight />
      </ControlButton>

      <DotsContainer>
        {carouselContent.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentSlide}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
          />
        ))}
        
    
      </DotsContainer>
  

    </CarouselContainer>
  );
};

export default EAcademyPageHero;