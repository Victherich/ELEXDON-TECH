// import React, { useEffect, useRef, useState } from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import 'animate.css'; // For entrance animations
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Social icons

// // --- Team Member Data (Replace with your actual team members) ---
// const teamMembers = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     position: "Chief Executive Officer",
//     image: "https://placehold.co/400x400/1a1a2e/00FFFF/png?text=Alice", // Placeholder image
//     bio: "Alice leads with a clear vision, driving innovation and fostering a culture of excellence. Her strategic prowess ensures Elexdon's continuous growth and market leadership.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       facebook: "#",
//       instagram: "#"
//     }
//   },
//   {
//     id: 2,
//     name: "Bob Williams",
//     position: "Chief Technology Officer",
//     image: "https://placehold.co/400x400/1a1a2e/00FFFF/png?text=Bob",
//     bio: "Bob is the architect behind Elexdon's robust and scalable solutions. His expertise in cutting-edge technologies ensures our platforms are always at the forefront of the industry.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       facebook: "#",
//       instagram: "#"
//     }
//   },
//   {
//     id: 3,
//     name: "Charlie Brown",
//     position: "Head of Product Development",
//     image: "https://placehold.co/400x400/1a1a2e/00FFFF/png?text=Charlie",
//     bio: "Charlie translates complex ideas into user-friendly products. His passion for design and user experience ensures that Elexdon's offerings are intuitive and impactful.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       facebook: "#",
//       instagram: "#"
//     }
//   },
//   {
//     id: 4,
//     name: "Diana Miller",
//     position: "Lead Marketing Strategist",
//     image: "https://placehold.co/400x400/1a1a2e/00FFFF/png?text=Diana",
//     bio: "Diana crafts compelling narratives that resonate with our audience. Her innovative marketing strategies amplify Elexdon's reach and connect us with clients globally.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       facebook: "#",
//       instagram: "#"
//     }
//   },
//   {
//     id: 5,
//     name: "Eve Davis",
//     position: "Customer Success Manager",
//     image: "https://placehold.co/400x400/1a1a2e/00FFFF/png?text=Eve",
//     bio: "Eve ensures every client's journey with Elexdon is seamless and rewarding. Her dedication to support and client satisfaction builds lasting relationships.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       facebook: "#",
//       instagram: "#"
//     }
//   },
//   {
//     id: 6,
//     name: "Frank White",
//     position: "Senior Software Engineer",
//     image: "https://placehold.co/400x400/1a1a2e/00FFFF/png?text=Frank",
//     bio: "Frank is a coding wizard, building the core functionalities that power our services. His meticulous approach ensures robust and efficient software.",
//     social: {
//       linkedin: "#",
//       twitter: "#",
//       facebook: "#",
//       instagram: "#"
//     }
//   }
// ];

// // --- Keyframe Animations ---

// // For the glowing border on hover
// const borderGlow = keyframes`
//   0% { box-shadow: 0 0 0px rgba(0, 255, 255, 0.4); }
//   50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), inset 0 0 10px rgba(0, 255, 255, 0.6); }
//   100% { box-shadow: 0 0 0px rgba(0, 255, 255, 0.4); }
// `;

// // For the subtle pulse of the name on hover
// const namePulse = keyframes`
//   0%, 100% { text-shadow: 0 0 5px #fff; }
//   50% { text-shadow: 0 0 15px #00FFFF, 0 0 25px #00FFFF; }
// `;

// // For the bio text fade in
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // For the social icons slide in
// const slideInSocial = keyframes`
//   from { opacity: 0; transform: translateX(-10px); }
//   to { opacity: 1; transform: translateX(0); }
// `;

// // --- Styled Components ---

// const TeamSectionWrapper = styled.section`
//   background: linear-gradient(180deg, #0A1520 0%, #1A1A2E 100%); /* Deep space gradient */
//   color: #E0E0E0;
//   padding: 80px 20px;
//   text-align: center;
//   overflow: hidden;
//   position: relative;

