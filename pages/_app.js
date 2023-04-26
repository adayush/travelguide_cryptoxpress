import { useState, createContext } from 'react'
import TestContext from '../lib/testContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [nameContext, setNameContext] = useState("default")

  return <TestContext.Provider value={{nameContext, setNameContext}}>
    <Component {...pageProps} />
  </TestContext.Provider>
}

export default MyApp
