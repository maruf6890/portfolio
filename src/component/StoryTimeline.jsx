import React from "react";
import { motion } from "framer-motion";

const timelineVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial hidden state
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Slide in
};

const hrVariants = {
  hidden: { height: "0px", backgroundColor: "#4b5563" }, // Initial hidden state
  visible: { height: "50px", backgroundColor: "#3b82f6", transition: { duration: 0.6 } }, // Animate height and color
};

const StoryTimeline = () => {
  const timelineData = [
    { position: "start", title: "First Macintosh computer" },
    { position: "end", title: "iMac" },
    { position: "start", title: "iPod" },
    { position: "end", title: "iPhone" },
    { position: "start", title: "Apple Watch" },
  ];

  return (
    <ul className="timeline timeline-vertical">
      {timelineData.map((item, index) => (
        <motion.li
          key={index}
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={timelineVariants}
        >
          {item.position === "end" && (
            <motion.hr
              className="w-1 mx-0"
              variants={hrVariants}
              initial="hidden"
              whileInView="visible"
            />
          )}
          <div
            className={`timeline-${item.position} timeline-box p-3 text-lg font-semibold ${
              item.position === "end" ? "text-right" : "text-left"
            }`}
          >
            <span className="text-blue-500">{item.title}</span>
          </div>
          {item.position === "start" && (
            <motion.hr
              className="w-1 mx-0"
              variants={hrVariants}
              initial="hidden"
              whileInView="visible"
            />
          )}
        </motion.li>
      ))}
    </ul>
  );
};

export default StoryTimeline;
