import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn('right', 'spring', 0.5*index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div option={{
          max:45,
          scale:1,
          speed:450
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    As a talented and enthusiastic frontend developer, I bring a strong foundation in React.js, HTML, CSS, and JavaScript. With a fresh perspective and a passion for creating visually appealing and user-friendly web applications, I am eager to contribute my skills to a dynamic team. My proficiency in React.js allows me to build interactive and dynamic user interfaces with ease. I am adept at using React's component-based architecture to create reusable and scalable code, enhancing the efficiency and maintainability of projects. I am excited about leveraging my technical skills and passion for creating exceptional user experiences to contribute to innovative and impactful web development projects.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index)=>{
      return(
      <ServiceCard key={service.title} index={index} {...service}/>
      )})}
    </div>
    </>
  )
}

export default SectionWrapper(About, 'about')