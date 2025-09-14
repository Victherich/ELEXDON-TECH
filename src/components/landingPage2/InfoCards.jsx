

// import React from "react";
// import styled from "styled-components";
// import transferImg from "../../Images2/tech.jpg"; // Replace with your own image path

// const features = [
//   {
//     title: "Our Vision",
//     text: "Our Vision is to be the foremost provider of Software/ Information Technology Solutions in Nigeria and Africa at large; in order to achieve this vision, we believe we need the right values to propel the organizations to the forefront of Software/IT service industry in Nigeria; our values therein are integrity, innovation, partnership, quality, professionalism  & Culture of responsibility",
//   },
//   {
//     title: "Our Plan",
//     text: "Elexdon Digital Technologies is Your Partner for Digital Success .we offers software/ IT solution services to individuals, businesses, institutions and religious Organizations with our expert and experience professional team",
//   },
//   {
//     title: "Our Mission",
//     text: "To contribute immensely to the socio-economic development of Nigeria by empowering individuals, businesses or Corperate bodies with the right software/IT solutions and skills needed to boost their career opportunity. Provide the Citizens and businesses with software/ IT raining and Solutions in the contemporary information and Communication Technologies at 'Value for Money' prices so that Nigeria progresses rapidly to emerge at par with the developed economies of the world",
//   },

// ];

// const InfoCards = () => {
//   return (
//     <Section>
//       <Layout>
//         <ImageSide />
//         <ContentSide>
//           <CardsWrapper>
//             {features.slice(0, 3).map((item, index) => (
//               <Card key={index}>
//                 <CardTitle>{item.title}</CardTitle>
//                 <CardText>{item.text}</CardText>
//               </Card>
//             ))}
//           </CardsWrapper>

//           <CardsWrapper>
//             {features.slice(3, 6).map((item, index) => (
//               <Card key={index}>
//                 <CardTitle>{item.title}</CardTitle>
//                 <CardText>{item.text}</CardText>
//               </Card>
//             ))}
//           </CardsWrapper>

//           <CardsWrapper>
//             {features.slice(6, 7).map((item, index) => (
//               <Card key={index}>
//                 <CardTitle>{item.title}</CardTitle>
//                 <CardText>{item.text}</CardText>
//               </Card>
//             ))}
//           </CardsWrapper>
//         </ContentSide>
//       </Layout>
//     </Section>
//   );
// };

// export default InfoCards;



// const Section = styled.section`
//   background-color: #f6f6f6;
//   padding: 80px 20px;
// `;

// const Layout = styled.div`
//   display: flex;
//   flex-direction:row-reverse;
//   flex-wrap: wrap;
//   max-width: 1400px;
//   margin: auto;
// `;

// const ImageSide = styled.div`
//   flex: 1;
//   min-width: 300px;
//   background: url(${transferImg}) center center / cover no-repeat;
//   border-radius: 12px;
//   min-height: 500px;
// `;

// const ContentSide = styled.div`
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 20px;
// `;

// const CardsWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 20px;
//   margin-bottom: 40px;

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Card = styled.div`
//   background: #ffffff;
//   color: #2c4b2f;
//   border-left: 5px solid #6B84A2;
//   padding: 20px;
//   box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
//   border-radius: 8px;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background-color: #6B84A2;
//     color: #ffffff;
//     border-left-color:orange;
//   }

//   @media (max-width: 480px) {
//     padding: 15px;
//   }
// `;

// const CardTitle = styled.h3`
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin-bottom: 12px;
  
// `;

// const CardText = styled.p`
//   font-size: 1rem;
//   line-height: 1.5;
// `;







import React from "react";
import styled from "styled-components";
import transferImg from "../../Images2/tech.jpg"; // Replace with your own image path
import { Fade, Slide } from 'react-awesome-reveal';

const features = [
  {
    title: "Our Vision",
    text: "Our Vision is to be the foremost provider of Software/ Information Technology Solutions in Nigeria and Africa at large; in order to achieve this vision, we believe we need the right values to propel the organizations to the forefront of Software/IT service industry in Nigeria; our values therein are integrity, innovation, partnership, quality, professionalism & Culture of responsibility",
  },
  {
    title: "Our Plan",
    text: "Elexdon Digital Technologies is Your Partner for Digital Success .we offers software/ IT solution services to individuals, businesses, institutions and religious Organizations with our expert and experience professional team",
  },
  {
    title: "Our Mission",
    text: "To contribute immensely to the socio-economic development of Nigeria by empowering individuals, businesses or Corperate bodies with the right software/IT solutions and skills needed to boost their career opportunity. Provide the Citizens and businesses with software/ IT raining and Solutions in the contemporary information and Communication Technologies at 'Value for Money' prices so that Nigeria progresses rapidly to emerge at par with the developed economies of the world",
  },
];

const InfoCards = () => {
  return (
    <Section>
      <Layout>
        <ImageSide />
        <ContentSide>
          <CardsWrapper>
            {features.slice(0, 3).map((item, index) => (
              <Fade direction="right" triggerOnce={false} delay={index * 200} key={index}>
                <Card>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.text}</CardText>
                </Card>
              </Fade>
            ))}
          </CardsWrapper>
        </ContentSide>
      </Layout>
    </Section>
  );
};

export default InfoCards;

const Section = styled.section`
  background-color: #f6f6f6;
  padding: 80px 20px;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: auto;
`;

const ImageSide = styled.div`
  flex: 1;
  min-width: 250px;
  background: url(${transferImg}) center center / cover no-repeat;
  border-radius: 12px;
  min-height: 500px;

  @media (max-width: 768px) {
    min-height: 300px;
    margin-bottom: 20px;
  }
`;

const ContentSide = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    // grid-template-columns: 1fr;
    margin-bottom: 20px;
  }
`;

const Card = styled.div`
  background: #ffffff;
  color: #2c4b2f;
  border-left: 5px solid #6B84A2;
  padding: 10px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #9dabbdff;
    color: #ffffff;
    border-left-color: orange;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 12px;
  color:#2f5f9bff;

  
`;

const CardText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
`;