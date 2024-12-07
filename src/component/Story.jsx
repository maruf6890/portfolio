import React from 'react'
import SectionTitle from './SectionTitle'
import { motion } from "framer-motion";
import StoryElement from './StoryElement';
const stories = [
    {
        id: 1,
        month: "November 2023",
        title: "Learned C and C++",
        description: "Started exploring C and C++ programming languages and began solving basic problems on Codeforces.",
        isAchieved: true // Milestone achieved
    },
    {
        id: 2,
        month: "March 2024",
        title: "Learned Data Structures and Algorithms",
        description: "Mastered data structures and algorithms, focusing on solving algorithmic challenges.",
        isAchieved: true // Milestone achieved
    },
    {
        id: 3,
        month: "June 2024",
        title: "Learned SDL2 Basics & Created Snake Game",
        description: "Learned the basics of SDL2 and created a Snake game implementation in C.",
        isAchieved: true // Milestone achieved
    },
    {
        id: 4,
        month: "July 2024",
        title: "Learned HTML, CSS, JS, and React",
        description: "Started learning front-end development with HTML, CSS, JavaScript, and React.",
        isAchieved: true // Milestone achieved
    },
    {
        id: 5,
        month: "August 2024",
        title: "Learned Express and MongoDB",
        description: "Learned back-end development with Express.js and MongoDB.",
        isAchieved: true // Milestone achieved
    },
    {
        id: 6,
        month: "December 2024",
        title: "Learned Next.js",
        description: "Mastered Next.js for building server-rendered React applications.",
        isAchieved: true // Milestone achieved
    },
    {
        id: 7,
        month: "January 2024",
        title: "Learned OOP and Android",
        description: "Explored Object-Oriented Programming (OOP) and began learning Android development.",
        isAchieved: false // Milestone not reached yet
    },
    {
        id: 8,
        month: "March 2024",
        title: "Learned Advanced Data Structures and Algorithms",
        description: "Mastered advanced techniques for solving complex algorithmic problems.",
        isAchieved: false // Milestone not reached yet
    },
    {
        id: 9,
        month: "April 2024",
        title: "Explored Python",
        description: "Dabbled in Python to understand its syntax and capabilities.",
        isAchieved: false // Milestone not reached yet
    }
];


export default function Story() {
    return (

        <>
            <div className="box-3 web-container px-20 py-10">
                <SectionTitle title="My Story, My Vision" subtitle="Where I started, what I’ve learned, and where I’m heading."></SectionTitle>
                <div className="content text-white">
                    <ul className="timeline  timeline-snap-icon max-md:timeline-compact timeline-vertical">

                        {stories.map((story, index) => (
                            <StoryElement key={story.id}  nextDone={((story.id+1<=stories.length)&& stories[story.id].isAchieved===true)? true:false} story={story} />
                        ))}

                    </ul>
                </div>
            </div>
        </>
    )
}
