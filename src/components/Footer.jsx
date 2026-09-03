import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import logo from '../images/logo.png'

const FooterContainer = styled.footer`
  background-color: #060e18;
  color: #cbd5e1;
  padding: 5rem 5rem 2rem 5rem;
  border-top: 1px solid rgba(212, 175, 55, 0.2);

  @media (max-width: 968px) {
    padding: 4rem 2rem 2rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.25rem 1.5rem 1.25rem;
  }
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const BrandLogoText = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;

  span {
    color: #d4af37;
  }
`;

const BrandSubtitle = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
`;

const FooterTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 2px;
    background-color: #d4af37;
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const LinkItem = styled.li`
  a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease, transform 0.2s ease;
    display: inline-block;

    &:hover {
      color: #d4af37;
      transform: translateX(4px);
    }
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.5;

  svg {
    color: #d4af37;
    flex-shrink: 0;
    margin-top: 3px;
  }

  a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #d4af37;
    }
  }
`;

const CoreValuesTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
`;

const ValuePill = styled.span`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(212, 175, 55, 0.2);
  color: #d4af37;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0 auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  color: #64748b;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
  
  span {
    color: #d4af37;
    font-weight: 600;
  }
`;

const ChairmanCredit = styled.p`
  margin: 0;
  color: #94a3b8;
  font-style: italic;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Fade direction="up" triggerOnce>
        <FooterGrid>
          {/* Column 1: Brand Info */}
          <Col>
          <img src={logo} alt='logo' style={{width:"100px", borderRadius:"10px"}}/>
            <BrandLogoText>
              Ligabs <span>Shelter LTD</span>
            </BrandLogoText>
            <BrandSubtitle>
              Transforming land and property into sustainable investments, quality developments, and thriving communities under the visionary leadership of High Chief Gabriel Eze Chukwuemeka.
            </BrandSubtitle>
            <CoreValuesTags>
              <ValuePill>Leadership</ValuePill>
              <ValuePill>Integrity</ValuePill>
              <ValuePill>Growth</ValuePill>
              <ValuePill>Accountability</ValuePill>
              <ValuePill>Building Value</ValuePill>
              <ValuePill>Service Excellence</ValuePill>
            </CoreValuesTags>
          </Col>

          {/* Column 2: Quick Links */}
          <Col>
            <FooterTitle>Quick Links</FooterTitle>
            <LinkList>
              <LinkItem>
                <a href="/">Home</a>
              </LinkItem>
              <LinkItem>
                <a href="/about">About Us</a>
              </LinkItem>
              <LinkItem>
                <a href="/properties">Properties & Land Banking</a>
              </LinkItem>
              <LinkItem>
                <a href="/services">Our Services</a>
              </LinkItem>
              <LinkItem>
                <a href="/team">Management Team</a>
              </LinkItem>
              <LinkItem>
                <a href="/contact">Contact Us</a>
              </LinkItem>
            </LinkList>
          </Col>

          {/* Column 3: Investment Services */}
          <Col>
            <FooterTitle>Expert Services</FooterTitle>
            <LinkList>
              <LinkItem>
                <a href="/properties">Strategic Land Banking</a>
              </LinkItem>
              <LinkItem>
                <a href="/services">Property Acquisition & Sales</a>
              </LinkItem>
              <LinkItem>
                <a href="/services">Real Estate Investment Advisory</a>
              </LinkItem>
              <LinkItem>
                <a href="/services">Property & Facility Management</a>
              </LinkItem>
              <LinkItem>
                <a href="/contact">Site Inspection Booking</a>
              </LinkItem>
            </LinkList>
          </Col>

          {/* Column 4: Contact Information */}
          <Col>
            <FooterTitle>Abuja Headquarters</FooterTitle>
            <ContactInfoItem>
              <MapPin size={18} />
              <span>Suite 0-05/1-17 Business Throne Plaza, Joseph Gomwalk Street, Gudu District, Abuja</span>
            </ContactInfoItem>
            <ContactInfoItem>
              <Phone size={18} />
              <a href="tel:08121886498">08121886498</a>
            </ContactInfoItem>
            <ContactInfoItem>
              <Mail size={18} />
              <a href="mailto:ligabshelters@gmail.com">ligabshelters@gmail.com</a>
            </ContactInfoItem>
          </Col>
        </FooterGrid>

        {/* Bottom Copyright & Ownership Bar */}
        <BottomBar>
          <CopyrightText>
            &copy; {new Date().getFullYear()} <span>Ligabs Shelter LTD</span>. All Rights Reserved.
          </CopyrightText>
          <ChairmanCredit>
            Chairman & Founder: High Chief Gabriel Eze Chukwuemeka
          </ChairmanCredit>
        </BottomBar>
      </Fade>
    </FooterContainer>
  );
};

export default Footer;