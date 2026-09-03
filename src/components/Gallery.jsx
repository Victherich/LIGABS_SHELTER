import React, { useState } from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";
import { FaPlay, FaImage, FaVideo, FaSearchPlus } from "react-icons/fa";

// Import your images (using placeholder naming matching your project setup)
import p1 from '../images/p1.jpeg';
import p2 from '../images/p2.jpeg';
import p3 from '../images/p3.jpeg';
import p4 from '../images/p4.jpeg';
import p5 from '../images/p5.jpeg';
import p6 from '../images/p6.jpeg';
import v1 from '../images/v1.mp4'; // Example video file
import v2 from '../images/v2.mp4'; // Example video file
import v3 from '../images/v3.mp4'; // Example video file
import v4 from '../images/v4.mp4'; // Example video file

const GalleryContainer = styled.div`
  background-color: #0a192f;
  color: #ffffff;
  min-height: 100vh;
  overflow-x: hidden;
`;

// --- HERO SECTION ---
const HeroSection = styled.section`
  position: relative;
  padding: 6rem 2rem 4rem;
  text-align: center;
  background: linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.95)),
    url(${p1}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
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
  margin-bottom: 1rem;
`;

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.8);

  span {
    color: #d4af37;
  }
`;

const HeroDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: #cbd5e1;
  max-width: 700px;
  line-height: 1.6;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.8);
`;

// --- SECTION WRAPPERS ---
const SectionWrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.2rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 700;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;

    svg {
      color: #d4af37;
    }
  }

  p {
    color: #94a3b8;
    font-size: 1rem;
  }
`;

// --- IMAGE GRID STYLES ---
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 280px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.08);
  }
cd 
  &:hover .overlay {
    opacity: 1;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.3));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  h3 {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  span {
    color: #d4af37;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

// --- VIDEO GRID STYLES ---
const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  background: #112240;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #000000;

  iframe, video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoInfo = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #94a3b8;
    line-height: 1.5;
  }
`;

const GalleryPage = () => {
  // Sample image gallery items
  const galleryImages = [
    { id: 1, src: p1, title: "Executive Land Banking Plot", category: "Abuja Phase 1" },
    { id: 2, src: p2, title: "Luxury Estate Development", category: "Infrastructure" },
    { id: 3, src: p3, title: "Commercial Property Site", category: "Investment" },
    { id: 4, src: p4, title: "Green Residential Layout", category: "Abuja Phase 2" },
    { id: 5, src: p5, title: "Client Site Inspection", category: "Field Operations" },
    { id: 6, src: p6, title: "Completed Allocation Area", category: "Developments" },
  ];

  // Sample video items (Replace src with your actual video URLs or YouTube embeds)
  const galleryVideos = [
    {
      id: 1,
    //   title: "Ligabs Shelter Official Site Tour",
    //   description: "Take a virtual walkthrough of our prime land allocations and ongoing developments in Abuja.",
      videoUrl: v1, // Replace with actual video embed URL
    },
    {
      id: 2,
    //   title: "Client Testimonial & Allocation Day",
    //   description: "Hear from our satisfied investors and property owners following successful land handovers.",
      videoUrl: v2, // Replace with actual video embed URL
    },
        {
      id: 3,
    //   title: "Ligabs Shelter Official Site Tour",
    //   description: "Take a virtual walkthrough of our prime land allocations and ongoing developments in Abuja.",
      videoUrl: v3, // Replace with actual video embed URL
    },
    {
      id: 4,
    //   title: "Client Testimonial & Allocation Day",
    //   description: "Hear from our satisfied investors and property owners following successful land handovers.",
      videoUrl: v4, // Replace with actual video embed URL
    },
  ];

  return (
    <GalleryContainer>
      {/* --- HERO SECTION --- */}
      <HeroSection>
        <Fade direction="down" triggerOnce>
          <SubtitleBadge>Visual Showcase • Ligabs Shelter LTD</SubtitleBadge>
        </Fade>
        <Slide direction="up" triggerOnce>
          <MainTitle>
            Explore Our Properties & <span>Projects in Action</span>
          </MainTitle>
        </Slide>
        <Fade direction="up" delay={300} triggerOnce>
          <HeroDescription>
            Browse through our collection of premium land sites, structured developments, site inspection highlights, and client video walkthroughs.
          </HeroDescription>
        </Fade>
      </HeroSection>

      {/* --- IMAGE SECTION --- */}
      <SectionWrapper>
        <SectionHeader>
          <Fade direction="up" triggerOnce>
            <h2>
              <FaImage /> Property & Site Gallery
            </h2>
            <p>Visual records of our gated estates, land plots, and strategic investments.</p>
          </Fade>
        </SectionHeader>

        <ImageGrid>
          {galleryImages.map((img, index) => (
            <Fade key={img.id} direction="up" delay={index * 100} triggerOnce>
              <ImageCard>
                <img src={img.src} alt={img.title} />
                <ImageOverlay className="overlay">
                  <span>{img.category}</span>
                  <h3>{img.title}</h3>
                </ImageOverlay>
              </ImageCard>
            </Fade>
          ))}
        </ImageGrid>
      </SectionWrapper>

      {/* --- VIDEO SECTION --- */}
      <SectionWrapper style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
        <SectionHeader>
          <Fade direction="up" triggerOnce>
            <h2>
              <FaVideo /> Video Highlights & Walkthroughs
            </h2>
            <p>Watch detailed video presentations, interviews, and aerial site overviews.</p>
          </Fade>
        </SectionHeader>

        <VideoGrid>
          {galleryVideos.map((vid, index) => (
            <Fade key={vid.id} direction="up" delay={index * 150} triggerOnce>
              <VideoCard>
                <VideoWrapper>
                  <iframe
                    src={vid.videoUrl}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </VideoWrapper>
                <VideoInfo>
                  <h3>{vid.title}</h3>
                  <p>{vid.description}</p>
                </VideoInfo>
              </VideoCard>
            </Fade>
          ))}
        </VideoGrid>
      </SectionWrapper>
    </GalleryContainer>
  );
};

export default GalleryPage;