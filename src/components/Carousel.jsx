
// import React, { useState, useEffect, useRef } from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import React Icons
// import ab1 from '../Images2/ab1.jpg'
// import ab2 from '../Images2/ab2.jpg'
// import ab3 from '../Images2/ab3.jpg'
// import ab4 from '../Images2/ab4.jpg'
// import ab5 from '../Images2/ab5.jpg'

// // --- Placeholder Background Images (REPLACE WITH YOUR ACTUAL IMAGES) ---
// // Example: import carouselBg1 from '../Images/carouselBg1.jpg';
// const backgroundImages = [
// ab1, ab2, ab3, ab4, ab5
// ];

// // --- Carousel Content Data ---
// const carouselContent = [
//   // {
//   //   title: "Your Partner For ELEXDON Digital Technologies",
//   //   description: "Elexdon Digital Technologies is made up of passionate and experienced people; we love where we work and what we do. We are focused on the following core services: Web Design/Development, Ecommerce, Digital Marketing, Hosting and Domain Name Selling, Web Management, Maintenance Branding, And Managed Services. We share our expertise whenever possible through events, our Academy, And Our Blog.",
//   // },
//   // {
//   //   title: "We are Professional",
//   //   description: "Elexdon Digital Technologies Academy is Nigeria’s Leading Training Academy for Information Communication Technology Certification Courses.",
//   // },
//   // {
//   //   title: "About Our Trainings",
//   //   description: "All our training sections are organised by our team of professionals at Elexdon Technologies Limited so it is a practical oriented training class. There will be a tutor lead section, class programming session and a project development section in all our web designing and development classes. Every student will be expected to complete a web project (an online library system or a shopping cart or both) using the technology learnt during the training. All graduands will benefit from free Mentorship and consultation service from Elexdon Technologies Ltd.",
//   // },

//   {
// title:"Elexdon- Beyond Technology…",
// description:"Elexdon Digital Technologies Limited is a dedicated african leading digital technology company in providing impactful and exceptional digital technology services to SME’s ,private and public sectors.….Impacting businesses and lives through digital technology since 2017."
//   },
//   {
// title:"Elexdon Digitech Empowers and Transforms Your Business With Our Innovative Digital Tech. Services.",
// description:"Discover how our digital technology services can drive your business transformation within a short time of our impactful digital technology empowerment for your Business."
//   },
//   {
//     title: "Elexdon Digitech is your best Digital Technology Partner in Business Transformation",
//     description: "Think ICT; Think Forward. Learn New Skills That Will Get You Prepared For The Future. Our practical hands-on training which gives you all you need to start as a beginner to advanced level in ICT profession.",
//   },
//   {
//     title:"Elexdon is made up of team of Tech/Software professionals ",
//     description:"Offering world class expertise with global and local accessibilities for both big and small entrepreneurs and service providers. "
//   }
//   // {
//   //   title: "Courses We Offer",
//   //   description: "At Elexdon Digital Academy we train students, organizations, individuals and school staff on different courses e.g. Web Design & Development, Data Analysis, Graphic Design, School Management Software, Computer Networking, Desktop & Mobile App development, Software Engineering Programming, Digital Marketing, e.t.c.",
//   // }
// ];

// // --- Keyframe Animations ---

// // Slide content entrance animation
// const slideContentIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // Slide background fade/scale animation
// const slideBackgroundTransition = keyframes`
//   0% { opacity: 0; transform: scale(1.05); }
//   100% { opacity: 1; transform: scale(1); }
// `;

// // Dot pulse animation
// const dotPulse = keyframes`
//   0%, 100% { transform: scale(1); }
//   50% { transform: scale(1.2); }
// `;

// // --- Styled Components ---

// const CarouselContainer = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100vh; /* Adjust height as needed */
//   overflow: hidden;
//   border-radius: 0px; /* Soft rounded corners for the carousel itself */
//   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
//   margin: 50px auto; /* Center the carousel on the page */
//   max-width: 1400px; /* Max width for larger screens */
  

//   @media (max-width: 768px) {
//     // height: 60vh;
//     margin: 30px auto;
//     border-radius: 10px;
//   }
//   @media (max-width: 480px) {
//     // height: 50vh;
//     margin: 20px auto;
//     border-radius: 5px;
//     padding-top:100px;
//   }
// `;

