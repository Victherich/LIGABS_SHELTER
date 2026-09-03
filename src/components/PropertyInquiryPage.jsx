import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Context } from "./Context";
import { FaUser, FaEnvelope, FaPhone, FaBuilding, FaLocationDot, FaTag, FaShieldHalved, FaPaperPlane, FaArrowLeft } from "react-icons/fa6";


const PropertyInquiryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { propertiesData, user, api_url } = useContext(Context);

  // Find the specific property dynamically based on the URL parameter id
  const property = propertiesData.find((p) => p.id === parseInt(id));


// Staff list for the "Referred By" dropdown option
const staffList = [
    { id: 1, name: "Select staff referrer...", value: "" },
    { id: 2, name: "Mr Doncharles Arinze", value: "Mr Doncharles Arinze" },
    { id: 3, name: "Mr Joseph Ugwuzion", value: "Mr Joseph Ugwuzion" },
    { id: 4, name: "Hon Cecelia Ikechukwu", value: "Hon Cecelia Ikechukwu" },
    { id: 5, name: "ENGR. Nweke Paschal Chigozie", value: "ENGR. Nweke Paschal Chigozie" },
    { id: 6, name: "Ifemeje Ozioma Alice", value: "Ifemeje Ozioma Alice" },
    { id: 7, name: "Nnaji Princess", value: "Nnaji Princess" },
    { id: 8, name: "Mmaduora Amarachi Linda", value: "Mmaduora Amarachi Linda" },
    { id: 9, name: "Chiefs Boniface Uchenna Umeh", value: "Chiefs Boniface Uchenna Umeh" },
    { id: 10, name: "NO REFERRER", value: "NO REFERRER" }
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    plots: 1,
    referredBy: staffList[0],
    message: ""
  });

  const [loading, setLoading] = useState(false);

  // Pre-fill user data if available from Context/Redux session
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.name || user.full_name || "",
        email: user.email || "",
        phone: user.phone || user.phone_number || ""
      }));
    }
  }, [user]);

  if (!property) {
    return (
      <ErrorContainer>
        <h2>Property Not Found</h2>
        <p>The investment portfolio or land asset you are trying to inquire about does not exist.</p>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft size={14} /> Return Back
        </BackButton>
      </ErrorContainer>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitInquiry = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      Swal.fire("Validation Error", "Please fill in all mandatory contact fields.", "warning");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        propertyId: property.id,
        propertyTitle: property.title,
        propertyLocation: property.location,
        // propertyPrice: property.price,
        ...formData
      };

      const response = await fetch(`${api_url}/submit_inquiry.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Inquiry Submitted!",
          text: "Your asset booking inquiry has been recorded. Our team will contact you shortly.",
          icon: "success",
          confirmButtonColor: "#0a192f"
        });
        
        // Reset message and plots if desired, or redirect back
        navigate("/");
      } else {
        Swal.fire("Submission Failed", result.error || "An error occurred on the server ledger.", "error");
      }
    } catch (err) {
      console.error("Network submission error:", err);
      Swal.fire("Network Error", "Unable to establish connection with the server processing node.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <ContentContainer>
        <BackLink onClick={() => navigate(-1)}>
          <FaArrowLeft size={12} /> Back to Portfolios
        </BackLink>

        <PageHeading>
          <h1>Asset Booking & <span>Inquiry Portal</span></h1>
          <p>Secure your investment position with Ligabs Shelters. Complete the form.</p>
        </PageHeading>

        <LayoutGrid>
          {/* Left Column: Dynamic Property Display Card (Images kept on Frontend) */}
          <PropertyDisplayCard>
            <PropertyImageContainer>
              <img src={property.image} alt={property.title} />
              {/* <BadgeTag>{property.category}</BadgeTag> */}
              {/* <PriceTag>{property.price}</PriceTag> */}
            </PropertyImageContainer>

            <PropertyInfoBox>
              <h3>{property.title}</h3>
<LocationText><FaLocationDot color="#d4af37" size={14} /> {property.location}</LocationText>

              <DescriptionText>{property.description}</DescriptionText>
              
              <MetaDivider />

              <MetaRow>
                {/* <span><FaShieldHalved color="#d4af37" size={14} /> Title Status:</span> */}
                {/* <strong>{property.titleStatus}</strong> */}
              </MetaRow>
            </PropertyInfoBox>
          </PropertyDisplayCard>

          {/* Right Column: Dynamic Inquiry & Referral Form */}
          <FormCard onSubmit={handleSubmitInquiry}>
            <h3>Investor Booking Form</h3>
            <p className="form-sub">Please review your credentials and select your staff reference agent.</p>

            <FormGroup>
              <label>Full Legal Name</label>
              <InputWrapper>
                <IconShell><FaUser size={13} color="#d4af37" /></IconShell>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <label>Email Address</label>
              <InputWrapper>
                <IconShell><FaEnvelope size={13} color="#d4af37" /></IconShell>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup>
              <label>Phone Number</label>
              <InputWrapper>
                <IconShell><FaPhone size={13} color="#d4af37" /></IconShell>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </InputWrapper>
            </FormGroup>

            <FormRow>
              <FormGroup>
                <label>Number of Plots / Units</label>
                <InputWrapper>
                  <IconShell><FaBuilding size={13} color="#d4af37" /></IconShell>
                  <input
                    type="number"
                    name="plots"
                    min="1"
                    value={formData.plots}
                    onChange={handleChange}
                    required
                  />
                </InputWrapper>
              </FormGroup>

              <FormGroup>
                <label>Referred By (Staff Agent)</label>
                <SelectWrapper>
                  <select
                    name="referredBy"
                    value={formData.referredBy}
                    onChange={handleChange}
                    required
                  >
                    {staffList.map((staff) => (
                      <option key={staff.id} value={staff.value}>{staff.name}</option>
                    ))}
                  </select>
                </SelectWrapper>
              </FormGroup>
            </FormRow>

            <FormGroup>
              <label>Special Notes / Inspection Instructions</label>
              <TextAreaWrapper
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention preferred inspection schedule or financing questions..."
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              <FaPaperPlane size={14} /> {loading ? "Transmitting Inquiry..." : "Submit Booking Inquiry"}
            </SubmitButton>
          </FormCard>
        </LayoutGrid>
      </ContentContainer>
    </PageWrapper>
  );
};

export default PropertyInquiryPage;

/* ================= STYLED COMPONENTS ================= */
const PageWrapper = styled.div`
  min-height: 90vh;
  background: #f8fafc;
  padding: 2rem 1rem;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #1c3b6b;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  padding: 0;

  &:hover {
    color: #d4af37;
  }
`;

const PageHeading = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
    color: #0a192f;
    font-weight: 800;
    margin: 0 0 6px 0;

    span {
      color: #d4af37;
    }
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    margin: 0;
  }
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PropertyDisplayCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(10, 25, 47, 0.04);
  height: fit-content;
`;

const PropertyImageContainer = styled.div`
  position: relative;
  height: 260px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BadgeTag = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(10, 25, 47, 0.85);
  color: #d4af37;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  backdrop-filter: blur(4px);
`;

const PriceTag = styled.span`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: #d4af37;
  color: #0a192f;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 800;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
`;

const PropertyInfoBox = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    color: #0a192f;
    margin: 0 0 8px 0;
    font-weight: 800;
  }
`;

const LocationText = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: #475569;
  font-weight: 600;
  margin-bottom: 12px;
`;

const DescriptionText = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0 0 1rem 0;
`;

const MetaDivider = styled.hr`
  border: 0;
  border-top: 1px solid #f1f5f9;
  margin: 1rem 0;
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;

  span {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #64748b;
  }

  strong {
    color: #0a192f;
  }
`;

const FormCard = styled.form`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(10, 25, 47, 0.04);

  h3 {
    font-size: 1.25rem;
    color: #0a192f;
    margin: 0 0 4px 0;
    font-weight: 800;
  }

  .form-sub {
    font-size: 0.8rem;
    color: #64748b;
    margin: 0 0 1.5rem 0;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 1rem;

  label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #1c3b6b;
    letter-spacing: 0.03em;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  overflow: hidden;

  &:focus-within {
    border-color: #d4af37;
  }

  input {
    width: 100%;
    border: none;
    padding: 0.65rem 0.75rem;
    font-size: 0.9rem;
    color: #0a192f;
    outline: none;
    background: transparent;
    font-weight: 600;
  }
`;

const SelectWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  overflow: hidden;

  &:focus-within {
    border-color: #d4af37;
  }

  select {
    width: 100%;
    border: none;
    padding: 0.7rem 0.75rem;
    font-size: 0.9rem;
    color: #0a192f;
    outline: none;
    background: transparent;
    font-weight: 600;
    cursor: pointer;
  }
`;

const IconShell = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  flex-shrink: 0;
`;

const TextAreaWrapper = styled.textarea`
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.9rem;
  color: #0a192f;
  outline: none;
  font-family: inherit;
  resize: vertical;
  background: transparent;

  &:focus {
    border-color: #d4af37;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0.8rem;
  margin-top: 0.5rem;
  background: linear-gradient(135deg, #0a192f 0%, #1c3b6b 100%);
  color: #d4af37;
  border: 1px solid rgba(212, 175, 55, 0.4);
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #0a192f;
    border-color: #d4af37;
  }

  &:disabled {
    background: #94a3b8;
    color: #ffffff;
    border-color: #94a3b8;
    cursor: not-allowed;
  }
`;

const ErrorContainer = styled.div`
  padding: 4rem 1rem;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;

  h2 {
    color: #0a192f;
    margin-bottom: 8px;
  }

  p {
    color: #64748b;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

const BackButton = styled.button`
  background: #0a192f;
  color: #d4af37;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;