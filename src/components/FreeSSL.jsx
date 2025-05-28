import React from 'react';
import styled from 'styled-components';
import heroImage from '../Images/sslimg5.jpg';
import sslVisual from '../Images/sslimg2.jpg';
import encryptGraphic from '../Images/sslimg.jpg';
import 'animate.css';
import useAnimateOnScroll from './useAnimateOnScroll';

const Hero = styled.section`
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 140px 20px 100px;
  text-align: center;
  color: white;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 3.2rem;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    margin-bottom: 10px;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.2rem;
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  background: #f9fbfe;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #2c3e50;
  }

  p {
    max-width: 800px;
    margin: 0 auto 30px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #444;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.5);
  transition: 0.3s;
  font-size: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  span {
    font-size: 2rem;
    display: block;
    margin-bottom: 10px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
`;

const CTASection = styled.div`
  background: linear-gradient(120deg, #4dabf7, #74c0fc);
  color: white;
  text-align: center;
  padding: 60px 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  button {
    background: white;
    color: #1c7ed6;
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #f1f3f5;
    }
  }
`;

const FreeSSL = () => {
    const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const a = useAnimateOnScroll('animate__fadeInUp animate__slower');
const b = useAnimateOnScroll('animate__fadeInUp animate__slower');
const c = useAnimateOnScroll('animate__fadeInUp animate__slower');
const d = useAnimateOnScroll('animate__fadeInUp animate__slower');
const e = useAnimateOnScroll('animate__fadeInDown animate__slower');


  return (
    <>
      <Hero>
        <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>🚀 Enjoy Free SSL with Encrypt</h1>
        <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Protect your site and boost user trust with Encrypt — a free, powerful SSL solution for Elexdon customers.</p>
      </Hero>

      <Section>
        <h2 ref={e.ref} className={e.className}>🔒 Encrypt’s SSL Benefits</h2>
        <Features>
          <FeatureCard><span>💰</span>Cost-Free — No hidden charges!</FeatureCard>
          <FeatureCard><span>⚡</span>Instant Installation — Just a few clicks away</FeatureCard>
          <FeatureCard><span>📧</span>No Email Validation Needed</FeatureCard>
          <FeatureCard><span>🧠</span>No Dedicated IP Required</FeatureCard>
          <FeatureCard><span>🌍</span>Trusted By All Major Browsers</FeatureCard>
          <FeatureCard><span>♻️</span>Auto-Renews Every 90 Days</FeatureCard>
        </Features>

        <StyledImage src={sslVisual} alt="SSL Browser Example" />
      </Section>

      <Section>
        <h2 ref={a.ref} className={a.className}>🌐 What is Encrypt?</h2>
        <p ref={b.ref} className={b.className}>
         Encrypt is a free, automated, and open certificate authority (CA), run for the public’s benefit by the Internet Security Research Group (ISRG). It makes it possible to obtain browser-trusted certificates for your domains at no cost that renew automatically every 90 days. With Encrypt there are no complicated configurations, no validation emails and you can have multiple certificates installed on your hosting accounts, for each domain and subdomain you choose. The certificates are domain-validated and don’t require a dedicated IP. They are supported by all major browsers.</p>

        <StyledImage src={encryptGraphic} alt="How Encrypt Works" />
      </Section>

      <Section>
        <h2 ref={c.ref} className={d.className}>🛠️ How Do You Encrypt?</h2>
        <p ref={d.ref} className={d.className}>
        You can install Let’s Encrypt certificates for free through the cPanel of your hosting account under the security tab. You can have multiple certificates installed on your account for each domain and subdomain you want. The certificates auto renew unless you choose to cancel them through the cPanel interface. Please note that the Let’s Encrypt interface is currently deployed for shared hosting accounts.  </p>
      </Section>
{/* 
      <CTASection>
        <h2>🎉 Start Securing Your Site for Free</h2>
        <button>Go to cPanel Now</button>
      </CTASection> */}
    </>
  );
};

export default FreeSSL;
