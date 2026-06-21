import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LanguageContext from './ctx/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <LanguageContext>
            <App />
      </LanguageContext>
  </StrictMode>,
)
