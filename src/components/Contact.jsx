import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import StarWrapper from '../hoc/SectionWrapper';
import { slideIn } from "../utils/motion";

// Define the Contact component
const Contact = () => {
  // Reference for the form element to be used with emailjs
  const formRef = useRef();

  // Form state for storing the user's input (name, email, message)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Loading state to indicate when the form is submitting
  const [loading, setLoading] = useState(false);

  // Handle input change to update the form state dynamically
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    // Update the form state with the new value
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state to true during submission

    // Call emailjs to send an email with the form data
    emailjs
      .send(
        // EmailJS service ID, template ID, and public key are provided directly
        'service_hryf384',
        'template_77p35am',
        {
          from_name: form.name, // Name from the form input
          to_name: "Víctor Madarnás", // Recipient name
          from_email: form.email, // Sender email from form input
          to_email: "vmadarnasinfo@gmail.com", // Recipient email
          message: form.message, // Message from the form input
        },
        'o9AlHQS1WQ9oEj_kb' // Public API key for emailjs
      )
      .then(
        () => {
          setLoading(false); // Set loading to false after success
          alert("Thank you. I will get back to you as soon as possible."); // Success message

          // Reset form fields after successful submission
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false); // Set loading to false after failure
          console.error(error); // Log error in console

          // Show error message if the submission fails
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    // Main container with responsive layout, uses flexbox for row/column layout
    <div className={`flex xl:flex-row flex-col-reverse overflow-hidden w-full`}>
      {/* Animated container for the form, sliding in from the left */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='w-full bg-black-100 p-8 rounded-2xl'
      >
        {/* Section subtext and header */}
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Form element with reference and submission handler */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-5 flex flex-col gap-8'
        >
          {/* Name input field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name!</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          
          {/* Email input field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your e-mail!</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your e-mail?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          
          {/* Message textarea field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message!</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Submit button */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// Export the component wrapped in StarWrapper with the identifier 'contact'
export default StarWrapper(Contact, "contact");
