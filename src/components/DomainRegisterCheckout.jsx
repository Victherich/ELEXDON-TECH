


// import React, { useState } from "react";
// import styled from "styled-components";
// import bg from "../Images/herobg5.jpg";
// import logo from "../Images/logo4.jpeg";
// import Swal from "sweetalert2";
// import { useNavigate, useParams } from "react-router-dom";

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
//   color: #2b32b2;
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
//   box-sizing: border-box;

  
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
//   background: #2b32b2;
//   color: white;
//   padding: 1rem;
//   border: none;
//   border-radius: 12px;
//   font-size: 1rem;
//   font-weight: bold;
// //   margin-top: 2rem;
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


// const DomainWrapper = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   width: 100%;
// `;

// const DomainInput = styled.input`
//   flex: 2;
//   padding: 1rem;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   font-size: 1rem;
//   box-sizing: border-box;
// `;

// const TldSelect = styled.select`
//   flex: 1;
//   padding: 1rem;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   font-size: 1rem;
//     box-sizing: border-box;
// `;



// export default function HostingCheckoutPage() {

//     const {domainname} = useParams();
//     const navigate = useNavigate();
//     const [confirmEmail, setConfirmEmail] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('')

// const [form, setForm] = useState({
//   firstname: "",
//   lastname: "",
//   email: "",
//   password: "",
//   domain: domainname,
// //   tld: "",
//   domaintype: "register",
// //   billingcycle: "",
// //   pid: pid,
//   companyname: "",
//   address1: "",
//   address2: "",
//   city: "",
//   state: "",
//   postcode: "",
//   country: "NG", // default country code for Nigeria
//   phonenumber: ""
// });





// //    const fullDomain = form.domain.trim() + form.tld;

// //    console.log(fullDomain)

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [domainStatus, setDomainStatus] = useState(null);
//   const [checkingDomain, setCheckingDomain] = useState(false);
//   const [checkoutType, setCheckoutType]=useState(false);

// //   const checkDomainAvailability = async () => {
// //     if (!form.domain) {
// //       Swal.fire({ icon: "warning", text: "Please enter a domain." });
// //       return;
// //     }
// //     if (!form.domaintype) {
// //       Swal.fire({ icon: "warning", text: "Please select a domain type." });
// //       return;
// //     }

// //        if (!form.tld) {
// //       Swal.fire({ icon: "warning", text: "Please select a TLD." });
// //       return;
// //     }

   

// //     setCheckingDomain(true);
// //     setDomainStatus(null);

// //     Swal.fire({
// //       title: "Checking domain...",
// //       text: "Please wait while we check availability.",
// //       allowOutsideClick: false,
// //       didOpen: () => {
// //         Swal.showLoading();
// //       },
// //     });

// //     try {
// //       const res = await fetch("https://www.elexdonhost.com.ng/api_elexdonhost/check_domain.php", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ domain: fullDomain, type: form.domaintype }),
// //       });

// //       const data = await res.json();

// //       if (form.domaintype === "register") {
// //         if (data.available) {
// //           setDomainStatus("available");
// //           Swal.fire({
// //             icon: "success",
// //             title: "Domain Available",
// //             text: "Great! The domain is available for registration.",
// //           });
// //         } else {
// //           setDomainStatus("unavailable");
// //           Swal.fire({
// //             icon: "error",
// //             title: "Domain Unavailable",
// //             text: "Sorry, that domain is not available for registration.",
// //           });
// //         }
// //       } else if (form.domaintype === "transfer" || form.domaintype === "owndomain") {
// //         if (data.available) {
// //           // If domain is available, it means NOT registered, so can't transfer/use own domain
// //           setDomainStatus("unavailable");
// //           Swal.fire({
// //             icon: "error",
// //             title: "Domain Not Registered",
// //             text: "This domain is not registered and cannot be transferred or used as your own.",
// //           });
// //         } else {
// //           setDomainStatus("available");
// //           Swal.fire({
// //             icon: "success",
// //             title: "Domain Registered",
// //             text: "The domain is registered and can be transferred or used.",
// //           });
// //         }
// //       } else {
// //         setDomainStatus("error");
// //         Swal.fire({
// //           icon: "error",
// //           title: "Error",
// //           text: "Invalid domain type selected.",
// //         });
// //       }
// //     } catch (err) {
// //       console.error("Domain check error:", err);
// //       setDomainStatus("error");
// //       Swal.fire({
// //         icon: "error",
// //         title: "Error",
// //         text: "There was an error checking the domain. Please try again.",
// //       });
// //     } finally {
// //       setCheckingDomain(false);
// //     }
// //   };






