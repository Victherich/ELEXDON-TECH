
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Placeholder images for apps, replace with real ones
import wpLogo from '../Images/sft1.png';
import magentoLogo from '../Images/sft2.png';
import joomlaLogo from '../Images/sft3.png';
import drupalLogo from '../Images/sft4.png';
import opencartLogo from '../Images/sft5.png';
import bootstrapLogo from '../Images/sft6.png';
import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css'

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-50px); }
  100% { transform: translateY(0px) }
`;

const Section = styled.section`
  position: relative;
  padding: 100px 10px;
  background: linear-gradient(135deg, #f0f4ff, #ffffff);
  overflow: hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  // width:100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  // gap: 50px;

  @media (max-width: 884px) {
    flex-direction: column-reverse;
    text-align: center;
   
  }
`;

const TextContent = styled.div`
  // flex: 1;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  background: linear-gradient(to right, #4f46e5, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const SubText = styled.p`
  font-size: 1.1rem;
  color: #333;
  max-width: 600px;
  line-height: 1.6;
`;

const CTA = styled.a`
  display: inline-block;
  margin-top: 30px;
  padding: 14px 28px;
  background: linear-gradient(90deg, #4f46e5, #06b6d4);
  color: white;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(90deg, #06b6d4, #4f46e5);
  }
`;

const ImagesGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-gap: 50px;
  justify-content: center;
  
 

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 60px);
    margin-bottom: 30px;
    width:100%;
    display:flex;
    flex-wrap:wrap;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    background: white;
    padding: 10px;
    
  }
`;

// Floating Shapes
const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  top: ${props => props.top};
  left: ${props => props.left};
  background: ${props => props.gradient};
  opacity: 0.25;
  border-radius: 50%;
  animation: ${float} ${props => props.duration} ease-in-out infinite;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SoftaculousShowcase = () => {
 const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');


  
  return (
    <Section>
      {[
        { top: '5%', left: '-10%', size: '120px', gradient: 'radial-gradient(circle, #9333ea, #7e22ce)', duration: '7s' },
        { top: '10%', left: '85%', size: '130px', gradient: 'radial-gradient(circle, #f59e0b, #ef4444)', duration: '6s' },
        { top: '60%', left: '-5%', size: '150px', gradient: 'radial-gradient(circle, #10b981, #06b6d4)', duration: '8s' },
        { top: '20%', left: '70%', size: '100px', gradient: 'radial-gradient(circle, #e11d48, #f43f5e)', duration: '5s' },
        { top: '85%', left: '90%', size: '110px', gradient: 'radial-gradient(circle, #2563eb, #1d4ed8)', duration: '6.5s' },
        { top: '40%', left: '50%', size: '140px', gradient: 'radial-gradient(circle, #14b8a6, #3b82f6)', duration: '9s' },
      ].map((shape, idx) => (
        <FloatingShape key={idx} {...shape} />
      ))}

      <ContentWrapper>
        <TextContent>
          <Heading ref={heroTitleAnim.ref} className={heroTitleAnim.className}>1-Click App Installations with Softaculous</Heading>
          <SubText ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
            Softaculous can automatically install, back up, and update over 100 different scripts, including WordPress, Magento, Joomla, Bootstrap, Drupal, Zen Cart, OpenCart, and many more.
          </SubText>
          {/* <CTA href="#">Start Installing Now</CTA> */}
        </TextContent>

        <ImagesGrid>
          <img src={wpLogo} alt="WordPress" />
          <img src={magentoLogo} alt="Magento" />
          <img src={joomlaLogo} alt="Joomla" />
          <img src={bootstrapLogo} alt="Bootstrap" />
          <img src={drupalLogo} alt="Drupal" />
          <img src={opencartLogo} alt="OpenCart" />
        </ImagesGrid>
      </ContentWrapper>
    </Section>
  );
};

export default SoftaculousShowcase;
