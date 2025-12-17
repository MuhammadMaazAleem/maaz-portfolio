import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineData = [
  {
    year: '2024 - Present',
    title: 'Full-Stack Developer',
    description: 'Building modern web applications with focus on blockchain technology and secure solutions.',
  },
  {
    year: '2024 - Present',
    title: 'Bachelor of Science in Computer Science',
    description: 'Currently pursuing BSCS degree with focus on software development and emerging technologies.',
  },
  {
    year: '2023 - Present',
    title: 'Full-Stack Development Journey',
    description: 'Gained 1.5 years of hands-on experience in full-stack development, working on diverse projects and delivering professional solutions.',
  },
];

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="gradient-text"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Profile Picture in About Section */}
            <div style={{
              float: 'left',
              marginRight: '2rem',
              marginBottom: '1rem',
              width: '150px',
              height: '150px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '3px solid var(--neon-purple)',
              boxShadow: '0 10px 30px rgba(184, 71, 255, 0.4)',
            }}>
              <img 
                src="/profile.jpg" 
                alt="Muhammad Maaz Aleem"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            <p style={{ marginBottom: '1.5rem' }}>
              Hey there! 👋 I'm <span className="highlight">Muhammad Maaz Aleem</span>, a passionate 
              Full-Stack Developer and <span className="highlight">BSCS undergraduate student</span>. 
              With 1.5 years of hands-on experience, I love turning ideas into elegant, functional applications 
              and creating seamless digital experiences.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              My journey in tech has been driven by curiosity and a constant desire to learn. 
              From building complex <span className="highlight">React applications</span> to 
              architecting robust <span className="highlight">backend systems</span> and exploring 
              <span className="highlight"> blockchain technology</span>, I thrive on solving challenging problems 
              and continuously expanding my skill set.
            </p>

            <div style={{
              padding: '1.5rem',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '15px',
              marginTop: '2rem',
            }}>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--neon-cyan)' }}>
                💡 "Let's merge our branches and create something beautiful"
              </p>
            </div>

            <p style={{ marginTop: '1.5rem' }}>
              Currently pursuing my <span className="highlight">Bachelor's degree in Computer Science</span>, 
              I'm constantly learning and applying new technologies. My 1.5 years of development experience 
              has taught me the importance of <span className="highlight">clean, maintainable code</span> and 
              following industry best practices. I'm excited to continue growing as a developer and 
              contributing to innovative projects.
            </p>

            <div style={{
              marginTop: '2rem',
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}>
              <div style={{
                padding: '0.8rem 1.5rem',
                background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))',
                borderRadius: '25px',
                fontSize: '0.95rem',
                fontWeight: '600',
              }}>
                � BSCS Student
              </div>
              <div style={{
                padding: '0.8rem 1.5rem',
                background: 'linear-gradient(135deg, var(--neon-purple), var(--neon-cyan))',
                borderRadius: '25px',
                fontSize: '0.95rem',
                fontWeight: '600',
              }}>
                🚀 Fast Learner
              </div>
              <div style={{
                padding: '0.8rem 1.5rem',
                background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-blue))',
                borderRadius: '25px',
                fontSize: '0.95rem',
                fontWeight: '600',
              }}>
                💻 1.5 Years Experience
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--neon-cyan)' }}>
              Career Journey
            </h3>
            
            <div className="timeline">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
