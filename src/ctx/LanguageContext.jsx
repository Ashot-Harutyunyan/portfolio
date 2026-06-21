import { createContext, use, useState, useCallback } from 'react'
import { english, russia, armenian } from '../language.js'

const LanguageCTX = createContext(english)

export default function LanguageContext({ children }) {
    const [language, setLanguage] = useState(english)

    const handleLanguage = useCallback((lang) => {
        const map = { 'en-US': english, 'ru-RU': russia, 'hy-AM': armenian }
        if (map[lang]) setLanguage(map[lang])
    }, [])

    return <LanguageCTX value={{ language, handleLanguage }}>{children}</LanguageCTX>
}

export const useLanguage = () => use(LanguageCTX)