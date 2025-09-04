
import React, { useRef, useState, useEffect, useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../../Images/ELogo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../Context';

// --- Keyframe Animations ---

// Scroll animation for elements fading in from bottom
const fadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Simple fade-in for dropdown
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px) translateX(-50%); }
  to { opacity: 1; transform: translateY(0) translateX(-50%); }
`;

// Main Header Wrapper
const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  // background: #6B84A2; /* New background color */
 background:#2f5f9bff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Adjusted shadow for new background */
  border-bottom: 1px solid rgba(255, 255, 255, 0.15); /* Slightly stronger border */
  transition: all 0.4s ease-in-out;

  /* Optional: Make header disappear on scroll down and reappear on scroll up */
  ${({ scrolledDown }) =>
    scrolledDown &&
    css`
      transform: translateY(-100%);
    `}
`;

const Container = styled.div`
  max-width: 1500px;
  padding: 7px 30px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 28px;
  font-weight: 900;
  color: #E0E0E0; /* Retaining a soft white for text */
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* Scroll animation */
  opacity: 0;
  transform: translateY(20px);
  ${({ animate }) => animate && css`animation: ${fadeInBottom} 0.6s ease-out forwards;`}

  img {
    width: 50px;
    border-radius: 8px;
    margin-right: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for logo */
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Nav = styled.nav`
  padding: 0 20px;
  border-radius: 12px;

  @media (max-width: 884px) {
    display: none;
    ${({ isOpen }) =>
      isOpen &&
      css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #5A718C; /* Slightly darker shade for mobile menu */
    padding: 30px 0;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  ul {
    display: flex;
    list-style: none;
    gap: 35px;
    margin: 0;
    padding: 0;

    @media (max-width: 884px) {
      flex-direction: column;
      gap: 20px;
      width: 100%;
      text-align: center;
    }

    li {
      position: relative;
      /* Scroll animation */
      opacity: 0;
      transform: translateY(20px);
      ${({ animate }) => animate && css`animation: ${fadeInBottom} 0.6s ease-out forwards;`}

      a {
        position: relative;
        display: inline-block;
        padding: 8px 15px;
        text-decoration: none;
        color: #F0F0F0; /* Soft white for links */
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        letter-spacing: 0.8px;
        border-radius: 10px;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 3px; /* Thicker underline */
          background-color: #C0C0C0; /* Matching underline color */
          transition: all 0.3s ease-in-out;
          transform: translateX(-50%);
        }

        &:hover {
          color: #FFFFFF; /* Brighter white on hover */
          &::after {
            width: 100%;
          }
        }

        &.active {
          color: #FFFFFF; /* White for active link */
          font-weight: 700;
          &::after {
            width: 100%;
            background-color: #FFFFFF; /* White for active underline */
          }
        }
      }
    }
  }
`;

const Toggle = styled.div`
  display: none;
  font-size: 28px;
  color: #F0F0F0; /* Matching toggle color */
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1); /* Subtle background */
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }

  @media (max-width: 884px) {
    display: block;
  }
`;

// --- New Dropdown Styles ---

const DropdownContainer = styled.li`

  display: flex;
  align-items: center;

  & > a {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 884px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  background: #2f5f9bff;; /* Darker background for dropdown */
  min-width: 220px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
  border-radius: 8px;
  overflow: hidden;
  padding: 10px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  animation: ${props => props.isOpen ? css`${fadeIn} 0.3s ease-out forwards` : 'none'};

  @media (max-width: 884px) {
    position: absolute; /* Changed to relative for mobile to flow with content */
    width: 90%;
    margin-top: 10px;
    // box-shadow: none;
    background: #5A718C;

    top:-400%;

    overflow-y: auto; /* Enable scrolling for overflow */

  }
`;

const DropdownItem = styled.a`
  color: #F0F0F0 !important;
  padding: 12px 20px !important;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 13px !important;
  text-transform: capitalize !important;
  font-weight: 500 !important;
  white-space: nowrap;
 

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Subtle highlight on hover */
    color: #FFFFFF !important;
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2) !important;
    color: #FFFFFF !important;
  }
`;

const Header2 = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const headerRef = useRef(null); // Ref for header for scroll animation
  const navRef = useRef(null); // Ref for nav for scroll animation

  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const {courses, subsidiaries} = useContext(Context);

  const [animateHeader, setAnimateHeader] = useState(false);
  const [animateNav, setAnimateNav] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setAnimateHeader(true);
            } else if (entry.target === navRef.current) {
              setAnimateNav(true);
            }
          } else {
            // Optionally reset animation when out of view
            if (entry.target === headerRef.current) {
              setAnimateHeader(false);
            } else if (entry.target === navRef.current) {
              setAnimateNav(false);
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
      if (navRef.current) {
        observer.unobserve(navRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      setScrolledDown(true);
      setDropdownOpen(false);
    } else {
      setScrolledDown(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  const handleCourseClick = (path) => {
    navigate(path);
    setDropdownOpen(false);
    setNavOpen(false);
  };

  return (
    <HeaderWrapper scrolledDown={scrolledDown}>
      <Container>
        <Logo onClick={() => navigate('/')} ref={headerRef} animate={animateHeader}>
          <img src={logo} alt="Elexdon Logo" />
        </Logo>
        <Toggle onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </Toggle>
        <Nav isOpen={navOpen} ref={navRef} animate={animateNav}>
          <ul>
            <li style={{ animationDelay: '0.1s' }} onClick={() => setNavOpen(false)}>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li style={{ animationDelay: '0.2s' }} onClick={() => setNavOpen(false)}>
              <NavLink to="/aboutus">ABOUT US</NavLink>
            </li>
            <li style={{ animationDelay: '0.3s' }} onClick={() => setNavOpen(false)}>
              <NavLink to="/services">SERVICES</NavLink>
            </li>

            <DropdownContainer
              style={{ animationDelay: '0.4s' }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              ref={dropdownRef}
            >
              <NavLink
                to="#"
                onMouseEnter={(e) => {
                  e.preventDefault();
                  setDropdownOpen(true);
                }}
              >
                Our Subsidiaries <FaChevronDown style={{ marginLeft: '5px', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </NavLink>
              <DropdownContent isOpen={dropdownOpen}>
                {subsidiaries.map((course) => (
                  <DropdownItem
                    key={course.name}
                    href={course.path}
                    // onClick={() => handleCourseClick(course.path)}
                  >
                    {course.name}
                  </DropdownItem>
                ))}
                {/* <DropdownItem>
                  ELEXDON HOST
                </DropdownItem>
                <DropdownItem>
                  ELEXDON DIGITAL A
                </DropdownItem> */}
              </DropdownContent>
            </DropdownContainer>

            {/* <li style={{ animationDelay: '0.5s' }} onClick={() => {setNavOpen(false); window.open("https://elexdonhost.com.ng/", "_blank")}}>
              <a href="https://elexdonhost.com.ng/" target="_blank" rel="noopener noreferrer">WEB HOSTING</a>
            </li> */}
            <li style={{ animationDelay: '0.6s' }} onClick={() => setNavOpen(false)}>
              <NavLink to="/contactus">CONTACT US</NavLink>
            </li>
          </ul>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header2;