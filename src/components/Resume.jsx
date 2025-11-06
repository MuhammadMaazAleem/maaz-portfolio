import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Muhammad_Maaz_Aleem_Resume.pdf';
    link.download = 'Muhammad_Maaz_Aleem_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/Muhammad_Maaz_Aleem_Resume.pdf', '_blank');
  };

  return (
    <section className="resume" id="resume" ref={ref}>
      <div className="container">
        <motion.h2
          className="gradient-text"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Resume
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
          📄 <em>Download my resume to learn more about my experience and skills</em>
        </motion.p>

        <motion.div
          className="resume-container"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="resume-card glass-card">
            <div className="resume-icon">
              📄
            </div>
            
            <h3>Muhammad Maaz Aleem</h3>
            <p className="resume-subtitle">Full-Stack Developer Resume</p>
            
            <div className="resume-details">
              <div className="resume-item">
                <span className="icon">🎓</span>
                <span>BSCS Student</span>
              </div>
              <div className="resume-item">
                <span className="icon">💼</span>
                <span>6 Months Experience</span>
              </div>
              <div className="resume-item">
                <span className="icon">💻</span>
                <span>React, Python, Blockchain</span>
              </div>
            </div>

            <div className="resume-buttons">
              <motion.button
                className="resume-btn primary"
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </motion.button>

              <motion.button
                className="resume-btn secondary"
                onClick={handleView}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                View Resume
              </motion.button>
            </div>

            <div className="resume-footer">
              <p>
                💡 <em>"Are you a recruiter? Because you've just found your perfect match!"</em>
              </p>
            </div>
          </div>

          {/* Resume Preview Section */}
          <motion.div
            className="resume-preview-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--neon-cyan)' }}>
                What's Inside
              </h4>
              <ul className="resume-highlights">
                <li>✨ Professional Summary</li>
                <li>🎓 Educational Background</li>
                <li>💼 Work Experience</li>
                <li>🛠️ Technical Skills</li>
                <li>🚀 Projects & Achievements</li>
                <li>📧 Contact Information</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
