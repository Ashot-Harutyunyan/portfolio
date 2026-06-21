import './contact.style.scss'
import Form from '../Form/form.jsx'
import { useLanguage } from '../../ctx/LanguageContext.jsx'
import { motion } from 'framer-motion'
import { fadeX, cardVariants } from '../utils/animation.js'
import { FiPhone } from 'react-icons/fi'

function Contact() {

    const { language } = useLanguage()

    return (<section id="contact" className="section-contact">
        <div className='contact-container-title-subTitle'>
            <motion.h2
                variants={fadeX(-50, 0.8, 0.15)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {language.contactTitle}
            </motion.h2>
            <motion.p
                variants={fadeX(-50, 0.8, 0.35)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                {language.contactSubTitle}
            </motion.p>
        </div>
        <motion.div className='contact-phone' variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
            <a href="tel:+374-99-02-35-36"><FiPhone /></a>
            <span>+374 99 02 35 36</span>
        </motion.div>
        <Form />
    </section>)
}

export default Contact