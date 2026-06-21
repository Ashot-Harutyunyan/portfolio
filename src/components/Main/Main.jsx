import './main.style.scss'
import About from '../About/About.jsx'
import Projects from '../Projects/Projects.jsx'
import Skills from '../Skills/Skills.jsx'
import Contact from '../Contact/Contact.jsx'

export default function Main() {
    return (<main>
        <About />
        <Projects/>
        <Skills />
        <Contact />
    </main>)
}