import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { socialMedia } from '../constants';

// Footer component definition
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className={`${styles.paddingX} flex flex-col items-center justify-center`}>
        <motion.div variants={textVariant()}>
          <h3 className={`${styles.sectionHeadText} mb-4`}>Connect with me</h3>
        </motion.div>

        <div className="flex items-center justify-center mb-8 space-x-4">
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
