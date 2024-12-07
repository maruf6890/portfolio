import React from 'react'
import { motion } from "framer-motion";
export default function StoryElement({ story,nextDone }) {
   
    return (

        <motion.li initial={{ opacity: 0, y: 50 }} // Initial state: hidden and offscreen
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}>

            <motion.hr 
                className={`${story.id === 1 ? 'hidden' : ''} ${story.isAchieved ? 'bg-blue-500' : 'bg-gray-500'}`}
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{
                    width: "3px",
                    margin: "0 auto",
                }} ></motion.hr>


            <div className={`timeline-middle ${story.isAchieved ? 'text-sky-500' : 'text-gray-500'}`}>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd" />
                </svg>
            </div>
            <div className={(story.id%2)?'timeline-start  mb-5 md:text-end':"timeline-end mb-5 md:text-start"}>
                <time className="font-mono italic">{story.month}</time>
                <div className={(story.id%2)? 'flex md:justify-end': 'flex justify-start' }>
                <div className="md:w-6/12 ">
                <div className="text-lg poppins-medium text-gray-300">{
                story.title}
                </div>
                <p className="text-xs poppins-regular text-gray-400">{story.description}</p>
                </div>
                </div>
                
                </div>
            <motion.hr initial={{ height: "0%" }}
                className={(nextDone)?'bg-blue-500': ' bg-gray-500'}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                style={{
                    width: "3px",
                    margin: "0 auto",
                }} ></motion.hr>
        </motion.li>
    )
}
