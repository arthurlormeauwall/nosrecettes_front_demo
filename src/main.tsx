import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'
import { BrowserRouter } from 'react-router';
import { Home } from './app/pages/Home';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  </StrictMode>,
)
