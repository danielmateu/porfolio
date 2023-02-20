import React from 'react'
import ReactDOM from 'react-dom/client'
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Helmet>
      <meta property="og:title" content="Daniel Mateu Porfolio" />
      <meta property="og:description" content="Porfolio de Daniel Mateu" />
      <meta property="og:image" content="./src/assets/previsualizacion.webp" />
    </Helmet>

    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </>
)
