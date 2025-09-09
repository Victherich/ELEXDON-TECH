
import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { FaCalendarAlt, FaNewspaper } from "react-icons/fa";

// --- Hero Section ---
const Hero = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  background: url("https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99") center/cover no-repeat;
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
   height: 80vh;
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
  text-align: left;

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

// --- Page Component ---
const InsightsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero>
        <HeroContent>
          <Fade direction="up" triggerOnce={false}>
            <HeroTitle>Insights</HeroTitle>
            <HeroSubtitle>
              Stay updated with our latest events, news, and press releases.  
              Explore how Elexdon is shaping the digital landscape.
            </HeroSubtitle>
          </Fade>
        </HeroContent>
      </Hero>

      {/* Events Section */}
      <Section>
        <Fade direction="up" triggerOnce={false}>
          <Heading>Events</Heading>
        </Fade>
        <Grid>
          <Fade direction="up" cascade triggerOnce={false}>
            <Card>
              <IconWrapper><FaCalendarAlt /></IconWrapper>
              <Title>Tech Innovation Summit</Title>
              <Text>
                Join us for a two-day conference where Elexdon showcases its
                cutting-edge digital solutions and future projects.
              </Text>
            </Card>

            <Card>
              <IconWrapper><FaCalendarAlt /></IconWrapper>
              <Title>Developer Workshop</Title>
              <Text>
                Hands-on coding sessions designed to empower developers with the
                latest tools and best practices in digital technologies.
              </Text>
            </Card>

            <Card>
              <IconWrapper><FaCalendarAlt /></IconWrapper>
              <Title>Elexdon Academy Bootcamp</Title>
              <Text>
                A training bootcamp where participants gain real-world experience
                in eLearning, fintech, and product design.
              </Text>
            </Card>
          </Fade>
        </Grid>
      </Section>

      {/* Press Releases Section */}
      <Section style={{ background: "#f9f9f9" }}>
        <Fade direction="up" triggerOnce={false}>
          <Heading>Press Releases</Heading>
        </Fade>
        <Grid>
          <Fade direction="up" cascade triggerOnce={false}>
            <Card>
              <IconWrapper><FaNewspaper /></IconWrapper>
              <Title>Elexdon Launches E-School Suite</Title>
              <Text>
                Our new platform transforms learning with powerful tools for
                educators, students, and institutions worldwide.
              </Text>
            </Card>

            <Card>
              <IconWrapper><FaNewspaper /></IconWrapper>
              <Title>Elexdon Pay Expansion</Title>
              <Text>
                Announcing the rollout of Elexdon Pay across more regions,
                bringing seamless payment solutions to millions of users.
              </Text>
            </Card>

            <Card>
              <IconWrapper><FaNewspaper /></IconWrapper>
              <Title>Partnership with Tech Giants</Title>
              <Text>
                Elexdon partners with leading global companies to expand digital
                services and create new opportunities for users.
              </Text>
            </Card>
          </Fade>
        </Grid>
      </Section>
    </>
  );
};

export default InsightsPage;
