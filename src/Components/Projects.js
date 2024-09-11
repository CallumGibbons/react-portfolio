import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Slider from 'react-slick'; // Carousel component
import 'slick-carousel/slick/slick.css'; // Slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Slick carousel theme styles
import { motion } from 'framer-motion'; // For animations

// Styled component for the main projects container
const ProjectsContainer = styled('div')({
  padding: '50px', // Padding around the container
  background: '#000', // Black background
  color: '#0f0', // Green text color
});

// Styled component for the carousel container with animations
const CarouselContainer = styled(motion.div)({
  marginTop: '20px', // Margin above the carousel
});

// Styled component for individual project cards
const ProjectCard = styled('div')({
  position: 'relative', // Position relative for absolute positioning inside
  height: '30vh', // Fixed height for the card
  backgroundSize: 'cover', // Cover the card with background image
  backgroundPosition: 'center', // Center the background image
  borderRadius: '10px', // Rounded corners
  display: 'flex', // Flexbox for layout
  flexDirection: 'column', // Stack content vertically
  justifyContent: 'flex-end', // Align content to the bottom
  padding: '20px', // Padding inside the card
  color: '#0f0', // Green text color
  textAlign: 'center', // Center text horizontally
  backgroundColor: '#333', // Dark background color for the card
});

// Styled component for the content inside the project card
const ProjectContent = styled('div')({
  position: 'relative', // Position relative for zIndex control
  zIndex: 1, // Ensure content is above other elements
  background: 'rgba(0, 0, 0, 0)', // Transparent background
  padding: '10px', // Padding inside the content
  borderRadius: '10px', // Rounded corners
  height: '100%', // Full height of the card
});

// Styled component for the button container inside the project card
const ButtonContainer = styled('div')({
  marginTop: '10px', // Margin above the buttons
  display: 'flex', // Flexbox for button layout
  justifyContent: 'space-around', // Space buttons evenly
});

// Styled component for custom buttons with hover effects
const CustomButton = styled(Button)({
  color: '#0f0', // Green text color
  borderColor: '#0f0', // Green border color
  '&:hover': {
    backgroundColor: '#0f0', // Green background on hover
    color: '#000', // Black text color on hover
  },
});

const Projects = () => {
  const [showCarousel, setShowCarousel] = useState(false); // State to control carousel visibility

  // Toggle the visibility of the carousel
  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  // List of projects with details
  const projectList = [
    {
      title: 'Client Project',
      description: 'A real-life MVP for a development project, delivered as a Scrum team to a client who will use it for future development. It will include a React front-end and Spring back-end integration, including authentication and CI deployment to GCP',
      image: 'https://via.placeholder.com/800x400?text=Client+Project', // Placeholder image URL
      codeLink: '#', // Placeholder link for code
      previewLink: '#', // Placeholder link for preview
    },
    {
      title: 'Spring Boot Project',
      description: 'A properly architected and documented API following all modern design patterns, built using Spring and deployed using GCP.',
      image: 'https://via.placeholder.com/800x400?text=Spring+Boot+Project',
      codeLink: '#',
      previewLink: '#',
    },
    {
      title: 'Java Project',
      description: 'A Java Object Oriented application making use of multiple models and classes to run complex game logic from the command line.',
      image: 'https://via.placeholder.com/800x400?text=Java+Project',
      codeLink: '#',
      previewLink: '#',
    },
    {
      title: 'React API Project',
      description: 'A React application that pulls data from an external public API and presents it in a dashboard or multipage layout.',
      image: 'https://via.placeholder.com/800x400?text=React+API+Project',
      codeLink: '#',
      previewLink: '#',
    },
    {
      title: 'JavaScript Game Project',
      description: 'A browser-based game using modern JavaScript programming techniques and DOM manipulation.',
      image: 'https://via.placeholder.com/800x400?text=JavaScript+Game+Project',
      codeLink: '#',
      previewLink: '#',
    },
    {
      title: 'HTML/ CSS Portfolio Website',
      description: 'Built using correct version control and modern coding standards, and deployed live using a CI pipeline.',
      image: 'https://via.placeholder.com/800x400?text=HTML+CSS+Portfolio+Website',
      codeLink: '#',
      previewLink: '#',
    },
  ];

  // Settings for the Slick carousel
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    responsive: [ // Responsive settings for different screen sizes
      {
        breakpoint: 1024, // For screen width <= 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1, // Scroll 1 slide
        },
      },
      {
        breakpoint: 600, // For screen width <= 600px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide
        },
      },
    ],
  };

  return (
    <ProjectsContainer>
      <Typography variant="h4" gutterBottom color="#0f0">
        <Button
          variant="outlined"
          color="success"
          onClick={toggleCarousel} // Toggle carousel visibility on button click
          style={{ color: '#0f0', borderColor: '#0f0' }}
        >
          My Projects
        </Button>
      </Typography>
      <CarouselContainer
        initial={{ opacity: 0, y: 50 }} // Initial state before animation
        animate={{ opacity: showCarousel ? 1 : 0, y: showCarousel ? 0 : 50 }} // Animate based on carousel visibility
        transition={{ duration: 0.5 }} // Animation duration
        exit={{ opacity: 0, y: 50 }} // Exit state for animation
      >
        <Slider {...settings}> {/* Slick carousel component with settings */}
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
              style={{ backgroundImage: `url(${project.image})` }} // Background image for each project card
            >
              <ProjectContent>
                <Typography variant="h6">
                  {project.title}
                </Typography>
                <Typography variant="body2" style={{ marginTop: '10px' }}>
                  {project.description}
                </Typography>
                <ButtonContainer>
                  <CustomButton
                    variant="outlined"
                    href={project.codeLink} // Link to the project's code
                    target="_blank" // Open link in a new tab
                  >
                    Code &lt;/&gt;
                  </CustomButton>
                  <CustomButton
                    variant="outlined"
                    href={project.previewLink} // Link to the project's preview
                    target="_blank" // Open link in a new tab
                  >
                    Preview &lt;/&gt;
                  </CustomButton>
                </ButtonContainer>
              </ProjectContent>
            </ProjectCard>
          ))}
        </Slider>
      </CarouselContainer>
    </ProjectsContainer>
  );
};

export default Projects;
