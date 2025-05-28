

// import React, { useEffect, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import herobg from '../Images/herobg2.jpg';
// import herobg2 from '../Images/herobg1.jpg';
// import herobg3 from '../Images/herobg3.jpg';
// import herobg4 from '../Images/herobg4.jpg';
// import herobg5 from '../Images/herobg5.jpg';


// // Animations
// const float = keyframes`
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-20px); }
// `;

// const pulse = keyframes`
//   0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.4); }
//   50% { box-shadow: 0 0 40px rgba(212, 175, 55, 1); }
// `;

// const backgroundScroll = keyframes`
//   0% { background-position: 0 0; }
//   100% { background-position: -1000px 0; }
// `;

// // Styled Components
// const HeroSection = styled.section`
//   width: 100%;
//   height: 100vh;
//   position: relative;
//   overflow: hidden;
//   border-radius:500px 0px 500px 0px;
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   inset: 0;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   transition: opacity 1.5s ease-in-out;
//   opacity: ${props => (props.show ? 1 : 0)};
//   z-index: ${props => props.zIndex};
// `;

// const StarsOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 200%;
//   height: 200%;
//   background: url('/stars.gif') repeat;
//   opacity: 0.1;
//   animation: ${backgroundScroll} 60s linear infinite;
//   z-index: 1;
// `;

// const Content = styled.div`
//   position: relative;
//   z-index: 2;
//   text-align: center;
//   color: #ffffff;
//   padding: 0 20px;
//   max-width: 800px;
//   margin: 0 auto;
//   top: 50%;
//   transform: translateY(-50%);
// `;

// const Title = styled.h1`
//   font-size: 3.5rem;
//   animation: ${float} 5s ease-in-out infinite;
//   color: white;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
// `;

// const Subtitle = styled.p`
//   margin-top: 20px;
//   font-size: 1.3rem;
//   color: #E6E6FF;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
// `;

// const ButtonGroup = styled.div`
//   margin-top: 40px;
//   display: flex;
//   gap: 20px;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

// const CTAButton = styled.a`
//   padding: 15px 30px;
//   font-size: 1rem;
//   background: #1488CC;
//   border: none;
//   border-radius: 50px;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   animation: ${pulse} 2.5s ease-in-out infinite;

//   &:hover {
//     background: #b983ff;
//     color: #ffffff;
//   }
// `;

// const Hero = () => {
//   const [bgSwitch, setBgSwitch] = useState(0);
//   const bgArray = [herobg, herobg2, herobg3, herobg4];

//   useEffect(() => {
//     const id = setInterval(() => {
//       setBgSwitch(prev => (prev + 1) % bgArray.length);
//     }, 3000);

//     return () => clearInterval(id);
//   }, []);

//   return (
//     <HeroSection>
//       {/* Background crossfade */}
//       <BackgroundImage
//         show={bgSwitch === 0}
//         style={{ backgroundImage: `url(${bgArray[0]})` }}
//         zIndex={0}
//       />
//       <BackgroundImage
//         show={bgSwitch === 1}
//         style={{ backgroundImage: `url(${bgArray[1]})` }}
//         zIndex={0}
//       />
//       <BackgroundImage
//         show={bgSwitch === 2}
//         style={{ backgroundImage: `url(${bgArray[2]})` }}
//         zIndex={0}
//       />
//       <BackgroundImage
//         show={bgSwitch === 3}
//         style={{ backgroundImage: `url(${bgArray[3]})` }}
//         zIndex={0}
//       />
    

//       <StarsOverlay />

//       <Content>
//         <Title>ELEXDON HOST</Title>
//         <Subtitle>Hosting That Glows. Power That Moves. Insanity in Performance.</Subtitle>
//         <ButtonGroup>
//           <CTAButton href="#">Get Started</CTAButton>
//           <CTAButton href="#">Learn More</CTAButton>
//         </ButtonGroup>
//       </Content>
//     </HeroSection>
//   );
// };

// export default Hero;















// import React, { useEffect, useRef, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import 'animate.css';

// import herobg from '../Images/herobg2.jpg';
// import herobg2 from '../Images/herobg1.jpg';
// import herobg3 from '../Images/herobg3.jpg';
// import herobg4 from '../Images/herobg4.jpg';

// // Keyframe animations
// const float = keyframes`
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-20px); }
// `;

// const pulse = keyframes`
//   0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.4); }
//   50% { box-shadow: 0 0 40px rgba(212, 175, 55, 1); }
// `;

// const backgroundScroll = keyframes`
//   0% { background-position: 0 0; }
//   100% { background-position: -1000px 0; }
// `;

// // Styled Components
// const HeroSection = styled.section`
//   width: 100%;
//   height: 100vh;
//   position: relative;
//   overflow: hidden;
//   border-radius: 500px 0px 500px 0px;
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   inset: 0;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   transition: opacity 1.5s ease-in-out;
//   opacity: ${props => (props.show ? 1 : 0)};
//   z-index: ${props => props.zIndex};
// `;

// const StarsOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 200%;
//   height: 200%;
//   background: url('/stars.gif') repeat;
//   opacity: 0.1;
//   animation: ${backgroundScroll} 60s linear infinite;
//   z-index: 1;
// `;

