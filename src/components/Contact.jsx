import React, { useState } from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
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
      rgba(10, 25, 47, 0.85), 
      rgba(10, 25, 47, 0.92)
    ),
    url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80") 
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

/* Section Layout */
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

/* Contact Cards Grid */
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`;

const InfoCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  box-shadow: 0 10px 25px rgba(10, 25, 47, 0.04);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: #d4af37;
    box-shadow: 0 15px 30px rgba(10, 25, 47, 0.1);

    .icon-box {
      background-color: #d4af37;
      color: #0a192f;
    }
  }

  .icon-box {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: rgba(212, 175, 55, 0.15);
    color: #d4af37;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #0a192f;
      margin: 0;
    }

    p, a {
      font-size: 0.95rem;
      color: #475569;
      line-height: 1.6;
      text-decoration: none;
      margin: 0;
    }

    a:hover {
      color: #d4af37;
    }
  }
`;

/* Interactive Form & Map Container */
const MainContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: stretch;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const FormWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 3rem 2.5rem;
  box-shadow: 0 15px 35px rgba(10, 25, 47, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #0a192f;
    margin: 0;

    span {
      color: #d4af37;
    }
  }

  p {
    font-size: 0.95rem;
    color: #64748b;
    margin: 0 0 1rem 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.88rem;
    font-weight: 600;
    color: #0a192f;
  }

  input, textarea {
    width: 100%;
    padding: 0.9rem 1rem;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #0a192f;
    background-color: #f8fafc;
    outline: none;
    transition: all 0.3s ease;

    &:focus {
      border-color: #d4af37;
      background-color: #ffffff;
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
    }
  }

  textarea {
    resize: vertical;
    min-height: 130px;
  }
`;

const SubmitButton = styled.button`
  background-color: #0a192f;
  color: #d4af37;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(10, 25, 47, 0.2);
  margin-top: 0.5rem;

  &:hover {
    background-color: #1e293b;
    transform: translateY(-2px);
  }
`;

const SuccessMessage = styled.div`
  background-color: rgba(46, 204, 113, 0.1);
  border: 1px solid #2ecc71;
  color: #27ae60;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

/* Map & Hours Section */
const MapColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MapBox = styled.div`
  flex: 1;
  min-height: 350px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 15px 35px rgba(10, 25, 47, 0.06);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const HoursCard = styled.div`
  background: #0a192f;
  color: #ffffff;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 16px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .hours-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #d4af37;
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.6;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
      display: flex;
      justify-content: space-between;
      font-size: 0.92rem;
      color: #94a3b8;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 0.4rem;

      span:last-child {
        color: #ffffff;
        font-weight: 600;
      }
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request or form submission handling
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 5000);
  };

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
              Get in Touch <span>With Us</span>
            </MainTitle>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <HeaderSubtitle>
              Have questions about land acquisition, investments, or property management? Reach out to our expert management team today.
            </HeaderSubtitle>
          </Fade>
        </HeaderContent>
      </HeroHeader>

      <Section>
        {/* 2. Contact Info Cards */}
        <Fade direction="down" triggerOnce>
          <SectionHeader>
            <SectionTag>Reach Us Directly</SectionTag>
            <h2>
              We Are Here To <span>Assist You</span>
            </h2>
            <p>
              Connect with our corporate office in Gudu District, Abuja via phone, email, or physical visitation.
            </p>
          </SectionHeader>
        </Fade>

        <InfoGrid>
          <Fade direction="up" delay={100} triggerOnce>
            <InfoCard>
              <div className="icon-box">
                <MapPin size={28} />
              </div>
              <div className="card-content">
                <h3>Our Office Address</h3>
                <p>Suite 0-05/1-17 Business Throne Plaza, Joseph Gomwalk Street, Gudu District, Abuja.</p>
              </div>
            </InfoCard>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <InfoCard>
              <div className="icon-box">
                <Phone size={28} />
              </div>
              <div className="card-content">
                <h3>Phone Support</h3>
                <a href="tel:08121886498">08121886498</a>
                <p>Available Mon - Sat for inquiries & advisory.</p>
              </div>
            </InfoCard>
          </Fade>

          <Fade direction="up" delay={300} triggerOnce>
            <InfoCard>
              <div className="icon-box">
                <Mail size={28} />
              </div>
              <div className="card-content">
                <h3>Email Address</h3>
                <a href="mailto:ligabshelters@gmail.com">ligabshelters@gmail.com</a>
                <p>Send us your detailed corporate or investment queries.</p>
              </div>
            </InfoCard>
          </Fade>
        </InfoGrid>

        {/* 3. Interactive Form & 4. Google Maps / 5. Business Hours */}
        <MainContactGrid>
          {/* Interactive Contact Form */}
          <Fade direction="left" triggerOnce>
            <FormWrapper>
              <h3>Send Us a <span>Message</span></h3>
              <p>Fill out the form below and our management team will get back to you promptly.</p>

              {submitted && (
                <SuccessMessage>
                  <CheckCircle2 size={20} /> Thank you! Your message has been sent successfully.
                </SuccessMessage>
              )}

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., Land Banking Inquiry"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or investment request here..."
                    required
                  />
                </FormGroup>

                <SubmitButton type="submit">
                  Send Message <ArrowRight size={18} />
                </SubmitButton>
              </Form>
            </FormWrapper>
          </Fade>

          {/* Map & Business Hours Column */}
          <MapColumn>
            <Fade direction="right" triggerOnce style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Google Maps Embed */}
              <MapBox>
                <iframe
                  title="Ligabs Shelter Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8564175317726!2d7.4932!3d8.9958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTkmNDUuOCJOIDTCsDI5JzM5LjUiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </MapBox>

              {/* Business Hours Note */}
              <HoursCard>
                <div className="hours-header">
                  <Clock size={22} /> Business Hours & Availability
                </div>
                <p>
                  Our physical office and phone support lines are open during the following hours for client consultations and site inspection bookings:
                </p>
                <ul>
                  <li><span>Monday – Friday:</span> <span>8:00 AM – 5:00 PM</span></li>
                  <li><span>Saturday:</span> <span>9:00 AM – 3:00 PM</span></li>
                  <li><span>Sunday:</span> <span>Closed (Appointments Only)</span></li>
                </ul>
              </HoursCard>
            </Fade>
          </MapColumn>
        </MainContactGrid>
      </Section>
    </PageContainer>
  );
};

export default Contact;