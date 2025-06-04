
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
//   background: #f7f9fc;
  border-radius: 10px;
//   box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #2B32B2;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  background: rgba(0,0,255,0.1);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(43,50,178,0.5);
  margin-bottom: 1.5rem;
`;

const Label = styled.div`
  font-weight: 600;
  color: #555;
  margin-bottom: 0.3rem;
`;

const Value = styled.div`
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 1rem;
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  flex-wrap:wrap;
  gap:20px;
`;

const StatBox = styled.div`
  background: rgba(0,0,255,0.7);
  color:white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-align: center;
  flex: 1;
  margin: 0 0.5rem;

  & h3 {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  & p {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const ErrorMsg = styled.div`
  color: red;
  text-align: center;
  margin-top: 2rem;
  font-weight: 600;
`;


const Title = styled.h2`
  color: #2B32B2;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const UserProfile = () => {
  const [client, setClient] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [invoices, setInvoices] = useState([]);
      const [services, setServices] = useState([]);
       const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setError('No user found. Please log in.');
      setLoading(false);
      return;
    }

    const user = JSON.parse(storedUser);

    fetch(`https://www.elexdonhost.com.ng/api_elexdonhost/get_user_by_id.php?id=${user.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setClient(data.client);
          setStats(data.stats);
        } else {
          setError(data.message || 'Failed to load user details.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch data from server.');
        setLoading(false);
      });
  }, []);




  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
    //   setError('User not found in local storage.');
    //   setLoading(false);
      return;
    }
    // setLoading(true)

    fetch(`https://www.elexdonhost.com.ng/api_elexdonhost/get_invoices_by_user.php?id=${user.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setInvoices(data.invoices);
        } else {
        //   setError(data.message || 'Unable to load invoices.');
        }
        // setLoading(false);
      })
      .catch(err => {
        console.error(err);
        // setError('Server error.');
        // setLoading(false);
      });
  }, []);




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
        //   console.log(data)
        } else {
        //   setError(data.message);
        }
      } catch (err) {
        // setError('Failed to fetch services.');
      } finally {
        // setLoading(false);
      }
    };

    fetchServices();
  }, []);



  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user?.id) {
        // setError('User not found. Please log in again.');
        // setLoading(false);
        return;
      }
  
      const fetchTickets = async () => {
        try {
          const res = await fetch(
            `https://www.elexdonhost.com.ng/api_elexdonhost/get_tickets_by_user.php?id=${user.id}`
          );
          const data = await res.json();
  
          if (data.success) {
            setTickets(data.tickets);
          } else {
            // setError(data.message);
          }
        } catch (err) {
        //   setError('Failed to fetch tickets.');
        } finally {
        //   setLoading(false);
        }
      };
  
      fetchTickets();
    }, []);




   if (loading) return <Loading><Title>User Dashboard</Title>
    <h4>Loading ...</h4></Loading>;
    
  if (error) return <Loading><Title>User Dashboard</Title>
    <h4>{error}</h4></Loading>;

  return (
    <Container>
      <Header>Welcome, {client?.firstname} {client?.lastname}</Header>

      <Card>
        <Label>Email</Label>
        <Value>{client?.email}</Value>

        <Label>Company</Label>
        <Value>{client?.companyname || 'N/A'}</Value>

        <Label>Phone Number</Label>
        <Value>{client?.phonenumber || 'N/A'}</Value>

        <Label>Address</Label>
        <Value>
          {client?.address1}, {client?.city}, {client?.state}, {client?.postcode}, {client?.country}
        </Value>
      </Card>

      {stats && (
        <StatsGrid>
          <StatBox>
            <h3>Invoices</h3>
            <p>{invoices?.length || 0}</p>
          </StatBox>
          <StatBox>
            <h3>Active Services</h3>
            <p>{services?.length || 0}</p>
          </StatBox>
          <StatBox>
            <h3>Tickets</h3>
            <p>{tickets.length || 0}</p>
          </StatBox>
        </StatsGrid>
      )}
    </Container>
  );
};

export default UserProfile;
