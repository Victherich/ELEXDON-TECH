






// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaCloud, FaArrowUp, FaLock, FaSyncAlt, FaLifeRing, FaRocket } from 'react-icons/fa';
// import featurebg from '../Images/featurebg.jpeg';

// // Subtle animation for entry
// const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// // Styled Components
// const Section = styled.section`
//   padding: 100px 20px;
//   background-image: url(${featurebg});
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   text-align: center;

//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: rgba(255, 255, 255, 0.5);
//     backdrop-filter: blur(6px);
//     z-index: 0;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }
// `;

// const Heading = styled.h2`
//   font-size: 2.8rem;

// color:white;
// text-shadow: 1px 1px 5px rgba(0, 0, 50, 0.9);
//   margin-bottom: 16px;
// `;

// const SubHeading = styled.p`
//   font-size: 1.25rem;
//   max-width: 700px;
//   margin: 0 auto 50px auto;
//   color: #111;
//   opacity: 0.9;
// `;

// const FeaturesGrid = styled.div`

// display:flex;
// justify-content:center;
// align-items:center;
// flex-wrap:wrap;
//   gap: 50px;
  
// `;

// const FeatureBox = styled.div`
// width:300px;
//   padding: 30px 20px;
//   background: #ffffff;
//   border-radius: 16px;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
//   animation: ${fadeInUp} 0.5s ease forwards;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
//   }
// `;

// const Icon = styled.div`
//   font-size: 2.4rem;
//   color: #6366f1;
//   margin-bottom: 16px;
// `;

// const Title = styled.h3`
//   font-size: 1.2rem;
//   font-weight: 600;
//   color: #111827;
//   margin-bottom: 10px;
// `;

// const Text = styled.p`
//   font-size: 0.95rem;
//   color: #555;
//   line-height: 1.5;
// `;

// const CTA = styled.a`
//   display: inline-block;
//   margin-top: 50px;
//   padding: 14px 28px;
//   background: linear-gradient(90deg, #4f46e5, #0ea5e9);
//   color: white;
//   border-radius: 9999px;
//   font-weight: 600;
//   text-decoration: none;
//   transition: background 0.3s ease, transform 0.3s ease;
//   box-shadow: 0 6px 12px rgba(0,0,0,0.08);

//   &:hover {
//     transform: translateY(-2px);
//     background: linear-gradient(90deg, #0ea5e9, #4f46e5);
//   }
// `;

// const Features = () => {
//   return (
//     <Section>
//       <Heading>Elexdon Hosting Experience</Heading>
//       <SubHeading>
//       Great features included with all plans
// -Our  hosting packages come loaded with many big time features as standard and clients love this! Take a look below at what you get with every hosting package ordered or domain name registered repectively.  </SubHeading>

//       <FeaturesGrid>
//         <FeatureBox>
//           <Icon><FaSyncAlt /></Icon>
//           <Title>Free Website Migration</Title>
//           <Text>If you already have a website, we will gladly help you migrate it to our web hosting platform.</Text>
//         </FeatureBox>

//         <FeatureBox>
//           <Icon><FaCloud /></Icon>
//           <Title>Cloud Infrastructure</Title>
//           <Text>Hosting platform built on enterprise level hardware with reliability and redundancy in mind</Text>
//         </FeatureBox>

//         <FeatureBox>
//           <Icon><FaArrowUp /></Icon>
//           <Title>Boost Your Resources</Title>
//           <Text>Premier customers can increase their available CPU and memory during periods of high traffic.</Text>
//         </FeatureBox>

//         <FeatureBox>
//           <Icon><FaLock /></Icon>
//           <Title>Free SSL Certificates</Title>
//           <Text>Although SSL certificates are now mandatory, we‘ve still got your back. In fact, all Hosting plans come with Unlimited free PositiveSSL certificates</Text>
//         </FeatureBox>

//         <FeatureBox>
//           <Icon><FaRocket /></Icon>
//           <Title>99.9% Uptime Guarantee</Title>
//           <Text>We are confident in the Quality of our Network Infrastructure, so we offer a 99.9% Network Uptime Guarantee with all our services</Text>
//         </FeatureBox>

//         <FeatureBox>
//           <Icon><FaLifeRing /></Icon>
//           <Title>24/7 Expert Support</Title>
//           <Text>Because we know that even the best technology is only as good as the people behind it. That’s why we offer expert, 24/7 support, plus a lot more. You can also use the Live Chat and create your tickets.</Text>
//         </FeatureBox>
//       </FeaturesGrid>

 
//     </Section>
//   );
// };

// export default Features;















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
  padding: 30px 20px;
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
const Features = () => {
  const features = [
    {
      icon: <FaSyncAlt />,
      title: 'Free Website Migration',
      text: 'If you already have a website, we will gladly help you migrate it to our web hosting platform.',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Infrastructure',
      text: 'Hosting platform built on enterprise level hardware with reliability and redundancy in mind',
    },
    {
      icon: <FaArrowUp />,
      title: 'Boost Your Resources',
      text: 'Premier customers can increase their available CPU and memory during periods of high traffic.',
    },
    {
      icon: <FaLock />,
      title: 'Free SSL Certificates',
      text: 'Although SSL certificates are now mandatory, we‘ve still got your back. In fact, all Hosting plans come with Unlimited free PositiveSSL certificates',
    },
    {
      icon: <FaRocket />,
      title: '99.9% Uptime Guarantee',
      text: 'We are confident in the Quality of our Network Infrastructure, so we offer a 99.9% Network Uptime Guarantee with all our services',
    },
    {
      icon: <FaLifeRing />,
      title: '24/7 Expert Support',
      text: 'Because we know that even the best technology is only as good as the people behind it. That’s why we offer expert, 24/7 support, plus a lot more. You can also use the Live Chat and create your tickets.',
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


export default Features;
