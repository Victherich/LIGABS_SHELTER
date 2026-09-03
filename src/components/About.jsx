import React from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import { 
  ShieldCheck, 
  MapPin, 
  Building2, 
  TrendingUp, 
  Briefcase, 
  Crown, 
  CheckCircle2, 
  HeartHandshake, 
  Target, 
  Compass,
  ArrowRight
} from "lucide-react";
import s9 from '../images/s9.jpeg'
import p2 from '../images/p2.jpeg'

const PageContainer = styled.div`
  background-color: #f8fafc;
  color: #0a192f;
  overflow-x: hidden;
`;

/* Page Header Banner */
const HeroHeader = styled.section`
  position: relative;
  height: 60vh;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(10, 25, 47, 0.8), 
      rgba(10, 25, 47, 0.9)
    ),
    url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80") 
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
  font-size: clamp(2.5rem, 4.5vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;

  span {
    color: #d4af37;
  }
`;

const HeaderSubtitle = styled.p`
  font-size: 1.1rem;
  color: #cbd5e1;
  max-width: 650px;
`;

/* Section Layouts */
const Section = styled.section`
  padding: 6rem 5rem;
  position: relative;

  @media (max-width: 968px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.25rem;
  }
`;

const DarkSection = styled(Section)`
  background-color: #0a192f;
  color: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

/* Corporate Story Section */
const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    font-size: clamp(2rem, 3vw, 2.5rem);
    font-weight: 800;
    color: #0a192f;
    line-height: 1.25;

    span {
      color: #d4af37;
    }
  }

  p {
    font-size: 1.05rem;
    color: #475569;
    line-height: 1.7;
    margin: 0;
  }
`;

const SectionTag = styled.span`
  color: #d4af37;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ImageBox = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 30px -10px rgba(10, 25, 47, 0.15);

  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
  }
`;

/* Chairman Spotlight Section */
const ChairmanCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 16px;
  padding: 3rem;
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 3rem;
  align-items: center;
  backdrop-filter: blur(10px);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
  }
`;

const ChairmanImage = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ChairmanInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0;

    span {
      color: #d4af37;
      display: block;
      font-size: 1.1rem;
      font-weight: 600;
      margin-top: 0.25rem;
    }
  }

  p {
    font-size: 1.02rem;
    color: #cbd5e1;
    line-height: 1.7;
    margin: 0;
  }
`;

/* Vision & Mission Cards */
const VisionMissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VMCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 3rem 2.5rem;
  box-shadow: 0 10px 25px rgba(10, 25, 47, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #d4af37;
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: rgba(212, 175, 55, 0.15);
    color: #d4af37;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: #0a192f;
    margin: 0;
  }

  p {
    font-size: 1rem;
    color: #475569;
    line-height: 1.7;
    margin: 0;
  }
`;

/* What We Do Services Grid */
const ServicesHeader = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 10px 20px rgba(10, 25, 47, 0.04);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #d4af37;
    box-shadow: 0 15px 30px rgba(10, 25, 47, 0.1);

    .service-icon {
      background-color: #d4af37;
      color: #0a192f;
    }
  }

  .service-icon {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background-color: rgba(212, 175, 55, 0.15);
    color: #d4af37;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0a192f;
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.6;
    margin: 0;
  }
`;

/* Core Values Section */
const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px);
    border-color: #d4af37;
    background: rgba(255, 255, 255, 0.06);
  }

  .letter-badge {
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
  }

  h3 {
    font-size: 1.35rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    color: #94a3b8;
    line-height: 1.6;
    margin: 0;
  }
`;

const CoreValuesSummary = styled.div`
  text-align: center;
  margin-top: 3.5rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: #d4af37;
  background: rgba(212, 175, 55, 0.1);
  padding: 1.5rem 2rem;
  border-radius: 8px;
  border: 1px solid rgba(212, 175, 55, 0.3);
`;

/* Why Choose Us & Commitment Section */
const CommitmentBox = styled.div`
  background: linear-gradient(135deg, #0a192f 0%, #1e293b 100%);
  color: #ffffff;
  border-radius: 20px;
  padding: 5rem 4rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  .content-block {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
      font-size: clamp(2rem, 3vw, 2.6rem);
      font-weight: 800;
      color: #ffffff;

      span {
        color: #d4af37;
      }
    }

    p {
      font-size: 1.05rem;
      color: #cbd5e1;
      line-height: 1.7;
      margin: 0;
    }
  }

  .quotes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    div {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 2rem;
      border-radius: 12px;
      font-size: 1.05rem;
      font-weight: 600;
      color: #d4af37;
    }
  }
