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

function SlideCard({ item }) {

    const {img, alt, title, description, ArrayTechnologies, linkText, githubText, github, link} = item

    return (<motion.div className='slide-card'>
            <div className='container-project-image'>
                <img src={`/${img}.jpg`} alt={alt} draggable={false} />
            </div>

            <div className='card-content'>
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
            </div>
    </motion.div>)
}

export default SlideCard