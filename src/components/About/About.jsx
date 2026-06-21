import './about.style.scss'
import React from 'react'
import { motion } from 'framer-motion'
import { timelineLineVariants, timelineItemVariants, scaleVariants, fadeX, fadeY, stagger } from '../utils/animation.js'
import { useLanguage } from '../../ctx/LanguageContext.jsx'
import { SlLocationPin } from 'react-icons/sl'
import { MdOutlineWorkHistory } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'
import { PiStack } from 'react-icons/pi'

const icons = {SlLocationPin, MdOutlineWorkHistory, FaLaptopCode, PiStack}

function About() {

    const { language } = useLanguage()

    return <section id="about" className='section-about'>
        <div className="about-first-section">
            <div>
                <motion.div variants={fadeY(50, 0.8)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                    <h3 className='about-title'>{language.about.title}</h3>
                    <h2 className='about-subtitle'>
                        {language.about.subTitle}
                        <span>{language.about.subtitleSecondPart}</span>
                    </h2>
                </motion.div>
                <motion.p className='about-text' variants={fadeY(50, 0.8)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>{language.about.text}</motion.p>
                <motion.p className='about-second-text' variants={fadeY(50, 0.8)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>{language.about.secondText}</motion.p>
            </div>

            <div className='about-container-img-list'>
                <motion.img src="/developer.svg" alt="developer's image" className='developer-img' variants={fadeX(50, 0.7)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}/>
                <motion.ul variants={stagger(0.12, 0.2)} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
                    {language.about.list.map((item, index) => {
                        const Icon = icons[item.iconName]
                        return <motion.li key={index} variants={fadeX(-20, 0.5)}>
                            {Icon && <Icon />}
                            {item.text}
                        </motion.li>
                    })}
                </motion.ul>
            </div>
        </div>
        <div className="timeline-wrapper">
            <motion.h3 className="timeline-title" variants={fadeY(50, 0.8)} initial="hidden" whileInView="visible">
                {language.about.timelineTitle}
            </motion.h3>
            <div className="timeline">
                <motion.div
                    className="timeline-line" variants={timelineLineVariants} initial="hidden"
                    whileInView="visible" viewport={{ amount: 0.3 }}
                />
                {language.about.milestones.map((milestone, index) => {
                    const isEven = index % 2 === 0
                    return <motion.div key={index} className={`timeline-item ${isEven ? 'reverse' : ''}`}
                               custom={index} variants={timelineItemVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}
                            >
                            <motion.div className="timeline-dot" variants={scaleVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}/>
                            <motion.div className={`timeline-content ${isEven ? 'right' : 'left'}`}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }} transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                            >
                                <span className="timeline-year">{milestone.year}</span>
                                <h4 className="timeline-heading">{milestone.title}</h4>
                                <p className="timeline-description">{milestone.description}</p>
                            </motion.div>
                    </motion.div>
                })}
            </div>
        </div>
    </section>
}

export default About