import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75 )}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] text-center font-bold">
            {title}
          </h3>
        </div> 
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview.
      </h2>
    </motion.div>
    <motion.p 
      variants={fadeIn('', "", 0.1, 1)}
      className="mt-6 text-secondary text-[17px]
      max-w-3xl leading-[30px] mb-7"
    >
      My mission is to make life as awesome as possible by continuously learning and applying that knowledge to create new things. 
      I am currently most interested in the field of Artificial Intelligence and am applying to various masters programs for Computer Science. That is where I most want to work, on the front lines of modern human advancements. 
      
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10"> 
      {services.map((service, index) => (
        <ServiceCard key={service.title} index=
        {index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about");