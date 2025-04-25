const page = async ( {params}) => {

  const variable = await params.locale;
  const variablesId = await params.id;
  const variableSLug = await params.slug;
    console.log("params:", variable);
    
    const translations = {
        en: { title: 'Dynamic Page', description: 'This is a dynamic page' },
        ar: { title: 'صفحة ديناميكية', description: 'هذه صفحة ديناميكية' },
        fr: { title: 'Page dynamique', description: 'Ceci est une page dynamique' },
      }
      

    if(!variable ){
        return
    }
  return (
    <div >
      <h1>{translations[params.locale].title}</h1>
      <h2>{translations[params.locale].description}</h2>
      <p>Locale: {variable}</p>

      <p>id: {variablesId}</p>

      <p>slug {variableSLug}</p>
    </div>
  );
};

export default page;
