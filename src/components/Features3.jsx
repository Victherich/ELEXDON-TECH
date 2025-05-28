



// components/Features.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  FaCloud,
  FaArrowUp,
  FaLock,
  FaSyncAlt,
  FaLifeRing,
  FaRocket,
} from 'react-icons/fa';
import featurebg from '../Images/featurebg.jpeg';
import { useRef, useState, useEffect } from 'react';
import 'animate.css'

// Scroll animation hook
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
          setVisible(false); // Optional: remove animation when out of view
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: isVisible ? `animate__animated ${animationClass}` : 'opacity-0',
  };
};

// Subtle animation for entry (can keep or remove since we're using animate.css)
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Section = styled.section`
  padding: 100px 20px;
  background-image: url(${featurebg});
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(6px);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  color: white;
  text-shadow: 1px 1px 5px rgba(0, 0, 50, 0.9);
  margin-bottom: 16px;
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 50px auto;
  color: #111;
  opacity: 0.9;
`;

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;

const FeatureBox = styled.div`
  width: 250px;
  padding: 30px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  /* animation handled by animate.css + hook */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }
`;

const Icon = styled.div`
  font-size: 2.4rem;
  color: #6366f1;
  margin-bottom: 16px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
`;

const CTA = styled.a`
  display: inline-block;
  margin-top: 50px;
  padding: 14px 28px;
  background: linear-gradient(90deg, #4f46e5, #0ea5e9);
  color: white;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(90deg, #0ea5e9, #4f46e5);
  }
`;
const Features3 = () => {
  const features = [
    {
      icon: <FaSyncAlt />,
      title: 'Up To 20X Faster Servers',
      text: 'Enjoy the latest speed technologies such as Solid State Drive RAID-10 Storage Array’s, PHP7, Caching, CDN & more.',
    },
    {
      icon: <FaCloud />,
      title: '99.9% Uptime Guarantee',
      text: 'All of our shared hosting plans are built on a robust infrastructure which guarantee a 99.9% uptime',
    },
    {
      icon: <FaArrowUp />,
      title: 'Supermicro Server Hardware',
      text: 'Our Supermicro rackmount-based servers are designed for continuous high performance in a datacenter environment.',
    },
    {
      icon: <FaLock />,
      title: 'Our Optimized Network',
      text: 'We operate Cisco/Brocade-powered network. We have connectivity to Level3, Highwinds, HE, Cogent and Integra.',
    },
    {
      icon: <FaRocket />,
      title: 'Server Management',
      text: 'We offer a range of management options to suit your needs. Choose from self-managed, managed or fully managed.',
    },
    {
      icon: <FaLifeRing />,
      title: 'Tier IV Phoenix Datacenter',
      text: 'All Hostiko dedicated servers are hosted in our Tier IV Phoenix datacenter. power, network, climate and security systems.',
    },
  ];

  // For each feature, call two animation hooks — one for Title, one for Text
  const animTitle0 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animText0 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animText1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animText2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animText3 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animTitle4 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animText4 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animTitle5 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const animText5 = useAnimateOnScroll('animate__fadeInUp animate__slower');

  // Group animations for easy access
  const animTitles = [animTitle0, animTitle1, animTitle2, animTitle3, animTitle4, animTitle5];
  const animTexts = [animText0, animText1, animText2, animText3, animText4, animText5];



   const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');

  return (
    <Section>
      <Heading  ref={heroTitleAnim.ref} className={heroTitleAnim.className} >Elexdon Hosting Experience</Heading>
      <SubHeading>
        Great features included with all plans
        -Our hosting packages come loaded with many big time features as standard and clients love this! Take a look below at what you get with every hosting package ordered or domain name registered respectively.
      </SubHeading>

      <FeaturesGrid>
        {features.map(({ icon, title, text }, index) => {
          return (
            <FeatureBox key={index}>
              <Icon>{icon}</Icon>

              {/* Animate only Title */}
              <Title
                ref={animTitles[index].ref}
                className={animTitles[index].className}
              >
                {title}
              </Title>

              {/* Animate only Text */}
              <Text
                // ref={animTexts[index].ref}
                // className={animTexts[index].className}
              >
                {text}
              </Text>
            </FeatureBox>
          );
        })}
      </FeaturesGrid>
    </Section>
  );
};


export default Features3;
