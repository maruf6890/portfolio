import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaReact, FaBootstrap, FaGit } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiCplusplus } from "react-icons/si";

// Map the icon strings to actual components
const iconMap = {
  TiHtml5: <TiHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  IoLogoJavascript: <IoLogoJavascript />,
  FaReact: <FaReact />,
  RiTailwindCssFill: <RiTailwindCssFill />,
  FaBootstrap: <FaBootstrap />,
  RiNextjsFill: <RiNextjsFill />,
  SiExpress: <SiExpress />,
  SiMongodb: <SiMongodb />,
  SiCplusplus: <SiCplusplus />,
  FaGit: <FaGit />
};

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the file or API
    const fetchSkillsData = async () => {
      try {
        // Assuming the skills.json file is located in the public folder
        const response = await fetch("/skills.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkillsData();
  }, []); // Empty dependency array means it runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-[#1f1d2d]">
      <div className="web-container mx-auto py-10 pt-20">
        <SectionTitle title="Skills & Expertise" subtitle="The frameworks, languages, and tools in my arsenal" />
        <div className="box w-11/12 sm:w-10/12 lg:w-8/12 mt-10 mx-auto">
          <div className="skills-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card text-white text-center border bg-slate-800 border-slate-500 h-20 sm:h-24 flex justify-center items-center rounded-lg shadow-lg relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="icon text-2xl absolute"
                  style={{ color: skill.color }}
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {iconMap[skill.icon]} {/* Dynamically render the icon */}
                </motion.div>

                <motion.div
                  className="skill-info absolute flex flex-col justify-center items-center text-white opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-sm font-bold">{skill.name}</h3>
                  <p className="text-xs text-gray-300">{skill.category}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
