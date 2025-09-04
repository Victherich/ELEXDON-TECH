
// import React from 'react';
// import styled from 'styled-components';
// import { FaStar, FaStarHalfAlt, FaBars } from 'react-icons/fa';
// import p41 from '../../Images2/p41.png'
// import p42 from '../../Images2/p42.png'
// import p40 from '../../Images2/p40.png'

// const TestimonialContainer = styled.div`

// background-color: rgba(0,0,0,0.1);
//   color: #fff;
//   font-family: Arial, sans-serif;
//   padding: 80px 120px;

//   @media (max-width: 1024px) {
//     padding: 60px 40px;
//   }

//   @media (max-width: 768px) {
//     padding: 40px 20px;
//   }
// `;

// const CardsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 30px;
//   justify-items: center;

//   @media (max-width: 1024px) {
//     grid-template-columns: 1fr;
//     gap: 20px;
//   }
// `;

// const Card = styled.div`
//   background-color: #3e4d5fff;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
//   padding: 30px;
//   max-width: 350px;
//   text-align: center;
  
//   @media (max-width: 1024px) {
//     max-width: 100%;
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   margin-bottom: 20px;
// `;

// const ProfileImage = styled.img`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 3px solid #b8de6f;
// `;

// const MenuIconWrapper = styled.div`
//   background-color: #b8de6f;
//   color: #1a361c;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 20px;
// `;

// const CardContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ProjectTitle = styled.h4`
//   font-size: 18px;
//   color: #b8de6f;
//   margin: 0;
// `;

// const Location = styled.p`
//   font-size: 14px;
//   color: #fff;
//   margin: 5px 0 10px 0;
// `;

// const StarRating = styled.div`
//   color: #ffc837;
//   font-size: 18px;
//   margin-bottom: 20px;

//   & > svg {
//     margin: 0 2px;
//   }
// `;

// const TestimonialText = styled.p`
//   font-size: 16px;
//   line-height: 1.6;
//   color: #e0e0e0;
//   font-style: italic;
  
//   // Custom styling to make 'Elexdon' stand out
//   & strong {
//     color: #b8de6f;
//     font-style: normal;
//   }
// `;

// const TestimonialComponent = () => {
//   return (
//     <TestimonialContainer>
//       <CardsGrid>
//         <Card>
//           <CardHeader>
//             <ProfileImage src={p40} alt="Testimonial profile 1" />
//             <MenuIconWrapper><FaBars /></MenuIconWrapper>
//           </CardHeader>
//           <CardContent>
//             <ProjectTitle>Early Warning Solution</ProjectTitle>
//             <Location>Osun</Location>
//             <StarRating>
//               <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
//             </StarRating>
//             <TestimonialText>
//               "Elexdon is always reliable and fast, even with short notices, we can always count on them to get requests done. Thank you!"
//             </TestimonialText>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <ProfileImage src={p41} alt="Testimonial profile 2" />
//             <MenuIconWrapper><FaBars /></MenuIconWrapper>
//           </CardHeader>
//           <CardContent>
//             <ProjectTitle>EduTech Project</ProjectTitle>
//             <Location>Sierra Leone</Location>
//             <StarRating>
//               <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
//             </StarRating>
//             <TestimonialText>
//               "They always have their sleeves rolled up to confront each challenge as it arises and this was why we met the implementation timelines."
//             </TestimonialText>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <ProfileImage src={p42} alt="Testimonial profile 3" />
//             <MenuIconWrapper><FaBars /></MenuIconWrapper>
//           </CardHeader>
//           <CardContent>
//             <ProjectTitle>EduTech Project</ProjectTitle>
//             <Location>West Africa</Location>
//             <StarRating>
//               <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
//             </StarRating>
//             <TestimonialText>
//               "Excellent service. Quick response, efficient troubleshooting and resolution with full explanation of the problem. Gotta love <strong>Elexdon</strong>!"
//             </TestimonialText>
//           </CardContent>
//         </Card>
//       </CardsGrid>
//     </TestimonialContainer>
//   );
// };

// export default TestimonialComponent;


import React from 'react';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt, FaBars } from 'react-icons/fa';
import p41 from '../../Images2/p41.png';
import p42 from '../../Images2/p42.png';
import p40 from '../../Images2/p40.png';
import { Fade } from 'react-awesome-reveal';

const TestimonialContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 80px 120px;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.div`
  background-color: #3e4d5fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 30px;
  max-width: 350px;
  text-align: center;
  
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #b8de6f;
`;

const MenuIconWrapper = styled.div`
  background-color: #b8de6f;
  color: #1a361c;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.h4`
  font-size: 18px;
  color: #b8de6f;
  margin: 0;
`;

const Location = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 5px 0 10px 0;
`;

const StarRating = styled.div`
  color: #ffc837;
  font-size: 18px;
  margin-bottom: 20px;

  & > svg {
    margin: 0 2px;
  }
`;

const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #e0e0e0;
  font-style: italic;
  
  & strong {
    color: #b8de6f;
    font-style: normal;
  }
`;

const testimonials = [
  {
    image: p40,
    title: "Early Warning Solution",
    location: "Osun",
    text: '"Elexdon is always reliable and fast, even with short notices, we can always count on them to get requests done. Thank you!"',
  },
  {
    image: p41,
    title: "EduTech Project",
    location: "Sierra Leone",
    text: '"They always have their sleeves rolled up to confront each challenge as it arises and this was why we met the implementation timelines."',
  },
  {
    image: p42,
    title: "EduTech Project",
    location: "West Africa",
    text: '"Excellent service. Quick response, efficient troubleshooting and resolution with full explanation of the problem. Gotta love <strong>Elexdon</strong>!"',
  },
];

const TestimonialComponent = () => {
  return (
    <TestimonialContainer>
      <CardsGrid>
        {testimonials.map((testimonial, index) => (
          <Fade key={index} direction="left" triggerOnce={false} delay={index * 200}>
            <Card>
              <CardHeader>
                <ProfileImage src={testimonial.image} alt={`Testimonial profile ${index + 1}`} />
                <MenuIconWrapper><FaBars /></MenuIconWrapper>
              </CardHeader>
              <CardContent>
                <ProjectTitle>{testimonial.title}</ProjectTitle>
                <Location>{testimonial.location}</Location>
                <StarRating>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </StarRating>
                <TestimonialText dangerouslySetInnerHTML={{ __html: testimonial.text }} />
              </CardContent>
            </Card>
          </Fade>
        ))}
      </CardsGrid>
    </TestimonialContainer>
  );
};

export default TestimonialComponent;