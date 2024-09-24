import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { socialMedia } from '../constants';

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
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-amber-500 transition-colors duration-300"
            >
              <i className={social.icon}></i>
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

export default Footer;
