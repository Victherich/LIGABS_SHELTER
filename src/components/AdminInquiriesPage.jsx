import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTable, FaArrowsAltH, FaEnvelope, FaPhone, FaUser, FaBuilding, FaMapMarkerAlt, FaTag } from "react-icons/fa";

const Container = styled.div`
  padding: 3rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  color: #0a192f;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const HeaderBox = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #0a192f;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
    font-size: 1rem;
  }
`;

const ScrollInstruction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #fef3c7;
  color: #92400e;
  padding: 0.6rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 6px;
  margin-bottom: 1rem;
  border: 1px solid #fde68a;
  
  @media (min-width: 1024px) {
    display: none; /* Hide on large screens where scrolling isn't forced */
  }
`;

const TableScrollContainer = styled.div`
  max-height: 650px; /* Enables vertical scrolling */
  overflow-y: auto;
  overflow-x: auto; /* Enables horizontal scrolling */
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  background: #ffffff;
  position: relative;

  /* Custom Scrollbar Styling */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap; /* Prevents text breaking so horizontal scroll activates properly */
  font-size: 0.92rem;

  thead {
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: #0a192f;
    color: #ffffff;
  }

  th, td {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid #e2e8f0;
  }

  th {
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  tbody tr {
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #f8fafc;
    }
  }
`;

const Badge = styled.span`
  background-color: rgba(212, 175, 55, 0.15);
  color: #92400e;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 50px;
  border: 1px solid rgba(212, 175, 55, 0.4);
`;

const MessageText = styled.div`
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #475569;
`;

const StatusMessage = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1.1rem;
  color: ${props => props.$error ? "#ef4444" : "#64748b"};
`;


const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  background-color: #ffffff;
  color: #0a192f;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #d4af37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;



const AdminInquiriesPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const [searchTerm, setSearchTerm] = useState(""); // <-- Add this new state

  
  useEffect(() => {
    fetch("https://ligabshelters.com/api/get_inquiries.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setInquiries(data.data);
        } else {
          setError(data.error || "Failed to load inquiries.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Network connection error.");
        setLoading(false);
      });
  }, []);



const filteredInquiries = inquiries.filter((item) => {
    const term = searchTerm.toLowerCase();
    const name = item.full_name ? item.full_name.toLowerCase() : "";
    const email = item.email ? item.email.toLowerCase() : "";
    return name.includes(term) || email.includes(term);
  });



  if (loading) return <StatusMessage>Loading property inquiries...</StatusMessage>;
  if (error) return <StatusMessage $error>Error: {error}</StatusMessage>;

  return (
    <Container>
      <HeaderBox>
        <h2>Property Booking Inquiries</h2>
        <p>Manage and track all incoming client property inspections and referral details.</p>
      </HeaderBox>

      <SearchInput 
        type="text"
        placeholder="Search by client name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ScrollInstruction>
        <FaArrowsAltH size={16} /> 
        <span>Swipe horizontally inside the table to view all columns on mobile</span>
      </ScrollInstruction>

      <TableScrollContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Property Title</th>
              <th>Location</th>
              <th>Price / Valuation</th>
              <th>Plots</th>
              <th>Client Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Referred By (Staff)</th>
              <th>Special Notes / Message</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            {filteredInquiries.length > 0 ? (
              filteredInquiries.map((item) => (
                <tr key={item.id}>
                  <td><strong>#{item.id}</strong></td>
                  <td><FaBuilding style={{ marginRight: '6px', color: '#d4af37' }} />{item.property_title}</td>
                  <td><FaMapMarkerAlt style={{ marginRight: '6px', color: '#64748b' }} />{item.property_location || "N/A"}</td>
                  <td><FaTag style={{ marginRight: '6px', color: '#10b981' }} />{item.property_price || "N/A"}</td>
                  <td><strong>{item.plots}</strong></td>
                  <td><FaUser style={{ marginRight: '6px', color: '#0a192f' }} />{item.full_name}</td>
                  <td><FaEnvelope style={{ marginRight: '6px', color: '#3b82f6' }} />{item.email}</td>
                  <td><FaPhone style={{ marginRight: '6px', color: '#10b981' }} />{item.phone}</td>
                  <td><Badge>{item.referred_by}</Badge></td>
                  <td><MessageText title={item.message}>{item.message || "None provided"}</MessageText></td>
                  <td>{new Date(item.created_at).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11" style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                  No property inquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </TableScrollContainer>
    </Container>
  );
};

export default AdminInquiriesPage;