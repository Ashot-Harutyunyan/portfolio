import './form.style.scss'
import React, { useState } from 'react'
import { useLanguage } from '../../ctx/LanguageContext.jsx'
import { fields, SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, toastConfig } from '../utils/constants.js'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { motion } from 'framer-motion'
import { stagger, fadeY } from '../utils/animation.js'
import { FaRegUser } from 'react-icons/fa'
import { FiPhone, FiMessageSquare } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { RiTelegram2Line } from 'react-icons/ri'

const icons = { FaRegUser, FiPhone, FiMessageSquare, AiOutlineMail }

function Form() {

    const { language } = useLanguage()
    const [formSubmit, setFormSubmit] = useState({ name: '', email: '', phone: '', message: '' })
    const [errors, setErrors] = useState({ name: false, phone: false, email: false, message: false })
    const [focused, setFocused] = useState({ name: false, phone: false, email: false, message: false })

    function handleChange(e) {
        const regex = /[^+\d]/
        const { name, value } = e.target
        if(name === 'phone' && value.match(regex)) return
        setFormSubmit((prev) => ({ ...prev, [name]: value }))
        if (value.trim()) {
            setErrors(prev => ({ ...prev, [name]: false }))
        }
    }

    function validateForm() {
        const newErrors = {}
        fields.forEach(({ name }) => {
            newErrors[name] = !formSubmit[name].trim()
        })
        setErrors(newErrors)
        return !Object.values(newErrors).some(Boolean)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if(!validateForm()) return
        const Toast = Swal.mixin({
            ...toastConfig,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer
                toast.onmouseleave = Swal.resumeTimer
            },
        })
        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, formSubmit, PUBLIC_KEY)
            Toast.fire({
                icon: 'success',
                title: language.contactSendTitle,
                text: language.contactSendText,
                confirmButtonColor: '#61dafb',
            })
            setFormSubmit({ name: '', email: '', phone: '', message: '' })
            setFocused({ name: false, phone: false, email: false, message: false })
        } catch (error) {
            console.error(error)
            Toast.fire({
                icon: 'error',
                title: language.contactSendErrorTitle,
                text: language.contactSendErrorText,
                confirmButtonColor: '#ff4d4f',
            })
        }
    }

    return <div className="contact-form">
            <div className='form-background'></div>
            <motion.form className='form' onSubmit={handleSubmit}
                         variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
                {fields.map(({ name, type, icon }, index) => {
                    const Icon = icons[icon]
                    return type === 'textarea' ?
                        <motion.div className='form-container' key={index} variants={fadeY(30, 0.5)}>
                            <div className={`contact-input ${focused[name] ? 'active' : ''} ${errors[name] ? 'error' : ''}`}>
                                {Icon && <Icon />}
                                <textarea
                                    name={name}
                                    className={focused[name] ? 'active' : ''}
                                    placeholder={language.contactForm[name]}
                                    autoComplete="off"
                                    value={formSubmit[name]}
                                    onChange={handleChange}
                                    onFocus={() => setFocused(prev => ({ ...prev, [name]: true }))}
                                    onBlur={() => !formSubmit[name] && setFocused(prev => ({ ...prev, [name]: false }))}
                                />
                                <span>{language.contactForm[name]}</span>
                            </div>
                            <p className={errors[name] ? 'visible' : 'notVisible'}>{language.formErrorMessage}</p>
                        </motion.div>
                    :   <motion.div className='form-container' key={index} variants={fadeY(30, 0.5)}>
                            <div className={`contact-input ${focused[name] ? 'active' : ''} ${errors[name] ? 'error' : ''}`}>
                                {Icon && <Icon />}
                                <input
                                    type={type}
                                    name={name}
                                    className={focused[name] ? 'active' : ''}
                                    placeholder={language.contactForm[name]}
                                    autoComplete="off"
                                    value={formSubmit[name]}
                                    onChange={handleChange}
                                    onFocus={() => setFocused(prev => ({ ...prev, [name]: true }))}
                                    onBlur={() => !formSubmit[name] && setFocused(prev => ({ ...prev, [name]: false }))}
                                />
                                <span>{language.contactForm[name]}</span>
                            </div>
                            <p className={errors[name] ? 'visible' : 'notVisible'}>{language.formErrorMessage}</p>
                        </motion.div>
                })}
                <button className='submit'>
                    <RiTelegram2Line />
                    <span>{language.contactForm.sendMessage}</span>
                </button>
        </motion.form>
    </div>
}

export default Form