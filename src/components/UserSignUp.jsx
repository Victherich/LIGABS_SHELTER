import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaLock, 
  FaBuilding, 
  FaArrowRight, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaEye,
  FaEyeSlash,
  FaShieldAlt
} from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";
import Swal from 'sweetalert2';

const UserSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { api_url } = useContext(Context);

  // Local states for management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage(""); // Reset error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Basic frontend safety validations before posting
    if (formData.email !== formData.confirmEmail) {
      setErrorMessage("Emails do not match.");
      setLoading(false);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${api_url}/user_signup.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);

        Swal.fire({ 
          text: "Account Created, Please Login", 
          icon: "success",
          confirmButtonColor: "#0a192f"
        });
        navigate('/userlogin');

        // Reset form variables
        setFormData({ name: "", email: "", confirmEmail: "", phone: "", password: "", confirmPassword: "" });
      } else {
        setErrorMessage(result.error || "An unexpected error occurred.");
      }
    } catch (error) {
      setErrorMessage("Unable to bridge connectivity with authentication nodes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SignupContainer>
      <SplitWrapper>
        {/* LEFT MARKETING SIDE (Ligabs Shelter Branding) */}
        <MarketingPanel>
          <Fade triggerOnce>
            <Logo href="/">
              <FaBuilding size={22} /> LIGABS <span>SHELTER</span>
            </Logo>
            <h2>One Portal. Every Real Estate Solution.</h2>
            <p>Create an account today to securely track land banking assets, view property allocations, review documents, and manage your investments with absolute peace of mind.</p>
            <FeatureList>
              <FeatureItem><FaCheckCircle size={14} color="#d4af37"/> Fully Protected Client Data</FeatureItem>
              <FeatureItem><FaCheckCircle size={14} color="#d4af37"/> Instant Access to Portfolios</FeatureItem>
              <FeatureItem><FaCheckCircle size={14} color="#d4af37"/> Fast & Reliable Verification</FeatureItem>
            </FeatureList>
            <SecurityBadgeGroup>
              <FaShieldAlt size={12} /> <span>Secured Client Authentication Network</span>
            </SecurityBadgeGroup>
          </Fade>
        </MarketingPanel>

        {/* RIGHT SIGNUP FORM SIDE */}
        <FormPanel>
          <Zoom triggerOnce>
            <FormWrapper onSubmit={handleSubmit}>
              <FormTitleHeader>
                <h3>Create Account</h3>
                <p>Register securely in under 60 seconds.</p>
              </FormTitleHeader>

              {/* DYNAMIC ALERT BANNER ENGINE */}
              {errorMessage && (
                <AlertBanner variant="error">
                  <FaExclamationCircle size={14} /> <span>{errorMessage}</span>
                </AlertBanner>
              )}
              {successMessage && (
                <AlertBanner variant="success">
                  <FaCheckCircle size={14} /> <span>{successMessage}</span>
                </AlertBanner>
              )}

              {/* NAME FIELD */}
              <InputGroupField>
                <label htmlFor="name">Full Name</label>
                <InputWrapperInner>
                  <FaUser className="input-icon" />
                  <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                </InputWrapperInner>
              </InputGroupField>

              {/* EMAIL FIELDS CONTAINER */}
              <TwinGridRow>
                <InputGroupField>
                  <label htmlFor="email">Email Address</label>
                  <InputWrapperInner>
                    <FaEnvelope className="input-icon" />
                    <input type="email" id="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                  </InputWrapperInner>
                </InputGroupField>
                <InputGroupField>
                  <label htmlFor="confirmEmail">Confirm Email</label>
                  <InputWrapperInner>
                    <FaEnvelope className="input-icon" />
                    <input type="email" id="confirmEmail" name="confirmEmail" placeholder="john@example.com" value={formData.confirmEmail} onChange={handleChange} required />
                  </InputWrapperInner>
                </InputGroupField>
              </TwinGridRow>

              {/* PHONE NUMBER FIELD */}
              <InputGroupField>
                <label htmlFor="phone">Phone Number</label>
                <InputWrapperInner>
                  <FaPhone className="input-icon" />
                  <input type="tel" id="phone" name="phone" placeholder="08012345678" value={formData.phone} onChange={handleChange} required />
                </InputWrapperInner>
              </InputGroupField>

              {/* PASSWORD FIELDS CONTAINER */}
              <TwinGridRow>
                <InputGroupField>
                  <label htmlFor="password">Password</label>
                  <InputWrapperInner>
                    <FaLock className="input-icon" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      id="password" 
                      name="password" 
                      placeholder="••••••••" 
                      value={formData.password} 
                      onChange={handleChange} 
                      required 
                      minLength="6" 
                    />
                    <PasswordToggleButton 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                    </PasswordToggleButton>
                  </InputWrapperInner>
                </InputGroupField>
                <InputGroupField>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <InputWrapperInner>
                    <FaLock className="input-icon" />
                    <input 
                      type={showConfirmPassword ? "text" : "password"} 
                      id="confirmPassword" 
                      name="confirmPassword" 
                      placeholder="••••••••" 
                      value={formData.confirmPassword} 
                      onChange={handleChange} 
                      required 
                      minLength="6" 
                    />
                    <PasswordToggleButton 
                      type="button" 
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                    </PasswordToggleButton>
                  </InputWrapperInner>
                </InputGroupField>
              </TwinGridRow>

              {/* CONVERSION SUBMIT MECHANISM */}
              <SubmitButton type="submit" disabled={loading}>
                {loading ? "Authorizing Security Node..." : <>Initialize Account <FaArrowRight /></>}
              </SubmitButton>

              <FormFooterRoute>
                Already registered? <a href="/userlogin">Login</a>
              </FormFooterRoute>
            </FormWrapper>
          </Zoom>
        </FormPanel>
      </SplitWrapper>
    </SignupContainer>
  );
};

