
// import React, { useContext, useState } from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaVenusMars, FaBookOpen, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'; // React Icons
// import { Context } from './Context';

// // --- Course Data (from your previous request) ---
// // const courseOptions = [
// //   "Web Design & Development",
// //   "Mobile App Development",
// //   "Computer Repair & Maintenance",
// //   "Digital Marketing",
// //   "Geographic Information System (GIS)",
// //   "Software Development",
// //   "Auto Cad 2D & 3D",
// //   "Computer Animation",
// //   "Become A Microsoft Certified IT Professionals",
// //   "Computer Networking",
// //   "Accounting Software",
// //   "Desktop Publishing",
// //   "Graphics Design"
// // ];

// // --- Keyframe Animations ---
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const slideIn = keyframes`
//   from { opacity: 0; transform: translateX(-20px); }
//   to { opacity: 1; transform: translateX(0); }
// `;

// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.02); }
//   100% { transform: scale(1); }
// `;

// // --- Styled Components ---

// const PageContainer = styled.div`
//   background: linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%); /* Soft light background */
//   padding: 100px 20px 80px; /* Top padding for fixed header */
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   font-family: 'Inter', sans-serif;
//   color: #333;
// `;

// const HeaderSection = styled.section`
//   text-align: center;
//   margin-bottom: 50px;
//   max-width: 800px;
//   animation: ${fadeIn} 1s ease-out forwards;
//   animation-delay: 0.2s;

//   h1 {
//     font-size: clamp(2.5rem, 5vw, 4rem);
//     color: #007AFF;
//     margin-bottom: 15px;
//     font-weight: 800;
//     text-shadow: 2px 2px 8px rgba(0,0,0,0.1);
//   }

//   p {
//     font-size: clamp(1rem, 2vw, 1.2rem);
//     color: #555;
//     line-height: 1.7;
//     margin-bottom: 10px;
//   }

//   span {
//     font-weight: 600;
//     color: #007AFF;
//   }
// `;

// const FormWrapper = styled.div`
//   background: #FFFFFF;
//   border-radius: 20px;
//   padding: 40px;
//   box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
//   width: 100%;
//   max-width: 700px; /* Max width for the form */
//   animation: ${fadeIn} 1s ease-out forwards;
//   animation-delay: 0.5s;
//   border: 1px solid rgba(0, 122, 255, 0.08); /* Subtle border */

//   @media (max-width: 768px) {
//     padding: 30px;
//     border-radius: 15px;
//   }
//   @media (max-width: 480px) {
//     padding: 20px;
//     border-radius: 10px;
//   }
// `;

// const FormTitle = styled.h2`
//   font-size: clamp(1.8rem, 4vw, 2.5rem);
//   color: #2C3E50;
//   margin-bottom: 30px;
//   font-weight: 700;
//   text-align: center;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 25px;
//   position: relative;
//   animation: ${slideIn} 0.6s ease-out forwards;
//   animation-delay: ${props => props.delay || '0s'};

//   label {
//     display: block;
//     margin-bottom: 8px;
//     font-size: 0.95rem;
//     font-weight: 600;
//     color: #444;
//     display: flex;
//     align-items: center;
//     gap: 8px;

//     .required {
//       color: #e74c3c; /* Red asterisk */
//       font-size: 1.2em;
//       line-height: 1;
//     }
//   }

//   input[type="text"],
//   input[type="email"],
//   input[type="tel"],
//   select {
//     width: 100%;
//     padding: 12px 15px;
//     border: 1px solid #ddd;
//     border-radius: 8px;
//     font-size: 1rem;
//     color: #333;
//     transition: all 0.3s ease;
//     background-color: #fcfcfc;
//     box-sizing:border-box;

//     &:focus {
//       border-color: #007AFF;
//       box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
//       outline: none;
//       background-color: #fff;
//     }
//   }

//   select {
//     appearance: none; /* Remove default arrow */
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333' width='18px' height='18px'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
//     background-repeat: no-repeat;
//     background-position: right 15px center;
//     background-size: 18px;
//     cursor: pointer;
//   }
// `;

// const RadioGroup = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-top: 10px;

//   label {
//     display: flex;
//     align-items: center;
//     font-weight: normal;
//     cursor: pointer;
//     color: #555;
//     font-size: 1rem;

