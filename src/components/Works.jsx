import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'; 
import { styles } from '../styles';
import { github } from '../assets'; 
import StarWrapper from '../hoc/SectionWrapper';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

// ProjectCard component to display individual projects
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      {/* Tilt effect for the card */}
      <Tilt
        options={{
          max: 45, 
          scale: 1, 
          speed: 450, 
        }}
        className="bg-gradient-to-r from-[#1d1836] via-[#5b005c] to-amber-700 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Project image */}
        <div className="relative w-full h-[230px]">
          <img
            src={image} 
            alt="project_image" 
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* GitHub link overlay */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')} 
              className="bg-[#1d1836] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github} 
                alt="source code"
                className="w-1/2 h-1/2 object-contain" 
              />
            </div>
          </div>
        </div>
        {/* Project details */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3> 
          <p className="mt-2 text-white text-[14px]">{description}</p> 
        </div>
        {/* Project tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name} 
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
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2> 
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)} 
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
