
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import learn from '../Images2/learn.png'
import EAcademyPageHero from "./EAcademyPageHero";

const theme = {
  primary: "#2f5f9bff",
  white: "#ffffff",
};

const PageWrapper = styled.div`
 background:rgba(107, 132, 162, 0.1);
  color: ${(props) => props.theme.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 4rem 6rem;
  }
`;

const Section = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  font-size: 1rem;
  line-height: 1.6;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.primary};
  }
`;

const ImageBlock = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: 16px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  text-align: center;

  h3 {
    margin-bottom: 0.5rem;
  }
`;

export default function EAcademy() {
  return (
    <ThemeProvider theme={theme}>
        <EAcademyPageHero/>
      <PageWrapper>
        <Fade direction="up" triggerOnce={false}>
          <h1>E-Academy</h1>
          <p>
            Learn, grow, and explore with Elexdon’s E-Academy. Discover modern
            courses, training programs, and workshops designed to upskill you
            for the future.
          </p>
        </Fade>

        <Section>
          <Slide direction="left" triggerOnce={false}>
            <TextBlock>
              <h2>Interactive Learning</h2>
              <p>
                Access a wide range of courses with interactive modules,
                practical exercises, and real-world projects to boost your
                skills.
              </p>
            </TextBlock>
          </Slide>

          <Slide direction="right" triggerOnce={false}>
            <ImageBlock>
              <img
                src={learn}
                alt="Learning Illustration"
              />
            </ImageBlock>
          </Slide>
        </Section>

        <Zoom triggerOnce={false}>
          <h2>Our Programs</h2>
          <CardGrid>
            <Card>
              <h3>Technology</h3>
              <p>Stay ahead with courses in AI, Web Dev, and Cloud Computing.</p>
            </Card>
            <Card>
              <h3>Business</h3>
              <p>Sharpen your entrepreneurial and management skills.</p>
            </Card>
            <Card>
              <h3>Creative</h3>
              <p>Unleash your creativity with design, media, and arts courses.</p>
            </Card>
          </CardGrid>
        </Zoom>
      </PageWrapper>
    </ThemeProvider>
  );
}
