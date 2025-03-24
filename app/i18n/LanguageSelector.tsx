import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const languages = [
    {code:"en",name:"English"},
    {code:"fr",name:"French"},
    {code:"hi",name:"Hindi"},
    {code:"ar",name:"Arabic"
    }
]
 const LanguageSelector  = ()=>{
    const {i18n} = useTranslation()
    function changeLanguage(langCode:string){
        i18n.changeLanguage(langCode)
    }
    useEffect(()=>{
        console.log(i18n.language)
        document.body.dir = i18n.dir()
    },[i18n,i18n.language])
    return (
        <div>
        {
            languages.map(({code,name}:{code:string,name:string})=>{
                    return <button className={`cursor-pointer
                     m-0.5 p-1 rounded-lg border-2 
                     border-transparent ${code===i18n.language? ' bg-red-500 transition-colors hover:border-white':'bg-white transition-colors hover:border-red-500 text-black'}
                     `} key={code} onClick={()=>changeLanguage(code)}>{name}</button>
            })
        }
        </div>
    )
}
export default LanguageSelector