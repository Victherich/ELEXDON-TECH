
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// --- Styled Components ---

const TransferInstructionsContainer = styled(motion.div)`
  background-color: #f8fcfd; /* Very light blue/grey background */
  border: 1px solid #e0e7ee;
  border-radius: 12px;
  padding: 30px;
  margin: 40px auto;
  max-width: 700px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 30px auto;
  }

  @media (max-width: 480px) {
    padding: 15px;
    margin: 20px auto;
  }
`;

const Title = styled.h3`
  font-size: 1.8em;
  color: #007bff;
  margin-bottom: 25px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
`;

const InstructionList = styled.ol`
  list-style-type: none; /* Remove default numbering */
  padding-left: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  padding-left: 35px; /* Space for custom number */
  position: relative;
  font-size: 1.1em;
  line-height: 1.7;

  strong {
    color: #007bff;
    font-weight: 700;
  }

  &:before {
    content: "${props => props.number}.";
    position: absolute;
    left: 0;
    top: 0;
    font-weight: bold;
    color: #28a745; /* Green for numbers */
    font-size: 1.2em;
    width: 25px;
    text-align: right;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 15px;
    padding-left: 30px;
    &:before {
      font-size: 1.1em;
      width: 20px;
    }
  }
`;

// Animation variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren", // Animate container before its children
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/**
 * React component to display instructions for domain transfer.
 * @param {object} props
 * @param {string} props.domainName - The domain name relevant to the instructions (e.g., "example.com").
 */
const DomainTransferInstructions = ({ domainName = '[yourdomain.com]' }) => {
  return (
    <TransferInstructionsContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Title as={motion.h3} variants={itemVariants}>
        Before proceeding with the transfer, please ensure the following:
      </Title>
      <InstructionList>
        <ListItem as={motion.li} variants={itemVariants} number="1">
          <strong>Unlock Your Domain:</strong> Log in to your current domain registrar's account (e.g., GoDaddy, Namecheap, etc.) and disable the 'Registrar Lock' or 'Transfer Lock' for '<strong>{domainName}</strong>'.
        </ListItem>
        <ListItem as={motion.li} variants={itemVariants} number="2">
          <strong>Get Your EPP Code:</strong> Also from your current registrar's account, find and copy the 'Authorization Code' (also known as EPP Code, AuthInfo Code, or Transfer Secret) for '<strong>{domainName}</strong>'.
        </ListItem>
        <ListItem as={motion.li} variants={itemVariants} number="3">
          <strong>Check 60-Day Rule:</strong> Your domain must have been registered or transferred at least 60 days ago.
        </ListItem>
        <ListItem as={motion.li} variants={itemVariants} number="4">
          <strong>Disable Privacy (Temporarily):</strong> If you have WHOIS Privacy enabled, you might need to temporarily disable it during the transfer process at your current registrar.
        </ListItem>
        <ListItem as={motion.li} variants={itemVariants} number="5">
          <strong>Ensure Correct Admin Contact:</strong> Make sure the administrative contact email in your WHOIS record is up-to-date and accessible, as transfer confirmation emails might be sent there.
        </ListItem>
      </InstructionList>
    </TransferInstructionsContainer>
  );
};

export default DomainTransferInstructions;