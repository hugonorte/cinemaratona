import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import App from './App.tsx'
import Teste from './pages/teste/index.tsx';
import Homepage from './pages/homepage/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
