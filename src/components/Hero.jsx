// Import React and motion for animations
import React from 'react';
import { motion } from 'framer-motion';
// Import custom styles
import { styles } from '../styles';

// Hero component definition
const Hero = () => {
  // Main section of the Hero component, setting full width and height of the screen
  // relative positioning allows for absolute positioning of child elements
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Container for the main content, positioned at the top of the section */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="w-full mt-6">
          <div className="items-center">
            {/* Placeholder for the image (currently commented out) */}
            <div className="w-60">
              {/* Placeholder for a potential profile image */}
              {/* <img src="src\assets\personal\cvphoto.jpeg" alt="cvphoto" class="w-24 md:w-32 lg:w-48 object-content float-left mr-4 md:mr-7 lg:mr-10 mb-10 rounded-lg shadow-2xl mt-2 md:mt-1 lg:mt-1"/> */}
            </div>
            <div>
              {/* Main Hero heading introducing the user */}
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-amber-500">Víctor</span>,
              </h1>
              {/* Subheading introducing the role */}
              <p className={`${styles.heroSubText} text-white-100`}>
                a software developer.<br className="sm:block hidden" />
              </p>
            </div>
          </div>

          {/* Section for the social media and CV download links */}
          <div id="hoverimg" className="mt-10 flex flex-nowrap gap-10 items-center">
            {/* Link to GitHub */}
            <a href="https://github.com/VIMAGOO" target="_blank">
              <img src="src\assets\github.png" alt="githublogo" className="object-content w-11 p-2" />
            </a>
            {/* Link to LinkedIn */}
            <a href="https://www.linkedin.com/in/v%C3%ADctor-madarn%C3%A1s-aa22a0296/" target="_blank">
              <img src="src\assets\LinkedIn_icon.svg.webp" alt="linkedin" className="object-content w-11 p-2" />
            </a>
            {/* Downloadable CV */}
            <a href="src\assets\CurriculumVitaeEnglish (1) (1).pdf" download="curriculumVíctorMadarnás.pdf">
              <img src="src\assets\curriculum.png" alt="curriculum" className="object-content w-11 p-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider (horizontal line) to visually separate the content */}
      <hr className="w-full border-t border-gray-300 my-10" />

      {/* Decorative background element at the bottom */}
      <div className="absolute inset-x-0 bottom-0 mb-40 bg-slate-400"></div>

      {/* Scroll down animation to indicate there's more content below */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          {/* Scroll indicator (an animated bouncing motion) */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0], // Animating the Y axis to create a bounce effect
              }}
              transition={{
                duration: 1, // Duration of each loop
                repeat: Infinity, // Infinite looping
                repeatType: 'loop', // Continuous loop
              }}
              className="w-4 h-4 rounded-full bg-white mb-1" // Style for the bouncing dot
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
