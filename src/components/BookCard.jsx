import { Link } from 'react-router-dom'

function BookCard({ id, titulo, autor, sinopse, capa, onExcluir }) {
  function handleExcluirClick(e) {
    e.preventDefault()
    e.stopPropagation()
    onExcluir()
  }

  return (
    <section className="livro">
      <Link to={`/livros/${id}`} className="livro-link">
        {capa ? (
          <img src={capa} alt={`Capa do livro ${titulo}`} className="livro-capa" />
        ) : (
          <div className="livro-capa livro-capa-placeholder">Sem capa</div>
        )}
        <h2>{titulo}</h2>
        <p>{sinopse}</p>
        <p><strong>Autor:</strong> {autor}</p>
      </Link>
      {onExcluir && (
        <button className="livro-excluir" onClick={handleExcluirClick}>
          Excluir
        </button>
      )}
    </section>
  )
}

export default BookCard
