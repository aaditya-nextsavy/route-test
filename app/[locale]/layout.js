    import { Children } from "react";
import LanguageSwitcher from "../../Change";

    export default async function Home({ children, params }) {
        const { locale } = await params || {}  
      
        const translations = {
        en: { welcome: 'Welcome to our site!' },
        ar: { welcome: 'مرحبًا بكم في موقعنا!' },
        fr: { welcome: 'Welocomo tou oer sie!' },
        }
    
        const localeTranslations = translations[locale] || translations.en
        const direction = locale === 'ar' ? 'rtl' : 'ltr';
        

        return (
        <div className="container mt-5" dir={direction}>

            <div className="button-wrapp">
                <LanguageSwitcher/>
            </div>
            {children}
                
        </div>
        )
    }
    