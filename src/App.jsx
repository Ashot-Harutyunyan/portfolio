import './app.style.scss'
import ParticleCanvas from './components/ParticleCanvas/ParticleCanvas.jsx'
import Header from './components/Header/Header.jsx'
import Scrollback from './components/Scrollback/Scrollback.jsx'
import Main from './components/Main/Main.jsx'

function App() {
  return (<>
      <ParticleCanvas />
      <Header />
      <Main />
      <Scrollback />
  </>)
}

export default App