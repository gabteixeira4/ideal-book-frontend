import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <main className="entrada">
        <h1>Bem-vindo ao Discover the Ideal Book</h1>
        <p>Como você quer entrar na plataforma hoje?</p>
        <Button onClick={() => navigate('/livros')}>Sou Leitor</Button>
        <Button onClick={() => navigate('/escrita')}>Sou Autor</Button>
      </main>
      <Footer />
    </>
  )
}

export default Home
