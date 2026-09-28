import { useState } from 'react'
import Button from './Button.jsx'


function PublicationForm({ onPublicar }) {
  const [titulo, setTitulo] = useState('')
  const [texto, setTexto] = useState('')

  function handlePublicar() {
    const tituloLimpo = titulo.trim()
    const textoLimpo = texto.trim()
    if (textoLimpo !== '') {
      onPublicar({
        titulo: tituloLimpo !== '' ? tituloLimpo : 'Sem título',
        texto: textoLimpo,
      })
      setTitulo('')
      setTexto('')
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Título da publicação"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="campo-titulo"
      />
      <textarea
        placeholder="Publique seu Texto aqui..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <br />
      <Button onClick={handlePublicar}>Publicar</Button>
    </div>
  )
}

export default PublicationForm