//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     // if (e.target.name === "domain" || e.target.name === "domaintype" || e.target.name ==='tld') {
//     //   // Reset domain status on change to force new check
//     //   setDomainStatus(null);
//     //   setError(null);
//     // }
//   };









// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError(null);

//   if(form.email!==confirmEmail&&!checkoutType){
//     Swal.fire({text:"Emails do not match"});
//     return;
//   }

//    if(form.password!==confirmPassword&&!checkoutType){
//     Swal.fire({text:"Passwords do not match"});
//     return;
//   }

// // alert(checkoutType?'checkout2':'checkout')
// // return;


//   Swal.fire({
//     title: "Processing your order...",
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     },
//   });

//   // Build full domain
// //   const fullDomain = form.domain.trim() + form.tld;

//   // Determine endpoint and payload
//   const endpoint = checkoutType
//     ? "https://www.elexdonhost.com.ng/api_elexdonhost/checkout2.php" // Has account
//     : "https://www.elexdonhost.com.ng/api_elexdonhost/checkout.php"; // New user

//   // Construct payload
//   const payload = checkoutType
//     ? {
//         email: form.email,
//         password: form.password,
//         domain: form.domain,
//         domaintype: form.domaintype,
//         // billingcycle: form.billingcycle,
//         // pid: form.pid,
//       }
//     : {
//         form
       
//       };



//   try {
//     const res = await fetch(endpoint, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();
//     Swal.close();

//     if (data.success) {
//       Swal.fire({
//         icon: "success",
//         title: "Order Successful",
//         text: "Redirecting...",
//         timer: 2000,
//         showConfirmButton: false,
//       });
//       navigate(`/invoice/${data.invoiceId}`);
//     } else {
//       setError(data.message || "Checkout failed.");
//       Swal.fire({
//         icon: "error",
//         title: "Checkout Failed",
//         text: data.details?.message || "An error occurred during checkout.",
//       });
//     }
//   } catch (err) {
//     Swal.close();
//     console.error(err);
//     setError("Something went wrong.");
//     Swal.fire({
//       icon: "error",
//       title: "Error",
//       text: "Something went wrong. Please try again.",
//     });
//   } finally {
//     setLoading(false);
//   }
// };





//   return (
//     <PageWrapper>
//       <FormContainer onSubmit={handleSubmit}>
//         <Logo src={logo} alt="Elexdon Host Logo" />
//         <Title>Complete Your Hosting Order</Title>

//       <div style={{ marginBottom: "1rem" }}>
//   <label >
//     <p>Do you already have an account? Check the box below</p>
//     <input
//       type="checkbox"
//       checked={checkoutType}
//       onChange={(e) => setCheckoutType(e.target.checked)}
//       style={{ width: "20px", height: "20px" }}
//     />
//     I already have an account
//   </label>
// </div>


      


//         <Grid>
//   {/* Common fields for both checkout types */}
//   <Input
//     name="email"
//     type="email"
//     placeholder="Email Address"
//     required
//     onChange={handleChange}
//     value={form.email}
//   />
//    {!checkoutType && (
//           <Input
//     name="confirmEmail"
//     type="email"
//     placeholder="Confirm Email"
//     required
//     onChange={(e)=>setConfirmEmail(e.target.value)}
//     value={confirmEmail}
//   />
//    )}
  
//   <Input
//     name="password"
//     type="password"
//     placeholder="Password"
//     required
//     onChange={handleChange}
//     value={form.password}
//   />
//    {!checkoutType && (
//           <Input
//     name="confirmPassword"
//     type="password"
//     placeholder="Confirm Password"
//     required
//     onChange={(e)=>setConfirmPassword(e.target.value)}
//     value={confirmPassword}
//   />
//    )}

//   {/* Only show these fields if it's a new user */}
//   {!checkoutType && (
//     <>
//       <Input
//         name="firstname"
//         placeholder="First Name"
//         required
//         onChange={handleChange}
//         value={form.firstname}
//       />
//       <Input
//         name="lastname"
//         placeholder="Last Name"
//         required
//         onChange={handleChange}
//         value={form.lastname}
//       />
//       <Input
//   name="companyname"
//   placeholder="Company Name"
//   onChange={handleChange}
//   value={form.companyname}
// />

