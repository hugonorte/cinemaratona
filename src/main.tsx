import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import Teste from './pages/teste/index.tsx';
import MovieSearch from './pages/search/index.tsx';
import Movie from './pages/movie/index.tsx';
import Home from './pages/Home/index.tsx';
import Discover from './pages/discover/index.tsx';
import Social from './pages/social/index.tsx';
import Design from './pages/design/index.tsx';
import Profile from './pages/profile/index.tsx';
import Friends from './pages/friends/index.tsx';
import Login from './pages/login/index.tsx';
import Register from './pages/register/index.tsx';
import { ProtectedRoute } from './services/ProtectedRoute.tsx';
import { AuthInitializer } from './services/AuthInitializer.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AuthInitializer>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/filmes" element={<MovieSearch />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/design" element={<Design />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/edit" element={<Profile />} />
        {/* Rotas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/social" element={<Social />} />
        </Route>
      </Routes>
    </AuthInitializer>
    </BrowserRouter>
  </StrictMode>,
)
