
import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaUsers, FaLaptopCode, FaGlobe, FaBriefcase } from "react-icons/fa";
import job from '../Images2/job.png'

// --- Hero Section ---
const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  background: url(${job}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
  }

   @media(max-width:320px){
   height: 100vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 15px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

// --- Section ---
const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #2f5f9bff;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #2f5f9bff;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: #222;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

// --- Job Section ---
const JobCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 25px 20px;
  text-align: left;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const JobTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #2f5f9bff;
`;

const JobMeta = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 12px;
`;

const ApplyButton = styled.a`
  display: inline-block;
  padding: 10px 22px;
  background: #2f5f9bff;
  color: white;
  font-weight: 600;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #1f4775;
    transform: translateY(-2px);
  }
`;

// --- Call to Action ---
const CTA = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: #2f5f9bff;
  color: white;
`;

const CTATitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 20px;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 12px 28px;
  background: white;
  color: #2f5f9bff;
  font-weight: 700;
  border-radius: 30px;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-3px);
  }
`;

// --- Page Component ---
const CareersPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero>
        <HeroContent>
          <Fade direction="up" triggerOnce={false}>
            <HeroTitle>Careers at Elexdon</HeroTitle>
            <HeroSubtitle>
              Build the future with us. Join a passionate, innovative team
              shaping digital solutions worldwide.
            </HeroSubtitle>
          </Fade>
        </HeroContent>
      </Hero>

      {/* Why Work With Us */}
      <Section>
        <Fade direction="up" triggerOnce={false}>
          <Heading>Why Work With Us</Heading>
        </Fade>
        <Grid>
          <Fade direction="up" cascade triggerOnce={false}>
            <Card>
              <IconWrapper><FaUsers /></IconWrapper>
              <Title>Collaborative Culture</Title>
              <Text>
                Work with brilliant minds in a supportive and inspiring
                environment.
              </Text>
            </Card>

            <Card>
              <IconWrapper><FaLaptopCode /></IconWrapper>
              <Title>Innovative Projects</Title>
              <Text>
                Get hands-on experience with cutting-edge technologies that make
                real impact.
              </Text>
            </Card>

            <Card>
              <IconWrapper><FaGlobe /></IconWrapper>
              <Title>Global Reach</Title>
              <Text>
                Be part of a company expanding its footprint and changing lives
                worldwide.
              </Text>
            </Card>
          </Fade>
        </Grid>
      </Section>

      {/* Open Positions */}
      <Section style={{ background: "#f9f9f9" }}>
        <Fade direction="up" triggerOnce={false}>
          <Heading>Open Positions</Heading>
        </Fade>
        <Grid>
          <Fade direction="up" cascade triggerOnce={false}>
            <JobCard>
              <JobTitle>Frontend Developer</JobTitle>
              <JobMeta>Lagos, Nigeria · Full-time</JobMeta>
              <Text>
                Looking for React/JavaScript developers to build scalable web
                applications.
              </Text>
              <ApplyButton href="mailto:careers@elexdon.com">Apply Now</ApplyButton>
            </JobCard>

            <JobCard>
              <JobTitle>UI/UX Designer</JobTitle>
              <JobMeta>Remote · Contract</JobMeta>
              <Text>
                Creative designers with experience in Figma and product design
                needed to shape digital experiences.
              </Text>
              <ApplyButton href="mailto:info@elexdontech.com">Apply Now</ApplyButton>
            </JobCard>

            <JobCard>
              <JobTitle>Digital Marketing Specialist</JobTitle>
              <JobMeta>Abuja, Nigeria · Full-time</JobMeta>
              <Text>
                Passionate about SEO, ads, and content strategy? Join our
                marketing team.
              </Text>
              <ApplyButton href="mailto:info@elexdontech.com">Apply Now</ApplyButton>
            </JobCard>
          </Fade>
        </Grid>
      </Section>

      {/* Call to Action */}
      <CTA>
        <Fade direction="up" triggerOnce={false}>
          <CTATitle>Ready to Join the Elexdon Team?</CTATitle>
          <CTAButton href="mailto:info@elexdontech.com">Send Your CV</CTAButton>
        </Fade>
      </CTA>
    </>
  );
};

export default CareersPage;
