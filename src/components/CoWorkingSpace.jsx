import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Building2, Wifi, Coffee, Users, Laptop, Phone } from "lucide-react";
import {useNavigate} from 'react-router-dom'
import sp from '../Images2/sp.png'
import CoWorkHero2 from './CoWorkHero2'



const PageWrapper = styled.div`
  background: #f9f9f9;
  color: #333;
  font-family: "Arial", sans-serif;
`;

/* Hero Section */
const Hero = styled.section`
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),  /* dark overlay */
      rgba(0, 0, 0, 0.5)
    ),
    url(${sp}); /* replace with your image path */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 100px 20px;
`;


const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 30px;
`;

const HeroButton = styled(motion.a)`
  background: white;
   color:#2f5f9bff;
//   color: #6b84a2;
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;

  &:hover {
    background: #f3f4f6;
  }
`;

/* Section Base */
const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
//   color: #6b84a2;
  color:#2f5f9bff;
  margin-bottom: 20px;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto 40px auto;
`;

/* Facilities Grid */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const FacilityCard = styled(motion.div)`
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;

  svg {
    // color: #6b84a2;
    color:#2f5f9bff;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 10px;
    color:#2f5f9bff;
  }
`;

/* Pricing */
const PricingCard = styled(motion.div)`
  background: #fff;
  padding: 40px 25px;
  border-radius: 16px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  text-align: left;

  h3 {
    font-size: 1.6rem;
    // color: #6b84a2;
    color:#2f5f9bff;
    margin-bottom: 10px;
  }

  .price {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
    color: #555;
  }

  ul li {
    margin: 8px 0;
  }
`;

const PlanButton = styled.a`
  background: #2f5f9bff;
  color: white;
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #5a6e8b;
  }
`;

/* Contact */
const Contact = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  gap: 15px;



  button {
    background: #fff;
    color: #6b84a2;
    font-weight: bold;
    padding: 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  

    &:hover {
      background: #f3f4f6;
    }
  }
`;



const CoWorkingSpace = () => {
    const navigate = useNavigate();
  return (
    <PageWrapper>
      {/* Hero Section */}
      <Hero>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <HeroTitle>Elexdon Co-Working Space</HeroTitle>
          <HeroText>Work, Collaborate, and Grow in our modern Co-Working Space.</HeroText>
          {/* <HeroButton whileHover={{ scale: 1.05 }} href="#contact">
            Book a Tour
          </HeroButton> */}
        </motion.div>
      </Hero>

      {/* About */}
      {/* <Section>
        <SectionTitle>About Us</SectionTitle>
        <SectionText>
          At <b>Elexdon Digital Technologies</b>, we provide a world-class
          co-working environment tailored for startups, freelancers, and
          enterprises. Our space is designed to inspire creativity, foster
          collaboration, and support productivity with state-of-the-art
          facilities.
        </SectionText>
      </Section> */}

      {/* Facilities */}
      <Section>
        <SectionTitle>Facilities & Features</SectionTitle>
        <Grid>
          {[
            { icon: <Wifi size={40} />, title: "High-Speed Internet" },
            // { icon: <Coffee size={40} />, title: "Free Coffee & Snacks" },
            { icon: <Users size={40} />, title: "Networking Events" },
            { icon: <Laptop size={40} />, title: "Modern Workstations" },
            { icon: <Building2 size={40} />, title: "Private Offices" },
            // { icon: <Phone size={40} />, title: "Conference Rooms" },
          ].map((item, i) => (
            <FacilityCard key={i} whileHover={{ scale: 1.05 }}>
              {item.icon}
              <h3>{item.title}</h3>
            </FacilityCard>
          ))}
        </Grid>
      </Section>

      <CoWorkHero2/>

      {/* Pricing */}
      <Section>
        <SectionTitle>Pricing Plans</SectionTitle>
        <Grid>
          {[
            {
              title: "Day Pass",
              price: "NGN 3,000 / day",
              features: ["High-speed WiFi", "Workspace access", "Free coffee"],
            },
            {
              title: "Monthly Membership",
              price: "NGN 50,000 / month",
              features: ["Dedicated desk", "Meeting room access", "Community events"],
            },
            {
              title: "Private Office",
              price: "From NGN 80,000 / month",
              features: ["Private space", "24/7 access", "All amenities included"],
            },
          ].map((plan, i) => (
            <PricingCard key={i} whileHover={{ scale: 1.05 }}>
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((f, j) => (
                  <li key={j}>✅ {f}</li>
                ))}
              </ul>
              <PlanButton href="#contact">Choose Plan</PlanButton>
            </PricingCard>
          ))}
        </Grid>
      </Section>

      {/* Contact */}
      <Section id="contact" style={{ background: "#6B84A2", color: "white", borderRadius:"10px", marginBottom:"50px" }}>
        <SectionTitle style={{ color: "white" }}>Get in Touch</SectionTitle>
        <SectionText style={{ color: "#e5e7eb" }}>
          Ready to start your coworking journey with us? Contact our team today!
        </SectionText>
        <Contact>

          <button onClick={()=>navigate('/contactus')}>Send Message</button>
        </Contact>
      </Section>

    </PageWrapper>
  );
};

export default CoWorkingSpace;
