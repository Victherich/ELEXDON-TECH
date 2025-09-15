
// import React from 'react';
// import styled from 'styled-components';
// import { Fade } from 'react-awesome-reveal';

// // Import placeholder images for the team members
// // NOTE: You should replace these with actual team photos.
// import teamMember1 from "../Images2/t1.jpeg"
// import teamMember2 from "../Images2/t2.jpeg"
// import teamMember3 from "../Images2/t3.jpeg"
// import teamMember4 from '../Images2/t4.jpeg';
// import teamMember5 from "../Images2/t5.jpeg"
// import teamMember6 from '../Images2/t6.jpeg';

// // --- Team Data (Placeholder) ---
// const teamMembersData = [
//   {
//     id: 1,
//     name: "OKORONKWO MICHAEL",
//     position: "CEO / Senior Developer",
//     image: teamMember1,
//   },
//   {
//     id: 2,
//     name: "AMAKA NZOM",
//     position: "Admin/Front-End Designer",
//     image: teamMember2,
//   },
//   {
//     id: 3,
//    name: "AYODELE SEGUN PETER",
//     position: "UI Designer/Back-end Developer",
//     image: teamMember3,
//   },
//   {
//     id: 4,
//     name: "Michael Brown",
//     position: "Senior GIS Analyst",
//     image: teamMember4,
//   },
//   {
//     id: 5,
//     name: "Michael Brown",
//     position: "Senior GIS Analyst",
//     image: teamMember5,
//   },
//   {
//     id: 6,
//     name: "Michael Brown",
//     position: "Senior GIS Analyst",
//     image: teamMember6,
//   },
// ];

// // --- Styled Components ---

// const TeamSectionContainer = styled.section`
//   background-color: #f8f8f8;
//   padding: 80px 120px;
//   text-align: center;
//   font-family: Arial, sans-serif;
//   overflow: hidden;

//   @media (max-width: 1024px) {
//     padding: 60px 40px;
//   }
//   @media (max-width: 768px) {
//     padding: 40px 20px;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: clamp(2rem, 3.5vw, 4rem);
//   font-weight: 900;
//   color: #6B84A2;
//   margin-bottom: 20px;
// `;

// const SectionSubtitle = styled.p`
//   font-size: 1.1rem;
//   color: #5D6D7E;
//   max-width: 800px;
//   margin: 0 auto 60px auto;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     margin-bottom: 40px;
//   }
// `;

// const TeamGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   gap: 30px;
//   justify-items: center;
// `;

// const TeamMemberCard = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: 250px;
//   height: 250px;
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);

//     /* Show overlay on hover */
//     & > div {
//       opacity: 1;
//       visibility: visible;
//     }
//   }
// `;

// const MemberImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   display: block;
// `;

// const MemberOverlay = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: rgba(107, 132, 162, 0.85); /* Semi-transparent overlay */
//   color: white;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: center;
//   height: 100%;
//   opacity: 0;
//   visibility: hidden;
//   transition: opacity 0.3s ease, visibility 0.3s ease;
// `;

// const MemberName = styled.h3`
//   font-size: 1.1rem;
//   font-weight: 700;
//   margin-bottom: 5px;
// `;

// const MemberPosition = styled.p`
//   font-size: 1rem;
//   font-weight: 400;
//   color: #e0e0e0;
// `;

// // --- Team Section Component ---
// const TeamSection = () => {
//   return (
//     <TeamSectionContainer>
//       <Fade direction="down" triggerOnce={false} threshold={0.1}>
//         <SectionTitle>Meet Our Team</SectionTitle>
//         <SectionSubtitle>
//           A collective of passionate and skilled professionals driving innovation and excellence in every project.
//         </SectionSubtitle>
//       </Fade>
//       <TeamGrid>
//         {teamMembersData.map((member, index) => (
//           <Fade direction="left" triggerOnce={false} delay={index * 100} threshold={0.1} key={member.id}>
//             <TeamMemberCard>
//               <MemberImage src={member.image} alt={member.name} />
//               <MemberOverlay>
//                 <MemberName>{member.name}</MemberName>
//                 <MemberPosition>{member.position}</MemberPosition>
//               </MemberOverlay>
//             </TeamMemberCard>
//           </Fade>
//         ))}
//       </TeamGrid>
//     </TeamSectionContainer>
//   );
// };

// export default TeamSection;






import React from 'react';
import styled from 'styled-components';
import { Fade, Zoom } from 'react-awesome-reveal';

// Import team images
import teamMember1 from "../Images2/t1.jpeg";
import teamMember2 from "../Images2/t2.jpeg";
import teamMember3 from "../Images2/t3.jpeg";
import teamMember4 from '../Images2/t4.jpeg';
import teamMember5 from "../Images2/t5.jpeg";
import teamMember6 from '../Images2/t6.jpeg';