`;

const About = () => {
  return (
    <PageContainer>
      {/* 1. Page Header */}
      <HeroHeader>
        <HeaderContent>
          <Fade direction="down" triggerOnce>
            <SubtitleBadge>Ligabs Shelter LTD • Abuja</SubtitleBadge>
          </Fade>
          <Slide direction="up" triggerOnce>
            <MainTitle>
              Building Dreams. <span>Securing Futures.</span>
            </MainTitle>
          </Slide>
          <Fade direction="up" delay={200} triggerOnce>
            <HeaderSubtitle>
              Discover our story, our visionary leadership, and our unwavering commitment to sustainable real estate excellence.
            </HeaderSubtitle>
          </Fade>
        </HeaderContent>
      </HeroHeader>

      {/* 2. Corporate Story Section */}
      <Section>
        <Container>
          <StoryGrid>
            <Fade direction="left" triggerOnce>
              <StoryContent>
                <SectionTag>Who We Are</SectionTag>
                <h2>
                  Transforming Land Into <span>Enduring Value</span>
                </h2>
                <p>
                  At <strong>LIGABS SHELTER LTD</strong>, we believe real estate is more than buying andselling land or properties—it is about creating opportunities, building lasting value, and helping individuals and businesses secure a better future.
                </p>
                <p>
                  We are a forward-thinking real estate company focused on land acquisition, property development, property management, real estate investment, and secure land banking opportunities. Our goal is to connect people with strategic real estate investments while contributing to the development of quality properties and thriving communities.
                </p>
                <p>
                  We are committed to conducting our business with integrity, transparency, professionalism, and a strong understanding of our clients’ investment goals.
                </p>
              </StoryContent>
            </Fade>

            <Fade direction="right" triggerOnce>
              <ImageBox>
                <img
                //   src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                src={p2}  
                alt="Ligabs Shelter Corporate Office & Real Estate"
                />
              </ImageBox>
            </Fade>
          </StoryGrid>
        </Container>
      </Section>

      {/* 3. Chairman & Leadership Spotlight */}
      <DarkSection>
        <Container>
          <Fade direction="up" triggerOnce>
            <ChairmanCard>
              <ChairmanImage>
                <img
                  src={s9}
                  alt="High Chief Gabriel Eze Chukwuemeka"
                />
              </ChairmanImage>
              <ChairmanInfo>
                <SectionTag>Executive Leadership</SectionTag>
                <h3>
                  High Chief Gabriel Eze Chukwuemeka
                  <span>Company Owner & Chairman</span>
                </h3>
                <p>
                  Under the visionary guidance of High Chief Gabriel Eze Chukwuemeka, Ligabs Shelter LTD has established itself as a trusted name in the Nigerian property market. Headquartered at Suite 0-05/1-17 Business Throne Plaza, Gudu District, Abuja, his leadership inspires our unwavering dedication to integrity, structural growth, and generational wealth creation.
                </p>
                <p>
                  "We don't just see land as property. We see possibilities, we develop opportunities, and we build relationships that last for generations."
                </p>
              </ChairmanInfo>
            </ChairmanCard>
          </Fade>
        </Container>
      </DarkSection>

      {/* 4. Vision & Mission Section */}
      <Section>
        <Container>
          <VisionMissionGrid>
            <Fade direction="left" triggerOnce>
              <VMCard>
                <div className="icon-wrapper">
                  <Compass size={32} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  Is to be a leading and trusted real estate company, transforming land and property into sustainable investments, quality developments, and thriving communities that create lasting value for generations.
                </p>
              </VMCard>
            </Fade>

            <Fade direction="right" triggerOnce>
              <VMCard>
                <div className="icon-wrapper">
                  <Target size={32} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To acquire, develop, manage, and invest in strategic real estate assets while providing secure and profitable land banking opportunities for individuals, businesses, and institutional investors.
                </p>
              </VMCard>
            </Fade>
          </VisionMissionGrid>
        </Container>
      </Section>

      {/* 5. What We Do Section */}
      <Section style={{ backgroundColor: "#ffffff" }}>
        <Container>
          <Fade direction="down" triggerOnce>
            <ServicesHeader>
              <SectionTag>Core Capabilities</SectionTag>
              <h2>
                What <span>We Do</span>
              </h2>
              <p>
                Comprehensive real estate solutions tailored to secure your assets and accelerate long-term financial growth.
              </p>
            </ServicesHeader>
          </Fade>

          <ServicesGrid>
            <Fade direction="up" delay={100} triggerOnce>
              <ServiceCard>
                <div className="service-icon"><MapPin size={24} /></div>
                <h3>Land Acquisition & Sales</h3>
                <p>We provide opportunities for individuals and investors to acquire strategically located land with potential for long-term appreciation and development.</p>
              </ServiceCard>
            </Fade>

            <Fade direction="up" delay={200} triggerOnce>
              <ServiceCard>
                <div className="service-icon"><Building2 size={24} /></div>
                <h3>Property Development</h3>
                <p>We transform carefully selected land into functional, modern, and quality residential and commercial developments designed to meet evolving needs.</p>
              </ServiceCard>
            </Fade>

            <Fade direction="up" delay={300} triggerOnce>
              <ServiceCard>
                <div className="service-icon"><TrendingUp size={24} /></div>
                <h3>Real Estate Investment</h3>
                <p>We help individuals, businesses, and investors explore real estate opportunities designed to support wealth creation and long-term asset growth.</p>
              </ServiceCard>
            </Fade>

            <Fade direction="up" delay={400} triggerOnce>
              <ServiceCard>
                <div className="service-icon"><ShieldCheck size={24} /></div>
                <h3>Land Banking</h3>
                <p>Our land banking opportunities allow clients to secure strategic land today with the potential to benefit from future development and appreciation.</p>
              </ServiceCard>
            </Fade>

            <Fade direction="up" delay={500} triggerOnce>
              <ServiceCard>
                <div className="service-icon"><Briefcase size={24} /></div>
                <h3>Property Management</h3>
                <p>We provide professional property management solutions focused on protecting assets, maintaining properties, and maximizing their long-term value.</p>
              </ServiceCard>
            </Fade>
          </ServicesGrid>
        </Container>
      </Section>

      {/* 6. L-I-G-A-B-S Core Values Section */}
      <DarkSection>
        <Container>
          <Fade direction="down" triggerOnce>
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <SectionTag>Guiding Principles</SectionTag>
              <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
                The <span>L-I-G-A-B-S</span> Core Values
              </h2>
            </div>
          </Fade>

          <ValuesGrid>
            <Fade direction="up" delay={100} triggerOnce>
              <ValueCard>
                <div className="letter-badge">L</div>
                <h3>Leadership</h3>
                <p>We demonstrate visionary leadership, professionalism, and excellence in everything we do.</p>
              </ValueCard>
            </Fade>

            <Fade direction="up" delay={200} triggerOnce>
              <ValueCard>
                <div className="letter-badge">I</div>
                <h3>Integrity</h3>
                <p>We conduct our business with honesty, transparency, accountability, and ethical standards.</p>
              </ValueCard>
            </Fade>

            <Fade direction="up" delay={300} triggerOnce>
              <ValueCard>
                <div className="letter-badge">G</div>
                <h3>Growth</h3>
                <p>We pursue continuous growth and create opportunities that generate lasting value for our clients, investors, and communities.</p>
              </ValueCard>
            </Fade>

            <Fade direction="up" delay={400} triggerOnce>
              <ValueCard>
                <div className="letter-badge">A</div>
                <h3>Accountability</h3>
                <p>We take responsibility for our commitments, decisions, projects, and the value we deliver to our stakeholders.</p>
              </ValueCard>
            </Fade>

            <Fade direction="up" delay={500} triggerOnce>
              <ValueCard>
                <div className="letter-badge">B</div>
                <h3>Building Value</h3>
                <p>We transform land and property into valuable assets, quality developments, and sustainable investment opportunities.</p>
              </ValueCard>
            </Fade>

            <Fade direction="up" delay={600} triggerOnce>
              <ValueCard>
                <div className="letter-badge">S</div>
                <h3>Service Excellence</h3>
                <p>We are committed to exceptional customer service, ensuring that every client receives professionalism, respect, and satisfaction.</p>
              </ValueCard>
            </Fade>
          </ValuesGrid>

          <Fade direction="up" delay={700} triggerOnce>
            <CoreValuesSummary>
              LIGABS — Leading with Integrity, Growing with Accountability, Building for Sustainability.
            </CoreValuesSummary>
          </Fade>
        </Container>
      </DarkSection>

      {/* 7. Commitment & Goal Section */}
      <Section>
        <Container>
          <Fade direction="up" triggerOnce>
            <CommitmentBox>
              <div className="content-block">
                <SectionTag>Our Promise To You</SectionTag>
                <h2>
                  Making Real Estate Clear, Professional, & <span>Rewarding</span>
                </h2>
                <p>
                  At LIGABS SHELTER LTD, we understand that investing in real estate is a significant decision. That is why we are committed to making the process clear, professional, and rewarding for our clients. Whether you are purchasing your first piece of land, looking for an investment opportunity, developing a property, or seeking professional property management, we are positioned to support you at every stage.
                </p>
              </div>

              <div className="quotes-grid">
                <div>We don’t just see land as property. We see possibilities.</div>
                <div>We don’t just develop buildings. We develop opportunities.</div>
                <div>We don’t just serve clients. We build relationships that last for generations.</div>
              </div>

              <div className="content-block" style={{ marginTop: "1rem" }}>
                <h3 style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: 700 }}>Our Ultimate Goal</h3>
                <p>
                  Our goal is to become a trusted name in the real estate industry by consistently delivering credible opportunities, quality developments, professional services, and lasting value. As we grow, we remain committed to responsible real estate practices and to playing our part in creating better places for people to live, work, invest, and thrive.
                </p>
              </div>
            </CommitmentBox>
          </Fade>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default About;