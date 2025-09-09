



// import React, { useState } from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import heroBg from '../Images/contact4.jpg'; // Assuming this is the main background image
// import support1 from '../Images/contact1.jpg'; // Image for Fast Response card
// import support2 from '../Images/contact2.jpg'; // Image for Expert Team card
// import support3 from '../Images/contact3.jpg'; // Image for Knowledge Base card
// import support4 from '../Images/contact4.jpg'; // Image for Live Chat card (or another suitable image)

// import useAnimateOnScroll from './useAnimateOnScroll'; // Ensure this hook is correctly implemented
// import 'animate.css'; // Ensure animate.css is imported in your main App.js or index.js

// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCommentDots, FaQuestionCircle, FaPlus, FaMinus, FaCheckCircle, FaExclamationCircle, FaLocationArrow, FaLaptopCode, FaTools, FaChartLine } from 'react-icons/fa';


// // --- Keyframe Animations (Re-using from previous "beautiful" contact page) ---
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const scaleUp = keyframes`
//   from { transform: scale(0.9); opacity: 0; }
//   to { transform: scale(1); opacity: 1; }
// `;

// const slideDown = keyframes`
//   from { opacity: 0; transform: translateY(-10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;


// // --- Global Page Container (Similar to PageContainer from previous template) ---
// const MainContainer = styled.div`
//   box-sizing: border-box;
//   width: 100%;
//   min-height: 100vh;
//   margin: 0 auto;
//   font-family: 'Poppins', sans-serif;
//   color: #333; /* Default text color for elements not in cards */
//   overflow-x: hidden; /* Prevent horizontal scroll due to animations */
// `;

// // --- Hero Section (Adapted from your provided code) ---
// const Hero = styled.section`
//   background-image: url(${props => props.$heroBg});
//   background-size: cover;
//   background-position: center;
//   color: white;
//   position: relative;
//   padding: 150px 20px;
//   text-align: center;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0; left: 0; right: 0; bottom: 0;
//     background: rgba(0, 0, 0, 0.6);
//     z-index: 1;
//   }

//   div {
//     position: relative;
//     z-index: 2;
//     max-width: 900px;
//     margin: auto;
//   }

//   h1 {
//     font-size: clamp(2.5rem, 6vw, 4.5rem);
//     margin-bottom: 20px;
//     font-weight: 800;
//     text-shadow: 2px 2px 8px rgba(0,0,0,0.9);
//   }

//   p {
//     font-size: clamp(1rem, 2vw, 1.3rem);
//     line-height: 1.7;
//     text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
//   }
// `;

// // --- General Section Styling (Adapted from your provided code) ---
// const Section = styled.section`
//   padding: 80px 20px;
//   text-align: center;
//   background: white; /* Default background for sections below hero */

//   h2 {
//     color: #2B32B2; /* Elexdon's blue */
//     font-size: clamp(1.8rem, 4vw, 3rem);
//     margin-bottom: 40px;
//     font-weight: 700;
//     position: relative;

//     &::after {
//       content: '';
//       display: block;
//       width: 80px;
//       height: 4px;
//       background-color: #007AFF; /* A brighter blue for the underline */
//       margin: 15px auto 0;
//       border-radius: 2px;
//     }
//   }
// `;

// // --- Cards Container (From your provided code) ---
// const CardsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 30px;
//   margin-top: 40px;
//   max-width: 1200px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// // --- Card Styling (From your provided code) ---
// const Card = styled.div`
//   background: white;
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Slightly lighter shadow */
//   text-align: left;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   animation: ${scaleUp} 0.8s ease-out forwards;
//   animation-delay: ${props => props.$delay || '0s'};

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
//   }

//   img {
//     width: 100%;
//     height: 180px;
//     object-fit: cover;
//   }

//   div {
//     padding: 20px;

//     h3 {
//       margin-bottom: 10px;
//       font-size: 1.2rem;
//       color: #2B32B2;
//     }

//     p {
//       font-size: 0.95rem;
//       color: #555;
//     }
//   }
// `;