// const Slide = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: url(${props => props.$bgImage});
//   background-size: cover;
//   background-position: top;
//   opacity: ${props => (props.$active ? 1 : 0)};
//   transition: opacity 1s ease-in-out; /* Smooth fade transition for background */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   animation: ${props => props.$active ? css`${slideBackgroundTransition} 1.5s ease-out forwards` : 'none'};
  
//   &::before { /* Dark overlay for text readability */
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.6); /* Darker overlay */
//     z-index: 1;
//   }
// `;

// const SlideContent = styled.div`
//   position: relative;
//   z-index: 2; /* Above the overlay */
//   max-width: 800px;
//   padding: 20px;
//   color: #fff;
//   opacity: ${props => (props.$active ? 1 : 0)};
//   transform: ${props => (props.$active ? 'translateY(0)' : 'translateY(20px)')};
//   transition: opacity 0.8s ease-out, transform 0.8s ease-out;
//   transition-delay: 0.5s; /* Delay content animation slightly after slide appears */

//   ${props => props.$active && css`
//     h2 {
//       animation: ${slideContentIn} 0.8s ease-out forwards;
//       animation-delay: 0.7s; /* Stagger title */
//     }
//     p {
//       animation: ${slideContentIn} 0.8s ease-out forwards;
//       animation-delay: 1s; /* Stagger description */
//     }
//   `}
// `;

// const SlideTitle = styled.h2`
//   font-size: 4rem;
//   font-weight: 800;
//   margin-bottom: 15px;
//   text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
//   color: #00C9FF; /* Vibrant blue for titles */
//   color:white;
// `;

// const SlideDescription = styled.p`
//   font-size: clamp(0.9rem, 1.8vw, 1.2rem);
//   line-height: 1.6;
//   text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
//   color: #E0E0E0;
// `;

// const ControlButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 15px 10px;
//   cursor: pointer;
//   font-size: 2rem;
//   z-index: 10;
//   border-radius: 8px;
//   transition: background 0.3s ease, transform 0.3s ease;
  
//   &:hover {
//     background: rgba(0, 0, 0, 0.7);
//     transform: translateY(-50%) scale(1.1);
//   }

//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }

//   ${props => props.$direction === 'left' && css`
//     left: 15px;
//   `}

//   ${props => props.$direction === 'right' && css`
//     right: 15px;
//   `}

//   @media (max-width: 768px) {
//     padding: 10px 8px;
//     font-size: 1.5rem;
//     border-radius: 5px;
//   }
// `;

// const DotsContainer = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 10;
//   display: flex;
//   gap: 10px;

//   @media (max-width: 768px) {
//     bottom: 10px;
//     gap: 8px;
//   }
// `;

// const Dot = styled.button`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background: ${props => (props.$active ? '#00C9FF' : 'rgba(255, 255, 255, 0.5)')};
//   border: 1px solid ${props => (props.$active ? '#00C9FF' : 'rgba(255, 255, 255, 0.3)')};
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: ${props => (props.$active ? '#00C9FF' : 'rgba(255, 255, 255, 0.7)')};
//     transform: scale(1.1);
//   }

//   ${props => props.$active && css`
//     animation: ${dotPulse} 1.5s infinite alternate;
//   `}

//   @media (max-width: 768px) {
//     width: 10px;
//     height: 10px;
//   }
// `;

// // --- Main Carousel Component ---

// const Carousel = ({ interval = 5000 }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false); // To prevent rapid clicks
//   const autoPlayRef = useRef();

//   // Function to go to the next slide
//   const goToNextSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
//   };

//   // Function to go to the previous slide
//   const goToPrevSlide = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
//   };

//   // Function to go to a specific slide (for dots)
//   const goToSlide = (index) => {
//     if (isAnimating || index === currentSlide) return;
//     setIsAnimating(true);
//     setCurrentSlide(index);
//   };

//   // Reset animation state after slide transition
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsAnimating(false);
//     }, 1200); // Match or slightly exceed slide transition duration

//     return () => clearTimeout(timer);
//   }, [currentSlide]);

//   // Auto-play logic
//   useEffect(() => {
//     autoPlayRef.current = goToNextSlide;
//   });

//   useEffect(() => {
//     const play = () => {
//       autoPlayRef.current();
//     };
//     const timer = setInterval(play, interval);
//     return () => clearInterval(timer);
//   }, [interval]);

