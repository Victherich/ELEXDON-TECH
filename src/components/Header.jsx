

// import React, { useRef, useState, useEffect } from 'react';
// import styled, { keyframes, css } from 'styled-components';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../Images/ELogo.png'; // Ensure this path is correct
// import { NavLink, useNavigate } from 'react-router-dom';

// // Keyframe animations for a more dynamic feel

// // Pulsating light effect for active links
// const pulse = keyframes`
//   0% {
//     box-shadow: 0 0 5px #00f0ff, 0 0 10px #00f0ff;
//   }
//   50% {
//     box-shadow: 0 0 15px #00f0ff, 0 0 25px #00f0ff;
//   }
//   100% {
//     box-shadow: 0 0 5px #00f0ff, 0 0 10px #00f0ff;
//   }
// `;

// // Subtle glow for hover effect
// const neonGlow = keyframes`
//   from {
//     text-shadow: 0 0 5px #fff, 0 0 10px #fff;
//   }
//   to {
//     text-shadow: 0 0 10px #00d1ff, 0 0 20px #00d1ff;
//   }
// `;

// // Main Header Wrapper
// const HeaderWrapper = styled.header`
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 1000;
//   background: rgba(10, 10, 30, 0.8); /* Darker, more premium background */
//   backdrop-filter: blur(20px); /* Increased blur for a smoother frosted glass effect */
//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); /* More pronounced shadow */
//   border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle bottom border */
//   transition: all 0.4s ease-in-out; /* Smoother transitions for all properties */



// background-size: 400% 400%;
// animation: goldGlow 15s ease infinite;
// background: #12c2e9;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to left, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


// @keyframes goldGlow {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }





//   /* Optional: Make header disappear on scroll down and reappear on scroll up */
//   ${({ scrolledDown }) =>
//     scrolledDown &&
//     css`
//       transform: translateY(-100%);
//     `}
// `;

// const Container = styled.div`
//   max-width: 1500px; /* Slightly wider container */
//   padding: 7px 30px; /* More generous padding */
//   margin: auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Logo = styled.a`
//   font-size: 28px; /* Slightly larger logo text */
//   font-weight: 900; /* Bolder font weight */
//   color: #e0e0e0; /* Softer white for text */
//   text-transform: uppercase;
//   letter-spacing: 1.5px; /* Increased letter spacing */
//   text-decoration: none;
//   cursor: pointer;
//   display: flex;
//   align-items: center;

//   img {
//     width: 50px; /* Slightly smaller logo image for balance */
//     border-radius: 8px; /* Softer border-radius */
//     margin-right: 10px; /* Space between logo and text */
//     box-shadow: 0 0 15px rgba(0, 209, 255, 0.3); /* Subtle glow around the logo */
//     transition: transform 0.3s ease-in-out;

//     &:hover {
//       transform: scale(1.05); /* Slight scale up on hover */
//     }
//   }
// `;

// const Nav = styled.nav`
//   padding: 0 20px;
//   border-radius: 12px; /* More rounded corners */

//   @media (max-width: 884px) {
//     display: none;
//     ${({ isOpen }) =>
//       isOpen &&
//       css`
//         display: flex; /* Use flex for better alignment in mobile */
//         flex-direction: column;
//         align-items: center; /* Center items in mobile view */
//       `}
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     background: rgba(13, 27, 42, 0.98); /* Darker, more opaque background for mobile */
//     padding: 30px 0; /* More padding for mobile menu */
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Stronger shadow for mobile menu */
//   }

//   ul {
//     display: flex;
//     list-style: none;
//     gap: 35px; /* Increased gap between main nav items */
//     margin: 0;
//     padding: 0;

//     @media (max-width: 884px) {
//       flex-direction: column;
//       gap: 20px; /* Reduced gap for mobile */
//       width: 100%;
//       text-align: center;
//     }

//     li {
//       position: relative; /* Needed for link styling */

//       a {
//         position: relative;
//         display: inline-block;
//         padding: 8px 15px; /* More padding for links */
//         text-decoration: none;
//         color: white; /* Softer default link color */
//         font-size: 13px; /* Slightly larger font size */
//         font-weight: 600; /* Bolder font weight */
//         text-transform: uppercase;
//         overflow: hidden;
//         transition: all 0.3s ease-in-out; /* Smooth transition for all hover effects */
//         letter-spacing: 0.8px;
//         border-radius:10px;

//         &::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           width: 0;
//           height: 2px;
//           background-color: #00d1ff;
//           transition: all 0.3s ease-in-out;
//           transform: translateX(-50%);
//         }