//   &::before { /* Subtle background texture/noise */
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNzUiIG51bU9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJub1N0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAgMCAwIC0wLjUgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Z3M+') repeat;
//     opacity: 0.05; /* Very subtle */
//     z-index: 0;
//   }
// `;

// const SectionTitle = styled.h2`
//   font-size: clamp(2.5rem, 5vw, 4.5rem);
//   font-weight: 900;
//   color: #00C9FF; /* Vibrant accent color */
//   margin-bottom: 20px;
//   text-shadow: 0 0 10px rgba(0, 201, 255, 0.6);
//   position: relative;
//   z-index: 1;
// `;

// const SectionSubtitle = styled.p`
//   font-size: clamp(1rem, 2.5vw, 1.5rem);
//   color: #B0B0B0;
//   max-width: 800px;
//   margin: 0 auto 60px auto;
//   line-height: 1.6;
//   position: relative;
//   z-index: 1;
// `;

// const TeamGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
//   gap: 40px; /* Increased gap */
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
//   position: relative;
//   z-index: 1;
// `;

// // Renamed styled-component for the card, it's now wrapped by TeamCardItem
// const StyledTeamCard = styled.div`
//   background: rgba(15, 25, 40, 0.8); /* Slightly lighter dark background */
//   border-radius: 15px; /* More rounded corners */
//   padding: 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between; /* Space out content */
//   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4), inset 0 0 5px rgba(0, 201, 255, 0.2); /* Initial subtle glow */
//   transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smoother transitions */
//   position: relative;
//   overflow: hidden; /* Hide overflowing elements like bio initially */
//   min-height: 380px; /* Ensure consistent card height */

//   /* Initial state for elements that reveal on hover */
//   .bio, .social-links {
//     opacity: 0;
//     max-height: 0;
//     overflow: hidden;
//     transition: all 0.4s ease-out;
//     transform: translateY(10px);
//   }

//   &:hover {
//     background: rgba(20, 35, 55, 0.95); /* Slightly lighter on hover */
//     transform: translateY(-15px) scale(1.05) rotateZ(1deg); /* Pop out, lift, slight rotation */
//     box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.8); /* Stronger shadow and inner glow */
//     animation: ${borderGlow} 2s infinite ease-in-out; /* Pulsating border glow */
//     z-index: 2; /* Bring hovered card to front */

//     .bio, .social-links {
//       opacity: 1;
//       max-height: 150px; /* Allow content to show */
//       transform: translateY(0);
//       animation: ${fadeIn} 0.5s forwards; /* Fade in bio */
//     }

//     .social-links a {
//       animation: ${slideInSocial} 0.3s forwards; /* Staggered slide in for social icons */
//       /* These delays will be handled by the parent component's iteration */
//     }
//   }
// `;

// const ImageContainer = styled.div`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%; /* Circular image */
//   overflow: hidden;
//   border: 4px solid #00C9FF; /* Vibrant border */
//   box-shadow: 0 0 15px rgba(0, 201, 255, 0.6); /* Initial glow around image */
//   margin-bottom: 25px;
//   transition: all 0.4s ease-in-out;
//   position: relative;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     filter: grayscale(80%); /* Desaturate initially */
//     transition: filter 0.4s ease-in-out, transform 0.4s ease-in-out;
//   }

//   &::before { /* Inner border/glow effect */
//     content: '';
//     position: absolute;
//     inset: 5px;
//     border-radius: 50%;
//     border: 2px solid rgba(0, 201, 255, 0.3);
//     pointer-events: none;
//   }

//   ${StyledTeamCard}:hover & { /* Use StyledTeamCard here */
//     border-color: #00FFFF; /* Brighter border on hover */
//     box-shadow: 0 0 25px rgba(0, 255, 255, 1), 0 0 50px rgba(0, 255, 255, 0.5); /* Stronger glow */
//     transform: scale(1.05); /* Slight image container scale */
//     img {
//       filter: grayscale(0%); /* Full color on hover */
//       transform: scale(1.02); /* Slight image zoom */
//     }
//   }
// `;

