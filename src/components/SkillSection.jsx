// SkillsSection.jsx
import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaJs, FaNodeJs, FaPhp, FaLaravel, FaReact } from 'react-icons/fa';
import { SiJquery, SiMaterialdesign, SiSequelize, SiMongodb, SiReact } from 'react-icons/si';
import { GrOptimize } from 'react-icons/gr';

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background: rgba(255,255,255,0.7);
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #343a40;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  font-size: 1.1rem;
  color: #555;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled.div`
  background: rgba(255,255,255,0.5);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  }

  svg {
    font-size: 3rem;
    color: #007bff;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    color: #333;
    margin-top: 0.5rem;
  }
`;

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Bootstrap 4', icon: <FaBootstrap /> },
    { name: 'Materialize Design', icon: <SiMaterialdesign /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'jQuery', icon: <SiJquery /> },
    { name: 'Vanilla.js', icon: <FaJs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Laravel', icon: <FaLaravel /> },
    { name: 'SEO', icon: <GrOptimize /> },
    { name: 'Website Optimization', icon: <GrOptimize /> },
    { name: 'Website Analysis', icon: <GrOptimize /> },
      { name: 'React', icon: <FaReact /> },
  ];

  return (
    <SkillsContainer>
      <Title>Our Skills</Title>
      <Description>
        Because computers are so commonplace in most organizations, and because software exists that makes almost any task easier and more efficient, teaching computer skills from beginner to advanced will ensure your organization is operating at peak efficiency. We apply the latest computer technology skills in our services. Evolving Software for the Digital Workplace.
      </Description>
      <Grid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            {skill.icon}
            <h4>{skill.name}</h4>
          </SkillCard>
        ))}
      </Grid>
    </SkillsContainer>
  );
};

export default SkillsSection;
