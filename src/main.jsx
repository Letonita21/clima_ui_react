import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClimaApp } from './components/ClimaApp'
import './styles/climaStyles.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClimaApp></ClimaApp>
  
  </StrictMode>
)
