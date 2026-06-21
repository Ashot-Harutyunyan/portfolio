export const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
export const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
export const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const toastConfig = {
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 2000,
    background: '#272727e2',
    color: '#fff',
    timerProgressBar: true,
}

export const linksSocialMedia  = [
    { href: 'https://www.linkedin.com/in/harutyunyan-ashot?original_referer=', label: 'SlSocialLinkedin', className: 'containerOne' },
    { href: 'https://github.com/Ashot-Harutyunyan', label: 'FiGithub', className: 'containerTwo' },
    { href: 'https://t.me/Ashot0497', label: 'LiaTelegram', className: 'containerThree' },
]

export const languageImage = [
    { src: '/United-Kingdom.png', alt: 'United Kingdom', argument: 'en-US' },
    { src: '/Russia.png', alt: 'Russia', argument: 'ru-RU' },
    { src: '/Armenia.png', alt: 'Armenia', argument: 'hy-AM' },
]

export const skills = [
    { image: 'html5.svg', name: 'HTML', },
    { image: 'css-3.svg', name: 'CSS', },
    { image: 'sass.svg', name: 'SASS', },
    { image: 'javascript.svg', name: 'JavaScript', },
    { image: 'git.svg', name: 'Git', },
    { image: 'github.svg', name: 'GitHub', },
    { image: 'react.svg', name: 'React', },
    { image: 'api-interface.svg', name: 'Working With API', },
    { image: 'react-router.svg', name: 'React Router', },
    { image: 'redux.svg', name: 'Redux Redux-Toolkit', },
    { image: 'react-query.svg', name: 'TanStack Query React', },
    { image: 'firebase.svg', name: 'Firebase', },
    { image: 'vercel.svg', name: 'Vercel', },
    { image: 'netlify.svg', name: 'Netlify', }
]

export const fields = [
    { name: 'name', type: 'text', icon: 'FaRegUser' },
    { name: 'phone', type: 'text', icon: 'FiPhone' },
    { name: 'email', type: 'email', icon: 'AiOutlineMail' },
    { name: 'message', type: 'textarea', icon: 'FiMessageSquare' },
]