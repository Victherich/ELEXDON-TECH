









// import React, { useEffect, useRef, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import 'animate.css';

// import herobg1 from '../Images/herobg1.jpg';
// import herobg2 from '../Images/herobg2.jpg';
// import herobg3 from '../Images/herobg3.jpg';
// import herobg4 from '../Images/herobg4.jpg';
// import { useNavigate } from 'react-router-dom';

// // Background scroll stars effect
// const scrollStars = keyframes`
//   0% { background-position: 0 0; }
//   100% { background-position: -2000px 0; }
// `;

// const pulseGlow = keyframes`
//   0%, 100% { box-shadow: 0 0 20px rgba(100, 200, 255, 0.3); }
//   50% { box-shadow: 0 0 40px rgba(100, 200, 255, 0.7); }
// `;

// // Styled components
// const HeroSection = styled.section`
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
//   border-radius: 500px 0px 500px 0px;

//   @media(max-width:884px){
//     border-radius: 300px 0px 300px 0px;
//   }
// `;

// const Background = styled.div`
//   position: absolute;
//   inset: 0;
//   background-image: url(${props => props.img});
//   background-size: cover;
//   background-position: center;
//   opacity: ${props => (props.active ? 1 : 0)};
//   transition: opacity 1.5s ease-in-out;
//   z-index: 0;
// `;

// const StarOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 200%;
//   height: 200%;
//   background: url('/stars.gif') repeat;
//   opacity: 0.08;
//   animation: ${scrollStars} 60s linear infinite;
//   z-index: 1;
// `;

// const Content = styled.div`
//   position: relative;
//   z-index: 2;
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 0 20px;
//   text-align: center;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #fff;
// `;

// const Title = styled.h1`
//   font-size: 3.5rem;
//   font-weight: bold;
//   color: #ffffff;
//   text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
// `;

// const Subtitle = styled.p`
//   margin-top: 20px;
//   font-size: 1.4rem;
//   line-height: 1.6;
//   color: #E0F7FA;
//   text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
// `;

// const ButtonGroup = styled.div`
//   margin-top: 40px;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 20px;
// `;

// const CTAButton = styled.a`
//   padding: 14px 28px;
//   font-size: 1rem;
//   border-radius: 30px;
//   background: #00C9FF;
//   color: white;
//   font-weight: bold;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   animation: ${pulseGlow} 10s ease-in-out infinite;
//   cursor:pointer;

//   &:hover {
//     background: #b983ff;
//   }
// `;

// // Scroll hook
// const useAnimateOnScroll = (animationClass) => {
//   const ref = useRef(null);
//   const [isVisible, setVisible] = useState(false);
 

 

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         } else {
//           setVisible(false); // allow re-trigger on scroll in again
//         }
//       },
//       { threshold: 0.2 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return {
//     ref,
//     className: isVisible ? `animate__animated ${animationClass}` : 'opacity-0',
//   };
// };

// // Main Hero component
// const Hero = () => {
//   const backgrounds = [herobg1, herobg2, herobg3, herobg4];
//   const [bgIndex, setBgIndex] = useState(0);
//    const navigate = useNavigate();

//   const titleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const subtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const buttonAnim = useAnimateOnScroll('animate__zoomIn animate__slower');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % backgrounds.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <HeroSection>
//       {backgrounds.map((img, i) => (
//         <Background key={i} img={img} active={i === bgIndex} />
//       ))}

//       <StarOverlay />

//       <Content>
//         <Title ref={titleAnim.ref} className={titleAnim.className}>
//           ELEXDON HOST 🚀
//         </Title>
//         <Subtitle ref={subtitleAnim.ref} className={subtitleAnim.className}>
//           Hosting that glows. Power that moves. Infrastructure that dares to dream. ✨🌐
//         </Subtitle>
//         <ButtonGroup ref={buttonAnim.ref} className={buttonAnim.className}>
//           <CTAButton onClick={()=>navigate('/domainspage')}>🚀 Get Started</CTAButton>
//           <CTAButton onClick={()=>navigate('/aboutus')}>📘 Learn More</CTAButton>
//         </ButtonGroup>
//       </Content>
//     </HeroSection>
//   );
// };

// export default Hero;


import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import 'animate.css'; // Make sure this is imported for animate.css classes

// Assuming these images exist at the specified paths
import herobg1 from '../Images2/h1.jpg';
import herobg2 from '../Images2/h2.jpg';
import herobg3 from '../Images2/h3.jpg';
import herobg4 from '../Images2/h4.jpg';
import { useNavigate } from 'react-router-dom';

// --- Keyframe Animations ---

// Subtle shimmer for text (like a digital display)
const textShimmer = keyframes`
  0% { text-shadow: 0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(0,255,255,0.5); }
  50% { text-shadow: 0 0 10px rgba(255,255,255,1), 0 0 20px rgba(0,255,255,0.8); }
  100% { text-shadow: 0 0 5px rgba(255,255,255,0.7), 0 0 10px rgba(0,255,255,0.5); }
`;

// More dynamic pulse for buttons with a subtle lift
const buttonPulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 15px rgba(0, 201, 255, 0.4);
  }
  50% {
    transform: scale(1.03); /* Slight lift */
    box-shadow: 0 0 30px rgba(0, 201, 255, 0.8), 0 0 60px rgba(0, 201, 255, 0.5);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 15px rgba(0, 201, 255, 0.4);
  }
