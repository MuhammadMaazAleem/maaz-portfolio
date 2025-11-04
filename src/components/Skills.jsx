import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  { name: 'React.js', icon: '⚛️', level: 90, color: '#61DAFB' },
  { name: 'Python', icon: '🐍', level: 85, color: '#3776AB' },
  { name: 'Django', icon: '🎸', level: 80, color: '#092E20' },
  { name: 'C++', icon: '⚙️', level: 75, color: '#00599C' },
  { name: 'Java', icon: '☕', level: 70, color: '#007396' },
  { name: 'MongoDB', icon: '🍃', level: 85, color: '#47A248' },
  { name: 'MySQL', icon: '🐬', level: 80, color: '#4479A1' },
];

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="skill-card glass-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'rotateY(10deg) rotateX(10deg) scale(1.05)' : 'none',
      }}
    >
      <div className="icon" style={{ color: skill.color }}>
        {skill.icon}
      </div>
      <h3>{skill.name}</h3>
      
      <div className="skill-level">
        <motion.div
          className="skill-level-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
        />
      </div>
      
      <p style={{ marginTop: '0.5rem', color: 'var(--neon-cyan)', fontWeight: '600' }}>
        {skill.level}%
      </p>
    </motion.div>
  );
}

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="gradient-text"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Tech Arsenal
        </motion.h2>

        <motion.p
          style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          💻 <em>I'm not a photographer, but I can picture us coding together</em>
        </motion.p>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
