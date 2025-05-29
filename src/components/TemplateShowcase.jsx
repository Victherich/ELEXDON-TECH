import React from 'react';
import styled, { keyframes } from 'styled-components';
import templateImg from '../Images/laptops.png';
import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css'

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-50px); }
  100% { transform: translateY(0px) }
`;

const Section = styled.section`
  position: relative;
  padding: 70px 20px;
  background: linear-gradient(135deg, #f0f4ff, #ffffff);
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
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

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;

  img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  }
`;

// Floating Shape
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

const TemplateShowcase = () => {
  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  
  return (
    <Section>
      {/* Background Shapes with Stronger Colors and Wider Spread */}
      {[
        { top: '5%', left: '-10%', size: '120px', gradient: 'radial-gradient(circle, #9333ea, #7e22ce)', duration: '7s' },
        { top: '10%', left: '85%', size: '130px', gradient: 'radial-gradient(circle, #f59e0b, #ef4444)', duration: '6s' },
        { top: '60%', left: '-5%', size: '150px', gradient: 'radial-gradient(circle, #10b981, #06b6d4)', duration: '8s' },
        { top: '20%', left: '70%', size: '100px', gradient: 'radial-gradient(circle, #e11d48, #f43f5e)', duration: '5s' },
        { top: '85%', left: '90%', size: '110px', gradient: 'radial-gradient(circle, #2563eb, #1d4ed8)', duration: '6.5s' },
        { top: '40%', left: '50%', size: '140px', gradient: 'radial-gradient(circle, #14b8a6, #3b82f6)', duration: '9s' },
        { top: '90%', left: '10%', size: '100px', gradient: 'radial-gradient(circle, #facc15, #eab308)', duration: '7.2s' },
        { top: '-8%', left: '60%', size: '160px', gradient: 'radial-gradient(circle, #6366f1, #4f46e5)', duration: '10s' },
        { top: '75%', left: '75%', size: '90px', gradient: 'radial-gradient(circle, #f97316, #fb923c)', duration: '6s' },
        { top: '25%', left: '5%', size: '100px', gradient: 'radial-gradient(circle, #ec4899, #d946ef)', duration: '5.5s' },
        { top: '55%', left: '90%', size: '120px', gradient: 'radial-gradient(circle, #06b6d4, #3b82f6)', duration: '7s' },
      ].map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}

      {/* Main Content */}
      <ContentWrapper>
        <TextContent>
          <Heading ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Find the Template that Fits your Business</Heading>
          <SubText ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
            Elexdon's easy-to-use website builder helps even the most novice users create stunning,
            high-quality websites. Choose from hundreds of professionally designed templates, use the
            simple drag-and-drop builder to customize, and get your new website online today!
          </SubText>
          {/* <CTA href="#">Browse Templates</CTA> */}
        </TextContent>

        <ImageWrapper>
          <img src={templateImg} alt="Website Template Preview" />
        </ImageWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default TemplateShowcase;