// <Input
//   name="address1"
//   placeholder="Address 1"
//   required
//   onChange={handleChange}
//   value={form.address1}
// />

// <Input
//   name="address2"
//   placeholder="Address 2"
//   onChange={handleChange}
//   value={form.address2}
// />

// <Input
//   name="city"
//   placeholder="City"
//   required
//   onChange={handleChange}
//   value={form.city}
// />

// <Input
//   name="state"
//   placeholder="State/Region"
//   required
//   onChange={handleChange}
//   value={form.state}
// />

// <Input
//   name="postcode"
//   placeholder="Postcode"
//   required
//   onChange={handleChange}
//   value={form.postcode}
// />

// <Select
//   name="country"
//   onChange={handleChange}
//   required
//   value={form.country}
// >
//   <option value="">-- Select Country --</option>
//   <option value="NG">Nigeria</option>
//   <option value="GH">Ghana</option>
//   <option value="US">United States</option>
//   <option value="GB">United Kingdom</option>
//   {/* Add more as needed */}
// </Select>

// <Input
//   name="phonenumber"
//   placeholder="Phone Number"
//   required
//   onChange={handleChange}
//   value={form.phonenumber}
// />

//     </>
//   )}

//   {/* <Select name="billingcycle" onChange={handleChange} required value={form.billingcycle}>
//     <option value="">-- Select billing cycle --</option>
//     <option value="monthly">Monthly</option>
//     <option value="annually">Annually</option>
//   </Select>

//   <Select name="domaintype" onChange={handleChange} required value={form.domaintype}>
//     <option value="">-- Select domain type --</option>
//     <option value="register">Register New Domain</option>
//     <option value="transfer">Transfer Existing Domain</option>
//     <option value="owndomain">Use Own Domain</option>
//   </Select> */}

//   {/* <Input
//     name="domain"
//     placeholder="Enter domain (without TLD)"
//     required
//     onChange={handleChange}
//     value={form.domain}
//   /> */}

//   {/* <Select name="tld" value={form.tld} onChange={handleChange} required>
//     <option>-- Select TLD --</option>
//     <option value=".com">.com</option>
//     <option value=".net">.net</option>
//     <option value=".org">.org</option>

//     <option value=".info">.info</option>
//     <option value=".biz">.biz</option>
//       <option value=".com.ng">.com.ng</option>
//     <option value=".us">.us</option>
//       <option value=".ng">.ng</option>
//         <option value=".edu.ng">.edu.ng</option>
//     <option value=".eu">.eu</option>
//     <option value=".sch.ng">.sch.ng</option>
// <option value=".uk">.uk</option>
//     <option value=".club">.club</option>

//   </Select> */}

//   {/* <Button
//     type="button"
//     onClick={checkDomainAvailability}
//     disabled={checkingDomain}
//   >
//     {checkingDomain ? "Checking..." : "Check Domain"}
//   </Button> */}

//   {/* {domainStatus === "available" && (
//     <p style={{ color: "green" }}>
//       {form.domaintype === "register"
//         ? "✅ Domain is available for registration"
//         : "✅ Domain is registered and ready"}
//     </p>
//   )}
//   {domainStatus === "unavailable" && (
//     <p style={{ color: "red" }}>
//       {form.domaintype === "register"
//         ? "❌ Domain is not available for registration"
//         : "❌ Domain is not registered"}
//     </p>
//   )}
//   {domainStatus === "error" && (
//     <p style={{ color: "orangered" }}>⚠️ Error checking domain</p>
//   )} */}
// </Grid>


//           <Button type="submit" disabled={loading} style={{marginTop:"20px"}}>
//             {loading ? "Processing..." : "Proceed with Order"}
//           </Button>
      

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

export default function HostingCheckoutPage() {
  const { domainname } = useParams();
  const navigate = useNavigate();

  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkoutType, setCheckoutType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    domain: domainname,
    domaintype: "register",
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
      ? "https://www.elexdonhost.com.ng/api_elexdonhost/domain_checkout2.php"
      : "https://www.elexdonhost.com.ng/api_elexdonhost/domain_checkout.php";

    const payload = checkoutType
      ? {
          email: form.email,
          password: form.password,
          domain: form.domain,
          domaintype: form.domaintype
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
        <Title>Complete Your Hosting Order</Title>

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
