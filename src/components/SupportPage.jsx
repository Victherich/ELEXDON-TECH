
import React from 'react';
import styled from 'styled-components';
import supportImg from '../Images/helpdesk.jpg'; // Replace with your actual image
import ticketImg from '../Images/helpdesk2.jpg'; // Another support image

const PageContainer = styled.div`
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom, #f1f5f9, #e2e8f0);
  color: #1e293b;
  padding: 60px 20px;

  
`;

const HeroSection = styled.section`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 60px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2B32B2;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  color: #475569;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  box-sizing:border-box;

  h2{
    color:#2B32B2;
  }
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  min-height: 150px;
  margin-bottom: 1.25rem;
  box-sizing: border-box;

`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1.25rem;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
`;

const FileInput = styled.input`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: #2b32b2;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1e2a91;
  }
`;

const Sidebar = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    border-radius: 16px;
    margin-bottom: 1rem;
  }

  h3 {
    color: #2B32B2;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: #475569;
  }
`;

const SupportPage = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Title>We're Here to Help</Title>
        <SubTitle>
          Whether you're stuck, curious, or planning something big — the Elexdon Host support team is ready to assist you 24/7. Submit a ticket and we’ll get back to you as fast as lightning.
        </SubTitle>
      </HeroSection>

      <ContentGrid>
        <FormCard>
          <h2>Submit a Support Ticket</h2>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="text" placeholder="Subject" />
          <Select>
            <option>Choose Department</option>
            <option>Sales</option>
            <option>Technical Support</option>
            <option>Billing</option>
          </Select>
          <Select>
            <option>Set Priority</option>
            <option>Low</option>
            <option selected>Medium</option>
            <option>High</option>
          </Select>
          <TextArea placeholder="Type your message here..." />
          <FileInput type="file" />
          <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Allowed file types: .jpg, .gif, .jpeg, .png, .zip, .pdf, .xls, .docx, .txt
          </p>
          <Button>Submit Ticket</Button>
        </FormCard>

        <Sidebar>
          <img src={ticketImg} alt="Support illustration" />
          <h3>Need Immediate Help?</h3>
          <p>Check our knowledge base or chat with us live.</p>
          <img src={supportImg} alt="Live support" />
          <h3>24/7 Expert Support</h3>
          <p>Real humans. Real fast. No bots. Your success is our priority.</p>
        </Sidebar>
      </ContentGrid>
    </PageContainer>
  );
};

export default SupportPage;
