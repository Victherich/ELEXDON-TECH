
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';

const ContactPromoContainer = styled.div`
  background-color: #f8f8f8; /* Light background to stand out */
  padding: 80px 40px;
  font-family: Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Ensure animations don't cause overflow */

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const PromoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
 color:#2f5f9bff; /* Main accent color */
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const PromoSlogan = styled.p`
  font-size: 1.1rem;
  color: #444; /* Dark grey for readability */
  max-width: 700px;
  margin: 0 auto 30px auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContactButton = styled.button`
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #FFFFFF;
  background-color: #2f5f9bff;; /* Button color matching theme */
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Subtle shadow */

  &:hover {
    background-color: orange; /* Orange accent on hover */
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ContactUsPromo = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contactus');
  };

  return (
    <ContactPromoContainer>
      <Slide direction="down" triggerOnce={false} threshold={0.1}>
        <PromoTitle>
          Ready to Transform Your Digital Presence?
        </PromoTitle>
      </Slide>
      <Slide direction="down" triggerOnce={false} delay={150} threshold={0.1}>
        <PromoSlogan>
          Let's discuss how ELEXDON Technologies can help you achieve your goals with innovative and reliable solutions.
        </PromoSlogan>
      </Slide>
      <Fade direction="up" triggerOnce={false} delay={300} threshold={0.1}>
        <ContactButton onClick={handleContactClick}>
          Contact Us Today
        </ContactButton>
      </Fade>
    </ContactPromoContainer>
  );
};

export default ContactUsPromo;