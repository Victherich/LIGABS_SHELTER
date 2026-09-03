// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
// import { userLogout } from '../Features/Slice';
// import { Outlet, Link, useLocation } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { 
//   FaGrip,            
//   FaArrowRightFromBracket, 
//   FaUser,
//   FaBuilding
// } from 'react-icons/fa6';
// import { Fade } from 'react-awesome-reveal';

// const UserDashboardLayout = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
//   // Securely retrieve state values from the general user sub-object
//   const userInfo = useSelector((state) => state.auth?.userInfo) || { name: "Client Node Account" };

//   const userNavItems = [
//     { path: "/userdashboard/overview", label: "Dashboard", icon: <FaGrip size={14} /> },
//     { path: "/userdashboard/profile", label: "My Profile", icon: <FaUser size={14} /> },
//   ];

//   return (
//     <PortalContainer>
//       <SplitLowerLayoutGrid>
//         {/* PERSISTENT SIDEBAR NAVIGATION TREE */}
//         <PortalSidebar active={mobileMenuOpen}>
//           <SidebarTopCluster>
//             <SidebarLogoBrand to="/userdashboard/overview">
//               <FaBuilding size={16} /> LIGABS <span>SHELTER</span>
//             </SidebarLogoBrand>
//             <SidebarNavStack>
//               {userNavItems.map((item) => (
//                 <PortalNavLink 
//                   key={item.path} 
//                   to={item.path}
//                   active={location.pathname === item.path ? 1 : 0}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </PortalNavLink>
//               ))}
//             </SidebarNavStack>
//           </SidebarTopCluster>

//           <SessionTerminationBtn 
//             onClick={() => {
//               Swal.fire({
//                 title: 'Are you sure?',
//                 text: 'Are you sure you want to logout?',
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonColor: '#0a192f', 
//                 cancelButtonColor: '#64748b',  
//                 confirmButtonText: 'Yes, Disconnect',
//                 cancelButtonText: 'Cancel',
//                 background: '#ffffff',        
//                 color: '#0f172a',
//                 customClass: {
//                   popup: 'swal2-rigid-max-10'  
//                 }
//               }).then((result) => {
//                 if (result.isConfirmed) {
//                   dispatch(userLogout());
//                 }
//               });
//             }}
//           >
//             <FaArrowRightFromBracket size={14} />
//             <span>Logout</span>
//           </SessionTerminationBtn>
//         </PortalSidebar>

//         {/* COMPONENT STAGE WORKPLACE VIEWPORT */}
//         <PortalStageWorkingArea>
//           <Fade duration={450} triggerOnce>
//             {/* Dynamic nested view routers embed directly right here */}
//             <Outlet />
//           </Fade>
//         </PortalStageWorkingArea>
//       </SplitLowerLayoutGrid>
//     </PortalContainer>
//   );
// };

// export default UserDashboardLayout;

// /* -------------------------------------------------------------------------- */
// /* STYLED COMPONENTS SCHEMES (Ligabs Shelter Theme: Navy #0a192f & Gold #d4af37) */
// /* -------------------------------------------------------------------------- */

// const PortalContainer = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   background: #f8fafc; 
//   color: #0f172a;
//   display: flex;
//   flex-direction: column;
//   font-family: system-ui, -apple-system, sans-serif;
//   overflow-x: hidden;
//   box-sizing: border-box;
//   padding-top: 20px;
// `;

// const SplitLowerLayoutGrid = styled.div`
//   display: grid;
//   grid-template-columns: 260px 1fr;
//   gap: 1rem; 
//   flex: 1;
//   padding: 1rem; 
//   box-sizing: border-box;
//   max-width: 1440px;
//   margin: 0 auto;
//   width: 100%;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     padding: 0.5rem;
//   }
// `;

// const PortalSidebar = styled.nav`
//   background: linear-gradient(180deg, #0a192f 0%, #1c3b6b 100%);
//   border: 1px solid rgba(212, 175, 55, 0.2);
//   border-radius: 12px;
//   padding: 1.25rem; 
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 1rem; 
//   height: calc(100vh - 60px);
//   position: sticky;
//   top: 20px;
//   box-shadow: 0 10px 25px -5px rgba(10, 25, 47, 0.1);

