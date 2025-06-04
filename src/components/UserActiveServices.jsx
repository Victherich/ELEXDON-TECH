import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  padding-top:80px;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #2B32B2;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 1.25rem;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ServiceName = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c5282;
`;

const Badge = styled.span`
  font-size: 0.75rem;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background-color: #edf2f7;
  border: 1px solid #cbd5e0;
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  color: #4a5568;
  margin: 0.3rem 0;
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  text-align: center;
`;

const NoServices = styled.p`
  color: #718096;
  text-align: center;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Loader = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #ccc;
  border-top: 3px solid #2c5282;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: auto;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
`;

const ServiceCard = ({ service }) => (
  <Card>
    <Header>
      <ServiceName>{service.name}</ServiceName>
      <Badge>{service.status}</Badge>
    </Header>
    <div>
      <InfoText><strong>Domain:</strong> {service.domain || '—'}</InfoText>
      <InfoText><strong>Billing Cycle:</strong> {service.billingCycle}</InfoText>
      <InfoText><strong>Next Due:</strong> {service.nextDueDate}</InfoText>
      {/* <InfoText><strong>Amount:</strong> ₦{service.amount}</InfoText> */}
    </div>
  </Card>
);

const UserActiveServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.id) {
      setError('User not found. Please log in again.');
      setLoading(false);
      return;
    }

    const fetchServices = async () => {
      try {
        const res = await fetch(
          `https://www.elexdonhost.com.ng/api_elexdonhost/get_active_services_by_user.php?id=${user.id}`
        );
        const data = await res.json();

        if (data.success) {
          setServices(data.services);
          console.log(data)
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Failed to fetch services.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <Container>
      <Title>My Active Services</Title>

      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && !error && services.length === 0 && (
        <NoServices>You have no active services.</NoServices>
      )}

      <Grid>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Grid>
    </Container>
  );
};

export default UserActiveServices;