// // --- Contact Form Specific Styles (Adapted from previous "beautiful" contact page) ---
// const ContactFormSection = styled(Section)`
//     background: url(${heroBg}) no-repeat center center/cover; /* Use hero bg for form section background */
//     position: relative;
//     &::before {
//         content: '';
//         position: absolute;
//         top: 0; left: 0; right: 0; bottom: 0;
//         background: rgba(0, 0, 0, 0.4); /* Darker overlay for contrast */
//         z-index: 1;
//     }

//     h2 {
//         color: white; /* Title is white on dark background */
//         position: relative;
//         z-index: 2;
//         text-shadow: 2px 2px 8px rgba(0,0,0,0.9);
//         &::after {
//             background-color: #00D1FF; /* Lighter blue underline */
//         }
//     }
// `;

// const ContactGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr; /* Single column by default */
//   gap: 40px;
//   max-width: 1000px;
//   margin: 0 auto;
//   position: relative; /* For z-index */
//   z-index: 2; /* To appear above the overlay */

//   @media (min-width: 768px) {
//     grid-template-columns: 2fr 1fr; /* Form takes 2/3, info takes 1/3 */
//   }

//   @media (min-width: 1024px) {
//     grid-template-columns: 3fr 1.5fr; /* Adjust ratio for larger screens */
//   }
// `;

// const FormWrapper = styled.div`
//   background: rgba(255,255,255,0.85); /* Semi-transparent white background */
//   border-radius: 15px;
//   padding: 40px;
//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
//   animation: ${scaleUp} 0.8s ease-out forwards;
//   animation-delay: 0.6s;
  
//   @media (max-width: 768px) {
//     padding: 30px;
//   }
// `;

// const FormTitle = styled.h3`
//   font-size: clamp(1.8rem, 3vw, 2.2rem);
//   color: #2B32B2; /* Elexdon's blue */
//   margin-bottom: 30px;
//   font-weight: 700;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
//   label {
//     display: block;
//     margin-bottom: 8px;
//     font-size: 0.95rem;
//     font-weight: 600;
//     color: #444;
//     display: flex;
//     align-items: center;
//     gap: 8px;
//   }

//   input[type="text"],
//   input[type="email"],
//   input[type="tel"],
//   textarea {
//     width: 100%;
//     padding: 12px 15px;
//     border: 1px solid #ddd;
//     border-radius: 8px;
//     font-size: 1rem;
//     color: #333;
//     transition: all 0.3s ease;
//     background-color: #fcfcfc;
//     box-sizing: border-box;

//     &:focus {
//       border-color: #007AFF;
//       box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
//       outline: none;
//       background-color: #fff;
//     }
//   }

//   textarea {
//     min-height: 120px;
//     resize: vertical;
//   }
// `;

// const SubmitButton = styled.button`
//   display: block;
//   width: 100%;
//   padding: 15px 20px;
//   font-size: 1.2rem;
//   font-weight: 700;
//   color: white;
//   background: linear-gradient(45deg, #2B32B2, #1488CC); /* Elexdon's gradient */
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   box-shadow: 0 8px 25px rgba(43, 50, 178, 0.3);
//   transition: all 0.3s ease-in-out;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   margin-top: 30px;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 12px 35px rgba(43, 50, 178, 0.5);
//     background: linear-gradient(45deg, #1488CC, #2B32B2);
//   }

//   &:active {
//     transform: translateY(0);
//     box-shadow: 0 5px 20px rgba(43, 50, 178, 0.3);
//   }

//   &:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//     background: #ccc;
//     box-shadow: none;
//   }
// `;

// const Message = styled.div`
//   margin-top: 20px;
//   padding: 15px;
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   font-size: 1rem;
//   font-weight: 600;
//   animation: ${fadeIn} 0.5s ease-out forwards;

//   ${props => props.$type === 'success' && css`
//     background-color: #d4edda;
//     color: #155724;
//     border: 1px solid #28a745;
//   `}

//   ${props => props.$type === 'error' && css`
//     background-color: #f8d7da;
//     color: #721c24;
//     border: 1px solid #dc3545;
//   `}
// `;

