import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { FaUser, FaEnvelope, FaPhone, FaUserShield, FaPenToSquare, FaCheck, FaXmark } from "react-icons/fa6";
import { Context } from "./Context";
import { updateUserInfo } from "../Features/Slice"; // Adjust path to your Redux slice if needed

const UserProfilePage = () => {
  const { api_url } = useContext(Context);
  const dispatch = useDispatch();

  // Grab user info straight from Redux state
  const userInfo = useSelector((state) => state.userInfo || state.auth?.userInfo);
  const currentUserId = userInfo?.userId || userInfo?.id;

  const [loading, setLoading] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Local user profile state
  const [userData, setUserData] = useState(userInfo || {});

  // Local form inputs for editing
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });

  // Fetch the latest user record from the database on component load
  useEffect(() => {
    const fetchLatestUser = async () => {
      if (!currentUserId) return;
      
      setFetchingUser(true);
      try {
        const response = await fetch(`${api_url}/get_user.php?userId=${currentUserId}`);
        const result = await response.json();

        if (result.success && result.user) {
          setUserData(result.user);
          setFormData({
            name: result.user.name || "",
            phone: result.user.phone || ""
          });
        }
      } catch (error) {
        console.error("Failed to fetch latest user profile node.", error);
      } finally {
        setFetchingUser(false);
      }
    };

    fetchLatestUser();
  }, [currentUserId, api_url]);

  // Sync form inputs when userData changes or editing begins
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || "",
        phone: userData.phone || userData.phone_number || ""
      });
    }
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      Swal.fire("Validation Error", "Name and Phone fields cannot be left empty.", "warning");
      return;
    }

    setLoading(true);

    try {
      const cacheBuster = Date.now();
      const response = await fetch(`${api_url}/update_profile.php?_=${cacheBuster}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: currentUserId,
          name: formData.name,
          phone: formData.phone
        }),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire("Profile Updated", "Your changes have been saved successfully.", "success");
        
        // Construct updated user payload for local component state
        const updatedUserObject = {
          ...userData,
          name: formData.name,
          phone: formData.phone
        };

        setUserData(updatedUserObject);

        // Update Redux state cleanly using your slice action without touching auth tokens
        dispatch(updateUserInfo({
          name: formData.name,
          phone: formData.phone
        }));

        setIsEditing(false);
      } else {
        Swal.fire("Update Failed", data.error || "An error occurred on the server ledger.", "error");
      }
    } catch (err) {
      Swal.fire("Network Error", "Unable to establish synchronization with the backend server.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ProfileCard>
        {/* Profile Card Header Segment */}
        <HeaderRow>
          <div>
            <Title>Account Profile</Title>
            <Subtitle>Manage your Ligabs Shelter client records and security parameters.</Subtitle>
          </div>
          {!isEditing ? (
            <EditToggleButton onClick={() => setIsEditing(true)}>
              <FaPenToSquare size={12} /> Edit Profile
            </EditToggleButton>
          ) : (
            <CancelButton onClick={() => { 
              setIsEditing(false); 
              setFormData({ name: userData?.name || "", phone: userData?.phone || "" }); 
            }}>
              <FaXmark size={12} /> Cancel
            </CancelButton>
          )}
        </HeaderRow>

        <hr style={{ border: "0", borderTop: "1px solid rgba(212, 175, 55, 0.2)", margin: "1rem 0" }} />

        {/* Dynamic Interactive Processing Form */}
        <form onSubmit={handleUpdateProfile}>
          <GridFieldsStructure>
            
            {/* Field item: Full Name (Editable) */}
            <FieldBox>
              <Label>Full Name</Label>
              <InputGroup>
                <IconShell><FaUser size={13} color="#d4af37" /></IconShell>
                <InputField
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing || loading}
                  placeholder={fetchingUser ? "Syncing..." : "Enter full name"}
                />
              </InputGroup>
            </FieldBox>

            {/* Field item: Phone Number (Editable) */}
            <FieldBox>
              <Label>Phone Number</Label>
              <InputGroup>
                <IconShell><FaPhone size={13} color="#d4af37" /></IconShell>
                <InputField
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing || loading}
                  placeholder={fetchingUser ? "Syncing..." : "Enter phone number"}
                />
              </InputGroup>
            </FieldBox>

            {/* Read-Only Field item: Email Address */}
            <FieldBox>
              <Label>Email Address (Immutable)</Label>
              <InputGroup $disabled>
                <IconShell><FaEnvelope size={13} color="#94a3b8" /></IconShell>
                <InputField type="email" value={userData?.email || ""} disabled placeholder="N/A" />
              </InputGroup>
            </FieldBox>

            {/* Read-Only Field item: Core Account Role */}
            <FieldBox>
              <Label>System Authorization Role</Label>
              <InputGroup $disabled>
                <IconShell><FaUserShield size={13} color="#94a3b8" /></IconShell>
                <InputField type="text" value={(userData?.role || "client").toUpperCase()} disabled placeholder="CLIENT" />
              </InputGroup>
            </FieldBox>

          </GridFieldsStructure>

          {/* Action Trigger Save Changes Button */}
          {isEditing && (
            <SaveButton type="submit" disabled={loading}>
              <FaCheck size={13} /> {loading ? "Saving Records Updates..." : "Save Profile Changes"}
            </SaveButton>
          )}
        </form>
      </ProfileCard>
    </Container>
  );
};

export default UserProfilePage;

/* ===================== STYLED COMPONENT SYSTEM ===================== */
const Container = styled.div`
  min-height: 85vh;
  background: #f8fafc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
`;

const ProfileCard = styled.div`
  width: 100%;
  max-width: 750px;
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(10, 25, 47, 0.05);
  border: 1px solid #e2e8f0;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  color: #0a192f;
  margin: 0 0 4px 0;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
`;

const EditToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #0a192f;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #d4af37;
    color: #ffffff;
    border-color: #d4af37;
  }
`;

const CancelButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #475569;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #e2e8f0;
    color: #0a192f;
  }
`;

const GridFieldsStructure = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #1c3b6b;
  letter-spacing: 0.04em;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.$disabled ? "#f8fafc" : "#ffffff"};
  border: 1px solid ${props => props.$disabled ? "#e2e8f0" : "#cbd5e1"};
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: #d4af37;
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

const InputField = styled.input`
  width: 100%;
  border: none;
  padding: 0.6rem 0.75rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: #0a192f;
  outline: none;
  background: transparent;

  &:disabled {
    color: #64748b;
    cursor: not-allowed;
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background: linear-gradient(135deg, #0a192f 0%, #1c3b6b 100%);
  color: #d4af37;
  border: 1px solid rgba(212, 175, 55, 0.4);
  border-radius: 8px;
  font-size: 0.9rem;
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