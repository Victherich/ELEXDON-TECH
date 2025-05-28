
// // components/DomainSearch.jsx
// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import domainsearchimg from '../Images/domainsearchimg.jpeg'

// // Dummy available domains
// const availableDomains = ['elexdon.com', 'elexdon.net', 'elexdon.io'];


// const DomainWrap = styled.div`
//   width: 100%;
//   padding: 100px 0px;
//   background-image: url(${domainsearchimg});
//   background-size: cover;
//   background-position: bottom;
//   position: relative;
//   z-index: 1;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(255, 255, 255, 0.8); // semi-transparent white
//     z-index: 0;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }
// `;


// const Container = styled.div`
//   max-width: 800px;
//   margin: 0px auto;
  
//   padding: 40px;
//   border-radius: 20px;
//   box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
//   text-align: center;
//   color: #fff;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 20px;
//   background: linear-gradient(90deg, #2B32B2, #3b82f6, #9333ea);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;


// const Form = styled.form`
//   display: flex;
//   gap: 10px;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

// const Input = styled.input`
//   padding: 12px 20px;
//   border-radius: 30px;
//   border: none;
//   width: 300px;
//   font-size: 16px;
//   outline: #2B32B2;
//   border : 4px solid rgba(0,0,255,0.2);
//   background: #eee;
//   color: #333;
// `;

// const Button = styled.button`
//   background: linear-gradient(90deg, #facc15, #fcd34d);
//   color: #000;
//   padding: 12px 25px;
//   font-size: 16px;
//   border: none;
//   border-radius: 30px;
//   cursor: pointer;
//   font-weight: bold;
//   transition: 0.3s ease;

//   &:hover {
//     background: linear-gradient(90deg, #facc15, #fde68a);
//     transform: scale(1.05);
//   }
// `;

// const Result = styled.div`
//   margin-top: 30px;
//   font-size: 18px;
//   background: ${({ available }) =>
//     available ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'};
//   color: ${({ available }) => (available ? '#22c55e' : '#ef4444')};
//   padding: 20px;
//   border-radius: 10px;
//   font-weight: bold;
//   border: 1px solid ${({ available }) => (available ? '#22c55e' : '#ef4444')};
// `;




// const DomainSearch = () => {
//   const [domain, setDomain] = useState('');
//   const [result, setResult] = useState(null);

//   const checkAvailability = (e) => {
//     e.preventDefault();
//     const isAvailable = availableDomains.includes(domain.trim().toLowerCase());
//     setResult({
//       name: domain.trim(),
//       available: isAvailable,
//     });
//   };

//   return (
//     <DomainWrap>

    
//     <Container>
//       <Title>Search for Your Dream Domain</Title>
//       <Form onSubmit={checkAvailability}>
//         <Input
//           type="text"
//           placeholder="Enter domain (e.g. elexdon.com)"
//           value={domain}
//           onChange={(e) => setDomain(e.target.value)}
//         />
//         <Button type="submit">Search</Button>
//       </Form>
//       {result && (
//         <Result available={result.available}>
//           {result.available ? (
//             <>🎉 <strong>{result.name}</strong> is available!</>
//           ) : (
//             <>❌ <strong>{result.name}</strong> is already taken.</>
//           )}
//         </Result>
//       )}
//     </Container>
//     </DomainWrap>
//   );
// };

// export default DomainSearch;
















// components/DomainSearch.jsx
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import 'animate.css';
import domainsearchimg from '../Images/domainsearchimg.jpeg';

// Dummy available domains
const availableDomains = ['elexdon.com', 'elexdon.net', 'elexdon.io'];

// Scroll animation hook - triggers animation every time element scrolls in/out of view
const useAnimateOnScroll = (animationClass) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: isVisible ? `animate__animated ${animationClass}` : 'opacity-0',
  };
};

const DomainWrap = styled.div`
  width: 100%;
  padding: 100px 0px;
  background-image: url(${domainsearchimg});
  background-size: cover;
  background-position: bottom;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #2B32B2, #3b82f6, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 12px 20px;
  border-radius: 30px;
  border: none;
  width: 300px;
  font-size: 16px;
  outline: #2B32B2;
  border: 4px solid rgba(0,0,255,0.2);
  background: #eee;
  color: #333;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #facc15, #fcd34d);
  color: #000;
  padding: 12px 25px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #facc15, #fde68a);
    transform: scale(1.05);
  }
`;

const Result = styled.div`
  margin-top: 30px;
  font-size: 18px;
  background: ${({ available }) =>
    available ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'};
  color: ${({ available }) => (available ? '#22c55e' : '#ef4444')};
  padding: 20px;
  border-radius: 10px;
  font-weight: bold;
  border: 1px solid ${({ available }) => (available ? '#22c55e' : '#ef4444')};
`;

const DomainSearch = () => {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState(null);

  const titleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const formAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const resultAnim = useAnimateOnScroll('animate__fadeIn animate__slower');

  const checkAvailability = (e) => {
    e.preventDefault();
    const isAvailable = availableDomains.includes(domain.trim().toLowerCase());
    setResult({
      name: domain.trim(),
      available: isAvailable,
    });
  };

  return (
    <DomainWrap>
      <Container>
        <Title ref={titleAnim.ref} className={titleAnim.className}>
          Search for Your Dream Domain
        </Title>
        <Form
          ref={formAnim.ref}
          className={formAnim.className}
          onSubmit={checkAvailability}
        >
          <Input
            type="text"
            placeholder="Enter domain (e.g. elexdon.com)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </Form>
        {result && (
          <Result
            ref={resultAnim.ref}
            className={resultAnim.className}
            available={result.available}
          >
            {result.available ? (
              <>🎉 <strong>{result.name}</strong> is available!</>
            ) : (
              <>❌ <strong>{result.name}</strong> is already taken.</>
            )}
          </Result>
        )}
      </Container>
    </DomainWrap>
  );
};

export default DomainSearch;