// const ContactInfoCard = styled.div`
//   background: rgba(255,255,255,0.85);
//   border-radius: 15px;
//   padding: 40px;
//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
//   animation: ${scaleUp} 0.8s ease-out forwards;
//   animation-delay: 0.8s;
//   display: flex;
//   flex-direction: column;
//   gap: 25px;
//   text-align: center;
//   position: relative; /* For z-index */
//   z-index: 2; /* To appear above the overlay */
  
//   @media (max-width: 768px) {
//     padding: 30px;
//   }

//   h3 {
//     font-size: clamp(1.6rem, 2.5vw, 2rem);
//     color: #2B32B2; /* Elexdon's blue */
//     margin-bottom: 10px;
//     font-weight: 700;
//   }

//   p {
//     font-size: 1rem;
//     color: #222;
//     line-height: 1.6;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;
//     margin: 0; /* Remove default paragraph margin */
//   }

//   a {
//       color: #2B32B2; /* Link color */
//       text-decoration: none;
//       &:hover {
//           text-decoration: underline;
//       }
//   }

//   .icon {
//     color: #1488CC; /* Lighter blue icon */
//     font-size: 1.5rem;
//   }
// `;

// // --- FAQ Section Styles (Adapted from previous "beautiful" contact page) ---
// const FAQSection = styled(Section)`
//   background-color: #f8f8f8; /* A light background for FAQ section */
//   max-width: 1200px;
//   margin: 0 auto; /* Center the section */

//   h2 {
//     color: #2B32B2;
//   }
// `;

// const FAQContentWrapper = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   animation: ${fadeIn} 1s ease-out forwards;
//   animation-delay: 0.8s;
// `;

// const FAQItem = styled.div`
//   background: rgba(255,255,255,0.9);
//   border-radius: 10px;
//   margin-bottom: 15px;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
//   overflow: hidden; /* Hide overflowing content during collapse */
//   transition: all 0.3s ease;
// `;

// const FAQQuestion = styled.div`
//   padding: 20px 25px;
//   font-size: 1.15rem;
//   font-weight: 600;
//   color: #2C3E50;
//   cursor: pointer;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: rgba(43, 50, 178, 0.05); /* Light Elexdon blue tint */
//   border-bottom: 1px solid rgba(43, 50, 178, 0.1);
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: rgba(43, 50, 178, 0.1);
//   }

//   .toggle-icon {
//     font-size: 1.2rem;
//     color: #2B32B2;
//     transform: rotate(${props => props.$isOpen ? '45deg' : '0deg'});
//     transition: transform 0.3s ease;
//   }
// `;

// const FAQAnswer = styled.div`
//   padding: 0 25px;
//   font-size: 1rem;
//   color: #555;
//   line-height: 1.7;
//   max-height: ${props => props.$isOpen ? '500px' : '0'}; /* Arbitrary max-height for smooth transition */
//   overflow: hidden;
//   transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
//   padding-top: ${props => props.$isOpen ? '15px' : '0'};
//   padding-bottom: ${props => props.$isOpen ? '20px' : '0'};
//   background-color: rgba(255,255,255,0.95);
// `;

// const FinalContactInfo = styled.div`
//     background: linear-gradient(to right, #2B32B2, #1488CC); /* Elexdon's gradient */
//     color: white;
//     padding: 40px 20px;
//     text-align: center;
//     margin-top: 60px; /* Separates from FAQ section */

//     h4 {
//         margin-bottom: 10px;
//         font-size: 1.3rem;
//         font-weight: 600;
//     }

//     p {
//         font-size: 1rem;
//         margin-bottom: 5px;
//     }

//     a {
//         color: white;
//         text-decoration: none;
//         &:hover {
//             text-decoration: underline;
//         }
//     }
// `;


