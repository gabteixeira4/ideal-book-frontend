import { Link } from 'react-router-dom'


function Header({ titulo = "Discover The Ideal Book" }) {
  return (
    <header className="cabecalho">
      <Link to="/">
        <h1>{titulo}</h1>
      </Link>
    </header>
  )
}

export default Header