//   return (
//     <CarouselContainer>
//       {carouselContent.map((slide, index) => (
//         <Slide
//           key={index}
//           $active={index === currentSlide}
//           $bgImage={backgroundImages[index]}
//         >
//           <SlideContent $active={index === currentSlide}>
//             <SlideTitle>{slide.title}</SlideTitle>
//             <SlideDescription>{slide.description}</SlideDescription>
//           </SlideContent>
//         </Slide>
//       ))}

//       <ControlButton $direction="left" onClick={goToPrevSlide} disabled={isAnimating}>
//         <FaChevronLeft />
//       </ControlButton>
//       <ControlButton $direction="right" onClick={goToNextSlide} disabled={isAnimating}>
//         <FaChevronRight />
//       </ControlButton>

//       <DotsContainer>
//         {carouselContent.map((_, index) => (
//           <Dot
//             key={index}
//             $active={index === currentSlide}
//             onClick={() => goToSlide(index)}
//             disabled={isAnimating}
//           />
//         ))}
//       </DotsContainer>
//     </CarouselContainer>
//   );
// };

// export default Carousel;







import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ab1 from '../Images2/bt.png'
import ab2 from '../Images2/ab2.jpg'
import ab3 from '../Images2/ab3.jpg'
import ab4 from '../Images2/tp.png'
import ab5 from '../Images2/ab5.jpg'

// --- Placeholder Background Images (REPLACE WITH YOUR ACTUAL IMAGES) ---
const backgroundImages = [
  ab1, ab2, ab3, ab4, ab5
];

// --- Carousel Content Data ---
const carouselContent = [
  {
    title: "Elexdon- Beyond Technology…",
    description: "Elexdon Digital Technologies Limited is a dedicated african leading digital technology company in providing impactful and exceptional digital technology services to SME’s ,private and public sectors.….Impacting businesses and lives through digital technology since 2017."
  },
  {
    title: "Elexdon Digitech Empowers and Transforms Your Business With Our Innovative Digital Tech. Services.",
    description: "Discover how our digital technology services can drive your business transformation within a short time of our impactful digital technology empowerment for your Business."
  },
  {
    title: "Elexdon Digitech is your best Digital Technology Partner in Business Transformation",
    description: "Think ICT; Think Forward. Learn New Skills That Will Get You Prepared For The Future. Our practical hands-on training which gives you all you need to start as a beginner to advanced level in ICT profession.",
  },
  {
    title: "Elexdon is made up of team of Tech/Software professionals ",
    description: "Offering world class expertise with global and local accessibilities for both big and small entrepreneurs and service providers. "
  }
];

// --- Keyframe Animations ---
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

// --- Styled Components ---
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  border-radius: 0px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  margin: 50px auto;
  max-width: 1400px;

  @media (max-width: 768px) {
    margin: 30px auto;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    margin: 20px auto;
    border-radius: 5px;
    padding-top: 100px;
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
  transition: opacity 1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${props => props.$active ? css`${slideBackgroundTransition} 1.5s ease-out forwards` : 'none'};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 2;
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
  font-size: 3.8rem;
  font-weight: 800;
  margin-bottom: 15px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  color: #00C9FF;
  color: white;

  // New: Conditional styling for long titles
  ${props => props.$isLongTitle && css`
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  `}

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SlideDescription = styled.p`
  font-size: clamp(0.9rem, 1.8vw, 1.2rem);
  line-height: 1.6;
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

// --- Main Carousel Component ---
const Carousel = ({ interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef();

  // New: Add a property to check for long titles
  const slidesWithTitleCheck = carouselContent.map(slide => ({
    ...slide,
    isLongTitle: slide.title.length > 60,
  }));

  const goToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slidesWithTitleCheck.length);
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slidesWithTitleCheck.length) % slidesWithTitleCheck.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentSlide]);

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
      {slidesWithTitleCheck.map((slide, index) => (
        <Slide
          key={index}
          $active={index === currentSlide}
          $bgImage={backgroundImages[index]}
        >
          <SlideContent $active={index === currentSlide}>
            <SlideTitle $isLongTitle={slide.isLongTitle}>{slide.title}</SlideTitle>
            <SlideDescription>{slide.description}</SlideDescription>
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
        {slidesWithTitleCheck.map((_, index) => (
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

export default Carousel;