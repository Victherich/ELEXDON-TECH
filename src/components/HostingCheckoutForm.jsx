// import React, { useState } from "react";
// import styled from "styled-components";
// import bg from "../Images/herobg5.jpg";
// import logo from "../Images/logo4.jpeg";
// import Swal from 'sweetalert2'

// const PageWrapper = styled.div`
//   background: url(${bg}) no-repeat center center/cover;
//   min-height: 100vh;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;

//   &::before {
//     content: "";
//     background: rgba(255, 255, 255, 0.8);
//     position: absolute;
//     inset: 0;
//     z-index: 1;
//   }

//   > * {
//     position: relative;
//     z-index: 2;
//   }

//   @media (max-width: 428px) {
//     padding: 1rem;
//   }
// `;

// const FormContainer = styled.form`
//   width: 100%;
//   max-width: 900px;
//   background: rgba(255, 255, 255, 0.6);
//   border-radius: 20px;
//   padding: 2.5rem;
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// const Logo = styled.img`
//   max-width: 180px;
//   margin: 0 auto 1.5rem;
//   display: block;
// `;

// const Title = styled.h2`
//   text-align: center;
//   font-size: 2rem;
//   color: #2B32B2;
//   margin-bottom: 2rem;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//   gap: 1.2rem;
// `;

// const Input = styled.input`
//   padding: 1rem;
//   width: 100%;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   font-size: 1rem;
//   box-sizing:border-box;
// `;

// const Select = styled.select`
//   padding: 1rem;
//   width: 100%;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   font-size: 1rem;
// `;

// const Button = styled.button`
//   width: 100%;
//   background: #2B32B2;
//   color: white;
//   padding: 1rem;
//   border: none;
//   border-radius: 12px;
//   font-size: 1rem;
//   font-weight: bold;
//   margin-top: 2rem;
//   cursor: pointer;

//   &:hover {
//     background: #1e2a91;
//   }

//   &:disabled {
//     background-color: #999;
//     cursor: not-allowed;
//   }
// `;

// const Error = styled.p`
//   color: red;
//   text-align: center;
//   margin-top: 1rem;
// `;

// export default function HostingCheckoutPage() {
//   const [form, setForm] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//     domain: '',
//     domaintype: 'register',
//     billingcycle: 'annually',
//     pid: '3',
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [domainStatus, setDomainStatus] = useState(null);
// const [checkingDomain, setCheckingDomain] = useState(false);

// const checkDomainAvailability = async () => {
//   if (!form.domain) {
//     Swal.fire({text:"Please enter domain"})
//     return;}

//   setCheckingDomain(true);
//   setDomainStatus(null);

//   // Show loading Swal
//   Swal.fire({
//     title: 'Checking domain...',
//     text: 'Please wait while we check availability.',
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     }
//   });

//   try {
//     const res = await fetch("https://yourdomain.com/api/check_domain.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ domain: form.domain, type: form.domaintype }),
//     });

//     const data = await res.json();
//     if (data.available) {
//       setDomainStatus("available");
//       Swal.fire({
//         icon: 'success',
//         title: 'Domain Available',
//         text: 'Great! The domain is available for registration.'
//       });
//     } else {
//       setDomainStatus("unavailable");
//       Swal.fire({
//         icon: 'error',
//         title: 'Domain Unavailable',
//         text: 'Sorry, that domain is not available.'
//       });
//     }
//   } catch (err) {
//     console.error("Domain check error:", err);
//     setDomainStatus("error");
//     Swal.fire({
//       icon: 'error',
//       title: 'Error',
//       text: 'There was an error checking the domain. Please try again.'
//     });
//   } finally {
//     setCheckingDomain(false);
//   }
// };




//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };



//   const handleSubmit = async (e) => {
//   e.preventDefault();
//     if (form.domaintype === 'register' && domainStatus !== 'available') {
//   setError("Domain must be available to proceed with registration.");
//   setLoading(false);
//   return;
//     }

  
//     setError(null);
//     setLoading(true);

//     try {
//       const res = await fetch("https://yourdomain.com/api/checkout.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();
//       if (data.success) {
//         window.location.href = data.redirect_url;
//       } else {
//         setError(data.message || "Checkout failed");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <PageWrapper>
//       <FormContainer onSubmit={handleSubmit}>
//         <Logo src={logo} alt="Elexdon Host Logo" />
//         <Title>Complete Your Hosting Order</Title>
//         <Grid>
//           <Input name="firstname" placeholder="First Name" required onChange={handleChange} />
//           <Input name="lastname" placeholder="Last Name" required onChange={handleChange} />
//           <Input name="email" type="email" placeholder="Email Address" required onChange={handleChange} />
//           <Input name="password" type="password" placeholder="Password" required onChange={handleChange} />
       
