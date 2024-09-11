import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { useAnimate, stagger, motion } from 'framer-motion';

// Styled component for the main container
const AboutContainer = styled('div')({
  padding: '50px', // Padding around the content
  background: '#000', // Black background color
  color: '#0f0', // Green text color
});

// Styled component for the container of profile image and text
const InfoContainer = styled(motion.div)({
  marginTop: '20px', // Margin above the container
  display: 'flex', // Flexbox for layout
  flexDirection: 'row', // Align items horizontally
  alignItems: 'flex-start', // Align items to the top
  justifyContent: 'space-between', // Space between items
  gap: '20px', // Space between items
  overflow: 'hidden', // Hide overflow content
});

// Styled component for the profile image
const ProfileImage = styled(motion.img)({
  height: '400px', // Fixed height for the image
  borderRadius: '5%', // Rounded corners
  marginBottom: '20px', // Margin below the image
  flexShrink: 0, // Prevent image from shrinking
});

// Styled component for the text container
const TextContainer = styled(motion.div)({
  flex: 1, // Take up available space
  minWidth: '0', // Prevent overflow
});

const About = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility of the info container
  const [scope, animate] = useAnimate(); // Hook to control animation
  const skills = [ // Array of skills to be displayed
    "HTML5",
    "CSS3",
    "SASS",
    "JavaScript",
    "React",
    "Jest",
    "Cypress",
    "React Testing Library",
    "Github Actions",
    "TDD",
    "GCP",
    "CI/CD",
    "OOP",
    "Java",
    "Spring",
    "SQL"
  ];

  // Function to stagger the animation of skills list items
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  useEffect(() => {
    // Trigger animations when `isVisible` changes
    if (isVisible) {
      animate(
        "ul",
        { opacity: 1 }, // Fade in the ul element
        { duration: 0.4, staggerChildren: 0.2 } // Stagger children of ul
      );
      animate(
        "li",
        { opacity: 1, scale: 1, x: 0 }, // Fade in, scale to normal size, and move to original position
        { duration: 0.4, delay: staggerList } // Delay for staggered effect
      );
    }
  }, [isVisible, animate, staggerList]); // Dependencies: re-run when `isVisible`, `animate`, or `staggerList` change

  return (
    <AboutContainer ref={scope}> {/* Reference for animation control */}
      <Typography variant="h4" gutterBottom color="#0f0">
        <Button
          variant="outlined"
          color="success"
          onClick={() => setIsVisible(!isVisible)} // Toggle visibility on button click
          style={{ color: '#0f0', borderColor: '#0f0' }}
        >
          Who Am I?
        </Button>
      </Typography>
      {isVisible && ( // Render the info container only if `isVisible` is true
        <InfoContainer
          initial={{ opacity: 0, height: 0 }} // Initial state before animation
          animate={{ opacity: 1, height: 'auto' }} // Final state after animation
          exit={{ opacity: 0, height: 0 }} // State when exiting
        >
          <ProfileImage
            src="me.jpg" // Path to profile image
            alt="Me" // Alt text for image
            initial={{ opacity: 0, scale: 0.8 }} // Initial state before animation
            animate={{ opacity: 1, scale: 1 }} // Final state after animation
            exit={{ opacity: 0, scale: 0.8 }} // State when exiting
            transition={{ duration: 0.5 }} // Animation duration
          />
          <TextContainer>
            <Typography variant="body1" color="#0f0">
              {/* Introduction text */}
              I am a young and ambitious worker, with a lot of worldly experience for my age. I have lived in 3 countries (England, Greece, and Russia), two continents (Europe and Asia) and have studied at almost every level imaginable. 
              I have knowledge in languages (speaking English and Russian, as well as Greek in the past), tech, biology, and international politics and am always looking to learn and experience new things. I am excited to enter the next phase of my life and commit myself to a field that provides the perfect environment for me to develop and grow as a professional and person as a whole.
            </Typography>
            <Typography variant="h6" color="#0f0" style={{ marginTop: '20px' }}>
              Skills:
            </Typography>
            <ul>
              {/* Render the list of skills with animations */}
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }} // Initial state before animation
                  animate={{ opacity: 1, x: 0 }} // Final state after animation
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </TextContainer>
        </InfoContainer>
      )}
    </AboutContainer>
  );
};

export default About;
