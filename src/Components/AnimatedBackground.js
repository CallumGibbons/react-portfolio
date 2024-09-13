import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { generateRandomCode } from '../utils';
import { styled } from '@mui/system';

// Styled component for the background container
const BackgroundContainer = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,  // Ensure background is behind other components
  overflow: 'hidden',
  background: '#000',
  color: '#0f0',
  fontFamily: 'monospace',
  fontSize: '14px',
});


// Styled component for each line of code
const CodeLine = styled(motion.div)(({ index, totalLines }) => ({
  whiteSpace: 'nowrap', // Prevent line break
  width: '100%', // Full width to align with container
  overflow: 'hidden', // Hide overflowing text
  display: 'block', // Display as block to take full width
  filter: `blur(${Math.min((index / totalLines) * 1, 10)}px)`, // Blur effect based on line index
  opacity: 1 - index / totalLines, // Fade effect based on line index
}));

const AnimatedBackground = () => {
  const [codeLines, setCodeLines] = useState([]); // State to store generated lines of code

  // Function to calculate the number of characters that fit in a line
  const calculateCodeLength = () => {
    const charWidth = 7; // Average width of one character
    const screenWidth = window.innerWidth; // Width of the viewport
    return Math.floor(screenWidth / charWidth); // Number of characters per line
  };

  // Function to calculate the number of lines that fit on the screen
  const calculateNumberOfLines = () => {
    const lineHeight = 16; // Height of one line
    const screenHeight = window.innerHeight; // Height of the viewport
    return Math.floor(screenHeight / lineHeight); // Number of lines that fit on the screen
  };

  useEffect(() => {
    // Function to update the code lines based on screen size
    const updateCodeLines = () => {
      const lineLength = calculateCodeLength(); // Number of characters per line
      const numberOfLines = calculateNumberOfLines(); // Number of lines
      const lines = []; // Array to store the lines of code
      for (let i = 0; i < numberOfLines; i++) {
        lines.push(generateRandomCode(lineLength)); // Generate random code for each line
      }
      setCodeLines(lines); // Update the state with new lines of code
    };

    updateCodeLines(); // Initialize code lines on component mount

    // Add event listener to handle window resizing
    window.addEventListener('resize', updateCodeLines);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateCodeLines);
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  return (
    <BackgroundContainer>
      {codeLines.map((line, index) => (
        <CodeLine
          key={index}
          index={index} // Pass index to styled component for styling
          totalLines={codeLines.length} // Pass total number of lines for blur and opacity calculations
          initial={{ y: '-100%' }} // Initial position of the line (off-screen at the top)
          animate={{ y: '100%' }} // Animate the line to move to the bottom of the screen
          transition={{
            duration: 10, // Duration of the animation
            repeat: Infinity, // Repeat animation infinitely
            ease: 'linear', // Linear easing for constant speed
            delay: index * 0.1, // Staggered start for each line
          }}
        >
          {line} {/* Render the line of code */}
        </CodeLine>
      ))}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
