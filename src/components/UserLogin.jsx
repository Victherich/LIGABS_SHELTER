import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userLogin } from "../Features/Slice";
import { 
  FaEnvelope, 
  FaLock, 
  FaBuilding, 
  FaArrowRight, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaShieldAlt
} from "react-icons/fa";
import { Fade, Zoom } from "react-awesome-reveal";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { api_url } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch(`${api_url}/user_login.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage("Authentication verified. Launching console...");
        
        dispatch(userLogin({
          userInfo: result.user,
          userToken: result.token
        }));
        navigate('/userdashboard/overview');

        setFormData({ email: "", password: "" });
      } else {
        setErrorMessage(result.error || "Access denied.");
      }
    } catch (error) {
      setErrorMessage("System pipeline gateway connection error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <SplitWrapper>
        {/* LEFT BRAND SIDE PANEL (Ligabs Shelter Theme) */}
        <MarketingPanel>
          <Fade triggerOnce>
            <Logo href="/">
              <FaBuilding size={22} /> LIGABS <span>SHELTER</span>
            </Logo>
            <h2>Welcome Back to Your Portal</h2>
            <p>Sign in to manage your real estate investments, view land banking properties, track documents, and review transactions instantly.</p>
            <SecurityBadgeGroup>
              <FaShieldAlt size={12} /> <span>100% Secure Client Portal Session</span>
            </SecurityBadgeGroup>
          </Fade>
        </MarketingPanel>

        {/* RIGHT INPUT AUTHENTICATION BOX */}
        <FormPanel>
          <Zoom triggerOnce>
            <FormWrapper onSubmit={handleSubmit}>
              <FormTitleHeader>
                <h3>Account Sign In</h3>
                <p>Provide your credentials to access your dashboard.</p>
              </FormTitleHeader>

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

              {/* EMAIL FIELD */}
              <InputGroupField>
                <label htmlFor="email">Email Address</label>
                <InputWrapperInner>
                  <FaEnvelope className="input-icon" />
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="name@domain.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </InputWrapperInner>
              </InputGroupField>

              {/* PASSWORD FIELD */}
              <InputGroupField>
                <FlexLabelRow>
                  <label htmlFor="password">Security Password</label>
                  <a href="/forgot-password" className="forgot-link">Forgot?</a>
                </FlexLabelRow>
                <InputWrapperInner>
                  <FaLock className="input-icon" />
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                  />
                </InputWrapperInner>
              </InputGroupField>

              {/* SUBMISSION BUTTON TRIGGER */}
              <SubmitButton type="submit" disabled={loading}>
                {loading ? "Verifying Secure Signature..." : <>Access Profile Dashboard <FaArrowRight /></>}
              </SubmitButton>

              <FormFooterRoute>
                New to Ligabs Shelter? <a href="/usersignup">Sign up</a>
              </FormFooterRoute>
            </FormWrapper>
          </Zoom>
        </FormPanel>
      </SplitWrapper>
    </LoginContainer>
  );
};

export default UserLogin;

/* -------------------------------------------------------------------------- */
/* STYLED COMPONENTS SCHEMES (Ligabs Shelter Theme: Navy #0a192f & Gold #d4af37) */
/* -------------------------------------------------------------------------- */

const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  font-family: system-ui, -apple-system, sans-serif;
`;

const SplitWrapper = styled.div`
  width: 100%;
  max-width: 950px;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 1.5rem;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
  box-shadow: 0 20px 35px -5px rgba(10, 25, 47, 0.08);

  @media (max-width: 768px) {
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
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.02em;
    line-height: 1.2;

    span {
      color: #d4af37;
    }
  }

  p {
    margin: 0;
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
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
  gap: 1.25rem;
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
  gap: 0.5rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: #1c3b6b;
  }
`;

const FlexLabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .forgot-link {
    font-size: 0.85rem;
    color: #1c3b6b;
    text-decoration: none;
    font-weight: 600;
    
    &:hover { 
      color: #d4af37;
      text-decoration: underline; 
    }
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