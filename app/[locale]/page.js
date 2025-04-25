export default function Home({ params }) {
    const locale = params.locale || 'en'
  
    const translations = {
      en: { welcome: 'Welcome to our site!' },
      ar: { welcome: 'مرحبًا بكم في موقعنا!' },
    }
  
    return (
      <div className="container mt-5">
        <h1>{translations[locale].welcome}</h1>
      </div>
    )
  }
  