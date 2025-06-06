


import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaUser, FaUserCircle } from 'react-icons/fa';

import Swal from 'sweetalert2';



import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserProfile from './UserProfile';
import UserInvoicesPage from './UserInvoicesPage';
import UserActiveServices from './UserActiveServices';
import UserTickets from './UserTickets';



// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;

const Sidebar = styled.div`
padding-top:50px;
  background:#F4F4F4;
  color: white;
  width: ${(props) => (props.isOpen ? '250px' : '0')};
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  min-height:100vh;
  z-index:7;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (min-width: 768px) {
    width: 250px;
    position: static;
    transition: none;
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color:#000050;

`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SidebarMenuItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  background: ${(props) => (props.active ? 'gray;' : 'transparent')};
  color: ${(props)=>(props.active ? 'white':"#000050")};


  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  transition: all 0.3s ease-in-out;

  &:hover {
 
    background:gray;
  }
`;

const ContentArea = styled.div`
width:100%;
  flex-grow: 1;
  margin-left: ${(props) => (props.isOpen ? '250px' : '0')};
  transition: margin-left 0.3s ease-in-out;
  // padding: 20px;

  @media (min-width: 768px) {
    // margin-left: 250px;
  }
`;

const Hamburger = styled.div`
  position: fixed;
  top: 70px;
  left: 20px;
  background: #000050;
  color: white;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 6;
`;






// Main Component
const UserDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('profile');
  const [user, setUser]=useState({});
  const [error, setError]=useState('')
  const navigate = useNavigate();
  
  
  console.log(user)


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }else{
        navigate('/login')
    }
  }, []);

  
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the logout actions
          localStorage.removeItem('user'); // Delete user data
    navigate('/login'); // Navigate to login page
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
  
      
      }
    });
  };
  



  const handleMenuClick = (menu) => {
    window.scroll(0,0);
    setActiveMenu(menu);
    setMenuOpen(false); // Close menu on mobile when a menu item is clicked
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenuOnOutsideClick = () => setMenuOpen(false);

  // Map menu options to content
  const renderContent = () => {
    switch (activeMenu) {
      case 'profile':
        return  <UserProfile  handleMenuClick={handleMenuClick}/>;

         case 'myinvoices':
        return  <UserInvoicesPage/>;

          case 'useractiveservices':
        return  <UserActiveServices/>;

          case 'tickets':
        return  <UserTickets/>;
       

      default:
        return <h1 style={{color:"green",textAlign:"center",width:"100%"}}>Welcome to your Dashboard</h1>;
    }
  };







  return (
    <DashboardContainer>
      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Overlay isOpen={menuOpen} onClick={closeMenuOnOutsideClick} />
      <Sidebar isOpen={menuOpen}>
        <SidebarHeader>User Dashboard</SidebarHeader>
        <SidebarMenu>
       
          <SidebarMenuItem
          style={{fontSize:"0.9rem"}}
            active={activeMenu === 'profile'}
            onClick={() => handleMenuClick('profile')}
          >
          <FaUserCircle/>  WELCOME, {user?.name?.toUpperCase().slice(0,3)}
          </SidebarMenuItem>

           <SidebarMenuItem
          style={{fontSize:"0.9rem"}}
            active={activeMenu === 'myinvoices'}
            onClick={() => handleMenuClick('myinvoices')}
          >
          Invoices
          </SidebarMenuItem>

            <SidebarMenuItem
          style={{fontSize:"0.9rem"}}
            active={activeMenu === 'useractiveservices'}
            onClick={() => handleMenuClick('useractiveservices')}
          >
          Active Services
          </SidebarMenuItem>


           <SidebarMenuItem
          style={{fontSize:"0.9rem"}}
            active={activeMenu === 'tickets'}
            onClick={() => handleMenuClick('tickets')}
          >
          Tickets
          </SidebarMenuItem>

        

          
          <SidebarMenuItem
            onClick={handleLogout}
          >
            Logout
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>
      <ContentArea isOpen={menuOpen}>{renderContent()}</ContentArea>
    </DashboardContainer>
  );
};

export default UserDashboard;

