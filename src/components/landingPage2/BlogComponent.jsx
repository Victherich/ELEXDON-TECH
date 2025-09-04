
// import React from 'react';
// import styled from 'styled-components';
// import p36 from "../../Images2/p36.png";
// import p37 from "../../Images2/p37.png";
// import p38 from "../../Images2/p38.png";

// const BlogPageContainer = styled.div`

//   color: #333;
//   font-family: Arial, sans-serif;
//   padding: 80px 120px;

//   @media (max-width: 1024px) {
//     padding: 60px 40px;
//   }

//   @media (max-width: 768px) {
//     padding: 40px 20px;
//   }
// `;

// const Header = styled.div`
//   text-align: center;
//   margin-bottom: 60px;
// `;

// const Title = styled.h1`
//   font-size: 48px;
//   margin: 0 0 10px 0;
//   font-weight: bold;
//   color:#6B84A2;
// `;

// const Subtitle = styled.p`
//   font-size: 18px;
//   color: #666;
//   max-width: 600px;
//   margin: 0 auto;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const CardsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 30px;

//   @media (max-width: 1024px) {
//     grid-template-columns: 1fr;
//     gap: 20px;
//   }
// `;

// const Card = styled.div`
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);
//   }
// `;

// const CardImageWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: 200px;
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   display: block;
// `;

// const CardTag = styled.span`
//   position: absolute;
//   top: 15px;
//   right: 15px;
//   background-color: #b8de6f;
//   color: white;
//   padding: 5px 10px;
//   border-radius: 5px;
//   font-weight: bold;
//   font-size: 12px;
// `;

// const CardContent = styled.div`
//   padding: 20px;
// `;

// const CardDate = styled.p`
//   color: #888;
//   font-size: 12px;
//   margin-top: 0;
//   margin-bottom: 10px;
// `;

// const CardTitle = styled.h3`
//   font-size: 18px;
//   font-weight: bold;
//   margin-top: 0;
//   margin-bottom: 10px;
//   min-height: 50px;
// `;

// const CardDescription = styled.p`
//   font-size: 14px;
//   color: #555;
//   line-height: 1.6;
//   margin-bottom: 15px;
//   min-height: 70px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
// `;

// const ReadMoreLink = styled.a`
//   font-weight: bold;
//   color: #1a361c;
//   text-decoration: none;
//   transition: color 0.3s ease;

//   &:hover {
//     color:orange;
//   }
// `;

// const BlogComponent = () => {


// const cardsData = [
//   {
//     image: {
//       src: p36,
//       alt: "ELEXDON Launches Green Tech Hub"
//     },
//     tag: "Sustainability",
//     date: "Posted on - April 15, 2022",
//     title: "ELEXDON Launches Africa’s First Green Tech Innovation Hub",
//     description: "ELEXDON takes a bold step towards climate-conscious innovation with the launch of its Green Tech Hub in Nairobi, aimed at nurturing eco-friendly startups and sustainable tech solutions across the continent.",
//     link: "#"
//   },
//   {
//     image: {
//       src: p37,
//       alt: "ELEXDON Hosts Girls in STEM Summit"
//     },
//     tag: "Empowerment",
//     date: "Posted on - March 8, 2023",
//     title: "Empowering the Future: ELEXDON Hosts Africa-wide Girls in STEM Summit",
//     description: "In celebration of International Women’s Day, ELEXDON hosted a continent-wide summit focused on empowering young girls in science, technology, engineering, and mathematics through mentorship and innovation challenges.",
//     link: "#"
//   },
//   {
//     image: {
//       src: p38,
//       alt: "ELEXDON AI Lab Opens"
//     },
//     tag: "Artificial Intelligence",
//     date: "Posted on - January 10, 2024",
//     title: "ELEXDON Opens New AI Research Lab to Drive African Innovation",
//     description: "ELEXDON announces the opening of a state-of-the-art AI lab in Lagos, dedicated to solving regional challenges through machine learning and fostering next-generation African tech leaders.",
//     link: "#"
//   }
// ];












