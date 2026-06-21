import './nav.style.scss'
import { useState, useRef } from 'react'
import { useLanguage } from '../../ctx/LanguageContext.jsx'
import { useOutsideClick } from '../hooks/useOutsideClick.js'
import { useActiveSection } from '../hooks/useActiveSection'
import { AnimatePresence, motion } from 'framer-motion'
import { languageImage } from '../utils/constants.js'
import { stagger, navItemVariants, mobileMenuVariants,
         mobileItemVariants, logoMotionProps, languageMotionProps } from '../utils/animation.js'
import { useMediaQuery } from '../hooks/useMediaQuery.js'

function Nav() {

    const [isOpen, setIsOpen] = useState(false)
    const [openLanguage, setOpenLanguage] = useState(false)
    const { language, handleLanguage } = useLanguage()
    const languageRef = useRef(null)
    const activeSection = useActiveSection()
    useOutsideClick(languageRef, () => setOpenLanguage(false), openLanguage)
    const isMobile = useMediaQuery('(max-width: 860px)')

    function toggleLanguage(argument) {
        if (!openLanguage) return setOpenLanguage(true)
        handleLanguage(argument)
        setTimeout(() => setOpenLanguage(false), 300)
    }

    const showMenu = !isMobile || isOpen

    return <nav className={isOpen ? 'open' : ''} style={{overflow: openLanguage ? 'visible' : 'hidden'}}>
        <div className='container-nav'>
            <div className='container-logo-burger-menu'>
                <motion.a href='#home' className='logo' {...logoMotionProps}>
                    {language.projectTitle}
                </motion.a>
                <div className={`burger-menu ${isOpen ? 'open' : ''}`}
                     onClick={() => setIsOpen(!isOpen)}>
                    <span /><span /><span />
                </div>
            </div>
            <AnimatePresence mode="wait">
                {showMenu && (
                    <menu>
                        <motion.ul
                            key="menu"
                            className='menu'
                            variants={isMobile ? mobileMenuVariants : stagger(0.1, 0.4)}
                            initial={isMobile ? 'closed' : 'hidden'}
                            animate={isMobile ? 'open'   : 'visible'}
                            exit={isMobile ? 'closed' : undefined}
                        >
                            {language.links.map((elem, index) => {
                                const sectionId = elem.href.slice(1)
                                return <motion.li
                                    key={index}
                                    className={`menu-link ${activeSection === sectionId ? 'active' : ''}`}
                                    variants={isMobile ? mobileItemVariants : navItemVariants}
                                >
                                    <a href={elem.href}>
                                        {elem.label}
                                        <span />
                                    </a>
                                </motion.li>
                            })}
                        </motion.ul>
                        <motion.div ref={languageRef}
                            className={'language' + `${openLanguage ? ' open' : ''}`} {...languageMotionProps(isMobile)}>
                            {languageImage.map(({src, alt, argument}, index) => (
                                <img key={src + index} src={src} alt={alt}
                                     style={{gridRow: language.url === argument ? '1/2' : 'auto'}}
                                     onClick={()=> toggleLanguage(argument)}
                                />
                            ))}
                        </motion.div>
                    </menu>
                )}
            </AnimatePresence>
        </div>
    </nav>
}

export default Nav