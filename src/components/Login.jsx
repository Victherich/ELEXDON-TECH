// LoginPage.js
import React from 'react';
import styled from 'styled-components';
import bg from '../Images/herobg5.jpg';
import illustration from '../Images/logo4.jpeg';

const AuthContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: url(${bg}) no-repeat center center/cover;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.7); /* White overlay with 70% opacity */
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

   @media(max-width:428px){
    padding:0.5rem;
  }
`;

const AuthCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 3rem;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);

   @media(max-width:428px){
    padding:1rem;
    box-shadow:none;
    img{
    display:none;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #2B32B2;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.25rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  background: #2B32B2;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1e2a91;
  }
`;

const LinkText = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;

  a {
    color: #2B32B2;
    text-decoration: none;
    font-weight: bold;
  }
`;

const LoginPage = () => {
  return (
    <AuthContainer>
      <AuthCard>
        <img src={illustration} alt="Login" style={{ width: '100%', marginBottom: '1rem' }} />
        <Title>Welcome Back to Elexdon Host</Title>
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
        <LinkText><a href="/forgot-password">Forgot Password?</a></LinkText>
        <LinkText>Don't have an account? <a href="/signup">Sign Up</a></LinkText>
      </AuthCard>
    </AuthContainer>
  );
};

export default LoginPage;

