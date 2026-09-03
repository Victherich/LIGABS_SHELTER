import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Crown, Shield, Users, Award, Briefcase, Mail, Phone, ArrowRight } from "lucide-react";
import s9 from '../images/s9.jpeg'
import s8 from '../images/s8.jpeg'
import s7 from '../images/s7.jpeg'
import s6 from '../images/s6.jpeg'
import s5 from '../images/s5.jpeg'
import s4 from '../images/s4.jpeg'
import s3 from '../images/s3.jpeg'
import s2 from '../images/s2.jpeg'
import s1 from '../images/s1.jpeg'
import s2b from '../images/s2b.jpg'

const PageContainer = styled.div`
  background-color: #f8fafc;
  color: #0a192f;
  min-height: 100vh;
  overflow-x: hidden;
`;

/* Page Header */
const HeroHeader = styled.section`
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(10, 25, 47, 0.85), 
      rgba(10, 25, 47, 0.92)
    ),
    url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80") 
    no-repeat center center/cover;
  padding: 0 2rem;
  text-align: center;
  color: #ffffff;
`;

const HeaderContent = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SubtitleBadge = styled.span`
  background-color: rgba(212, 175, 55, 0.15);
  color: #d4af37;
  padding: 0.5rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 50px;
  border: 1px solid rgba(212, 175, 55, 0.4);
`;

const MainTitle = styled.h1`
  font-size: clamp(2.3rem, 4vw, 3.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;

  span {
    color: #d4af37;
  }
`;

const HeaderSubtitle = styled.p`
  font-size: 1.05rem;
  color: #cbd5e1;
  max-width: 650px;
`;

/* Section Structure */
const Section = styled.section`
  padding: 6rem 5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.25rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 800;
    color: #0a192f;

    span {
      color: #d4af37;
    }
  }

  p {
    font-size: 1.05rem;
    color: #475569;
    line-height: 1.6;
  }
`;

const SectionTag = styled.span`
  color: #d4af37;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

/* Executive Leadership Spotlight */
const ExecutiveCard = styled.div`
  background: linear-gradient(135deg, #0a192f 0%, #1e293b 100%);
  border: 1px solid rgba(212, 175, 55, 0.4);
  border-radius: 20px;
  padding: 3.5rem;
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 3.5rem;
  align-items: center;
  color: #ffffff;
  box-shadow: 0 25px 50px -15px rgba(10, 25, 47, 0.3);
  margin-bottom: 6rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.5rem;
  }
`;

const ExecutiveImage = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  background-color: #060e18;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ExecutiveInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h3 {
    font-size: clamp(1.8rem, 2.5vw, 2.4rem);
    font-weight: 800;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;

    span {
      color: #d4af37;
      display: block;
      font-size: 1.15rem;
      font-weight: 600;
      margin-top: 0.4rem;
    }
  }

  p {
    font-size: 1.02rem;
    color: #cbd5e1;
    line-height: 1.7;
    margin: 0;
  }
`;

const RoleBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(212, 175, 55, 0.15);
  color: #d4af37;
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  width: fit-content;
`;

/* Management Team Grid */
const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const TeamCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(10, 25, 47, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(212, 175, 55, 0.5);
    box-shadow: 0 20px 35px rgba(10, 25, 47, 0.12);

    img {
      transform: scale(1.05);
    }
  }
`;

const MemberImageWrapper = styled.div`
  position: relative;
  height: 280px;
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

const MemberCardBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const MemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0a192f;
  margin: 0;
`;

const MemberTitle = styled.p`
  font-size: 0.92rem;
  color: #d4af37;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MemberDesc = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0.5rem 0 0 0;
`;

/* Culture & Join Section */
const CultureBox = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 20px;
  padding: 5rem 4rem;
  margin-top: 6rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  h2 {
    font-size: clamp(2rem, 3vw, 2.6rem);
    font-weight: 800;
    color: #0a192f;
    margin: 0;

    span {
      color: #d4af37;
    }
  }

  p {
    font-size: 1.05rem;
    color: #475569;
    max-width: 700px;
    margin: 0;
    line-height: 1.7;
  }

  a {
    background-color: #0a192f;
    color: #d4af37;
    padding: 1rem 2.5rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(10, 25, 47, 0.2);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;

    &:hover {
      background-color: #1e293b;
      transform: translateY(-3px);
    }
  }
