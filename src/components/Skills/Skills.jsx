import './skills.style.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills } from '../utils/constants.js'
import { fadeX, stagger, cardVariants } from '../utils/animation.js'
import { useLanguage } from '../../ctx/LanguageContext.jsx'

function Skills() {

    const [activeIndex, setActiveIndex] = useState(null)
    const { language } = useLanguage()

    return <section id="skills" className="section-skills">
        <div className="skills-content">
            <motion.h2 className='skills-title'
                variants={fadeX(-50, 0.8, 0.15)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {language.skillsTitle}
            </motion.h2>
            <motion.p className='skills-subTitle'
                variants={fadeX(-50, 0.8, 0.35)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {language.skillsSubTitle}
            </motion.p>
            <motion.div
                className='skills-content-card'
                variants={stagger(0.07)}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
            >
                {skills.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`skills-card ${item.name} ${activeIndex === index ? 'is-active' : ''}`}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        transition={{ delay: index * 0.05 }}
                        onTouchStart={() => setActiveIndex(index)}
                        onTouchEnd={() => setActiveIndex(null)}
                    >
                        <img src={`/${item.image}`} alt={`image ${item.name}`} />
                        <span>{item.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
}

export default Skills