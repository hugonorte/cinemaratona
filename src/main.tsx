import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import Teste from './pages/teste/index.tsx';
import Homepage from './pages/homepage/index.tsx';
import Movie from './pages/movie/index.tsx';
import Home from './pages/Home/index.tsx';
import Discover from './pages/discover/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Homepage />} />
      <Route path="/teste" element={<Teste />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/home" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
