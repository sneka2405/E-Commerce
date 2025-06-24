import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Browser } from './browser.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <Browser />
  </StrictMode>,
)