`;

// Floating particles/elements
const float = keyframes`
  0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.8; }
  25% { transform: translateY(-10px) translateX(5px) rotate(5deg); opacity: 1; }
  50% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.8; }
  75% { transform: translateY(10px) translateX(-5px) rotate(-5deg); opacity: 1; }
  100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0.8; }
`;

// Background parallax scroll (can be adjusted for speed)
const parallaxScroll = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

// --- Styled Components ---

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* Modern, subtle curved bottom border */
  border-bottom-left-radius: 40% 15%;
  border-bottom-right-radius: 40% 15%;
  isolation: isolate; /* Ensures z-index behaves correctly with transforms/gradients */

  @media (max-width: 884px) {
    border-bottom-left-radius: 30% 10%;
    border-bottom-right-radius: 30% 10%;
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex; /* For overlaying backgrounds */
  filter: brightness(0.7) contrast(1.2); /* Enhance image vibrancy */
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 2s ease-in-out; /* Slower, smoother transition */
  z-index: -1; /* Keep behind content, but above the static background */
`;

const StaticGradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    #0a0a20 0%,
    #050515 50%,
    #0a0a20 100%
  ); /* Deep space gradient */
  z-index: -2; /* Farthest back */
`;

const StarOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: url('/stars.gif') repeat; /* Ensure this GIF is available */
  background-size: 500px 500px; /* Adjust star density */
  opacity: 0.12; /* Slightly more visible stars */
  animation: ${parallaxScroll} 90s linear infinite, ${float} 20s ease-in-out infinite alternate; /* Slower parallax, plus subtle float */
  z-index: 0; /* Behind content, above images */
  /* Add subtle blur for depth */
  filter: blur(0.5px);
`;

const Content = styled.div`
  position: relative;
  z-index: 3; /* Ensure content is on top */
  max-width: 900px; /* Wider content area */
  margin: 0 auto;
  padding: 0 30px; /* More padding */
  text-align: center;
  top: 55%; /* Slightly lower to account for curved bottom */
  transform: translateY(-50%);
  color: #fff;
  perspective: 1000px; /* For 3D effects on elements */
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.8rem); /* Responsive font size */
  font-weight: 900; /* Extra bold */
  color: #ffffff;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.5); /* Stronger glow */
  margin-bottom: 20px;
  animation: ${textShimmer} 4s ease-in-out infinite; /* Continuous shimmer */
  line-height: 1.1;

  /* animate.css classes will be added dynamically by the hook */
  /* This ensures the animation delay is applied to the correct element */
  &.animate__fadeInDown {
    animation-delay: 0.3s;
  }
`;