`;

const teamMembers = [
  {
    name: "Mr. Doncharles Arinze",
    title: "Manager",
    description: "Directs day-to-day corporate operations, administrative workflow execution, and client relationship management.",
    image: s8,
  },
  {
    name: "Mr. Joseph Ugwuzion",
    title: "Marketing Manager",
    description: "Leads strategic real estate marketing initiatives, investment portfolio outreach, and brand expansion campaigns.",
    image: s7,
  },
  {
    name: "Hon. Cecelia Ikechukwu",
    title: "Finance and Account",
    description: "Oversees financial planning, budgeting, transaction auditing, and accounting transparency across all corporate projects.",
    image:  s6,
  },
    {
    name: "Engr. Nweke Paschal Chigozie",
    // title: "Finance and Account",
    // description: "Oversees financial planning, budgeting, transaction auditing, and accounting transparency across all corporate projects.",
    image:  s5,
  },
   {
    name: "Ifemeje Ozioma Alice",
    title: "Secretary",
    // description: "Oversees financial planning, budgeting, transaction auditing, and accounting transparency across all corporate projects.",
    image:  s4,
  },
  {
    name: "Nnaji Princess Chisom",
    title: "Office Admin",
    description: "Manages front-office operations, client correspondence, scheduling, and overall administrative coordination.",
    image: s3,
  },
  {
    name: "Mmaduora Amarachi Linda",
    title: "Office Assistant",
    // description: "Directs civil engineering works, estate infrastructure development, and strict site execution standards. (Placeholder slot)",
    image: s2b,
  },
  {
    name: "Chiefs Boniface uchenna Umeh",
    // title: "Media & Publicity",
    // description: "Spearheads digital presence, public relations, property showcases, and corporate communications. (Placeholder slot)",
    image: s1,
  },
];

const Team = () => {
  return (
    <PageContainer>
      {/* 1. Page Header */}
      <HeroHeader>
        <HeaderContent>
          <Fade direction="down" triggerOnce>
            <SubtitleBadge>Ligabs Shelter LTD • Abuja</SubtitleBadge>
          </Fade>
          <Fade direction="up" triggerOnce>
            <MainTitle>
              Meet Our Leadership <span>& Team</span>
            </MainTitle>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <HeaderSubtitle>
              A dedicated team of professionals driven by integrity, operational excellence, and a passion for building lasting value.
            </HeaderSubtitle>
          </Fade>
        </HeaderContent>
      </HeroHeader>

      <Section>
        {/* 2. Executive Leadership Spotlight */}
        <Fade direction="up" triggerOnce>
          <ExecutiveCard>
            <ExecutiveImage>
              <img
                src={s9}
                alt="High Chief Gabriel Eze Chukwuemeka"
              />
            </ExecutiveImage>
            <ExecutiveInfo>
              <RoleBadge>
                <Crown size={15} /> Executive Chairman & Founder
              </RoleBadge>
              <h3>
                High Chief Gabriel Eze Chukwuemeka
                <span>Founder & Chairman</span>
              </h3>
              <p>
                High Chief Gabriel Eze Chukwuemeka provides the visionary leadership and strategic direction that defines Ligabs Shelter LTD. Under his guidance, the firm has grown into a beacon of trust, security, and exceptional real estate investments in Gudu District, Abuja and beyond.
              </p>
              <p>
                His commitment to corporate integrity and generational wealth creation ensures that every client receives credible investment opportunities and absolute peace of mind.
              </p>
            </ExecutiveInfo>
          </ExecutiveCard>
        </Fade>

        {/* 3. Management Team Grid */}
        <Fade direction="down" triggerOnce>
          <SectionHeader>
            <SectionTag>Executive Management</SectionTag>
            <h2>
              The Minds Driving <span>Ligabs Shelter</span>
            </h2>
            <p>
              Meet our seasoned executives and departmental leaders who manage day-to-day operations, marketing, finance, and site developments.
            </p>
          </SectionHeader>
        </Fade>

        <TeamGrid>
          {teamMembers.map((member, index) => (
            <Fade key={index} direction="up" delay={index * 120} triggerOnce>
              <TeamCard>
                <MemberImageWrapper>
                  <img src={member.image} alt={member.name} />
                </MemberImageWrapper>
                <MemberCardBody>
                  <MemberName>{member.name}</MemberName>
                  <MemberTitle>{member.title}</MemberTitle>
                  <MemberDesc>{member.description}</MemberDesc>
                </MemberCardBody>
              </TeamCard>
            </Fade>
          ))}
        </TeamGrid>

        {/* 4. Join Our Team / Culture Section */}
        <Fade direction="up" triggerOnce>
          <CultureBox>
            <SectionTag>Our Culture & Commitment</SectionTag>
            <h2>
              Built On Professionalism & <span>Service Excellence</span>
            </h2>
            <p>
              At Ligabs Shelter LTD, our corporate culture thrives on accountability, transparency, and a relentless pursuit of customer satisfaction. Whether you are partnering with our management team or consulting with our specialists, you experience firsthand our dedication to professionalism and ethical real estate practices.
            </p>
            <a href="/contact">
              Get In Touch With Our Team <ArrowRight size={18} />
            </a>
          </CultureBox>
        </Fade>
      </Section>
    </PageContainer>
  );
};

export default Team;