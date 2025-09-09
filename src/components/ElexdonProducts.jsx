
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";
import oin from '../Images2/oin.png'
import pay2 from '../Images2/pay2.png'
import ph from '../Images2/ph.png'
import suit from '../Images2/suit.png'
import ProductsIntroSection from "./ProductsIntroSection";
import JournalIntro from "./Intro";

// --- Theme ---
const theme = {
  primary: "#2f5f9bff",
  white: "#ffffff",
};

// --- Styled Components ---
const PageWrapper = styled.div`
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.primary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 70vh;
  background: url(${ph}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: ${(props) => props.theme.white};
  padding: 1rem;

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.3rem);
    max-width: 800px;
    margin: 0 auto;
  }
`;

const ProductsSection = styled.section`
  padding: 4rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 6rem 4rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProductCard = styled.div`
  background: ${(props) => props.theme.white};
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    margin: 1rem 0 0.5rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme.primary};
  }

  p {
    padding: 0 1rem;
    font-size: 1rem;
    color: #333;
    flex-grow: 1;
  }
`;

const ProductButton = styled.button`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 1.5rem auto;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #12c2e9;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// --- Component ---
export default function ElexdonProducts() {
  const handleComingSoon = (name) => {
    Swal.fire({
      title: `${name}`,
      text: "Coming Soon 🚀",
      icon: "info",
      confirmButtonColor: theme.primary,
    });
  };

  const products = [
    {
      title: "E-School Suite",
      image: suit,
      description:
        "An advanced e-learning platform designed to support schools, teachers, and students with seamless digital education tools.",
    },
    {
      title: "Elexdon Pay",
      image: pay2,
      description:
        "A secure and fast payment solution created by Elexdon for individuals and businesses to manage transactions effortlessly.",
    },
    {
      title: "My Elexdon",
      image: oin,
      description:
        "A platform for Bitcoin services and gift card management, making digital asset handling simple and reliable.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <HeroSection>
          <HeroContent>
            <Fade direction="down" triggerOnce={false}>
              <h1>Elexdon Digital Products</h1>
              <p>
               Elexdon Digitech provides customized software services and to do that we analyze, design, develop, implement and maintain custom made solution for your business including related activities.  </p>
            </Fade>
          </HeroContent>
        </HeroSection>
        {/* <ProductsIntroSection/> */}
        <JournalIntro/>

        <ProductsSection>
          <Zoom triggerOnce={false}>
            <h2>Our Products</h2>
          </Zoom>

          <ProductsGrid>
            {products.map((product, index) => (
              <Slide
                direction={index % 2 === 0 ? "left" : "right"}
                triggerOnce={false}
                key={index}
              >
                <ProductCard>
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <ProductButton
                    onClick={() => handleComingSoon(product.title)}
                  >
                    Learn More
                  </ProductButton>
                </ProductCard>
              </Slide>
            ))}
          </ProductsGrid>
        </ProductsSection>
      </PageWrapper>
    </ThemeProvider>
  );
}
