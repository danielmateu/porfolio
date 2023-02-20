import './index.css'

import Home from './components/Home'
import { Helmet } from 'react-helmet'


function App({ }) {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Daniel Mateu Portfolio" />
        <meta property="og:description" content="Portfolio de Daniel Mateu" />
        <meta property="og:image" content="./src/assets/previsualizacion.png" />
      </Helmet>
      <Home />
    </>
  )
}


export default App
