
// // components/ServicesShowcase.jsx
// import React from 'react';
// import styled from 'styled-components';
// import { FaServer, FaGlobe, FaLock } from 'react-icons/fa';

// const Section = styled.section`
//   padding: 80px 20px;
//   background: linear-gradient(145deg, #0f001a, #12002b);
//   color: #fff;
//   text-align: center;
// `;

// const Heading = styled.h2`
//   font-size: 2.5rem;
//   background: linear-gradient(90deg, #c084fc, #facc15);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin-bottom: 10px;
// `;

// const SubHeading = styled.p`
//   font-size: 1.1rem;
//   max-width: 800px;
//   margin: 0 auto 60px auto;
//   color: #ccc;
// `;

// const CardsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 30px;
//   justify-items: center;
// `;

// const GlowCard = styled.div`
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0.08);
//   border-radius: 20px;
//   padding: 40px 25px;
//   position: relative;
//   overflow: hidden;
//   backdrop-filter: blur(10px);
//   box-shadow: 0 0 30px rgba(192, 132, 252, 0.3);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 60px rgba(250, 204, 21, 0.4);
//   }
// `;

// const IconWrapper = styled.div`
//   font-size: 40px;
//   margin-bottom: 20px;
//   color: #facc15;
// `;

// const Title = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 15px;
//   color: #e5e7eb;
// `;

// const Text = styled.p`
//   font-size: 0.95rem;
//   color: #bbb;
//   margin-bottom: 25px;
// `;

// const Button = styled.a`
//   background: linear-gradient(90deg, #facc15, #fcd34d);
//   color: #000;
//   padding: 12px 25px;
//   border-radius: 30px;
//   text-decoration: none;
//   font-weight: bold;
//   transition: 0.3s ease;

//   &:hover {
//     background: linear-gradient(90deg, #fcd34d, #facc15);
//     transform: scale(1.05);
//   }
// `;

// const ServicesShowcase = () => {
//   return (
//     <Section>
//       <Heading>Check Out Awesome Services, And Order Now</Heading>
//       <SubHeading>
//         Whether you’re just starting out or need advanced performance, Elexdon Digitech has reliable services for you — Domain Name Registration, Web Hosting, SSL Certificates & Website Development!
//       </SubHeading>

//       <CardsContainer>
//         <GlowCard>
//           <IconWrapper><FaServer /></IconWrapper>
//           <Title>WEB HOSTING</Title>
//           <Text>Our web hosting is great for static websites, database-driven content management systems, and custom applications.</Text>
//           <Button href="#">Find Out More</Button>
//         </GlowCard>

//         <GlowCard>
//           <IconWrapper><FaGlobe /></IconWrapper>
//           <Title>DOMAIN NAMES</Title>
//           <Text>Secure your online identity today. Even if you’re not ready to build a website, reserve your name for the future.</Text>
//           <Button href="#">Find Out More</Button>
//         </GlowCard>

//         <GlowCard>
//           <IconWrapper><FaLock /></IconWrapper>
//           <Title>SSL CERTIFICATES</Title>
//           <Text>Our SSL certificates ensure your website is encrypted and safe from cyber threats. Affordable, secure & easy to install.</Text>
//           <Button href="#">Find Out More</Button>
//         </GlowCard>
//       </CardsContainer>
//     </Section>
//   );
// };

// export default ServicesShowcase;




// components/ServicesShowcase.jsx
import React from 'react';
import styled from 'styled-components';
import { FaServer, FaGlobe, FaLock } from 'react-icons/fa';
import starsGif from '../Images/galaxy.gif'

// 🔥 Replace with your own starry GIF URL
// const starsGif = 'https://media.giphy.com/media/l0HlD5zqKFPvXkX1O/giphy.gif';

const Section = styled.section`
  position: relative;
  // padding: 50px 20px;
  text-align: center;
  overflow: hidden;
//   z-index: 1;
  background: url(${starsGif}) center/cover no-repeat;
  padding-top:0px;
  padding-bottom:50px;
  padding-left:20px;
  padding-right:20px;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    
    opacity: 0.2;
    z-index: -2;
    animation: moveStars 60s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(145deg, rgba(15,0,26,0.95), rgba(18,0,43,0.9));
    z-index: -1;
  }

  @keyframes moveStars {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 1000px 1000px;
    }
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  background: linear-gradient(90deg, #c084fc, #facc15);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 60px auto;
  color: #ccc;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const GlowCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 40px 25px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(192, 132, 252, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 60px rgba(250, 204, 21, 0.4);
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: #facc15;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #e5e7eb;
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: #bbb;
  margin-bottom: 25px;
`;

const Button = styled.a`
  background: linear-gradient(90deg, #facc15, #fcd34d);
  color: #000;
  padding: 12px 25px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #fcd34d, #facc15);
    transform: scale(1.05);
  }
`;

const ServicesShowcase = () => {
  return (
    <Section>
      <Heading>Check Our Awesome Services, And Order Now</Heading>
      <SubHeading>
        Whether you’re just starting out or need advanced performance, Elexdon Digitech has reliable services for you — Domain Name Registration, Web Hosting, SSL Certificates & Website Development!
      </SubHeading>

      <CardsContainer>
        <GlowCard>
          <IconWrapper><FaServer /></IconWrapper>
          <Title>WEB HOSTING</Title>
          <Text>Our web hosting is great for static websites, database-driven CMS, and custom apps.</Text>
          <Button href="/sharedhosting">Find Out More</Button>
        </GlowCard>

        <GlowCard>
          <IconWrapper><FaGlobe /></IconWrapper>
          <Title>DOMAIN NAMES</Title>
          <Text>Secure your online identity today. Even if you’re not ready to build a website.</Text>
          <Button href="/domainspage">Find Out More</Button>
        </GlowCard>

        <GlowCard>
          <IconWrapper><FaLock /></IconWrapper>
          <Title>SSL CERTIFICATES</Title>
          <Text>Our SSL certificates ensure your website is encrypted & safe from threats.</Text>
          <Button href="/sslpage">Find Out More</Button>
        </GlowCard>

        <GlowCard>
          <IconWrapper><FaLock /></IconWrapper>
          <Title>DEDICATED HOSTING</Title>
          <Text>Our SSL certificates ensure your website is encrypted & safe from threats.</Text>
          <Button href="/dedicatedhosting">Find Out More</Button>
        </GlowCard>
      </CardsContainer>
    </Section>
  );
};

export default ServicesShowcase;