//   return (
//     <BlogPageContainer>
//       <Header>
//         <Title>Blog</Title>
//         <Subtitle>
//          ChatGPT said:
// Our shared values and collective drive are the force behind transformative progress—fueling innovation, inspiring excellence, and creating lasting impact for our customers, colleagues, and communities.</Subtitle>
//       </Header>
// <CardsGrid>
//   {cardsData.map((card, index) => (
//     <Card key={index}>
//       <CardImageWrapper>
//         <CardImage src={card.image.src} alt={card.image.alt} />
//         <CardTag>{card.tag}</CardTag>
//       </CardImageWrapper>
//       <CardContent>
//         <CardDate>{card.date}</CardDate>
//         <CardTitle>{card.title}</CardTitle>
//         <CardDescription>{card.description}</CardDescription>
//         <ReadMoreLink href={card.link}>Continue reading</ReadMoreLink>
//       </CardContent>
//     </Card>
//   ))}
// </CardsGrid>

//     </BlogPageContainer>
//   );
// };

// export default BlogComponent;



import React from 'react';
import styled from 'styled-components';
import p36 from "../../Images2/p36.png";
import p37 from "../../Images2/p37.png";
import p38 from "../../Images2/p38.png";
import { Fade, Slide } from 'react-awesome-reveal';

const BlogPageContainer = styled.div`
  color: #333;
  font-family: Arial, sans-serif;
  padding: 40px 120px;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 10px 0;
  font-weight: bold;
  color: #2f5f9bff;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const CardTag = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #b8de6f;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardDate = styled.p`
  color: #888;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 10px;
  min-height: 50px;
   color: #2f5f9bff;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
  min-height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const ReadMoreLink = styled.a`
  font-weight: bold;
  color: #1a361c;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: orange;
  }
`;

const BlogComponent = () => {
  const cardsData = [
    {
      image: {
        src: p36,
        alt: "ELEXDON Launches Green Tech Hub"
      },
      tag: "Sustainability",
      date: "Posted on - April 15, 2022",
      title: "ELEXDON Launches Africa’s First Green Tech Innovation Hub",
      description: "ELEXDON takes a bold step towards climate-conscious innovation with the launch of its Green Tech Hub in Nairobi, aimed at nurturing eco-friendly startups and sustainable tech solutions across the continent.",
      link: "#"
    },
    {
      image: {
        src: p37,
        alt: "ELEXDON Hosts Girls in STEM Summit"
      },
      tag: "Empowerment",
      date: "Posted on - March 8, 2023",
      title: "Empowering the Future: ELEXDON Hosts Africa-wide Girls in STEM Summit",
      description: "In celebration of International Women’s Day, ELEXDON hosted a continent-wide summit focused on empowering young girls in science, technology, engineering, and mathematics through mentorship and innovation challenges.",
      link: "#"
    },
    {
      image: {
        src: p38,
        alt: "ELEXDON AI Lab Opens"
      },
      tag: "Artificial Intelligence",
      date: "Posted on - January 10, 2024",
      title: "ELEXDON Opens New AI Research Lab to Drive African Innovation",
      description: "ELEXDON announces the opening of a state-of-the-art AI lab in Lagos, dedicated to solving regional challenges through machine learning and fostering next-generation African tech leaders.",
      link: "#"
    }
  ];

  return (
    <BlogPageContainer>
      <Header>
        <Slide direction="down" triggerOnce={false}>
          <Title>Blogs</Title>
        </Slide>
        <Slide direction="down" triggerOnce={false} delay={100}>
          <Subtitle>
            Our shared values and collective drive are the force behind transformative progress—fueling innovation, inspiring excellence, and creating lasting impact for our customers, colleagues, and communities.
          </Subtitle>
        </Slide>
      </Header>
      <CardsGrid>
        {cardsData.map((card, index) => (
          <Fade direction="right" triggerOnce={false} delay={index * 200} key={index}>
            <Card>
              <CardImageWrapper>
                <CardImage src={card.image.src} alt={card.image.alt} />
                <CardTag>{card.tag}</CardTag>
              </CardImageWrapper>
              <CardContent>
                <CardDate>{card.date}</CardDate>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                {/* <ReadMoreLink href={card.link}>Continue reading</ReadMoreLink> */}
              </CardContent>
            </Card>
          </Fade>
        ))}
      </CardsGrid>
    </BlogPageContainer>
  );
};

export default BlogComponent;