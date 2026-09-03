import React, { useState } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Filter, 
  X, 
  PhoneCall, 
  CheckCircle2,
  Calendar,
  Building
} from "lucide-react";
import AllProperties from "./AllProperties";

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
    url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80") 
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
  padding: 5rem 5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 968px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.25rem;
  }
`;

/* Filter & Search Bar */
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
`;

const FilterButton = styled.button`
  background-color: ${({ active }) => (active ? "#0a192f" : "#ffffff")};
  color: ${({ active }) => (active ? "#d4af37" : "#475569")};
  border: 1px solid ${({ active }) => (active ? "#0a192f" : "#cbd5e1")};
  padding: 0.75rem 1.5rem;
  font-size: 0.92rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(10, 25, 47, 0.04);

  &:hover {
    background-color: #0a192f;
    color: #d4af37;
    border-color: #0a192f;
  }
`;

/* Property Listing Grid */
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const PropertyCard = styled.div`
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

const InquiryButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #0a192f;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: #d4af37;
  }
`;

/* Land Banking Explanatory Banner */
const ExplanatoryBanner = styled.div`
  background: linear-gradient(135deg, #0a192f 0%, #1e293b 100%);
  color: #ffffff;
  border-radius: 20px;
  padding: 4rem 3rem;
  margin: 6rem 0;
  border: 1px solid rgba(212, 175, 55, 0.3);
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 3rem 1.5rem;
  }

  .banner-text {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h2 {
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      font-weight: 800;
      color: #ffffff;
      line-height: 1.2;

      span {
        color: #d4af37;
      }
    }

    p {
      font-size: 1.02rem;
      color: #cbd5e1;
      line-height: 1.7;
      margin: 0;
    }
  }

  .banner-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1rem 1.25rem;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;

      svg {
        color: #d4af37;
        flex-shrink: 0;
      }
    }
  }
`;

