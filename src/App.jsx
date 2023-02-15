import { Layout } from './components/Layout/Layout'
import PropTypes from 'prop-types'

import './index.css'
import { AppRouter } from './router/AppRouter'


function App({
  title,
  subtitle,
  
}) {


  return (

    <>
    <AppRouter/>
    </>
    
    
  )
}

// App.propTypes = {
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired
// }

// App.defaultProps = {
//   title: 'Esto va a ser mi Porfolio',
//   subtitle: 'A ver que sale de aquí'
// }

export default App
