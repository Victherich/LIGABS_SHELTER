import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  Briefcase, 
  PhoneCall, 
  CheckCircle2, 
  MapPin, 
  FileText, 
  Key, 
  ArrowRight 
} from "lucide-react";

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
      rgba(10, 25, 47, 0.82), 
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

/* Service Cards Grid */
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
`;

const ServiceCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 3rem 2.2rem;
  box-shadow: 0 10px 25px rgba(10, 25, 47, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: #d4af37;
    box-shadow: 0 20px 35px rgba(10, 25, 47, 0.12);

    .service-icon {
      background-color: #d4af37;
      color: #0a192f;
    }
  }

  .service-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: rgba(212, 175, 55, 0.15);
    color: #d4af37;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  h3 {
    font-size: 1.35rem;
    font-weight: 700;
    color: #0a192f;
    margin: 0;
  }

  p {
    font-size: 0.95rem;
    color: #475569;
    line-height: 1.7;
    margin: 0;
  }
`;

/* Process Section */
const ProcessWrapper = styled.div`
  background-color: #0a192f;
  color: #ffffff;
  border-radius: 20px;
  padding: 6rem 4rem;
  margin: 4rem 0;
  border: 1px solid rgba(212, 175, 55, 0.2);

  @media (max-width: 968px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.25rem;
  }

  .process-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 4rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-size: clamp(2rem, 3.5vw, 2.8rem);
      font-weight: 800;
      color: #ffffff;

      span {
        color: #d4af37;
      }
    }

    p {
      font-size: 1.05rem;
      color: #cbd5e1;
      line-height: 1.6;
    }
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #d4af37;
  }

  .step-number {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.5rem;
    font-weight: 800;
    color: rgba(212, 175, 55, 0.3);
  }

  .step-icon {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background-color: rgba(212, 175, 55, 0.15);
    color: #d4af37;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
  }

  p {
    font-size: 0.92rem;
    color: #94a3b8;
    line-height: 1.6;
    margin: 0;
  }
`;

/* Bottom CTA Banner */
const CtaBox = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 20px;
  padding: 4rem 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;

  h2 {
    font-size: clamp(2rem, 3vw, 2.5rem);
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
    max-width: 600px;
    margin: 0;
    line-height: 1.6;
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

const servicesData = [
  {
    title: "Real Estate Acquisition & Sales",
    description: "Buying and selling verified land and property with absolute transparency, secure titles, and seamless transaction execution.",
    icon: <Building2 size={28} />,
  },
  {
    title: "Strategic Land Banking",
    description: "High-return, secure long-term land investments in high-growth Abuja corridors designed for exponential capital appreciation.",
    icon: <TrendingUp size={28} />,
  },
  {
    title: "Property & Facility Management",
    description: "Professional oversight, tenant relations, and asset maintenance focused on protecting your investments and maximizing long-term value.",
    icon: <Briefcase size={28} />,
  },
  {
    title: "Real Estate Investment Advisory",
    description: "Expert consultancy and personalized guidance for individuals and corporate investors looking to build generational wealth safely.",
    icon: <ShieldCheck size={28} />,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We sit down with you to understand your real estate investment goals, budget, and preferred property milestones.",
    icon: <PhoneCall size={24} />,
  },
  {
    step: "02",
    title: "Inspection",
    description: "We guide you on a guided physical site visit to our Abuja estates and property locations for first-hand verification.",
    icon: <MapPin size={24} />,
  },
  {
    step: "03",
    title: "Documentation",
    description: "We handle transparent, secure legal documentation, including verified C of O, deeds, and payment processing.",
    icon: <FileText size={24} />,
  },
  {
    step: "04",
    title: "Handover",
    description: "Successful allocation and asset handover, marking the start of your secure real estate ownership or land banking journey.",
    icon: <Key size={24} />,
  },
];

const Services = () => {
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
              Our Professional <span>Services</span>
            </MainTitle>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <HeaderSubtitle>
              Delivering credibility, strategic land banking, and expert management solutions designed to secure your financial future.
            </HeaderSubtitle>
          </Fade>
        </HeaderContent>
      </HeroHeader>

      <Section>
        {/* 2. Service Cards Grid */}
        <Fade direction="down" triggerOnce>
          <SectionHeader>
            <SectionTag>Expertise & Capabilities</SectionTag>
            <h2>
              Comprehensive Real Estate <span>Solutions</span>
            </h2>
            <p>
              Explore our core professional offerings engineered to protect your assets and drive sustainable wealth creation.
            </p>
          </SectionHeader>
        </Fade>

        <ServicesGrid>
          {servicesData.map((service, index) => (
            <Fade key={index} direction="up" delay={index * 150} triggerOnce>
              <ServiceCard>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </ServiceCard>
            </Fade>
          ))}
        </ServicesGrid>

        {/* 3. Process Section */}
        <Fade direction="up" triggerOnce>
          <ProcessWrapper>
            <div className="process-header">
              <SectionTag>Step-by-Step Workflow</SectionTag>
              <h2>
                How Clients Work With <span>Ligabs Shelter</span>
              </h2>
              <p>
                A transparent, structured, and client-focused journey from your first inquiry to final property handover.
              </p>
            </div>

            <ProcessGrid>
              {processSteps.map((item, index) => (
                <ProcessCard key={index}>
                  <div className="step-number">{item.step}</div>
                  <div className="step-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </ProcessCard>
              ))}
            </ProcessGrid>
          </ProcessWrapper>
        </Fade>

        {/* 4. Bottom CTA */}
        <Fade direction="up" triggerOnce>
          <CtaBox>
            <h2>Ready to Secure Your Next <span>Investment?</span></h2>
            <p>
              Book an advisory session with our executive management team at our Gudu District Abuja office and let's build your future together.
            </p>
            <a href="tel:08121886498">
              Book Advisory Session <ArrowRight size={18} />
            </a>
          </CtaBox>
        </Fade>
      </Section>
    </PageContainer>
  );
};

export default Services;