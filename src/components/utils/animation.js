// main functions

export const fadeX = (x = 50, duration = 0.7, delay = 0) => ({
    hidden:  { opacity: 0, x },
    visible: { opacity: 1, x: 0, transition: { duration, ease: 'easeOut', delay } },
})

export const fadeY = (y = 50, duration = 0.8, delay = 0) => ({
    hidden:  { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: { duration, ease: 'easeOut', delay } },
})

export const stagger = (staggerChildren = 0.1, delayChildren = 0) => ({
    hidden:  {},
    visible: { transition: { staggerChildren, delayChildren } },
})

// nav

export const logoMotionProps = {
    initial:    { opacity: 0, x: -50 },
    animate:    { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
}

export const navItemVariants = {
    hidden:  { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } },
}

export const mobileMenuVariants = {
    closed: {
        opacity: 0, y: -20,
        transition: { when: 'afterChildren', staggerChildren: 0.03, staggerDirection: -1 },
    },
    open: {
        opacity: 1, y: 0,
        transition: { when: 'beforeChildren', staggerChildren: 0.05, delayChildren: 0.1 },
    },
}

export const mobileItemVariants = {
    closed: { opacity: 0, x: -20, transition: { duration: 0.15 } },
    open:   { opacity: 1, x: 0,   transition: { duration: 0.4 } },
}

export const languageMotionProps = (isMobile) => ({
    initial:    { opacity: 0, ...(isMobile ? { x: -15 } : { y: -15 }) },
    animate:    { opacity: 1, ...(isMobile ? { x: 0 }   : { y: 0 }) },
    transition: { duration: 0.7, delay: 0.7 },
})

// timeline

export const timelineLineVariants = {
    hidden:  { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 1, ease: 'easeOut' } },
}

export const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
        opacity: 1, x: 0,
        transition: { duration: 0.7, ease: 'easeOut', delay: index * 0.15 },
    }),
}

export const scaleVariants = {
    hidden:  { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

// bubbles

export const cardVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 400, damping: 17 } }
}