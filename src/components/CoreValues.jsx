import React from "react";
import styled from "styled-components";
import { Fade, Zoom } from "react-awesome-reveal";
import { Crown, ShieldCheck, TrendingUp, UserCheck, Building2, HeartHandshake } from "lucide-react";

const SectionContainer = styled.section`
  padding: 6rem 5rem;
  background-color: #0a192f;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 968px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.25rem;
  }
`;

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem auto;
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

  span {
    color: #d4af37;
  }
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #cbd5e1;
  line-height: 1.6;
`;

const GridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px);
    border-color: #d4af37;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);

    .letter-badge {
      background-color: #d4af37;
      color: #0a192f;
    }
  }
`;

const CardTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LetterBadge = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: rgba(212, 175, 55, 0.15);
  color: #d4af37;
  font-size: 1.5rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div`
  color: #d4af37;
`;

const CardTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
`;

const coreValuesData = [
  {
    letter: "L",
    title: "Leadership",
    description: "We demonstrate visionary leadership, professionalism, and excellence in everything we do.",
    icon: <Crown size={26} />,
  },
  {
    letter: "I",
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, accountability, and absolute ethical standards.",
    icon: <ShieldCheck size={26} />,
  },
  {
    letter: "G",
    title: "Growth",
    description: "We pursue continuous growth and create opportunities that generate lasting value for our clients, investors, and communities.",
    icon: <TrendingUp size={26} />,
  },
  {
    letter: "A",
    title: "Accountability",
    description: "We take responsibility for our commitments, decisions, projects, and the value we deliver to our stakeholders.",
    icon: <UserCheck size={26} />,
  },
  {
    letter: "B",
    title: "Building Value",
    description: "We transform land and property into valuable assets, quality developments, and sustainable investment opportunities.",
    icon: <Building2 size={26} />,
  },
  {
    letter: "S",
    title: "Service Excellence",
    description: "Estamos committed to exceptional customer service, ensuring that every client receives professionalism, respect, and care.",
    icon: <HeartHandshake size={26} />,
  },
];

const CoreValues = () => {
  return (
    <SectionContainer>
      <HeaderWrapper>
        <Fade direction="down" triggerOnce>
          <SectionTag>Our Guiding Principles</SectionTag>
          <Title>
            The <span>L-I-G-A-B-S</span> Core Values
          </Title>
          <Subtitle>
            The fundamental pillars that govern our operations, secure client investments, and drive our excellence in Abuja real estate.
          </Subtitle>
        </Fade>
      </HeaderWrapper>

      <GridContainer>
        {coreValuesData.map((val, index) => (
          <Fade key={val.letter} direction="up" delay={index * 100} triggerOnce>
            <ValueCard>
              <CardTopRow>
                <LetterBadge className="letter-badge">{val.letter}</LetterBadge>
                <IconWrapper>{val.icon}</IconWrapper>
              </CardTopRow>
              <CardTitle>{val.title}</CardTitle>
              <CardDescription>{val.description}</CardDescription>
            </ValueCard>
          </Fade>
        ))}
      </GridContainer>
    </SectionContainer>
  );
};

export default CoreValues;