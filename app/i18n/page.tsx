
'use client'
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
function MyCustomPage() {
 const {t} = useTranslation()
 const line1 = t("description.line1")
 console.log("here",line1)
    return (
      <>
        <LanguageSelector></LanguageSelector>
        <h1>{t("greeting")}</h1>
        <p>{line1}</p>
        </>
    



    
    );
  }
  export default MyCustomPage