//         &:hover {
//           color: #00d1ff; /* Bright active/hover color */
//           animation: ${neonGlow} 1.5s infinite alternate; /* Neon glow on hover */

//           &::after {
//             width: 100%; /* Underline expands on hover */
//           }
//         }

//         &.active {
//           color: #00d1ff;
//           animation: ${pulse} 2s infinite ease-in-out; /* Pulsating glow for active link */
//           font-weight: 700; /* Bolder for active */
//           &::after {
//             width: 100%; /* Active link always has underline */
//             background-color: #00f0ff;
//           }
//         }
//       }
//     }
//   }
// `;

// const Toggle = styled.div`
//   display: none;
//   font-size: 28px; /* Larger toggle icon */
//   color: #00d1ff; /* Bright color for toggle */
//   cursor: pointer;
//   background: rgba(0, 209, 255, 0.1); /* Subtle background for toggle */
//   padding: 8px;
//   border-radius: 8px;
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0 0 10px rgba(0, 209, 255, 0.5); /* Glow around toggle */

//   &:hover {
//     background: rgba(0, 209, 255, 0.2);
//     transform: scale(1.1);
//   }

//   @media (max-width: 884px) {
//     display: block;
//   }
// `;

// const Header = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const navigate = useNavigate();

//   // State to handle header visibility on scroll
//   const [scrolledDown, setScrolledDown] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // Effect for hiding/showing header on scroll
//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY && currentScrollY > 200) {
//       // scrolled down and past initial offset
//       setScrolledDown(true);
//     } else {
//       // scrolled up
//       setScrolledDown(false);
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const checkUser = () => {
//       const storedUser = localStorage.getItem('user');
//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       } else {
//         setUser(null);
//       }
//     };

//     checkUser();
//     const id = setInterval(checkUser, 3000);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <HeaderWrapper scrolledDown={scrolledDown}>
//       <Container>
//         <Logo onClick={() => navigate('/')}>
//           <img src={logo} alt="Elexdon Logo" />
//         </Logo>
//         <Toggle onClick={() => setNavOpen(!navOpen)}>
//           {navOpen ? <FaTimes /> : <FaBars />}
//         </Toggle>
//         <Nav isOpen={navOpen}>
//           <ul>
//             <li onClick={() => setNavOpen(false)}>
//               <NavLink to="/" end>
//                 Home
//               </NavLink>
//             </li>
//             <li onClick={() => setNavOpen(false)}>
//               <NavLink to="/aboutus">ABOUT US</NavLink>
//             </li>
//             <li onClick={() => setNavOpen(false)}>
//               <NavLink to="/services">SERVICES</NavLink>
//             </li>
//             <li onClick={() => {setNavOpen(false);window.open("https://elexdonhost.com.ng/", "_blank")}}>
//               <NavLink to='/home'>WEB HOSTING</NavLink>
//             </li>

            
         
//           </ul>
//         </Nav>
//       </Container>
//     </HeaderWrapper>
//   );
// };

// export default Header;






import React, { useRef, useState, useEffect, useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'; // Import FaChevronDown for dropdown icon
import logo from '../Images/ELogo.png'; // Ensure this path is correct
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from './Context';

// --- Keyframe Animations ---

// Pulsating light effect for active links
const pulse = keyframes`
  0% {
    box-shadow: 0 0 5px #00f0ff, 0 0 10px #00f0ff;
  }
  50% {
    box-shadow: 0 0 15px #00f0ff, 0 0 25px #00f0ff;
  }
  100% {
    box-shadow: 0 0 5px #00f0ff, 0 0 10px #00f0ff;
  }
`;

// Subtle glow for hover effect
const neonGlow = keyframes`
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff;
  }
  to {
    text-shadow: 0 0 10px #00d1ff, 0 0 20px #00d1ff;
  }
`;

// Main Header Wrapper
const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: rgba(10, 10, 30, 0.8); /* Darker, more premium background */
  backdrop-filter: blur(20px); /* Increased blur for a smoother frosted glass effect */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); /* More pronounced shadow */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle bottom border */
  transition: all 0.4s ease-in-out; /* Smoother transitions for all properties */

  background-size: 400% 400%;
  animation: goldGlow 15s ease infinite;
  background: #12c2e9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @keyframes goldGlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* Optional: Make header disappear on scroll down and reappear on scroll up */
  ${({ scrolledDown }) =>
    scrolledDown &&
    css`
      transform: translateY(-100%);
    `}
`;

const Container = styled.div`
  max-width: 1500px; /* Slightly wider container */
  padding: 7px 30px; /* More generous padding */
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 28px; /* Slightly larger logo text */
  font-weight: 900; /* Bolder font weight */
  color: #e0e0e0; /* Softer white for text */
  text-transform: uppercase;
  letter-spacing: 1.5px; /* Increased letter spacing */
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 50px; /* Slightly smaller logo image for balance */
    border-radius: 8px; /* Softer border-radius */
    margin-right: 10px; /* Space between logo and text */
    box-shadow: 0 0 15px rgba(0, 209, 255, 0.3); /* Subtle glow around the logo */
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05); /* Slight scale up on hover */
    }
  }
