import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Building2, PhoneCall } from "lucide-react";
import logo from '../images/logo.png'

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0a192f;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1rem 1.25rem;
  }
`;

const LogoBrand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;

  .logo-icon {
    width: 42px;
    height: 42px;
    background: rgba(212, 175, 55, 0.15);
    border: 1px solid rgba(212, 175, 55, 0.4);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d4af37;
  }

  .brand-text {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.2rem;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: 0.5px;
      margin: 0;

      span {
        color: #d4af37;
      }
    }

    span.sub {
      font-size: 0.7rem;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ $active }) => ($active ? "#d4af37" : "#cbd5e1")};
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
  position: pointer;

  &:hover {
    color: #d4af37;
  }

  &::after {
    content: '';
    display: block;
    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 2px;
    background: #d4af37;
    transition: width 0.3s ease;
    margin-top: 2px;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ActionButton = styled(Link)`
  background-color: #d4af37;
  color: #0a192f;
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 6px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);

  &:hover {
    background-color: #e5c158;
    transform: translateY(-2px);
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: none;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 968px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileDrawer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #0a192f;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform: ${({ $isOpen }) => ($isOpen ? "translateY(0)" : "translateY(-10px)")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;

  @media (min-width: 969px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  color: ${({ $active }) => ($active ? "#d4af37" : "#cbd5e1")};
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: color 0.3s ease;

  &:hover {
    color: #d4af37;
  }
`;

const MobileActionButton = styled(Link)`
  background-color: #d4af37;
  color: #0a192f;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Click-away listener to close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <NavContainer ref={navRef}>
      <NavContent>
        {/* Logo / Brand Name */}
        <LogoBrand to="/">
          {/* <div className="logo-icon">
            <Building2 size={24} />
          </div>
          <div className="brand-text">
            <h1>LIGABS <span>SHELTER</span></h1>
            <span className="sub">Real Estate & Developer</span>
          </div> */}
          <img src={logo} alt='logo' style={{width:"180px", borderRadius:"10px"}}/>
        </LogoBrand>

        {/* Desktop Links */}
        <DesktopLinks>
          <NavLink to="/" $active={isActive("/")}>Home</NavLink>
          <NavLink to="/about" $active={isActive("/about")}>About Us</NavLink>
          <NavLink to="/services" $active={isActive("/services")}>Services</NavLink>
          <NavLink to="/properties" $active={isActive("/properties")}>Properties</NavLink>
          <NavLink to="/team" $active={isActive("/team")}>Team</NavLink>
            <NavLink to="/gallery" $active={isActive("/gallery")}>Gallery</NavLink>
          <NavLink to="/contact" $active={isActive("/contact")}>Contact Us</NavLink>
        </DesktopLinks>

        {/* Desktop Action CTA */}
        <ActionButton to="/contact">
          <PhoneCall size={18} /> Book Inspection
        </ActionButton>

        {/* Mobile Hamburger Toggle Button */}
        <HamburgerButton 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </HamburgerButton>

        {/* Mobile Dropdown Drawer */}
        <MobileDrawer $isOpen={isOpen}>
          <MobileNavLink to="/" $active={isActive("/")}>Home</MobileNavLink>
          <MobileNavLink to="/about" $active={isActive("/about")}>About Us</MobileNavLink>
          <MobileNavLink to="/services" $active={isActive("/services")}>Services</MobileNavLink>
          <MobileNavLink to="/properties" $active={isActive("/properties")}>Properties</MobileNavLink>
            <MobileNavLink to="/team" $active={isActive("/team")}>Team</MobileNavLink>
          <MobileNavLink to="/gallery" $active={isActive("/gallery")}>Gallery</MobileNavLink>
          <MobileNavLink to="/contact" $active={isActive("/contact")}>Contact Us</MobileNavLink>
          <MobileActionButton to="/contact">
            <PhoneCall size={18} /> Book Inspection
          </MobileActionButton>
        </MobileDrawer>
      </NavContent>
    </NavContainer>
  );
};

export default Header;