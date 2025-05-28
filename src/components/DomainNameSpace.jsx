

import React from 'react';
import styled, { keyframes } from 'styled-components';
// import { useSelector } from 'react-redux';

const spinY = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

const spaceBackgroundLight = `
  radial-gradient(circle at 20% 40%, #dbeafe 0%, #e0f2fe 20%, #f8fafc 80%),
  linear-gradient(to right, #f1f5f9, #e2e8f0)
`;

const spaceBackgroundDark = `
  radial-gradient(circle at 30% 30%, #0f172a 0%, #1e293b 30%, #000000 90%)
`;

const Container = styled.div`
  padding: 50px 10px;
  background: ${({ theme }) =>
    theme === 'dark' ? spaceBackgroundDark : spaceBackgroundLight};
  background-size: cover;
  background-repeat: no-repeat;
  
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => (theme === 'dark' ? 'white' : '#FF7133')};
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Sphere = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'radial-gradient(circle at 35% 35%, #fbbf24, #78350f)'
      : 'radial-gradient(circle at 35% 35%, #FF7133, #b45309)'};
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${spinY} 12s linear infinite;
  transform-style: preserve-3d;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
`;

const DomainNameSpace = () => {
//   const theme = useSelector((state) => state.theme);
  const theme = false;

  const qualifications = [
    '.com', '.net', '.org', '.com.ng', '.ng', '.store',
  ];

  return (
    <Container theme={theme === true ? 'light' : 'dark'}>
      <Title theme={theme === true ? 'light' : 'dark'}>
        Popular TLDs
      </Title>
      <Grid>
        {qualifications.map((qual, index) => (
          <Sphere key={index} theme={theme === true ? 'light' : 'dark'}>
            {qual}
          </Sphere>
        ))}
      </Grid>
    </Container>
  );
};

export default DomainNameSpace;


