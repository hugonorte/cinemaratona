import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import Teste from './pages/teste/index.tsx';
import Homepage from './pages/homepage/index.tsx';
import Movie from './pages/movie/index.tsx';
import Login from "./pages/login";
import Home from './pages/Home/index.tsx';
import Discover from './pages/discover/index.tsx';
import Social from './pages/social/index.tsx';
import Signup from './pages/signup/index.tsx';
import ForgotPassword from './pages/forgotPassword/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
    
      <Route path="/" element={<Home />} />
      <Route path="/teste" element={<Teste />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/login" element={<Login />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/social" element={<Social />} />
      <Route path="/filmes" element={<Homepage />} />
      <Route path="/signup" element={<Signup  />} />
      <Route path="/forgotPassword" element={<ForgotPassword /> } />
    </Routes>

    </BrowserRouter>
  </StrictMode>,
)