//         <Select name="billingcycle" onChange={handleChange} required>
//             <option >-- Select billing cycle --</option>
//             <option value="monthly">Monthly</option>
//             <option value="annually">Annually</option>
      
//           </Select>


//             <Select name="domaintype" onChange={handleChange} required>
//     <option value="">-- Select domain type --</option>
//     <option value="register">Register New Domain</option>
//     <option value="transfer">Transfer Existing Domain</option>
//     <option value="owndomain">Use Own Domain</option>
//   </Select>

//   {/* <div style={{ display: 'flex', gap: '1rem' }}> */}
//     <Input
//       name="domain"
//       placeholder="Enter Domain (e.g. example.com)"
//       required
//       onChange={handleChange}
//     />
//     <Button
//       type="button"
//       style={{ minWidth: '140px' }}
//       onClick={checkDomainAvailability}
//       disabled={checkingDomain}
//     >
//       {checkingDomain ? "Checking..." : "Check Domain"}
//     </Button>
//   {/* </div> */}

//   {domainStatus === "available" && <p style={{ color: "green" }}>✅ Domain is available</p>}
//   {domainStatus === "unavailable" && <p style={{ color: "red" }}>❌ Domain is not available</p>}
//   {domainStatus === "error" && <p style={{ color: "orangered" }}>⚠️ Error checking domain</p>}
//         </Grid>

//        {domainStatus==='available' && <Button type="submit" disabled={loading}>
//           {loading ? "Processing..." : "Complete Order"}
//         </Button>}

//         {error && <Error>{error}</Error>}
//       </FormContainer>
//     </PageWrapper>
//   );
// }



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

  @media (max-width: 428px) {
    padding: 1rem;
  }
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
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
  box-sizing: border-box;

  
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
//   margin-top: 2rem;
  cursor: pointer;

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


const DomainWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

const DomainInput = styled.input`
  flex: 2;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  box-sizing: border-box;
`;

const TldSelect = styled.select`
  flex: 1;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
    box-sizing: border-box;
`;



export default function HostingCheckoutPage() {

    const {pid} = useParams();
    const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    domain: "",
    tld: "", 
    domaintype: "",
    billingcycle: "",
    pid: pid,     //we they com o
  });

//   console.log(form);

   const fullDomain = form.domain.trim() + form.tld;

//    console.log(fullDomain)

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [domainStatus, setDomainStatus] = useState(null);
  const [checkingDomain, setCheckingDomain] = useState(false);

  const checkDomainAvailability = async () => {
    if (!form.domain) {
      Swal.fire({ icon: "warning", text: "Please enter a domain." });
      return;
    }
    if (!form.domaintype) {
      Swal.fire({ icon: "warning", text: "Please select a domain type." });
      return;
    }

       if (!form.tld) {
      Swal.fire({ icon: "warning", text: "Please select a TLD." });
      return;
    }

   

    setCheckingDomain(true);
    setDomainStatus(null);

    Swal.fire({
      title: "Checking domain...",
      text: "Please wait while we check availability.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch("https://www.elexdonhost.com.ng/api_elexdonhost/check_domain.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: fullDomain, type: form.domaintype }),
      });

      const data = await res.json();

      if (form.domaintype === "register") {
        if (data.available) {
          setDomainStatus("available");
          Swal.fire({
            icon: "success",
            title: "Domain Available",
            text: "Great! The domain is available for registration.",
          });
        } else {
          setDomainStatus("unavailable");
          Swal.fire({
            icon: "error",
            title: "Domain Unavailable",
            text: "Sorry, that domain is not available for registration.",
          });
        }
      } else if (form.domaintype === "transfer" || form.domaintype === "owndomain") {
        if (data.available) {
          // If domain is available, it means NOT registered, so can't transfer/use own domain
          setDomainStatus("unavailable");
          Swal.fire({
            icon: "error",
            title: "Domain Not Registered",
            text: "This domain is not registered and cannot be transferred or used as your own.",
          });
        } else {
          setDomainStatus("available");
          Swal.fire({
            icon: "success",
            title: "Domain Registered",
            text: "The domain is registered and can be transferred or used.",
          });
        }
      } else {
        setDomainStatus("error");
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Invalid domain type selected.",
        });
      }
    } catch (err) {
      console.error("Domain check error:", err);
      setDomainStatus("error");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error checking the domain. Please try again.",
      });
    } finally {
      setCheckingDomain(false);
    }
  };






  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "domain" || e.target.name === "domaintype" || e.target.name ==='tld') {
      // Reset domain status on change to force new check
      setDomainStatus(null);
      setError(null);
    }
  };












