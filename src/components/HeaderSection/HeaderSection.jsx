import './headerSection.style.scss'
import { useState, useCallback } from 'react'
import { linksSocialMedia } from '../utils/constants.js'
import { fadeX, fadeY } from '../utils/animation.js'
import { useLanguage } from '../../ctx/LanguageContext.jsx'
import { motion } from 'framer-motion'
import cvPdf from '../../assets/Ashot-Harutyunyan-CV.pdf'
import { SlSocialLinkedin } from 'react-icons/sl'
import { FiGithub } from 'react-icons/fi'
import { LiaTelegram } from 'react-icons/lia'
import { LuDownload } from 'react-icons/lu'

const icons = { SlSocialLinkedin, FiGithub, LiaTelegram }

function HeaderSection() {

    const [isDownload, setIsDownload] = useState(false)
    const { language } = useLanguage()

    const handleDownloadClick = useCallback(() => {
        if (isDownload) return
        setIsDownload(true)
        setTimeout(() => setIsDownload(false), 1500)
    }, [isDownload])

    return <section id='home' className='home-content'>
        <div>
            <motion.h2 className='home-content-title' variants={fadeY(50, 0.8)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {language.home.title}<br/><span>{language.home.continuationTitle}</span>
            </motion.h2>
            <motion.p className='home-content-subTitle' variants={fadeY(50, 0.8)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {language.home.subTitle}
            </motion.p>

            <motion.div className='home-content-icon-link'
                        variants={fadeX(-20, 0.8, 0.3)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {linksSocialMedia.map((elem, index) => {
                    const Icon = icons[elem.label]
                    return <a href={elem.href} key={elem.href} target='_blank' className={`socialContainer ${elem.className}`}>
                        {Icon && <Icon className='socialSvg' />}
                    </a>
                })}
            </motion.div>

            <motion.a href={cvPdf} className='link-CV' download target="_blank"
                      variants={fadeX(-20, 0.8, 0.3)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                <button className={`button-download-CV ${isDownload ? 'active' : ''}`} onClick={handleDownloadClick}>
                    <span className='button-download-CV-text'>{language.home.buttonText} CV</span>
                    <span className='button-download-CV-icon'><LuDownload /></span>
                </button>
            </motion.a>
        </div>

        <motion.div className='container-photo' variants={fadeX(50, 0.7)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
            <img src='/myPhoto.png' alt='my photo'/>
            <div className='background-photo'></div>
        </motion.div>



    </section>
}

export default HeaderSection