// const TeamName = styled.h3`
//   font-size: 1.8rem;
//   font-weight: 800;
//   color: #FFFFFF; /* White for name */
//   margin-bottom: 5px;
//   text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
//   transition: all 0.3s ease-in-out;

//   ${StyledTeamCard}:hover & { /* Use StyledTeamCard here */
//     color: #00FFFF; /* Bright blue on hover */
//     animation: ${namePulse} 1.5s infinite alternate; /* Pulsating name glow */
//     transform: scale(1.02);
//   }
// `;

// const TeamPosition = styled.p`
//   font-size: 1rem;
//   color: #808080; /* Grey for position */
//   font-weight: 500;
//   margin-bottom: 15px;
//   transition: color 0.3s ease-in-out;

//   ${StyledTeamCard}:hover & { /* Use StyledTeamCard here */
//     color: #B0B0B0; /* Slightly lighter on hover */
//   }
// `;

// const TeamBio = styled.p`
//   font-size: 0.9rem;
//   color: #D0D0D0;
//   line-height: 1.5;
//   text-align: center;
//   margin-top: 15px;
//   margin-bottom: 20px;
// `;

// const SocialLinks = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-top: 15px;
  
//   a {
//     color: #00C9FF;
//     font-size: 20px;
//     transition: all 0.3s ease;
//     filter: drop-shadow(0 0 5px rgba(0, 201, 255, 0.3));

//     &:hover {
//       color: #fff;
//       transform: translateY(-3px) scale(1.1);
//       filter: drop-shadow(0 0 15px rgba(0, 201, 255, 0.8));
//     }
//   }
// `;

// // --- Animate on Scroll Hook (re-used from Hero section) ---
// const useAnimateOnScroll = (animationClasses, threshold = 0.2, triggerOnce = true) => {
//   const ref = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const classesToAdd = animationClasses.split(' ').filter(Boolean);

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
//           setHasAnimated(true);
//           el.classList.add('animate__animated', ...classesToAdd);
//         } else if (!entry.isIntersecting && !triggerOnce && hasAnimated) {
//           el.classList.remove('animate__animated', ...classesToAdd);
//           setHasAnimated(false);
//         }
//       },
//       { threshold: threshold }
//     );

//     observer.observe(el);
//     return () => {
//       if (el) {
//         observer.disconnect();
//       }
//     };
//   }, [animationClasses, threshold, triggerOnce, hasAnimated]);

//   return { ref };
// };


// // --- NEW COMPONENT: TeamCardItem ---
// // This component wraps each individual team member card
// const TeamCardItem = ({ member, index }) => {
//   // Call the hook at the top level of this functional component
//   const cardRef = useAnimateOnScroll('animate__fadeInUp animate__fast', 0.1, true).ref;
//   const cardAnimationDelay = `${0.2 * index}s`; // Staggered animation delay

//   return (
//     <StyledTeamCard
//       ref={cardRef}
//       style={{ animationDelay: cardAnimationDelay }}
//     >
//       <ImageContainer>
//         <img src={member.image} alt={member.name} />
//       </ImageContainer>
//       <TeamName>{member.name}</TeamName>
//       <TeamPosition>{member.position}</TeamPosition>
//       <TeamBio className="bio">{member.bio}</TeamBio>
//       <SocialLinks className="social-links">
//         {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
//         {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
//         {member.social.facebook && <a href={member.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>}
//         {member.social.instagram && <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
//       </SocialLinks>
//     </StyledTeamCard>
//   );
// };


// // --- Main OurTeam Component ---

// const OurTeam = () => {
//   const titleRef = useAnimateOnScroll('animate__fadeInDown animate__slower', 0.2, true).ref;
//   const subtitleRef = useAnimateOnScroll('animate__fadeInUp animate__slower', 0.2, true).ref;

