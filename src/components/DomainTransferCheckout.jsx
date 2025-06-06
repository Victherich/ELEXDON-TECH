

import React, { useState } from "react";
import styled from "styled-components";
import bg from "../Images/herobg5.jpg";
import logo from "../Images/logo4.jpeg";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const PageWrapper = styled.div`
  background: url(${bg}) no-repeat center center/cover;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top:80px;
  &::before {
    content: "";
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    inset: 0;
    z-index: 1;
  }
  > * {
    position: relative;
    z-index: 2;
  }
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  max-width: 180px;
  margin: 0 auto 1.5rem;
  display: block;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #2b32b2;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  box-sizing:border-box;
`;

const Select = styled.select`
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  background: #2b32b2;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2rem;
  &:hover {
    background: #1e2a91;
  }
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

const Error = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

export default function DomainTransferCheckout() {
  const { domainname, eppcode } = useParams();
  const navigate = useNavigate();

  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkoutType, setCheckoutType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

//   const [form, setForm] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     domain: domainname,
//     domaintype: "register",
//     companyname: "",
//     address1: "",
//     address2: "",
//     city: "",
//     state: "",
//     postcode: "",
//     country: "NG",
//     phonenumber: ""
//   });

const [form, setForm] = useState({
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  domain: domainname,
  domaintype: "transfer", // changed to transfer
  eppcode: eppcode || "", // added EPP/Auth code
  companyname: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postcode: "",
  country: "NG",
  phonenumber: ""
});


  console.log(form)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!checkoutType) {
      if (form.email !== confirmEmail) {
        Swal.fire({ text: "Emails do not match" });
        return;
      }
      if (form.password !== confirmPassword) {
        Swal.fire({ text: "Passwords do not match" });
        return;
      }
    }

    Swal.fire({
      title: "Processing your order...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    const endpoint = checkoutType
      ? "https://www.elexdonhost.com.ng/api_elexdonhost/domain_transfer_checkout2.php"
      : "https://www.elexdonhost.com.ng/api_elexdonhost/domain_transfer_checkout.php";

    const payload = checkoutType
      ? {
          email: form.email,
          password: form.password,
          domain: form.domain,
          domaintype: form.domaintype,
           eppcode: form.eppcode 
        }
      : { ...form };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      Swal.close();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Order Successful",
          text: "Redirecting...",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(`/invoice/${data.invoiceId}`);
      } else {
        setError(data.message || "Checkout failed.");
        Swal.fire({
          icon: "error",
          title: "Checkout Failed",
          text: data.details?.message || "An error occurred during checkout.",
        });
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <Logo src={logo} alt="Elexdon Host Logo" />
        <Title>Complete Your Domain Transfer</Title>
        <Title>Domain Name: <span style={{color:"purple", textDecoration:"underline"}}>{domainname}</span></Title>
  <Title>Epp Code: <span style={{color:"purple", textDecoration:"underline"}}>{eppcode}</span></Title>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            <p>Do you already have an account? Check the box below</p>
            <input
              type="checkbox"
              checked={checkoutType}
              onChange={(e) => setCheckoutType(e.target.checked)}
              style={{ width: "20px", height: "20px" }}
            />
            I already have an account
          </label>
        </div>

        <Grid>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            value={form.email}
          />
          {!checkoutType && (
            <Input
              name="confirmEmail"
              type="email"
              placeholder="Confirm Email"
              required
              onChange={(e) => setConfirmEmail(e.target.value)}
              value={confirmEmail}
            />
          )}
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={form.password}
          />
          {!checkoutType && (
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          )}

          {!checkoutType && (
            <>
              <Input
                name="firstname"
                placeholder="First Name"
                required
                onChange={handleChange}
                value={form.firstname}
              />
              <Input
                name="lastname"
                placeholder="Last Name"
                required
                onChange={handleChange}
                value={form.lastname}
              />
              <Input
                name="companyname"
                placeholder="Company Name"
                onChange={handleChange}
                value={form.companyname}
              />
              <Input
                name="address1"
                placeholder="Address 1"
                required
                onChange={handleChange}
                value={form.address1}
              />
              <Input
                name="address2"
                placeholder="Address 2"
                onChange={handleChange}
                value={form.address2}
              />
              <Input
                name="city"
                placeholder="City"
                required
                onChange={handleChange}
                value={form.city}
              />
              <Input
                name="state"
                placeholder="State/Region"
                required
                onChange={handleChange}
                value={form.state}
              />
              <Input
                name="postcode"
                placeholder="Postcode"
                required
                onChange={handleChange}
                value={form.postcode}
              />
              <Select
                name="country"
                required
                onChange={handleChange}
                value={form.country}
              >
                <option value="">-- Select Country --</option>
                <option value="NG">Nigeria</option>
                <option value="GH">Ghana</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
              </Select>
              <Input
                name="phonenumber"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                value={form.phonenumber}
              />
            </>
          )}
        </Grid>

        <Button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Proceed with Order"}
        </Button>

        {error && <Error>{error}</Error>}
      </FormContainer>
    </PageWrapper>
  );
}
