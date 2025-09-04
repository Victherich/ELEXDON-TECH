



// import React, { useRef, useEffect, useState } from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// // Keyframe animation for elements fading in from bottom
// const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// // Main section wrapper
// const ProductsSectionWrapper = styled.section`
//   padding: 80px 20px;
//   // background-color: #E0E2E5;
//   text-align: center;
// `;

// // Section title
// const SectionTitle = styled.h2`
//   font-size: 3em;
//   font-weight: 700;
//   color: #1A2B3C; /* Dark blue for the title */
//   margin-bottom: 60px;
//   opacity: 0;
//   transform: translateY(50px);
//   ${({ animate }) => animate && css`animation: ${fadeInUp} 0.8s ease-out forwards;`}
// `;

// // Container for the cards
// const CardsContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 40px; /* Increased gap between cards */
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// // Individual card styling
// const Card = styled.div`
//   background-color: #FFFFFF; /* White background for cards by default */
//   border-radius: 12px; /* More rounded corners */
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Softer, more pronounced shadow */
//   padding: 40px; /* More padding inside cards */
//   flex: 1;
//   min-width: 280px;
//   max-width: 350px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   opacity: 0;
//   transform: translateY(50px);
//   ${({ animate }) => animate && css`animation: ${fadeInUp} 0.8s ease-out forwards;`}
//   animation-delay: ${({ delay }) => delay || '0s'}; /* Staggered animation */

//   &:hover {
//     transform: translateY(-10px); /* Lift effect on hover */
//     box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
//   }
// `;

// // Specific styling for the center card with radial gradient
// const CenterCard = styled(Card)`
//   background: radial-gradient(circle at 10% 20%, #B0D7D7 0%, #A0C0E0 15%, #90A8D0 30%, #8090C0 50%, #7078B0 70%, #6060A0 85%, #504890 100%);
//  background: radial-gradient(circle at 10% 20%, 
//   #B0D7D7 0%,    /* Aqua Green */
//   #00CFFF 25%,   /* Sky Blue */
//   #0090FF 50%,   /* Medium Blue */
//   #5A00D0 75%,   /* Indigo */
//   #8B00FF 100%   /* Violet */
// );

  
//   /* Adjust text colors for better readability on gradient background */
//   ${({ animate }) => animate && css`
//     ${CardTitle}, ${CardDescription}, ${CardButton} {
//       color: #FFFFFF; /* White text for better contrast */
//     }
//     ${CardButton} {
//         background-color: #A0C0E0; /* A lighter shade from the gradient for button */
//         &:hover {
//           background-color: #8090C0;
//         }
//     }
//   `}
// `;


// // Card title
// const CardTitle = styled.h3`
//   font-size: 1.8em;
//   font-weight: 600;
//   color: #6B84A2; /* Default matching header background color */
//   margin-bottom: 20px;
// `;

// // Card description
// const CardDescription = styled.p`
//   font-size: 1em;
//   line-height: 1.6;
//   color: #555; /* Default darker grey for description */
//   margin-bottom: 30px;
// `;

// // Card button
// const CardButton = styled.button`
//   padding: 12px 25px;
//   font-size: 0.95em;
//   font-weight: 600;
//   color: #FFFFFF;
//   background-color: #6B84A2; /* Default matching header background color */
//   border: none;
//   border-radius: 20px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, transform 0.2s ease;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

//   &:hover {
//     background-color: #5A718C; /* Slightly darker on hover */
//     transform: translateY(-2px);
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

// const ProductsSection = () => {
//   const navigate = useNavigate();

// const cardData = [
//   {
//     title: "Innovative Products",
//     description: "Experience rapid deployment and effortless scaling with Elexdon's OEM and cloud services. Leverage our extensive infrastructure for superior performance and cost-efficiency.",
//     buttonText: "Discover Solutions"
//   },
//   {
//     title: "Strategic Partnerships",
//     description: "Through our subsidiaries like Vatebra, Elexdon delivers comprehensive payment solutions, from robust electronic systems to seamless integration services, both in-house and outsourced.",
//     buttonText: "Explore Ventures"
//   },
//   {
//     title: "Tailored Solutions",
//     description: "Elexdon provides bespoke software development, from initial analysis and design to implementation and ongoing maintenance, crafting unique solutions perfectly suited for your business needs.",
//     buttonText: "Get Started"
//   }
// ];

//   const sectionTitleRef = useRef(null);
//   const cardRefs = useRef([]);
//   const [animateTitle, setAnimateTitle] = useState(false);
//   const [animateCards, setAnimateCards] = useState([]);

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.1, // Trigger when 10% of the element is visible
//     };

//     const titleObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setAnimateTitle(true);
//           titleObserver.unobserve(entry.target); // Stop observing once animated
//         }
//       });
//     }, observerOptions);

//     if (sectionTitleRef.current) {
//       titleObserver.observe(sectionTitleRef.current);
//     }

//     const cardObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = parseInt(entry.target.dataset.index);
//           setAnimateCards(prev => {
//             const newAnimateCards = [...prev];
//             newAnimateCards[index] = true;
//             return newAnimateCards;
//           });
//           cardObserver.unobserve(entry.target); // Stop observing once animated
//         }
//       });
//     }, observerOptions);

//     cardRefs.current.forEach((ref) => {
//       if (ref) {
//         cardObserver.observe(ref);
//       }
//     });

//     return () => {
//       if (sectionTitleRef.current) {
//         titleObserver.unobserve(sectionTitleRef.current);
//       }
//       cardRefs.current.forEach((ref) => {
//         if (ref) {
//           cardObserver.unobserve(ref);
//         }
//       });
//     };
//   }, []);

