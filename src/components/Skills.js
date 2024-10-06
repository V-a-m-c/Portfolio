import React from 'react';
import './Skills.css';
import html from './html-5.png';
import css from './CSS.png';
import js from './js.png';
import react from './React.png';
import bootstrap from './bootstrap.png';
import sql from './SQL.png';
import java from './java.png';
import MongoDb from './MongoDb.png';
import mysql from './MySQL.png';
import python from './python.png';
import Tailwind from './Tailwind.png';
import node from './Node.png';
import express from './Express.png';
import aws from './AWS.png';
import fire from './Fire.png';
const skillsData = [
    { 
        id: 1, 
        skill: 'HTML', 
        icon: html  // Replace with the path to your icon or image file
    },
    { 
        id: 2, 
        skill: 'CSS', 
        icon: css 
    },
    { 
        id: 3, 
        skill: 'JavaScript', 
        icon: js
    },
    { 
        id: 4, 
        skill: 'React.js', 
        icon: react
    },
    { 
        id: 5, 
        skill: 'Bootstrap', 
        icon: bootstrap
    },
    { 
        id: 6, 
        skill: 'Tailwind (DaisyUI)', 
        icon: Tailwind
    },
    { 
        id: 7, 
        skill: 'SQL', 
        icon: sql
    },
    { 
        id: 8, 
        skill: 'Node.js (Basics)', 
        icon: node 
    },
    { 
        id: 9, 
        skill: 'Express (Basics)', 
        icon: express
    },
    { 
        id: 10, 
        skill: 'MongoDB', 
        icon: MongoDb
    },
    { 
        id: 11, 
        skill: 'Python (Basics)', 
        icon: python 
    },
    { 
        id: 12, 
        skill: 'Java', 
        icon: java 
    },
    { 
      id: 13, 
      skill: 'MySQL', 
      icon: mysql 
  },
  { 
    id: 14, 
    skill: 'AWS', 
    icon: aws 
}, { 
  id: 15, 
  skill: 'Firebase', 
  icon: fire 
},
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-300 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-blue-950">My Skills</h1>
        <div className="flex justify-center flex-wrap gap-8">
          {skillsData.map((skill) => (
            <div className="card" key={skill.id}>
              <img src={skill.icon} alt={skill.skill} className="skill-icon flex justify-center flex-wrap gap-8" style={{height:"96px",width:"96px"}}/> {/* Display the skill icon */}
              <p className="heading text-white">{skill.skill}</p> {/* Display the skill name */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
