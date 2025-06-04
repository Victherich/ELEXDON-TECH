import React from 'react';
import styled from 'styled-components';
import hostingHeroImg from '../Images/webhostingimg.jpeg'; // Replace with your actual image path
import Features from './Features';
import CPanelShowcase from './CpanelShowCase';
import SoftaculousShowcase from './SoftaculousShowcase';
import Border from './Border';
import 'animate.css'
import useAnimateOnScroll from './useAnimateOnScroll';
import Features2 from './Features2';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

// === Styled Components ===
const HeroSection = styled.section`
  background-image: url(${hostingHeroImg});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
`;

const FeaturesSection = styled.section`
  background: #1c1c2b;
  color: #f0f0f0;
  padding: 60px 20px;
  text-align: center;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px auto;
  max-width: 600px;
  display: grid;
  gap: 20px;
`;

const FeatureItem = styled.li`
  background: #2b2b3c;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 1rem;
`;

const PricingSection = styled.section`
  background: #f9f9fc;
// background:lightgray;
  padding: 60px 20px;
  text-align: center;
`;

const PricingTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #444;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom:100px;
`;

const Card = styled.div`
//   background: #f4f4f4;
background:white;
  padding: 30px 20px;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  text-align: left;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-8px);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #2B32B2;
  }

  p {
    font-weight: bold;
    margin: 5px 0 15px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 8px;
    font-size: 0.95rem;
  }

  button {
    background: #2B32B2;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;

    &:hover {
      background: #1d229c;
    }
  }
`;

const WebhostingPage = () => {

  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');



   const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  // useEffect(() => {
  //   axios.get('https://hotsalesng.com/api_elexdonhost/get_shared_hosting_products.php')
  //     .then(response => {
  //       if (response.data.success) {
  //         setProducts(response.data.products);
  //         console.log(response.data)
  //       } else {
  //         console.error('Error:', response.data.error);
  //       }
  //     })
  //     .catch(err => console.error('API Error:', err));
  // }, []);


useEffect(() => {
  fetch("https://www.elexdonhost.com.ng/api_elexdonhost/get_shared_hosting_products.php")
    .then(res => res.json())
    .then(data => {
      if (data.products && data.products.product) {
        setProducts(data.products.product);
        console.log(data);
      } else {
        console.error("No products found:", data);
      }
    })
    .catch(err => console.error("Fetch error:", err));
}, []);

  const parseFeatures = (description) => {
    return description
      .split(/\r\n|\n|\r/)
      .filter(line => line.trim() !== "")
      .map((feature, index) => <li key={index}>{feature}</li>);
  };



 


  return (
    <div>
      <HeroSection>
        <Overlay />
        <HeroContent>
          <Title ref={heroTitleAnim.ref} className={heroTitleAnim.className}>SHARED CLOUD HOSTING</Title>
          <Subtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
            Secure & Reliable Web Hosting for Your Domain<br />
            ElexdonHost Gives You Fastest Cloud SSD Hosting<br />
            <strong>We Guarantee your website will run quicker on our Cloud SSD than normal hosting, or you get your Money back.</strong>
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <h2>Included as Standard:</h2>
        <FeatureList>
          <FeatureItem>✅ Free Hosting Migrations</FeatureItem>
          <FeatureItem>✅ 99.99% Uptime Guarantee</FeatureItem>
          <FeatureItem>✅ Free SSL Certificates</FeatureItem>
          <FeatureItem>✅ Free Instant Setup</FeatureItem>
        </FeatureList>
      </FeaturesSection>

      <PricingSection>
        <PricingTitle>Plans and Pricing</PricingTitle>
        {/* <PricingGrid>
          <Card>
            <h3>STARTER</h3>
            <p>10 GB SSD Web Space</p>
            <ul>
              <li>Free SSL</li>
              <li>Unlimited Bandwidth</li>
              <li>Unlimited MySQL Databases</li>
              <li>5 Email Accounts</li>
              <li>Unlimited Website Builder</li>
              <li>Control Panel</li>
              <li>Unlimited FTP Accounts</li>
              <li>Daily Backups</li>
            </ul>
            <button>Order Now</button>
          </Card>

          <Card>
            <h3>BUSINESS</h3>
            <p>15 GB SSD Web Space</p>
            <ul>
              <li>Unlimited Bandwidth</li>
              <li>Unlimited MySQL Databases</li>
              <li>Free 256-bit SSL Certificate</li>
              <li>Control Panel</li>
              <li>Unlimited Email Accounts</li>
              <li>Free .com.ng Domain</li>
              <li>Daily Backups</li>
            </ul>
            <button>Order Now</button>
          </Card>

          <Card>
            <h3>DEVELOPER</h3>
            <p>25 GB SSD Web Space</p>
            <ul>
              <li>Unlimited Bandwidth</li>
              <li>Free Unlimited SSL Certificate</li>
              <li>Cpanel + PHP 8.1</li>
              <li>Unlimited Email Accounts</li>
              <li>Unlimited Subdomains</li>
              <li>Free .com.ng</li>
              <li>Daily Backups</li>
              <li>User Friendly Access Manager</li>
            </ul>
            <button>Order Now</button>
          </Card>

          <Card>
            <h3>MEGA PRO</h3>
            <p>Unlimited SSD Web Space</p>
            <ul>
              <li>10 Hosted Domains</li>
              <li>DNS Management</li>
              <li>Unlimited Bandwidth</li>
              <li>Unlimited Email Accounts</li>
              <li>Unlimited Website Builder</li>
              <li>Daily Server Backups</li>
              <li>Unlimited MySQL</li>
              <li>User Friendly Access Manager</li>
            </ul>
            <button>Order Now</button>
          </Card>
        </PricingGrid> */}


   <PricingGrid>
  {products.map((product) => {
    const pricing = product.pricing?.NGN;
    const monthly = pricing?.monthly;
    const annually = pricing?.annually;
    const prefix = pricing?.prefix || "";
    const suffix = pricing?.suffix || "";

    return (
      <Card key={product.pid}>
        <h3>{product.name}</h3>
        
        {/* Show first line of description */}
        <p style={{color:"#444"}}>SSD - {product.description.split(/\r\n|\n|\r/)[0]}</p>

        {/* Pricing section */}
        {monthly !== "-1.00" && (
          <p style={{color:"#444"}}><strong>{prefix}{parseFloat(monthly).toLocaleString()} / month</strong></p>
        )}
        {annually !== "-1.00" && (
          <p style={{color:"#444"}}><strong>{prefix}{parseFloat(annually).toLocaleString()} / year</strong></p>
        )}

        {/* Features list */}
        <ul>
          {product.description
            .split(/\r\n|\n|\r/)
            .filter((line) => line.trim() !== "")
            .map((line, index) => (
              <li key={index}>{line}</li>
            ))}
        </ul>
        
{/* order button */}
      <button
  onClick={() => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate(`/hostingcheckout/${product.pid}`);
  }}
>
  Order Now
</button>


{/* <button
  onClick={() =>
    window.open(
      `https://portal.elexdonhost.com.ng/cart.php?a=add&pid=${product.pid}&carttpl=standard_cart`,
      '_blank'
    )
  }
>
  Order Now
</button> */}


      </Card>
    );
  })}
</PricingGrid>

       
      </PricingSection>
       <CPanelShowcase/>
         <Border/>
        <SoftaculousShowcase/>
       
        <Features2/>
    </div>
  );
};

export default WebhostingPage;
