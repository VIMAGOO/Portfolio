// Import React, components for creating a vertical timeline, and motion for animations
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
// Import the Higher-Order Component (HOC) for section wrapping
import StarWrapper from '../hoc/SectionWrapper';
// Import custom styles
import { styles } from '../styles';
// Import experience data from constants file
import { experiences } from '../constants';
// Import animation variants
import { textVariant } from '../utils/motion';

// Import vertical timeline styles
import 'react-vertical-timeline-component/style.min.css';

// ExperienceCard component to display individual experience cards in the timeline
const ExperienceCard = ({ experience }) => {
  return (
    // Timeline element for each experience
    <VerticalTimelineElement
      contentStyle={{
        backgroundImage: 'linear-gradient(to left, #5b005c, #1d1836, #1d1836)', // Custom background gradient for the card
        color: '#fff', // Text color
      }}
      contentArrowStyle={{ borderRight: '7px solid #fff' }} // Arrow style for the content
      date={experience.date} // Date of the experience
      dateClassName="custom-date" // Custom date class
      iconStyle={{ background: experience.iconBg }} // Icon background color from experience data
      icon={
        <div id="hoverimg" className='flex justify-center items-center w-full h-full'>
          {/* Experience icon image */}
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain' // Sizing and alignment of the icon
          />
        </div>
      }
    >
      {/* Experience title and company name */}
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-amber-500 text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* Experience points as a list */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point} {/* Each point describing the responsibilities/achievements */}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Main Experience component that renders the timeline of experiences
const Experience = () => {
  return (
    <>
      {/* Animated header for the section */}
      <motion.div variants={textVariant()} >
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* Vertical timeline for displaying experiences */}
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {/* Map over the experiences array to render individual ExperienceCard components */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`} // Unique key for each experience
              experience={experience} // Pass experience data as props
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Export the Experience component wrapped with the StarWrapper HOC, and assign 'work' as the identifier
export default StarWrapper(Experience, 'work');
