import './projects.style.scss'
import { motion } from 'framer-motion'
import { fadeY, fadeX } from '../utils/animation.js'
import { useLanguage } from '../../ctx/LanguageContext.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import SlideCard from '../SlideCard/SlideCard.jsx'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Projects() {

    const { language } = useLanguage()

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

        <motion.div className="container-slider" variants={fadeY(20, 0.8)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
            <Swiper
                className="projects-swiper"
                modules={[EffectCoverflow, Navigation, Pagination]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                coverflowEffect={{rotate: 0, stretch: 50, depth: 180, modifier: 2.2, slideShadows: false}}
                speed={400}
                navigation={{nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom'}}
                pagination={{
                    el: '.swiper-pagination-custom',
                    clickable: true,
                    renderBullet: (index, className) => {
                        const color = language.projects[index]?.color || '#faebd7'
                        return `<span class="${className}" style="--bullet-color:${color}"></span>`
                    }
                }}
            >
                {language.projects.map((item, index) => {
                    return <SwiperSlide key={index} className='project-slide' style={{border: `1px solid ${item.color}`}}>
                        <SlideCard item={item} />
                    </SwiperSlide>
                })}
            </Swiper>

            <div className="slider-controls">
                <button className="swiper-button-prev-custom"><IoIosArrowBack size={20}/></button>
                <div className="swiper-pagination-custom"></div>
                <button className="swiper-button-next-custom"><IoIosArrowForward size={20}/></button>
            </div>
        </motion.div>
    </section>)
}

export default Projects