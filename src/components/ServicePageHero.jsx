import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ab1 from '../Images2/bg2.jpg';
import ab2 from '../Images2/sbg3.png';
import ab3 from '../Images2/ab3.jpg';
import ab4 from '../Images2/ab4.jpg';
import ab5 from '../Images2/ab5.jpg';
import bg2 from '../Images2/bg2.jpg';

const backgroundImages = [ab1, ab2, ab3, ab4, ab5];

const carouselContent = [
  {
    title: "Our Services",
    description:
      "We provide world-class training and web design jobs. Our designs are unique, mobile-friendly, and affordable, offering exceptional value for your money. We employ the best technologies in our designs to give you unimaginable results.",
  },
  {
    title: "Your Partner For ELEXDON Digital Technologies",
    description:
      "Elexdon Digital Technologies is made up of passionate and experienced people; we love where we work and what we do. We are focused on the following core services: Web Design/Development, Ecommerce, Digital Marketing, Hosting and Domain Name Selling, Web Management, Maintenance Branding, And Managed Services.",
  },
];

// Animations
const slideContentIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideBackgroundTransition = keyframes`
  0% { opacity: 0; transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
`;

const dotPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
`;

// Styled components
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;

  @media(max-width:768px){
   height: 100vh;
  }
    @media(max-width:320px){
   height: 130vh;
  }
`;

const Slide = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: top;
  opacity: ${props => (props.$active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;


  /* ensure only the active slide receives pointer events and sits on top */
  pointer-events: ${props => (props.$active ? 'auto' : 'none')};
  z-index: ${props => (props.$active ? 3 : 0)};

  /* background entrance animation for active slide */
  animation: ${props => (props.$active ? css`${slideBackgroundTransition} 1.5s ease-out forwards` : 'none')};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    pointer-events: none; /* overlay won't block clicks */
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 4; /* above overlay */
  max-width: 800px;
  padding: 20px;
  color: #fff;
  opacity: ${props => (props.$active ? 1 : 0)};
  transform: ${props => (props.$active ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: 0.5s;

  ${props => props.$active && css`
    h2 {
      animation: ${slideContentIn} 0.8s ease-out forwards;
      animation-delay: 0.7s;
    }
    p {
      animation: ${slideContentIn} 0.8s ease-out forwards;
      animation-delay: 1s;
    }
  `}
`;

const SlideTitle = styled.h2`
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 15px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  color: white;
`;

const SlideDescription = styled.p`
  font-size: 1rem;
  color: #E0E0E0;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
`;

const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  font-size: 1.6rem;
  z-index: 10;
  border-radius: 8px;

  ${props => props.$direction === 'left' && css`left: 16px;`}
  ${props => props.$direction === 'right' && css`right: 16px;`}

  &:disabled { opacity: 0.5; cursor: not-allowed; }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 10px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => (props.$active ? '#2f5f9bff' : 'rgba(255,255,255,0.5)')};
  border: 1px solid ${props => (props.$active ? '#2f5f9bff' : 'rgba(255,255,255,0.3)')};
  cursor: pointer;
  transition: transform 0.18s ease;
  ${props => props.$active && css`animation: ${dotPulse} 1.5s infinite alternate;`}
`;

const LearnMoreButton = styled.button`
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #2f5f9bff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
  z-index: 6;

  &:hover {
    background-color: #1f4775;
    transform: translateY(-3px);
  }
`;

// Main Component
const ServicePageHero = ({ interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef();

  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev + 1) % carouselContent.length);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1200);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    autoPlayRef.current = goToNextSlide;
  });

  useEffect(() => {
    const play = () => autoPlayRef.current();
    const timer = setInterval(play, interval);
    return () => clearInterval(timer);
  }, [interval]);

  // Scroll to services section
  const handleExploreClick = () => {
    const section = document.getElementById("services-grid");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <CarouselContainer>
      {carouselContent.map((slide, index) => (
        <Slide
          key={index}
          $active={index === currentSlide}
          $bgImage={backgroundImages[index % backgroundImages.length]}
        >
          <SlideContent $active={index === currentSlide}>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideDescription>{slide.description}</SlideDescription>
            <LearnMoreButton onClick={handleExploreClick}>
              Explore Services
            </LearnMoreButton>
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
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default ServicePageHero;
