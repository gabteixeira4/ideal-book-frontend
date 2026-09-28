import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="nao-encontrada">
      <h1>404</h1>
      <p>Ops! Esta página não foi encontrada.</p>
      <Link to="/">
        <button>Voltar para o início</button>
      </Link>
    </main>
  )
}

export default NotFound