//   return (
//     <TeamSectionWrapper>
//       <SectionTitle ref={titleRef}>Meet Our Digital Luminaries</SectionTitle>
//       <SectionSubtitle ref={subtitleRef}>
//         Behind every great solution is a passionate team. Get to know the brilliant minds driving innovation at Elexdon.
//       </SectionSubtitle>

//       <TeamGrid>
//         {teamMembers.map((member, index) => (
//           // Render the new TeamCardItem component for each member
//           <TeamCardItem key={member.id} member={member} index={index} />
//         ))}
//       </TeamGrid>
//     </TeamSectionWrapper>
//   );
// };

// export default OurTeam;


import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import 'animate.css'; // For entrance animations
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Social icons
import team1 from "../Images/team1.jpg"
import team2 from "../Images/team2.jpg"
import team3 from "../Images/team3.jpg"
import team4 from "../Images/team4.jpg"


// --- Team Member Data (Replace with your actual team members) ---
const teamMembers = [
  {
    id: 1,
    name: "OKORONKWO MICHAEL",
    position: "CEO / Senior Developer",
    image: team1, // Placeholder image
    bio: "Michael leads with a clear vision, driving innovation and fostering a culture of excellence. His strategic prowess ensures Elexdon's continuous growth and market leadership.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 2,
    name: "AMAKA NZOM",
    position: "Admin/Front-End Designer",
    image: team2,
  bio: "Amaka Nzom is a dedicated Admin and Front-End Designer at Elexdon, combining strong organizational skills with a sharp eye for user-centered design. She plays a key role in ensuring seamless operations while crafting engaging, responsive user interfaces that enhance the overall digital experience.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 3,
    name: "AYODELE SEGUN PETER",
    position: "UI Designer/Back-end Developer",
    image: team3,
    bio: "Charlie translates complex ideas into user-friendly products. His passion for design and user experience ensures that Elexdon's offerings are intuitive and impactful.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 4,
    name: "Diana Miller",
    position: "Lead Marketing Strategist",
    image: "https://placehold.co/400x400/D0E0F0/007AFF/png?text=Diana",
    bio: "Diana crafts compelling narratives that resonate with our audience. Her innovative marketing strategies amplify Elexdon's reach and connect us with clients globally.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 5,
    name: "Eve Davis",
    position: "Customer Success Manager",
    image: "https://placehold.co/400x400/D0E0F0/007AFF/png?text=Eve",
    bio: "Eve ensures every client's journey with Elexdon is seamless and rewarding. Her dedication to support and client satisfaction builds lasting relationships.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 6,
    name: "Frank White",
    position: "Senior Software Engineer",
    image: "https://placehold.co/400x400/D0E0F0/007AFF/png?text=Frank",
    bio: "Frank is a coding wizard, building the core functionalities that power our services. His meticulous approach ensures robust and efficient software.",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      instagram: "#"
    }
  }
];

// --- Keyframe Animations ---

// For the glowing border on hover
// const borderGlow = keyframes`
//   0% { box-shadow: 0 0 0px rgba(0, 122, 255, 0.4); } /* Soft blue */
//   50% { box-shadow: 0 0 20px rgba(0, 122, 255, 0.8), inset 0 0 10px rgba(0, 122, 255, 0.6); }
//   100% { box-shadow: 0 0 0px rgba(0, 122, 255, 0.4); }
// `;


const borderGlow = keyframes`
  0% { box-shadow: 0 0 0px purple; } /* Soft blue */
  50% { box-shadow: 0 0 20px rgba(0, 122, 255, 0.8), inset 0 0 10px purple; }
  100% { box-shadow: 0 0 0px purple; }
`;

// For the subtle pulse of the name on hover
const namePulse = keyframes`
  0%, 100% { text-shadow: 0 0 5px rgba(0, 0, 0, 0.2); }
  50% { text-shadow: 0 0 10px rgba(0, 122, 255, 0.7), 0 0 20px rgba(0, 122, 255, 0.5); }
`;

// For the bio text fade in
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// For the social icons slide in
const slideInSocial = keyframes`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`;

// --- Styled Components ---

