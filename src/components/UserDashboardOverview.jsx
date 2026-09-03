


import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Context } from './Context';
import { 
  FaUserGear, 
  FaFileInvoiceDollar, 
  FaShieldHalved,
  FaArrowUpRightFromSquare,
  FaShield, 
  FaPenToSquare, 
  FaCalendarCheck, 
  FaAddressCard, 
  FaCreditCard, 
  FaUsersViewfinder, 
  FaMapLocationDot,
  FaUserCheck, 
  FaBuildingShield,
  FaBuilding,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaIdBadge
} from 'react-icons/fa6';

const UserDashboardOverview = () => {
  const { api_url } = useContext(Context);
  const userInfo = useSelector((state) => state.userInfo);
  
  const [userData, setUserData] = useState({});
  const [loadingUser, setLoadingUser] = useState(false);

  console.log(userData)

  // Extract userId from Redux state (handling different potential key names)
  const currentUserId = userInfo?.userId || userInfo?.id;

  useEffect(() => {
    const fetchLatestUserData = async () => {
      if (!currentUserId) return;
      
      setLoadingUser(true);
      try {
        const response = await fetch(`${api_url}/get_user.php?userId=${currentUserId}`);
        const result = await response.json();

        if (result.success && result.user) {
          setUserData(result.user);
        }
      } catch (error) {
        console.error("Failed to sync client profile node.", error);
      } finally {
        setLoadingUser(false);
      }
    };

    fetchLatestUserData();
  }, [currentUserId, api_url]);

  const adminActions = [
    // { 
    //   path: "/userdashboard/manage-properties", 
    //   title: "Manage Properties", 
    //   badge: "Manage Properties", 
    //   badgeColor: "#d4af37",
    //   icon: <FaUserGear size={14} />, 
    //   color: "#d4af37",
    //   desc: "Monitor client profiles and database nodes."
    // },
    { 
      path: "/userdashboard/inquiries", 
      title: "View all Inquiries", 
      badge: "View all properites inquiries", 
      badgeColor: "#d4af37",
      icon: <FaFileInvoiceDollar size={14} />, 
      color: "#d4af37",
      desc: "Access and manage all property inquiries submitted by clients."
    },
  ];

  return (
    <OverviewWrapper>
      {/* SECTION 1: CUSTOMER RECOGNITION BLOCK */}
      <WelcomeHeaderBlock>
        <div>
          <WelcomeGreeting>Portal Overview</WelcomeGreeting>
          <ClientAccountName>{userData?.role === 'admin' ? "ADMIN: " : ""} {userData?.name || "Client Account"}</ClientAccountName>
        </div>
      </WelcomeHeaderBlock>

      {/* SECTION 2: CLIENT USER DETAILS CARD */}
      <UserDetailsContainer>
        <SectionHeadingLabel>Profile Details</SectionHeadingLabel>
        <ProfileDetailsCard>
          <ProfileDetailRow>
            <DetailItem>
              <FaUser size={14} className="detail-icon" />
              <div>
                <DetailLabel>Full Name</DetailLabel>
                <DetailValue>{loadingUser ? "Syncing..." : (userData?.name || "N/A")}</DetailValue>
              </div>
            </DetailItem>
            <DetailItem>
              <FaEnvelope size={14} className="detail-icon" />
              <div>
                <DetailLabel>Email Address</DetailLabel>
                <DetailValue>{loadingUser ? "Syncing..." : (userData?.email || "N/A")}</DetailValue>
              </div>
            </DetailItem>
          </ProfileDetailRow>

          <ProfileDetailRow>
            <DetailItem>
              <FaPhone size={14} className="detail-icon" />
              <div>
                <DetailLabel>Phone Number</DetailLabel>
                <DetailValue>{loadingUser ? "Syncing..." : (userData?.phone || userData?.phone_number || "N/A")}</DetailValue>
              </div>
            </DetailItem>
            <DetailItem>
              <FaIdBadge size={14} className="detail-icon" />
              <div>
                <DetailLabel>Account Status / Role</DetailLabel>
                <DetailValue>{userData?.role?.toUpperCase() || "STANDARD CLIENT"}</DetailValue>
              </div>
            </DetailItem>
          </ProfileDetailRow>
        </ProfileDetailsCard>
      </UserDetailsContainer>

      {/* SECTION 3: ADMIN ACTIONS (If Admin) */}
      {userData?.role === 'admin' && (
        <>
          <SectionHeadingLabel>Administrative Management</SectionHeadingLabel>
          <ServiceTileGridStructure>
            {adminActions.map((service, index) => (
              <ServiceInteractiveCard key={index} to={service.path}>
                <ActionIconBoundary themeColor={service.color}>
                  {service.icon}
                </ActionIconBoundary>
                <ServiceCardTextContainer>
                  <ServiceCardTitleGroup>
                    <h4>{service.title}</h4>
                    <FaArrowUpRightFromSquare size={10} className="launch-icon" />
                  </ServiceCardTitleGroup>
                  <p>{service.desc}</p>
                </ServiceCardTextContainer>
              </ServiceInteractiveCard>
            ))}
          </ServiceTileGridStructure>
        </>
      )}
    </OverviewWrapper>
  );
};

export default UserDashboardOverview;

/* -------------------------------------------------------------------------- */
/* STYLED HOOK COMPONENT ELEMENTS (Ligabs Shelter Theme: Navy & Gold)        */
/* -------------------------------------------------------------------------- */

const OverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const WelcomeHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #0a192f 0%, #1c3b6b 100%);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  color: #ffffff;
`;

const WelcomeGreeting = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #d4af37;
  margin: 0;
`;

const ClientAccountName = styled.h2`
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.02em;
`;

const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ProfileDetailsCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
`;

const ProfileDetailRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;

  .detail-icon {
    color: #d4af37;
    margin-top: 3px;
    flex-shrink: 0;
  }
`;

const DetailLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: #64748b;
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

const DetailValue = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  color: #0a192f;
  display: block;
  margin-top: 2px;
`;

const SectionHeadingLabel = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #1c3b6b;
  margin: 0.5rem 0 0 0;
`;

const ServiceTileGridStructure = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceInteractiveCard = styled(Link)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.25rem;
  text-decoration: none;
  transition: all 0.2s ease;

  .launch-icon {
    color: #94a3b8;
    transition: color 0.2s ease;
  }

  &:hover {
    border-color: #d4af37;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(10, 25, 47, 0.05);
    
    .launch-icon {
      color: #d4af37;
    }
  }
`;

const ActionIconBoundary = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${props => props.themeColor === '#d4af37' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(28, 59, 107, 0.1)'};
  border: 1px solid ${props => props.themeColor === '#d4af37' ? 'rgba(212, 175, 55, 0.3)' : 'rgba(28, 59, 107, 0.2)'};
  svg { color: ${props => props.themeColor}; }
`;

const ServiceCardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;

  p {
    font-size: 0.82rem;
    line-height: 1.4;
    color: #64748b;
    margin: 0;
  }
`;

const ServiceCardTitleGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  h4 {
    font-size: 0.95rem;
    font-weight: 700;
    color: #0a192f;
    margin: 0;
  }
`;