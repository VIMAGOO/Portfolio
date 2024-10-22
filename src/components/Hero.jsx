import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

// Hero component definition
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="w-full mt-6">
          <div className="items-center">
            <div className="w-60">
            </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-amber-500">Víctor</span>,
              </h1>
              <p className={`${styles.heroSubText} text-white-100`}>
                a software developer.<br className="sm:block hidden" />
              </p>
            </div>
          </div>

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

      <hr className="w-full border-t border-gray-300 my-10" />
      <div className="absolute inset-x-0 bottom-0 mb-40 bg-slate-400"></div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
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