// // --- FAQ Data (Tailored for Elexdon Tech Services) ---
// const faqData = [
//   {
//     question: "What types of websites does Elexdon Tech develop?",
//     answer: "Elexdon Tech develops a wide range of websites, including e-commerce platforms, corporate sites, portfolio websites, blogs, custom web applications, and more, tailored to your specific business needs."
//   },
//   {
//     question: "Can Elexdon Tech help with my digital marketing strategy?",
//     answer: "Absolutely! We offer comprehensive digital marketing services including SEO (Search Engine Optimization), SEM (Search Engine Marketing), social media marketing, content marketing, email marketing, and analytics to boost your online presence and reach."
//   },
//   {
//     question: "What kind of applications does Elexdon Tech build?",
//     answer: "We specialize in developing custom applications, including mobile apps (iOS and Android), web applications, and desktop software solutions, designed to streamline your operations and enhance user experience."
//   },
//   {
//     question: "Do you provide IT support and general tech services?",
//     answer: "Yes, Elexdon Tech offers various tech services beyond development, including IT consulting, system maintenance, cybersecurity solutions, data management, and technical support for businesses and individuals."
//   },
//   {
//     question: "What courses are available at Elexdon Tech, and what are the prerequisites?",
//     answer: "We offer professional training in Web Design & Development, Digital Marketing, Software Development (PHP, Python, JavaScript), Mobile App Development, Computer Networking, Accounting Software, Graphics Design, and more. Most introductory courses require only basic computer literacy, while advanced courses may have specific prerequisites outlined on their respective course pages."
//   },
//   {
//     question: "How can I get a quote for a website or application project?",
//     answer: "You can request a quote by filling out the contact form on this page with details about your project, or by calling us directly. We'll get back to you promptly to discuss your requirements and provide a tailored solution."
//   }
// ];


// const ContactUs = () => {
//   // Animation hooks for elements
//   const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const chooseUsTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const contactFormTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const faqSectionTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');


//   // Form state management
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     message: ''
//   });
//   const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: '...' }

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessage(null); // Clear previous messages

//     // Basic validation
//     if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.message) {
//       setMessage({ type: 'error', text: 'Please fill in all required fields (Name, Email, Phone, Message).' });
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setMessage({ type: 'error', text: 'Please enter a valid email address.' });
//       return;
//     }

//     const phoneRegex = /^\d+$/; // Simple digits only check
//     if (!phoneRegex.test(formData.phoneNumber)) {
//       setMessage({ type: 'error', text: 'Please enter a valid phone number (digits only).' });
//       return;
//     }

//     // If all validations pass
//     console.log('Contact Form Submitted:', formData);
//     setMessage({ type: 'success', text: 'Your message has been sent successfully! We will get back to you soon.' });

//     // --- Backend Integration Placeholder ---
//     // Here you would typically send formData to your backend API
//     // Example using fetch:
//     // fetch('/api/contact', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(formData)
//     // })
//     // .then(response => response.json())
//     // .then(data => {
//     //   if (data.success) {
//     //     setMessage({ type: 'success', text: 'Your message has been sent successfully! We will get back to you soon.' });
//     //     setFormData({ // Clear form after successful submission
//     //       fullName: '', email: '', phoneNumber: '', message: ''
//     //     });
//     //   } else {
//     //     setMessage({ type: 'error', text: data.message || 'Failed to send message. Please try again.' });
//     //   }
//     // })
//     // .catch(error => {
//     //   console.error('Submission error:', error);
//     //   setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
//     // });
//   };

//   // FAQ state management
//   const [openFAQ, setOpenFAQ] = useState(null); // State to manage open FAQ item

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };


//   return (
//     <MainContainer>
//       <Hero $heroBg={heroBg}>
//         <div>
//           <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Connect With Elexdon Tech</h1>
//           <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
//             Whether you're looking for professional tech courses, bespoke websites, powerful digital marketing, innovative applications, or general tech services, our team is here to assist you.
//           </p>
//         </div>
//       </Hero>

