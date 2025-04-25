export default function AboutPage({ params }) {
    const locale = params.locale || 'en'
  
    const translations = {
      en: { title: 'About Us', description: 'We are a global company.' },
      ar: { title: 'معلومات عنا', description: 'نحن شركة عالمية.' },
    }
  
    return (
      <div className="container mt-5">
        ghggjhgjhgjhjhg
        <h1>{translations[locale].title}</h1>
        <p>{translations[locale].description}</p>
      </div>
    )
  }
  