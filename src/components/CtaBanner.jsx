import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { PhoneCall, MapPin, Building2, ArrowRight } from "lucide-react";

const SectionContainer = styled.section`
  padding: 6rem 5rem;
  background-color: #f8fafc;

  @media (max-width: 968px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.25rem;
  }
`;

const BannerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #0a192f 0%, #1e293b 100%);
  border-radius: 20px;
  padding: 4rem 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px -15px rgba(10, 25, 47, 0.3);
  border: 1px solid rgba(212, 175, 55, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }
`;

const ContentBox = styled.div`
  max-width: 750px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTag = styled.span`
  color: #d4af37;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;

  span {
    color: #d4af37;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0;
`;

const InfoPillsRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const InfoPill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    color: #d4af37;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const PrimaryButton = styled.a`
  background-color: #d4af37;
  color: #0a192f;
  padding: 0.95rem 2.2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #f3c653;
    transform: translateY(-3px);
  }
`;

const SecondaryButton = styled.a`
  background-color: transparent;
  color: #ffffff;
  padding: 0.95rem 2.2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
    transform: translateY(-3px);
  }
`;

const CtaBanner = () => {
  return (
    <SectionContainer>
      <BannerWrapper>
        <Fade direction="up" triggerOnce>
          <ContentBox>
            <SectionTag>Take The Next Step</SectionTag>
            <Title>
              Ready To Secure Your Future With <span>Ligabs Shelter?</span>
            </Title>
            <Description>
              Visit our Abuja office or speak directly with our expert advisors to begin your land banking and real estate investment journey today.
            </Description>
          </ContentBox>
        </Fade>

        <Fade direction="up" delay={200} triggerOnce>
          <InfoPillsRow>
            <InfoPill>
              <MapPin size={18} /> Business Throne Plaza, Gudu District, Abuja
            </InfoPill>
            <InfoPill>
              <PhoneCall size={18} /> 08121886498
            </InfoPill>
          </InfoPillsRow>
        </Fade>

        <Fade direction="up" delay={400} triggerOnce>
          <ButtonGroup>
            <PrimaryButton href="tel:08121886498">
              Call Us Now <PhoneCall size={18} />
            </PrimaryButton>
            <SecondaryButton href="/contact">
              Visit / Contact Page
            </SecondaryButton>
          </ButtonGroup>
        </Fade>
      </BannerWrapper>
    </SectionContainer>
  );
};

export default CtaBanner;