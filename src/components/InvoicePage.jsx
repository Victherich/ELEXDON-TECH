// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   max-width: 900px;
//   margin: 20px auto;
//   padding: 25px;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   color: #333;
// `;

// const Header = styled.header`
//   border-bottom: 2px solid #0070f3;
//   padding-bottom: 10px;
//   margin-bottom: 20px;

//   h1 {
//     margin: 0;
//     color: #0070f3;
//   }
// `;

// const BillingInfo = styled.section`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   margin-bottom: 25px;

//   > div {
//     flex: 1 1 45%;
//     min-width: 250px;
//   }

//   h2 {
//     margin-top: 0;
//     color: #0070f3;
//   }

//   @media (max-width: 600px) {
//     flex-direction: column;

//     > div {
//       flex: 1 1 100%;
//       margin-bottom: 15px;
//     }
//   }
// `;

// const InvoiceTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin-bottom: 25px;

//   th,
//   td {
//     border: 1px solid #ddd;
//     padding: 10px 15px;
//     text-align: left;
//   }

//   th {
//     background-color: #f0f8ff;
//     color: #0070f3;
//   }
// `;

// const Summary = styled.section`
//   text-align: right;
//   font-size: 1.1rem;
//   margin-bottom: 25px;

//   @media (max-width: 600px) {
//     font-size: 1rem;
//   }
// `;

// const PaymentSection = styled.section`
//   text-align: center;
// `;

// const PayButton = styled.a`
//   background-color: #0070f3;
//   color: white;
//   padding: 12px 30px;
//   font-size: 1.2rem;
//   border: none;
//   border-radius: 6px;
//   text-decoration: none;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   display: inline-block;

//   &:hover {
//     background-color: #005bb5;
//   }

//   @media (max-width: 600px) {
//     width: 100%;
//   }
// `;

// const ErrorMessage = styled.div`
//   color: red;
//   text-align: center;
//   font-weight: bold;
//   padding: 20px;
// `;

// const LoadingMessage = styled.div`
//   text-align: center;
//   padding: 20px;
// `;

// const InvoicePage = ({ invoiceId }) => {
//   const [invoice, setInvoice] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://yourdomain.com/api/invoice.php?id=${invoiceId}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setInvoice(data.invoice);
//           setError(null);
//         } else {
//           setError(data.message);
//           setInvoice(null);
//         }
//       })
//       .catch(() => {
//         setError("Failed to fetch invoice.");
//         setInvoice(null);
//       })
//       .finally(() => setLoading(false));
//   }, [invoiceId]);

//   if (loading) {
//     return (
//       <Container>
//         <LoadingMessage>Loading invoice...</LoadingMessage>
//       </Container>
//     );
//   }



//   const formatCurrency = (amount) =>
//     new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: invoice?.currency || "USD",
//     }).format(amount);

//   return (
//     <Container>
//       <Header>
//         <h1>Invoice #{invoice?.id}</h1>
//         <p>
//           Status: <strong>{invoice?.status}</strong>
//         </p>
//         <p>Due Date: {invoice?.duedate}</p>
//       </Header>

//       <BillingInfo>
//         <div>
//           <h2>Bill To:</h2>
//           <p>
//             {invoice?.firstname} {invoice?.lastname}
//           </p>
//           <p>{invoice?.address1}</p>
//           <p>
//             {invoice?.city}, {invoice?.state} {invoice?.postcode}
//           </p>
//           <p>{invoice?.country}</p>
//           <p>Email: {invoice?.email}</p>
//         </div>

//         <div>
//           <h2>Invoice Info</h2>
//           <p>Invoice Date: {invoice?.date}</p>
//           <p>
//             Invoice Total: <strong>{formatCurrency(invoice?.total)}</strong>
//           </p>
//           <p>
//             Balance Due: <strong>{formatCurrency(invoice?.balance)}</strong>
//           </p>
//         </div>
//       </BillingInfo>

//       <InvoiceTable>
//         <thead>
//           <tr>
//             <th>Description</th>
//             <th>Qty</th>
//             <th>Unit Price</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {invoice?.items?.map((item, idx) => (
//             <tr key={idx}>
//               <td>{item.description}</td>
//               <td>{item.qty}</td>
//               <td>{formatCurrency(item.amount / item.qty)}</td>
//               <td>{formatCurrency(item.amount)}</td>
//             </tr>
//           ))}
//         </tbody>
//       </InvoiceTable>

//       <Summary>
//         <p>Subtotal: {formatCurrency(invoice?.subtotal)}</p>
//         <p>Tax: {formatCurrency(invoice?.tax)}</p>
//         <p>Discount: {formatCurrency(invoice?.discount)}</p>
//         <p>
//           <strong>Total: {formatCurrency(invoice?.total)}</strong>
//         </p>
//         <p>
//           <strong>Balance Due: {formatCurrency(invoice?.balance)}</strong>
//         </p>
//       </Summary>

