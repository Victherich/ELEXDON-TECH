






// import React, { useEffect, useRef, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import 'animate.css/animate.min.css'; // Import animate.css
// import logo from '../Images/logo4.jpeg';

// import car10 from "../Images/logo3.jpeg";
// import car11 from "../Images/herobg2.jpg";
// import car12 from "../Images/ELogo.png";
// import car13 from "../Images/herobg4.jpg";
// import car14 from "../Images/herobg5.jpg";
// import car15 from "../Images/herobg5.jpg";
// import { NavLink } from 'react-router-dom';

// // Optional fallback fade-in if you want to use styled-components animation somewhere
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const cubeRotate = keyframes`
//   from {
//     transform: rotateY(0deg);
//   }
//   to {
//     transform: rotateY(360deg);
//   }
// `;

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: ${({ theme }) =>
//     theme === 'dark' ? 'linear-gradient(90deg, #0f172a, #1e293b)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
//   // padding: 80px 10px;
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   border-radius: 500px 0px 0px 0px;
//   padding-top:80px;
//   padding-bottom:30px;
// `;

// const CubeContainer = styled.div`
//   perspective: 1000px;
//   width: 300px;
//   height: 300px;
//   margin-bottom: 2rem;
// `;

// const Cube = styled.div`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   transform-style: preserve-3d;
//   animation: ${cubeRotate} 10s infinite linear;
// `;

// const Face = styled.div`
//   position: absolute;
//   width: 300px;
//   height: 300px;
//   background-size: cover;
//   background-position: center;
//   opacity: 0.95;
//   border-radius: 12px;
//   box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
// `;

// const ContentSection = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
//   justify-content: center;
//   margin-bottom: 2rem;
// `;

// const Column = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 600px;
//   padding: 1rem;
//   background: ${({ theme }) => (theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)')};
//   border-radius: 8px;
//   box-shadow: 0 4px 10px rgba(0,0,0,0.15);
// `;

// // const Text = styled.p`
// //   font-size: 1rem;
// //   line-height: 1.6;
// // `;

// const Text = styled.p`
//   font-size: 1.25rem;
//   line-height: 1.8;
//   font-weight: 500;
//   text-align: justify;
//   padding: 1.5rem;
//   border-radius: 16px;
//   background: rgba(255, 255, 255, 0.07);
//   backdrop-filter: blur(8px);
//   color: transparent;
//   background-image: linear-gradient(135deg,rgb(255, 65, 179),rgb(67, 61, 248),rgb(47, 161, 104));
//   -webkit-background-clip: text;
//   background-clip: text;
//   text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
//   letter-spacing: 0.03em;
//   transition: all 0.4s ease;

//   &:hover {
//     transform: scale(1.015);
//     box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
//   }

//   @media (max-width: 768px) {
//     font-size: 1.1rem;
//     padding: 1rem;
//   }
// `;



// const Div = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   align-items: center;
//   gap: 100px;

//   @media(max-width:884px){
//     flex-direction: column;
//     gap: 50px;
//   }
// `;



// const useAnimateOnScroll = (animationClass) => {
//   const ref = useRef(null);
//   const [isVisible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Optional: only trigger once, or allow retrigger
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       {
//         // Wait until at least 50% of the element is visible
//         threshold: 0.5,
//         // Pushes the "activation zone" up, so animation doesn't trigger too early at bottom of screen
//         rootMargin: '0px 0px -50px 0px',
//       }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return {
//     ref,
//     className: isVisible ? `animate__animated ${animationClass}` : '',
//   };
// };


// // Cube face config
// const faces = [
//   { img: car10, transform: 'rotateY(0deg) translateZ(150px)' },
//   { img: car11, transform: 'rotateY(90deg) translateZ(150px)' },
//   { img: car12, transform: 'rotateY(180deg) translateZ(150px)' },
//   { img: car13, transform: 'rotateY(-90deg) translateZ(150px)' },
//   { img: car14, transform: 'rotateX(90deg) translateZ(150px)' },
//   { img: car15, transform: 'rotateX(-90deg) translateZ(150px)' },
// ];

// // Main Component
// const AboutComponent = () => {
//   const textAnim = useAnimateOnScroll('animate__jackInTheBox animate__slower');
//   const cubeAnim = useAnimateOnScroll('animate__zoomIn animate__slower');

//   return (
//     <Container>
//       <Div>
//         <CubeContainer ref={cubeAnim.ref} className={cubeAnim.className}>
//           <Cube>
//             {faces.map((face, idx) => (
//               <Face key={idx} style={{ backgroundImage: `url(${face.img})`, transform: face.transform }} />
//             ))}
//           </Cube>
//         </CubeContainer>

//         <ContentSection>
//           <Column>
//           <Text ref={textAnim.ref} className={textAnim.className}>
//   ELEXDON HOST is more than just web hosting — it’s a catalyst for creators, innovators, and businesses worldwide. With rock-solid security, seamless scalability, and lightning-fast performance, we turn bold ideas into powerful digital experiences.
// </Text>

//             {/* <Text ref={textAnim.ref} className={textAnim.className}>
//               From blazing-fast servers to 24/7 expert support, we offer more than just space online — we provide peace of mind, possibility, and performance. Whether you're a startup chasing innovation or an established brand expanding your digital frontier, ELEXDON HOST is the reliable partner fueling your journey.
//             </Text> */}
          
//           </Column>
//         </ContentSection>
//       </Div>

//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
//         <p>Learn More About</p>
//         <NavLink to='/aboutus'>
//           <img src={logo} alt='logo' style={{ width: "150px", cursor: "pointer" }} />
//         </NavLink>
//       </div>
//     </Container>
//   );
// };

// export default AboutComponent;




import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components'; // Import `css` for conditional styling if needed
import 'animate.css/animate.min.css'; // Import animate.css
import logo from '../Images/logo4.jpeg';
import car14 from '../Images2/elexdonlogo.jpg';
import car15 from '../Images2/elexdonlogo.jpg';
import car10 from "../Images/logo3.jpeg";
import car11 from "../Images/herobg2.jpg";
import car12 from "../Images/ELogo.png";
import car13 from "../Images2/tech.jpg";
// import car14 from "../Images/herobg5.jpg";
// import car15 from "../Images/herobg5.jpg";
import { NavLink } from 'react-router-dom';

// Optional fallback fade-in if you want to use styled-components animation somewhere
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// REMOVED: const cubeRotate = keyframes` ... `
// This animation is replaced by the JavaScript-driven irregular movement.

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) =>
    theme === 'dark' ? 'linear-gradient(90deg, #0f172a, #1e293b)' : 'linear-gradient(90deg, #f8fafc, #e2e8f0)'};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  border-radius: 500px 0px 0px 0px;
  padding-top:80px;
  padding-bottom:30px;
  