//       <Section>
//         <h2 ref={chooseUsTitleAnim.ref} className={chooseUsTitleAnim.className}>Why Choose Elexdon Tech?</h2>
//         <CardsContainer>
//           <Card $delay="0.2s">
//             <img src={support1} alt="Expert Consulting" />
//             <div>
//               <h3>Expert Consultation</h3>
//               <p>Benefit from our experienced team's insights to find the best tech solutions for your needs.</p>
//             </div>
//           </Card>
//           <Card $delay="0.4s">
//             <img src={support2} alt="Tailored Solutions" />
//             <div>
//               <h3>Tailored Solutions</h3>
//               <p>We craft customized websites, applications, and strategies to fit your unique business objectives.</p>
//             </div>
//           </Card>
//           <Card $delay="0.6s">
//             <img src={support3} alt="Comprehensive Training" />
//             <div>
//               <h3>Comprehensive Training</h3>
//               <p>Access up-to-date courses with hands-on learning in various in-demand tech fields.</p>
//             </div>
//           </Card>
//           <Card $delay="0.8s">
//             <img src={support4} alt="Dedicated Support" />
//             <div>
//               <h3>Dedicated Support</h3>
//               <p>Our team provides continuous support, ensuring your systems and projects run smoothly.</p>
//             </div>
//           </Card>
//         </CardsContainer>
//       </Section>

//       <ContactFormSection>
//         <h2 ref={contactFormTitleAnim.ref} className={contactFormTitleAnim.className}>Get in Touch with Elexdon Tech</h2>
//         <ContactGrid>
//           <FormWrapper>
//             <FormTitle><FaCommentDots /> Send Us a Message</FormTitle>
//             <form onSubmit={handleSubmit}>
//               <FormGroup>
//                 <label htmlFor="fullName"><FaUser /> Full Name</label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   placeholder="Your full name"
//                   required
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <label htmlFor="email"><FaEnvelope /> Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="your@example.com"
//                   required
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <label htmlFor="phoneNumber"><FaPhone /> Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="+234 80XXXXXXXX"
//                   required
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <label htmlFor="message"><FaCommentDots /> Your Inquiry / Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell us about your project, course interest, or query..."
//                   required
//                 ></textarea>
//               </FormGroup>

//               {message && (
//                 <Message $type={message.type}>
//                   {message.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
//                   {message.text}
//                 </Message>
//               )}

//               <SubmitButton type="submit">Send Message</SubmitButton>
//             </form>
//           </FormWrapper>

//           <ContactInfoCard>
//             <h3><FaLocationArrow /> Our Contact Info</h3>
//             <p><FaMapMarkerAlt className="icon" /> Elexdon Digital Technologies Limited. Plot SP 795 First-Gate Mechanic Estate, Apo Fct-Abuja.</p>
//             <p><FaMapMarkerAlt className="icon" /> The Old Vicarage building, Trinity Road Old Market Avon, Bristol – United Kingdom.</p>
            
//             <p><FaPhone className="icon" /> +2349055320154, +2348185609702 (WhatsApp Only)</p>
//             <p><FaPhone className="icon" /> +44(0)7479305003</p>
//             <p><FaEnvelope className="icon" /> <a href="mailto:info@elexdontech.com">info@elexdontech.com</a></p>
//           </ContactInfoCard>
//         </ContactGrid>
//       </ContactFormSection>

//       <FAQSection>
//         <h2 ref={faqSectionTitleAnim.ref} className={faqSectionTitleAnim.className}>Frequently Asked Questions</h2>
//         <FAQContentWrapper>
//           {faqData.map((faq, index) => (
//             <FAQItem key={index}>
//               <FAQQuestion $isOpen={openFAQ === index} onClick={() => toggleFAQ(index)}>
//                 <FaQuestionCircle style={{ marginRight: '10px', color: '#2B32B2' }} />
//                 {faq.question}
//                 <span className="toggle-icon">
//                   {openFAQ === index ? <FaMinus /> : <FaPlus />}
//                 </span>
//               </FAQQuestion>
//               <FAQAnswer $isOpen={openFAQ === index}>
//                 {faq.answer}
//               </FAQAnswer>
//             </FAQItem>
//           ))}
//         </FAQContentWrapper>
//       </FAQSection>


//     </MainContainer>
//   );
// };

