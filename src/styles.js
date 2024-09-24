// Defining a styles object to store common CSS classes for various elements
const styles = {
  // Padding styles for horizontal padding
  paddingX: "sm:px-16 px-6", // Small devices and up: padding 16 on x-axis, default 6
  // Padding styles for vertical padding
  paddingY: "sm:py-16 py-6", // Small devices and up: padding 16 on y-axis, default 6
  // Combined padding styles for both axes
  padding: "sm:px-16 px-6 sm:py-16 py-10", // Padding for both axes with responsive sizes

  // Text styles for the hero heading
  heroHeadText:
    "font-black text-white lg:text-[60px] sm:text-[60px] xs:text-[60px] text-[40px] lg:leading-[98px]",
  // Text styles for the hero subheading
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[30px] xs:text-[30px] text-[20px] lg:leading-[40px]",

  // Text styles for section headings
  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  // Text styles for section subheadings
  sectionSubText:
    "sm:text-[18px] text-[14px] text-amber-500 uppercase tracking-wider", // Responsive text size with uppercase and tracking
};

// Exporting the styles object for use in other components
export { styles };