// const Content = styled.div`
//   position: relative;
//   z-index: 2;
//   text-align: center;
//   color: #ffffff;
//   padding: 0 20px;
//   max-width: 800px;
//   margin: 0 auto;
//   top: 50%;
//   transform: translateY(-50%);
// `;

// const Title = styled.h1`
//   font-size: 3.5rem;
//   color: white;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
// `;

// const Subtitle = styled.p`
//   margin-top: 20px;
//   font-size: 1.3rem;
//   color: #E6E6FF;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
// `;

// const ButtonGroup = styled.div`
//   margin-top: 40px;
//   display: flex;
//   gap: 20px;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

// const CTAButton = styled.a`
//   padding: 15px 30px;
//   font-size: 1rem;
//   background: #1488CC;
//   border: none;
//   border-radius: 50px;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   animation: ${pulse} 20s ease-in-out;

//   &:hover {
//     background: #b983ff;
//     color: #ffffff;
//   }
// `;

// // Scroll animation hook
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
//           observer.unobserve(el);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return {
//     ref,
//     className: isVisible ? `animate__animated ${animationClass}` : 'opacity-0',
//   };
// };

// const Hero = () => {
//   const [bgSwitch, setBgSwitch] = useState(0);
//   const bgArray = [herobg, herobg2, herobg3, herobg4];

//  const titleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
// const subtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const buttonAnim = useAnimateOnScroll('animate__zoomIn animate__slower');


//   useEffect(() => {
//     const id = setInterval(() => {
//       setBgSwitch((prev) => (prev + 1) % bgArray.length);
//     }, 3000);

//     return () => clearInterval(id);
//   }, []);

//   return (
//     <HeroSection>
//       {/* Background crossfade */}
//       {bgArray.map((bg, i) => (
//         <BackgroundImage
//           key={i}
//           show={bgSwitch === i}
//           style={{ backgroundImage: `url(${bg})` }}
//           zIndex={0}
//         />
//       ))}

//       <StarsOverlay />

//       <Content>
//         <Title ref={titleAnim.ref} className={titleAnim.className}>
//           ELEXDON HOST 🚀
//         </Title>
//         <Subtitle ref={subtitleAnim.ref} className={subtitleAnim.className}>
//           Hosting That Glows. Power That Moves. Insanity in Performance. 🌐✨
//         </Subtitle>
//         <ButtonGroup ref={buttonAnim.ref} className={buttonAnim.className}>
//           <CTAButton href="#">🚀 Get Started</CTAButton>
//           <CTAButton href="#">📘 Learn More</CTAButton>
//         </ButtonGroup>
//       </Content>
//     </HeroSection>
//   );
// };

// export default Hero;

















import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import 'animate.css';

import herobg1 from '../Images/herobg1.jpg';
import herobg2 from '../Images/herobg2.jpg';
import herobg3 from '../Images/herobg3.jpg';
import herobg4 from '../Images/herobg4.jpg';

// Background scroll stars effect
const scrollStars = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: -2000px 0; }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(100, 200, 255, 0.3); }
  50% { box-shadow: 0 0 40px rgba(100, 200, 255, 0.7); }
`;

// Styled components
const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  border-radius: 500px 0px 500px 0px;

  @media(max-width:884px){
    border-radius: 300px 0px 300px 0px;
  }
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
  z-index: 0;
`;

const StarOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: url('/stars.gif') repeat;
  opacity: 0.08;
  animation: ${scrollStars} 60s linear infinite;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
`;

const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 1.4rem;
  line-height: 1.6;
  color: #E0F7FA;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
`;

const ButtonGroup = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const CTAButton = styled.a`
  padding: 14px 28px;
  font-size: 1rem;
  border-radius: 30px;
  background: #00C9FF;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  animation: ${pulseGlow} 10s ease-in-out infinite;

  &:hover {
    background: #b983ff;
  }
`;

// Scroll hook
const useAnimateOnScroll = (animationClass) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // allow re-trigger on scroll in again
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: isVisible ? `animate__animated ${animationClass}` : 'opacity-0',
  };
};

// Main Hero component
const Hero = () => {
  const backgrounds = [herobg1, herobg2, herobg3, herobg4];
  const [bgIndex, setBgIndex] = useState(0);

  const titleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const subtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const buttonAnim = useAnimateOnScroll('animate__zoomIn animate__slower');

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection>
      {backgrounds.map((img, i) => (
        <Background key={i} img={img} active={i === bgIndex} />
      ))}

      <StarOverlay />

      <Content>
        <Title ref={titleAnim.ref} className={titleAnim.className}>
          ELEXDON HOST 🚀
        </Title>
        <Subtitle ref={subtitleAnim.ref} className={subtitleAnim.className}>
          Hosting that glows. Power that moves. Infrastructure that dares to dream. ✨🌐
        </Subtitle>
        <ButtonGroup ref={buttonAnim.ref} className={buttonAnim.className}>
          <CTAButton href="/domainspage">🚀 Get Started</CTAButton>
          <CTAButton href="/aboutus">📘 Learn More</CTAButton>
        </ButtonGroup>
      </Content>
    </HeroSection>
  );
};

export default Hero;
