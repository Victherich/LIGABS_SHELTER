import React, { use, useEffect, useState } from 'react'
import { createContext } from 'react'
import { useSelector } from 'react-redux';
import p1 from '../images/p1.jpeg'
import p2 from '../images/p2.jpeg'
import p3 from '../images/p3.jpeg'
import p4 from '../images/p4.jpeg'
import p5 from '../images/p5.jpeg'
import p6 from '../images/p6.jpeg'


export const Context = createContext();

const ContextProvider = ({children}) => {
  const userId = useSelector((state)=>state?.userInfo?.id)
const [user, setUser]=useState(null);

const api_url = "https://ligabshelters.com/api"

 console.log(user)


const fetchUserProfileById = async () => {
  if (!userId) {
    console.error("Pipeline halt: No valid userId passed to sync routing engine.");
    return null;
  }

  try {
    // Append the ID safely as a URL query parameter string
    const response = await fetch(`${api_url}/get_user_info.php?id=${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    if (response.ok&&data.success) {
      // Returns the clean data payload: { id, name, email, phone, balance }
     
     
setUser(data.userInfo)
      
    } else {
      console.warn("Server side profile pull rejection:", data.error || "Unknown Error");
      return null;
    }
  } catch (error) {
    console.error("Network structural error while contacting database stream:", error);
    return null;
  }
};

useEffect(()=>{
  fetchUserProfileById();
},[userId])

// useEffect(()=>{
//   fetchUserProfileById();
// },[])







const propertiesData = [
  {
    id: 1,
    title: "Throne Gold Estate Phase 1",
    category: "Land Banking",
    location: "Gudu District Extension, Abuja",
    price: "₦15,000,000 / Plot",
    description: "High-yield strategic land banking investment with rapid capital appreciation and high return projections.",
    titleStatus: "C of O / Verified",
    image: p1
  },
  {
    id: 2,
    title: "Gomwalk Luxury Residence Plots",
    category: "Residential Land",
    location: "Near Business Throne Plaza, Abuja",
    price: "₦28,000,000 / Plot",
    description: "Prime dry residential plots ready for immediate construction with fully installed infrastructure and perimeter fencing.",
    titleStatus: "Registered Deed",
    image: p2,
  },
  {
    id: 3,
    title: "Ligabs Green Valley Estate",
    category: "Investment Asset",
    location: "Strategic Abuja Suburban Corridor",
    price: "₦8,500,000 / Plot",
    description: "An exceptional entry-level land banking asset designed for savvy investors seeking long-term generational wealth.",
    titleStatus: "Governors Consent",
    image: p3,
  },
  {
    id: 4,
    title: "Throne Gold Estate Phase 1",
    category: "Land Banking",
    location: "Gudu District Extension, Abuja",
    price: "₦15,000,000 / Plot",
    description: "High-yield strategic land banking investment with rapid capital appreciation and high return projections.",
    titleStatus: "C of O / Verified",
    image: p4
  },
  {
    id: 5,
    title: "Gomwalk Luxury Residence Plots",
    category: "Residential Land",
    location: "Near Business Throne Plaza, Abuja",
    price: "₦28,000,000 / Plot",
    description: "Prime dry residential plots ready for immediate construction with fully installed infrastructure and perimeter fencing.",
    titleStatus: "Registered Deed",
    image: p5,
  },
  {
    id: 6,
    title: "Ligabs Green Valley Estate",
    category: "Investment Asset",
    location: "Strategic Abuja Suburban Corridor",
    price: "₦8,500,000 / Plot",
    description: "An exceptional entry-level land banking asset designed for savvy investors seeking long-term generational wealth.",
    titleStatus: "Governors Consent",
    image: p6,
  },
];



  return (
    <Context.Provider value={{api_url, user, fetchUserProfileById, propertiesData}}>
        {children}
    </Context.Provider>
      

  )
}

export default ContextProvider



//User “elexdont_user_connect” was added to the database “elexdont_connect”.

//kffT&0JuN2]hl]&H



//my vt pass api keys
//public: PK_dd9d16198f0dbc7cee0bf44a8a0df779
// dd9d16198f0dbc7cee0bf44a8a0df779
//seceret:  SK_307b4bc069d5c7728f6b4652c3127e2ab88e652c48f

// dd9d16198f0dbc7cee0bf44a8a0df779
// PK_9998315837c2b01d69318f3d44cb71680a13be0e056
// SK_780980b685479828e6a82656f76b981933d92ede718


// const propertiesData = [
//   {
//     id: 1,
//     title: "Throne Gold Estate Phase 1",
//     category: "Land Banking",
//     location: "Gudu District Extension, Abuja",
//     price: "₦15,000,000 / Plot",
//     description: "High-yield strategic land banking investment with rapid capital appreciation and high return projections.",
//     titleStatus: "C of O / Verified",
//     image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Gomwalk Luxury Residence Plots",
//     category: "Residential Land",
//     location: "Near Business Throne Plaza, Abuja",
//     price: "₦28,000,000 / Plot",
//     description: "Prime dry residential plots ready for immediate construction with fully installed infrastructure and perimeter fencing.",
//     titleStatus: "Registered Deed",
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Ligabs Green Valley Estate",
//     category: "Investment Asset",
//     location: "Strategic Abuja Suburban Corridor",
//     price: "₦8,500,000 / Plot",
//     description: "An exceptional entry-level land banking asset designed for savvy investors seeking long-term generational wealth.",
//     titleStatus: "Governors Consent",
//     image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
//   },
// ];