//       {invoice?.balance > 0 && (
//         <PaymentSection>
//           <PayButton
//             href={`https://portal.elexdonhost.com.ng/viewinvoice.php?id=${invoice?.id}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Pay Now
//           </PayButton>
//         </PaymentSection>
//       )}
//     </Container>
//   );
// };

// export default InvoicePage;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "../Images/herobg5.jpg";
import logo from "../Images/logo4.jpeg";
import { useParams } from "react-router-dom";

const PageWrapper = styled.div`
  background: url(${bg}) no-repeat center center/cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
padding-top:100px;
  position: relative;

  &::before {
    content: "";
    background: rgba(255, 255, 255, 0.85);
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Logo = styled.img`
  max-width: 160px;
  display: block;
  margin: 0 auto 1.5rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    color: #2b32b2;
    margin: 0;
  }

  p {
    margin: 5px 0;
  }
`;

const BillingInfo = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;

  > div {
    flex: 1;
    min-width: 260px;
  }

  h2 {
    color: #2b32b2;
    margin-bottom: 0.5rem;
  }
`;

const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;

  th,
  td {
    padding: 10px 15px;
    border: 1px solid #ccc;
  }

  th {
    background: #eaf0ff;
    color: #2b32b2;
  }
`;

const Summary = styled.div`
  text-align: right;
  font-weight: 500;
  margin-bottom: 2rem;

  p {
    margin: 0.3rem 0;
  }

  strong {
    font-weight: bold;
  }
`;

const PaymentSection = styled.div`
  text-align: center;
`;

const PayButton = styled.a`
  background: #2b32b2;
  color: white;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  border-radius: 12px;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s;

  &:hover {
    background: #1e2a91;
  }
`;

const Message = styled.p`
  text-align: center;
  font-weight: bold;
  padding: 1rem;
  color: ${({ error }) => (error ? "red" : "#333")};
`;

const InvoicePage = () => {
    const {invoiceId}=useParams();
  const [invoice, setInvoice] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.elexdonhost.com.ng/api_elexdonhost/get_invoice_by_id.php?id=${invoiceId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setInvoice(data.invoice);
          console.log(data)
        } else {
          setError(data.message);
        }
      })
      .catch(() => setError("Failed to fetch invoice."))
      .finally(() => setLoading(false));
  }, [invoiceId]);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: invoice?.currency || "NGN",
    }).format(amount);

  return (
  <PageWrapper>
  <Container>
    <Logo src={logo} alt="Logo" />
    {loading ? (
      <Message>Loading invoice...</Message>
    ) : error ? (
      <Message error>{error}</Message>
    ) : (
      <>
        <Header>
          <h1>Invoice #{invoice?.invoiceid}</h1>
          <p>Status: <strong>{invoice?.status}</strong></p>
          <p>Due Date: {invoice?.duedate}</p>
        </Header>

        <BillingInfo>
          <div>
            <h2>Bill To</h2>
            {/* These fields depend on your invoice being extended with client info — otherwise remove */}
            <p>{invoice?.clientname || 'Client Name'}</p>
            <p>{invoice?.address1}</p>
            <p>{invoice?.city}, {invoice?.state} {invoice?.postcode}</p>
            <p>{invoice?.country}</p>
            <p>Email: {invoice?.email}</p>
          </div>

          <div>
            <h2>Invoice Info</h2>
            <p>Invoice Date: {invoice?.date}</p>
            <p>Invoice Total: <strong>{formatCurrency(invoice?.total)}</strong></p>
            <p>Balance Due: <strong>{formatCurrency(invoice?.balance)}</strong></p>
          </div>
        </BillingInfo>

        <InvoiceTable>
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {(invoice?.items?.item || []).map((item, idx) => {
              const qty = item.qty || 1;
              const amount = parseFloat(item.amount);
              return (
                <tr key={idx}>
                  <td>{item.description}</td>
                  <td>{qty}</td>
                  <td>{formatCurrency(amount / qty)}</td>
                  <td>{formatCurrency(amount)}</td>
                </tr>
              );
            })}
          </tbody>
        </InvoiceTable>

        <Summary>
          <p>Subtotal: {formatCurrency(invoice?.subtotal)}</p>
          <p>Tax: {formatCurrency(invoice?.tax)}</p>
          <p><strong>Total: {formatCurrency(invoice?.total)}</strong></p>
          <p><strong>Balance Due: {formatCurrency(invoice?.balance)}</strong></p>
        </Summary>

        {parseFloat(invoice?.balance) > 0 && (
          <PaymentSection>
            <PayButton href={`https://portal.elexdonhost.com.ng/viewinvoice.php?id=${invoice?.invoiceid}`}>
              Pay Now
            </PayButton>
          </PaymentSection>
        )}
      </>
    )}
  </Container>
</PageWrapper>

  );
};

export default InvoicePage;

