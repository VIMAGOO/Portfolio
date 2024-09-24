// Importing necessary libraries and components
import React from 'react'; // React for building the component
import { Tilt } from 'react-tilt'; // Tilt for 3D hover effect
import { motion } from 'framer-motion'; // For animations
import { styles } from '../styles'; // Custom styles
import { github } from '../assets'; // GitHub icon for source code links
import StarWrapper from '../hoc/SectionWrapper'; // HOC for consistent styling
import { projects } from '../constants'; // Importing project data
import { fadeIn, textVariant } from '../utils/motion'; // Importing animation variants

// ProjectCard component to display individual projects
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      {/* Tilt effect for the card */}
      <Tilt
        options={{
          max: 45, // Maximum tilt angle
          scale: 1, // Scale factor
          speed: 450, // Speed of the tilt effect
        }}
        className="bg-gradient-to-r from-[#1d1836] via-[#5b005c] to-amber-700 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Project image */}
        <div className="relative w-full h-[230px]">
          <img
            src={image} // Project image source
            alt="project_image" // Accessibility: alt text for the image
            className="w-full h-full object-cover rounded-2xl" // Ensures image fills the card
          />
          {/* GitHub link overlay */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')} // Open source code link on click
              className="bg-[#1d1836] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github} // GitHub icon
                alt="source code" // Accessibility: alt text for the icon
                className="w-1/2 h-1/2 object-contain" // Ensures icon fits in the circle
              />
            </div>
          </div>
        </div>
        {/* Project details */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3> {/* Project name */}
          <p className="mt-2 text-white text-[14px]">{description}</p> {/* Project description */}
        </div>
        {/* Project tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name} {/* Display each tag with its respective color */}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Main Works component to display all projects
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p> {/* Subheading */}
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2> {/* Main heading */}
      </motion.div>
      {/* Description paragraph */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)} // Fade-in animation
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
          laborum."
        </motion.p>
      </div>
      {/* Container for project cards */}
      <div className="mt-20 flex flex-wrap gap-7 justify-around">
        {projects.map((project, index) => (
          // Rendering ProjectCard for each project
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// Exporting the Works component wrapped with StarWrapper HOC
export default StarWrapper(Works, 'project');
