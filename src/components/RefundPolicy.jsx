
// RefundPolicyPage.jsx

import React from 'react';
import styled from 'styled-components';
import bgImage from '../Images/terms.jpg'; // Use your background image here

const Wrapper = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  position: relative;
  overflow: hidden;
`;

const DecorativeCircle = styled.div`
  position: absolute;
  width: ${(props) => props.size || '200px'};
  height: ${(props) => props.size || '200px'};
  background: ${(props) => props.gradient || 'radial-gradient(circle, #facc15, transparent)'};
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  filter: blur(50px);
  opacity: 0.6;
  z-index: 0;
`;

const Hero = styled.section`
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage}) center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 100px 20px 60px;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
  position: relative;
  z-index: 2;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #4f46e5;
`;

const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
`;

const RefundPolicyPage = () => {
  return (
    <Wrapper>
      {/* Decorative Circles */}
      <DecorativeCircle top="5%" left="10%" size="300px" gradient="radial-gradient(circle, #6366f1, transparent)" />
      <DecorativeCircle top="80%" left="60%" size="200px" gradient="radial-gradient(circle, #ec4899, transparent)" />
      <DecorativeCircle top="20%" left="75%" size="150px" gradient="radial-gradient(circle, #22d3ee, transparent)" />
      <DecorativeCircle top="70%" left="15%" size="250px" gradient="radial-gradient(circle, #a78bfa, transparent)" />
      <DecorativeCircle top="40%" left="45%" size="500px" gradient="radial-gradient(circle, rgba(255,255,255,0.3), transparent)" />

      {/* Hero Section */}
      <Hero>
        <HeroTitle>Refund Policy</HeroTitle>
        <HeroSubtitle>Understand your rights with Elexdon Hosting</HeroSubtitle>
      </Hero>

      {/* Content */}
      <Container>
        <Section>
          <SectionTitle>1. General Refund Terms</SectionTitle>
          <SectionText>
            At Elexdon Hosting, we aim to ensure customer satisfaction. If you are not satisfied with our services, you may request a refund in accordance with the terms outlined below.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>2. Eligibility for Refunds</SectionTitle>
          <SectionText>
            Refunds are available within the first 30 days of initial purchase for shared hosting, VPS hosting, and other eligible services. Domain registrations, SSL certificates, and add-ons are non-refundable.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>3. Non-Refundable Services</SectionTitle>
          <SectionText>
            The following services are not eligible for refunds:
            <ul>
              <li>Domain name registrations and renewals</li>
              <li>Dedicated servers</li>
              <li>Setup fees</li>
              <li>Third-party services</li>
              <li>Any usage-based or monthly services after 30 days</li>
            </ul>
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>4. How to Request a Refund</SectionTitle>
          <SectionText>
            To request a refund, contact our support team at <strong>billing@elexdon.com</strong> within 30 days of your purchase. Include your account information and reason for the refund.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>5. Processing Time</SectionTitle>
          <SectionText>
            Approved refunds are processed within 7–10 business days to your original payment method. You will receive a confirmation email once the refund has been issued.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>6. Chargebacks</SectionTitle>
          <SectionText>
            Customers who initiate chargebacks without contacting Elexdon for a resolution will be banned from future services. Please reach out to us first — we are here to help.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>7. Policy Updates</SectionTitle>
          <SectionText>
            Elexdon Hosting reserves the right to update this Refund Policy at any time. Changes will be reflected on this page with an updated revision date.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>8. Contact Us</SectionTitle>
          <SectionText>
            For refund questions or requests, please contact us at: <br />
            📧 support@elexdon.com <br />
            📞 +234 818 560 9702
          </SectionText>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default RefundPolicyPage;