const TeamSectionWrapper = styled.section`
  background: linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%); /* Light, soft gradient */
  color: #2C3E50; /* Dark charcoal text */
  padding: 30px 20px;
  text-align: center;
  overflow: hidden;
  position: relative;

  &::before { /* Subtle background texture/noise */
    content: '';
    position: absolute;
    inset: 0;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNzUiIG51bU9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJub1N0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAgMCAwIC0wLjkgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiLz48L3N2Z3M+') repeat;
    opacity: 0.1; /* Slightly more visible on light */
    z-index: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3.5vw, 4rem);
  font-weight: 900;
  color: purple; /* Vibrant accent blue */
  margin-bottom: 0px;
  text-shadow: 0 0 10px rgba(0, 122, 255, 0.4);
  position: relative;
  z-index: 1;
`;

const SectionSubtitle = styled.p`
  font-size: clamp(1rem, 1.5vw, 1rem);
  color: #5D6D7E; /* Medium grey-blue */
  max-width: 800px;
  margin: 0 auto 40px auto;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive grid */
  gap: 40px; /* Increased gap */
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

// Renamed styled-component for the card, it's now wrapped by TeamCardItem
const StyledTeamCard = styled.div`
  background: #FFFFFF; /* Pure white card background */
  border-radius: 15px; /* More rounded corners */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Space out content */
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1), inset 0 0 5px rgba(0, 122, 255, 0.1); /* Initial subtle glow/shadow */
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* Smoother transitions */
  position: relative;
  overflow: hidden; /* Hide overflowing elements like bio initially */
  min-height: 300px; /* Ensure consistent card height */
  border: 1px solid rgba(0, 122, 255, 0.05); /* Very subtle border */

  /* Initial state for elements that reveal on hover */
  .bio, .social-links {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.4s ease-out;
    transform: translateY(10px);
  }

  &:hover {
    background: #F8FBFD; /* Slightly off-white/light grey on hover */
    transform: translateY(-15px) scale(1.05) rotateZ(0deg); /* Pop out, lift, slight rotation */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), inset 0 0 20px purple; /* Stronger shadow and inner glow */
    animation: ${borderGlow} 2s infinite ease-in-out; /* Pulsating border glow */
    z-index: 2; /* Bring hovered card to front */
    border-color: rgba(0, 122, 255, 0.2); /* More visible border on hover */

    .bio, .social-links {
      opacity: 1;
      max-height: 150px; /* Allow content to show */
      transform: translateY(0);
      animation: ${fadeIn} 0.5s forwards; /* Fade in bio */
    }

    .social-links a {
      animation: ${slideInSocial} 0.3s forwards; /* Staggered slide in for social icons */
    }
  }
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Circular image */
  overflow: hidden;
  border: 4px solid #007AFF; /* Vibrant border */
  box-shadow: 0 0 15px rgba(0, 122, 255, 0.4); /* Initial glow around image */
  margin-bottom: 0px;
  transition: all 0.4s ease-in-out;
  position: relative;

   &:hover{
        transform: translateY(-15px) scale(1.05) rotateZ(360deg); /* Pop out, lift, slight rotation */
    }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // filter: grayscale(60%); /* Desaturate initially */
    transition: filter 0.4s ease-in-out, transform 0.4s ease-in-out;

   
    
  }

  &::before { /* Inner border/glow effect */
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 2px solid rgba(0, 122, 255, 0.2);
    pointer-events: none;
  }

  ${StyledTeamCard}:hover & { /* Use StyledTeamCard here */
    border-color: #00A3FF; /* Brighter accent on hover */
    box-shadow: 0 0 25px rgba(0, 122, 255, 0.8), 0 0 50px rgba(0, 122, 255, 0.3); /* Stronger glow */
    transform: scale(1.05); /* Slight image container scale */
    img {
      filter: grayscale(0%); /* Full color on hover */
      transform: scale(1.02); /* Slight image zoom */
    }
  }
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #2C3E50; /* Dark for name */
  margin-bottom: 0px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  ${StyledTeamCard}:hover & { /* Use StyledTeamCard here */
    color: purple; /* Bright accent on hover */
    animation: ${namePulse} 1.5s infinite alternate; /* Pulsating name glow */
    transform: scale(1.02);
  }
