
import React from 'react';
import styled from 'styled-components';
import { Fade, Slide } from 'react-awesome-reveal';
import p33 from '../Images2/p33.jpg';
import { FaHeart, FaLightbulb, FaHandshake, FaStar, FaGlobe, FaCogs } from 'react-icons/fa';

const AboutUsContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  // background-color: #ffffff;
  padding-top: 0;
  overflow: hidden;
`;

const HeroSection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${p33}) center center / cover no-repeat;
  color: white;
  padding: 150px 20px;
  text-align: center;
  position: relative;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 10px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.1vw, 1.2rem);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentSection = styled.div`
  padding: 80px 120px;
  @media (max-width: 1024px) {
    padding: 60px 40px;
  }
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ContentHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  // color: #6B84A2;
 color:#2f5f9bff;
  margin-bottom: 15px;
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #555;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const MissionVisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const MissionCard = styled.div`
  background: #f8f8f8;
  border-left: 5px solid orange;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #6B84A2;
  margin-bottom: 15px;
`;

const CardText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  text-align: center;
  margin-top: 40px;
`;

const ValueCard = styled.div`
  background: #2f5f9bff;;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: orange;
    transform: scale(1.05);
  }

  svg {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`;

const ValueTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`;

const WhoWeAre = () => {
  const missionVisionData = [
    {
      title: "Our Vision",
      text: "We don't just build technology; we build pathways to progress, one innovative solution at a time.",
    },
    {
      title: "Our Mission",
      text: "In the digital age, talent is everywhere. We are the bridge connecting that talent to global opportunity.",
    },
    {
      title: "Our Culture",
      text: "The future isn't a distant idea—it's what we're building today, with every line of code and every partnership we forge",
    },
  ];

  const valuesData = [
    { title: "Integrity", icon: <FaHeart /> },
    { title: "Innovation", icon: <FaLightbulb /> },
    { title: "Partnership", icon: <FaHandshake /> },
    { title: "Quality", icon: <FaStar /> },
    { title: "Professionalism", icon: <FaGlobe /> },
    { title: "Responsibility", icon: <FaCogs /> },
  ];

  return (
    <AboutUsContainer>
      <HeroSection>
        <Slide direction="down" triggerOnce={false} threshold={0.1}>
          <HeroTitle>Who We Are</HeroTitle>
        </Slide>
        <Slide direction="down" triggerOnce={false} delay={200} threshold={0.1}>
          <HeroSubtitle>
           Elexdon: A world-class integrated web solution provision company with a track record of success in tech services. We develop and offer a flexible range of solutions development and services. </HeroSubtitle>
        </Slide>
      </HeroSection>

      <ContentSection>
        <Fade triggerOnce={false} threshold={0.1}>
          <ContentHeader>
            <SectionTitle>Our Foundation</SectionTitle>
            <SectionSubtitle>
              Elexdon Digital Technologies was founded on a simple principle: to use technology as a catalyst for growth and development. We are a team of dedicated professionals committed to excellence, integrity, and making a lasting impact.
            </SectionSubtitle>
          </ContentHeader>
        </Fade>

        <MissionVisionGrid>
          {missionVisionData.map((item, index) => (
            <Fade direction="up" triggerOnce={false} delay={index * 150} threshold={0.1} key={index}>
              <MissionCard>
                {/* <CardTitle>{item.title}</CardTitle> */}
                <CardText>{item.text}</CardText>
              </MissionCard>
            </Fade>
          ))}
        </MissionVisionGrid>

        <Fade triggerOnce={false} threshold={0.1}>
          <ContentHeader>
            <SectionTitle>Our Core Values</SectionTitle>
            <SectionSubtitle>
              These are the guiding principles that define our work, our relationships, and our commitment to our clients and community.
            </SectionSubtitle>
          </ContentHeader>
        </Fade>

        <ValuesGrid>
          {valuesData.map((value, index) => (
            <Fade direction="up" triggerOnce={false} delay={index * 100} threshold={0.1} key={index}>
              <ValueCard>
                {value.icon}
                <ValueTitle>{value.title}</ValueTitle>
              </ValueCard>
            </Fade>
          ))}
        </ValuesGrid>
      </ContentSection>
    </AboutUsContainer>
  );
};

export default WhoWeAre;