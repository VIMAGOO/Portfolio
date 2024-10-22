import React, { useState } from 'react'; 
import { Tilt } from 'react-tilt'; 
import { motion } from 'framer-motion';
import { styles } from '../styles'; 
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 
import StarWrapper from '../hoc/SectionWrapper';

// Technology card component
const TechonologiesCard = ({ index, icon, name }) => {
  // State to manage the hover status
  const [hovered, setHovered] = useState(false);

  // Functions to handle mouse enter and leave events
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false); 
  };

  return (
    <Tilt className="xs:w-[100px] items-center w-full"> {/* 3D tilt effect on card */}
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.1, 0.75)} 
        className="p-[9px] rounded-[10px]" 
      >
        <div className="w-20 md:w-30 lg:w-[120px] bg-tertiary rounded-[10px] px-1 py-1 items-center min-w-[50px] bg-gradient-to-r from-[#1d1836] via-[#5b005c] to-amber-700" style={{ position: 'relative' }}>
          <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img
              src={icon} 
              alt={name} 
              className="object-contain"
              style={{ visibility: hovered ? 'hidden' : 'visible' }}
            />
            {hovered && (
              <div className="absolute top-0 left-0 w-full h-full text-white flex justify-center items-center text-center rounded-[10px]" style={{ zIndex: 1 }}>
                <p className="text-white text-[12px] xs:text-xs sm:text-sm lg:text-base">{name}</p> {/* Display technology name on hover */}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

// Main Technologies component
const Tech = () => {
  return (
    <>
      {/* Section title */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My knowledge</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
      </motion.div>
      {/* Grid layout for technology cards */}
      <div className="w-full grid justify-items-center">
        <div className="mt-10 flex grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 flex-wrap lg:w-[600px] ml-1 lg:ml-6">
          {technologies.map((technology, index) => (
            // Rendering technology cards with the TechnologyCard component
            <TechonologiesCard key={technology.name} index={index} {...technology} />
          ))}
        </div>
      </div>
    </>
  );
};

// Exporting the Tech component wrapped with StarWrapper HOC
export default StarWrapper(Tech, 'tech');