const Subtitle = styled.p`
  margin-top: 20px;
  font-size: clamp(1rem, 2.5vw, 1.6rem); /* Responsive font size */
  line-height: 1.6;
  color: #E0F7FA;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  max-width: 700px; /* Constrain subtitle width */
  margin-left: auto;
  margin-right: auto;

  /* animate.css classes will be added dynamically by the hook */
  &.animate__fadeInUp {
    animation-delay: 0.6s;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 50px; /* More space above buttons */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px; /* More space between buttons */

  /* animate.css classes will be added dynamically by the hook */
  &.animate__zoomIn {
    animation-delay: 0.9s;
  }
`;

const CTAButton = styled.a`
  padding: 16px 32px; /* Larger buttons */
  font-size: 1.1rem; /* Slightly larger text */
  border-radius: 40px; /* More rounded, pill-like */
  background: linear-gradient(90deg, #00C9FF 0%, #0072FF 100%); /* Gradient background */
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smoother transition */
  animation: ${buttonPulse} 8s ease-in-out infinite; /* Continuous pulse */
  cursor: pointer;
  border: none;
  box-shadow: 0 5px 20px rgba(0, 150, 255, 0.5); /* Initial shadow */
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(90deg, #b983ff 0%, #834cff 100%); /* Hover gradient */
    transform: translateY(-3px) scale(1.01); /* Lift and slight scale */
    box-shadow: 0 8px 25px rgba(185, 131, 255, 0.7); /* Enhanced shadow on hover */
    animation: none; /* Stop continuous pulse on hover */
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 10px rgba(0, 150, 255, 0.3);
  }
`;

// --- Animate on Scroll Hook (CORRECTED IMPLEMENTATION) ---
const useAnimateOnScroll = (animationClasses, threshold = 0.2, triggerOnce = true) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Split the animationClasses string into an array of individual class names
    // .filter(Boolean) removes any potential empty strings if there are extra spaces
    const classesToAdd = animationClasses.split(' ').filter(Boolean);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setHasAnimated(true);
          // Add 'animate__animated' first, then spread the specific animation classes
          el.classList.add('animate__animated', ...classesToAdd);
        } else if (!entry.isIntersecting && !triggerOnce && hasAnimated) {
          // If not triggerOnce, remove classes when out of view to re-trigger
          el.classList.remove('animate__animated', ...classesToAdd);
          setHasAnimated(false);
        }
      },
      { threshold: threshold }
    );

    observer.observe(el);
    return () => {
      if (el) {
        observer.disconnect();
      }
    };
  }, [animationClasses, threshold, triggerOnce, hasAnimated]);

  return { ref };
};

// --- Main Hero component ---
const Hero = () => {
  const backgrounds = [herobg1, herobg2, herobg3, herobg4];
  const [bgIndex, setBgIndex] = useState(0);
  const navigate = useNavigate();

  // Using the corrected hook.
  // The hook now handles splitting the classes, so you pass them as one string.
  const titleRef = useAnimateOnScroll('animate__fadeInDown animate__slower', 0.2, true).ref;
  const subtitleRef = useAnimateOnScroll('animate__fadeInUp animate__slower', 0.2, true).ref;
  const buttonGroupRef = useAnimateOnScroll('animate__zoomIn animate__slower', 0.2, true).ref;

  // Background image cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 2000); // Cycle every 3 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <HeroSection>
      {/* Static deep space gradient at the very back */}
      <StaticGradientBackground />

      {/* Dynamic background images */}
      <BackgroundContainer>
        {backgrounds.map((img, i) => (
          <BackgroundImage key={i} img={img} active={i === bgIndex} />
        ))}
      </BackgroundContainer>

      {/* Starfield overlay with parallax and float */}
      <StarOverlay />

      {/* Main Content */}
      <Content>
        <Title ref={titleRef}>
          ELEXDON TECH
        </Title>
        <Subtitle ref={subtitleRef}>
         Developing flexible range of solutions and services.
        </Subtitle>
        {/*
          I've uncommented the ButtonGroup as it's a common element in hero sections,
          but if you truly don't want it, you can remove these lines again.
        */}
        {/* <ButtonGroup ref={buttonGroupRef}>
          <CTAButton onClick={() => navigate('/domainspage')}>🚀 Get Started</CTAButton>
          <CTAButton onClick={() => navigate('/aboutus')}>📘 Learn More</CTAButton>
        </ButtonGroup> */}
      </Content>
    </HeroSection>
  );
};

export default Hero;