// export default ContactUs;



import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Swal from 'sweetalert2'; // Only importing the core library

import heroBg from '../Images/contact4.jpg';
import support1 from '../Images/contact1.jpg';
import support2 from '../Images/contact2.jpg';
import support3 from '../Images/contact3.jpg';
import support4 from '../Images/contact4.jpg';

import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css';

import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCommentDots, FaQuestionCircle, FaPlus, FaMinus, FaLocationArrow } from 'react-icons/fa';

// --- Keyframe Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

// --- Global Page Container ---
const MainContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  color: #333;
  overflow-x: hidden;
`;

// --- Hero Section ---
const Hero = styled.section`
  background-image: url(${props => props.$heroBg});
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
  padding: 150px 20px;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  div {
    position: relative;
    z-index: 2;
    max-width: 900px;
    margin: auto;
  }

  h1 {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: 20px;
    font-weight: 800;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.9);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.3rem);
    line-height: 1.7;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
  }
`;

// --- General Section Styling ---
const Section = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: white;

  h2 {
    color: #2B32B2;
    font-size: clamp(1.8rem, 4vw, 3rem);
    margin-bottom: 40px;
    font-weight: 700;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background-color: #007AFF;
      margin: 15px auto 0;
      border-radius: 2px;
    }
  }
`;

// --- Cards Container ---
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

// --- Card Styling ---
const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${scaleUp} 0.8s ease-out forwards;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  div {
    padding: 20px;
    h3 {
      margin-bottom: 10px;
      font-size: 1.2rem;
      color: #2B32B2;
    }
    p {
      font-size: 0.95rem;
      color: #555;
    }
  }
`;

// --- Contact Form Specific Styles ---
const ContactFormSection = styled(Section)`
    background: url(${heroBg}) no-repeat center center/cover;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }
    h2 {
        color: white;
        position: relative;
        z-index: 2;
        text-shadow: 2px 2px 8px rgba(0,0,0,0.9);
        &::after {
            background-color: #00D1FF;
        }
    }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 3fr 1.5fr;
  }
`;

const FormWrapper = styled.div`
  background: rgba(255,255,255,0.85);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  animation: ${scaleUp} 0.8s ease-out forwards;
  animation-delay: 0.6s;
  
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const FormTitle = styled.h3`
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  color: #2B32B2;
  margin-bottom: 30px;
  font-weight: 700;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    color: #444;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    color: #333;
    transition: all 0.3s ease;
    background-color: #fcfcfc;
    box-sizing: border-box;

    &:focus {
      border-color: #007AFF;
      box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
      outline: none;
      background-color: #fff;
    }
  }
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px 20px;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(45deg, #2B32B2, #1488CC);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(43, 50, 178, 0.3);
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 30px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(43, 50, 178, 0.5);
    background: linear-gradient(45deg, #1488CC, #2B32B2);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 20px rgba(43, 50, 178, 0.3);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: #ccc;
    box-shadow: none;
  }
`;

const ContactInfoCard = styled.div`
  background: rgba(255,255,255,0.85);
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  animation: ${scaleUp} 0.8s ease-out forwards;
  animation-delay: 0.8s;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 30px;
  }

  h3 {
    font-size: clamp(1.6rem, 2.5vw, 2rem);
    color: #2B32B2;
    margin-bottom: 10px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #222;
    line-height: 1.6;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0;
  }

  a {
      color: #2B32B2;
      text-decoration: none;
      &:hover {
          text-decoration: underline;
      }
  }

  .icon {
    color: #1488CC;
    font-size: 1.5rem;
  }
`;

// --- FAQ Section Styles ---
const FAQSection = styled(Section)`
  background-color: #f8f8f8;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    color: #2B32B2;
  }
`;

const FAQContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.8s;
`;

const FAQItem = styled.div`
  background: rgba(255,255,255,0.9);
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
`;

const FAQQuestion = styled.div`
  padding: 20px 25px;
  font-size: 1.15rem;
  font-weight: 600;
  color: #2C3E50;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(43, 50, 178, 0.05);
  border-bottom: 1px solid rgba(43, 50, 178, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(43, 50, 178, 0.1);
  }

  .toggle-icon {
    font-size: 1.2rem;
    color: #2B32B2;
    transform: rotate(${props => props.$isOpen ? '45deg' : '0deg'});
    transition: transform 0.3s ease;
  }
`;

const FAQAnswer = styled.div`
  padding: 0 25px;
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
  padding-top: ${props => props.$isOpen ? '15px' : '0'};
  padding-bottom: ${props => props.$isOpen ? '20px' : '0'};
  background-color: rgba(255,255,255,0.95);
`;

const FinalContactInfo = styled.div`
    background: linear-gradient(to right, #2B32B2, #1488CC);
    color: white;
    padding: 40px 20px;
    text-align: center;
    margin-top: 60px;

    h4 {
        margin-bottom: 10px;
        font-size: 1.3rem;
        font-weight: 600;
    }

    p {
        font-size: 1rem;
        margin-bottom: 5px;
    }

    a {
        color: white;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

// --- FAQ Data (Tailored for Elexdon Tech Services) ---
const faqData = [
  {
    question: "What types of websites does Elexdon Tech develop?",
    answer: "Elexdon Tech develops a wide range of websites, including e-commerce platforms, corporate sites, portfolio websites, blogs, custom web applications, and more, tailored to your specific business needs."
  },
  {
    question: "Can Elexdon Tech help with my digital marketing strategy?",
    answer: "Absolutely! We offer comprehensive digital marketing services including SEO (Search Engine Optimization), SEM (Search Engine Marketing), social media marketing, content marketing, email marketing, and analytics to boost your online presence and reach."
  },
  {
    question: "What kind of applications does Elexdon Tech build?",
    answer: "We specialize in developing custom applications, including mobile apps (iOS and Android), web applications, and desktop software solutions, designed to streamline your operations and enhance user experience."
  },
  {
    question: "Do you provide IT support and general tech services?",
    answer: "Yes, Elexdon Tech offers various tech services beyond development, including IT consulting, system maintenance, cybersecurity solutions, data management, and technical support for businesses and individuals."
  },
  {
    question: "What courses are available at Elexdon Tech, and what are the prerequisites?",
    answer: "We offer professional training in Web Design & Development, Digital Marketing, Software Development (PHP, Python, JavaScript), Mobile App Development, Computer Networking, Accounting Software, Graphics Design, and more. Most introductory courses require only basic computer literacy, while advanced courses may have specific prerequisites outlined on their respective course pages."
  },
  {
    question: "How can I get a quote for a website or application project?",
    answer: "You can request a quote by filling out the contact form on this page with details about your project, or by calling us directly. We'll get back to you promptly to discuss your requirements and provide a tailored solution."
  }
];

const ContactUs = () => {
    const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
    const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
    const chooseUsTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
    const contactFormTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
    const faqSectionTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

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
            title: 'Sending Message...',
            html: 'Please wait while your message is being sent.',
            didOpen: () => {
                Swal.showLoading();
            },
            allowOutsideClick: false,
            allowEscapeKey: false
        });

        // *** IMPORTANT: Update this URL to the path of your PHP file on the server ***
        const backendUrl = 'https://elexdontech.com/api/contact_form_endpoint.php'; 

        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
                setFormData({ name: '', email: '', phone: '', message: '' });
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
                text: 'An error occurred while sending your message. Please try again later.',
                confirmButtonColor: '#2B32B2'
            });
        } finally {
            setLoading(false);
        }
    };

    const [openFAQ, setOpenFAQ] = useState(null);
    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <MainContainer>
            <Hero $heroBg={heroBg}>
                <div>
                    <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Connect With Elexdon Tech</h1>
                    <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
                        Whether you're looking for professional tech courses, bespoke websites, powerful digital marketing, innovative applications, or general tech services, our team is here to assist you.
                    </p>
                </div>
            </Hero>

            <Section>
                <h2 ref={chooseUsTitleAnim.ref} className={chooseUsTitleAnim.className}>Why Choose Elexdon Tech?</h2>
                <CardsContainer>
                    <Card $delay="0.2s">
                        <img src={support1} alt="Expert Consulting" />
                        <div>
                            <h3>Expert Consultation</h3>
                            <p>Benefit from our experienced team's insights to find the best tech solutions for your needs.</p>
                        </div>
                    </Card>
                    <Card $delay="0.4s">
                        <img src={support2} alt="Tailored Solutions" />
                        <div>
                            <h3>Tailored Solutions</h3>
                            <p>We craft customized websites, applications, and strategies to fit your unique business objectives.</p>
                        </div>
                    </Card>
                    <Card $delay="0.6s">
                        <img src={support3} alt="Comprehensive Training" />
                        <div>
                            <h3>Comprehensive Training</h3>
                            <p>Access up-to-date courses with hands-on learning in various in-demand tech fields.</p>
                        </div>
                    </Card>
                    <Card $delay="0.8s">
                        <img src={support4} alt="Dedicated Support" />
                        <div>
                            <h3>Dedicated Support</h3>
                            <p>Our team provides continuous support, ensuring your systems and projects run smoothly.</p>
                        </div>
                    </Card>
                </CardsContainer>
            </Section>

            <ContactFormSection>
                <h2 ref={contactFormTitleAnim.ref} className={contactFormTitleAnim.className}>Get in Touch with Elexdon Tech</h2>
                <ContactGrid>
                    <FormWrapper>
                        <FormTitle><FaCommentDots /> Send Us a Message</FormTitle>
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <label htmlFor="name"><FaUser /> Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="email"><FaEnvelope /> Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@example.com"
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="phone"><FaPhone /> Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+234 80XXXXXXXX"
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="message"><FaCommentDots /> Your Inquiry / Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project, course interest, or query..."
                                    required
                                ></textarea>
                            </FormGroup>
                            <SubmitButton type="submit" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </SubmitButton>
                        </form>
                    </FormWrapper>

                    <ContactInfoCard>
                        <h3><FaLocationArrow /> Our Contact Info</h3>
                        <p><FaMapMarkerAlt className="icon" /> Elexdon Digital Technologies Limited. Plot SP 795 First-Gate Mechanic Estate, Apo Fct-Abuja.</p>
                        <p><FaMapMarkerAlt className="icon" /> The Old Vicarage building, Trinity Road Old Market Avon, Bristol – United Kingdom.</p>
                        <p><FaPhone className="icon" /> +2349055320154, +2348185609702 (WhatsApp Only)</p>
                        <p><FaPhone className="icon" /> +44(0)7479305003</p>
                        <p><FaEnvelope className="icon" /> <a href="mailto:info@elexdontech.com">info@elexdontech.com</a></p>
                    </ContactInfoCard>
                </ContactGrid>
            </ContactFormSection>

            <FAQSection>
                <h2 ref={faqSectionTitleAnim.ref} className={faqSectionTitleAnim.className}>Frequently Asked Questions</h2>
                <FAQContentWrapper>
                    {faqData.map((faq, index) => (
                        <FAQItem key={index}>
                            <FAQQuestion $isOpen={openFAQ === index} onClick={() => toggleFAQ(index)}>
                                <FaQuestionCircle style={{ marginRight: '10px', color: '#2B32B2' }} />
                                {faq.question}
                                <span className="toggle-icon">
                                    {openFAQ === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </FAQQuestion>
                            <FAQAnswer $isOpen={openFAQ === index}>
                                {faq.answer}
                            </FAQAnswer>
                        </FAQItem>
                    ))}
                </FAQContentWrapper>
            </FAQSection>

            <FinalContactInfo>
                <h4>Ready to Start Your Project or Course?</h4>
                <p>Contact us today for a free consultation or to enroll in one of our professional courses.</p>
                <p><a href="mailto:info@elexdontech.com">info@elexdontech.com</a> | <a href="tel:+2349055320154">+2349055320154</a></p>
            </FinalContactInfo>
        </MainContainer>
    );
};

export default ContactUs;