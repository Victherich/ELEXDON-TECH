
import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

// Import placeholder images for the team members
// NOTE: You should replace these with actual team photos.
import teamMember1 from "../Images/team1.jpg"
import teamMember2 from "../Images/team2.jpg"
import teamMember3 from "../Images/team3.jpg"
import teamMember4 from '../Images2/p35.jpg';

// --- Team Data (Placeholder) ---
const teamMembersData = [
  {
    id: 1,
    name: "OKORONKWO MICHAEL",
    position: "CEO / Senior Developer",
    image: teamMember1,
  },
  {
    id: 2,
    name: "AMAKA NZOM",
    position: "Admin/Front-End Designer",
    image: teamMember2,
  },
  {
    id: 3,
   name: "AYODELE SEGUN PETER",
    position: "UI Designer/Back-end Developer",
    image: teamMember3,
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Senior GIS Analyst",
    image: teamMember4,
  },
  // {
  //   id: 5,
  //   name: "Sarah Johnson",
  //   position: "UI/UX Designer",
  //   image: teamMember1,
  // },
  // {
  //   id: 6,
  //   name: "David Wilson",
  //   position: "Mobile App Developer",
  //   image: teamMember2,
  // },
];

// --- Styled Components ---

const TeamSectionContainer = styled.section`
  background-color: #f8f8f8;
  padding: 80px 120px;
  text-align: center;
  font-family: Arial, sans-serif;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3.5vw, 4rem);
  font-weight: 900;
  color: #6B84A2;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #5D6D7E;
  max-width: 800px;
  margin: 0 auto 60px auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const TeamMemberCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);

    /* Show overlay on hover */
    & > div {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MemberOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(107, 132, 162, 0.85); /* Semi-transparent overlay */
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const MemberName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 5px;
`;

const MemberPosition = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #e0e0e0;
`;

// --- Team Section Component ---
const TeamSection = () => {
  return (
    <TeamSectionContainer>
      <Fade direction="down" triggerOnce={false} threshold={0.1}>
        <SectionTitle>Meet Our Team</SectionTitle>
        <SectionSubtitle>
          A collective of passionate and skilled professionals driving innovation and excellence in every project.
        </SectionSubtitle>
      </Fade>
      <TeamGrid>
        {teamMembersData.map((member, index) => (
          <Fade direction="left" triggerOnce={false} delay={index * 100} threshold={0.1} key={member.id}>
            <TeamMemberCard>
              <MemberImage src={member.image} alt={member.name} />
              <MemberOverlay>
                <MemberName>{member.name}</MemberName>
                <MemberPosition>{member.position}</MemberPosition>
              </MemberOverlay>
            </TeamMemberCard>
          </Fade>
        ))}
      </TeamGrid>
    </TeamSectionContainer>
  );
};

export default TeamSection;