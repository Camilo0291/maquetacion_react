import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header'
import Galery from './Galery'
import Content from './Content'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header />
  <Galery />
  <Content />
  </StrictMode>,
)