//   @media (max-width: 768px) {
//     display: ${(props) => (props.active ? "flex" : "none")};
//     position: fixed;
//     top: 10px;
//     left: 10px;
//     right: 10px;
//     bottom: 10px;
//     height: auto;
//     z-index: 999;
//     box-shadow: 0 20px 35px -5px rgba(0,0,0,0.2);
//   }
// `;

// const SidebarTopCluster = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const SidebarLogoBrand = styled(Link)`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   font-size: 1.1rem;
//   font-weight: 900;
//   color: #ffffff;
//   text-decoration: none;
//   letter-spacing: -0.03em;
//   padding-bottom: 0.75rem;
//   border-bottom: 1px solid rgba(212, 175, 55, 0.2);

//   svg { color: #d4af37; }
//   span {
//     color: #d4af37;
//   }
// `;

// const SidebarNavStack = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem; 
// `;

// const PortalNavLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   font-size: 0.92rem;
//   font-weight: 600;
//   text-decoration: none;
//   padding: 0.75rem 1rem; 
//   border-radius: 8px;
//   color: ${(props) => (props.active ? "#d4af37" : "#cbd5e1")};
//   background: ${(props) => (props.active ? "rgba(212, 175, 55, 0.15)" : "transparent")};
//   border: 1px solid ${(props) => (props.active ? "rgba(212, 175, 55, 0.3)" : "transparent")};
//   transition: all 0.2s ease;

//   svg {
//     color: ${(props) => (props.active ? "#d4af37" : "#94a3b8")};
//   }

//   &:hover {
//     background: rgba(212, 175, 55, 0.1);
//     color: #d4af37;
//     svg { color: #d4af37; }
//   }
// `;

// const SessionTerminationBtn = styled.button`
//   width: 100%;
//   border: 1px solid rgba(239, 68, 68, 0.3);
//   background: rgba(239, 68, 68, 0.1);
//   color: #fca5a5;
//   font-weight: 600;
//   font-size: 0.88rem;
//   padding: 0.75rem 1rem; 
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background: #ef4444;
//     border-color: #ef4444;
//     color: #ffffff;
//   }
// `;

// const PortalStageWorkingArea = styled.main`
//   min-height: 75vh;
//   box-sizing: border-box;
//   width: 100%;
//   overflow-x: auto;
//   background: #ffffff;
//   border: 1px solid #e2e8f0;
//   border-radius: 12px;
//   padding: 1.5rem;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;




import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../Features/Slice';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { 
  FaGrip,            
  FaArrowRightFromBracket, 
  FaUser,
  FaBuilding,
  FaBars,
  FaXmark
} from 'react-icons/fa6';
import { Fade } from 'react-awesome-reveal';

const UserDashboardLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Securely retrieve state values from the general user sub-object
  const userInfo = useSelector((state) => state.auth?.userInfo) || { name: "Client Node Account" };

  const userNavItems = [
    { path: "/userdashboard/overview", label: "Dashboard", icon: <FaGrip size={14} /> },
    { path: "/userdashboard/profile", label: "My Profile", icon: <FaUser size={14} /> },
  ];

  return (
    <PortalContainer>
      {/* MOBILE TOP NAVIGATION BAR WITH TOGGLE BUTTON */}
      <MobileTopNavbar>
        <MobileBrandLink to="/userdashboard/overview">
          <FaBuilding size={15} /> LIGABS <span>SHELTER</span>
        </MobileBrandLink>
        <MobileMenuToggleBtn onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaXmark size={18} /> : <FaBars size={18} />}
          <span>{mobileMenuOpen ? "Close" : "Dash Menu"}</span>
        </MobileMenuToggleBtn>
      </MobileTopNavbar>

      <SplitLowerLayoutGrid>
        {/* PERSISTENT SIDEBAR NAVIGATION TREE */}
        <PortalSidebar active={mobileMenuOpen}>
          <SidebarTopCluster>
            <SidebarLogoBrand to="/userdashboard/overview">
              <FaBuilding size={16} /> LIGABS <span>SHELTER</span>
            </SidebarLogoBrand>
            <SidebarNavStack>
              {userNavItems.map((item) => (
                <PortalNavLink 
                  key={item.path} 
                  to={item.path}
                  active={location.pathname === item.path ? 1 : 0}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </PortalNavLink>
              ))}
            </SidebarNavStack>
          </SidebarTopCluster>

          <SessionTerminationBtn 
            onClick={() => {
              Swal.fire({
                title: 'Are you sure?',
                text: 'Are you sure you want to logout?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#0a192f', 
                cancelButtonColor: '#64748b',  
                confirmButtonText: 'Yes, Disconnect',
                cancelButtonText: 'Cancel',
                background: '#ffffff',        
                color: '#0f172a',
                customClass: {
                  popup: 'swal2-rigid-max-10'  
                }
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(userLogout());
                }
              });
            }}
          >
            <FaArrowRightFromBracket size={14} />
            <span>Logout</span>
          </SessionTerminationBtn>
        </PortalSidebar>

        {/* COMPONENT STAGE WORKPLACE VIEWPORT */}
        <PortalStageWorkingArea>
          <Fade duration={450} triggerOnce>
            {/* Dynamic nested view routers embed directly right here */}
            <Outlet />
          </Fade>
        </PortalStageWorkingArea>
      </SplitLowerLayoutGrid>
    </PortalContainer>
  );
};