// --- Team Data ---
const teamMembersData = [
  {
    id: 1,
    name: "MICHAEL E. OKORONKWO",
    position: "CEO / Senior Developer",
    image: teamMember1,
    // isCEO: true,
  },

   {
    id: 4,
    name: "AYODELE SEGUN PETER",
    position: "Mobile App / Back-end Developer",
    image: teamMember4,
  },

    {
    id: 6,
    name: "VICTOR NDU",
    position: "Web Developer",
    image: teamMember6,
  },

    {
    id: 2,
    name: "DAVID O. UCHE",
    position: "Graphic Designer-System Engineer / Marketing",
    image: teamMember2,
  },

  {
    id: 3,
    name: "HELEN EBONG UDOH",
    position: "Admin / Secretary",
    image: teamMember3,
  },

 
  {
    id: 5,
    name: "INNOCENT AGBAEZE",
    position: "Projects Officer / Uk-Representative",
    image: teamMember5,
  },

];

// --- Styled Components ---

const TeamSectionContainer = styled.section`
  background: linear-gradient(135deg, #f0f4f8, #ffffff);
  padding: 80px 60px;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 1024px) {
    padding: 60px 30px;
  }
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3.5vw, 4rem);
  font-weight: 800;
  color: #2C3E50;
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

const CEOCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  // grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  justify-items: center;

  @media (max-width: 767px) {
    // grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
  }
`;

const TeamMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CircleImageWrapper = styled.div`
  position: relative;
  width: ${({ isCEO }) => (isCEO ? '280px' : '300px')};
  height: ${({ isCEO }) => (isCEO ? '280px' : '300px')};
  border-radius: 50%;
  overflow: hidden;
  background: white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  cursor: pointer;

  @media(max-width:767px){
      width: ${({ isCEO }) => (isCEO ? '280px' : '100px')};
  height: ${({ isCEO }) => (isCEO ? '280px' : '100px')};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);

    & > div.overlay {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

const MemberOverlay = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(44, 62, 80, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  text-align: center;
  padding: 20px;
`;

const MemberName = styled.h3`
  font-size: ${({ isCEO }) => (isCEO ? '1.4rem' : '1rem')};
  font-weight: 700;
  margin: 15px 0 5px;
  color: #2C3E50;


  @media(max-width:768px){
    font-size: ${({ isCEO }) => (isCEO ? '1.4rem' : '0.7rem')};
  }
`;

const MemberPosition = styled.p`
  font-size: ${({ isCEO }) => (isCEO ? '1.05rem' : '0.95rem')};
  font-weight: 500;
  color: #6B84A2;
  margin: 0;

   @media(max-width:768px){
    // display:none;
  }
`;

const MemberPosition2 = styled.p`
  font-size: ${({ isCEO }) => (isCEO ? '1.05rem' : '0.95rem')};
  font-weight: 500;
  color: #6B84A2;
  margin: 0;

   @media(max-width:884px){
    display:none;
  }
`;

// --- Team Section Component ---
const TeamSection = () => {
  const ceo = teamMembersData.find(member => member.isCEO);
  const others = teamMembersData.filter(member => !member.isCEO);

  return (
    <TeamSectionContainer>
      <Fade direction="down" triggerOnce={false} threshold={0.1}>
        <SectionTitle>Meet Our Team</SectionTitle>
        <SectionSubtitle>
          A collective of passionate and skilled professionals driving innovation and excellence in every project.
        </SectionSubtitle>
      </Fade>

      {/* CEO on top */}
      {/* <CEOCardWrapper>
        <Fade direction="up" triggerOnce={false}>
          <TeamMemberCard>
            <CircleImageWrapper isCEO>
              <MemberImage src={ceo.image} alt={ceo.name} />
              <MemberOverlay className="overlay">
                <div>
                  <MemberName isCEO style={{color:"white"}}>{ceo.name}</MemberName>
                  <MemberPosition isCEO style={{color:"white"}}>{ceo.position}</MemberPosition>
                </div>
              </MemberOverlay>
            </CircleImageWrapper>
            <MemberName isCEO style={{fontSize:"1rem"}}>{ceo.name}</MemberName>
            <MemberPosition isCEO>{ceo.position}</MemberPosition>
          </TeamMemberCard>
        </Fade>
      </CEOCardWrapper> */}

      {/* Other team members below */}
      <TeamGrid>
        {others.map((member, index) => (
          <Zoom
  // direction="left"
  triggerOnce={false}
  delay={index * 100}
  duration={1000}
  key={member.id}
>
            <TeamMemberCard>
              <CircleImageWrapper>
                <MemberImage src={member.image} alt={member.name} />
                <MemberOverlay className="overlay">
                  <div >
                    <MemberName style={{color:"white"}}>{member.name}</MemberName>
                    <MemberPosition2 style={{color:"white"}}>{member.position}</MemberPosition2>
                  </div>
                </MemberOverlay>
              </CircleImageWrapper>
              <MemberName>{member.name}</MemberName>
              <MemberPosition style={{fontSize:"0.9rem"}}>{member.position}</MemberPosition>
            </TeamMemberCard>
          </Zoom>
        ))}
      </TeamGrid>
    </TeamSectionContainer>
  );
};

export default TeamSection;
