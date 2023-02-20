import './index.css'

import Home from './components/Home'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react'


function App({ }) {

  //useEffect to create the metaTags
  useEffect(() => {
    const metaTitle = document.createElement('meta')
    metaTitle.setAttribute('property', 'og:title')
    metaTitle.setAttribute('content', 'Daniel Mateu Portfolio')
    document.head.appendChild(metaTitle)

    const metaDescription = document.createElement('meta')
    metaDescription.setAttribute('property', 'og:description')
    metaDescription.setAttribute('content', 'Portfolio de Daniel Mateu')
    document.head.appendChild(metaDescription)

    const metaImage = document.createElement('meta')
    metaImage.setAttribute('property', 'og:image')
    metaImage.setAttribute('content', './src/assets/previsualizacion.png')
    document.head.appendChild(metaImage)
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