`;

const TeamPosition = styled.p`
  font-size: 1rem;
  color: #5D6D7E; /* Medium grey-blue for position */
  font-weight: 500;
  margin-bottom: 0px;
  transition: color 0.3s ease-in-out;

  ${StyledTeamCard}:hover & { /* Use StyledTeamCard here */
    color: #405160; /* Slightly darker on hover */
  }
`;

const TeamBio = styled.p`
  font-size: 0.9rem;
  color: #5D6D7E;
  line-height: 1.5;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
  
  a {
    color: #007AFF; /* Accent blue for icons */
    font-size: 20px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 5px rgba(0, 122, 255, 0.2));

    &:hover {
      color: #00A3FF; /* Brighter accent on hover */
      transform: translateY(-3px) scale(1.1);
      filter: drop-shadow(0 0 10px rgba(0, 122, 255, 0.5));
    }
  }
`;

// --- Animate on Scroll Hook (re-used) ---
const useAnimateOnScroll = (animationClasses, threshold = 0.2, triggerOnce = true) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const classesToAdd = animationClasses.split(' ').filter(Boolean);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setHasAnimated(true);
          el.classList.add('animate__animated', ...classesToAdd);
        } else if (!entry.isIntersecting && !triggerOnce && hasAnimated) {
          el.classList.remove('animate__animated', ...classesToAdd);
          setHasAnimated(false);
        }
      },
      { threshold: threshold }
    );

    observer.observe(el);
    return () => {
      if (el) {
        observer.disconnect();
      }
    };
  }, [animationClasses, threshold, triggerOnce, hasAnimated]);

  return { ref };
};


// --- TeamCardItem Component ---
// This component wraps each individual team member card
// and correctly calls the useAnimateOnScroll hook at its top level.
const TeamCardItem = ({ member, index }) => {
  // Call the hook at the top level of this functional component
  const cardRef = useAnimateOnScroll('animate__fadeInUp animate__fast', 0.1, true).ref;
  const cardAnimationDelay = `${0.2 * index}s`; // Staggered animation delay

  return (
    <StyledTeamCard
      ref={cardRef}
      style={{ animationDelay: cardAnimationDelay }}
    >
      <ImageContainer>
        <img src={member.image} alt={member.name} />
      </ImageContainer>
      <TeamName>{member.name}</TeamName>
      <TeamPosition>{member.position}</TeamPosition>
      {/* <TeamBio className="bio">{member.bio}</TeamBio> */}
      <SocialLinks className="social-links">
        {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>}
        {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
        {member.social.facebook && <a href={member.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>}
        {member.social.instagram && <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
      </SocialLinks>
    </StyledTeamCard>
  );
};


// --- Main OurTeam Component ---

const OurTeam = () => {
  // Call hooks for main section elements at the top level of OurTeam
  const titleRef = useAnimateOnScroll('animate__fadeInDown animate__slower', 0.2, true).ref;
  const subtitleRef = useAnimateOnScroll('animate__fadeInUp animate__slower', 0.2, true).ref;

  return (
    <TeamSectionWrapper>
      <SectionTitle ref={titleRef}>Meet Our Digital Luminaries</SectionTitle>
      <SectionSubtitle ref={subtitleRef}>
        Behind every great solution is a passionate team. Get to know the brilliant minds driving innovation at Elexdon.
      </SectionSubtitle>

      <TeamGrid>
        {teamMembers.slice(0,3).map((member, index) => (
          // Render the new TeamCardItem component for each member
          // The hook is now called inside TeamCardItem, not here in the map callback.
          <TeamCardItem key={member.id} member={member} index={index} />
        ))}
      </TeamGrid>
    </TeamSectionWrapper>
  );
};

export default OurTeam;