const handleSubmit = async (e) => {
  e.preventDefault();

  setError(null);

  // Show loading Swal
  Swal.fire({
    title: "Processing your order...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  const submitForm = { ...form, domain: fullDomain };
//   console.log(submitForm)

  try {
    const res = await fetch("https://www.elexdonhost.com.ng/api_elexdonhost/checkout.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitForm),
    });

    const data = await res.json();

    Swal.close(); // close loading

    if (data.success) {
        console.log(data);
      Swal.fire({
        icon: "success",
        title: "Order Successful",
        text: "Redirecting...",
        timer: 2000,
        showConfirmButton: false,
      });
      console.log(data)
      navigate(`/invoice/${data.invoiceId}`)
    //   setTimeout(() => {
    //     window.location.href = data.redirect_url;
    //   }, 2100);
    } else {
        console.log(data);
      setError(data.message || "Checkout failed.");
      Swal.fire({
        icon: "error",
        title: "Checkout Failed",
        text: data.details.message || "An error occurred during checkout.",
      });
    }
  } catch (err) {
    Swal.close();
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
        <Title>Complete Your Hosting Order</Title>
        <Grid>
          <Input
            name="firstname"
            placeholder="First Name"
            required
            onChange={handleChange}
          />
          <Input
            name="lastname"
            placeholder="Last Name"
            required
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />

          <Select name="billingcycle" onChange={handleChange} required>
            <option value="">-- Select billing cycle --</option>
            <option value="monthly">Monthly</option>
            <option value="annually">
              Annually
            </option>
          </Select>

          <Select name="domaintype" onChange={handleChange} required>
            <option value="">-- Select domain type --</option>
            <option value="register">Register New Domain</option>
            <option value="transfer">Transfer Existing Domain</option>
            <option value="owndomain">Use Own Domain</option>
          </Select>

       
          <Input
            name="domain"
            placeholder="Enter domain (without TLD)"
            required
            onChange={handleChange}
            value={form.domain}
          />
          <Select name="tld" value={form.tld} onChange={handleChange} required>
            <option >-- Select TLD --</option>
          <option value=".com">.com</option>
<option value=".net">.net</option>
<option value=".org">.org</option>
<option value=".co">.co</option>
<option value=".io">.io</option>
<option value=".info">.info</option>
<option value=".biz">.biz</option>
<option value=".us">.us</option>
<option value=".me">.me</option>
<option value=".online">.online</option>
<option value=".tech">.tech</option>
<option value=".site">.site</option>
<option value=".store">.store</option>
<option value=".app">.app</option>
<option value=".blog">.blog</option>
<option value=".dev">.dev</option>
<option value=".xyz">.xyz</option>
<option value=".club">.club</option>
<option value=".agency">.agency</option>
<option value=".design">.design</option>
<option value=".shop">.shop</option>
<option value=".cloud">.cloud</option>
<option value=".ca">.ca</option>
<option value=".uk">.uk</option>
<option value=".de">.de</option>
<option value=".fr">.fr</option>
<option value=".au">.au</option>
<option value=".nl">.nl</option>
<option value=".ru">.ru</option>
<option value=".jp">.jp</option>
<option value=".in">.in</option>

            {/* Add more TLDs here */}
          </Select>
      
          <Button
            type="button"
            // style={{ minWidth: "140px" }}
            onClick={checkDomainAvailability}
            disabled={checkingDomain}
          >
            {checkingDomain ? "Checking..." : "Check Domain"}
          </Button>

          {domainStatus === "available" && (
            <p style={{ color: "green" }}>
              {form.domaintype === "register"
                ? "✅ Domain is available for registration"
                : "✅ Domain is registered and ready"}
            </p>
          )}
          {domainStatus === "unavailable" && (
            <p style={{ color: "red" }}>
              {form.domaintype === "register"
                ? "❌ Domain is not available for registration"
                : "❌ Domain is not registered"}
            </p>
          )}
          {domainStatus === "error" && (
            <p style={{ color: "orangered" }}>⚠️ Error checking domain</p>
          )}
        </Grid>

        {domainStatus === "available" && (
          <Button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Proceed with Order"}
          </Button>
        )}

        {error && <Error>{error}</Error>}
      </FormContainer>
    </PageWrapper>
  );
}