`;

const Nav = styled.nav`
  padding: 0 20px;
  border-radius: 12px; /* More rounded corners */

  @media (max-width: 884px) {
    display: none;
    ${({ isOpen }) =>
      isOpen &&
      css`
        display: flex; /* Use flex for better alignment in mobile */
        flex-direction: column;
        align-items: center; /* Center items in mobile view */
      `}
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(13, 27, 42, 0.98); /* Darker, more opaque background for mobile */
    padding: 30px 0; /* More padding for mobile menu */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Stronger shadow for mobile menu */
  }

  ul {
    display: flex;
    list-style: none;
    gap: 35px; /* Increased gap between main nav items */
    margin: 0;
    padding: 0;

    @media (max-width: 884px) {
      flex-direction: column;
      gap: 20px; /* Reduced gap for mobile */
      width: 100%;
      text-align: center;
    }

    li {
      position: relative; /* Needed for dropdown positioning */

      a {
        position: relative;
        display: inline-block;
        padding: 8px 15px; /* More padding for links */
        text-decoration: none;
        color: white; /* Softer default link color */
        font-size: 13px; /* Slightly larger font size */
        font-weight: 600; /* Bolder font weight */
        text-transform: uppercase;
        overflow: hidden;
        transition: all 0.3s ease-in-out; /* Smooth transition for all hover effects */
        letter-spacing: 0.8px;
        border-radius:10px;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #00d1ff;
          transition: all 0.3s ease-in-out;
          transform: translateX(-50%);
        }

        &:hover {
          color: #00d1ff; /* Bright active/hover color */
          animation: ${neonGlow} 1.5s infinite alternate; /* Neon glow on hover */

          &::after {
            width: 100%; /* Underline expands on hover */
          }
        }

        &.active {
          color: #00d1ff;
          animation: ${pulse} 2s infinite ease-in-out; /* Pulsating glow for active link */
          font-weight: 700; /* Bolder for active */
          &::after {
            width: 100%; /* Active link always has underline */
            background-color: #00f0ff;
          }
        }
      }
    }
  }
`;

const Toggle = styled.div`
  display: none;
  font-size: 28px; /* Larger toggle icon */
  color: #00d1ff; /* Bright color for toggle */
  cursor: pointer;
  background: rgba(0, 209, 255, 0.1); /* Subtle background for toggle */
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 209, 255, 0.5); /* Glow around toggle */

  &:hover {
    background: rgba(0, 209, 255, 0.2);
    transform: scale(1.1);
  }

  @media (max-width: 884px) {
    display: block;
  }
`;

// --- New Dropdown Styles ---

const DropdownContainer = styled.li`
  position: relative;
  /* Ensure the dropdown chevron is aligned */
  display: flex;
  align-items: center;
  

  & > a { /* Style for the "Courses" link itself */
    display: flex;
    align-items: center;
    gap: 5px; /* Space between text and icon */
  }

  @media (max-width: 884px) {
    /* For mobile, ensure dropdown takes full width */
    width: 100%;
    flex-direction: column; /* Stack link and dropdown */
    align-items: center;
  }
`;

const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction:column;
  // height:300px;
  position: absolute;
  background: rgba(13, 27, 42, 0.95); /* Darker background for dropdown */
  min-width: 220px; /* Wider dropdown */
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4); /* Stronger shadow */
  z-index: 1001; /* Higher z-index than header if needed */
  border-radius: 8px; /* Rounded corners for dropdown */
  overflow: hidden; /* Ensures child elements respect border-radius */
  padding: 10px 0; /* Vertical padding */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
  top: 100%; /* Position below the parent link */
  left: 50%;
  transform: translateX(-50%); /* Center the dropdown */
  margin-top: 10px; /* Space from the parent link */
  animation: ${props => props.isOpen ? css`${fadeIn} 0.3s ease-out forwards` : 'none'};

  @media (max-width: 884px) {
    position: absolute; /* Stack in mobile view */
    width: 90%; /* Take up most of the mobile screen width */
    margin-top: 10px;
    box-shadow: none; /* No extra shadow in mobile */
    background: rgba(13, 27, 42, 0.8); /* Slightly lighter for distinction */
    height:370px;
    overflow-y:scroll;
  
  }
`;