export default UserSignup;

/* -------------------------------------------------------------------------- */
/* STYLED COMPONENTS SCHEMES (Ligabs Shelter Theme: Navy #0a192f & Gold #d4af37) */
/* -------------------------------------------------------------------------- */

const SignupContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, sans-serif;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const SplitWrapper = styled.div`
  width: 100%;
  max-width: 1050px;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1.5rem;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  box-shadow: 0 20px 35px -5px rgba(10, 25, 47, 0.08);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const MarketingPanel = styled.div`
  background: linear-gradient(135deg, #0a192f 0%, #1c3b6b 100%);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  color: #ffffff;

  h2 {
    margin: 0;
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.6;
  }

  @media (max-width: 820px) {
    display: none; 
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 900;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: -0.03em;

  svg { color: #d4af37; }
  span {
    color: #d4af37;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #e2e8f0;
`;

const SecurityBadgeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  background: rgba(212, 175, 55, 0.15);
  color: #d4af37;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid rgba(212, 175, 55, 0.3);
`;

const FormPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const FormTitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h3 {
    margin: 0;
    font-size: clamp(1.4rem, 2.5vw, 1.8rem);
    font-weight: 800;
    color: #0a192f;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #64748b;
  }
`;

const InputGroupField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #1c3b6b;
  }
`;

const InputWrapperInner = styled.div`
  display: flex;
  align-items: center;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  gap: 10px;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #d4af37;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
  }

  .input-icon {
    color: #64748b;
    flex-shrink: 0;
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 0.95rem;
    color: #0a192f;
    padding: 0.4rem 0;

    &::placeholder { color: #94a3b8; }
  }
`;

const TwinGridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AlertBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.4;

  background: ${(props) => (props.variant === "error" ? "#fef2f2" : "#f0fdf4")};
  border: 1px solid ${(props) => (props.variant === "error" ? "#fca5a5" : "#86efac")};
  color: ${(props) => (props.variant === "error" ? "#b91c1c" : "#166534")};
`;

const SubmitButton = styled.button`
  border: none;
  background: #0a192f;
  color: #d4af37;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.9rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(10, 25, 47, 0.15);

  &:hover { 
    background: #1c3b6b;
    transform: translateY(-2px);
  }

  &:disabled {
    background: #cbd5e1;
    color: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`;

const FormFooterRoute = styled.p`
  margin: 0;
  font-size: 0.88rem;
  color: #64748b;
  text-align: center;

  a {
    color: #1c3b6b;
    text-decoration: none;
    font-weight: 700;

    &:hover { 
      color: #d4af37;
      text-decoration: underline; 
    }
  }
`;

const PasswordToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  flex-shrink: 0;

  &:hover {
    color: #d4af37;
  }
`;