export default UserDashboardLayout;

/* -------------------------------------------------------------------------- */
/* STYLED COMPONENTS SCHEMES (Ligabs Shelter Theme: Navy #0a192f & Gold #d4af37) */
/* -------------------------------------------------------------------------- */

const PortalContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8fafc; 
  color: #0f172a;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
  box-sizing: border-box;
  padding-top: 10px;

  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;

const MobileTopNavbar = styled.header`
  display: none;
  background: linear-gradient(135deg, #0a192f 0%, #1c3b6b 100%);
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
  padding: 0.75rem 1rem;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileBrandLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.95rem;
  font-weight: 900;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: -0.02em;

  svg { color: #d4af37; }
  span { color: #d4af37; }
`;

const MobileMenuToggleBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #d4af37;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  svg { color: #d4af37; }

  &:hover {
    background: #d4af37;
    color: #ffffff;
    svg { color: #ffffff; }
  }
`;

const SplitLowerLayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 1rem; 
  flex: 1;
  padding: 1rem; 
  box-sizing: border-box;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0.5rem;
  }
`;

const PortalSidebar = styled.nav`
  background: linear-gradient(180deg, #0a192f 0%, #1c3b6b 100%);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  padding: 1.25rem; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem; 
  height: calc(100vh - 40px);
  position: sticky;
  top: 20px;
  box-shadow: 0 10px 25px -5px rgba(10, 25, 47, 0.1);

  @media (max-width: 768px) {
    display: ${(props) => (props.active ? "flex" : "none")};
    position: fixed;
    top: 60px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: auto;
    z-index: 999;
    box-shadow: 0 20px 35px -5px rgba(0,0,0,0.3);
  }
`;

const SidebarTopCluster = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    overflow-y: auto;
  }
`;

const SidebarLogoBrand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 900;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: -0.03em;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);

  svg { color: #d4af37; }
  span {
    color: #d4af37;
  }

  @media (max-width: 768px) {
    // display: none; /* Hidden on mobile drawer since brand is shown in the mobile top navbar */
  }
`;

const SidebarNavStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; 
`;

const PortalNavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.75rem 1rem; 
  border-radius: 8px;
  color: ${(props) => (props.active ? "#d4af37" : "#cbd5e1")};
  background: ${(props) => (props.active ? "rgba(212, 175, 55, 0.15)" : "transparent")};
  border: 1px solid ${(props) => (props.active ? "rgba(212, 175, 55, 0.3)" : "transparent")};
  transition: all 0.2s ease;

  svg {
    color: ${(props) => (props.active ? "#d4af37" : "#94a3b8")};
  }

  &:hover {
    background: rgba(212, 175, 55, 0.1);
    color: #d4af37;
    svg { color: #d4af37; }
  }
`;

const SessionTerminationBtn = styled.button`
  width: 100%;
  border: 1px solid rgba(239, 68, 68, 0.3);
  background: rgba(239, 68, 68, 0.1);
  color: #fca5a5;
  font-weight: 600;
  font-size: 0.88rem;
  padding: 0.75rem 1rem; 
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #ef4444;
    border-color: #ef4444;
    color: #ffffff;
  }
`;

const PortalStageWorkingArea = styled.main`
  min-height: 75vh;
  box-sizing: border-box;
  width: 100%;
  overflow-x: auto;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 8px;
  }
`;