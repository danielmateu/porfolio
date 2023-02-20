import './index.css'

import Home from './components/Home'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'


function App({ }) {

  //useEffect to create the metaTags
  useEffect(() => {
    const metaTags = [
      { name: 'description', content: 'Este es el portfolio de Daniel Mateu Pardo' },
      { property: 'og:title', content: 'Portfolio de Daniel Mateu Pardo' },
      { property: 'og:description', content: 'Este es el portfolio de Daniel Mateu Pardo' },
      { property: 'og:image', content: 'assets/previsualizacion.png' },
      // { property: 'og:url', content: 'https://danielmateu.com' },
      { property: 'og:site_name', content: 'Daniel Mateu Portfolio' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'es_ES' },
      { property: 'og:locale:alternate', content: 'en_US' },
      //Author
      { name: 'author', content: 'Daniel Mateu Pardo' },
      //Published date
      { name: 'article:published_time', content: '2022-05-01' },
    ];

    metaTags.forEach(meta => {
      const element = document.querySelector(`meta[${meta.property ? 'property' : 'name'}="${meta.property || meta.name}"]`);

      if (element) {
        element.setAttribute('content', meta.content);
      }
      else {
        const newElement = document.createElement('meta');
        newElement.setAttribute(meta.property ? 'property' : 'name', meta.property || meta.name);
        newElement.setAttribute('content', meta.content);
        document.head.appendChild(newElement);
      }


    });
    // const metaTitle = document.createElement('meta')
    // metaTitle.setAttribute('property', 'og:title')
    // metaTitle.setAttribute('content', 'Daniel Mateu Portfolio')
    // document.head.appendChild(metaTitle)

    // const metaDescription = document.createElement('meta')
    // metaDescription.setAttribute('property', 'og:description')
    // metaDescription.setAttribute('content', 'Portfolio de Daniel Mateu')
    // document.head.appendChild(metaDescription)

    // const metaImage = document.createElement('meta')
    // metaImage.setAttribute('property', 'og:image')
    // metaImage.setAttribute('content', './src/assets/previsualizacion.png')
    // document.head.appendChild(metaImage)
  },[])

  return (
    <>
      <Helmet>
        {/* <meta property="og:title" content="Daniel Mateu Portfolio" />
        <meta property="og:description" content="Portfolio de Daniel Mateu" />
        <meta property="og:image" content="./src/assets/previsualizacion.png" /> */}
        <title>Daniel Mateu Portfolio</title>
      </Helmet>
      <Home />
    </>
  )
}


export default App
