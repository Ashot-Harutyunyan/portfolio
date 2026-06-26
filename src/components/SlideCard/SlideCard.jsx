import './slideCard.style.scss'
import { motion } from 'framer-motion'
import { fadeY } from '../utils/animation.js'
import { FaJsSquare, FaReact, FaSass, FaHtml5, FaCss3Alt, FaGitAlt, FaUnsplash, FaRegClock } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { TbApi } from 'react-icons/tb'
import { SiSwiper, SiRedux, SiFirebase, SiThemoviedatabase, SiReactquery, SiReactrouter } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import { IoLogoVercel } from 'react-icons/io5'
import { BiBook } from 'react-icons/bi'
import { GrSun } from 'react-icons/gr'
import { LiaExternalLinkAltSolid } from 'react-icons/lia'

const icons = {
    FaJsSquare, FaReact, FaSass, FaHtml5, FaCss3Alt, FaGitAlt,
    BsGithub, TbApi, SiFirebase, SiSwiper, SiRedux, SiThemoviedatabase,
    SiReactquery, SiReactrouter, DiReact, IoLogoVercel, FaUnsplash,
    FaRegClock, BiBook, GrSun,
}

function SlideCard({item, offset, onClick, onNext, onPrev, isAnimating, onAnimationComplete}) {

    const {img, alt, title, color, description, ArrayTechnologies, linkText, githubText, github, link} = item
    const isActive = offset === 0

    const getTransform = () => {
        const vw = window.innerWidth
        const near = vw < 640 ? vw * 0.72 : 300
        const far  = vw < 640 ? vw * 1.1  : 500

        switch(offset) {
            case 0:  return { x: 0,     y: 0,   scale: 1,    opacity: 1 }
            case -1: return { x: -near, y: 10,  scale: 0.82, opacity: 0.5 }
            case 1:  return { x: near,  y: 10,  scale: 0.82, opacity: 0.5 }
            case -2: return { x: -far,  y: 10,  scale: 0.65, opacity: 0.2 }
            case 2:  return { x: far,   y: 10,  scale: 0.65, opacity: 0.2 }
            default: return { opacity: 0 }
        }
    }

    const t = getTransform()

    const handleDragEnd = (e, info) => {
        const threshold = 80
        if (info.offset.x < -threshold) {
            onNext()
        } else if (info.offset.x > threshold) {
            onPrev()
        }
    }

    return (<motion.div
                className='slide-card'
                onClick={isAnimating ? undefined : onClick}
                drag={isActive && !isAnimating ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                dragSnapToOrigin
                onDragEnd={isActive ? handleDragEnd : undefined}
                animate={{ x: `calc(-50% + ${t.x}px)`, y: `calc(-50% + ${t.y}px)`, scale: t.scale, opacity: t.opacity }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                onAnimationComplete={isActive ? onAnimationComplete : undefined}
                style={{ zIndex: 100 - Math.abs(offset), border: `1px solid ${color}`, cursor: isActive ? 'grab' : 'pointer', pointerEvents: isAnimating ? 'none' : 'auto' }}
                whileDrag={{ cursor: 'grabbing' }}
            >
            <div className='container-project-image'>
                <img src={`/${img}.jpg`} alt={alt} draggable={false} />
            </div>

            <div>
                {isActive && (
                    <motion.div key={title} variants={fadeY(20, 0.35)} initial="hidden" whileInView="visible" viewport={{ amount: 0.3 }}>
                        <div className='container-title-description-technologies'>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <div className='container-technologies-icon'>
                                {ArrayTechnologies.map((technology, index) => {
                                    const Icon = icons[technology]
                                    return <span key={index}>
                            {Icon && <Icon className={technology} />}
                        </span>
                                })}
                            </div>
                        </div>
                        <div className='container-link-github'>
                            <a href={github} target='_blank' className='live-demo'><BsGithub /> {githubText}</a>
                            <a href={link} target='_blank' className='github-code'><LiaExternalLinkAltSolid /> {linkText}</a>
                        </div>
                    </motion.div>
                )}
            </div>
    </motion.div>)
}

export default SlideCard