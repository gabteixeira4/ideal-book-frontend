import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Livros from '../pages/Livros.jsx'
import LivroDetalhe from '../pages/LivroDetalhe.jsx'
import Escrita from '../pages/Escrita.jsx'
import NotFound from '../pages/NotFound.jsx'

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/livros" element={<Livros />} />
      <Route path="/livros/:id" element={<LivroDetalhe />} />
      <Route path="/escrita" element={<Escrita />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesMain
