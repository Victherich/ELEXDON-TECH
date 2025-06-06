
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// --- Styled Components ---

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PageContainer = styled.div`
  font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.7;
  overflow-x: hidden; /* Prevent horizontal scroll due to animations */
  background: linear-gradient(to bottom right, #f7f9fc, #eef3f8);
  padding: 60px 20px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 18px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  padding: 50px 60px;

  @media (max-width: 1024px) {
    padding: 40px 50px;
  }

  @media (max-width: 768px) {
    padding: 30px 30px;
  }

  @media (max-width: 480px) {
    padding: 20px 20px;
    border-radius: 12px;
  }
`;

const MainHeading = styled(motion.h1)`
  font-size: 3.2em;
  color: #007bff;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 1024px) {
    font-size: 2.8em;
  }

  @media (max-width: 768px) {
    font-size: 2.2em;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.8em;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3em;
  color: #555;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.1em;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1em;
    margin-bottom: 25px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2em;
  color: #333;
  margin-top: 40px;
  margin-bottom: 25px;
  font-weight: 600;
  position: relative;
  padding-left: 20px;

  &:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #007bff;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    font-size: 1.7em;
    margin-top: 30px;
    margin-bottom: 20px;
    padding-left: 15px;
    &:before {
      width: 6px;
      height: 6px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.4em;
    padding-left: 12px;
    &:before {
      width: 5px;
      height: 5px;
    }
  }
`;

const TableContainer = styled(motion.div)`
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling for tables on small screens */
  margin: 30px 0;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  min-width: 600px; /* Ensure table doesn't get too squished */

  th,
  td {
    padding: 15px 20px;
    text-align: left;
    border-bottom: 1px solid #e0e7ee;
    font-size: 1em;

    @media (max-width: 768px) {
      padding: 12px 15px;
      font-size: 0.95em;
    }

    @media (max-width: 480px) {
      padding: 10px 12px;
      font-size: 0.9em;
    }
  }

  th {
    background-color: #007bff;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 1.1em;

    &:first-child {
      border-top-left-radius: 8px;
    }
    &:last-child {
      border-top-right-radius: 8px;
    }
  }

  tbody tr:nth-child(even) {
    background-color: #f9fcff; /* Very light blue stripe */
  }

  tbody tr:hover {
    background-color: #e6f7ff; /* Lighter blue on hover */
    cursor: pointer;
  }
`;

const InfoParagraph = styled(motion.p)`
  font-size: 1.1em;
  margin-bottom: 25px;
  color: #555;

  strong {
    color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 20px;
  }
`;

const DefinitionList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 40px;
`;

const DefinitionListItem = styled(motion.li)`
  font-size: 1.1em;
  margin-bottom: 20px;
  color: #444;
  position: relative;
  padding-left: 30px;

  &:before {
    content: '▪'; /* Square bullet */
    color: #28a745; /* Green bullet */
    font-size: 1.5em;
    position: absolute;
    left: 0;
    top: 0;
    line-height: 1.2;
  }

  strong {
    color: #007bff;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 15px;
    padding-left: 25px;
  }
`;

const FinalParagraph = styled(motion.p)`
  font-size: 1.2em;
  color: #007bff;
  text-align: center;
  font-weight: bold;
  margin-top: 50px;

  @media (max-width: 768px) {
    font-size: 1.1em;
    margin-top: 40px;
  }
`;


const Div = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 gap:5px;
 font-weight:bold;
 background:#2B32B2;
 color:white;
 width:150px;
 border-radius:5px;
 cursor:pointer;

text-align:center;
 box-sizing:border-box;
height:60px;
position:fixed;
top:90%;
left:10px;
z-index:9999999;

&:hover{
    background-color:purple;
}
`


// Animation variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const tableVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
};


// --- React Component ---

const RegistryCodesPage = () => {
    const navigate = useNavigate();

  return (
    <PageContainer>
         <Div onClick={()=>navigate('/knowledgebase')}>
                        <FaArrowLeft/>
                        <p>
                        Back to<br/> Knowledgebase
                        </p>
                                </Div>
      <ContentWrapper>
        <MainHeading
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Understanding Registry Codes
        </MainHeading>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Registry Status Codes provide critical information about a domain's current state and any restrictions or pending operations.
        </Subtitle>

        <SectionTitle
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={itemVariants}
        >
          EPP Status Value and their RRP Equivalent Status
        </SectionTitle>

        <TableContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={tableVariants}
        >
          <StyledTable>
            <thead>
              <tr>
                <th>EPP Registry Status Value</th>
                <th>RRP Equivalent Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OK</td>
                <td>Status: ACTIVE</td>
              </tr>
              <tr>
                <td>INACTIVE</td>
                <td>Status: ACTIVE</td>
              </tr>
              <tr>
                <td>Status: INACTIVE</td>
                <td>Status: ACTIVE</td>
              </tr>
              <tr>
                <td>Status: TRANSFER PROHIBITED / CLIENT TRANSFER PROHIBITED</td>
                <td>Status: ACTIVE</td>
              </tr>
              <tr>
                <td>Status: CLIENT RENEW PROHIBITED</td>
                <td>Status: ACTIVE</td>
              </tr>
              <tr>
                <td>Status: PENDING TRANSFER</td>
                <td>Status: ACTIVE</td>
              </tr>
              <tr>
                <td>Status: PENDING UPDATE</td>
                <td>Status: ACTIVE</td>
              </tr>
              <tr>
                <td>Status: PENDING RENEW</td>
                <td>Status: ACTIVE</td>
              </tr>
              <tr>
                <td>Status: PENDING DELETE</td>
                <td>Status: PENDINGDELETE</td>
              </tr>
              <tr>
                <td>Status: HOLD / SERVER HOLD</td>
                <td>Status: REGISTRY-HOLD</td>
              </tr>
              <tr>
                <td>Status: CLIENT HOLD</td>
                <td>Status: REGISTRAR-HOLD</td>
              </tr>
              <tr>
                <td>Status: DELETE PROHIBITED / SERVER DELETE PROHIBITED<br />Status: UPDATE PROHIBITED / SERVER UPDATE PROHIBITED<br />Status: TRANSFER PROHIBITED / SERVER TRANSFER PROHIBITED<br />Status: RENEW PROHIBITED / SERVER RENEW PROHIBITED</td>
                <td>Status: REGISTRY-LOCK</td>
              </tr>
              <tr>
                <td>Status: LOCK / SERVER LOCK</td>
                <td>Status: REGISTRY-LOCK</td>
              </tr>
              <tr>
                <td>Status: CLIENT DELETE PROHIBITED<br />Status: CLIENT UPDATE PROHIBITED<br />Status: CLIENT TRANSFER PROHIBITED</td>
                <td>Status: REGISTRAR-LOCK</td>
              </tr>
              <tr>
                <td>Status: CLIENT LOCK</td>
                <td>Status: REGISTRAR-LOCK</td>
              </tr>
              <tr>
                <td>Status: REDEMPTION PERIOD</td>
                <td>Status: REDEMPTIONPERIOD</td>
              </tr>
              <tr>
                <td>Status: PENDING RESTORE</td>
                <td>Status: PENDINGRESTORE</td>
              </tr>
            </tbody>
          </StyledTable>
        </TableContainer>

        <SectionTitle
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={itemVariants}
        >
          Registry Operator Status codes: (RRP) Registry Registrar Protocol
        </SectionTitle>
        <InfoParagraph
            as={motion.p}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
        >
            <motion.span variants={itemVariants}>
              <strong>Com/Net Registry Operator – Verisign Global Registry</strong>
            </motion.span>
        </InfoParagraph>
        <DefinitionList>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>ACTIVE:</strong> The registry sets this status. The domain can be modified by the registrar. The domain can be renewed. The domain will be included in the zone if the domain has been delegated to at least one name server. A domain can only change registrars if in this state.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>REGISTRY-LOCK:</strong> The registry sets this status. The domain can not be modified or deleted by the registrar. The registry must remove the REGISTRY-LOCK status for the registrar to modify the domain. The domain can be renewed. The domain will be included in the zone if the domain has been delegated to at least one name server.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>REGISTRAR-LOCK:</strong> The sponsoring registrar sets this status. The domain can not be modified or deleted. The registrar must remove REGISTRAR-LOCK status to modify the domain. The domain can be renewed. The domain will be included in the zone.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>REGISTRY-HOLD:</strong> The registry sets this status. The domain can not be modified or deleted by the registrar. The registry must remove the REGISTRY-HOLD status for the registrar to modify the domain. The domain can be renewed. The domain will not be included in the zone.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>REGISTRAR-HOLD:</strong> The sponsoring registrar sets this status. The domain can not be modified or deleted. The registrar must remove REGISTRAR-HOLD status to modify the domain. The domain can be renewed. The domain will not be included in the zone.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>REDEMPTIONPERIOD:</strong> The registry sets this status when a registrar requests that the domain name be deleted from the registry and the domain has been registered for more than 5 calendar days (if the delete request is received within 5 days of initial domain registration it will instead be deleted immediately). The domain will not be included in the zone. The domain can not be modified or purged; it can only be restored. Any other registrar requests to modify or otherwise update the domain will be rejected. The domain will be held in this status for a maximum of 30 calendar days.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>PENDINGRESTORE:</strong> The registry sets this status after a registrar requests restoration of a domain that is in REDEMPTIONPERIOD status. The domain will be included in the zone. Registrar requests to modify or otherwise update the domain will be rejected. The domain will be held in this status while the registry waits for the registrar to provide required restoration documentation. If the registrar fails to provide documentation to the registry within 7 calendar days to confirm the restoration request, the domain will revert to REDEMPTIONPERIOD status. The domain status will be set to ACTIVE only if the registrar provides documentation to the registry within 7 calendar days to confirm the restoration request.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>PENDINGDELETE:</strong> The registry sets this status after a domain has been set in REDEMPTIONPERIOD status and the domain has not been restored by the registrar. The domain will not be included in the zone. Once in this status all registrar requests to modify or otherwise update the domain will be rejected. The domain will be purged from the registry database after being in this status for 5 calendar days.
          </DefinitionListItem>
        </DefinitionList>

        <SectionTitle
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={itemVariants}
        >
          EEP Domains
        </SectionTitle>
        <InfoParagraph
            as={motion.p}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
        >
            Domain Status: Normally operating domains have a status of "OK" or "Active."
            Other status values detail pending operations and restrictions regarding
            the domain. If the status is OK then the domain can be transferred.
        </InfoParagraph>
        <DefinitionList>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>OK:</strong> This is the nominal status value for a domain object at all times, whether or not the domain has pending operations or prohibitions.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>New:</strong> This is the nominal status for a newly created domain object. The domain can be modified unless locked.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>Active:</strong> The domain can be modified and appears in a zone file. This is the nominal status for a domain object once it has been published in a zone.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>Locked:</strong> The domain cannot be transferred, renewed, or deleted. (Though the status value can be changed.) Hierarchical and associated objects cannot be added or removed from the domain object. Domain names involved in Sunrise and other disputes may be locked, subject to registry policies.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>Hold:</strong> The domain will not be published in a zone for DNS resolution. Names without at least two nameservers may be placed on Hold status; in this case submit nameserver data through your registrar.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>pendingTransfer:</strong> A transfer request has been received for the domain, and completion of the request is pending. The domain cannot be renewed, deleted, or updated while in this state.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>pendingDelete:</strong> A delete request has been received from the registrar for the domain. The domain has been removed from the zone, but has not yet been purged from the registry database. The domain cannot be renewed, deleted, transferred, or updated while in this state.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>clientHold:</strong> The domain will not be published in a zone for DNS resolution. This status is placed on the domain by the registrar.
          </DefinitionListItem>
          <DefinitionListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInUp}
          >
            <strong>clientLock:</strong> The domain cannot be transferred, renewed, deleted, or updated. This status is placed on the domain by the registrar. An update command may be used to change the status value. Hierarchical and associated objects cannot not be added or removed from the domain object.
          </DefinitionListItem>
        </DefinitionList>

        <FinalParagraph
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
        >
            Understanding these registry codes is essential for effective domain management and troubleshooting.
        </FinalParagraph>
      </ContentWrapper>
    </PageContainer>
  );
};

export default RegistryCodesPage;