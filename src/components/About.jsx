import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import StarWrapper from '../hoc/SectionWrapper';

// Define the About component
const About = () => {
  return (
    <>
      {/* Animated container for the title */}
      <motion.div variants={textVariant()}>
        {/* Title with dynamic styles and a highlighted span */}
        <h2 className={styles.sectionHeadText}>
          About <span className='text-amber-500'>me</span>.
        </h2>
      </motion.div>

      {/* Animated paragraph with text content */}
      <motion.p
        // Configuring the fadeIn animation with a slight delay and duration
        variants={fadeIn('', '', 0.1, 1)}
        // Style classes for the paragraph
        className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        {/* Example placeholder text (Lorem Ipsum) */}
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum."
      </motion.p>
    </>
  );
};

// Export the component wrapped with the StarWrapper HOC, with the identifier 'about'
export default StarWrapper(About, 'about');
