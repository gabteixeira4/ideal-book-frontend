import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { livrosIniciais } from '../data/livros.js'


function LivroDetalhe() {
  const { id } = useParams()
  const livro = livrosIniciais.find((l) => l.id === Number(id))

  if (!livro) {
    return (
      <>
        <Header />
        <main className="nao-encontrada">
          <h1>Livro não encontrado</h1>
          <p>Não encontramos nenhum livro com este código.</p>
          <Link to="/livros">
            <button>Voltar para Livros</button>
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="entrada">
        {livro.capa ? (
          <img
            src={livro.capa}
            alt={`Capa do livro ${livro.titulo}`}
            style={{ maxWidth: '220px', borderRadius: '10px', marginBottom: '20px' }}
          />
        ) : null}
        <h1>{livro.titulo}</h1>
        <p><strong>Autor:</strong> {livro.autor}</p>
        <p><strong>Gênero:</strong> {livro.genero}</p>
        <p>{livro.descricao}</p>
        <Link to="/livros">
          <button>Voltar para Livros</button>
        </Link>
      </main>
      <Footer />
    </>
  )
}

export default LivroDetalhe
