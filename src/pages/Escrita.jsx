import { useState, useEffect } from 'react'
import Header from '../components/Header.jsx'
import PublicationForm from '../components/PublicationForm.jsx'
import PublicationCard from '../components/PublicationCard.jsx'
import BookCard from '../components/BookCard.jsx'
import Footer from '../components/Footer.jsx'
import { livrosIniciais } from '../data/livros.js'
import '../styles/escrita.css'
import '../styles/livros.css'

const CHAVE_STORAGE = 'discover-publicacoes'

function Escrita() {
  
  const [publicacoes, setPublicacoes] = useState(() => {
    const salvas = localStorage.getItem(CHAVE_STORAGE)
    return salvas ? JSON.parse(salvas) : []
  })


  const [meusLivros, setMeusLivros] = useState(livrosIniciais)

  
  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(publicacoes))
  }, [publicacoes])

  function handlePublicar(novaPublicacao) {
    setPublicacoes((anteriores) => [...anteriores, novaPublicacao])
  }

  function handleExcluirLivro(id) {
    setMeusLivros((anteriores) => anteriores.filter((livro) => livro.id !== id))
  }

  return (
    <>
      <Header titulo="Publish The Ideal Book" />

      <h2 className="titulo-secao">Nova Publicação</h2>
      <PublicationForm onPublicar={handlePublicar} />
      <div id="publicacoes">
        {publicacoes.length === 0 ? (
          <p className="estado-vazio">
            Nenhuma publicação ainda. Seja o primeiro a escrever!
          </p>
        ) : (
          publicacoes.map((publicacao, index) => (
            <PublicationCard
              key={index}
              titulo={publicacao.titulo}
              texto={publicacao.texto}
            />
          ))
        )}
      </div>

      <h2 className="titulo-secao">Meus Livros</h2>
      <div id="livros">
        {meusLivros.length === 0 ? (
          <p className="estado-vazio">Você ainda não cadastrou nenhum livro.</p>
        ) : (
          meusLivros.map((livro) => (
            <BookCard
              key={livro.id}
              id={livro.id}
              titulo={livro.titulo}
              autor={livro.autor}
              sinopse={livro.sinopse}
              capa={livro.capa}
              onExcluir={() => handleExcluirLivro(livro.id)}
            />
          ))
        )}
      </div>

      <Footer />
    </>
  )
}

export default Escrita