//   const handleLearnMoreClick = () => {
//     navigate('/contactus'); // Navigate to the contact us page
//   };

//   return (
//     <ProductsSectionWrapper>
    
//       <CardsContainer>
//         {cardData.map((card, index) => {
//           // Determine which Card component to render based on index
//           const CurrentCardComponent = index === 1 ? CenterCard : Card;
//           return (
//             <CurrentCardComponent
//               key={index}
//               ref={el => cardRefs.current[index] = el}
//               animate={animateCards[index]}
//               delay={`${index * 0.2}s`} // Stagger delay for each card
//               data-index={index} // Add data-index for observer
//             >
//               <CardTitle>{card.title}</CardTitle>
//               <CardDescription>{card.description}</CardDescription>
//               <CardButton onClick={handleLearnMoreClick}>
//                 {card.buttonText}
//               </CardButton>
//             </CurrentCardComponent>
//           );
//         })}
//       </CardsContainer>
//     </ProductsSectionWrapper>
//   );
// };

// export default ProductsSection;







import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Keyframe animation for elements fading in from bottom
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main section wrapper
const ProductsSectionWrapper = styled.section`
  padding: 40px 20px;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 60px 20px;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

// Section title
const SectionTitle = styled.h2`
  font-size: 3em;
  font-weight: 700;
  color: #1A2B3C;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(50px);
  
  ${({ animate }) => animate && css`
    animation: ${fadeInUp} 0.8s ease-out forwards;
  `}

  @media (max-width: 1024px) {
    font-size: 2.5em;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 30px;
  }
`;

// Container for the cards
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Individual card styling
const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 40px;
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(50px);

  ${({ animate }) => animate && css`
    animation: ${fadeInUp} 0.8s ease-out forwards;
  `}
  animation-delay: ${({ delay }) => delay || '0s'};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    padding: 30px;
  }
`;

// Specific styling for the center card with radial gradient
const CenterCard = styled(Card)`
  background: radial-gradient(circle at 10% 20%, 
    #B0D7D7 0%,      /* Aqua Green */
    #00CFFF 25%,     /* Sky Blue */
    #0090FF 50%,     /* Medium Blue */
    #5A00D0 75%,     /* Indigo */
    #8B00FF 100%     /* Violet */
  );
  
  ${({ animate }) => animate && css`
    ${CardTitle}, ${CardDescription}, ${CardButton} {
      color: #FFFFFF;
    }
    ${CardButton} {
      background-color: #A0C0E0;
      &:hover {
        background-color: #8090C0;
      }
    }
  `}
`;


// Card title
const CardTitle = styled.h3`
  font-size: 1.8em;
  font-weight: 600;
  // color: #6B84A2;
  color:#2f5f9bff;
  margin-bottom: 20px;
`;

// Card description
const CardDescription = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
`;

// Card button
const CardButton = styled.button`
  padding: 12px 25px;
  font-size: 0.95em;
  font-weight: 600;
  color: #FFFFFF;
  background-color:#2f5f9bff;;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #5A718C;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ProductsSection = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      title: "Innovative Products",
      description: "Experience rapid deployment and effortless scaling with Elexdon's OEM and cloud services. Leverage our extensive infrastructure for superior performance and cost-efficiency.",
      buttonText: "Discover Solutions"
    },
    {
      title: "Strategic Partnerships",
      description: "Through our subsidiaries like Vatebra, Elexdon delivers comprehensive payment solutions, from robust electronic systems to seamless integration services, both in-house and outsourced.",
      buttonText: "Explore Ventures"
    },
    {
      title: "Tailored Solutions",
      description: "Elexdon provides bespoke software development, from initial analysis and design to implementation and ongoing maintenance, crafting unique solutions perfectly suited for your business needs.",
      buttonText: "Get Started"
    }
  ];

  const sectionTitleRef = useRef(null);
  const cardRefs = useRef([]);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateCards, setAnimateCards] = useState(cardData.map(() => false));

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setAnimateTitle(entry.isIntersecting);
      });
    }, observerOptions);

    if (sectionTitleRef.current) {
      titleObserver.observe(sectionTitleRef.current);
    }

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.dataset.index);
        setAnimateCards(prev => {
          const newAnimateCards = [...prev];
          newAnimateCards[index] = entry.isIntersecting;
          return newAnimateCards;
        });
      });
    }, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) {
        cardObserver.observe(ref);
      }
    });

    return () => {
      if (sectionTitleRef.current) {
        titleObserver.unobserve(sectionTitleRef.current);
      }
      cardRefs.current.forEach((ref) => {
        if (ref) {
          cardObserver.unobserve(ref);
        }
      });
    };
  }, []);

  const handleLearnMoreClick = () => {
    navigate('/contactus');
  };

  return (
    <ProductsSectionWrapper>
      {/* <SectionTitle ref={sectionTitleRef} animate={animateTitle}>
        Innovative Products & Services
      </SectionTitle> */}
      
      <CardsContainer>
        {cardData.map((card, index) => {
          const CurrentCardComponent = index === 1 ? CenterCard : Card;
          return (
            <CurrentCardComponent
              key={index}
              ref={el => cardRefs.current[index] = el}
              animate={animateCards[index]}
              delay={`${index * 0.2}s`}
              data-index={index}
            >
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <CardButton onClick={handleLearnMoreClick}>
                {card.buttonText}
              </CardButton>
            </CurrentCardComponent>
          );
        })}
      </CardsContainer>
    </ProductsSectionWrapper>
  );
};

export default ProductsSection;