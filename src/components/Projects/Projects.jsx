import './projects.style.scss'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeY, fadeX } from '../utils/animation.js'
import { useLanguage } from '../../ctx/LanguageContext.jsx'
import SlideCard from '../SlideCard/SlideCard.jsx'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

function Projects() {

    const [active, setActive] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const { language } = useLanguage()

    const goTo = (updater) => {
        if (isAnimating) return
        setIsAnimating(true)
        setActive(updater)
        setTimeout(() => setIsAnimating(false), 350)
    }

    const nextSlide = () => goTo((prev) => (prev + 1) % language.projects.length)
    const prevSlide = () => goTo((prev) => prev === 0 ? language.projects.length - 1 : prev - 1)


    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") nextSlide()
            if (e.key === "ArrowLeft") prevSlide()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [active, isAnimating])


    return (<section id='projects' className='section-projects'>
        <div className='projects-titles'>
            <motion.h4 variants={fadeX(-50, 0.8, 0.15)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {language.projectSmallTitle}
            </motion.h4>
            <motion.h2 variants={fadeX(-50, 0.8, 0.35)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {language.projectsTitle}
            </motion.h2>
            <motion.p variants={fadeX(-50, 0.8, 0.55)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {language.projectsSubTitle}
            </motion.p>
        </div>

        <motion.div className="slider" variants={fadeY(20, 0.8)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
            {language.projects.map((item, index) => {
                const total = language.projects.length
                let offset = index - active
                if (offset > total / 2) offset -= total
                if (offset < -total / 2) offset += total
                return <SlideCard
                            key={index}
                            item={item}
                            offset={offset}
                            onClick={() => goTo(() => index)}
                            onNext={nextSlide}
                            onPrev={prevSlide}
                            isAnimating={isAnimating}
                />
            })}
        </motion.div>

        <div className="container-slider-buttons">
            <button onClick={prevSlide} className="slider-btn">
                <IoIosArrowBack size={20} />
            </button>
            <div className="slider-dots">
                {language.projects.map((elem, index) => (
                    <button
                        key={index}
                        className={active === index ? "dot active" : "dot"}
                        style={{background: active === index ? elem.color : 'rgba(255, 255, 255, 0.2)'}}
                        onClick={() => goTo(index)}
                    />
                ))}
            </div>
            <button onClick={nextSlide} className="slider-btn">
                <IoIosArrowForward size={20} />
            </button>
        </div>
    </section>)
}

export default Projects