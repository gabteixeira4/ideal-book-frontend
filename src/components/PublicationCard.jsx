
function PublicationCard({ titulo, texto }) {
  return (
    <div className="publicacao">
      <h3>{titulo}</h3>
      <p>{texto}</p>
    </div>
  )
}

export default PublicationCard
