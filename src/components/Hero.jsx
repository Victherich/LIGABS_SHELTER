// import React from "react";
// import styled from "styled-components";
// import { Fade, Slide } from "react-awesome-reveal";
// import p1 from '../images/p1.jpeg'
// import p2 from '../images/p2.jpeg'
// import p3 from '../images/p3.jpeg'
// import p4 from '../images/p4.jpeg'
// import p5 from '../images/p5.jpeg'
// import p6 from '../images/p6.jpeg'


// const HeroContainer = styled.section`
//   position: relative;
//   height: 100vh;
//   min-height: 650px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: linear-gradient(
//       rgba(10, 25, 47, 0.75), 
//       rgba(10, 25, 47, 0.85)
//     ),
//     url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80") 
//     no-repeat center center/cover;
//   padding: 0 5rem;
//   color: #ffffff;
//   text-align: center;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     padding: 0 1.5rem;
//   }
// `;

// const ContentWrapper = styled.div`
//   max-width: 900px;
//   z-index: 2;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1.5rem;
// `;

// const SubtitleBadge = styled.span`
//   background-color: rgba(212, 175, 55, 0.15);
//   color: #d4af37;
//   padding: 0.5rem 1.25rem;
//   font-size: 0.9rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   border-radius: 50px;
//   border: 1px solid rgba(212, 175, 55, 0.4);
// `;

// const MainTitle = styled.h1`
//   font-size: clamp(2.5rem, 5vw, 4.2rem);
//   font-weight: 800;
//   line-height: 1.2;
//   color: #ffffff;

//   span {
//     color: #d4af37;
//   }
// `;

// const Description = styled.p`
//   font-size: clamp(1rem, 2vw, 1.25rem);
//   color: #e2e8f0;
//   max-width: 700px;
//   line-height: 1.6;
//   margin-bottom: 1rem;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 1rem;
//   flex-wrap: wrap;
//   justify-content: center;

//   @media (max-width: 480px) {
//     width: 100%;
//     flex-direction: column;
//   }
// `;

// const PrimaryButton = styled.a`
//   background-color: #d4af37;
//   color: #0a192f;
//   padding: 0.9rem 2.2rem;
//   font-size: 1rem;
//   font-weight: 700;
//   border-radius: 4px;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);

//   &:hover {
//     background-color: #f3c653;
//     transform: translateY(-3px);
//     box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
//   }
// `;

// const SecondaryButton = styled.a`
//   background-color: transparent;
//   color: #ffffff;
//   padding: 0.9rem 2.2rem;
//   font-size: 1rem;
//   font-weight: 600;
//   border-radius: 4px;
//   text-decoration: none;
//   border: 2px solid rgba(255, 255, 255, 0.8);
//   transition: all 0.3s ease;

//   &:hover {
//     background-color: rgba(255, 255, 255, 0.1);
//     border-color: #ffffff;
//     transform: translateY(-3px);
//   }
// `;

// const Hero = () => {
//   return (
//     <HeroContainer>
//       <ContentWrapper>
//         <Fade direction="down" triggerOnce>
//           <SubtitleBadge>Ligabs Shelter LTD • Abuja</SubtitleBadge>
//         </Fade>

//         <Slide direction="up" triggerOnce damping={0.2}>
//           <MainTitle>
//             Transforming Land & Property Into <span>Sustainable Investments</span>
//           </MainTitle>
//         </Slide>

//         <Fade direction="up" delay={300} triggerOnce>
//           <Description>
//             Empowering your financial future through strategic land banking, secure property acquisitions, and thriving developments by High Chief Gabriel Eze Chukwuemeka.
//           </Description>
//         </Fade>

//         <Fade direction="up" delay={500} triggerOnce>
//           <ButtonGroup>
//             <PrimaryButton href="/properties">Explore Properties</PrimaryButton>
//             <SecondaryButton href="/contact">Book Consultation</SecondaryButton>
//           </ButtonGroup>
//         </Fade>
//       </ContentWrapper>
//     </HeroContainer>
//   );
// };

// export default Hero;





import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import p1 from '../images/p1.jpeg';
import p2 from '../images/p2.jpeg';
import p3 from '../images/p3.jpeg';
import p4 from '../images/p4.jpeg';
import p5 from '../images/p5.jpeg';
import p6 from '../images/p6.jpeg';

const slideImages = [p1, p2, p3, p4, p5, p6];

const zoomEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
`;

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5rem;
  color: #ffffff;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const BackgroundSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const SlideImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$image});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: ${props => (props.$active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
  animation: ${zoomEffect} 10s infinite ease-in-out;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SubtitleBadge = styled.span`
  background-color: rgba(10, 25, 47, 0.75);
  color: #d4af37;
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 50px;
  border: 1px solid rgba(212, 175, 55, 0.6);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`;

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.2;
  color: #ffffff;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0, 0, 0, 0.8);

  span {
    color: #ffd700;
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(212, 175, 55, 0.6);
  }
`;

const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #f8fafc;
  max-width: 700px;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9), 0 1px 2px rgba(0, 0, 0, 0.8);
  font-weight: 500;
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
  padding: 0.9rem 2.2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6), 0 0 15px rgba(212, 175, 55, 0.4);

  &:hover {
    background-color: #f3c653;
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.6);
  }
`;

const SecondaryButton = styled.a`
  background-color: rgba(10, 25, 47, 0.6);
  color: #ffffff;
  padding: 0.9rem 2.2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: #ffffff;
    transform: translateY(-3px);
  }
`;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 5000); // Changes image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer>
      <BackgroundSlider>
        {slideImages.map((img, index) => (
          <SlideImage
            key={index}
            $image={img}
            $active={index === currentIndex}
          />
        ))}
      </BackgroundSlider>

      <ContentWrapper>
        <Fade direction="down" triggerOnce>
          <SubtitleBadge>Ligabs Shelter LTD • Abuja</SubtitleBadge>
        </Fade>

        <Slide direction="up" triggerOnce damping={0.2}>
          <MainTitle>
            Transforming Land & Property Into <span>Sustainable Investments</span>
          </MainTitle>
        </Slide>

        <Fade direction="up" delay={300} triggerOnce>
          <Description>
            Empowering your financial future through strategic land banking, secure property acquisitions, and thriving developments by High Chief Gabriel Eze Chukwuemeka.
          </Description>
        </Fade>

        <Fade direction="up" delay={500} triggerOnce>
          <ButtonGroup>
            <PrimaryButton href="/properties">Explore Properties</PrimaryButton>
            <SecondaryButton href="/contact">Book Consultation</SecondaryButton>
          </ButtonGroup>
        </Fade>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;