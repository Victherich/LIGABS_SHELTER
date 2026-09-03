import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { ArrowRight, Crown, Shield, Users } from "lucide-react";
import s9 from '../images/s9.jpeg'
// import s10 from '../images/s10.jpeg'
import s8 from '../images/s8.jpeg'
import s7 from '../images/s7.jpeg'


const SectionContainer = styled.section`
  padding: 6rem 5rem;
  background-color: #f8fafc;
  color: #0a192f;

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

const TopHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderText = styled.div`
  max-width: 600px;
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
  color: #0a192f;

  span {
    color: #d4af37;
  }
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
`;

const ViewAllButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #0a192f;
  color: #d4af37;
  padding: 0.9rem 1.8rem;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(10, 25, 47, 0.15);

  &:hover {
    background-color: #1e293b;
    transform: translateY(-3px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const LeaderCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(10, 25, 47, 0.06);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 35px -10px rgba(10, 25, 47, 0.12);
    border-color: rgba(212, 175, 55, 0.4);

    img {
      transform: scale(1.05);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 320px;
  overflow: hidden;
  background-color: #0a192f;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.5s ease;
  }
`;

const RoleBadge = styled.div`
//   position: absolute;
//   bottom: 1rem;
//   left: 1rem;
  background-color: rgba(10, 25, 47, 0.85);
  color: #d4af37;
  border: 1px solid rgba(212, 175, 55, 0.4);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const CardContent = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LeaderName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0a192f;
  margin: 0;
`;

const LeaderTitleDesc = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
  margin: 0;
`;

const leadersData = [
  {
    name: "High Chief Gabriel Eze Chukwuemeka",
    role: "Company Owner & Chairman",
    description: "Visionary leader steering the corporate strategic direction, land acquisition, and sustainable real estate development.",
    image: s9,
    icon: <Crown size={14} />,
  },
  {
    name: "Mr. Doncharles Arinze",
    role: "Company Manager",
    description: "Directs day-to-day corporate operations, client relations, and administrative project workflows.",
    image: s8,
    icon: <Shield size={14} />,
  },
  {
    name: "Mr. Joseph Ugwuzion",
    role: "Marketing Manager",
    description: "Leads property marketing initiatives, investment portfolio outreach, and real estate market expansion.",
    image: s7,
    icon: <Users size={14} />,
  },
];

const LeadershipPreview = () => {
  return (
    <SectionContainer>
      <ContentWrapper>
        {/* Top Header & CTA Button */}
        <TopHeaderRow>
          <Fade direction="left" triggerOnce>
            <HeaderText>
              <SectionTag>Executive Leadership</SectionTag>
              <Title>
                Meet The Minds Behind <span>Ligabs Shelter</span>
              </Title>
              <Subtitle>
                Our experienced leadership team combines decades of business acumen with absolute dedication to service excellence.
              </Subtitle>
            </HeaderText>
          </Fade>
          <Fade direction="right" triggerOnce>
            <ViewAllButton href="/team">
              View Full Team & Management <ArrowRight size={18} />
            </ViewAllButton>
          </Fade>
        </TopHeaderRow>

        {/* Leaders Grid */}
        <GridContainer>
          {leadersData.map((leader, index) => (
            <Fade key={index} direction="up" delay={index * 150} triggerOnce>
              <LeaderCard>
                <ImageWrapper>
                  <img src={leader.image} alt={leader.name} />
                
                </ImageWrapper>
                <CardContent>
                      <RoleBadge>
                    {leader.icon} {leader.role}
                  </RoleBadge>
                  <LeaderName>{leader.name}</LeaderName>
                  <LeaderTitleDesc>{leader.description}</LeaderTitleDesc>
                </CardContent>
              </LeaderCard>
            </Fade>
          ))}
        </GridContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default LeadershipPreview;