`;

const CubeContainer = styled.div`
  perspective: 1000px; /* Essential for 3D effect */
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
  display: flex; /* Centering the cube */
  justify-content: center;
  align-items: center;
  gap:100px;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  /* Apply the state-controlled transform here */
  transform: ${props => `rotateX(${props.$rotateX}deg) rotateY(${props.$rotateY}deg) rotateZ(${props.$rotateZ}deg)`};
  transition: transform 2s ease-in-out; /* Smooth transition for irregular movements */
`;

const Face = styled.div`
  position: absolute;
  width: 200px; /* Should match CubeContainer width/height */
  height: 200px; /* Should match CubeContainer width/height */
  background-size: cover;
  background-position: center;
  opacity: 0.95;
  border-radius: 12px;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
`;

const ContentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
  // width:50%;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding: 1rem;
  // background: ${({ theme }) => (theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)')};
  border-radius: 8px;
  // box-shadow: 0 4px 10px rgba(0,0,0,0.15);
`;

const Text = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  font-weight: 500;
  text-align: justify;
  padding: 1.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(8px);
  color: transparent;
  background-image: linear-gradient(135deg,rgb(255, 65, 179),rgb(67, 61, 248),rgb(47, 161, 104));
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
  letter-spacing: 0.03em;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.015);
    box-shadow: 0 6px 20px rgba(255, 255, 255, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem;
  }
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media(max-width:884px){
    flex-direction: column;
    gap: 50px;
  }
`;

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
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: isVisible ? `animate__animated ${animationClass}` : '',
  };
};

// Cube face config (remains the same)
const faces = [
  { img: car10, transform: 'rotateY(0deg) translateZ(150px)' },
  { img: car11, transform: 'rotateY(90deg) translateZ(150px)' },
  { img: car12, transform: 'rotateY(180deg) translateZ(150px)' },
  { img: car13, transform: 'rotateY(-90deg) translateZ(150px)' },
  { img: car14, transform: 'rotateX(90deg) translateZ(150px)' },
  { img: car15, transform: 'rotateX(-90deg) translateZ(150px)' },
];

// Main Component
const AboutComponent = () => {
  const textAnim = useAnimateOnScroll('animate__jackInTheBox animate__slower');
  const cubeAnim = useAnimateOnScroll('animate__zoomIn animate__slower');

  // --- State for irregular cube movement ---
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);

  useEffect(() => {
    // Function to generate random rotation increments
    const getRandomRotationIncrement = () => Math.floor(Math.random() * 90) - 45; // -45 to 45 degrees

    // Interval to update rotation
    const intervalId = setInterval(() => {
      setRotateX(prev => prev + getRandomRotationIncrement());
      setRotateY(prev => prev + getRandomRotationIncrement());
      setRotateZ(prev => prev + getRandomRotationIncrement());
    }, 2000); // Change rotation every 3 seconds

    // Cleanup: clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Container>
      <Div>
        <CubeContainer ref={cubeAnim.ref} className={cubeAnim.className}>
          {/* Pass rotation state as props to the Cube styled component */}
          <Cube $rotateX={rotateX} $rotateY={rotateY} $rotateZ={rotateZ}>
            {faces.map((face, idx) => (
              <Face key={idx} style={{ backgroundImage: `url(${face.img})`, transform: face.transform }} />
            ))}
          </Cube>
        </CubeContainer>

        <ContentSection>
          <Column>
            <Text ref={textAnim.ref} className={textAnim.className}>
             Elexdon Digital Technologies is more than just a tech company — we’re a driving force for creators, innovators, and businesses around the globe. With cutting-edge solutions, robust security, and scalable performance, we empower bold ideas and transform them into impactful digital experiences. </Text>
          </Column>
        </ContentSection>
      </Div>

      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
        <p>Learn More About</p>
        <NavLink to='/aboutus'>
          <img src={logo} alt='logo' style={{ width: "150px", cursor: "pointer" }} />
        </NavLink>
      </div> */}
    </Container>
  );

  };

export default AboutComponent;