//     input[type="radio"] {
//       margin-right: 8px;
//       appearance: none;
//       width: 18px;
//       height: 18px;
//       border: 2px solid #007AFF;
//       border-radius: 50%;
//       position: relative;
//       cursor: pointer;
//       outline: none;
//       transition: all 0.2s ease-in-out;

//       &:checked {
//         background-color: #007AFF;
//         border-color: #007AFF;
//       }

//       &:checked::before {
//         content: '';
//         display: block;
//         width: 8px;
//         height: 8px;
//         background-color: #fff;
//         border-radius: 50%;
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//       }
//     }
//   }
// `;

// const SubmitButton = styled.button`
//   display: block;
//   width: 100%;
//   padding: 15px 20px;
//   font-size: 1.2rem;
//   font-weight: 700;
//   color: white;
//   background: linear-gradient(45deg, #007AFF, #00D1FF);
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3);
//   transition: all 0.3s ease-in-out;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   margin-top: 30px;
//   animation: ${fadeIn} 1s ease-out forwards;
//   animation-delay: 1.5s;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 12px 35px rgba(0, 122, 255, 0.5);
//     background: linear-gradient(45deg, #00D1FF, #007AFF);
//   }

//   &:active {
//     transform: translateY(0);
//     box-shadow: 0 5px 20px rgba(0, 122, 255, 0.3);
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


// const CourseRegistrationPage = () => {
//   const {courses}=useContext(Context);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     state: '',
//     country: '',
//     gender: '',
//     chosenCourse: ''
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
//     if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.state || !formData.country || !formData.gender || !formData.chosenCourse) {
//       setMessage({ type: 'error', text: 'Please fill in all required fields.' });
//       return;
//     }

//     // Email format validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setMessage({ type: 'error', text: 'Please enter a valid email address.' });
//       return;
//     }

//     // Phone number basic validation (just checks if it's digits)
//     const phoneRegex = /^\d+$/;
//     if (!phoneRegex.test(formData.phoneNumber)) {
//       setMessage({ type: 'error', text: 'Please enter a valid phone number (digits only).' });
//       return;
//     }

//     // If all validations pass
//     console.log('Form Submitted:', formData);
//     setMessage({ type: 'success', text: 'Registration successful! We will contact you shortly.' });

//     // Here you would typically send formData to your backend API
//     // fetch('/api/register-course', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(formData)
//     // })
//     // .then(response => response.json())
//     // .then(data => {
//     //   if (data.success) {
//     //     setMessage({ type: 'success', text: 'Registration successful! We will contact you shortly.' });
//     //     setFormData({ // Clear form after successful submission
//     //       fullName: '', email: '', phoneNumber: '', state: '',
//     //       country: '', gender: '', chosenCourse: ''
//     //     });
//     //   } else {
//     //     setMessage({ type: 'error', text: data.message || 'Registration failed. Please try again.' });
//     //   }
//     // })
//     // .catch(error => {
//     //   console.error('Submission error:', error);
//     //   setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
//     // });
//   };

//   return (
//     <PageContainer>
//       <HeaderSection>
//         <h1>Register Your Course</h1>
//         <p>Fill All The Necessary Field And Choose Your Desire Course</p>
//         <p>We're excited to have you join us! <FaCheckCircle style={{ color: '#28a745', marginLeft: '5px' }} /></p>
//       </HeaderSection>

//       <FormWrapper>
//         <FormTitle>Course Registration Form</FormTitle>
//         <form onSubmit={handleSubmit}>
//           <FormGroup delay="0.6s">
//             <label htmlFor="fullName">
//               <FaUser /> Full Name<span className="required">*</span>
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Enter your full name"
//               required
//             />
//           </FormGroup>

//           <FormGroup delay="0.7s">
//             <label htmlFor="email">
//               <FaEnvelope /> Email<span className="required">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email address"
//               required
//             />
//           </FormGroup>

//           <FormGroup delay="0.8s">
//             <label htmlFor="phoneNumber">
//               <FaPhone /> Phone Number<span className="required">*</span>
//             </label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               placeholder="e.g., +2348012345678"
//               required
//             />
//           </FormGroup>

//           <FormGroup delay="0.9s">
//             <label htmlFor="state">
//               <FaMapMarkerAlt /> State<span className="required">*</span>
//             </label>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               placeholder="Enter your state"
//               required
//             />
//           </FormGroup>

//           <FormGroup delay="1s">
//             <label htmlFor="country">
//               <FaGlobe /> Country<span className="required">*</span>
//             </label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               placeholder="Enter your country"
//               required
//             />
//           </FormGroup>

