import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../popup/index.css'
import Options from './Options.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Options />
  </StrictMode>,
)

