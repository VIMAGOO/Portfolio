// Importing motion from the framer-motion library for animations
import { motion } from "framer-motion";

// Importing styles from a local styles file
import { styles } from "../styles";

// Importing a utility function for staggered animations
import { staggerContainer } from "../utils/motion";

// Defining a Higher-Order Component (HOC) called StarWrapper
const StarWrapper = (Component, idName) =>
  // Returning a functional component that uses the HOC pattern
  function HOC() {
    return (
      // Rendering a motion section with animations
      <motion.section
        // Setting animation variants using the staggerContainer function
        variants={staggerContainer()}
        // Defining the initial state of the animation
        initial='hidden'
        // Triggering the animation when the section comes into view
        whileInView='show'
        // Configuring how the viewport interacts with the animation
        viewport={{ once: true, amount: 0.25 }}
        // Applying padding and other styles to the section
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Adding a span element with a class and ID for linking purposes */}
        <span className='hash-span' id={idName}>
          &nbsp; {/* Non-breaking space for layout purposes */}
        </span>
        {/* Rendering the wrapped component */}
        <Component />
      </motion.section>
    );
  };

// Exporting the StarWrapper HOC for use in other components
export default StarWrapper;