//           <FormGroup delay="1.1s">
//             <label>
//               <FaVenusMars /> Gender<span className="required">*</span>
//             </label>
//             <RadioGroup>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={formData.gender === 'Male'}
//                   onChange={handleChange}
//                   required
//                 />
//                 Male
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={formData.gender === 'Female'}
//                   onChange={handleChange}
//                   required
//                 />
//                 Female
//               </label>
//             </RadioGroup>
//           </FormGroup>

//           <FormGroup delay="1.2s">
//             <label htmlFor="chosenCourse">
//               <FaBookOpen /> Choose Your Course<span className="required">*</span>
//             </label>
//             <select
//               id="chosenCourse"
//               name="chosenCourse"
//               value={formData.chosenCourse}
//               onChange={handleChange}
//               required
//             >
//               <option value="">-- Select a Course --</option>
//               {courses.map((course, index) => (
//                 <option key={index} value={course.name}>
//                   {course.name}
//                 </option>
//               ))}
//             </select>
//           </FormGroup>

//           {message && (
//             <Message $type={message.type}>
//               {message.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
//               {message.text}
//             </Message>
//           )}

//           <SubmitButton type="submit">Submit</SubmitButton>
//         </form>
//       </FormWrapper>
//     </PageContainer>
//   );
// };

// export default CourseRegistrationPage;




import React, { useContext, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaVenusMars, FaBookOpen, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'; // React Icons
import { Context } from './Context'; // Assuming Context provides the 'courses' array
import coursebg from '../Images2/coursebg.jpg'; // Import the background image

// --- Keyframe Animations ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
`;

// Pulse animation is defined but not directly used in this component's new styling.
// Keeping it as it was in your original snippet.
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

// --- Styled Components ---

const PageContainer = styled.div`
  box-sizing: border-box; /* Ensure consistent box model */
  padding: 100px 20px 80px; /* Top padding for fixed header, plus bottom padding */
  width: 100%;
  min-height: 100vh; /* Ensure it takes at least the full viewport height */

  /* Background styling from WebDevelopmentCourse */
  background-image: url(${coursebg});
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center; /* Centers the background image */
  background-attachment: fixed; /* Makes the background fixed while scrolling */

  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: #333; /* Default text color for elements not in cards */
`;

const HeaderSection = styled.section`
  text-align: center;
  margin-bottom: 50px;
  max-width: 800px;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.2s;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: white; /* Changed for contrast against background image */
    margin-bottom: 15px;
    font-weight: 800;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.9); /* Stronger shadow for readability */
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: white; /* Changed for contrast against background image */
    line-height: 1.7;
    margin-bottom: 10px;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.7); /* Shadow for readability */
  }

  span {
    font-weight: 600;
    color: #007AFF; /* Keep accent color for specific spans if any */
  }
`;

const FormWrapper = styled.div`
  /* Background styling from WebDevelopmentCourse's cards */
  background: rgba(255,255,255,0.8); /* Semi-transparent white background */
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1); /* Adjusted shadow for lighter background */
  width: 100%;
  max-width: 700px; /* Max width for the form */
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s;
  border: 1px solid rgba(0, 122, 255, 0.08); /* Subtle border */

  @media (max-width: 768px) {
    padding: 30px;
    border-radius: 15px;
  }
  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 10px;
  }
`;

const FormTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: #2C3E50; /* Dark color for title on light background */
  margin-bottom: 30px;
  font-weight: 700;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  position: relative;
  animation: ${slideIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    color: #444; /* Darker color for labels */
    display: flex;
    align-items: center;
    gap: 8px;

    .required {
      color: #e74c3c; /* Red asterisk */
      font-size: 1.2em;
      line-height: 1;
    }
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    color: #333; /* Dark text for input fields */
    transition: all 0.3s ease;
    background-color: #fcfcfc;
    box-sizing:border-box;

    &:focus {
      border-color: #007AFF;
      box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
      outline: none;
      background-color: #fff;
    }
  }

  select {
    appearance: none; /* Remove default arrow */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333' width='18px' height='18px'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 18px;
    cursor: pointer;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;

  label {
    display: flex;
    align-items: center;
    font-weight: normal;
    cursor: pointer;
    color: #555; /* Darker color for radio labels */
    font-size: 1rem;

    input[type="radio"] {
      margin-right: 8px;
      appearance: none;
      width: 18px;
      height: 18px;
      border: 2px solid #007AFF;
      border-radius: 50%;
      position: relative;
      cursor: pointer;
      outline: none;
      transition: all 0.2s ease-in-out;

      &:checked {
        background-color: #007AFF;
        border-color: #007AFF;
      }

      &:checked::before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px 20px;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(45deg, #007AFF, #00D1FF);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3);
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 30px;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 1.5s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(0, 122, 255, 0.5);
    background: linear-gradient(45deg, #00D1FF, #007AFF);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 20px rgba(0, 122, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: #ccc;
    box-shadow: none;
  }
`;

