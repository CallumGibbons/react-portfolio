import React, { useRef, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

// Styled component for the home container
const HomeContainer = styled('div')({
  height: '100vh', // Full viewport height
  display: 'flex', // Flexbox for layout
  justifyContent: 'center', // Center content horizontally
  alignItems: 'center', // Center content vertically
  position: 'relative', // Position relative for absolute positioning of child elements
  overflow: 'hidden', // Hide overflowing content
});

// Styled component for the content
const Content = styled('div')({
  position: 'relative', // Position relative to control zIndex
  zIndex: 3, // Higher zIndex to be on top of the background
  color: '#fff', // White text color
});

const Home = () => {
  const text = "Welcome to My Portfolio".split(" "); // Split text into individual words
  const textRef = useRef(); // Reference for the text element
  const [hasScrolled, setHasScrolled] = useState(false); // State to track if user has scrolled

  // Use framer-motion hooks to track scroll progress and transform values
  const { scrollYProgress } = useScroll({ target: textRef });
  const yaxis = useTransform(scrollYProgress, [0, 1], [-60, 60]); // Transform scroll progress to vertical movement
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]); // Transform scroll progress to opacity

  useEffect(() => {
    // Handler to update scroll state
    const handleScroll = () => {
      if (scrollYProgress.get() > 0) {
        setHasScrolled(true); // Set scrolled state to true if user has scrolled
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYProgress]); // Effect depends on scrollYProgress

  return (
    <HomeContainer>
      <AnimatedBackground /> {/* Background animation component */}
      <Content ref={textRef}>
        <Typography variant="h2">
          {/* Map over words and apply motion effects */}
          {text.map((el, i) => (
            <motion.span
              style={{ y: yaxis, opacity: hasScrolled ? opacity : 1 }} // Apply vertical movement and opacity based on scroll
              initial={{ opacity: 0 }} // Initial opacity before animation
              animate={{ opacity: 1 }} // Animate to full opacity
              transition={{
                duration: 2, // Duration of the animation
                delay: i / 5, // Stagger delay based on index
                opacity: { duration: 2, delay: i / 5 } // Opacity transition settings
              }}
              key={i}
            >
              {el}{" "} {/* Render each word with a space */}
            </motion.span>
          ))}
        </Typography>
      </Content>
    </HomeContainer>
  );
};

export default Home;
