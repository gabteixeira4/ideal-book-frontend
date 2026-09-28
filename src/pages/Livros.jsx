import Header from '../components/Header.jsx'
import BookCard from '../components/BookCard.jsx'
import Footer from '../components/Footer.jsx'
import { livrosIniciais } from '../data/livros.js'
import '../styles/livros.css'

function Livros() {
  return (
    <>
      <Header />
      <div id="livros">
        {livrosIniciais.length === 0 ? (
          <p className="estado-vazio">Nenhum livro cadastrado por aqui.</p>
        ) : (
          livrosIniciais.map((livro) => (
            <BookCard
              key={livro.id}
              id={livro.id}
              titulo={livro.titulo}
              autor={livro.autor}
              sinopse={livro.sinopse}
              capa={livro.capa}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  )
}

export default Livros
