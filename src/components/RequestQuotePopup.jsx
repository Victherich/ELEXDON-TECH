
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

// Floating button
const FloatingButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: #2B32B2;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: 0.3s;

  &:hover {
    background: #1e2a91;
  }
`;

// Overlay behind modal
const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Modal content
const Modal = styled.div`
  background: rgba(255,255,255,0.9);
  border-radius: 20px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #2B32B2;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  margin-bottom: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 1rem;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.9rem;
  margin-bottom: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 1rem;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  flex: 1;
  background: #2B32B2;
  color: white;
  padding: 0.9rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background: #1e2a91;
  }
`;

const CancelButton = styled.button`
  flex: 1;
  background: #e2e8f0;
  color: #333;
  padding: 0.9rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background: #cbd5e1;
  }
`;

const RequestQuotePopup = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });
  const [loading, setLoading] = useState(false);

  // Auto-open every 1 minute
  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(true);
    }, 3*60000); // 60,000 ms = 1 min

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    Swal.fire({
      title: 'Sending Request...',
      html: 'Please wait while your quotation request is being sent.',
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
      allowEscapeKey: false
    });

    const backendUrl = 'https://elexdontech.com/api/request_for_quote.php';

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: data.message,
          confirmButtonColor: '#2B32B2'
        });
        setFormData({ name: '', email: '', phone: '', service: '' });
        setOpen(false);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.error,
          confirmButtonColor: '#2B32B2'
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred while sending your request. Please try again later.',
        confirmButtonColor: '#2B32B2'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <FloatingButton onClick={() => setOpen(true)}>
        Request Quote
      </FloatingButton>

      {/* Popup Modal */}
      <Overlay open={open}>
        <Modal>
          <Title>Request a Quotation</Title>
          <form onSubmit={handleSubmit}>
            <Input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <Input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <Input 
              type="tel" 
              name="phone" 
              placeholder="Your Phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          <Input
  type="text"
  name="service"
  placeholder="Service Interested In"
  value={formData.service}
  onChange={handleChange}
  required
/>

            <ButtonGroup>
              <CancelButton type="button" onClick={() => setOpen(false)}>Cancel</CancelButton>
              <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </SubmitButton>
            </ButtonGroup>
          </form>
        </Modal>
      </Overlay>
    </>
  );
};

export default RequestQuotePopup;
