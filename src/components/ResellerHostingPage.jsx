
import React from 'react';
import styled from 'styled-components';
import CPanelShowcase from './CpanelShowCase';
import SoftaculousShowcase from './SoftaculousShowcase';
import Features from './Features';
import Border from './Border';
import rhimg from '../Images/rhimg.jpg'
import 'animate.css';
import useAnimateOnScroll from './useAnimateOnScroll';
import Features2 from './Features2';

const PageWrapper = styled.div`
  position: relative;
  background: linear-gradient(to right, #eef2f3, #dfe9f3);
  overflow: hidden;
  padding: 0;
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(100px);
  z-index: 0;
  animation: float 8s ease-in-out infinite alternate;

  @keyframes float {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-30px);
    }
  }
`;

const BlobBlue = styled(Blob)`
  top: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #00c6ff, #0072ff);
`;

const BlobPink = styled(Blob)`
  bottom: -120px;
  right: -120px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #fcb045, #fd1d1d, #833ab4);
`;



const Hero = styled.section`
  text-align: center;
  padding: 100px 20px 60px;
  position: relative;
  z-index: 1;
  background-image: url(${rhimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* Semi-transparent black overlay */
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    text-transform: uppercase;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: auto;
    color: #f1f1f1;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  }
`;


const PlansSection = styled.section`
  padding: 60px 20px;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: auto;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    color: #2B32B2;
  }
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const PlanCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    color: #007bff;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;

    li {
      margin-bottom: 10px;
      color: #333;
      font-size: 0.95rem;
    }
  }

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #0056b3;
    }
  }
`;

const ResellerHostingPage = () => {
    const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');



  return (
    <PageWrapper>
      <BlobBlue />
      <BlobPink />

      <Hero>
        <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Reseller Hosting</h1>
        <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
          More Growth. More Value. More Speed. <br />
          We provide you with all of the tools and support needed to have your business up and running.
        </p>
      </Hero>

      <PlansSection>
        <h2>cPanel Reseller Hosting Plans</h2>
        <PlansGrid>
          <PlanCard>
            <h3>Pentium Reseller</h3>
            <ul>
              <li>25 GB Storage Space</li>
              <li>15000 GB Monthly Bandwidth</li>
              <li>10 Resold Accounts</li>
              <li>Weekly Backup</li>
              <li>Free cPanel/WHM</li>
              <li>SSL Certificate</li>
              <li>24/7 Support</li>
            </ul>
            <button>Add to Cart</button>
          </PlanCard>

          <PlanCard>
            <h3>Personal Reseller</h3>
            <ul>
              <li>100 GB Storage Space</li>
              <li>Unlimited Monthly Bandwidth</li>
              <li>50 Resold Accounts</li>
              <li>Weekly Backup</li>
              <li>Free cPanel/WHM/WHMCS</li>
              <li>SSL Certificate</li>
              <li>24/7 Support</li>
            </ul>
            <button>Add to Cart</button>
          </PlanCard>

          <PlanCard>
            <h3>Unlimited Reseller</h3>
            <ul>
              <li>150 GB Storage Space</li>
              <li>Unlimited Monthly Bandwidth</li>
              <li>Unlimited Resold Accounts</li>
              <li>Weekly Backup</li>
              <li>Free cPanel/WHM/WHMCS</li>
              <li>SSL Certificate</li>
              <li>24/7 Support</li>
            </ul>
            <button>Add to Cart</button>
          </PlanCard>
        </PlansGrid>
      </PlansSection>
      <CPanelShowcase/>
      <Border/>
      <SoftaculousShowcase/>
      <Features2/>
    </PageWrapper>
  );
};

export default ResellerHostingPage;
