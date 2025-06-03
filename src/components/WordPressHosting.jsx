
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import hostingHeroImg from '../Images/wpbg.png';
import 'animate.css'
import useAnimateOnScroll from './useAnimateOnScroll';

const PageWrapper = styled.div`
  font-family: 'Segoe UI', sans-serif;
  background: #f9fafb;
  color: #111827;
`;

const Hero = styled.section`
  background-image: url(${hostingHeroImg});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* semi-transparent black */
    z-index: -1;
  }
`;






const HeroTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
`;


const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1d4ed8;
  margin-bottom: 20px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  padding: 30px;
  text-align: center;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const PlanCard = styled.div`
  background: white;
  border: 2px solid #3b82f6;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
`;

const Price = styled.h3`
  font-size: 1.8rem;
  color: #10b981;
  margin: 10px 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
  text-align: left;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 0.95rem;

    svg {
      color: #22c55e;
      margin-right: 10px;
    }
  }
`;

const CTAButton = styled.button`
  background: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #2563eb;
  }
`;

const WordPressHosting = () => {
const [wordpressProducts, setWordpressProducts]=useState([]);
     const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');


useEffect(() => {
  fetch("https://www.elexdonhost.com.ng/api_elexdonhost/get_wordpress_hosting_products.php")
    .then(res => res.json())
    .then(data => {
      if (data.products?.product) {
        setWordpressProducts(data.products.product);
        console.log(data)
      } else {
        console.error("No WordPress products found:", data);
      }
    })
    .catch(err => console.error("Fetch error:", err));
}, []);




  return (
    <PageWrapper>
      <Hero>
        <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>WORDPRESS HOSTING WITH ELEXDON HOST</HeroTitle>
        <HeroSubtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
          Managed WordPress Hosting focused on performance, security, and 24/7 expert support.
        </HeroSubtitle>
      </Hero>

      <Section>
        <SectionTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className} >Main Features</SectionTitle>
        <FeaturesGrid >
          {['100% Scalable', 'Free Migration', 'Optimized Speed', 'Enhanced Security', '24/7 Extreme Support'].map((feature, index) => (
            <FeatureCard key={index} ><p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>{feature}</p></FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>

      <Section>
        <SectionTitle>Choose Your Perfect Plan</SectionTitle>
        {/* <PlansGrid>
          {[{
            name: 'E-Basic',
            price: '₦15,000/yr',
            mo: '₦1,500/mo',
            features: [
              '5GB SSD Diskspace',
              'Unlimited Bandwidth',
              'Free SSL Certificate',
              'Unlimited MySQL Databases',
              '1 Core CPU',
              'Unlimited Website Builder',
              'Control Panel',
              '1GB DDR4 RAM'
            ]
          }, {
            name: 'E-Business',
            price: '₦30,000/yr',
            mo: '₦3,000/mo',
            features: [
              '25GB SSD Diskspace',
              'Unlimited Bandwidth',
              'Free SSL Certificate',
              'Unlimited MySQL Databases',
              '1 Core CPU',
              'Unlimited Website Builder',
              'Control Panel',
              '2GB DDR4 RAM'
            ]
          }, {
            name: 'E-Pro',
            price: '₦45,000/yr',
            mo: '₦4,500/mo',
            features: [
              '25GB SSD Diskspace',
              'Unlimited Bandwidth',
              'Free SSL Certificate',
              'Unlimited MySQL Databases',
              '2 Core CPU',
              'Unlimited Website Builder',
              'Control Panel',
              '4GB DDR4 RAM'
            ]
          }].map((plan, i) => (
            <PlanCard key={i}>
              <h3>{plan.name}</h3>
              <Price>{plan.price}</Price>
              <p>{plan.mo}</p>
              <FeaturesList>
                {plan.features.map((feat, idx) => (
                  <li key={idx}><FaCheckCircle /> {feat}</li>
                ))}
              </FeaturesList>
              <CTAButton>ORDER NOW</CTAButton>
            </PlanCard>
          ))}
        </PlansGrid> */}

        <PlansGrid>
  {wordpressProducts.map((product, i) => {
    const pricing = product.pricing?.NGN || {};
    const yearly = pricing.annually !== "-1.00" ? `${pricing.prefix}${parseInt(pricing.annually).toLocaleString()}/yr` : null;
    const monthly = pricing.monthly !== "-1.00" ? `${pricing.prefix}${parseInt(pricing.monthly).toLocaleString()}/mo` : null;
    const features = product.description?.split(/\r\n|\n|\r/).filter(Boolean) || [];

    return (
      <PlanCard key={i}>
        <h3>{product.name}</h3>
        {yearly && <Price>{yearly}</Price>}
        {monthly && <p>{monthly}</p>}
        <FeaturesList>
          {features.map((feat, idx) => (
            <li key={idx}><FaCheckCircle /> {feat}</li>
          ))}
        </FeaturesList>
        <CTAButton>ORDER NOW</CTAButton>
      </PlanCard>
    );
  })}
</PlansGrid>

      </Section>

      <Section>
        <SectionTitle>Included with All Annual Packages</SectionTitle>
        <FeaturesGrid>
          {[
            'Free SSL Certificate & .com.ng Domain',
            'Daily and Weekly Backups',
            'Firewall Tools',
            'CPanel Access'
          ].map((item, index) => (
            <FeatureCard key={index}>{item}</FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>
 <Hero>
        {/* <HeroTitle>WORDPRESS HOSTING WITH ELEXDON HOST</HeroTitle>
        <HeroSubtitle>
          Managed WordPress Hosting focused on performance, security, and 24/7 expert support.
        </HeroSubtitle> */}
      </Hero>
      <Section>
        {/* <SectionTitle>Why Choose Elexdon Host?</SectionTitle> */}
        <FeaturesGrid>
          {[
            '100% Scalable - Service can be scaled up to handle traffic spikes, there’s no need to worry..',
            'Extreme Support - If you ever need help, we’re here 24/7 to deliver fast, friendly support.',
            'Optimized Speed - Get faster load times & improved SEO with our global, cloud-based network.',
            'Free Migration - Moving over from your old host? We’ve got you covered!',
            'Dedicated WordPress Team - Intensively-trained and even consisting of WordPress core contributors, Elexdonhost’s dedicated support team knows the platform inside and out.',
            '100% In-House - Do we Outsource customer service? Not our thing. Our experts take your concerns as seriously you do, diligently providing personalized solutions.',
            '24/7 Availability - Whether you’re running an online store or managing a blog, it’s important that you can get help — day or night. That’s why Elexdonhost support team  is always available.',
            'Email or Chat - Elexdonhost’s award-winning support team is just a few clicks away! Submit a request for your issue or start a live chat (9:00AM-9:30PM PT) — we’re here to help you out.'
          ].map((text, i) => (
            <FeatureCard key={i}>{text}</FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>
    </PageWrapper>
  );
};

export default WordPressHosting;
