import React, { useState, useEffect } from 'react'; // useRef is no longer needed directly in CountUp
import styled, { keyframes } from 'styled-components';
import { useInView } from 'react-intersection-observer'; // Make sure you've installed this: npm install react-intersection-observer
import bg from "../Images/galaxy.gif"


// --- Keyframe Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// slideInLeft and slideInRight are defined but not used in this specific component.
// I'll keep them as they were in your provided snippet, assuming they might be for future use.
const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

// --- Styled Components ---
const FactsSectionWrapper = styled.section`
//   background: linear-gradient(135deg, #f0f4f8, #e0e7ed);
  background-image:url(${bg});
  background-size:cover;
  color: #2c3e50; /* Dark text for contrast */
  padding: 30px 20px;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const SectionHeader = styled.div`
  max-width: 900px;
  margin: 0 auto 60px auto;
  opacity: 0; /* Hidden initially */
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.2s;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  color: #007AFF; /* Vibrant blue accent */
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 122, 255, 0.2);
`;

const SectionDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1rem);
  color: white;
  line-height: 1.6;
//   margin-bottom: 30px;
`;

const CallToAction = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #007AFF 0%, #00C9FF 100%); /* Blue gradient button */
  color: white;
  padding: 15px 35px;
  border-radius: 50px; /* Pill shape */
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 122, 255, 0.3);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 122, 255, 0.4);
    background: linear-gradient(90deg, #00C9FF 0%, #007AFF 100%); /* Reverse gradient on hover */
  }
`;

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
`;

const FactCard = styled.div`
  background: rgba(255,255,255,0.2);
  border-radius: 15px;
  padding: 40px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 122, 255, 0.08); /* Subtle border */
  opacity: 0; /* Hidden initially */
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(0, 122, 255, 0.2);
  }
`;

const FactNumber = styled.div`
  font-size: clamp(2rem, 3vw, 4rem);
  font-weight: 900;
  color: #007AFF; /* Vibrant blue accent */
  margin-bottom: 10px;
  background: linear-gradient(45deg, #007AFF, #00C9FF); /* Gradient text */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0 4px 15px rgba(0, 122, 255, 0.3);
`;

const FactLabel = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #5d6d7e;
  color:white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;


const CountUp = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  // This is the crucial part: `useInView` returns its own `ref`
  // that needs to be directly attached to the element being observed.
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // Ensures the count animates only once when it enters the viewport
    threshold: 0.5,    // Triggers when 50% of the component is visible
  });

  useEffect(() => {
    if (!inView) {
      // Resets the count if it scrolls out of view. With `triggerOnce: true`,
      // this mainly ensures it starts from 0 on initial load if not in view.
      setCount(0);
      return;
    }

    let start = 0;
    // Calculates how much to increment in each step to reach 'end' within 'duration'
    const increment = end / (duration / 10);
    const step = 10; // Updates every 10 milliseconds

    const timer = setInterval(() => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start)); // Update the count, rounding up
      } else {
        setCount(end); // Once 'end' is reached, set to final value and stop
        clearInterval(timer);
      }
    }, step);

    // Cleanup function: clears the interval if the component unmounts
    // or if the dependencies change and the effect reruns.
    return () => clearInterval(timer);
  }, [inView, end, duration]); // Effect dependencies

  // Attach the `inViewRef` to the `<span>` element that displays the number.
  return <span ref={inViewRef}>{prefix}{count.toLocaleString()}{suffix}</span>;
};



const FactsSection = () => {
  // `useInView` hook for the header section.
  // This makes the header text fade in when it scrolls into view.
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true, // Header text animates once
    threshold: 0.3,    // Triggers when 30% of the header is visible
  });

  return (
    <FactsSectionWrapper>
      <SectionHeader ref={headerRef} style={{ animationPlayState: headerInView ? 'running' : 'paused' }}>
        <SectionTitle>The Facts Are In!</SectionTitle>
        <SectionDescription>
          We're on a mission to help people learn, grow and achieve more in life. In achieving this, we have the following accomplishments to show for it. So join us now!
        </SectionDescription>
        {/* <CallToAction href="#contact">Join Us Now</CallToAction> */}
      </SectionHeader>

      <FactsGrid>
        {/* Each FactCard uses a `delay` prop for staggered animation,
            and contains a `CountUp` component that will animate when it enters view. */}
        <FactCard delay="0.4s">
          <FactNumber>
            <CountUp end={1500} suffix=" +" />
          </FactNumber>
          <FactLabel>Clients</FactLabel>
        </FactCard>

        <FactCard delay="0.6s">
          <FactNumber>
            <CountUp end={1852} suffix=" +" />
          </FactNumber>
          <FactLabel>Projects Completed</FactLabel>
        </FactCard>

        <FactCard delay="0.8s">
          <FactNumber>
            <CountUp end={800} suffix=" +" />
          </FactNumber>
          <FactLabel>Students Trained</FactLabel>
        </FactCard>

        <FactCard delay="1s">
          <FactNumber>
            <CountUp end={100} suffix=" +" />
          </FactNumber>
          <FactLabel>Awards Won</FactLabel>
        </FactCard>
      </FactsGrid>
    </FactsSectionWrapper>
  );
};

export default FactsSection;