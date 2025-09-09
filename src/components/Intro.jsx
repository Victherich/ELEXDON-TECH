// import React from "react";
// import styled from "styled-components";

// // Styled Components
// const IntroSection = styled.section`
//   background: linear-gradient(135deg, #0f172a, #1e293b);
//   background:gray;
//   color: white;
//   padding: 80px 20px;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// //   min-height: 70vh;
// `;

// // Keyframe animations
// const fadeIn = `
//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// const Title = styled.h1`
//   font-size: 2.8rem;
//   font-weight: bold;
//   max-width: 800px;
//   line-height: 1.3;
//   margin-bottom: 20px;
//   animation: fadeIn 1s ease-out;
//   ${fadeIn}
// `;

// const Subtitle = styled.p`
//   font-size: 1.2rem;
//   max-width: 700px;
// //   color: #ddd;
//   margin-bottom: 30px;
//   animation: fadeIn 1s ease-out 0.3s;
//   ${fadeIn}
// `;

// const CTAButton = styled.a`
//   background: #007bff;
//   color: white;
//   padding: 12px 24px;
//   font-size: 1rem;
//   font-weight: bold;
//   border-radius: 8px;
//   text-decoration: none;
//   transition: background 0.3s, transform 0.2s;
//   &:hover {
//     background: #0056b3;
//     transform: scale(1.1);
//   }
// `;

// export default function JournalIntro() {
//   return (
//     <IntroSection>
 
      
//       <Subtitle>
//         Your trusted source for insightful articles, research, and in-depth 
//         analysis across a wide range of disciplines. Explore groundbreaking ideas, 
//         expert opinions, and the latest trends in science, technology, and culture.
//       </Subtitle>
      

//     </IntroSection>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const IntroSection = styled.section`
//   background: linear-gradient(135deg, #0f172a, #1e293b);
// background:gray;
 background:#2f5f9bff;
  color: white;
  padding: 80px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

// Typing Animation
const TypingText = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  max-width: 800px;
  line-height: 1.3;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid white; /* Cursor effect */
  width: fit-content;
  animation: blinkCursor 0.8s steps(2, start) infinite;

  @keyframes blinkCursor {
    50% {
      border-color: transparent;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight:bold;
  max-width: 700px;
//   color: #ddd;
  margin-bottom: 30px;
  opacity: 0;
//   transition: opacity 1s ease-in-out 1s;
`;

const CTAButton = styled.a`
  background: #007bff;
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s, transform 0.2s;
  opacity: 0;
  transition: opacity 1s ease-in-out 1.5s;

  &:hover {
    background: #0056b3;
    transform: scale(1.1);
  }
`;


const More = styled.p`
 text-decoration:underline;
 font-style:italic;
 cursor:pointer;

 &:hover{
  color:blue;
 }
`

export default function JournalIntro() {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const fullText = "  Elexdon also offers school eLearning portals and a full range of efficient in-house and outsourced payment solutions, including electronic payment systems and integration-based solutions.";

  
  
  
  const [isVisible, setIsVisible] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          handleShowMore();
        }
      },
      { threshold: 0.5 } // Trigger when 50% is visible
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 25);
      return () => clearInterval(interval);
    }
  }, [isVisible]);


  const [showMore,setShowMore]=useState(false)

  const handleShowMore=()=>{
    const id = setTimeout(()=>{
      setShowMore(true)
    },8000)

    return()=>clearTimeout(id)
  }




  return (
    <IntroSection ref={introRef}>
      {/* <TypingText>{typedText}</TypingText> */}

      <Subtitle style={{ opacity: isVisible ? 1 : 0 }}>
       
        {typedText}
      </Subtitle>

   {/* {showMore&&<More onClick={()=>navigate('/aboutus')}>More about AJGA</More>} */}
    </IntroSection>
  );
}

