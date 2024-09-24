import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import StarWrapper from '../hoc/SectionWrapper';

const TechonologiesCard = ({ index, icon, name }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Tilt className="xs:w-[100px] items-center w-full">
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
                <p className="text-white text-[12px] xs:text-xs sm:text-sm lg:text-base">{name}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My knowledge</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies.</h2>
      </motion.div>
      <div className="w-full grid justify-items-center">
        <div className="mt-10 flex grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 flex-wrap lg:w-[600px] ml-1 lg:ml-6">
          {technologies.map((technology, index) => (
            <TechonologiesCard key={technology.name} index={index} {...technology} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StarWrapper(Tech, 'tech');
