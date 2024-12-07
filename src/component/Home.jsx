import React from 'react'
import Hero from './Hero'
import SkillsSection from './Skills'
import Story from './story'
import Projects from './Projects'
import { motion } from "framer-motion";

import SectionTitle from './SectionTitle'


export default function Home() {
  return (
    
    <>  
    
         <Hero></Hero>

      <div className='mt-20 pb-10'>
      <SectionTitle title="About Me" subtitle="My tiny intruduction"></SectionTitle>
<div className="grid grid-cols-1 mt-10 md:grid-cols-12 gap-4 w-full max-w-6xl mx-auto px-4 md:px-8">
    {/* Image Section */}
    <motion.div
        className="md:col-span-4 poppins-regular flex  justify-center md:justify-end"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
    >
        <img
            src="avatar.png"
            alt="Mehedi Hasan Maruf"
            className="w-full object-contain md:w-9/12 rounded-lg shadow-md bg-gray-800 p-3"
        />
    </motion.div>

    {/* Content Section */}
    <motion.div
        className="md:col-span-8 text-gray-300 text-justify space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
    >
        <p className="text-md ">
            Hi, I’m <span className="font-semibold">Mehedi Hasan Maruf</span>, a passionate learner and problem-solver.
            I’m pursuing my software engineering degree at
            <span className="font-semibold"> Shahjalal University of Science and Technology</span>. 
            I’m driven by the excitement of exploring different fields, from web development to creative coding.
        </p>
        <p className="text-md ">
            I’m deeply passionate about uncovering how things work behind the scenes. My journey revolves around solving real-life
            problems through code and crafting impactful solutions. I find immense excitement in exploring fields where I can
            combine technical expertise with creativity to bring innovative ideas to life.
        </p>
        <p className="text-md">
            For me, technology is more than just a tool; it's a gateway to connect, inspire, and solve real-world challenges.
        </p>
    </motion.div>
</div>
</div>
       <SkillsSection></SkillsSection>
        <Story></Story>
      <Projects></Projects>
    </>
  )
}
