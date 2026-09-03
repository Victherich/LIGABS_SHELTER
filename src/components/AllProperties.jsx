import React, { useContext } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { Context } from "./Context";

const SectionContainer = styled.section`
//   padding: 6rem 1rem;
  background-color: #f8fafc;
  color: #0a192f;

  @media (max-width: 968px) {
    // padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    // padding: 3rem 1.25rem;
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
  color: #0a192f;

  span {
    color: #d4af37;
  }
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
`;

const GridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const PropertyCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(10, 25, 47, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 35px -10px rgba(10, 25, 47, 0.15);
    border-color: rgba(212, 175, 55, 0.4);

    .property-img {
      transform: scale(1.05);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #0a192f;
  color: #d4af37;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 2;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const PriceTag = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: #d4af37;
  color: #0a192f;
  font-size: 0.95rem;
  font-weight: 800;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
`;

const ContentBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
`;

const LocationText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    color: #d4af37;
    flex-shrink: 0;
  }
`;

const PropertyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0a192f;
  margin: 0;
  line-height: 1.4;
`;

const PropertyDescription = styled.p`
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f1f5f9;
  margin: 0.5rem 0;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #059669;

  svg {
    flex-shrink: 0;
  }
`;

const DetailsButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #0a192f;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #d4af37;
  }
`;






const AllProperties = () => {
    const {propertiesData}=useContext(Context);
  return (
    <SectionContainer>
      <HeaderWrapper>
        <Fade direction="down" triggerOnce>
          <SectionTag>Investment Portfolios</SectionTag>
          <Title>
            Featured Properties & <span>Land Banking</span>
          </Title>
          <Subtitle>
            Explore our carefully vetted land assets and prime real estate investment opportunities engineered for high returns and absolute security.
          </Subtitle>
        </Fade>
      </HeaderWrapper>

      <GridContainer>
        {propertiesData.map((property, index) => (
          <Fade key={property.id} direction="up" delay={index * 150} triggerOnce>
            <PropertyCard>
              <ImageWrapper>
                {/* <CategoryBadge>{property.category}</CategoryBadge> */}
                <img className="property-img" src={property.image} alt={property.title} />
                {/* <PriceTag>{property.price}</PriceTag> */}
              </ImageWrapper>

              <ContentBody>
                <LocationText>
                  <MapPin size={16} /> {property.location}
                </LocationText>

                <PropertyTitle>{property.title}</PropertyTitle>
                <PropertyDescription>{property.description}</PropertyDescription>

                <Divider />

                <CardFooter>
                  <TitleStatus>
                    <ShieldCheck size={16} /> 
                    {/* {property.titleStatus} */}
                  </TitleStatus>
                  <DetailsButton href={`/inquire/${property.id}`}>
  Inquire Now <ArrowRight size={16} />
</DetailsButton>
                </CardFooter>
              </ContentBody>
            </PropertyCard>
          </Fade>
        ))}
      </GridContainer>
    </SectionContainer>
  );
};

export default AllProperties;