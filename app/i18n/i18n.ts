import i18n from  'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init(
    {
        debug:true,
        fallbackLng : "en",
        returnObjects : true,
        resources:{
            en:{
                translation:{
                    greeting: "Hello, Welcome!",
                    description:{
                        line1: "Lean i18n with Saketh"
                    }
                }

            },
            fr:{
                translation:{
                    greeting: "Bonjour, Bienvenue",
                    description:{
                        line1:"Apprendre l'i18N avec Saketh"
                    }
                }
            },
            hi:{
                translation:{
                    greeting: "नमस्ते, स्वागत है!",
                    description:{
                        line1:"साकेत के साथ i18N सीखना"
                    }
                }
            },
            ar:{
                transalation:{
                    greeting: "مرحباً، مرحباً!",
                    description:{
                        line1:"تعلم I18N مع Saketh"
                    }
                }
            }

        }
    })

export default i18n;