/* Modal Styles */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(10, 25, 47, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1.5rem;
`;

const ModalContent = styled.div`
  background: #ffffff;
  color: #0a192f;
  width: 100%;
  max-width: 550px;
  border-radius: 16px;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px) {
    padding: 1.75rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f1f5f9;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #0a192f;
  transition: background 0.2s ease;

  &:hover {
    background: #e2e8f0;
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #0a192f;
  margin: 0;

  span {
    color: #d4af37;
    display: block;
    font-size: 0.95rem;
    font-weight: 600;
    margin-top: 0.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input, textarea {
    width: 100%;
    padding: 0.9rem 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: #d4af37;
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  button[type="submit"] {
    background-color: #d4af37;
    color: #0a192f;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #f3c653;
    }
  }
`;

const propertiesData = [
  {
    id: 1,
    title: "Throne Gold Estate Phase 1",
    category: "Land Banking",
    location: "Gudu District Extension, Abuja",
    price: "₦15,000,000 / Plot",
    description: "High-yield strategic land banking investment with rapid capital appreciation and high return projections.",
    titleStatus: "C of O / Verified",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Gomwalk Luxury Residence Plots",
    category: "Residential Plots",
    location: "Near Business Throne Plaza, Abuja",
    price: "₦28,000,000 / Plot",
    description: "Prime dry residential plots ready for immediate construction with fully installed infrastructure and perimeter fencing.",
    titleStatus: "Registered Deed",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Ligabs Green Valley Estate",
    category: "Land Banking",
    location: "Strategic Abuja Suburban Corridor",
    price: "₦8,500,000 / Plot",
    description: "An exceptional entry-level land banking asset designed for savvy investors seeking long-term generational wealth.",
    titleStatus: "Governors Consent",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Business Throne Commercial Hub",
    category: "Commercial",
    location: "Gudu District Central, Abuja",
    price: "₦65,000,000 / Plot",
    description: "Prime commercial plots strategically located for corporate offices, plazas, and high-footfall business setups.",
    titleStatus: "C of O / Verified",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Apex Prime Residential Haven",
    category: "Residential Plots",
    location: "Abuja Metropolitan Area",
    price: "₦22,000,000 / Plot",
    description: "A serene, gated community layout designed for family homes with top-tier security and paved internal roads.",
    titleStatus: "Registered Deed",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Future Gold Land Bank Corridor",
    category: "Land Banking",
    location: "Abuja Express Expansion Zone",
    price: "₦10,000,000 / Plot",
    description: "Secure futuristic land banking asset positioned in a high-growth zone slated for major governmental developments.",
    titleStatus: "Governors Consent",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
  },
];

const Properties = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProperty(null);
    setIsModalOpen(false);
  };

  const filteredProperties = filter === "All" 
    ? propertiesData 
    : propertiesData.filter(item => item.category === filter);

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
              Our Properties & <span>Land Banking Opportunities</span>
            </MainTitle>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <HeaderSubtitle>
              Explore our verified land assets and structured investment portfolios engineered for high returns and absolute security in Abuja.
            </HeaderSubtitle>
          </Fade>
        </HeaderContent>
      </HeroHeader>

      <Section>
        {/* 2. Filter & Search Bar */}
        {/* <Fade direction="up" triggerOnce>
          <FilterContainer>
            {["All", "Land Banking", "Residential Plots", "Commercial"].map((cat) => (
              <FilterButton 
                key={cat} 
                active={filter === cat} 
                onClick={() => setFilter(cat)}
              >
                {cat}
              </FilterButton>
            ))}
          </FilterContainer>
        </Fade> */}

        {/* 3. Property Listing Grid */}
        {/* <GridContainer>
          {filteredProperties.map((property, index) => (
            <Fade key={property.id} direction="up" delay={index * 100} triggerOnce>
              <PropertyCard>
                <ImageWrapper>
                  <CategoryBadge>{property.category}</CategoryBadge>
                  <img className="property-img" src={property.image} alt={property.title} />
                  <PriceTag>{property.price}</PriceTag>
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
                      <ShieldCheck size={16} /> {property.titleStatus}
                    </TitleStatus>
                    <InquiryButton onClick={() => handleOpenModal(property)}>
                      Request Details <ArrowRight size={16} />
                    </InquiryButton>
                  </CardFooter>
                </ContentBody>
              </PropertyCard>
            </Fade>
          ))}
        </GridContainer> */}

        <AllProperties/>

        {/* 4. Land Banking Explanatory Banner */}
        <Fade direction="up" triggerOnce>
          <ExplanatoryBanner>
            <div className="banner-text">
              <span style={{ color: "#d4af37", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>
                Secure Wealth Creation
              </span>
              <h2>Why Invest in Strategic <span>Land Banking</span> with Ligabs?</h2>
              <p>
                Land banking is one of the most reliable and profitable investment strategies. By acquiring verified land in high-growth corridors around Abuja today, you position your portfolio for exponential capital appreciation as infrastructure develops.
              </p>
              <p>
                Under the leadership of High Chief Gabriel Eze Chukwuemeka, Ligabs Shelter LTD ensures every land banking asset comes with absolute title security and transparent documentation.
              </p>
            </div>
            <div className="banner-features">
              <div>
                <CheckCircle2 size={20} /> 100% Guaranteed Title Documentation (C of O)
              </div>
              <div>
                <CheckCircle2 size={20} /> Rapid Capital Appreciation Corridors
              </div>
              <div>
                <CheckCircle2 size={20} /> Zero Risk of Encumbrance or Omo-Onile Issues
              </div>
              <div>
                <CheckCircle2 size={20} /> Flexible Payment Plans Available
              </div>
            </div>
          </ExplanatoryBanner>
        </Fade>
      </Section>

      {/* 5. Inquiry & Inspection Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>
              <X size={20} />
            </CloseButton>

            <ModalTitle>
              Property Inquiry & Inspection
              <span>{selectedProperty ? selectedProperty.title : "Ligabs Shelter Asset"}</span>
            </ModalTitle>

            <Form onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your inquiry has been sent to Ligabs Shelter management. We will contact you shortly.");
              handleCloseModal();
            }}>
              <input type="text" placeholder="Your Full Name" required />
              <input type="tel" placeholder="Phone Number (e.g., 08121886498)" required />
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Specify if you want to book an inspection or request pricing details..." required></textarea>
              <button type="submit">Submit Inquiry Now</button>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default Properties;