// Dropdown item styling
const DropdownItem = styled(NavLink)`
  color: white !important; /* Override parent link color */
  padding: 12px 20px !important; /* More padding */
  text-decoration: none;
  display: block;
  text-align: left; /* Align text to left */
  font-size: 13px !important; /* Smaller font for dropdown items */
  text-transform: capitalize !important; /* Normal capitalization */
  font-weight: 500 !important; /* Lighter font weight */
  white-space: nowrap; /* Prevent wrapping */

  &:hover {
    background-color: rgba(0, 209, 255, 0.2); /* Highlight on hover */
    color: #00d1ff !important;
    animation: none !important; /* Disable glow on dropdown items */
    text-shadow: none !important; /* Disable text shadow */
    &::after { /* Remove underline on hover for dropdown items */
      width: 0 !important;
    }
  }

  &.active {
    background-color: rgba(0, 209, 255, 0.3) !important;
    color: #00f0ff !important;
    animation: none !important; /* Disable pulse on active dropdown items */
    text-shadow: none !important;
    &::after {
      width: 0 !important;
    }
  }
`;

// Simple fade-in for dropdown
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px) translateX(-50%); }
  to { opacity: 1; transform: translateY(0) translateX(-50%); }
`;


const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Ref for dropdown to detect clicks outside

  // State to handle header visibility on scroll
  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const {courses}=useContext(Context);



  // Effect for hiding/showing header on scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      setScrolledDown(true);
      setDropdownOpen(false); // Close dropdown on scroll down
    } else {
      setScrolledDown(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Effect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    checkUser();
    const id = setInterval(checkUser, 3000);
    return () => clearInterval(id);
  }, []);

  // Handler for clicking a dropdown item
  const handleCourseClick = (path) => {
    navigate(path);
    setDropdownOpen(false); // Close dropdown after navigation
    setNavOpen(false); // Close mobile nav if open
  };

  return (
    <HeaderWrapper scrolledDown={scrolledDown}>
      <Container>
        <Logo onClick={() => navigate('/')}>
          <img src={logo} alt="Elexdon Logo" />
        </Logo>
        <Toggle onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </Toggle>
        <Nav isOpen={navOpen}>
          <ul>
            <li onClick={() => setNavOpen(false)}>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <NavLink to="/aboutus">ABOUT US</NavLink>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <NavLink to="/services">SERVICES</NavLink>
            </li>

            {/* New Courses Dropdown Menu */}
            <DropdownContainer
              onClick={() => setDropdownOpen(!dropdownOpen)}
              // onMouseLeave={() => setDropdownOpen(false)}
              ref={dropdownRef}
            >
              {/* This NavLink acts as the main "Courses" button */}
              <NavLink
                to="#" // Use '#' or a relevant base path if "Courses" has its own page
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  setDropdownOpen(!dropdownOpen); // Toggle on click for mobile
                  if (window.innerWidth <= 884) {
                    // In mobile view, toggle mobile nav if clicking on dropdown parent
                    // setNavOpen(true); // Keep nav open when dropdown is open
                  }
                }}
              >
                Our Subsidiaries <FaChevronDown style={{ marginLeft: '5px', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </NavLink>
              <DropdownContent isOpen={dropdownOpen}>
                {courses.map((course) => (
                  <DropdownItem
                    key={course.name}
                    to={course.path}
                    onClick={() => handleCourseClick(course.path)}
                  >
                    {course.name}
                  </DropdownItem>
                ))}
              </DropdownContent>
            </DropdownContainer>

            <li onClick={() => {setNavOpen(false); window.open("https://elexdonhost.com.ng/", "_blank")}}>
              {/* Using a regular anchor for external link, or NavLink if you have an internal proxy */}
              <a href="https://elexdonhost.com.ng/" target="_blank" rel="noopener noreferrer">WEB HOSTING</a>
            </li>
              <li onClick={() => setNavOpen(false)}>
              <NavLink to="/contactus">CONTACT US</NavLink>
            </li>
          </ul>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;