const Message = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 600;
  animation: ${fadeIn} 0.5s ease-out forwards;

  ${props => props.$type === 'success' && css`
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #28a745;
  `}

  ${props => props.$type === 'error' && css`
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #dc3545;
  `}
`;


const CourseRegistrationPage = () => {
  // Assuming 'courses' array is provided via Context as in your snippet
  // If not, you can define it directly here or import it.
  const { courses } = useContext(Context);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    state: '',
    country: '',
    gender: '',
    chosenCourse: ''
  });

  const [message, setMessage] = useState(null); // { type: 'success' | 'error', text: '...' }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.state || !formData.country || !formData.gender || !formData.chosenCourse) {
      setMessage({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    // Phone number basic validation (just checks if it's digits)
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setMessage({ type: 'error', text: 'Please enter a valid phone number (digits only).' });
      return;
    }

    // If all validations pass
    console.log('Form Submitted:', formData);
    setMessage({ type: 'success', text: 'Registration successful! We will contact you shortly.' });

    // Here you would typically send formData to your backend API
    // fetch('/api/register-course', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.success) {
    //     setMessage({ type: 'success', text: 'Registration successful! We will contact you shortly.' });
    //     setFormData({ // Clear form after successful submission
    //       fullName: '', email: '', phoneNumber: '', state: '',
    //       country: '', gender: '', chosenCourse: ''
    //     });
    //   } else {
    //     setMessage({ type: 'error', text: data.message || 'Registration failed. Please try again.' });
    //   }
    // })
    // .catch(error => {
    //   console.error('Submission error:', error);
    //   setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
    // });
  };

  return (
    <PageContainer>
      <HeaderSection>
        <h1>Register Your Course</h1>
        <p>Fill All The Necessary Field And Choose Your Desire Course</p>
        <p>We're excited to have you join us! <FaCheckCircle style={{ color: '#28a745', marginLeft: '5px' }} /></p>
      </HeaderSection>

      <FormWrapper>
        <FormTitle>Course Registration Form</FormTitle>
        <form onSubmit={handleSubmit}>
          <FormGroup delay="0.6s">
            <label htmlFor="fullName">
              <FaUser /> Full Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </FormGroup>

          <FormGroup delay="0.7s">
            <label htmlFor="email">
              <FaEnvelope /> Email<span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </FormGroup>

          <FormGroup delay="0.8s">
            <label htmlFor="phoneNumber">
              <FaPhone /> Phone Number<span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="e.g., +2348012345678"
              required
            />
          </FormGroup>

          <FormGroup delay="0.9s">
            <label htmlFor="state">
              <FaMapMarkerAlt /> State<span className="required">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your state"
              required
            />
          </FormGroup>

          <FormGroup delay="1s">
            <label htmlFor="country">
              <FaGlobe /> Country<span className="required">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your country"
              required
            />
          </FormGroup>

          <FormGroup delay="1.1s">
            <label>
              <FaVenusMars /> Gender<span className="required">*</span>
            </label>
            <RadioGroup>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  required
                />
                Female
              </label>
            </RadioGroup>
          </FormGroup>

          <FormGroup delay="1.2s">
            <label htmlFor="chosenCourse">
              <FaBookOpen /> Choose Your Course<span className="required">*</span>
            </label>
            <select
              id="chosenCourse"
              name="chosenCourse"
              value={formData.chosenCourse}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Course --</option>
              {/* Ensure 'courses' array is available, either from Context or defined locally */}
              {courses && courses.map((course, index) => (
                <option key={index} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </FormGroup>

          {message && (
            <Message $type={message.type}>
              {message.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
              {message.text}
            </Message>
          )}

          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </FormWrapper>
    </PageContainer>
  );
};

export default CourseRegistrationPage;