
import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { FaSchool, FaCreditCard, FaGift } from "react-icons/fa";

// --- Styled Components ---
const Section = styled.section`
  width: 100%;
  padding: 80px 20px;
  background: #f9f9f9;
  text-align: center;
  box-sizng:border-box;
  padding:0;
  margin:0;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: #2f5f9bff;
  margin-bottom: 20px;
  padding:10px;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 0 auto 60px auto;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
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
  border-radius: 20px;
  padding: 40px 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: #2f5f9bff;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #222;
`;

const Btn = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: #2f5f9bff;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #1f4775;
    transform: translateY(-3px);
  }
`;

const ProductsIntroSection = () => {
  const handleComingSoon = (product) => {
    Swal.fire({
      title: `${product}`,
      text: "Coming Soon 🚀",
      icon: "info",
      confirmButtonColor: "#2f5f9bff"
    });
  };

  return (
    <Section>
      <Fade direction="up" triggerOnce={false}>
        {/* <Heading>Our Products</Heading> */}
        <Heading>
          Elexdon also offers school eLearning portals and a full range of efficient
          in-house and outsourced payment solutions, including electronic payment
          systems and integration-based solutions. Our products include{" "}
          <strong>E-School Suite</strong>, <strong>Elexdon Pay</strong>, and{" "}
          <strong>My Elexdon</strong>.
        </Heading>
      </Fade>

      {/* <Grid>
        <Fade direction="up" cascade triggerOnce={false}>
          <Card>
            <IconWrapper><FaSchool /></IconWrapper>
            <Title>E-School Suite</Title>
            <p>
              A powerful eLearning platform designed to help schools deliver
              modern, accessible, and engaging education online.
            </p>
            <Btn onClick={() => handleComingSoon("E-School Suite")}>
              Learn More
            </Btn>
          </Card>

          <Card>
            <IconWrapper><FaCreditCard /></IconWrapper>
            <Title>Elexdon Pay</Title>
            <p>
              Our secure and reliable payment solution, built to handle both
              in-house and outsourced transactions with ease.
            </p>
            <Btn onClick={() => handleComingSoon("Elexdon Pay")}>
              Learn More
            </Btn>
          </Card>

          <Card>
            <IconWrapper><FaGift /></IconWrapper>
            <Title>My Elexdon</Title>
            <p>
              A versatile platform for bitcoin, gift cards, and digital asset
              transactions, making trading simple and efficient.
            </p>
            <Btn onClick={() => handleComingSoon("My Elexdon")}>
              Learn More
            </Btn>
          </Card>
        </Fade>
      </Grid> */}
    </Section>
  );
};

export default ProductsIntroSection;
