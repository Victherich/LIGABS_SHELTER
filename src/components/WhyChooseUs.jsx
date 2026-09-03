import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { ShieldCheck, MapPin, Users, Award, CheckCircle } from "lucide-react";

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

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
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

/* Stats Bar Grid */
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 16px;
  padding: 3rem 2rem;
  backdrop-filter: blur(10px);
`;

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  h3 {
    font-size: clamp(2.2rem, 3vw, 3rem);
    font-weight: 800;
    color: #d4af37;
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    color: #94a3b8;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }
`;

/* Why Choose Us Features Grid */
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #d4af37;
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);

    .icon-box {
      background-color: #d4af37;
      color: #0a192f;
    }
  }
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background-color: rgba(212, 175, 55, 0.15);
  color: #d4af37;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
`;

const statsData = [
  { number: "100%", label: "Verified Titles" },
  { number: "Abuja", label: "Strategic Locations" },
  { number: "Expert", label: "Management Team" },
  { number: "High ROI", label: "Land Banking" },
];

const featuresData = [
  {
    icon: <ShieldCheck size={26} />,
    title: "100% Secure & Verified Titles",
    description: "Every piece of land and property acquired through Ligabs Shelter comes with verified C of O, Registered Deeds, or Governor's Consent, eliminating all risks of encumbrance.",
  },
  {
    icon: <MapPin size={26} />,
    title: "Prime Abuja Locations",
    description: "Strategically situated in high-growth corridors like Gudu District, our estates guarantee rapid capital appreciation and maximum accessibility.",
  },
  {
    icon: <Users size={26} />,
    title: "Expert Professional Management",
    description: "Guided by executive leadership and seasoned property managers, we deliver seamless transactions, structured land banking, and stellar client care.",
  },
];

const WhyChooseUs = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        {/* Header */}
        <HeaderWrapper>
          <Fade direction="down" triggerOnce>
            <SectionTag>Why Partner With Us</SectionTag>
            <Title>
              Engineered For Trust & <span>Exceptional Returns</span>
            </Title>
            <Subtitle>
              Discover why discerning investors and property buyers choose Ligabs Shelter LTD as their trusted real estate partner in Abuja.
            </Subtitle>
          </Fade>
        </HeaderWrapper>

        {/* Stats Row */}
        <Fade direction="up" triggerOnce>
          <StatsGrid>
            {statsData.map((stat, index) => (
              <StatCard key={index}>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </StatCard>
            ))}
          </StatsGrid>
        </Fade>

        {/* Feature Cards Grid */}
        <FeaturesGrid>
          {featuresData.map((item, index) => (
            <Fade key={index} direction="up" delay={index * 150} triggerOnce>
              <FeatureCard>
                <IconBox className="icon-box">{item.icon}</IconBox>
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureDescription>{item.description}</FeatureDescription>
              </FeatureCard>
            </Fade>
          ))}
        </FeaturesGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default WhyChooseUs;