import React from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import { ShieldCheck, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import p1 from '../images/p1.jpeg'

const SectionContainer = styled.section`
  padding: 6rem 5rem;
  background-color: #f8fafc;
  color: #0a192f;
  position: relative;
  overflow: hidden;

  @media (max-width: 968px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.25rem;
  }
`;

const GridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTag = styled.span`
  color: #d4af37;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 2px;
    background-color: #d4af37;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.25;
  color: #0a192f;

  span {
    color: #d4af37;
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.7;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.5rem;
`;

const BulletItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;

  svg {
    color: #d4af37;
    flex-shrink: 0;
  }
`;

const ImageColumn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ImageCardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  
//   overflow: hidden;
  box-shadow: 0 20px 30px -10px rgba(10, 25, 47, 0.15);

  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
border-radius: 12px;
    &:hover {
      transform: scale(1.03);
    }
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  bottom: 2rem;
  left: -2rem;
  background: #0a192f;
  color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-left: 4px solid #d4af37;
  max-width: 260px;


  @media (max-width: 768px) {
    left: 1rem;
    bottom: 1rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 700;
    color: #d4af37;
    margin-bottom: 0.25srem;
  }

  p {
    font-size: 0.85rem;
    color: #cbd5e1;
    margin: 0;
  }
`;

const AboutSummary = () => {
  return (
    <SectionContainer>
      <GridContainer>
        {/* Left Column: Text & Vision */}
        <ContentColumn>
          <Fade direction="left" triggerOnce>
            <SectionTag>Welcome to Ligabs Shelter LTD</SectionTag>
            <Title>
              Built on Vision, Secured by <span>Trust & Integrity</span>
            </Title>
            <Description>
              Under the visionary leadership of <strong>High Chief Gabriel Eze Chukwuemeka</strong>, Ligabs Shelter LTD has emerged as a beacon of reliability in the Nigerian real estate sector. Headquartered in Abuja, we specialize in turning land and property into enduring, high-yield investments.
            </Description>
            <Description>
              Whether through strategic land banking or structured property development, our core commitment is to provide absolute peace of mind, verified titles, and guaranteed long-term community value.
            </Description>

            <BulletList>
              <BulletItem>
                <CheckCircle2 size={20} /> 100% Verified Title & Secure Land Banking
              </BulletItem>
              <BulletItem>
                <CheckCircle2 size={20} /> Strategic Abuja Locations at Gudu District
              </BulletItem>
              <BulletItem>
                <CheckCircle2 size={20} /> Transparent & Professional Client Advisory
              </BulletItem>
            </BulletList>
          </Fade>
        </ContentColumn>

        {/* Right Column: Image & Floating Trust Badge */}
        <ImageColumn>
          <Fade direction="right" triggerOnce>
            <ImageCardWrapper>
              <img
                // src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                src={p1}
                alt="Luxury Real Estate Development by Ligabs Shelter"
              />
              <FloatingBadge>
                <h4>Strategic Land Banking</h4>
                <p>Securing profitable property assets for generations to come.</p>
              </FloatingBadge>
            </ImageCardWrapper>
          </Fade>
        </ImageColumn>
      </GridContainer>
    </SectionContainer>
  );
};

export default AboutSummary;