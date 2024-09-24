// Import React and motion for animations
import React from 'react';
import { motion } from 'framer-motion';
// Import custom styles
import { styles } from '../styles';
// Import social media links from constants
import { socialMedia } from '../constants';

// Footer component definition
const Footer = () => {
  return (
    // Footer section with background color, text color, and padding
    <footer className="bg-primary text-white py-12">
      {/* Wrapper div that centers the content horizontally and vertically */}
      <div className={`${styles.paddingX} flex flex-col items-center justify-center`}>
        {/* Motion div to animate the heading text */}
        <motion.div variants={textVariant()}>
          <h3 className={`${styles.sectionHeadText} mb-4`}>Connect with me</h3>
        </motion.div>

        {/* Social media icon section */}
        <div className="flex items-center justify-center mb-8 space-x-4">
          {/* Map over the socialMedia array to create clickable icons */}
          {socialMedia.map((social) => (
            <a
              key={social.name} // Unique key for each social media platform
              href={social.link} // Link to the social media profile
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Ensure security by preventing access to the window object
              className="text-3xl hover:text-amber-500 transition-colors duration-300" // Hover effect for icons
            >
              <i className={social.icon}></i> {/* Social media icon */}
            </a>
          ))}
        </div>

        {/* Motion div to animate the footer text */}
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

// Export Footer component
export default Footer;
